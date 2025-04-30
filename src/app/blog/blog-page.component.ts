import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { BlogCardComponent } from "./blog-card.component";
import { Blog } from "./blog.interface";
import { MatButtonModule } from "@angular/material/button";
import { BlogService } from "./blog.service";

@Component({
  selector: "app-blog-page",
  imports: [BlogCardComponent, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid grid-cols-2 gap-4">
      @for (blog of blogService.blogs(); track blog.title) {
        <div class="w-full">
          <app-blog-card
            [blog]="blog"
            (incrementViewCount)="incrementViewCount($event)"
          />
        </div>
      }
    </div>
  `,
})
export class BlogPageComponent {
  protected blogService = inject(BlogService);

  incrementViewCount(blog: Blog) {
    this.blogService.updateBlogViewCount(blog.slug);
  }
}
