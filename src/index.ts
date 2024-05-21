import express from "express";
import 'dotenv/config';
import { OpenAIChatService } from "./ai/open-ai-chat.service";

const app = express();

app.get('/ai', async (req, res) => {
    const aiChatService = new OpenAIChatService();
    await aiChatService.makeChatRequest();
    res.json({"go shorty": "its your birthday"});
})

app.listen(3000, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        3000,
        "dev"
    );
    console.log("  Press CTRL-C to stop\n");
});
