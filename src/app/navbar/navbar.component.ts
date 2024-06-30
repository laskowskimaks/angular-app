import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  activeLink: string = 'home';

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.updateActiveLink(event.url);
      }
    });
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  updateActiveLink(url: string) {
    if (url.includes('brainiacs-table')) {
      this.activeLink = 'brainiacs';
    } else {
      this.activeLink = 'home';
    }
  }
}
