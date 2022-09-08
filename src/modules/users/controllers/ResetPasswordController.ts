import { Request, Response } from 'express';
import ResetrPasswordService from '../services/ResetrPasswordService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body;

    const resetrPasswordService = new ResetrPasswordService();

    await resetrPasswordService.execute({ token, password });

    return response.status(204).json();
  }
}
