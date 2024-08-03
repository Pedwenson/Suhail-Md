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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_53_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm02d1Vjc3BITUlhUXo0cnNCQUY2Z3JRUUdoZnFVYnNvSmhWK1Iramg4V0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTgwOTgwMzczNTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVDODc5NEJGQUYwMjk2M0E1REFERDhEMDU5REYwMjU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY3MTYwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfdWE2bEVBZVNwLVF6c0dUOVBpQlVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU1NzVmN2M5LWUyMjEtNDMyOS1iNjBiLTgxMjUyM2E1MDczOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDkzLFxuICAgICAgMTAwLFxuICAgICAgMTEwLFxuICAgICAgMTI5LFxuICAgICAgMjEsXG4gICAgICAyNTQsXG4gICAgICAxMjAsXG4gICAgICAxMzAsXG4gICAgICA4MixcbiAgICAgIDI0OCxcbiAgICAgIDI0MyxcbiAgICAgIDM3LFxuICAgICAgNzEsXG4gICAgICAxMDgsXG4gICAgICA3OCxcbiAgICAgIDE2NyxcbiAgICAgIDExLFxuICAgICAgMjQsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMjM5LFxuICAgICAgMTc0LFxuICAgICAgMjEwLFxuICAgICAgNjQsXG4gICAgICA5OSxcbiAgICAgIDIyOCxcbiAgICAgIDE2LFxuICAgICAgODMsXG4gICAgICA4NyxcbiAgICAgIDIwNSxcbiAgICAgIDEzMixcbiAgICAgIDE0NyxcbiAgICAgIDExMSxcbiAgICAgIDIzOSxcbiAgICAgIDEzNyxcbiAgICAgIDIwLFxuICAgICAgMjEyLFxuICAgICAgMTMwLFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpZV0pOMVI1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODA5ODAzNzM1MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIzwnZCrIPCdkJHwnZCe8J2QnfCdkIHwnZCo8J2QslwiLFxuICAgIFwibGlkXCI6IFwiMTgzMjQ1MTk5MTQzMDU1OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHeTNGRVE2c08zdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUElLSTNneVlWSFo5SFhoNXR2QjNuajZGbG1XbVh1MmMvOHhIM2Z5RGMwdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0YlZCblZ6aGtiNmgvdVZXUUJuL1hYMTI0UWdZa2dTdzRPbGQxemxzY1FCWXJiZDhYS0s3ajlpYVU0K25mN3BXd3FhSGtBR2RpcGUwc3R5ZFpZQ2pCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1c2F6MFE5Um1mN3ZmVXo3UDVTQWF1QTR6STZqUTF0WGxtc3ZKQ090bUpvbm5KdWVHWk9ETUd6dDNORmZ2UUhHSW5IS3ExRkpqTmNRRlB0eXdRaFFnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODA5ODAzNzM1MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NzE1OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBVmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFWaC5qc29uIjogIntcImtleURhdGFcIjpcImVGeVljKzdVeXRNa0pNajZSSW5SNkpCSUNSemRpdUhZWFFXWnRGM2c4c2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcxMzgzMDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
