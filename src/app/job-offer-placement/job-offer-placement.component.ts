import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-job-offer-placement',
  templateUrl: './job-offer-placement.component.html',
  styleUrls: ['./job-offer-placement.component.css']
})
export class JobOfferPlacementComponent implements OnInit {

  model: any = {}
  jobType = 'job';

  constructor(private _companiesService: CompaniesService) { }

  submitOffer() {
    this.model.jobType = this.jobType;
    this._companiesService.addJobOffer(this.model)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  setJobType(jobType) {
    this.jobType = jobType;
  }

  ngOnInit() {
  }

}
