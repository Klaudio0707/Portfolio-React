import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';

export const useContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    const STORAGE_KEY = 'ux_contact_throttle';
    const COOLDOWN = 24 * 60 * 60 * 1000;

    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"count": 0, "blockedUntil": 0}');

    if (data.blockedUntil > now) {
      toast.error("Para evitar spam, aguarde 24 horas para enviar uma nova mensagem.");
      return;
    }

    if (data.blockedUntil !== 0 && data.blockedUntil <= now) {
      data.count = 0;
      data.blockedUntil = 0;
    }

    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        toast.error("Erro de configuração no servidor.");
        return;
      }

      const formData = new FormData(e.currentTarget);
      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        data.count += 1;
        if (data.count >= 3) {
          data.blockedUntil = now + COOLDOWN;
          toast.success("Mensagem enviada! Você atingiu o limite de envios na interface.");
        } else {
          toast.success(`Mensagem enviada! (${data.count}/3 envios).`);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error(result.message || "Erro retornado pela API");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      toast.error("Falha ao enviar a mensagem. Tente novamente.");
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