import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  private sub: any;
  companyName: String;

  companyInfo;
  companyJobOffers;

  constructor(private _route: ActivatedRoute, private _companyService: CompaniesService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.companyName = params['name'];
    });

    this._companyService.getCompany(this.companyName)
    .subscribe(
      res => {
        this.companyInfo = res;
        console.log(this.companyInfo);
      }
      ,
      err => console.log(err)
    );

    this._companyService.getJobOffersForCompany(this.companyName)
    .subscribe(
      res => {
        this.companyJobOffers = res;
        console.log(this.companyJobOffers);
      },
      err => console.log(err)
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
