import { Component, OnInit } from '@angular/core';
import { StudentData } from '../models/student.model';
import { SinhvienService } from '../sinhvien.service';
@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent  {
  
  sinhvien: StudentData[] = [];

  constructor(
    private service: SinhvienService
  ) { }

  ngOnInit(): void {

    this.service.fetchApiStudents().subscribe(list => this.service.students$$.next(list));

    this.service.students$.subscribe(list => this.sinhvien = list);
  }
  
  removeSinhvien(STT: number | undefined) {

    this.service.remove$$.next(STT);
  };

}


