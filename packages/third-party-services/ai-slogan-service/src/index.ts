import express from 'express';
import cors from 'cors';
import { pipeline } from '@xenova/transformers';

const app = express();

app.use(cors());

app.use(express.json());

let generator: any = null;

app.post('/generate', async (req, res) => {
  const { keyword } = req.body as { keyword: string };

  if (!keyword) {
    return res.status(400).json({ error: 'Keyword is required' });
  }

  try {
    if (!generator) {
      console.log('🚀 Loading Xenova/gpt2 model...');
      generator = await pipeline('text-generation', 'Xenova/gpt2');

      console.log('✅ Xenova/gpt2 model loaded');
    }

    let slogan = '';

    switch (keyword.toLocaleLowerCase()) {
      case 'docker':
        slogan = 'Box it!';
        break;
      case 'javascript':
        slogan = 'This is undefined?';
        break;
      case 'css':
        slogan = 'Center it!';
        break;
      default:
        const prompt = `As a clever developer, come up with a short, funny tech slogan about "${keyword}". 
    Make it sound like it belongs on a t-shirt.`;

        const output = await generator(prompt, {
          max_new_tokens: 30,
          temperature: 0.95,
          top_k: 50,
          top_p: 0.95,
          do_sample: true,
        });

        const fullText = output[0].generated_text;
        slogan = fullText
          .replace(prompt, '')
          .trim()
          .split(/[\n\.]/)[0];
        break;
    }

    res.json({ slogan });
  } catch (error) {
    console.error('❌ Generation error:', error);
    res.status(500).json({ error: 'Text generation failed' });
  }
});

app.listen(3001, () => {
  console.log('🚀 AI Slogan API running at http://localhost:3001');
});
