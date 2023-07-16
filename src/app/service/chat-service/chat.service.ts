import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;
  constructor() {
    this.socket = io('http://localhost:8088');
    console.log('socket', this.socket);
  }
  joinRoom(data: any) {
    console.log('join', data);
    this.socket.emit('join', data);
  }

  newUserJoined() {
    let observable = new Observable<{ user: String; message: String }>(
      (observer) => {
        this.socket.on('new user joined', (data: any) => {
          console.log('new join', data);
          observer.next(data);
        });
        console.log('inside return');
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }

  leaveRoom(data: any) {
    this.socket.emit('leave', data);
  }

  userLeftRoom() {
    let observable = new Observable<{ user: String; message: String }>(
      (observer) => {
        this.socket.on('left room', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }

  sendMessage(data: any) {
    console.log('send msg', data);
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    let observable = new Observable<{ user: String; message: String }>(
      (observer) => {
        this.socket.on('new message', (data) => {
          console.log('new msg', data);
          observer.next(data);
        });
        console.log('inside return');
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }
}
