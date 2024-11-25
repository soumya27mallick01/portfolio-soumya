import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work and skills.',
      image: 'assets/images/portfolio.jpg',
      link: 'https://example.com/portfolio',
      aosDelay: 100,
    },
    {
      title: 'E-Commerce Platform',
      description: 'An online store built with Angular and Node.js.',
      image: 'assets/images/ecommerce.jpg',
      link: 'https://example.com/ecommerce',
      aosDelay: 200,
    },
    {
      title: 'Blog CMS',
      description: 'A blog content management system with user authentication.',
      image: 'assets/images/blog.jpg',
      link: 'https://example.com/blog',
      aosDelay: 300,
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app using OpenWeather API.',
      image: 'assets/images/weather.jpg',
      link: 'https://example.com/weather',
      aosDelay: 400,
    },
    {
      title: 'Task Manager',
      description: 'A task management app with CRUD operations.',
      image: 'assets/images/task-manager.jpg',
      link: 'https://example.com/task-manager',
      aosDelay: 500,
    },
    {
      title: 'Social Media App',
      description: 'A social networking app with real-time chat features.',
      image: 'assets/images/social-media.jpg',
      link: 'https://example.com/social-media',
      aosDelay: 600,
    },
  ];
}
