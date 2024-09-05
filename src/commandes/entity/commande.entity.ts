import { ApiProperty } from '@nestjs/swagger';

export class  Commande {
  @ApiProperty()
  id: number;
  @ApiProperty({ format: "2023-03-23T12:00:00" })
  dateCommande: string;
  @ApiProperty()
  montant: number;
  @ApiProperty()
  userId: string;
}
