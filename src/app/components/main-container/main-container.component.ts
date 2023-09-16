import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {

  constructor(private languageService: LanguageService) {
    
  }

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      const selectedValue = target.value;
      this.languageService.changeLanguage(selectedValue);
      
    }
    
  }
  
}