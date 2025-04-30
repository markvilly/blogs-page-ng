import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-blog",
  template: `
    <div
      class="hover:drop-shadow-xl md:w-75 transition duration-300 ease-in-out w-93 relative  border border-gray-300 rounded-lg drop-shadow-md "
    >
      <div class="absolute bg-gray-200 h-[250px] w-full rounded-t-lg">
        <div class="absolute top-4 right-4">
          <div
            class="bg-black text-white opacity-75 rounded-full px-4 text-sm py-2"
          >
            {{ filterName }}
          </div>
        </div>
      </div>
      <div class=" bg-white rounded-b-lg mt-60 p-4">
        <h2 class="text-2xl font-normal text-gray-700 mb-2">{{ title }}</h2>
        <p class="text-gray-700 text-base">{{ content }}</p>
        <div class="border-t-1 border-gray-100 mt-4"></div>
        <div
          class="flex justify-between items-center mt-4 text-sm text-gray-500"
        >
          <span>Views: {{ viewCount }}</span>
          <span>Released: {{ releaseDate }}</span>
        </div>
        <button
          (click)="onSelectBlog()"
          class="mt-4 text-blue-500 py-2 rounded hover:text-blue-600 hover:underline hover:cursor-pointer"
        >
          Read More
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class BlogComponent {
  onSelectBlog() {
    console.log(`Selected blog: ${this.title}`);
  }

  @Input() filterName: string = "Pregnancy";
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() content: string = "";
  @Input() viewCount: number = 0;
  @Input() releaseDate: string = "";
}
