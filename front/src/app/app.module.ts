import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatPaginatorModule} from '@angular/material/paginator';


import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
  declarations: [AppComponent, UserDialogComponent],
  imports: [

    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    MatDialogModule,
    MatDatepickerModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
