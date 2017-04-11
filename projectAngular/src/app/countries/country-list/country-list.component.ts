import { Component, OnInit } from '@angular/core';
import { ICountry } from '../country';

@Component({
  selector: 'pm-countries',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  pageTitle: string = 'Country List';
  listFilter: string = 'Poland';
  countries: ICountry[] = [
    {
      "countryCode": "POL",
      "countryName": "Poland",
      "starRating": 4.8
    },
    {
      "countryCode": "GER",
      "countryName": "Germany",
      "starRating": 3.2
    },
    {
      "countryCode": "ZWE",
      "countryName": "Zimbabwe",
      "starRating": 3.9
    }
  ]

  ngOnInit(): void {
    console.log('heh');
  }



}
