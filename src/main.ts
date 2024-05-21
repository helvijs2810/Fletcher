import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import 'zone.js'
import '../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css'
import './style.css'

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));