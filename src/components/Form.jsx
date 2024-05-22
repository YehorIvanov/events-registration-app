import {useState} from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    birthDate: '',
    lidSourse: '',
  });
  const onSubmitHandler = () => {
    console.log(formData);
  };
  const onFieldChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  return (
    <form className='event-registration-form'>
      <h5>Event Reristration</h5>
      <label>
        Full name
        <input
          className='event-registration-form_input'
          type='text'
          name='fullName'
          value={formData.fullName}
          onChange={onFieldChange}
          placeholder='Peter Peterson'
        />
      </label>
      <label>
        Email
        <input
          className='event-registration-form_input'
          type='email'
          onChange={onFieldChange}
          name='email'
          value={formData.email}
          placeholder='email@example.com'
        />
      </label>
      <label>
        Date of birth
        <input
          className='event-registration-form_input'
          type='date'
          name='birthDate'
          value={formData.birthDate}
          onChange={onFieldChange}
          placeholder='dd.mm.yyyy'
        />
      </label>
      <span>Where did you heare about this event?</span>
      <div className='event-registration-form_radio-wrapper'>
        <label className='event-registration-form_radio-label'>
          <input
            className='event-registration-form_radio-input'
            type='radio'
            value='social media'
            name='lidSourse'
            onClick={onFieldChange}
          />
          Social media
        </label>
        <label className='event-registration-form_radio-label'>
          <input
            className='event-registration-form_radio-input'
            type='radio'
            value='friends'
            name='lidSourse'
            onClick={onFieldChange}
          />
          Friends
        </label>
        <label className='event-registration-form_radio-label'>
          <input
            className='event-registration-form_radio-input'
            type='radio'
            value='found it myself'
            name='lidSourse'
            onClick={onFieldChange}
          />
          Found myself
        </label>
      </div>
        <button type='button' onClick={onSubmitHandler}>
          submit
        </button>
    </form>
  );
};

export default Form;
