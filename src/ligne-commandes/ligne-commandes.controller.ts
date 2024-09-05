import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LigneCommandesService } from './ligne-commandes.service.js';
import { CreateLigneCommandeDto } from './dto/create-ligne-commande.dto.js';
import { UpdateLigneCommandeDto } from './dto/update-ligne-commande.dto.js';

@Controller('ligne-commandes')
export class LigneCommandesController {
  constructor(private readonly ligneCommandesService: LigneCommandesService) {}

  @Post()
  create(@Body() createLigneCommandeDto: CreateLigneCommandeDto) {
    return this.ligneCommandesService.create(createLigneCommandeDto);
  }

  @Get()
  findAll() {
    return this.ligneCommandesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ligneCommandesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLigneCommandeDto: UpdateLigneCommandeDto) {
    return this.ligneCommandesService.update(+id, updateLigneCommandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ligneCommandesService.remove(+id);
  }
}
