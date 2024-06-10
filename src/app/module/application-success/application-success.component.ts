import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-application-success',
  templateUrl: './application-success.component.html',
  styleUrl: './application-success.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class ApplicationSuccessComponent implements OnDestroy {
  application$: Observable<any> = new Observable();
  appSubscription: Subscription = new Subscription();

  constructor(private store: Store<{ applicationDetails: any }>) {
    this.application$ = this.store.select('applicationDetails');

    this.appSubscription = this.application$.subscribe((data) => {
      console.log(data)
    })
  }
  ngOnDestroy(): void {
    this.appSubscription.unsubscribe();
  }
}
