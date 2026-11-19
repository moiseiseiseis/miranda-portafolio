import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  // Se crea aquí (no al cargar el archivo) para que el build no falle
  // si RESEND_API_KEY no está configurada.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Falta la variable de entorno RESEND_API_KEY');
    return NextResponse.json({ error: 'El envío de correos no está configurado' }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  try {
    // Recibimos los datos del formulario
    const body = await request.json();
    const { nombre, email, asunto, mensaje } = body;

    // Enviamos el correo
    const { data, error } = await resend.emails.send({
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

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Hubo un error enviando el correo' }, { status: 500 });
  }
}