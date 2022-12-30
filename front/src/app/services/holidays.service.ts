import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Holiday} from "../models/holiday";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json', 'Access-Control-Allow-Origin': '*'})
}

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private httpClient: HttpClient) {


  }

  getHolidays(): Promise<any> {
    return this.httpClient.get<Holiday[]>("/server/holiday/findAll").toPromise();
  }

  addHoliday(holiday:Holiday): Observable<any>{
    return this.httpClient.post('/server/holiday/createHoliday', holiday);
  }

  delete(id:number): Observable<any>{
    return this.httpClient.delete(`/server/holiday/deleteHoliday/${id}`);
  }

  getHolidayById(id:number) : Promise<any> {
    return this.httpClient.get<Holiday>(`/server/holiday/getHoliday/${id}`).toPromise();
  }

  update(id:number,holiday:Holiday):Observable<any> {
    return this.httpClient.put(`/server/holiday/update/${id}`, holiday);
  }

}
