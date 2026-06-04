import { Resend } from 'resend';


const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Campos obrigatórios ausentes.' }), { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: 'claudioroberto0707@outlook.com', 
      subject: `Contato do Portfólio - ${name}`,
      html: `
        <h3>Nova mensagem recebida do Portfólio</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail de contato:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
} catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  }
}