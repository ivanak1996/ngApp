import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  private sub: any;
  id: String;
  offer = {};

  constructor(private _route: ActivatedRoute, private _companyService: CompaniesService) { }

  applyForJob() {
    this._companyService.applyForJob(this.id).subscribe(
      res => console.log('ok'),
      err => console.log(err)
    );;
  }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.id = params['id'];
   });
   this._companyService.getJobOffer(this.id)
    .subscribe(
      res => this.offer = res,
      err => console.log(err)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
