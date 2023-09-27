// Styles
import { ContactForm, ButtonForm } from "./styled";

// Components
import Title from "../../Title";

// Utilities
import emailjs from '@emailjs/browser';
import { FormEvent } from 'react';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

// Hooks
import { useRef, useState } from 'react';
import Alert from "../../Alert";

export default function Contact () {
    const form = useRef<HTMLFormElement | null>(null);
    const public_key = import.meta.env.VITE_PUBLIC_KEY
    const service_id = import.meta.env.VITE_SERVICE_ID
    const template_id = import.meta.env.VITE_TEMPLATE_ID
    const [error, setError] = useState<boolean | null>(null)
    
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if(form.current) {
        emailjs.sendForm(service_id, template_id, form.current, public_key)
        .then(() => {
          setError(false)
          if(form.current){
            form.current.reset();
          }
        }, () => {
          setError(true)
        });

        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    }
  return(
    <section className="container" id="contact">
      <Title title="Vamos conversar?" subtitle="<Contact/>" classname="start"/>
      <ContactForm>
          <div className="contacts">
            <div className="titles">
              <h2>Entre em contato.</h2>
              <p>Conta pra mim, como eu posso te ajudar?</p>
            </div>
            <h2>Você também pode me encontrar por aqui: </h2>
            <a href="mailto:valeskaleandrodev@gmail.com"><AiOutlineMail /> valeskaleandrodev@gmail.com</a>
            <a href="https://www.linkedin.com/in/valeskaleandro/" target="_blank">
              <AiFillLinkedin /> /in/valeskaleandro
            </a>
            <a href="https://github.com/ValeskaLeandro" target="_blank">
              <AiFillGithub /> /valeskaleandro
            </a>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <input type="text" name="user_name" placeholder=" " required  autoComplete="off"/>
              <label htmlFor="user_name">Nome</label>
            </div>
            <div className="input-group">
              <input type="email" name="user_email" placeholder=" " required autoComplete="off"/>
              <label htmlFor="user_email">E-mail</label>
            </div>
            <div className="input-group">
              <textarea name="message"  rows={5} placeholder=" " minLength={20} required></textarea>
              <label htmlFor="message">Mensagem</label>
            </div>
            <div className="button">
              <ButtonForm type="submit" value="Enviar" />
            </div>
          </form>
          {
            error !== null &&
            <Alert text={
              error ? "Ocorreu um erro. Tente novamente." : "Mensagem enviada com sucesso."
            } classname={error === true ? 'error' : ''}/>
          }
        </ContactForm>
    </section>
  )
}