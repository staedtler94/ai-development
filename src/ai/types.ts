export type AIMessageResponseFormat = {
    "role": string,
    "content": string
};

export type OpenAIMessageFormat = {
    "role": string,
    "content": string
}

export enum SupportedAIEngines {
    MOCK_AI,
    OPEN_AI,
    TULIP_SOLUTION_1
}

export interface IAIRequestModel {
    type: SupportedAIEngines ;
}

export class OpenAIRequestModel implements IAIRequestModel{
    type: SupportedAIEngines.OPEN_AI;
    chatMessages: OpenAIMessageFormat[]
}

export type AIChatRequest = OpenAIRequestModel | IAIRequestModel;