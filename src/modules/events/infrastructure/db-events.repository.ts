import { eq, asc } from 'drizzle-orm';
import { db } from '@/infrastructure/neon';
import { eventsTable } from './db/events.schema';
import { CreateEventInput, Event } from '../domain/events.entity';
import { EventMapper } from './mappers/event.mapper';
import { EventRepository } from '@/modules/events/domain/events.repository';

export class DbEventRepository implements EventRepository {
  async getAll(): Promise<Event[]> {
    const rows = await db
      .select()
      .from(eventsTable)
      .orderBy(asc(eventsTable.date));

    return EventMapper.toDomainList(rows);
  }

  async create(input: CreateEventInput): Promise<Event> {
    const [inserted] = await db
      .insert(eventsTable)
      .values({
        title: input.title,
        date: typeof input.date === 'string' ? new Date(input.date) : input.date,
        location: input.location ?? null,
      })
      .returning();

    return EventMapper.toDomain(inserted);
  }

  async delete(id: number): Promise<void> {
    await db
      .delete(eventsTable)
      .where(eq(eventsTable.id, id));
  }
}