import { toast } from 'sonner';
import styles from './Contact.module.scss';
import { useState, type FormEvent } from 'react';
import { Loader2, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error('Erro ao processar envio.');

      toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      toast.error('Falha ao enviar a mensagem. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    
       <section className={styles.contactSection} id="contato">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Contato</span>
          <h2 className={styles.title}>Entre em Contato</h2>
          <p className={styles.subtitle}>
            Sinta-se à vontade para enviar uma mensagem. Estou sempre aberto a novas propostas, 
            projetos desafiadores e conexões no mercado de engenharia de software.
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome ou empresa"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@exemplo.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Descreva brevemente o seu projeto ou proposta..."
            />
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.btnSubmit}>
            {isSubmitting ? (
              <>
                <Loader2 className={styles.spinner} size={18} />
                Enviando...
              </>
            ) : (
              <>
                <Send size={18} />
                Enviar Mensagem
              </>
            )}
          </button>
        </form>
        </div>
    </section>
  )
}

export default Contact
