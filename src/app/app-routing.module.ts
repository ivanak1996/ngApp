import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FairPacksComponent } from './fair-packs/fair-packs.component';
import { AuthGuard } from './auth.guard';
import { CompaniesComponent } from './companies/companies.component';
import { JobOfferPlacementComponent } from './job-offer-placement/job-offer-placement.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'fairPacks',
    component: FairPacksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'jobOpening',
    component: JobOfferPlacementComponent
  },
  {
    path: 'jobs',
    component: JobOffersComponent
  },
  {
    path: 'job/:id',
    component: JobDetailsComponent
  },
  {
    path: 'company/:name',
    component: CompanyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
