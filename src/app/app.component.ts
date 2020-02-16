import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})


export class AppComponent implements OnInit {
  title = 'personInventory';
  personData: any[] ;
  sortedPersonData: any;
  selectedPerson: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getPersonData().subscribe((data: any) => {
      console.log(data);
      this.personData = data.people;
      this.sortDataInAsc();
      this.selectedPerson = this.sortedPersonData[0];
    }) ;
  }

  sortDataInAsc() {
    this.sortedPersonData = this.personData.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  sortDataInDec() {
    this.sortedPersonData = this.personData.sort((a, b) => a.name < b.name ? 1 : -1);
  }

  personSelected(person: any) {
    this.selectedPerson = person;
  }
}
