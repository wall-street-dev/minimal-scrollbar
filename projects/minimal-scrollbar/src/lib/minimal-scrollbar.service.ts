import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MinimalScrollbarService {
  // tslint:disable-next-line:variable-name
  private obtrusiveScrollbar: boolean;
  private renderer: Renderer2;

  get isObtrusive(): boolean {
    if (this.obtrusiveScrollbar === undefined) {
      this.obtrusiveScrollbar = this.scrollbarWidthTest();
    }
    return this.obtrusiveScrollbar;
  }

  constructor(@Inject(DOCUMENT) private document: any, rendererFactory: RendererFactory2) {
      this.renderer = rendererFactory.createRenderer(null, null);
  }

  scrollbarWidthTest(): boolean {
      const parent: HTMLElement = this.renderer.createElement('div');
      this.renderer.setAttribute(parent, 'style', `
       width: 30px;
       height: 30px;
       overscroll-behavior: contain;
       overflow-y: auto;
       -webkit-overflow-scrolling: touch;
       -ms-overflow-style: -ms-autohiding-scrollbar;
       scrollbar-width: thin`);

      const child: HTMLElement = this.renderer.createElement('div');
      this.renderer.setAttribute(child, 'style', `width:100%;height:40px`);
      this.renderer.appendChild(parent, child);
      this.renderer.appendChild(this.document.body, parent);
      const isObtrusive = !!(30 - ((parent.firstChild as Element).clientWidth));
      this.renderer.removeChild(this.document.body, parent);
      return isObtrusive;
  }
}
