import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Talk } from '@ngrx-example/api-interfaces';

@Component({
  selector: 'watch-button',
  templateUrl: './watch-button.component.html'
})
export class WatchButtonComponent {
  @Input() talk: Talk;
  @Input() watched: boolean;
  @Output() watch = new EventEmitter();

  handleWatch(): void {
    this.watch.next(null);
  }
}
