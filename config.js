//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923353505085";
global.owner = process.env.OWNER_NUMBER || "3197010539391";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxKU1QxQjM4cWM4alZ3a1duYWhvc1prL084SnNUVFVXZThsWnF0SE9FTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkhkdSt6SjJrSExJU0hUTU1nMmZzVVBUb2h5MEJrZHVtWVg2eDVwYVp6WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRDVkaXdUcDc3SE1OSXdYRUttU1M2OE9VWXgxc1RnUjY1UStSdTVyWUd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkdzNlU05oa0Nma2lWOVBhS256czJQWFMwTFc1dTZQbmpySE1SK0t6NFJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQYklpeWQ3dTJ3TGJMV0w3TEk0WjdjbHhlWXZ5RWJPN1RkdHpuWFFGazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InovZTJWT1BqaXlseVJiZSs4RjBqdkZrei9Xa1NncVRjTjNsUTZROWVMQXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9pZmJTNXo3TDBUQTkwNXd2czRBdG5WQ3J0Zi9HWWtQNEluQ0toVWhXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjBqL1h3TEp6dit0dkxpVitwQXgyM1BQRXU3VkU3OWlXTHQrazB0eThqaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFJUDdUQjg3TlI1bWdaQXNMSDFjbFhYR0lXREpBM3N5dlcyNmtDUzVPRmhOUHgrUTcvWmFqVTZXUEY3ZGlHSUpBc0JNY0JnYmRrUnNoU0crMnZucmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJaR3RNaFpDbTBqMDNRL1NmdFZUSjJwSHhQNTNEeGRlU3hoV2VLVHNFT000PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0YnJvcXVmUFJzS2YycFZSbnNzWHRnIiwicGhvbmVJZCI6ImI4NzI3NmYxLTllNDUtNDQwNC04NTNlLWJkNTIyOTY5MDc0ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzSTlQZThyY096WEppM1VMdFpzRnJGY1dVQ289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHhJYmpjVk9UbVRWeW9mZWY3Ny93MDY1T2dVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFIRjVYWDROIiwibWUiOnsiaWQiOiIzMTk3MDEwNTM5MzkxOjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImhtbW3igLnigKIu4oCi4oC6In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMU1UvbzBIRUx2aG1MVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYamtuWEhvLzUvWndvMGhEUFk3YnRld1Y1cGVDK3I1NDFERlZScE1wRm1BPSIsImFjY291bnRTaWduYXR1cmUiOiJnZUVVMDNEMjFUM2FSNlcvSVA0WFM3aWQrdGI0TzdQcWF2dmhiZDJTKzRNMXZZcFZoSlRtYTM4MDlvT2xGSVJrWTRGbVNMZWlEeEx4SzlGT01CaG9BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY2dkczlTTGtuREcwRTFjOE1TSlVxcTJMWjYxajFEamlrWWdFeUM1VnFJSHFTQlppQ0tVSUMzRTArZjVnSm9XTTdTY1p0YWhURDdBbUpVeGl0TkdDZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzMTk3MDEwNTM5MzkxOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY0NUoxeDZQK2YyY0tOSVF6Mk8yN1hzRmVhWGd2cStlTlF4VlVhVEtSWmcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxNjc0OTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSXF4In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
