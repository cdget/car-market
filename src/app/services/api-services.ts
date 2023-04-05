import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';

import { Brand, Model, ModelDetails  } from '../interfaces/interfaces';



@Injectable({ providedIn: 'root' })
export class CarsService {
  carsPerPage = 5;
  modelsYear = 2023

  private modelsUrl = 'https://api.api-ninjas.com/v1/cars?limit='+this.carsPerPage+'&year='+this.modelsYear+'&make='; 
  private modelDetailsUrl = 'https://api.api-ninjas.com/v1/cars?limit=1&year='+this.modelsYear+'&model=';   

  httpOptions = {
    headers: new HttpHeaders({ 
    'Content-Type': 'application/json' ,
    'X-Api-Key': 'ebV8PLhO2MRIOCPe8W0fAA==xFcAE13SzDG1VhpU'})
  };

  constructor(
    private http: HttpClient) { }

  getModel(id: string): Observable<Model[]> {
    return this.http.get<Model[]>(this.modelsUrl+id, this.httpOptions);
  }

  getModelDetails(id: string): Observable<ModelDetails[]> {
    return this.http.get<ModelDetails[]>(this.modelDetailsUrl+id, this.httpOptions);
  }

}
