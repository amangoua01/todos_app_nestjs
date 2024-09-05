import { Body, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto.js';
import { UpdateArticleDto } from './dto/update-article.dto.js';
import { db } from "../index.js";
import { articles } from '../schema.js';
import { Article } from './entity/article.entity.js';
import { eq } from 'drizzle-orm';


@Injectable()
export class ArticlesService {
  async create(@Body() createArticleDto: CreateArticleDto) : Promise<Article> {
    const res = await db.insert(articles).values(createArticleDto);
    return this.findOne(res[0].insertId);
  }

  findAll(): Promise<Article[]> {
    return db.select().from(articles);
  }

  async findOne(id: number) : Promise<Article> {
    return (await db.select().from(articles).where(eq(articles.id, id)))[0];
  }

  async update(id: number, updateArticleDto: UpdateArticleDto): Promise<Article> {
    await db.update(articles).set(updateArticleDto).where(eq(articles.id, id));
    const article =await db.select().from(articles).where(eq(articles.id, id));
    return article[0];
  }

  async remove(id: number) : Promise<boolean> {
    await db.delete(articles).where(eq(articles.id, id));
    return true;
  }
}
