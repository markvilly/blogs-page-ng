import { Component } from "@angular/core";

@Component({
  selector: "app-blog-search",
  template: `
    <section>
      <div class="flex justify-center items-center py-8">
        <input
          type="text"
          placeholder="Type to search for blogs..."
          class="border border-blue-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg placeholder:bg-white placeholder-gray-500 px-4 py-2 w-full mx-8"
        />
      </div>
    </section>
  `,
})
export class BlogSearchComponent {}
