import { AIMockService } from "./ai-mock.service";
import { IAIChatService } from "./ai-service.interface";
import { AITulipEngine } from "./ai-tulip.service";
import { OpenAIChatService } from "./open-ai-chat.service";
import { AIChatRequest, AIMessageResponseFormat, SupportedAIEngines } from "./types";

/**
 * Acts like a factory to present multilpe types of AI Service Providers
 * This is to ensure we can leverage the power of ML and AI toolings as we develop more complex
 * in house ML/AI capabilities 
 */
export class AIServiceProvider {
    constructor() { }

    async makeAIRequest(request: AIChatRequest): Promise<AIMessageResponseFormat> {
        const aiService = this.pickAppropriateAIEngine(request.type);
        const response = await aiService.makeChatRequest(request);

        return response;
    }

    pickAppropriateAIEngine(engineType: SupportedAIEngines): IAIChatService {

        switch (engineType) {
            case SupportedAIEngines.MOCK_AI:
                return new AIMockService();

            case SupportedAIEngines.OPEN_AI:
                return new OpenAIChatService();

            case SupportedAIEngines.TULIP_SOLUTION_1:
                return new AITulipEngine();

            default:
                return new AIMockService();
        }
    }

}