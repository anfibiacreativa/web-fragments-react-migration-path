import express from 'express'
import cors from 'cors'
import { pipeline } from '@xenova/transformers'

const app = express()

app.use(cors())

app.use(express.json())

let generator: any = null

app.post('/generate', async (req, res) => {
  const { keyword } = req.body as { keyword: string }

  if (!keyword) {
    return res.status(400).json({ error: 'Keyword is required' })
  }

  try {
    if (!generator) {
      console.log('🔄 Loading distilgpt2 model...')
      generator = await pipeline('text-generation', 'Xenova/distilgpt2')
      console.log('✅ Model loaded')
    }

    const prompt = `Tech slogan about ${keyword}:`
    const output = await generator(prompt, {
      max_new_tokens: 15,
      do_sample: true,
      temperature: 0.9
    })

    const fullText = output[0].generated_text
    const slogan = fullText.replace(prompt, '').trim()

    res.json({ slogan })
  } catch (error) {
    console.error('Generation error:', error)
    res.status(500).json({ error: 'Text generation failed' })
  }
})

app.listen(3001, () => {
  console.log('🚀 AI Slogan API running at http://localhost:3001')
})
