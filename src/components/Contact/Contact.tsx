import styles from './Contact.module.scss';
import { Loader2, Send } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';

const Contact = () => {
    const {
        name, setName,
        email, setEmail,
        message, setMessage,
        isSubmitting,
        handleSubmit
    } = useContactForm();

    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Contato</span>
                    <h2 className={styles.title}>Entre em Contato</h2>
                    <p className={styles.subtitle}>
                        Sinta-se à vontade para enviar uma mensagem. Estou sempre aberto a novas propostas,
                        projetos desafiadores e conexões.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Seu nome ou empresa"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">E-mail (opcional)</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu.email@exemplo.com - Opcional"
                        />
                    </div>

                    {/* Mensagem */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Descreva brevemente seu contato ou proposta"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.btnSubmit}
                    >
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
    );
};

export default Contact;