import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializamos Resend con tu clave secreta
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Recibimos los datos del formulario
    const body = await request.json();
    const { nombre, email, asunto, mensaje } = body;

    // Enviamos el correo
    const data = await resend.emails.send({
      from: 'Portafolio Web <onboarding@resend.dev>', // No cambies esto por ahora
      to: ['pokemoy999@gmail.com'], 
      subject: `Nuevo mensaje de tu portafolio: ${asunto}`,
      html: `
        <h2>Tienes un nuevo mensaje de tu portafolio web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Hubo un error enviando el correo' }, { status: 500 });
  }
}