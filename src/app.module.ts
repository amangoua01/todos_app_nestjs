import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { LigneCommandesModule } from './ligne-commandes/ligne-commandes.module.js';
import { CommandesModule } from './commandes/commandes.module.js';
import { ArticlesModule } from './articles/articles.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
      }),
    ArticlesModule,
    CommandesModule,
    LigneCommandesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
