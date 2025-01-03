import React from 'react';
import './App.css';
import { ContextProvider } from './hooks/useTranslate';
import { CountProvider } from './hooks/useCount';
import Input from './components/Input';
import Button from './components/Button';
import Result from './components/Result';
import Translate from './components/Translate';


function App() {
  return (
    <ContextProvider>
      <CountProvider>

      <div className="w-full bg-neutral-300 min-h-screen">
        <div className='w-full sm:w-[800px] bg-neutral-200 mx-auto p-5 min-h-screen shadow-2xl shadow-black'>

        <h1 className='text-3xl font-abhi2 mx-auto flex justify-center tracking-wider'>Language Translator</h1>
        <div className=' w-full mx-auto flex flex-col items-center mt-10'>

        <Input/>
        <Result/>
        <Button/>
        {/* <Translate/> */}
        </div>
        </div>
      </div>
      </CountProvider>

     </ContextProvider>
  );
}

export default App;
