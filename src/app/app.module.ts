import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SingingComponent } from './singing/singing.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ThemsinhvienComponent } from './themsinhvien/themsinhvien.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SinhvienService } from './sinhvien.service';
@NgModule({
  declarations: [AppComponent, SingingComponent, SinhvienComponent, HomeComponent, ThemsinhvienComponent],
  imports: [BrowserModule,FormsModule, RouterModule,ReactiveFormsModule, BrowserAnimationsModule, AppRoutingModule,TooltipModule.forRoot(),ButtonsModule ],
  providers: [SinhvienService,],
  bootstrap: [AppComponent],
})
export class AppModule {}
