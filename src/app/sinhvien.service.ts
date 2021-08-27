import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject, Subscription } from 'rxjs';
import { StudentData } from './models/student.model';
import { SAMPLE_STUDENTS } from './models/student.sample';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SinhvienService {

  
  _students: StudentData[] = [];


  studentss = new BehaviorSubject<StudentData[]>([]);
  students = this.studentss.asObservable().pipe(

    tap(list => this._students = list)
  );

  adds = new Subject<StudentData>();
  add = this.adds.asObservable().pipe(
    tap(student => this.addStudentHandler(student))
  );

  removee = new Subject<number>();
  remove = this.removee.asObservable().pipe(
    tap(id => this.removeStudentHandler(id))
  )

  updates = new Subject<{id: number, student: StudentData}>();
  update = this.updates.asObservable().pipe(
    tap(event => {
      const {id, student} = event;
      this.updateStudentByIdHandler(id, student);
    })
  )

  constructor() {
    this.add.subscribe();
    this.remove.subscribe();
    this.update.subscribe();
  }


  fetchApiStudents() {

    return this.length ? of(this.students) : of(SAMPLE_STUDENTS);
  }
  
  getStudentById(id: number) {
    return this.students.find((student: { STT: number; }) => student.STT = id);
  }

  get studentsa() {
    return this.studentss.value;
  }
  
  get length() {
    return this.studentsa.length;
  }

  addStudentHandler(student: StudentData) {
    const id = this.length + 1;
    const studentWithId: StudentData = Object.assign(student, {STT: id});
    this.studentss.next([...this.studentsa, studentWithId]);
  }
  
  removeStudentHandler(id: number) {
    const list = this.students.filter(student => student.STT !== id);
    this.studentss.next(list);
  }
  
  updateStudentByIdHandler(id: number, newStudent: StudentData) {
    const list = this.students.map(oldStudent => {
      if(oldStudent.STT !== id) {
        return oldStudent;
      }
      return newStudent;
    });
    this.studentss.next(list);
  }
}
