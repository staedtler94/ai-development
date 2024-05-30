import { IAIChatService } from "./ai-service.interface";
import { AIChatRequest, AIMessageResponseFormat } from "./types";

/**
 * Mostly for dev work around e2e development
 */
export class AIMockService implements IAIChatService{
    constructor(){}
    makeChatRequest = async (requestConfig: AIChatRequest): Promise<AIMessageResponseFormat> => {
        return {
            role: "AI",
            "content": "Hello"
        }
    }

}