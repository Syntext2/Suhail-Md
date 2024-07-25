const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121247704";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_21_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxODksXG4gICAgICAgIDc2LFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMwLFxuICAgICAgICA5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgMjMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcyLFxuICAgICAgICA3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNixcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICA1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmQmpVZWQ4S01jV2pYUTAvaGZ4UFIva3JBOStjS25wMzd6ekp3WENrUTdjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjEyNDc3MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU3NkI0RkEwMkYwOTEyNURGRjFERDRCM0VCODYzODc0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTk0MjUwNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFX2dsMGdPM1M2R0V0NmV2N055dW5RXCIsXG4gIFwicGhvbmVJZFwiOiBcImZjOGEzMzU0LWYzYWItNDY5Yy05MmQ3LWUzM2JkZTAxZWIxZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAyNDUsXG4gICAgICA4NyxcbiAgICAgIDEzNixcbiAgICAgIDQ3LFxuICAgICAgOTksXG4gICAgICAyMDcsXG4gICAgICA0OCxcbiAgICAgIDIzOCxcbiAgICAgIDE0NSxcbiAgICAgIDE4OSxcbiAgICAgIDE4MSxcbiAgICAgIDgxLFxuICAgICAgMTMwLFxuICAgICAgMTczLFxuICAgICAgMjM4LFxuICAgICAgMTk1LFxuICAgICAgMTc4LFxuICAgICAgNTIsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDE0NCxcbiAgICAgIDIwNSxcbiAgICAgIDE0OSxcbiAgICAgIDE1NCxcbiAgICAgIDExLFxuICAgICAgOTgsXG4gICAgICAxNzcsXG4gICAgICA4MSxcbiAgICAgIDcxLFxuICAgICAgMTc3LFxuICAgICAgODMsXG4gICAgICAyMTYsXG4gICAgICA1NCxcbiAgICAgIDUzLFxuICAgICAgMjAwLFxuICAgICAgOTUsXG4gICAgICAyNTQsXG4gICAgICAxNTUsXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNNjE3RTc2UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMTI0NzcwNDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDk4NDQwMTU0ODA5OTg6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYnJuS0VERU9LRGk3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklrV2dJR0U3NldldjVZc0VoMDJJVDlUekttQWczN1VRVi9zZFoybFl2VE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUmh6SnJ1L3VPaStDOEFVeW54K2lySVRKNmt4U2JEMUJQS0dTczMxeHJTUUxjK0V4aGtVdTB4ODdpZlh1UXA4cEhOWmNLSGViYmt2MkJsNCsxTEcyQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRG9INVV5Uy9yUDNWdzBHYW9iRGFad0cvMkk0M3NSYlZxVXFUR0JhMjRGUk5qbTJpYnhzdkVXblNLTDY2eXhkNmhYY1o2S1VqeTcxWjNCTjI5S1I2QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyMTI0NzcwNDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTk0MjUwMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5zVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnNULmpzb24iOiAie1wia2V5RGF0YVwiOlwiLzl6WDFmcklqbFNQTmh6TnNEbkptekJDWjJLU3dobXBXTmo3WXpzZG41UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzQ5ODQ5MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5NDI0MDA5NjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
