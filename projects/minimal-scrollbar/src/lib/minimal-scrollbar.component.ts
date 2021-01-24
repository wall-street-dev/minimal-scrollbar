import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import {MinimalScrollbarService} from './minimal-scrollbar.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[minimal-scrollbar]',
  styleUrls: ['./minimal-scrollbar.component.scss'],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'minimalScrollbar'
})
export class MinimalScrollbarComponent implements OnInit {

  @HostBinding('class.alt-minimal-scrollbar')
  get obtrusiveScrollbar(): boolean {
    return this.minimalScrollbar.isObtrusive;
  }
  constructor(private minimalScrollbar: MinimalScrollbarService) { }

  ngOnInit(): void {

  }

}
