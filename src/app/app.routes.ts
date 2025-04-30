import { Routes } from "@angular/router";
import { BlogComponent } from "./components/blog/blog.component";
import { BlogPageComponent } from "./components/blog/blog-page.component";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./components/blog/blog-page.component").then(
        (c) => c.BlogPageComponent,
      ),
  },
];
