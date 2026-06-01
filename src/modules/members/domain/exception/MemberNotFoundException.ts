import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

export class MemberNotFoundException extends NotFoundException {
  constructor() {
    super("Member not found", "MEMBER_NOT_FOUND");
  }
}
