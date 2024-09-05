import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service.js';
import { CreateArticleDto } from './dto/create-article.dto.js';
import { UpdateArticleDto } from './dto/update-article.dto.js';
import { Article } from './entity/article.entity.js';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { boolean } from 'drizzle-orm/mysql-core';

@ApiTags("articles")
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiResponse({ type: Article })
  create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiResponse({ type: [Article] })
  findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ type: Article })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto): Promise<Article> {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: "Supprimé"})
  remove(@Param('id') id: string): Promise<boolean> {
    return this.articlesService.remove(+id);
  }
}
