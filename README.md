# ngx-debounce-input

A simple Angular2+ directive that adds a debounce to your input fields 🚀

## 💡 Features
* [✔️] Delays the start of a function call
* [✔️] Checks whether the current input is sitting from previously entered value

## 🚀 Installation

```bash
npm i @mattewn99/ngx-debounce-input
```

## 🛠 Input Properties

| Name      | Type      | Default Value | Description                                                    |
| --------- | --------- | ------------- | -------------------------------------------------------------- |
| delay     | number    | 500            | This is the time between key events before a user stops typing. |

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