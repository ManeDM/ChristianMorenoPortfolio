import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private translateService: TranslateService){}

  ngOnInit(): void {
    console.log(this.translateService.instant('aboutMe.title'));
    console.log(this.translateService.instant('aboutMe.content'));
  }

}
