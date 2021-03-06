import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NxModule } from "@nrwl/nx";
import { BlogModule } from "../../../../libs/blog";

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), BlogModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
