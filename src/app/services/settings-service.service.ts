import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsServiceService {
  
  private linkTheme = document.querySelector('#theme');

  constructor() { 
    let defaultTheme = localStorage.getItem('theme') || './assets/css/colors/green-dark.css';
    this.linkTheme.setAttribute('href',defaultTheme);
  }

  changeTheme( theme: string): void{
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const links  = document.querySelectorAll('.selector');
    links.forEach( e =>{
      e.classList.remove('working');
      const btnTheme = e.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      if ( btnThemeUrl === currentTheme ){
        e.classList.add('working');
      }
    });
  }
}
