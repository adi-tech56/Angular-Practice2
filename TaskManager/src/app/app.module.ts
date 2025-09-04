import { NgModule } from "@angular/core";
import { App} from "./app";
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { TasksModule } from "./tasks/tasks.module";
import { Card } from "./shared/card/card";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
@NgModule(
  {
    declarations:[App,HeaderComponent,User],
    bootstrap:[App],

    imports:[TasksModule,SharedModule,BrowserModule]
  }
)
  export class AppModule{

    
}