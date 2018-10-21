import { Injectable } from '@angular/core';

import { ThfTableColumn, ThfTableDetail } from '@totvs/thf-ui/components/thf-table';

@Injectable()
export class PedidosService {
  // console.log("123");
  getColumns(): Array<ThfTableColumn> {
    
    const airfareDetail: ThfTableDetail = {
      columns: [
        { column: 'package', label: 'Package' },
        { column: 'tour', label: 'Tour' }
      ],
      typeHeader: 'top'
    };

    return [
      { column: 'status', label: 'Status', type: 'subtitle', width: '10%', subtitles: [
        { value: 'available', type: 'success', label: 'Available', content: '1' },
        { value: 'reserve', type: 'warning', label: 'Reserve', content: '2' },
        { value: 'closed', type: 'danger', label: 'Closed', content: '3' }
      ]},
      { column: 'destination', label: 'Destination'},
      { column: 'country', label: 'Country' },
      { column: 'date', label: 'Date', type: 'date', width: '14%' },
      { column: 'returnDate', label: 'Return Date', type: 'date', width: '14%' },
      { column: 'id', label: 'Flight Number', type: 'number', width: '10%' },
      { column: 'onBoardService', label: 'On Board Service', type: 'boolean', boolean: {
        trueLabel: 'Yes', falseLabel: 'No'
      }},
      { column: 'value', label: 'Value', type: 'currency', width: '11%', format: 'USD' },
      { column: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    console.log("988");
    return [{
      id: 11234, initials: 'BR', country: 'Brazil', value: 1000.00, date: '2018-10-09',
      returnDate: '2018-11-01', class: 'Economic', onBoardService: false, destination: 'Rio de Janeiro', airline: 'Azul',
      status: 'available',
      detail: [
        { package: 'Basic', tour: 'City tour by public bus and visit to the main museums.' },
        { package: 'Intermediary', tour: 'City tour by van and guided visit to the main museums.' },
        { package: 'Complete', tour: 'VIP city tour, music show with dinner and guided tour to the main museums.' }
      ]
    },
    {
      id: 22467, initials: 'FR', country: 'France', value: 5000.00, date: '2019-12-13',
      returnDate: '2019-12-31', class: 'Economic', onBoardService: false, destination: 'Paris', airline: 'British Airways',
      status: 'closed',
      detail: [
        { package: 'Basic', tour: 'City tour by public bus and visit to the main museums.' },
        { package: 'Intermediary', tour: 'City tour by van and guided visit to the main museums.' },
        { package: 'Complete', tour: 'VIP city tour, music show with dinner and guided tour to the main museums.' }
      ]
    },
    {
      id: 34679, initials: 'PT', country: 'Portugal', value: 5500.00, date: '2017-10-10',
      returnDate: '2018-10-20', class: 'Economic', onBoardService: false, destination: 'Lisbon', airline: 'Air Europa',
      status: 'closed'
    },
    {
      id: 48999, initials: 'US', country: 'United States', value: 2700.49, date: '2018-10-17',
      returnDate: '2018-10-29', class: 'Economic', onBoardService: false, destination: 'Los Angeles', airline: 'American Airlines',
      status: 'reserve'
    },
    {
      id: 54563, initials: 'CL', country: 'Chile', value: 2000.00, date: '2018-10-20',
      returnDate: '2018-11-01', destination: 'Cusco', class: 'Economic', onBoardService: false, airline: 'LATAM',
      status: 'available'
    },
    {
      id: 64568, initials: 'MX', country: 'Mexico', value: 2100.00, date: '2018-03-10',
      returnDate: '2018-05-09', destination: 'Mexico City', class: 'Economic', onBoardService: false, airline: 'Aero México',
      status: 'available',
      detail: [
        { package: 'Basic', tour: 'City tour by public bus and visit to the main museums.' },
        { package: 'Intermediary', tour: 'City tour by van and guided visit to the main museums.' },
        { package: 'Complete', tour: 'VIP city tour, music show with dinner and guided tour to the main museums.' }
      ]
    },
    {
      id: 75456, initials: 'IE', country: 'Ireland', value: 6300.00, date: '2018-10-14',
      returnDate: '2018-10-30', destination: 'Cork', class: 'First Class', onBoardService: true, airline: 'Lufthansa',
      status: 'reserve'
    },
    {
      id: 19238, initials: 'AU', country: 'Australia', value: 6300.00, date: '2018-10-14',
      returnDate: '2018-10-30', destination: 'Sydney', class: 'First Class', onBoardService: true, airline: 'Jetstar Airways',
      status: 'reserve'
    },
    {
      id: 85456, initials: 'JP', country: 'Japan', value: 5900.00, date: '2018-10-25',
      returnDate: '2018-11-10', destination: 'Tokio', class: 'Executive', onBoardService: true, airline: 'Japan Airlines',
      status: 'available'
    },
    {
      id: 94565, initials: 'CN', country: 'China', value: 2900.00, date: '2018-10-10',
      returnDate: '2018-10-25', destination: 'Beijing', class: 'Economic', onBoardService: false, airline: 'Malaysia Airlines',
      status: 'available'
    },
    {
      id: 32330, initials: 'UK', country: 'England', value: 2090.50, date: '2018-10-07',
      returnDate: '2018-11-15', destination: 'London', class: 'Executive', onBoardService: true, airline: 'British Airways',
      status: 'available'
    },
    {
      id: 14560, initials: 'CA', country: 'Canada', value: 2090.50, date: '2018-10-07',
      returnDate: '2018-10-20', destination: 'Quebec', class: 'Economic', onBoardService: false, airline: 'American Airlines',
      status: 'available'
    },
    {
      id: 45611, initials: 'AR', country: 'Argentina', value: 3500.50, date: '2018-12-07',
      returnDate: '2018-12-29', destination: 'Ushuaia', class: 'Economic', onBoardService: false, airline: 'LATAM',
      status: 'reserve'
    }];
  }

}
