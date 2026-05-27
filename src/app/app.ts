import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { Auth, signInAnonymously } from '@angular/fire/auth';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IonRouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements OnInit {
  public readonly title = signal('MacDrive');
  private readonly _auth = inject(Auth);

  async ngOnInit() {
    // you can use ngOnInit if you have to run multiple async logic
    // await signInAnonymously(this._auth);
    // await myNextAsyncMethod();
  }
}
