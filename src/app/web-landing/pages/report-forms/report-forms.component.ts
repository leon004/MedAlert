import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { CustomValidators } from "ng2-validation";

const password = new FormControl("", Validators.required);
const confirmPassword = new FormControl("", CustomValidators.equalTo(password));

@Component({
  selector: "app-form-validation",
  templateUrl: "./report-forms.component.html",
  styleUrls: ["./report-forms.component.scss"]
})
export class  ReportFormsComponent implements OnInit {

ngOnInit(){
  
}

}