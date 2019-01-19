import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  filteredCompanies = [];

  city: String = '';
  companyName: String = '';

  constructor(private _companiesService: CompaniesService) { }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  applyFilter() {

    this.filteredCompanies = [];
    
    for(let company of this.companies) {
      for(let selectedItem of this.selectedItems) {
        if((selectedItem.item_text === company.company.expertise)
            && (this.city === '' || -1 !== company.company.city.toLowerCase().indexOf(this.city.toLowerCase()))
            && (this.companyName === '' || -1 !== company.company.name.toLowerCase().indexOf(this.companyName.toLowerCase()))) {
          this.filteredCompanies.push(company);
        }
      }
    }

  }

  ngOnInit() {

    this.dropdownList = [
      { item_id: 1, item_text: 'IT' },
      { item_id: 2, item_text: 'Mechanical Engineering' },
      { item_id: 3, item_text: 'Architecture' },
      { item_id: 4, item_text: 'Management' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'IT' },
      { item_id: 4, item_text: 'Management' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this._companiesService.getCompanies()
    .subscribe(
      res => this.filteredCompanies = this.companies = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          /*if (err.status === 401){
            this._router.navigate(['/login']);
          }*/
        }
      }
    )
  }

}
