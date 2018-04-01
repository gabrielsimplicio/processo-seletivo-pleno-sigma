import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  isVisible = false;
  private subscription: Subscription;

  constructor(private loaderService: LoadingService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
            .subscribe((state) => {
                this.isVisible = state.isVisible;
            });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
