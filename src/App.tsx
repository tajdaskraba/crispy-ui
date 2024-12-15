import React from 'react';
import Button from './components/Button/Button';
import TextField from './components/TextField/TextField';

const App: React.FC = () => {
  return (
    <div className="box">
      <div className="box__text-field">
        <TextField label="Text producer" variant="primary"/>
      </div>
      <Button label="Submit" variant="primary"/>
    </div>
  );
};

export default App;
