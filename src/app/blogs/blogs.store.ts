import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { BlogInterface } from "./blogs.interface";
import { BlogsService } from "./blogs.service";
import { inject } from "@angular/core";
import { pipe, switchMap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { rxMethod } from "@ngrx/signals/rxjs-interop";

type BlogState = {
  collection: BlogInterface[];
};

export const BlogStore = signalStore(
  { providedIn: "root" },
  withState<BlogState>({
    collection: [],
  }),
  withMethods((store) => {
    const blogService = inject(BlogsService);
    return {
      getBlogs: rxMethod<void>(
        pipe(
          switchMap(() => {
            return blogService.getBlogs().pipe(
              tapResponse({
                next: (blogs) => {
                  patchState(store, { collection: blogs });
                },
                error: () => {},
              }),
            );
          }),
        ),
      ),
    };
  }),
);
