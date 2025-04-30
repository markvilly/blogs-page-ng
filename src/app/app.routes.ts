import { Routes } from "@angular/router";
import { BlogCardComponent } from "./blog/blog-card.component";
import { BlogPageComponent } from "./blog/blog-page.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full",
  },
  {
    path: "blog",
    title: "Blog",
    loadComponent: () =>
      import("./blog/blog-page.component").then(
        (c) => c.BlogPageComponent,
      ),
  },
  {
    path: "blog/:slug",
    title: "Blog Details",
    loadComponent: () =>
      import("./blog/blog-details.component").then(
        (c) => c.BlogDetailsComponent,
      ),
  },
];
