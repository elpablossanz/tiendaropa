import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES);

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent implements OnInit {
  num_basico: number = 9.99;
  num_normal: number = 12.99;
  num_especial: number = 15.99;
  description: string = "Description";
  price: string = "Price";

  constructor() { 

  
  }

  ngOnInit(): void {
  }

}
