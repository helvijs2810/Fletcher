import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

//Components
import { PostComponent } from "./post/post.component"
import { FeedComponent } from "./feed.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list"



@NgModule({
    declarations: [
        FeedComponent,
        PostComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatGridListModule,
        MatSidenavModule
    ],
    exports: [PostComponent]
})

export class NestModule {}