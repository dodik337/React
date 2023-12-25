import {useState} from "react";

const InputField = () => {
    const [inputValue, setInputValue] = useState('');
  return (
      <>
        <input onChange={(event) => setInputValue(event.target.value)} placeholder='Input!'/>
        {inputValue === 'Hello' && <p>Hi!</p>}
      </>
  );
}

export default InputField