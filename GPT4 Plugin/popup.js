const queryInput = document.getElementById('query');
const submitButton = document.getElementById('submit');
const responseDiv = document.getElementById('response');

const WOLFRAM_API_KEY = '9QTEVR-EJHEGP8WAK';
const GPT4_API_KEY = 'your_gpt4_api_key';

submitButton.addEventListener('click', async () => {
  const query = queryInput.value;
  const wolframResponse = await fetchWolframData(query);
  const gpt4Response = await fetchGPT4Data(query);

  responseDiv.innerHTML = `<h3>Wolfram Response:</h3><p>${wolframResponse}</p><h3>GPT-4 Response:</h3><p>${gpt4Response}</p>`;
});

async function fetchWolframData(query) {
  const url = `https://api.wolframalpha.com/v1/result?input=${encodeURIComponent(query)}&format=plaintext&output=JSON&appid=${WOLFRAM_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.plaintext;
}

async function fetchGPT4Data(query) {
  const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GPT4_API_KEY}`,
    },
    body: JSON.stringify({
      prompt: query,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.7,
    }),
  });
  const data = await response.json();
  return data.choices[0].text.trim();
}
