import useHomemadeInput from "../hooks/use-homemade-input";

const BasicForm = (props) => {
    const {
        value: fname,
        valid: fnameValid,
        errors: fnameErrors,
        blurHandler: fnameBlurHandler,
        updateHandler: fnameUpdateHandler,
        reset: fnameReset
    } = useHomemadeInput(value => value.trim() !== '');
    const {
        value: lname,
        valid: lnameValid,
        errors: lnameErrors,
        blurHandler: lnameBlurHandler,
        updateHandler: lnameUpdateHandler,
        reset: lnameReset
    } = useHomemadeInput(value => value.trim() !== '');
    const {
        value: email,
        valid: emailValid,
        errors: emailErrors,
        blurHandler: emailBlurHandler,
        updateHandler: emailUpdateHandler,
        reset: emailReset
    } = useHomemadeInput(value => value.includes('@'));

    const fnameClasses = fnameErrors ? 'form-control invalid' : 'form-control';
    const lnameClasses = lnameErrors ? 'form-control invalid' : 'form-control';
    const emailClasses = emailErrors ? 'form-control invalid' : 'form-control';

    const formValid = fnameValid && lnameValid && emailValid;

    const submitHandler = (event) => {
        event.preventDefault();
        if(formValid) {
            console.log("Your Name: " + fname + " " + lname);
            console.log("Your E-Mail: " + email);
        }
        fnameReset();
        lnameReset();
        emailReset();
    }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={fnameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={fname} onChange={fnameUpdateHandler} onBlur={fnameBlurHandler} />
          {fnameErrors && <p className="error-text">First Name cannot be empty.</p>}
        </div>
        <div className={lnameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lname} onChange={lnameUpdateHandler} onBlur={lnameBlurHandler} />
            {lnameErrors && <p className="error-text">Last Name cannot be empty.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailUpdateHandler} onBlur={emailBlurHandler} />
          {emailErrors && <p className="error-text">E-Mail must be a valid E-Mail.</p> }
      </div>
      <div className='form-actions'>
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
