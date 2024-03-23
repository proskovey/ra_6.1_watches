import React, {useState} from 'react';

function Form({addClock}) {
  const [form, setForm] = useState({name: '', zone: ''});

  const handleForm = (event) => {
    setForm((prev) => ({...prev, [event.target.name]: event.target.value}));
  }

  const handleClickBtnForm = () => {
    if (!form.name || !form.zone) return;
    addClock(form);
    setForm({name: '', zone: ''});
  }

  return (
    <form className="form-container">
      <div className="name-container">
        <label htmlFor="name">Название:</label>
        <input type="text" name="name" value={form.name} onChange={handleForm}/>
      </div>
      <div className='zone-container'>
        <label htmlFor="zone">Временная зона:</label>
        <input type="number" name="zone" value={form.zone} onChange={handleForm}/>
      </div>
      <div className="btn-container">
        <button className='form-btn' type='button' onClick={handleClickBtnForm}>Добавить</button>
      </div>
    </form>
  );
}

export default Form;