import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { merge, Observable, of, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ToastOptions } from '@ionic/core';
import { ToastController } from '@ionic/angular/standalone';
import { AsyncPipe } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-update',
    imports: [AsyncPipe],
    template: `
      @if (updateAvailable$|async) {}
    `,
})
export class UpdatesNotificationComponent {
    updateAvailable$: Observable<boolean | {}>;
    closed$ = new Subject<void>();

    constructor(
        private readonly _updates: SwUpdate,
        private readonly _toast: ToastController
    ) {
        this.updateAvailable$ = merge(
          of(false),
          this._updates.versionUpdates.pipe(
            filter((e) => e.type === 'VERSION_DETECTED'),
            map(async () => await this._displayNotif()),
            map(() => true)
          ),
          this.closed$.pipe(map(() => false))
        );
    }

    async activateUpdate() {
        if (!environment.isProd) {
            return
        }
        await this._updates.activateUpdate()
        location.reload();
    }

    private async _displayNotif() {
        console.log('display notification...');
        const toast = await this._toast.create({
          message: 'Nouvelle mise à jours!',
          position: 'bottom',
          buttons: [
            'Update'
          ],
          keyboardClose: true,
        });
        // alert('Nouvelle mise à jours!')
        console.log('present toast...')
        await toast.present();
        console.log('presented')
        await toast.onDidDismiss()
        console.log('dismissed...')
        this.activateUpdate();
        console.log('updated');
      }
}