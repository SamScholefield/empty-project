import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ThemingService {
  //TODO Get initial theme value from authed user settings, or default
  private themeSource = new BehaviorSubject<string>("custom1-theme");
  themeMessage = this.themeSource.asObservable();

  constructor() {}

  changeTheme(themeClass: string) {
    this.themeSource.next(themeClass);
  }
}
