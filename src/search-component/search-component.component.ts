import { Component, model,ModelSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent {
inputData = model('')//use it for two way binding
}
