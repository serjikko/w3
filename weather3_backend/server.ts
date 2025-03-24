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
        {"role": "system", "text": systemText},
        {"role": "user", "text": userText}
    ]
};

  return await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    console.log(response)
   return (response.result.alternatives[0].message.text);
  })
  .catch(() => null);
}

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
    if (parsedUrl.pathname === "/fix"){ 
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString(); 
      });
  
      req.on("end", async () => {
        try {
          const parsedBody = JSON.parse(body); 
  
          const GPTRes = await POSTGPT(parsedBody.text, "Ты - текстовый ассистент. Твоя задача исправить грамматические предоставленные ошибки текста. Не нужно дорабатывать текст писать что-то новое. Исправь ошибки.")
          
          if (GPTRes) {
            console.log('Получен запрос')
            res.writeHead(200);
            res.end(JSON.stringify({ text: GPTRes }));
          } else {
            res.writeHead(404);
            res.end()
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
    } else if (parsedUrl.pathname === "/improve") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString(); 
      });
  
      req.on("end", async () => {
        try {
          const parsedBody = JSON.parse(body); 
  
          const GPTRes = await POSTGPT(parsedBody.text, "Ты - текстовый ассистент. Твоя задача улучшить текст - исправть ошибки, сделать его понятнее.")
          
          if (GPTRes) {
            res.writeHead(200);
            res.end(JSON.stringify({ text: GPTRes }));
          } else {
            res.writeHead(404);
            res.end()
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
    } else if (parsedUrl.pathname === "/analyze") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString(); 
      });

      req.on("end", async () => {
        try {
          const parsedBody = JSON.parse(body); 

          const GPTRes = await POSTGPT(parsedBody.text, "Ты - текстовый ассистент. Твоя задача исправить проанализировать текст и определить его эмоциональный тон. Варианты ответа: негативный, нейтральный, позитивный. Твой ответ должен быть только одним из вариантов с маленькой буквы.")

          if (GPTRes) {
            res.writeHead(200);
            res.end(JSON.stringify({ text: GPTRes }));
          } else {
            res.writeHead(404);
            res.end()
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
  } 
}
});

server.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
