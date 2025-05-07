import { Component, computed, inject, OnInit, signal } from "@angular/core";
import { BlogStore } from "./blogs.store";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { debounceTime, startWith } from "rxjs";
import { BlogCardComponent } from "./blog-card.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-blogs",
  imports: [BlogCardComponent, FormsModule],
  template: `
    <section class="px-8 bg-purple-50 py-10">
      <div class="flex justify-center items-center py-8">
        <input
          [(ngModel)]="searchBlog"
          type="text"
          placeholder="Type to search for blogs..."
          class="border border-gray-300 transition duration-100 bg-white focus:outline-none py-4 ring-gray-700 focus:border-blue-300 focus:ring-blue-300 rounded-lg focus:drop-shadow-xl placeholder:bg-white placeholder-gray-500 px-4 w-full mx-8"
        />
      </div>
      <!-- Filters  -->
      <div
        class="flex lg:justify-center overflow-scroll gap-4 items-center p-2 bg-white py-2 no-scrollbar"
      >
        @for (topic of topics; track topic) {
          <div
            class="px-4 text-lg whitespace-nowrap rounded-full py-3 font-semibold text-white bg-blue-600"
          >
            {{ topic }}
          </div>
        }
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        @for (blog of filteredBlogsList().slice(0, 9); track blog.id) {
          <app-blog-card [blog]="blog" />
        }
      </div>
    </section>
  `,
})
export class BlogsComponent implements OnInit {
  protected readonly blogStore = inject(BlogStore);
  topics = ["All Topics", "Health", "Wellness", "Nutrition", "Fitness"];

  searchBlog = signal("");
  searchBlog$ = toObservable(this.searchBlog).pipe(
    startWith(""),
    debounceTime(300),
  );

  #searchBlog = toSignal(this.searchBlog$, { initialValue: "" });

  filteredBlogsList = computed(() => {
    const collection = [...this.blogStore.collection()].sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
    const searchValue = this.#searchBlog();

    return collection.filter((blog) => {
      return blog.slug
        .toLocaleLowerCase()
        .includes(searchValue?.toLocaleLowerCase() ?? "");
    });
  });

  ngOnInit(): void {
    this.blogStore.getBlogs();
  }
}
