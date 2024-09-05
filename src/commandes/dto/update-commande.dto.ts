import { PartialType } from '@nestjs/mapped-types';
import { CreateCommandeDto } from './create-commande.dto.js';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';

export class UpdateCommandeDto extends PartialType(CreateCommandeDto) {
  @ApiProperty({example : "2024-03-02T12:00:00"})
  @IsDate()
  dateCommande: string;
  @ApiProperty()
  montant: number;
  @ApiProperty()
  userId: string;
}
