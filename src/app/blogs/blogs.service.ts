import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BlogInterface } from "./blogs.interface";

@Injectable({
  providedIn: "root",
})
export class BlogsService {
  private http = inject(HttpClient);

  url = "https://content.mmsengine.cloud/v1/blogs";

  getBlogs() {
    return this.http.get<BlogInterface[]>(this.url);
  }
}
