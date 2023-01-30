import { Component, Input } from '@angular/core';

@Component({
  selector: 'santhoshini-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = 'shared'
}
