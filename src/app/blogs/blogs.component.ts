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
        class="flex justify-start  overflow-scroll gap-4 items-center bg-white py-2 no-scrollbar"
      >
        @for (category of uniqueCategories(); track category) {
          <a
            (click)="selectedCategory.set(category)"
            [class.bg-blue-700]="selectedCategory() === category"
            [class.text-white]="selectedCategory() === category"
            [class.bg-white]="selectedCategory() !== category"
            class="px-4 text-lg whitespace-nowrap rounded-full py-3 font-semibold text-gray-600 cursor-pointer transition duration-150 hover:ring-blue-700 ring-[0.3px] hover:ring-[1px] focus:bg-blue-700 focus:text-white"
          >
            {{ category }}
          </a>
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
  selectedCategory = signal<string>("All Topics");

  searchBlog$ = toObservable(this.searchBlog).pipe(
    startWith(""),
    debounceTime(300),
  );

  #searchBlog = toSignal(this.searchBlog$, { initialValue: "" });

  uniqueCategories = computed(() => {
    const categoryCollection = [
      ...this.blogStore.collection().map((blog) => blog.category),
    ];
    return ["All Topics", ...new Set(categoryCollection)];
  });

  filteredBlogsList = computed(() => {
    const collection = [...this.blogStore.collection()].sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
    const searchValue = this.#searchBlog();
    const category = this.selectedCategory();

    return collection.filter((blog) => {
      const matchesSearch = blog.slug
        .toLocaleLowerCase()
        .includes(searchValue?.toLocaleLowerCase() ?? "");
      const matchesCategory =
        category === "All Topics" || blog.category === category;
      return matchesSearch && matchesCategory;
    });
  });

  ngOnInit(): void {
    this.blogStore.getBlogs();
  }
}
