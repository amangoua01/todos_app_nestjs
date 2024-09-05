import { PartialType } from '@nestjs/mapped-types';
import { CreateLigneCommandeDto } from './create-ligne-commande.dto.js';

export class UpdateLigneCommandeDto extends PartialType(CreateLigneCommandeDto) {}
