import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <header>
        <app-header></app-header>
    </header>
    <main>
        <router-outlet></router-outlet>
    </main>
    <footer>
        <app-footer></app-footer>
    </footer>
    `,
    styles: [`
        h1{
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 200;
        }

        main {
            display: flex;
            justify-content: center;
        }
    `]
})

export class AppComponent {
    title: 'home';
}