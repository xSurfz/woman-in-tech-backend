import { Request, Response } from "express";
import { GetMemberUseCase } from "@/modules/members/application/use-cases/GetMemberUseCase.js";
import { CreateMemberUseCase } from "@/modules/members/application/use-cases/CreateMemberUseCase.js";
import { successResponse } from "@/shared/http/success-response.js";
import { UpdateMemberUseCase } from "@/modules/members/application/use-cases/UpdateMemberUseCase.js";
import { DeleteMemberUseCase } from "@/modules/members/application/use-cases/DeleteMemberUseCase.js";
export class AdminMemberController {
  constructor(
    private readonly getMembersUseCase: GetMemberUseCase,
    private readonly createMemberUseCase: CreateMemberUseCase,
    private readonly updateMemberUseCase: UpdateMemberUseCase,
    private readonly deleteMemberUseCase: DeleteMemberUseCase,
  ) {}

  async getAll(
    req: Request,
    res: Response,
  ): Promise<void> {
    const members =
      await this.getMembersUseCase.execute();
  
    successResponse(res, members);
  }

  async create(req: Request, res: Response): Promise<void> {
    const member = await this.createMemberUseCase.execute(req.body);

    successResponse(res, member, 201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    const member = await this.updateMemberUseCase.execute(id, req.body);

    successResponse(res, member);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    await this.deleteMemberUseCase.execute(id);

    successResponse(res, { message: "Member deleted" });
  }
}
