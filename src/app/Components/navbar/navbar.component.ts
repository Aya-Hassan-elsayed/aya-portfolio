
import { Component, HostListener } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],

  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  isMenuOpen: boolean = false;



  activeSection: string = 'home';


  toggleMenu(): void {

    this.isMenuOpen = !this.isMenuOpen;

  }


  closeMenu(): void {

    this.isMenuOpen = false;

  }



  @HostListener('window:scroll', [])
  onWindowScroll(): void {

    const sections = [
      'home',
      'about',
      'projects',
      'skills',
      'contact'
    ];


    const scrollPosition =
      window.scrollY + window.innerHeight / 3;


    for (const sectionId of sections) {

      const section =
        document.getElementById(sectionId);


      if (!section) {
        continue;
      }


      const sectionTop =
        section.offsetTop;


      const sectionBottom =
        sectionTop + section.offsetHeight;


      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionBottom
      ) {

        this.activeSection = sectionId;

        break;
      }

    }

  }

}

