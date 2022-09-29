import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length <=1 ) return;
    onNewCategory(inputValue);
    setInputValue('');
  };

  return (
    <form 
      className="input-container"
      onSubmit={ onSubmit }>

      <input 
        type="text"
        placeholder="Look for a gif"
        value={ inputValue }
        onChange={ onInputChange } />
      <button 
        onClick={ onSubmit }>
          Search</button>
    </form>
  )
}
