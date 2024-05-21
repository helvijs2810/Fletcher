import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

//Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./nav/header.component";
import { FooterComponent } from "./nav/footer.component";
import { FeedComponent } from "./feed/feed.component";
import { AccountComponent } from "./account/account.component";

//UI
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card"
import { NestModule } from "./feed/nest.module";

const routes: Routes = [
    {path: '', redirectTo: '/feed', pathMatch: 'full'},
    {path: 'feed', title: 'Feed' ,component: FeedComponent},
    {path: 'account', title: 'Account' , component: AccountComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        MatToolbarModule,
        MatDividerModule,
        NestModule,
        MatCardModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}