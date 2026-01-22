import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-full text-full hover:bg-blue-600 transition shadow-md"
      (click)="btnClicked.emit()"
    >
      <span>{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input<string>('label');
  btnClicked = output<void>();
}
