import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const brands = [
      { id: 12, name: 'Audi' },
      { id: 13, name: 'BMW' },
      { id: 14, name: 'Honda' },
      { id: 15, name: 'Mazda' },
      { id: 16, name: 'Toyota' },
      { id: 17, name: 'KIA' },
      { id: 18, name: 'Jeep' },
      { id: 19, name: 'Tesla' },
      { id: 20, name: 'Subaru' }
    ];
    const models = [
      { id: 12, name: 'Audi A1', price:10000 },
      { id: 13, name: 'BMW X3' , price:10000 },
      { id: 14, name: 'Honda Civic' , price:10000 },
      { id: 15, name: 'Mazda MX5' , price:10000 },
      { id: 16, name: 'Toyota Corolla' , price:10000 },
      { id: 17, name: 'KIA Sportage' , price:10000 },
      { id: 18, name: 'Jeep Jerokee' , price:10000 },
      { id: 19, name: 'Tesla Model S' , price:10000 },
      { id: 20, name: 'Subaru Forester' , price:10000 }
    ];
    
    return {brands,models};
  }


}
