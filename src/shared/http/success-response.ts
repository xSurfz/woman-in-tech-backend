import { Response } from "express";

import { ApiResponse } from "@/core/types/ApiResponse.js";

export const successResponse = <T>(
  res: Response,
  data: T,
  statusCode = 200,
): Response<ApiResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    data,
  });
};
