import { Module } from '@nestjs/common';
import { CommandesService } from './commandes.service.js';
import { CommandesController } from './commandes.controller.js';

@Module({
  controllers: [CommandesController],
  providers: [CommandesService],
})
export class CommandesModule {}
