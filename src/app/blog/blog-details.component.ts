import { Component, computed, effect, inject, input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "./blog.service";

@Component({
  selector: "app-blog-details",
  template: `
    @let blog = this.blog();

    @if (blog !== null) {
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Blog Details</h2>
        <p class="text-gray-700">
          {{ blog.title }}
        </p>
      </div>
    } @else {
      <div class="bg-white p-4 rounded-lg shadow-md">Loading...</div>
    }
  `,
  styles: [
    `
      .bg-white {
        background-color: #ffffff;
      }
    `,
  ],
})
export class BlogDetailsComponent {
  protected blogService = inject(BlogService);

  slug = input.required<string>();

  blog = computed(() => {
    const blogs = this.blogService.blogs();
    const slug = this.slug();

    return blogs.find((blog) => blog.slug === slug) ?? null;
  });
}
