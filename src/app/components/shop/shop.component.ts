import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'] // <-- Correct property name is 'styleUrls'
})
export class ShopComponent implements AfterViewInit {
  ngAfterViewInit() {
    const navLinks = document.querySelectorAll(".navbar a[href^='#']");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          // @ts-ignore
          new (window as any).bootstrap.Collapse(navbarCollapse).toggle();
        }
      });
    });
  }
}