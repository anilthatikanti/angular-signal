import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';
import { WebsocketService } from './../services/websocket-service.service';

@Component({
  selector: 'app-signal-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-sample.component.html',
  styleUrl: './signal-sample.component.css'
})
export class SignalSampleComponent {
  stockSignal = computed(()=>this.webSocketService.getStockSignal())
  
  constructor(private webSocketService: WebsocketService) {
  }
  
  ngOnInit() {
    // this.stockSignal.set(this.webSocketService.getStockSignal());
    // No need to subscribe because the signal takes care of reactivity
 
  }
  private getRandomPrice(): number {
    return Math.floor(Math.random() * 1000) + 100;
  }

}
