import React from 'react'
import './Contact.modules.css'
import { validaciones } from '../../validates';

// eslint-disable-next-line

export default function Contact () {
  const [input, setInput] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    setInput({...input, [event.target.name]: event.target.value});

    setErrors(validaciones({...input, [event.target.name]: event.target.value}));
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();

    setErrors([]);

    if (errors.length === 0) {
     
      setInput({...input, [event.target.name]: event.target.value});
      
      setErrors(validaciones({...input, [event.target.name]: event.target.value}));
      
      return alert('Datos completos');

    }
    
    if(errors.length > 2){
      return alert('Debe llenar todos los campos');
    }
  }

  return ( 
    <div className='formulario'>
      <form onSubmit={handleSubmit}>
        <p>Nombre</p>
        <input className={errors.name && 'warning'} type="text" name='name' placeholder='Escribe tu nombre...' value={input.name} onChange={handleChange}/>
        
        <p className='danger'>{errors.name}</p>
        <br />

        <p>Correo Electrónico</p>
        <input className={errors.email && 'warning'} type="text" name='email' placeholder='Escribe tu email...' value={input.email} onChange={handleChange}/>
        
        <p className='danger'>{errors.email}</p>
        <br />

        <p>Mensajes</p>
        <textarea className={errors.message && 'warning'} name="message" cols="30" rows="10" placeholder='Escribe tu mensaje...' type="text" value={input.message} onChange={handleChange}></textarea>
        <p className='danger'>{errors.message}</p>
        <br />

        <button type='submit'>Enviar</button>
      </form>

    </div>
  )
}
