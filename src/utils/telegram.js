export const sendTelegramNotification = async (message) => {
  // Replace these with your actual Telegram bot token and chat ID
  const BOT_TOKEN = 'YOUR_BOT_TOKEN';
  const CHAT_ID = 'YOUR_CHAT_ID';
  
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
  }
};