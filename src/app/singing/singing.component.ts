import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-singing',
  templateUrl: './singing.component.html',
  styleUrls: ['./singing.component.css']
})
export class SingingComponent  {
  //public email='';
  //public password='';
  username='';
  password='';

  checkLogin!: boolean;
  singingForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
   
    console.log(this.username, '-', this.password);

    this.username === 'chaugiang' && this.password === 'giang'
      ? (this.checkLogin = true)
      : (this.checkLogin = false);

    if (this.checkLogin) {
      console.log('Dang nhap thanh cong');
    } else {
      console.log('Sai thong tin dang nhap');
    }
  }

}

