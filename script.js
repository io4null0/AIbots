async function getBotResponse(message) {
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      prompt: message,
      max_tokens: 50
    })
  });
  
  const data = await response.json();
  return data.choices[0].text.trim();
}
