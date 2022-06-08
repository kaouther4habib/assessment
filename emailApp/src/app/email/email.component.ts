import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  Validators
} from "@angular/forms";
import {
  HttpService
} from '../http.service';
import {
  NgForm
} from '@angular/forms';
import {
  SidebarComponent
} from '../sidebar/sidebar.component';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  buttionText = "Submit";
  public selected: any;

  // define form controls
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  subjectFormControl = new FormControl("", [
    Validators.required,

  ]);

  contentFormControl = new FormControl("", [
    Validators.required,
  ]);
  genderFormControl = new FormControl("", [
    Validators.required,

  ]);

  // Array that contain the radio value that will show and the email template
  emailtype: Array < any > = [{
      type: 'Template1',

    },
    {
      type: 'Template2',

    },

  ];
//isSubmitted to show the div to inform the user
  isSubmitted = false;
  content: String;
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    this.content = "vv"
    if (!form.valid) {
      return false;
    } else {
      return this.content = form.value.selected;
    }
  }
  constructor(public http: HttpService) {}

  // to test the urls if every thing is going okay
  ngOnInit() {
    console.log(this.http.test);
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  // error message in case an empty email or an invalid email
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


// the fonction that will send the email data
  send() {
    alert("email sent")

    this.buttionText = "Submiting...";
    let email = {
      subject: this.subjectFormControl.value,
      email: this.emailFormControl.value,
      content: this.content
    }
    this.http.sendEmail("http://localhost:3000/email",email).subscribe(
      data => {
        let res: any = data;
        console.log(
          ` ${email.email}`
        );
      },
      err => {
        console.log(err);

        this.buttionText = "Submit";
      }, () => {

        this.buttionText = "Submit";
      }
    );
  }



}
