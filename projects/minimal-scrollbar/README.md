## MinimalScrollbar
An Angular directive to fix Windows's "mid-nineties" scrollbars.  
No extra configuration, no required markup. 

### How to use it?
1. Install MinimalScrollbar  
`npm i @altack/minimal-scrollbar`

2. Add the `MinimalScrollbarModule` to your `app.module.ts` (or any other)  

3. Use it like a `directive` on your scrollable container  
`<div class="container">`  
    `<div class="content" minimal-scrollbar>long content goes here</div>`  
`</div>` 

### How it works?
This is just an Angular implementation of the workaround described by the guys of FilamentGroup
https://www.filamentgroup.com/lab/scrollbars/

