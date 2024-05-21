import axios, { AxiosRequestConfig } from 'axios';
import { AIChatRequest, OpenAIMessageFormat, OpenAIRequestModel, SupportedAIEngines } from './types';
import { IAIChatService } from './ai-service.interface';



export class OpenAIChatService implements IAIChatService {
    constructor() { }

    private url = 'https://chat-gpt26.p.rapidapi.com/'; // API endpoint

    buildAIRequestConfig(chatMessages: OpenAIMessageFormat[]): AxiosRequestConfig {
        return {
            method: 'POST',
            url: this.url,
            headers: {
                'content-type': 'application/json',
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': process.env.AI_Key,
                'X-RapidAPI-Host': 'chat-gpt26.p.rapidapi.com'
            },
            data: {
                model: 'gpt-3.5-turbo',
                messages: chatMessages
            }
        }
    }

    async makeChatRequest(request: OpenAIRequestModel) {
        try {
            
            if (request.type !== SupportedAIEngines.OPEN_AI) {
                throw new Error("Misconfigured Data type");
            }

            const requestConfig = this.buildAIRequestConfig(request.chatMessages);
            const response = await axios.request(requestConfig);

            console.log(JSON.stringify(response.data));
            return response.data?.message;
        } catch (error) {
            console.error(error);
        }
    }

}


