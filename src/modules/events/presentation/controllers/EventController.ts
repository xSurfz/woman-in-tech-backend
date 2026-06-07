import { Request, Response } from "express";

import { GetEventsUseCase } from "@/modules/events/application/use-cases/GetEventsUseCase.js";
import { GetEventBySlugUseCase } from "@/modules/events/application/use-cases/GetEventBySlugUseCase.js";
import { successResponse } from "@/shared/http/success-response.js";

export class EventController {
  constructor(
    private readonly getEventsUseCase: GetEventsUseCase,
    private readonly getEventBySlugUseCase: GetEventBySlugUseCase,
  ) {}

  async getEvents(req: Request, res: Response): Promise<void> {
    const events = await this.getEventsUseCase.execute();

    res.status(200).json({
      success: true,
      data: events,
    });
  }

  async getEventBySlug(req: Request, res: Response): Promise<void> {
    const slug = String(req.params.slug);

    const event = await this.getEventBySlugUseCase.execute(slug);

    successResponse(res, event);
  }
}
