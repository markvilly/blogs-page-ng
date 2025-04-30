import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-users',
    template: `
        <div class=" mx-auto p-4 border border-gray-300 rounded-lg shadow-md mb-6">
            <div class="avatar">
                <img [src]="imgSrc" alt="" srcset=""/>
            </div>
            <h2 class="text-2xl font-normal text-gray-700 mt-4 mb-2">{{userName}}</h2>
        </div>`
})


export class UsersComponent {
    @Input() imgSrc: string= ''
    @Input() userName: string= ''
    @Input() userId: string= ''

}