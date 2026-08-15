import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    await resend.emails.send({
      from: "ВЕСНА <onboarding@resend.dev>",
      to: ["svetlana.ponomareva20@yandex.ru"],
      subject: `Сообщение с сайта «ВЕСНА» от ${name}`,
      html: `
        <h2>Новое сообщение с сайта ансамбля «ВЕСНА»</h2>

        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>E-mail:</strong> ${email || "не указан"}</p>

        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, error: "Не удалось отправить сообщение" },
      { status: 500 }
    );
  }
}