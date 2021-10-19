import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-al-addition',
  templateUrl: './al-addition.component.html',
  styleUrls: ['./al-addition.component.css']
})
export class AlAdditionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(AlDialogElements);
  }
}

@Component({
  selector: 'al-addition-dialogue-elements',
  templateUrl: 'al-addition-dialogue-elements.html',
})
export class AlDialogElements {}