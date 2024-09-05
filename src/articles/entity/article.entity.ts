import { ApiProperty } from '@nestjs/swagger';

export class Article {
  @ApiProperty()
  id: number;

  @ApiProperty()
  libelle: string;
}