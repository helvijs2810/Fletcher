import { Component } from "@angular/core";

@Component({
    selector: 'app-post',
    template: `
    <div class="content-card">
        <mat-card class="thePost">
            <mat-card-header>
                <mat-card-title>ME!</mat-card-title>
                <mat-card-subtitle>Posted: 2-3-2024</mat-card-subtitle>
            </mat-card-header>
            <img [src]="postImage" alt="post" class="post-image">
            <mat-card-content>
                <p>Me defeating Bloonarius for the first time on Bloons TD 6!</p>
            </mat-card-content>
            <mat-card-footer class="interaction-data" style="display: flex; justify-content: right;">
                <mat-grid-list cols="3" rowHeight="32px" style="width: 300px;">
                    <mat-grid-tile><mat-icon color="primary">favorite</mat-icon><span>32,429</span></mat-grid-tile>
                    <mat-grid-tile><mat-icon color="primary">forum</mat-icon><span>322</span></mat-grid-tile>
                    <mat-grid-tile><mat-icon color="primary">show_chart</mat-icon><span>500,321</span></mat-grid-tile>
                </mat-grid-list>
            </mat-card-footer>
        </mat-card>
        <div class="interact-box">
            <mat-drawer-container autosize>
                <mat-drawer #drawer mode="side" class="comment-box">
                    <div class="commentSection">
                        <mat-card>
                            <mat-card-content>
                                <img  mat-card-avatar [src]="noComment" alt="lol" class="noCommentHolder">
                                <div class="text-content">
                                    <mat-card-title>John</mat-card-title>
                                    <mat-card-subtitle>A cool dude</mat-card-subtitle>
                                    <p>Wow, nice win on the Bloonarius. Proud of you :thumbs_up:</p>
                                </div>
                            </mat-card-content>
                        </mat-card>
                    </div>
                </mat-drawer>
                <div class="side-buttons">
                    <button mat-icon-button color="primary" (click)="drawer.toggle()">
                        <mat-icon>forum</mat-icon>
                    </button>
                    <button mat-icon-button color="primary" (click)="addLikes(likeNumber)">
                        <mat-icon>favorite</mat-icon>
                    </button>
                    <button mat-icon-button color="primary">
                        <mat-icon>bookmark</mat-icon>
                    </button>
                </div>
            </mat-drawer-container>
        </div>
    </div> 
    `, styles: `
        .thePost {
            width: 600px;
            height: auto;
            padding: 10px;
        }

        .interaction-data {
            margin-top: 20px;
        }

        .content-card {
            display: flex;
            flex-direction: row;
        }

        .interact-box {
            display: flex;
            flex-direction: row;
        }

        .side-buttons {
            display: flex;
            flex-direction: column;
            z-index: auto;
        }

        .comment-box {
            border: 1px solid rgba(0,0,0, 0.05);
            border-radius: 4px;
            width: 500px;
        }

        .noCommentHolder {
            height: 64px;
            width: 64px;
        }

        .commentSection {
            margin: 10px;
        }

        .text-content {
            display: flex;
            flex-direction: column;
            margin-left: 5px;
            width: 70%;
        }

        .text-content > p {
            margin-top: 0px;
        }
        
        .post-image {
            width: 560px;
            height: auto;
            border-radius: 10px;
        }

        mat-card-content{
            overflow: hidden;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    `
})

export class PostComponent {
    postImage = require("../../assets/bloons.jpg");
    noComment = require("../../assets/Cybercats_2023_allmode.png")

    likeNumber = 32429;

    addLikes(item: number){
        item += 1;
    }
}