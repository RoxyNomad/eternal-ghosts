// src/modules/events/infrastructure/event.factory.ts

import { DbEventRepository } from "./db-events.repository";

export function makeEventRepository() {
    return new DbEventRepository();
}