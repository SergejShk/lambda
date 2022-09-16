const { Command } = require("commander");
const TelegramBot = require("node-telegram-bot-api");
const optionsDescription = require("./optionsDescriptions.json");

const token = "5651676413:AAF69N0JCG92_8K-CQsrObt2saEnmabffqQ";
const chatId = 640661366;

const bot = new TelegramBot(token, { polling: true });

const program = new Command();

program
  .option("-m, --message <type>", "send message")
  .option("-ph, --photo <type>", "send photo")
  .option("-h, --help", "show options");

program.parse(process.argv);

const argv = program.opts();

const invokeOptions = async (option) => {
  const [optionKey] = Object.keys(option);

  switch (optionKey) {
    case "message":
      await bot.sendMessage(chatId, option.message);
      break;

    case "photo":
      await bot.sendPhoto(chatId, option.photo);
      break;

    case "help":
      console.table(optionsDescription);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
  process.exit();
};

invokeOptions(argv);
