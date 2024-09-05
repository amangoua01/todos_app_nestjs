import { Module } from '@nestjs/common';
import { LigneCommandesService } from './ligne-commandes.service.js';
import { LigneCommandesController } from './ligne-commandes.controller.js';

@Module({
  controllers: [LigneCommandesController],
  providers: [LigneCommandesService],
})
export class LigneCommandesModule {}
