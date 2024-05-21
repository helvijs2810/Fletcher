import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <mat-toolbar>
            <div class="icon">
                <a routerLink=""><img class="web-icon" [src]="imagePath" alt="logo"><p>Fletcher</p></a>
            </div>
            <div class="nav-full">
                <a mat-button routerLink="../feed">Feed</a>
                <a mat-button routerLink="#">Interactions</a>
                <a mat-button routerLink="#">Messages</a>
                <a mat-button routerLink="../account" color="warn">Account</a>
            </div>
        </mat-toolbar>
    `,
    styles: `
        img {
            height: auto;
            width: 64px;
        }

        .nav-full {
            margin-left: auto;
        }

        .icon a{
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
        }
    `
})

export class HeaderComponent {
    imagePath = require("../assets/web-icon.png")
}