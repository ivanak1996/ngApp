import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private _companiesUrl = "http://localhost:3000/api/companies";
  private _jobOfferUrl = "http://localhost:3000/api/jobOffer";
  private _jobOffersUrl = "http://localhost:3000/api/jobOffers";
  private _jobOfferInfoUrl = "http://localhost:3000/api/jobOffer";
  private _applyForJobUrl = "http://localhost:3000/api/apply";
  private _jobOffersForCompanyUrl = "http://localhost:3000/api/jobOffersForCompany";
  private _companyUrl = "http://localhost:3000/api/company";

  constructor(private http: HttpClient) { }

  applyForJob(id) {
    var data = JSON.parse(sessionStorage['user']);
    return this.http.post<any>(this._applyForJobUrl, {'username' : data.username, 'jobId' : id});
  }

  getCompanies(){
    return this.http.get<any>(this._companiesUrl);
  }

  getCompany(name){
    return this.http.get<any>(`${this._companyUrl}/${name}`);
  }

  getJobOffers(){
    return this.http.get<any>(this._jobOffersUrl);
  }

  getJobOffersForCompany(name){
    return this.http.get<any>(`${this._jobOffersForCompanyUrl}/${name}`);
  }

  getJobOffer(id){
    return this.http.get<any>(`${this._jobOfferInfoUrl}/${id}`);
  }

  addJobOffer(data) {
    var jsonData = JSON.stringify(data);
    console.log(jsonData);
    return this.http.post<any>(this._jobOfferUrl, data);
  }

}
