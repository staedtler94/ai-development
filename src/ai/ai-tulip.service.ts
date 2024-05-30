import { IAIChatService } from "./ai-service.interface";
import { AIChatRequest, AIMessageResponseFormat } from "./types";

export class AITulipEngine implements IAIChatService {
    constructor() { }
    makeChatRequest = async (requestConfig: AIChatRequest): Promise<AIMessageResponseFormat> => {
        return {
            role: "BOT",
            content: "Hello"
        }
     };
}