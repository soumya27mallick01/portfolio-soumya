import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  sections = [
    { id: 'home', name: 'home', route: '/portfolio-website/home' },
    { id: 'about', name: 'about', route: '/portfolio-website/about' },
    { id: 'projects', name: 'projects', route: '/portfolio-website/projects' },
    { id: 'contact', name: 'contact', route: '/portfolio-website/contact' },
  ];

  activeSection = 'home'; // Default active section

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then((AOS) => 
      AOS.init({
        offset : 200,
        duration: 800, // Duration of animation
      }));
    }
    // this.startIntersectionObserver();

  }

  

  startIntersectionObserver() {
    const options = {
      root: null, // Observe from the viewport
      threshold: 0.5, // Trigger when 50% of the section is in the viewport
    };

    const observer = new IntersectionObserver(this.handleIntersection.bind(this), options);

    // Observe each section
    this.sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });
  }

  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Update the active section when a section comes into view
        this.activeSection = entry.target.id;
      }
    });
  }

  // Scroll to a section when the user clicks a link
  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
  
}
