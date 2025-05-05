import { Component } from "@angular/core";

@Component({
  selector: "app-blogs",
  template: `
    <section class="px-8 bg-purple-50 py-10">
      <!-- Filters  -->
      <div
        class="flex overflow-scroll gap-4 items-center p-2 bg-white py-2 no-scrollbar"
      >
        @for (topic of topics; track topic) {
          <div
            class="px-4 text-lg whitespace-nowrap rounded-full py-3 font-semibold text-white bg-blue-600"
          >
            {{ topic }}
          </div>
        }
      </div>
    </section>
  `,
})
export class BlogsComponent {
  topics = ["All Topics", "Health", "Wellness", "Nutrition", "Fitness"];
}
