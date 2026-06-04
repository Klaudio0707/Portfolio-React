import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';

export const useContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });
            if (!response.ok) throw new Error('Erro ao processar envio do formulário.');
             toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            toast.error('Falha ao enviar a mensagem. Verifique sua conexão e tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        name, setName,
        email, setEmail,
        message, setMessage,
        isSubmitting,
        handleSubmit
    };
};