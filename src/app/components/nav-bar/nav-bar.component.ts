import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('tecnologiesSection') tecnologiesSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const homeLink = document.querySelector('a[href="#home"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const tecnologiesLink = document.querySelector('a[href="#tecnologies"]');
    const projectsLink = document.querySelector('a[href="#projects"]');

    homeLink?.addEventListener('click', () => {
      this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });

    aboutLink?.addEventListener('click', () => {
      this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });

    tecnologiesLink?.addEventListener('click', () => {
      this.tecnologiesSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });

    projectsLink?.addEventListener('click', () => {
      this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
  }

  

}