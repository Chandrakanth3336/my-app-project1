import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dummy-dialog-display',
  templateUrl: './dummy-dialog-display.component.html',
  styleUrls: ['./dummy-dialog-display.component.css']
})
export class DummyDialogDisplayComponent {
   
  constructor(
    public dialogRef: MatDialogRef<DummyDialogDisplayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,)
    {}
    onNoClick(): void {
      this.dialogRef.close('aaa');
    }
    onAddClick(): void {
      this.dialogRef.close(123);
    }
}
