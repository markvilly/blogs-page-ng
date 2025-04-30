import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  template: `
    <main class="px-10 bg-blue-100 min-h-screen pt-16">
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
