import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { FairPacksService } from './fair-packs.service';
import { FairPacksComponent } from './fair-packs/fair-packs.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesService } from './companies.service';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { JobOfferPlacementComponent } from './job-offer-placement/job-offer-placement.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FairPacksComponent,
    CompaniesComponent,
    CurriculumVitaeComponent,
    JobOffersComponent,
    JobOfferPlacementComponent,
    JobDetailsComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    AngularFontAwesomeModule,
    AngularFileUploaderModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    FairPacksService,
    CompaniesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
