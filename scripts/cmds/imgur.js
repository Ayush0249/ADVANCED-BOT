const axios = require('axios');

module.exports = {
  config: {
    name: "imgur",
    version: "1.0",
    author: "Aadi",//i just convert this command from mirai
    countDown: 5,
    role: 0,
    longDescription: {
      en: "upload your video and photo to imgur"
    },
    category: "𝗧𝗢𝗢𝗟𝗦",  
    description: "convert image/video into Imgur link",
    commandCategory: "tools",
    usages: "reply [image, video]"
  },

  onStart: async function ({ api, event }) {
    const dip = event.messageReply?.attachments[0]?.url;
    if (!link2) {
      return api.sendMessage('Please reply to an image or video.', event.threadID, event.messageID);
    }
    try {
      const res = await axios.get(`https://eurix-api.replit.app/imgur?link=${encodeURIComponent(link2)}`);
      const link2 = res.data.data;
         api.sendMessage(link2, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      return api.sendMessage('Failed to convert image or video into link.', event.threadID, event.messageID);
    }
  }
};
