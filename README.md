# ngx-debounce-input

A simple Angular2+ directive that adds a debounce to your input fields 🚀

## Installation:

```bash
npm i ngx-debounce-input --save
```

## Use Example:

Add the declaration to `@NgModule`:

```typescript
import { NgxDebounceInput } from 'ngx-debounce-input';

...

@NgModule({
  imports: [
    NgxDebounceInput
  ]
})
```

Use inside your HTML template

```
<input ngxDebounceInput (debounce)="search($event)" [(ngModel)]="myModel">
```