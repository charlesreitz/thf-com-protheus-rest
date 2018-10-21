import { Injectable } from '@angular/core';

import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Injectable()
export class DashboardService {

  getBestSellers() {
    return [
      { category: 'Caps', value: 105 },
      { category: 'Shoes', value: 210 }
    ];
  }

  getColumns(): Array<ThfTableColumn> {
    return [
      { column: 'product', label: 'Product'},
      { column: 'description', label: 'Description'},
      { column: 'stock', label: 'Stock'}
    ];
  }

  getItems() {
    return [
      {
        id: 12345,
        product: 'Nike shoes',
        description: 'Nike airmax 1.0',
        stock: 25
      },
      {
        id: 12346,
        product: 'Cap N.Y',
        description: 'Cap New York',
        stock: 12
      },
      {
        id: 12347,
        product: 'Necklace gold',
        description: 'New beaultiful necklace gold',
        stock: 20
      },
      {
        id: 12348,
        product: 'DC Shoes',
        description: 'DC skate shoes',
        stock: 35
      },
      {
        id: 12356,
        product: 'VANS Shoes',
        description: 'Vans skate shoes',
        stock: 12
      },
      {
        id: 12358,
        product: 'Cap C.I.A',
        description: 'Cap C.I.A FORCE',
        stock: 1
      },
      {
        id: 12231,
        product: 'T-Shirt Cavaliers',
        description: 'Go Cavaliers t-shirt!',
        stock: 5
      }
     ];
  }

  getItemsPurchased() {
    return [
      { category: 'Shirt', value: 102 },
      { category: 'Shoes', value: 210} ,
      { category: 'Caps', value: 105 },
      { category: 'Pants', value: 70 },
      { category: 'Necklaces', value: 95 }
    ];
  }

}