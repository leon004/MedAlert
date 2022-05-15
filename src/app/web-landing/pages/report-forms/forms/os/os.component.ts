import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import states from '../../../../data/estados.json';
import statesCities from '../../../../data/estados-municipios.json';


import { CustomValidators } from "ng2-validation";
import { ReportService } from 'src/app/core/report/report.service';
import { Report } from 'src/app/core/models/Report';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmModalComponent } from 'src/app/web-landing/shared/confirm-modal/confirm-modal.component';

const password = new FormControl("", Validators.required);
const confirmPassword = new FormControl("", CustomValidators.equalTo(password));


@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss']
})
export class OsComponent implements OnInit {
  public states = states;
  public statesCities = statesCities;
  isSending = false;
  hasSendIt = false;
  cities = []
  public form: FormGroup;
  constructor(private fb: FormBuilder,private reportService:ReportService,private snackBar: MatSnackBar,private confirmDialog: MatDialog) {}


  onStateSelected(e){
    console.log(e)
    this.cities = statesCities[e.value]
  }

  onSubmit(event){

    if (this.form.valid) {
      this.doActionWithConfirmation("sendFormData");
    }else{
      this.snackBar.open("Asegurate de llenar el formulario correctamente",null,{
        duration: 3000
      })
    }


  }
  save(){
    this.isSending = true;
    let reportData =  this.form.controls;

    let report:Report = {
      subject: reportData["subject"].value,
      city: reportData["city"].value,
      state:  reportData["state"].value,
      suburb: reportData["suburb"].value,
      description: reportData["description"].value,
      reporter: {
        relWithVictim: reportData["relWithVictim"].value,
      },
      victim:{
        name:reportData["victimName"].value,
        lastName:reportData["victimLastName"].value,
        age:reportData["victimAge"].value,
        gender:reportData["victimGender"].value
      },
      category:"OS",     
      anonymity:true   
    }


    let jsonReport = JSON.stringify(report);
    console.log(jsonReport)

    const formData: FormData = new FormData();
    formData.append("data", jsonReport);
    formData.append('file',   this.form.get('evidence').value);
    
    this.reportService.postReport(formData).subscribe(res=>{
      this.hasSendIt = true;
      this.isSending = false;
    },error =>{
      this.snackBar.open("Ha ocurrido un error, intenta de nuevo mas tarde",null,{
        duration: 3000
      })
    });
          
    
    // this.form.reset();

  }

      //MODAL DE CONFIRMACIÓN
      doActionWithConfirmation(action: string) {
        let title = "";
        if (action === "sendFormData") {
          title = "Confirmar envio de formulario"
        }
    
          const confirmDialogRef = this.confirmDialog.open(ConfirmModalComponent, {
            width: '350px',
            data: { action, message: "¿Estas seguro que deseas enviar tu reporte?", title }
          });
    
          confirmDialogRef.afterClosed().subscribe(result => {
            if(result){ //If it receives result (only happens when Accept in comfirm-modal dialog)
                this.save();
              }
          });
      }


  uploadFile(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      evidence: file
    });
    this.form.get('evidence').updateValueAndValidity()
  }

  ngOnInit() {
    this.form = this.fb.group({
      subject: [
        null,
        Validators.compose([
          Validators.required,
        
        ])
      ],
      victimName: [
        null,
        Validators.compose([
          Validators.required,
        
        ])
      ],
      victimLastName: [
        null,
        Validators.compose([
          Validators.required,
         
        ])
      ],
      victimAge: [
        null,
        Validators.compose([Validators.required])
      ],
      victimGender: [
        null,
        Validators.compose([
          Validators.required
        ])
      ],
      description: [
        null,
        Validators.compose([Validators.required])
      ],
      relWithVictim: [
        null,
        Validators.compose([Validators.required])
      ],
      state: [
        null,
        Validators.compose([Validators.required])
      ],
      city: [
        null,
        Validators.compose([Validators.required])
      ],
      suburb: [
        null,
        Validators.compose([Validators.required])
      ],
      evidence: [null], 

    });
  }

  
}
