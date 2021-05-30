import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[ngxDebounceInput]'
})
export class NgxDebounceInputDirective implements OnInit, OnDestroy {
  @Input() delay = 500;
  @Output() debounce = new EventEmitter<string>();

  private inputDebouncer$: Subject<string> = new Subject();
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly model: NgModel
  ) { }

  ngOnInit(): void {
    this.setupInputDebouncer();
    this.setupEventStream();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private setupInputDebouncer(): void {
    this.subscriptions.push(
      this.inputDebouncer$
        .pipe(
          debounceTime(this.delay),
          distinctUntilChanged()
        )
        .subscribe((value: string) => {
          this.debounce.emit(value);
        })
    );
  }

  private setupEventStream(): void {
    this.subscriptions.push(
      this.model.valueChanges.subscribe(
        (value: string) => {
          if (this.isValueValid(value)) {
            this.inputDebouncer$.next(value.trim());
          }
        }
      )
    );
  }

  private isValueValid(value: string): boolean {
    return value !== null && value !== undefined;
  }
}
