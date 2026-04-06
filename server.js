const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




const API_BASE_URL = process.env.API_BASE_URL || 'https://z.os7.site';
const API_KEY = process.env.API_KEY || '';

app.get('/', (req, res) => {
  res.render('index', { 
    title: 'zapi demo',
    apiBaseUrl: API_BASE_URL,
    hasApiKey: !!API_KEY 
  });
});




app.post('/api/llm/:modelname', async (req, res) => {
  try {
    const { modelname } = req.params;
    const { prompt, systemprompt } = req.body;

    const response = await axios.post(`${API_BASE_URL}/api/llm/${modelname}`, {
      apikey: API_KEY,
      prompt,
      systemprompt
    });

    res.json(response.data);
  } catch (error) {
    console.error('LLM API Error:', error.message);
    res.status(error.response?.status || 500).json({
      status: error.response?.status || 500,
      error: error.response?.data?.error || error.message
    });
  }
});




app.post('/api/llm-gen/:modelname', async (req, res) => {
  try {
    const { modelname } = req.params;
    const { prompt, aspect_ratio, imageUrl, nonce } = req.body;

    const requestBody = { apikey: API_KEY, prompt };
    if (aspect_ratio) requestBody.aspect_ratio = aspect_ratio;
    if (nonce) requestBody.nonce = nonce;
    if (imageUrl) requestBody.imageUrl = imageUrl;

    const response = await axios.post(`${API_BASE_URL}/api/llm/${modelname}`, requestBody, {
      responseType: 'arraybuffer'
    });

    const contentType = response.headers['content-type'] || 'image/png';
    res.set('Content-Type', contentType);
    res.send(response.data);
  } catch (error) {
    console.error('Generative API Error:', error.message);
    res.status(error.response?.status || 500).json({
      status: error.response?.status || 500,
      error: error.response?.data?.error || error.message
    });
  }
});





app.get('/api/usage', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/user/usage`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Usage API Error:', error.message);
    res.status(error.response?.status || 500).json({
      status: error.response?.status || 500,
      error: error.response?.data?.error || error.message
    });
  }
});



app.listen(PORT, () => {
  console.log(`ZAPI Demo server running at http://localhost:${PORT}`);
  console.log(`API Base URL: ${API_BASE_URL}`);
  console.log(`API Key configured: ${API_KEY ? 'Yes' : 'No - set API_KEY in .env'}`);
});
