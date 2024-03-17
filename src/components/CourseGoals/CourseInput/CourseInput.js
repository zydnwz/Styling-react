import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = event => {
    const inputText = event.target.value.trim();
    setEnteredValue(inputText);
    setIsValid(inputText.length > 0); // Set isValid based on input length
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(''); // Clear input after submitting
    setIsValid(false); // Reset isValid after submitting
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? 'valid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit" className={!isValid ? 'invalid' : ''}>
        Add Goal
      </Button>
      {/* Debug information */}
      <p>isValid: {isValid.toString()}</p>
    </form>
  );
};

export default CourseInput;
