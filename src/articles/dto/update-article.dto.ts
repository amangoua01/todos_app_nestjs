import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto.js';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @ApiProperty()
  libelle: string;
}
