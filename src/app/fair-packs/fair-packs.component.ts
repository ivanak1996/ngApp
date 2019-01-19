import { Component, OnInit } from '@angular/core';
import { FairPacksService } from '../fair-packs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fair-packs',
  templateUrl: './fair-packs.component.html',
  styleUrls: ['./fair-packs.component.css']
})
export class FairPacksComponent implements OnInit {

  fairPacks = [];
  constructor(private _fairPackService: FairPacksService,
    private _router: Router) { }

  ngOnInit() {
    this._fairPackService.getFairPackages()
    .subscribe(
      res => this.fairPacks = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401){
            this._router.navigate(['/login']);
          }
        }
      }
    )
  }

}
