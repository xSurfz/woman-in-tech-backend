import { EventController } from "./presentation/controllers/EventController.js";
import { PrismaEventRepository } from "./domain/repositories/PrismaEventRepository.js";

import { GetEventsUseCase } from "./application/use-cases/GetEventsUseCase.js";
import { GetEventBySlugUseCase } from "./application/use-cases/GetEventBySlugUseCase.js";
import { CreateEventUseCase } from "./application/use-cases/CreateEventUseCase.js";
import { UpdateEventUseCase } from "./application/use-cases/UpdateEventUseCase.js";
import { DeleteEventUseCase } from "./application/use-cases/DeleteEventUseCase.js";

import { createFileStorageService } from "@/infrastructure/upload/storage/index.js";

const repository = new PrismaEventRepository();

const getEventsUseCase = new GetEventsUseCase(repository);

const storageService = createFileStorageService();

const getEventBySlugUseCase = new GetEventBySlugUseCase(repository);
const createEventUseCase = new CreateEventUseCase(storageService);
const updateEventUseCase = new UpdateEventUseCase();
const deleteEventUseCase = new DeleteEventUseCase();

export const eventController = new EventController(
  getEventsUseCase,
  getEventBySlugUseCase,
);

export { createEventUseCase, updateEventUseCase, deleteEventUseCase };
