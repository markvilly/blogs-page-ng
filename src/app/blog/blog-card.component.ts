import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
  output,
  Output,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { Blog } from "./blog.interface";
import { JsonPipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-blog-card",
  imports: [RouterLink, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let blog = this.blog();
    <div
      class="hover:drop-shadow-xl md:w-75 transition duration-300 ease-in-out w-93 relative  border border-gray-300 rounded-lg drop-shadow-md "
    >
      <!-- <div class="absolute bg-gray-200 h-[250px] w-full rounded-t-lg">
          <div class="absolute top-4 right-4">
            <div
              class="bg-black text-white opacity-75 rounded-full px-4 text-sm py-2"
            >
              {{ blog. }}
            </div>
          </div>
        </div> -->
      <div class=" bg-white rounded-b-lg mt-60 p-4">
        <h2 class="text-2xl font-normal text-gray-700 mb-2">
          {{ blog.title }}
        </h2>
        <p class="text-gray-700 text-base">{{ blog.content }}</p>
        <div class="border-t-1 border-gray-100 mt-4"></div>
        <div
          class="flex justify-between items-center mt-4 text-sm text-gray-500"
        >
          <span>Views: {{ blog.viewCount }}</span>
          <span>Released: {{ blog.releaseDate }}</span>
        </div>

        <div class="flex justify-between items-center mt-4">
          <button
            mat-button
            color="primary"
            [routerLink]="['/blog', blog.slug]"
          >
            Read More
          </button>

          <button
            mat-icon-button
            color="primary"
            (click)="incrementViewCount.emit(blog)"
          >
            <mat-icon>favorite</mat-icon>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class BlogCardComponent {
  blog = input.required<Blog>();
  incrementViewCount = output<Blog>();
}
