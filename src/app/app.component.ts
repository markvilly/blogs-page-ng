import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogComponent],
  templateUrl: './app.component.html',
  

})
export class AppComponent {
  blogData = [
    {
      title: 'Dalili za Mimba ndani ya Mwezi mmoja',
      content: 'Mimba ni hali ya kuweza kubeba mtoto tumboni kwa kipindi cha miezi tisa. Hali hii hutokea pale ambapo yai',
      image: 'https://example.com/image1.jpg',
      viewCount: 120,
      releaseDate: '2023-10-01'
    },
    {
      title: 'Faida za Mazoezi kwa Afya ya Mwili',
      content: 'Mazoezi ni muhimu kwa kuboresha afya ya mwili na akili. Husaidia kupunguza uzito na kuimarisha misuli.',
      image: 'https://example.com/image2.jpg',
      viewCount: 85,
      releaseDate: '2023-09-15'
    },
    {
      title: 'Jinsi ya Kudhibiti Shinikizo la Damu',
      content: 'Shinikizo la damu linaweza kudhibitiwa kwa kula lishe bora, kufanya mazoezi, na kupunguza matumizi ya chumvi.',
      image: 'https://example.com/image5.jpg',
      viewCount: 95,
      releaseDate: '2023-10-10'
    },
    {
      title: 'Mbinu za Kuimarisha Kinga ya Mwili',
      content: 'Kinga ya mwili inaweza kuimarishwa kwa kula vyakula vyenye vitamini C, kufanya mazoezi, na kupata usingizi wa kutosha.',
      image: 'https://example.com/image6.jpg',
      viewCount: 130,
      releaseDate: '2023-09-25'
    },
    {
      title: 'Dalili za Kisukari na Jinsi ya Kuzidhibiti',
      content: 'Kisukari kinaweza kudhibitiwa kwa kufuata lishe bora, kupunguza uzito, na kutumia dawa kama ilivyoelekezwa na daktari.',
      image: 'https://example.com/image7.jpg',
      viewCount: 110,
      releaseDate: '2023-08-30'
    }
  ]
}
