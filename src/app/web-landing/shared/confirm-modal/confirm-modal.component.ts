import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  message =""
  number =""
  action =""
  title = ""


  constructor(
    public dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: MatSnackBar) {}


  ngOnInit(): void {
    this.message = this.data.message
    this.number = this.data.number
    this.action = this.data.action
    this.title = this.data.title
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  miFormulario = new FormGroup({
    comment: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  onAccept() {

      this.dialogRef.close({ doAction:true })
  }
}




