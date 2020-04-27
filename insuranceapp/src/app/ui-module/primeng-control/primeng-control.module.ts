import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports: [
    FileUploadModule
  ]
})
export class PrimengControlModule { }
