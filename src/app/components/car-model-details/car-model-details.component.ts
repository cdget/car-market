import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { ModelDetails } from '../../interfaces/interfaces';
import { CarsService } from '../../services/api-services';
import { QuotePopupComponent } from '../quote-popup/quote-popup.component';

@Component({
  selector: 'car-model',
  templateUrl: './car-model-details.component.html',
  styleUrls: [ './car-model-details.component.css' ]
})
export class ModelDetailsComponent implements OnInit {
  modelDetails: ModelDetails[] =[];

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getModelDetails();
  }

  openPopup(title:string) {
    this.dialog.open(QuotePopupComponent, {
      width: '100%',
      height:'600px',
      data: { price: 1000, model: title },
    });
  }

  getModelDetails(): void {
    
    const id = this.route.snapshot.paramMap.get('id')!;
    this.carsService.getModelDetails(id)
      .subscribe(model => this.modelDetails = model);
  }

  goBack(): void {
    this.location.back();
  }

}
