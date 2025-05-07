import { Component, inject, Input } from "@angular/core";
import { DatePipe } from "@angular/common";
import { BlogInterface } from "./blogs.interface";
import { RouterModule } from "@angular/router";
import { BlogStore } from "./blogs.store";

@Component({
  selector: "app-blog-card",
  standalone: true,
  imports: [DatePipe, RouterModule],
  template: `
    <div
      class="bg-white rounded-xl h-[430px] overflow-hidden shadow-lg pb-4 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    >
      <!-- Image -->
      <div class="relative h-48 overflow-hidden">
        <img
          [src]="blog.cover_image"
          [alt]="blog.title"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Content -->
      <div class="p-4">
        <h3 class="text-lg font-medium text-gray-700 pb-2 line-clamp-1">
          {{ blog.title }}
        </h3>
        <p class="text-gray-600 mb-4 line-clamp-3">
          {{ blog.brief }}
        </p>

        <!-- Date -->
        <div
          class="flex justify-between items-center border-b-0 border-gray-400 "
        >
          <div class="text-sm text-gray-500">View count:</div>
          <div class="text-sm text-gray-500">
            {{ blog.created_at | date: "mediumDate" }}
          </div>
        </div>
        <a
          [routerLink]="['details', blog.title]"
          class="text-md font-semibold text-blue-500"
          >Read More</a
        >
      </div>
    </div>
  `,
})
export class BlogCardComponent {
  protected readonly blogStore = inject(BlogStore)
  @Input({ required: true }) blog!: BlogInterface;

}
