import {Component, Input, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";
import {HolidaysService} from "./services/holidays.service";
import {MatTableDataSource} from '@angular/material/table';
import {Holiday} from "./models/holiday";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holiday-front';
  @ViewChild('paginator') paginator: MatPaginator;
  displayedColumns = ['FullName', 'From', 'Period', 'action']
  dataSource!: MatTableDataSource<Holiday>;
  @Input() item = null;

  constructor(private http: HttpClient, public dialog: MatDialog, private holidayService: HolidaysService) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Holiday>()
    this.holidayService.getHolidays().then((tableau) => {
      this.dataSource.data = tableau;
      console.log(this.dataSource.data)
    });
  }



  getDayDiff(startDate: Date, endDate: Date): any {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let days = Math.floor((end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24);
    return days;
  }

  onAdd() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '40%',
      data: 'Add'


    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }

  cancel(id: number) {
    this.holidayService.delete(id).subscribe(() => {
      this.ngOnInit();
    })

  }

  edit(id: number) {

    this.holidayService.getHolidayById(id).then((res)=>{
      const dialogRef = this.dialog.open(UserDialogComponent, {
        width: '40%',
        data: res,

      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      })
    })

  }



}
