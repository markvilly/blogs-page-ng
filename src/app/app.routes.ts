import { Routes } from "@angular/router";
import { BlogDetails } from "./blogs/blog-detail.component";
import { BlogsComponent } from "./blogs/blogs.component";

export const routes: Routes = [
  {
    path: "",
    component: BlogsComponent,
  },
  {
    path: "details/:id",
    component: BlogDetails,
  },
];
