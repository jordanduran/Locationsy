import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = () => {
  const handleTitleInputChange = useCallback((id, value, isValid) => {}, []);

  const handleDescriptionInputChange = useCallback((id, value, isValid) => {},
  []);

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
        onInput={handleTitleInputChange}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter at least 5 characters for the description.'
        onInput={handleDescriptionInputChange}
      />
    </form>
  );
};

export default NewPlace;
