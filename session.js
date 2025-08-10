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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0FCWW9iOTc1QkMrS2YwRkZNczZaYTdBRmcreDlzT0FxY3VtbXQvQ1NtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1lnb1NXVnhUUW4yajNIZWgra0ZOWG5RLzNzNVowemx5b0RWSmF1ZGd5Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQWlzcWZJWjVaQ0swZDc2QW5BaUtRUjZiTVlsQVB0YTBLcW9HSG5RT24wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTdURBaVZDc3hMZnJDWDhsamdJak1sVmRna2NUUlJLQmlKdUl6TlpwaW04PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKaTZyRzBnTi92ZmJDT1B6VExmN3Znd0NHOEM0OTFjTk9IR0ZKNWdUVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZhZWlEODVKaWxEWnhkeGpPa05neUg1NkhVcW9wbmVtTEx6dGNpVEo4V3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEliQnFtZUc0aG1DejRaMi9GOGxNN0Z1V1EwMGNQM29kUUxkVHJNb0VtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNS8rTGpudUdvRWNvM1p1MXR2bkxVU2RFVVdNaDhwNDdPWEM1dEVDRjFSVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI3WSsyWWRhMWdnY2QzbHpJZVRJMFBobU9sa3BGdVgyanp1ZERlZjYvT3ZLRUZLTnBzQS8vL3hWZ01NajdCUGRGMlNvMnhpbFZmK0w5bVVLazl1TUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiJ5UUlKQjVka3ducGpiUlg4b3hwQ2FVMDkxUWZGMVBBdkt5QU5xTUUxeHpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwNjZYNG9nRlJqcWN0Z3k0RGJWdHRRIiwicGhvbmVJZCI6IjdlM2Y4ODdkLWYwOGYtNGM2Ni04MjA0LWQzOGMwZjgzMDg3YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyWlhVNXZuNnF0UDhWUlg0eHowMk9URVFobzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjk5RlpTWjRXcmJTQ0tnVHoxM3Z4LytLa3dzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlYzNUZZSlZYIiwibWUiOnsiaWQiOiI5NDcyNjk1NjYzMDoxOEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxOTkyMzkzNDYzMDA3NzoxOEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09iRWxOMENFSXlTNDhRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjU4SFJrRG5Waml3UXpWWFkwZFhzQktOUWFCZW9UMkx6YXp4QXN3UzZ5Qm89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikw2dXNBNS9KT3lTYWY3Z3B4NmE3Y0taeXpQT01KTDlLOUc1TzlpeHZnd2VZOHkwZDd1Q2FmUG9ZZTk0OTJUZ2FQblJKV2Y5Y21sRFQzbVlFZ3ZSbUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5ZE02c1JQR2tpL1RmWmtmcG0zbFVvRVlBS3pCREhTUm5GYlBmRjhBYXJEMDFsNGZycGpxa2ZiR0dDMXBuRHdVWENkYUpCTnlDY2JvaVNVRmVGa0dEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI2OTU2NjMwOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVmQjBaQTUxWTRzRU0xVjJOSFY3QVNqVUdnWHFFOWk4MnM4UUxNRXVzZ2EifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDg0MzQxOCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94726956630",
  PASSWORD: 
    process.env.PASSWORD || "Devnath",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
