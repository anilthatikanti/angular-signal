import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  stockSignal = signal<liveData[]>([])
  ws!: WebSocket
  tokens: number[] = []
  dataMap: Map<number, liveData> = new Map<number, liveData>();

  constructor() {
    this.ws = new WebSocket(/* add websocket url**/);
    this.ws.onopen = () => {
      console.log('WebSocket connection established');
      const message = {
        "a": "subscribe",
        "v": this.tokens,
        "mode": "ltp"
      };
      // Send the message to the WebSocket server
      this.ws.send(JSON.stringify(message));
    };

    this.ws.onmessage = (event) => {
      this.updateData(JSON.parse(event.data))
      this.updateSignal();  
    };

    this.ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
   }

  getStockSignal() {
    return this.stockSignal();
  }
  updateData(data: liveData) {
    //this is way better than findIndex
    let test = this.dataMap.get(data.instrument_token)
    if (test) {
      Object.assign(test, data)
    } else {
      this.dataMap.set(data.instrument_token, data)
    }
  }
   updateSignal() {
    this.stockSignal.set(Array.from(this.dataMap.values()));
  }
 
}


interface liveData {
  change: number
  instrument_token: number
  last_price: number
  mode: string
  ohlc: Ohlc
  close: number
  high: number
  low: number
  open: number
  tradable: boolean
}

interface Ohlc {
  open: number
  high: number
  low: number
  close: number
}
