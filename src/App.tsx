import React, { useState } from 'react';
import Button from './components/Button/Button';
import Icon from './components/Icon/Icon';
import TextField from './components/TextField/TextField';
import { containsNumbers, validateInput } from './components/helpers';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const handleValidation = () => {
    const validationResult = validateInput(value, containsNumbers);

    setIsError(validationResult.hasError);
    setShowPopup(validationResult.isValid);

    if (validationResult.isValid) {
      setPopupContent(validationResult.message);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  const handleEnterPress = (inputValue: string) => {
    setValue(inputValue);
    handleValidation();
  };

  const handleButtonClick = () => {
    handleValidation();
  };

  return (
    <div className="box">
      <div className="box__text-field">
        <TextField
          label="Text producer"
          variant={isError ? 'error' : 'secondary'}
          validationError={isError ? 'No numbers allowed!' : ''}
          onChange={(value) => {
            setValue(value);
            setIsError(false);
          }}
          onEnterPress={handleEnterPress}
        />
      </div>
      {showPopup && (
        <div className="box__popup">
          <span>{popupContent}</span>
        </div>
      )}
      <Button
        label="Submit"
        variant="secondary"
        onClick={handleButtonClick}
        rightIcon={<Icon.ArrowBack size={16} />}
      />
    </div>
  );
};

export default App;
