const API_KEY = '';

async function sendMessage(message) {
  // Send a POST request to the ChatGPT API with the user's message
  const response = await fetch('https://api.openai.com/v1/engine/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt: `Chat with GPT:\n\nUser: ${message}\nGPT:`,
      max_tokens: 60
    })
  });

  // Parse the response JSON and return the generated text
  const data = await response.json();
  return data.choices[0].text;
}

module.exports = {
  sendMessage
};
