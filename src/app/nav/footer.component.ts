import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
        <mat-divider></mat-divider>
        <div>
            <p>Copyright all rights reserved 2024</p>
        </div>
    `,
    styles: `
        div {
            text-align: center;
        }
    `
})

export class FooterComponent {}