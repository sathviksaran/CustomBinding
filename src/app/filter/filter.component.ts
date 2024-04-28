import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
    @Input('Total') all: number = 0;
    @Input() free: number = 0;
    @Input() premium: number = 0;

    selectedRadioButtonValue: string = 'All';

    @Output()
    filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChanged(){
      this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
      // console.log(this.selectedRadioButtonValue);
    }
}
