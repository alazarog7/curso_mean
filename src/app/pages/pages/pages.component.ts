import { Component, OnInit } from '@angular/core';
import { SettingsServiceService } from '../../services/settings-service.service';
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settingsService: SettingsServiceService) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
