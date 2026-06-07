import { Request, Response } from "express";

import { CreateEventUseCase } from "@/modules/events/application/use-cases/CreateEventUseCase.js";
import { UpdateEventUseCase } from "@/modules/events/application/use-cases/UpdateEventUseCase.js";
import { DeleteEventUseCase } from "@/modules/events/application/use-cases/DeleteEventUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class AdminEventController {
  constructor(
    private readonly createEventUseCase: CreateEventUseCase,
    private readonly updateEventUseCase: UpdateEventUseCase,
    private readonly deleteEventUseCase: DeleteEventUseCase,
  ) {}

  async create(req: Request, res: Response) {
    const file = req.file;
    console.log("Entró al controlador");
    console.log(req.file);
    const data = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location ?? null,
      eventMode: req.body.eventMode,
      startsAt: new Date(req.body.startsAt),
      endsAt: req.body.endsAt ? new Date(req.body.endsAt) : undefined,
      externalUrl: req.body.externalUrl ?? null,
      isFeatured: req.body.isFeatured === "true",
    };
    console.log("Entró a metodo ejecutar")
    const event = await this.createEventUseCase.execute(data, file);
    console.log("Salió de metodo ejecutar")
    return res.json({
      success: true,
      data: event,
    });
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    const event = await this.updateEventUseCase.execute(id, req.body);

    successResponse(res, event);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    await this.deleteEventUseCase.execute(id);

    successResponse(res, { message: "Deleted" });
  }
}
