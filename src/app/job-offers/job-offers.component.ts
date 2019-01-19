import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {

  jobOffers = [];
  filteredJobOffers = [];

  company = '';
  title = '';
  jobCheckbox = true;
  internshipCheckbox = true;

  constructor(private _companyService: CompaniesService,
    private _router: Router) { }

  search(){

      this.filteredJobOffers = [];
      
      for(let offer of this.jobOffers) {
        if(this.company === '' || offer.companyName.toLowerCase().indexOf(this.company.toLowerCase()) != -1) {
          if(this.title === '' || offer.title.toLowerCase().indexOf(this.title.toLowerCase()) != -1) {
            if(offer.jobType === 'internship' && this.internshipCheckbox || offer.jobType === 'job' && this.jobCheckbox) {
              this.filteredJobOffers.push(offer);
            }
          }
        }
      }
  
  }

  redirectToJobOffer(id) {
    this._router.navigate(['/job', id]);
  }

  redirectToCompany(name) {
    this._router.navigate(['/company', name]);
  }

  convertDateTime(src) {
    return moment(src).format('MMMM Do YYYY');
  }

  ngOnInit() {
    this._companyService.getJobOffers()
    .subscribe(
      res => this.filteredJobOffers = this.jobOffers = res,
      err => console.log(err)
    );
  }

}
