import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { Auth, signInAnonymously } from '@angular/fire/auth';
import { IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { UpdatesNotificationComponent } from './app-updates-notification';

@Component({
  selector: 'app-root',
  imports: [IonRouterOutlet, UpdatesNotificationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements OnInit {
  public readonly title = signal('MacDrive');
  private readonly _auth = inject(Auth);
  private readonly _platform = inject(Platform);

  async ngOnInit() {
    const p = this._platform.platforms();
    console.log('Current platform: ', p);
    // you can use ngOnInit if you have to run multiple async logic
    // await signInAnonymously(this._auth);
    // await myNextAsyncMethod();
  }
}
