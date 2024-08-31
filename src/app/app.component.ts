import { Component } from '@angular/core';
import { DummydisplayComponent } from './dummydisplay/dummydisplay.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DummyDialogDisplayComponent } from './dummy-dialog-display/dummy-dialog-display.component';
import { MatDialog } from '@angular/material/dialog';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1';
  panelOpenState = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource :PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  
  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog) {}
  openBottomSheet(): void {
    this._bottomSheet.open(DummydisplayComponent);
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DummyDialogDisplayComponent, {
      width:'500px',
      height:'300px',
      disableClose:true,
      data: {name: 'ABC', Phone:799300333 },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
}



}



