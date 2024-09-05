import { Injectable } from '@nestjs/common';
import { CreateLigneCommandeDto } from './dto/create-ligne-commande.dto.js';
import { UpdateLigneCommandeDto } from './dto/update-ligne-commande.dto.js';

@Injectable()
export class LigneCommandesService {
  create(createLigneCommandeDto: CreateLigneCommandeDto) {
    return 'This action adds a new ligneCommande';
  }

  findAll() {
    return `This action returns all ligneCommandes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ligneCommande`;
  }

  update(id: number, updateLigneCommandeDto: UpdateLigneCommandeDto) {
    return `This action updates a #${id} ligneCommande`;
  }

  remove(id: number) {
    return `This action removes a #${id} ligneCommande`;
  }
}
