import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('navSection') navSection!: ElementRef;

  constructor () {}
 
  ngOnInit(): void {

    const navbarLink = document.querySelector('a[href="#navbar"]');

    navbarLink?.addEventListener('click', () => {
      this.navSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
    
  }

}
