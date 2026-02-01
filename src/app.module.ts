import { Module } from '@nestjs/common';
import { ChatGateway } from './sockets/chat.gateway';

@Module({
  imports: [],
  providers: [ChatGateway],
})
export class AppModule {}