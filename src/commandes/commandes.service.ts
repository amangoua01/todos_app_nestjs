import { Injectable } from '@nestjs/common';
import { CreateCommandeDto } from './dto/create-commande.dto.js';
import { UpdateCommandeDto } from './dto/update-commande.dto.js';
import { Commande } from './entity/commande.entity.js';
import { db } from '../index.js';
import { commandes } from '../schema.js';
import { eq } from 'drizzle-orm';

@Injectable()
export class CommandesService {
  async create(createCommandeDto: CreateCommandeDto): Promise<Commande> {
      const res = await db.insert(commandes).values(createCommandeDto);
      return await this.findOne(res[0].insertId);
  }

  findAll(): Promise<Commande[]> {
    return db.select().from(commandes);
  }

  async findOne(id: number): Promise<Commande> {
    return (await db.select().from(commandes).where(eq(commandes.id, id)))[0];
  }

  async update(id: number, updateCommandeDto: UpdateCommandeDto): Promise<Commande> {
    const res = await db.update(commandes).set(updateCommandeDto).where(eq(commandes.id, id));
    console.log(res[0].insertId)
    return await this.findOne(res[0].insertId);
  }

  async remove(id: number): Promise<boolean> {
    await db.delete(commandes).where(eq(commandes.id, id));
    return true;
  }
}
