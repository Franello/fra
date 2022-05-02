import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './home/details/details.component';
import { LocalStorageService } from './services/local-storage.service';
import { DetailService } from './services/detail.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,  
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,


      
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA], 
  providers: [LocalStorageService,DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
