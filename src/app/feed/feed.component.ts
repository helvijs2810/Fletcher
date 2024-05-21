import { Component, NgModule } from "@angular/core";
import { NestModule } from "./nest.module"

@Component({
    selector: 'app-feed',
    template: `
    <div>
        <app-post></app-post>
    </div>
    `,
    styles: `
        div {
            padding: 16px;
        }
    `
})

export class FeedComponent {}