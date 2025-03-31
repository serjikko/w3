import http, { IncomingMessage, ServerResponse } from "http";
import { parse } from "url";

const PORT = 3030;
const IAM_TOKEN = "";
const FOLDER_ID = "b1gcfeka4ita132okdf2";

async function POSTGPT(userText: string, systemText: string): Promise<string | null> {
  const url = "https://llm.api.cloud.yandex.net/foundationModels/v1/completion";
  const headers = {
    "Authorization": `Bearer ${IAM_TOKEN}`,
    "Content-Type": "application/json"
  };
  const data = {
    "modelUri": `gpt://${FOLDER_ID}/yandexgpt/latest`,
    "completionOptions": {
      "stream": false,
      "temperature": 0.7,
      "maxTokens": 300
    },
    "messages": [
      { "role": "system", "text": systemText },
      { "role": "user", "text": userText }
    ]
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result.result.alternatives[0]?.message.text || null;
  } catch (error) {
    console.error("Ошибка при обращении к API:", error);
    return null;
  }
}

const handleRequest = async (req: IncomingMessage, res: ServerResponse, systemText: string) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      const parsedBody = JSON.parse(body);
      const GPTRes = await POSTGPT(parsedBody.text, systemText);

      if (GPTRes) {
        res.writeHead(200);
        res.end(JSON.stringify({ text: GPTRes }));
      } else {
        res.writeHead(404);
        res.end();
      }
    } catch (error) {
      console.error("Ошибка при парсинге JSON:", error);
      res.writeHead(400);
      res.end(JSON.stringify({ error: "Неверный формат тела запроса" }));
    }
  });

  req.on("error", (err) => {
    console.error("Ошибка в запросе:", err);
    res.writeHead(500);
    res.end(JSON.stringify({ error: "Ошибка сервера" }));
  });
};

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url || "", true);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST') {
    switch (parsedUrl.pathname) {
      case "/fix":
        handleRequest(req, res, "Ты - текстовый ассистент. Твоя задача исправить грамматические предоставленные ошибки текста. Не нужно дорабатывать текст писать что-то новое. Исправь ошибки.");
        break;
      case "/improve":
        handleRequest(req, res, "Ты - текстовый ассистент. Твоя задача улучшить текст - исправить ошибки, сделать его понятнее.");
        break;
      case "/analyze":
        handleRequest(req, res, "Ты - текстовый ассистент. Твоя задача проанализировать текст и определить его эмоциональный тон. Варианты ответа: негативный, нейтральный, позитивный. Твой ответ должен быть только одним из вариантов с маленькой буквы.");
        break;
      default:
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Неизвестный путь" }));
    }
  }
});

server.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
