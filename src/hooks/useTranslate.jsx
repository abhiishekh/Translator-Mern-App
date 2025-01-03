import axios from "axios";
import { createContext, useContext, useState } from "react";
// 1. Create the context
const TranslateContext = createContext();

// 2. Provide the context
export const ContextProvider = ({ children }) => {
  const [formData, setFormData] = useState("");
  const [result, setResult] = useState("");
  const [select, setSelect]=useState('');
  const [language, setLanguage]= useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if(name === 'select'){
      setSelect(value)
    }
    else if (name !== "text") {
      console.log("no text input");
      return;
    }else{

      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const fetchdata =async()=>{
    const dataToSend = {
      ...formData,
      select
    }
    try {
      setLoading(true)
      const response = await axios.post('https://translator-mern-app.vercel.app/translate',dataToSend)
      setResult(response.data.translatedText)

      
    } catch (error) {
      console.log("Something went wrong " + error)
      setLoading(false)
    }finally{
      setLoading(false)
    }
  }
  const handleClick = () => {
    fetchdata()
  };

  return (
    <TranslateContext.Provider
      value={{
        formData,
        result,
        select,
        language,
        loading,
        setLoading,
        setLanguage,
        setFormData,
        setSelect,
        handleChange,
        handleClick,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
};

// 3. Use the context
export const useTranslate = () => {
  const contexthook = useContext(TranslateContext);

  if (!contexthook) {
    throw new Error("useTranslate must be used within a ContextProvider");
  }

  return contexthook;
};
