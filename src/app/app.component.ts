import { Component, ModelSignal, Signal, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignalSampleComponent } from '../signal-sample/signal-sample.component';
import { FormsModule } from '@angular/forms';
import { SearchComponentComponent } from '../search-component/search-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,SignalSampleComponent,SearchComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  counter=signal(0)
  // counter=model(0)
  checked:string=''
  increament(){
    this.counter.update((value)=>++value)
  }

}
