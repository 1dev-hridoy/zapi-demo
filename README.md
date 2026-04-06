# ZAPI Demo Project - Easy Testing

Eita ekta simple Express.js demo project ja ZAPI er shob features test korte parben.

---

## 🚀 Ki Ki Ase?

- **8 ta Text Model** - Chat, completion, shob kichu
- **3 ta Image Model** - Image generate o edit kora jabe
- **Simple UI** - EJS template + Tailwind CSS diye banano
- **Mobile Friendly** - Phone e o bhalo dekhabe

---

## 🎯 Shuru Korar Niyom

### Step 1: Package Install
```bash
https://github.com/1dev-hridoy/zapi-demo.git
cd zapi-demo
npm install
```

### Step 2: API Key Lagbe
Root folder e `.env` file banan:
```
API_KEY=zp_apnar_api_key_ekhane
```

**API key kothay paben?** 
- Main project e login kore "My API Keys" theke nite paren
- Nothun key create korte paren

### Step 3: Server Chalu
```bash
npm start
```

Browser e jan: http://localhost:3001

---

## 📋 Kivabe Use Korben

### Page Open Korle Paben:
- **Left Side:** Shob model er list
- **Right Side:** Test korer form

### Text Generate Korte:
1. "LLM Models" section theke jekono ekta select korun
2. "Test This Model" e click korun
3. Prompt likhun (ja jigges korben)
4. "Generate" click

### Image Generate Korte:
1. "Generative Models" theke select korun  
2. Image er jonno prompt din
3. "Generate" click
4. Image download korte paren

---

## ⚙️ Config

`.env` file e ja ja dite paren:

| Variable | Default | Ki?
|----------|---------|-----|
| `API_KEY` | - | **Must lagbe** - apnar ZAPI key |
| `API_BASE_URL` | `https://z.os7.site` | ZAPI server url |
| `PORT` | `3001` | Local port number |

---

## 🔥 Available Models

### Text Models (8 ta)

| Model Name | Slug | Feature |
|------------|------|---------|
| Llama 3.1 8B | `llama3.1-8b` | Fast, lightweight |
| Qwen 3 235B | `qwen-3-235b-a22b-instruct-2507` | Heavy, accurate |
| Compound Mini | `compound-mini` | Super fast |
| Llama 4 Scout | `llama-4-scout-17b-16e-instruct` | Balanced |
| Llama 3.3 70B | `llama-3.3-70b-versatile` | General purpose |
| Kimi K2 | `kimi-k2-instruct-0905` | Latest model |
| GPT OSS 20B | `gpt-oss-20b` | Open source |
| Venice | `venice` | Privacy focused |

### Image Models (3 ta)

| Model Name | Slug | Use |
|------------|------|-----|
| SimAI Image | `simai-image` | Text to image |
| GPT Image Edit | `gptimage` | Edit existing image |
| NanoBanana | `nanobanana` | Quick image gen |

---

## 💡 Example API Call

Demo page charao direct API call korte paren:

```bash
curl -X POST https://z.os7.site/api/llm/llama3.1-8b \
  -H "Content-Type: application/json" \
  -d '{
    "apikey": "zp_apnar_key",
    "prompt": "Bangladesh er capital ki?"
  }'
```

Response:
```json
{
  "status": 200,
  "data": {
    "text": "Bangladesh er capital Dhaka.",
    "model": "llama3.1-8b"
  }
}
```

---

## 🛠️ Project Structure

```
demo/
├── server.js         # Main server file
├── package.json      # Dependencies
├── .env             # Your config (na thakle banan)
├── views/
│   └── index.ejs    # Main page template
└── public/
    └── css/
        └── custom.css  # Extra styles
```

---

## ❗ Error Code Er Meaning

| Code | Ki Hoyeche | Solution |
|------|------------|----------|
| `400` | Missing parameter | Check input data |
| `401` | Invalid API key | Key thik ache kina dekhen |
| `403` | Key suspended | Dashboard e giye check korun |
| `404` | Model not found | Slug thik ache kina |
| `500` | Server error | Porre abar try korun |
| `502` | Provider down | Upstream service off |

---

## 🆘 Help Lagle?

- Main project er docs dekhen: `../README.md`
- ZAPI website: https://z.os7.site
- API key issue hole dashboard e giye check korun

---

## 📄 License

ISC - Free to use, modify, distribute.

**Made with ❤️ for Bangladeshi developers**
