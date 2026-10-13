import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  afterNextRender,
  afterEveryRender
} from '@angular/core';

@Component({
  selector: 'lifecycle-hook',
  standalone: true,
  templateUrl: './lifecycle.html'
})
export class LifecycleComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() dataInput: string = '';

  constructor() {
    console.log('1. Constructor: Component instantiated');

    afterNextRender(() => {
      console.log('9. afterNextRender: DOM rendered once');
    });

    afterEveryRender(() => {
      console.log('10. afterEveryRender: Application rendered');
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges: Input changed', changes);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit: Component initialized');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck: Change detection checked');
  }

  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit: Projected content initialized');
  }

  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked: Projected content checked');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit: Component view initialized');
  }

  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked: Component view checked');
  }

  ngOnDestroy(): void {
    console.log('11. ngOnDestroy: Component destroyed');
  }
}