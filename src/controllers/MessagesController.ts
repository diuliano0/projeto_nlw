import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(request: Request, response: Response): Promise<Response>{
    const {admin_id, user_id, text} = request.body;
    const messageService = new MessagesService();
    try{
      const message = messageService.create({admin_id, user_id, text});
      return response.json(message);
    }catch(err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async showByUser(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const messageService = new MessagesService();
    const list = await messageService.listByUser(id);
    return response.json(list);
  }
}
export { MessagesController };
