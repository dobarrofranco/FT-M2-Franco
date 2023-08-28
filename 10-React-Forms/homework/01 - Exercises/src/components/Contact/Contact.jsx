import React, {useState} from 'react'
import './Contact.modules.css'

// eslint-disable-next-line

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
    let errors={};

    if (!inputs.name) {
        errors.name = 'Se requiere un nombre';
    }
    
    if (!regexEmail.test(inputs.email)) {
        errors.email = 'Debe ser un correo electrónico';
    }

    if (!inputs.message) {
        errors.message = 'Se requiere un mensaje';
    }

    return errors;
}

export default function Contact () {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    setInput({...input, [event.target.name]: event.target.value});

    setErrors(validate({...input, [event.target.name]: event.target.value}));
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();

    if (!Object.values(errors).length) {

      alert('Datos completos');
     
      setInput({
        name: '',
        email: '',
        message: ''
      });
      
      setErrors({
        name: '',
        email: '',
        message: ''
      });
      

    }else{

      alert('Debe llenar todos los campos');
    
    }
  }

  return ( 
    <div>
      <form onSubmit={handleSubmit}>

        <label>Nombre:</label>
        <input className={errors.name && 'warning'} type="text" name='name' placeholder='Escribe tu nombre...' value={input.name} onChange={handleChange}/>
        
        <p className='danger'>{errors.name}</p>

        <label>Correo Electrónico:</label>
        <input className={errors.email && 'warning'} type="text" name='email' placeholder='Escribe tu email...' value={input.email} onChange={handleChange}/>
        
        <p className='danger'>{errors.email}</p>

        <label>Mensaje:</label>
        <textarea className={errors.message && 'warning'} name="message" cols="30" rows="10" placeholder='Escribe tu mensaje...' type="text" value={input.message} onChange={handleChange}></textarea>
        <p className='danger'>{errors.message}</p>

        <button type='submit'>Enviar</button>

      </form>

    </div>
  )
}
