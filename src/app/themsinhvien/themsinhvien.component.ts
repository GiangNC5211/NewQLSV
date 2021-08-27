import { Component, OnInit, Input } from '@angular/core';
import { SinhvienService } from '../sinhvien.service';

@Component({
  selector: 'app-themsinhvien',
  templateUrl: './themsinhvien.component.html',
  styleUrls: ['./themsinhvien.component.css'],
})
export class ThemsinhvienComponent implements OnInit {
  @Input('name') namenew = '';
  @Input('GT') gendernew = '';
  @Input('SN') dateofbirthnew = '';
  @Input('add') addnew = '';
  @Input('DC') PlaceofBirthnew = '';
  @Input('sinhvien') sinhvien: any[] = [];
  Showaddsinhvien = false;

  constructor(
    private service: SinhvienService
    ) {}

  ngOnInit(): void {}

  addsinhvien() {
    const student = {
      Name: this.namenew,
      gender: this.gendernew,
      dateofbirth: this.dateofbirthnew,
      add: this.addnew,
      PlaceofBirth: this.PlaceofBirthnew,
      Money: true,
    };
    this.service.adds.next(student);
  }
}
