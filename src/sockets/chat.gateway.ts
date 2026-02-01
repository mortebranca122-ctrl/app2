import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) { console.log('Cliente conectado:', client.id); }

  @SubscribeMessage('join_room')
  handleJoin(client: Socket, payload: any) {
    client.join(payload.roomId);
    client.to(payload.roomId).emit('user_joined', { userId: payload.userId });
  }

  @SubscribeMessage('send_message')
  handleMessage(client: Socket, payload: any) {
    this.server.to(payload.roomId).emit('receive_message', {
      ...payload,
      senderId: client.id,
      createdAt: new Date()
    });
  }
}