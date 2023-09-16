import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  setDefaultLang(currentLanguage: string) {
    throw new Error('Method not implemented.');
  }

  currentLanguage: string = 'es';

  constructor(private translateService: TranslateService) { }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translateService.use(lang);
  }
}
