//system
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OverlayContainer } from "@angular/cdk/overlay";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";

//author
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //TODO: make OverlayContainer switchable
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add("custome2-theme");
  }
}
