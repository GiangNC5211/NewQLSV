import{NgModule}from'@angular/core';
import{Routes, RouterModule}from'@angular/router';
import { HomeComponent } from './home/home.component';
import { SingingComponent } from './singing/singing.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { ThemsinhvienComponent } from './themsinhvien/themsinhvien.component';
const approutes: Routes =[
    {path: 'sinhvien', component: SinhvienComponent},
    {path: 'singing', component:SingingComponent},
    {path: 'home', component: HomeComponent},
    { path: 'themsinhvien', component: ThemsinhvienComponent},
    //{ path: 'thongtinsinhvien', component:}
];
@NgModule ({
imports: [RouterModule.forRoot(approutes) ],
exports:  [RouterModule],
} 

)
export class AppRoutingModule {}
