import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Здесь можно добавить логику для отправки email
    // Например, использовать nodemailer или другой сервис

    // Для демонстрации просто логируем данные
    console.log("Получена форма обратной связи:", { name, email, phone, message })

    // В реальном приложении здесь будет код для отправки email
    // Например:
    // await sendEmail({
    //   to: "inursultan80@gmail.com",
    //   subject: `Новое сообщение от ${name}`,
    //   text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\n\nСообщение:\n${message}`
    // });

    // Имитируем задержку для демонстрации
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true, message: "Сообщение успешно отправлено" })
  } catch (error) {
    console.error("Ошибка при обработке формы:", error)
    return NextResponse.json({ success: false, message: "Произошла ошибка при отправке сообщения" }, { status: 500 })
  }
}
