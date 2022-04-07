import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-forms';

  formdata:any;

  constructor(){

  }

  ngOnInit(): void {
    this.formdata = new FormGroup(
      {
        email:new FormControl("", Validators.compose([Validators.required, Validators.email])),
        password:new FormControl("", Validators.required)
      }
    );
  }
}
