import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: name,
        valid: nameValid,
        hasError: nameInputError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(value => value.trim() !== '');

    const {
        value: email,
        valid: emailValid,
        hasError: emailInputError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(value => value.includes('@'));

    const formValid = nameValid && emailValid;

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(formValid) {
            console.log("Name: " + name);
            console.log("E-Mail: " + email);
        }
        resetName();
        resetEmail();
    }
    const nameInputClasses = nameInputError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
            value={name}
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
        />
          {nameInputError && <p className="error-text">Name must not be empty.</p>}
      </div>
    <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail</label>
        <input
            value={email}
            type='text'
            id='email'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
        />
        {emailInputError && <p className="error-text">E-Mail must be valid E-Mail.</p>}
    </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
