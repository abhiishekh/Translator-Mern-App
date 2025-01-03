    import express from 'express'
    import { translate } from '@vitalets/google-translate-api'
    import cors from 'cors'
    const app = express()

    app.use(express.json())
    app.use(cors({origin:[
        'https://translator-mern-app-vryj.vercel.app','http://localhost:3000'
    ]}))
    app.post('/translate', async (req, res) => {
        const text = req.body.text; 
        const language = req.body.select;

        if (!text) {
            return res.status(400).json({ error: 'No text provided for translation' })
        }
        if(!language){
            return res.status(400).json({error:'No language provided'})
        }
        try {
            let translatedText;
        if(language == 'French'){
            
            translatedText = await translate(text, { from: 'en', to: 'fr' })
            res.status(200).json({
                translatedText: translatedText.text
            })
        }else if(language== 'Spanish'){
            translatedText = await translate(text, {from:'en',to:'es'})
            res.status(200).json({
                translatedText:translatedText.text
            })
        }else if(language == 'Hindi'){
            translatedText = await translate(text, {from:'en',to:'hi'})
            res.status(200).json({
                translatedText:translatedText.text
            })
        }

        } catch (error) {
            console.error('Error during translation:', error)
            res.status(500).json({ error: 'Translation failed' })
        }
    })
    app.get('/',(req,res)=>{
        res.send("backend is working")
    })
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })
