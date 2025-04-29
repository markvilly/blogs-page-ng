import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-blog',
    template: `
        <div class="max-w-xl mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
            <img [src]="image" alt="Blog Image" class="w-full h-auto rounded-lg" />
            <h2 class="text-2xl font-bold mt-4 mb-2">{{ title }}</h2>
            <p class="text-gray-700 text-base">{{ content }}</p>
            <div class="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>Views: {{ viewCount }}</span>
                <span>Released: {{ releaseDate }}</span>
            </div>
        </div>
    `,
    styles: []
})
export class BlogComponent {
    @Input() image: string = '';
    @Input() title: string = '';
    @Input() content: string = '';
    @Input() viewCount: number = 0;
    @Input() releaseDate: string = '';
}
