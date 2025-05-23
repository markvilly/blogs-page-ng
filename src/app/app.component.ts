import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BlogsComponent } from "./blogs/blogs.component";

@Component({
  selector: "app-root",
  imports: [RouterModule],
  template: `
    <main class="bg-blue-50 h-full">
      <a
        [routerLink]="['']"
        class=" flex items-center justify-between bg-blue-200  py-6 px-8"
      >
        <div class=" text-gray-700 font-regular text-2xl">Medikea</div>
        <div>Hamburger</div>
      </a>
      <section class=" px-8 py-8">
        <h2 class=" text-center text-3xl font-semibold py-4">
          Medikea Health Hub
        </h2>
        <p class=" text-center text-xl text-gray-600">
          Valuable information and expert insights on a wide range of health
          topics, from prevention to treatment and beyond.
        </p>
      </section>

      <router-outlet />
    </main>
  `,
  standalone: true,
})
export class AppComponent {
  // userData = [
  //   {
  //     userName: "John Doe",
  //     imgSrc: "https://example.com/user1.jpg",
  //     userId: "user001",
  //   },
  //   {
  //     userName: "Jane Smith",
  //     imgSrc: "https://example.com/user2.jpg",
  //     userId: "user002",
  //   },
  //   {
  //     userName: "Alice Johnson",
  //     imgSrc: "https://example.com/user3.jpg",
  //     userId: "user003",
  //   },
  //   {
  //     userName: "Bob Brown",
  //     imgSrc: "https://example.com/user4.jpg",
  //     userId: "user004",
  //   },
  //   {
  //     userName: "Charlie Davis",
  //     imgSrc: "https://example.com/user5.jpg",
  //     userId: "user005",
  //   },
  // ];
}
