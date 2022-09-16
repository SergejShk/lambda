const axios = require("axios").default;
const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs/promises");

const TOKEN = "5651676413:AAF69N0JCG92_8K-CQsrObt2saEnmabffqQ";

const bot = new TelegramBot(TOKEN, { polling: true });

const BASE_URL = "https://picsum.photos";

const getRandomImage = async () => {
  try {
    const { request } = await axios.get(`${BASE_URL}/200/300`);

    return request.path;
  } catch (error) {
    console.log(error);
  }
};

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === "photo") {
    const img = await getRandomImage();

    await bot.sendPhoto(chatId, `${BASE_URL}${img}`);
    return;
  }

  await bot.sendMessage(chatId, `Вы написали: ${msg.text}`);
});
