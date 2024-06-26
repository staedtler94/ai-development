import express from "express";
import 'dotenv/config';
import { OpenAIChatService } from "../ai/open-ai-chat.service";
import { AIServiceProvider } from "../ai/ai-service.provider";
import { SupportedAIEngines } from "../ai/types";

const app = express();

app.get('/ai', async (req, res) => {
    const aiServiceProvider = new AIServiceProvider();
    const response = aiServiceProvider.makeAIRequest({ type: SupportedAIEngines.OPEN_AI, chatMessages: [{ "role": "user", content: "Hello" }] })
    res.json({ "go shorty": "its your birthday" });
})

app.listen(3000, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        3000,
        "dev"
    );
    console.log("  Press CTRL-C to stop\n");
});
