
import { desc } from "drizzle-orm";
import { db } from "@/infrastructure/neon";
import { newsTable } from "./db/news.schema";
import { CreateNews, News } from "@/modules/news/domain/news.entity";
import { NewsRepository } from "@/modules/news/domain/news.repository";
import { NewsMapper } from "./mappers/news.mapper";

export class DbNewsRepository implements NewsRepository {
  async getAllPublished(): Promise<News[]> {
    const rows = await db
      .select()
      .from(newsTable)
      .orderBy(desc(newsTable.publishedAt));

    return NewsMapper.toDomainList(rows);
  }

  async create(data: CreateNews): Promise<News> {
    const [inserted] = await db
      .insert(newsTable)
      .values({
        title: data.title,
        content: data.content,
        imageUrl: data.imageUrl ?? null,
      })
      .returning();

    return NewsMapper.toDomain(inserted);
  }
}