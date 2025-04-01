import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {
  // Lista de cores para os slides
  images: string[] = [
    'https://www.mensroombarbershop.com/wp-content/uploads/2023/10/A1580-Mens-Room-Barber-Shop-HERO.jpg'
    , 'https://ftccollege.edu/wp-content/uploads/2023/08/barber-school.jpg'
    , 'https://studio.salonory.com/wp-content/uploads/2022/10/dreamstime_m_97959160.jpg'
    , 'https://img.grouponcdn.com/bynder/3yVmdamquoQej7rcgUNpo1bBXFeS/3y-2048x1229/v1/t2100x1260.webp'
    , 'https://whyy.org/wp-content/uploads/2018/02/2018-02-02-e-lee-mike-jordan-mark-belle-philadelphia-south-street-barbers-2.jpg'
  ];
  currentIndex: number = 0;

  // Função para ir para o slide anterior
  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  // Função para ir para o slide seguinte
  nextSlide(): void {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}
