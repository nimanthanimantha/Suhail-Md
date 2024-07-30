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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94766007621";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94766007621";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94766007621,94766007621";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_17_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICA3MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICA3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM4LFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIsXG4gICAgICAgIDExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU5LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDU0LFxuICAgICAgICA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNSMmkzYWhDTnM4WjRNYXc3ZzhWaThnYldsNGxJZytOR0VoUEdUN2tmcVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlN0MHVUSVMtUUMtWFlIbFhUQzVZT3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmFkNGMwZDAtY2VlOS00ZjNkLWExOWEtZGY3NmFhM2RmOTI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDEwOSxcbiAgICAgIDEsXG4gICAgICAzMyxcbiAgICAgIDIxMSxcbiAgICAgIDEwMCxcbiAgICAgIDEwNCxcbiAgICAgIDMxLFxuICAgICAgMTEzLFxuICAgICAgMTY5LFxuICAgICAgMTA2LFxuICAgICAgMjQ3LFxuICAgICAgMTk1LFxuICAgICAgMTk2LFxuICAgICAgMTIsXG4gICAgICAyNixcbiAgICAgIDEyLFxuICAgICAgMTIyLFxuICAgICAgMTE2LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMTE2LFxuICAgICAgMjQ1LFxuICAgICAgMTc5LFxuICAgICAgNTQsXG4gICAgICAxNTUsXG4gICAgICA3MixcbiAgICAgIDMxLFxuICAgICAgMjYsXG4gICAgICAyMDUsXG4gICAgICAxMDUsXG4gICAgICAxMzUsXG4gICAgICA1OCxcbiAgICAgIDExNixcbiAgICAgIDEzLFxuICAgICAgMTQ4LFxuICAgICAgMzIsXG4gICAgICA5NSxcbiAgICAgIDMzLFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllWOVpaSko2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NjAwNzYyMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGhhUnV3YUguLi4+PlwiLFxuICAgIFwibGlkXCI6IFwiMjY3Mjg5MTY5NTM1MDUxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXlsbmFnQkVNenVvYlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTTGVyZXZBclBDa1RJZ2hxdlI5QzF4bHZWM0Z5a3RCVU5kRERpWmFTNVcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlVSld2WGhrTHhPc1hYK0swWE1BVk52TmpFb0w2aDZyc1R2SmJpOGVWNG45S1FlZHlWbWpreTdNVnZVVHlVOXNpZkpFY0cyNDJtMzd6RE5nU1l3UUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtpd0xUUkhxdlpmU0pKT2Q2T0ZPQnVUaEpRTUs2ZnhSR3lDQTdhTGhWdlFQU2FHdnpIMk5WSjhJRUYwam53Q3FHUkVkT3Raald5dWhQTlo1TktTQkJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY2MDA3NjIxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzE2NjI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzdmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDN2YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzSDlWNS9KUGdWU2NPZ2RKMVdHcFlISFdrcnNCOHR2MTVUb2ZOMERJQ25zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM1MjgwMTQyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMzE2NTQ1NTM2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "TharuWah",
  packname: process.env.PACK_NAME || "tharu",
  botname : process.env.BOT_NAME  || "Bot tharuwaH",
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
