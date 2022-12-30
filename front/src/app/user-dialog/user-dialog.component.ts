import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HolidaysService} from "../services/holidays.service";
import {Holiday} from "../models/holiday";


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  userFormGroup: FormGroup;
  form: any;
  currentID: any;
  itemGlobal: any;

  constructor(private holidayService: HolidaysService, public dialogRef: MatDialogRef<UserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    if(this.data==null) {this.initForm()}
    else {
      this.initForm1(this.data)

    }


  }

  initForm(): void {
    this.userFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.min(8)]),
      date_deb: new FormControl('', [Validators.required]),
      date_fin: new FormControl('', [Validators.required]),

    })

  }

  initForm1(item: Holiday): void {
    this.userFormGroup = new FormGroup({
      id:new FormControl(item.id),
      firstName: new FormControl(item.firstName),
      lastName: new FormControl(item.lastName),
      email: new FormControl(item.email),
      tel: new FormControl(item.tel),
      date_deb: new FormControl(item.date_deb),
      date_fin: new FormControl(item.date_fin),


    })

  }

  onSumbit(): void {
    this.holidayService.addHoliday(this.userFormGroup.value).subscribe((response) => {
      this.dialogRef.close();
    })
  }

  onCancel() {
    this.dialogRef.close();
  }

  onEdit() {
    this.holidayService.update(this.userFormGroup.value.id,this.userFormGroup.value).subscribe((res)=>{
      this.dialogRef.close()
    })

  }
}
