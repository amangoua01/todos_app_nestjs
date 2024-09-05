import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandesService } from './commandes.service.js';
import { CreateCommandeDto } from './dto/create-commande.dto.js';
import { UpdateCommandeDto } from './dto/update-commande.dto.js';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Commande } from './entity/commande.entity.js';
import { boolean } from 'drizzle-orm/mysql-core';

@Controller('commandes')
@ApiTags('commandes')
export class CommandesController {
  constructor(private readonly commandesService: CommandesService) {}

  @Post()
  @ApiResponse({ type: Commande })
  create(@Body() createCommandeDto: CreateCommandeDto): Promise<Commande> {
    return this.commandesService.create(createCommandeDto);
  }

  @Get()
  @ApiResponse({ type: [Commande] })
  findAll(): Promise<Commande[]> {
    return this.commandesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: Commande })
  findOne(@Param('id') id: string): Promise<Commande> {
    return this.commandesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ type: Commande })
  update(@Param('id') id: string, @Body() updateCommandeDto: UpdateCommandeDto): Promise<Commande> {
    return this.commandesService.update(+id, updateCommandeDto);
  }

  @Delete(':id')
  @ApiResponse({ type: boolean })
  remove(@Param('id') id: string): Promise<boolean> {
    return this.commandesService.remove(+id);
  }
}
