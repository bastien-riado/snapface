import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? `je suis ${value} et je suis pair` : `je suis ${value} et je suis impair`),
      tap(text => this.logger(text))
    );
  }

  logger(text: string) {
    console.log(`Log: ${text}`);
  }
}