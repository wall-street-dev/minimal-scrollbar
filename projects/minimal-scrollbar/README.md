## MinimalScrollbar
An Angular directive to fix Windows's "mid-nineties" scrollbars.  
No extra configuration, no required markup and also minimal size (3.8 KB MINIFIED, 1.2 KB GZIPPED)

### How to use it?
1. Install MinimalScrollbar  
`npm i @altack/minimal-scrollbar`

2. Add the `MinimalScrollbarModule` to your `app.module.ts` (or any other)  

3. Use it like a `directive` on your -already- scrollable container  
`<div class="container" minimal-scrollbar>`  
    `<div class="content">long content goes here</div>`  
`</div>` 

### How it works?
The idea is to preserve the unobtrusive scrollbars of iOS, Android and MacOS and replace Windows scrollbars on Chrome, Firefox and Edge
Credit goes to the guys at FilamentGroup. This is just an Angular implementation of its workaround.
https://www.filamentgroup.com/lab/scrollbars/  
