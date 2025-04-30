import { Injectable, signal } from "@angular/core";
import { Blog } from "./blog.interface";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  private readonly blogData = signal<Blog[]>([
    {
      title: "Dalili za Mimba ndani ya Mwezi mmoja",
      slug: "dalili-za-mimba-ndani-ya-mwezi-mmoja",
      content:
        "Mimba ni hali ya kuweza kubeba mtoto tumboni kwa kipindi cha miezi tisa. Hali hii hutokea pale ambapo yai",
      image: "https://example.com/image1.jpg",
      viewCount: 120,
      releaseDate: "2023-10-01",
    },
    {
      title: "Faida za Mazoezi kwa Afya ya Mwili",
      slug: "faida-za-mazoezi-kwa-afya-ya-mwili",
      content:
        "Mazoezi ni muhimu kwa kuboresha afya ya mwili na akili. Husaidia kupunguza uzito na kuimarisha misuli.",
      image: "https://example.com/image2.jpg",
      viewCount: 85,
      releaseDate: "2023-09-15",
    },
    {
      title: "Jinsi ya Kudhibiti Shinikizo la Damu",
      slug: "jinsi-ya-kudhibiti-shinikizo-la-damu",
      content:
        "Shinikizo la damu linaweza kudhibitiwa kwa kula lishe bora, kufanya mazoezi, na kupunguza matumizi ya chumvi.",
      image: "https://example.com/image5.jpg",
      viewCount: 95,
      releaseDate: "2023-10-10",
    },
    {
      title: "Mbinu za Kuimarisha Kinga ya Mwili",
      slug: "mbinu-za-kuimarisha-kinga-ya-mwili",
      content:
        "Kinga ya mwili inaweza kuimarishwa kwa kula vyakula vyenye vitamini C, kufanya mazoezi, na kupata usingizi wa kutosha.",
      image: "https://example.com/image6.jpg",
      viewCount: 130,
      releaseDate: "2023-09-25",
    },
    {
      title: "Dalili za Kisukari na Jinsi ya Kuzidhibiti",
      slug: "dalili-za-kisukari-na-jinsi-ya-kuzidhibiti",
      content:
        "Kisukari kinaweza kudhibitiwa kwa kufuata lishe bora, kupunguza uzito, na kutumia dawa kama ilivyoelekezwa na daktari.",
      image: "https://example.com/image7.jpg",
      viewCount: 110,
      releaseDate: "2023-08-30",
    },
  ]);

  public readonly blogs = this.blogData.asReadonly();

  public updateBlogViewCount(slug: string): void {
    this.blogData.update((blogs) => {
      const blogIndex = blogs.findIndex((blog) => blog.slug === slug);
      if (blogIndex !== -1) {
        blogs[blogIndex].viewCount += 1;
      }
      return blogs;
    });
  }
}
