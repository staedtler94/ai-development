import {AIChatRequest, AIMessageResponseFormat} from './types';

export interface IAIChatService{
     makeChatRequest: (requestConfig: AIChatRequest) => Promise<AIMessageResponseFormat>;
}