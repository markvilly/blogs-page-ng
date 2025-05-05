import { Component } from "@angular/core";

@Component({
  selector: "app-blog-search",
  template: `
    <section>
      <div class="flex justify-center items-center py-8">
        <input
          type="text"
          placeholder="Type to search for blogs..."
          class="border border-gray-300 transition duration-100 bg-white focus:outline-none py-4 ring-gray-700 focus:border-blue-300 focus:ring-blue-300 rounded-lg focus:drop-shadow-xl placeholder:bg-white placeholder-gray-500 px-4 w-full mx-8"
        />
      </div>
    </section>
  `,
})
export class BlogSearchComponent {}
