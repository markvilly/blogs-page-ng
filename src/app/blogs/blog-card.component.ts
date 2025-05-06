import { Component, Input } from "@angular/core";

@Component({
  selector: "app-blog-card",
  template: `
    <section>
      <div>
        <h2>{{ title }}</h2>
      </div>
    </section>
  `,
})
export class BlogCardComponent {
  @Input() title!: string;
}
