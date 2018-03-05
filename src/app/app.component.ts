import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ThemingService } from "./theming/theming.service";
import { Subscription } from "rxjs/Subscription";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  themeClass: string;
  private subscription;

  constructor(
    private router: Router,
    private ts: ThemingService,
    private overlaycontainer: OverlayContainer
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga("set", "page", event.urlAfterRedirects);
        (<any>window).ga("send", "pageview");
      }
    });
  }

  ngOnInit(): void {
    this.subscription = this.ts.themeMessage.subscribe(themeClass => {
      this.overlaycontainer
        .getContainerElement()
        .classList.remove(this.themeClass);
      this.themeClass = themeClass;
      this.overlaycontainer
        .getContainerElement()
        .classList.add(this.themeClass);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
