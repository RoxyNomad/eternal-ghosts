import { Event } from '../../domain/events.entity';
import { SelectEventDb } from '../db/events.schema';

export class EventMapper {
  static toDomain(raw: SelectEventDb): Event {
    return {
      id: raw.id,
      title: raw.title,
      date: raw.date,
      location: raw.location ?? undefined,
    };
  }

  static toDomainList(rows: SelectEventDb[]): Event[] {
    return rows.map(EventMapper.toDomain);
  }
}