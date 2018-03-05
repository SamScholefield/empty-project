import { Component, OnInit } from "@angular/core";
import { ThemingService } from "./theming.service";

@Component({
  selector: "app-theming",
  templateUrl: "./theming.component.html",
  styleUrls: ["./theming.component.scss"]
})
export class ThemingComponent implements OnInit {
  constructor(private ts: ThemingService) {}

  ngOnInit() {}

  themeChoice(event) {
    if (event.checked) {
      this.ts.changeTheme("custom2-theme");
    } else {
      this.ts.changeTheme("custom1-theme");
    }
  }

  newMessage() {}
}
