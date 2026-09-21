import { useState } from 'react';

function ContactForm() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Mensagem registrada para demonstração. Obrigado pelo interesse!');
    event.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" type="text" placeholder="Seu nome" required />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" placeholder="voce@exemplo.com" required />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="contact-message">Mensagem</label>
        <textarea id="contact-message" name="message" rows="4" placeholder="Como podemos ajudar?" required />
      </div>
      <button className="form-submit md:col-span-2" type="submit">Enviar mensagem <span aria-hidden="true">↗</span></button>
      {message && <p className="form-feedback md:col-span-2" role="status">{message}</p>}
    </form>
  );
}

export default ContactForm;
