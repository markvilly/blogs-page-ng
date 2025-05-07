import { Routes } from "@angular/router";
import { BlogDetails } from "./blogs/blog-detail.component";
import { BlogsComponent } from "./blogs/blogs.component";

export const routes: Routes = [
  {
    path: "blogs",
    component: BlogsComponent,
  },
  {
    path: "blogs/details/:id",
    component: BlogDetails,
  },
  {
    path: "",
    redirectTo: "blogs",
    pathMatch: "full",
  },
];
