import { Component, OnInit } from '@angular/core';
import { Brand } from '../../interfaces/interfaces';
import { CarsService } from '../../services/api-services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  brands: Brand[] = [
    { id: 12, name: 'Audi' },
    { id: 13, name: 'BMW' },
    { id: 14, name: 'Honda' },
    { id: 15, name: 'Mazda' },
    { id: 16, name: 'Toyota' },
    { id: 17, name: 'KIA' },
    { id: 19, name: 'Tesla' },
    { id: 20, name: 'Subaru' }
  ];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
  }
  
}
