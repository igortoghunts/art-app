import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HomeMockService } from './services/home.mock.service';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading = true;
  selectedIndex = 0;
  content: string = '';
  selectItems = ['first', 'second', 'third', 'forth'];
  subscriptions: Subscription[] = [];

  constructor(private readonly homeService: HomeMockService) {}

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.subscriptions.map((sb) => sb.unsubscribe());
  }

  select(event: Event) {
    this.selectedIndex = (<HTMLSelectElement>event.target).selectedIndex;
    this.getData();
  }

  private getData() {
    this.loading = true;
    let sb = this.homeService.getData(this.selectedIndex).subscribe((content) => {
      this.content = content;
      this.loading = false;
    });

    this.subscriptions.push(sb);
  }
}
