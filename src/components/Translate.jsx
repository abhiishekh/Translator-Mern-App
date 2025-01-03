import React, { useEffect, useState } from 'react';
import translate from 'google-translate-api-browser';

const Translate = () => {
  const [translatedText, setTranslatedText] = useState('');

  // Predefined text to translate
  const textToTranslate = 'Hello, how are you?';

  useEffect(() => {
    const translateText = async () => {
      try {
        // Perform translation from English ('en') to Hindi ('hi')
        const res = await translate(textToTranslate, { from: 'en', to: 'hi' });
        
        // Set the translated text to state
        setTranslatedText(res.text);
      } catch (error) {
        console.error('Translation Error:', error);
      }
    };

    translateText();
  }, []);  // Empty dependency array ensures the translation runs once on component mount

  return (
    <div>
      <h1>Translation Example</h1>
      <p>Original Text: {textToTranslate}</p>
      <p>Translated Text: {translatedText}</p>
    </div>
  );
};

export default Translate;
