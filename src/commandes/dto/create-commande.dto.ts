import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';


export class CreateCommandeDto {
  @ApiProperty({example : "2024-03-02T12:00:00"})
  @IsDate()
  dateCommande: string;
  @ApiProperty()
  montant: number;
  @ApiProperty()
  userId: string;
}
