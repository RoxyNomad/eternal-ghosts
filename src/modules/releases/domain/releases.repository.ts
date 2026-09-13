import { Release } from './releases.entity';

export interface ReleasesRepository {
  findAll(): Promise<Release[]>;
  findById(id: string): Promise<Release | null>;
  create(release: Omit<Release, 'id' | 'createdAt'>): Promise<Release>;
  delete(id: string): Promise<void>;
}