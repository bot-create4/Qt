//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJQb0ZtYVJkMjNRWml2MVdHdWlGajR3QitPZmRMS1EzKytzVVQ4dXZGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTndZNW8yaUFVa2NrQU9UQmZRNWxEb0pVeVdUMFZmSERWdEtLN2Rnb3JqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQjJMMlEyMVVDNkZwVmVpTVhQeDFoUlRaeHBjckRncnVrRUFLV3lrcjBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKSTl4UDJUb1hYYURicVAxSitBaVFPU256TC9Ecy9jaWo5dEQ0MDhrMlFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1LTk5oV3ZFSkFOa3luQ08weDNoSyt6Z0Q4dEswUm93MThxa2tFaE5JRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZFb2JoSlMrK1RWbW5DTEQyTnRseW9KWi8xMVU0NVN6V0NYSVhvWS9iU289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5CUnl6T05jRjNBdFZKRFpCQkt6V2MxTnRkMTQ5OC81Ui81TW55RkFYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzJTOUdHeXc5NjB6TDNWQlRjZnQwa200dXBBUnJtUFQwTWtjSkltQ2p4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNBU2hXRUpWQ2NVVFlneEozK0tCVG04elgvWW9XVzNpVk42R01kYmlhdVdPSnh5aG5XbDBVUEtJY3VxNXI1dElHRHU5OFFhZk04OFl1VWtyanY0V2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiQTZGRU9jbHpzM3B2ZDhxMU5uUUo0QmUzZE1JaXRhc2w3M3pWck1kdEVrVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia3gwWnVQenZRM21lRW9lNXBHeEN0dyIsInBob25lSWQiOiI4Nzk3OTk1Ni1iNDQ5LTQzYWMtYmY3My1iMmUyYTI0Yjk4ZTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU5hTXk1S0V3RnB6UVQ5L1ozaGJLTHR1MzlNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU1ckNGTitGL2NwVmM0b2hWdlB1eWQyRTBVZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJISExCUEdNViIsIm1lIjp7ImlkIjoiOTQ3MjY4ODA3ODQ6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiyoDhtIDJtHPhtIDKgOG0gCDhtIXhtIfhtKDJtOG0gOG0m8qcIiwibGlkIjoiMjQ5NDgyMTM0NDQyMTY0OjI4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTktqeGVNRkVPYnU1TVFHR0E0Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQk1kdFhwTGF1SEZWZjdwRTY0WGtNSjl1a21YYUdzVWNIYmt3YVdnVldscz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS1FFMGxnQXZuQVNWeExibGRpaE1LOHUrUmtZUXIrTkNkV29XNXR5ZnhNYzE3c1ZrK1hPdU45K3JZdmIvTkhvZ2NNNGt0elRlR3pkVnJpRitxbkRNQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InRGMTNDdG4yWVE3bE9IcWV2NXFzL3FldHpSd3RzSitrOEFLa3k4UmRVMlRyaXpKWk9XdUwxN3ZXVVJoOW1tWGJ3WlNRUXdsOHlrV2xvMmV1Uk5HSmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjY4ODA3ODQ6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVRIYlY2UzJyaHhWWCs2Uk91RjVEQ2ZicEpsMmhyRkhCMjVNR2xvRlZwYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0ODcxNjY4LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94726880784",
  PASSWORD: 
    process.env.PASSWORD || "Ransara",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
