import { Component, OnInit } from '@angular/core';
import { SettingsServiceService } from '../../services/settings-service.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {


  constructor(private settingsService: SettingsServiceService) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme( theme: string): void{
    this.settingsService.changeTheme(theme);
  }

  

}
