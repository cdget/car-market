import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Model } from '../../interfaces/interfaces';
import { CarsService } from '../../services/api-services';

@Component({
  selector: 'car-model',
  templateUrl: './car-model.component.html',
  styleUrls: [ './car-model.component.css' ]
})
export class ModelComponent implements OnInit {
  title = this.route.snapshot.paramMap.get('id')!;
  models: Model[] = [];

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getModel();
  }

  getModel(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.carsService.getModel(id)
      .subscribe(models => this.models = models);
  }

  goBack(): void {
    this.location.back();
  }

}
