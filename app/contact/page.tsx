"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSending(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      setSent(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch {
      setError("Не удалось отправить сообщение. Попробуйте ещё раз.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="bg-[#faf7f2] min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-6xl font-serif text-center text-red-900 mb-6">
          💌 Связь с ансамблем
        </h1>

        <p className="text-2xl italic text-center text-gray-700 mb-14">
          «Будем рады услышать вас!»
        </p>

        <div
  id="contact-form"
  className="bg-white rounded-3xl shadow-xl p-10"
>

          <h2 className="text-4xl font-serif text-red-900 mb-8 text-center">
            Напишите нам
          </h2>

          <p className="text-xl leading-9 text-gray-700 text-center mb-10">
            Оставьте сообщение, задайте вопрос
            или поделитесь своими добрыми словами.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-lg text-gray-700 mb-2">
                Ваше имя
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
                placeholder="Как к Вам обращаться?"
              />
            </div>

            <div>
              <label className="block text-lg text-gray-700 mb-2">
                Номер телефона для связи с Вами
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
                placeholder="+7 ..."
              />
            </div>

            <div>
              <label className="block text-lg text-gray-700 mb-2">
                E-mail{" "}
                <span className="text-gray-400">
                  (необязательно)
                </span>
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg"
                placeholder="Ваш e-mail"
              />
            </div>

            <div>
              <label className="block text-lg text-gray-700 mb-2">
                Ваш вопрос или сообщение
              </label>

              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg resize-none"
                placeholder="Напишите нам..."
              />
            </div>

            <div className="text-center pt-4">

              <button
                type="submit"
                disabled={sending}
                className="bg-[#7d2f2f] text-white px-10 py-4 rounded-full text-xl shadow-lg hover:scale-105 transition disabled:opacity-60"
              >
                {sending
                  ? "Отправляем..."
                  : "🌸 Отправить сообщение"}
              </button>

            </div>

            {sent && (
              <p className="text-center text-green-700 text-lg mt-6">
                🌸 Спасибо! Ваше сообщение отправлено.
              </p>
            )}

            {error && (
              <p className="text-center text-red-700 text-lg mt-6">
                {error}
              </p>
            )}

          </form>
        </div>

        <div className="bg-[#7d2f2f] text-white rounded-3xl shadow-xl p-10 mt-16 text-center">

          <h2 className="text-4xl font-serif mb-6">
            🎭 Хотите пригласить ансамбль «ВЕСНА»?
          </h2>

          <p className="text-xl leading-9 mb-8">
            Будем рады стать частью вашего праздника,
            концерта или другого замечательного события.
          </p>

          <a
  href="#contact-form"
  className="inline-block bg-white text-red-900 px-10 py-4 rounded-full text-xl shadow-lg hover:scale-105 transition"
>
  🌸 Пригласить «ВЕСНУ»
</a>

        </div>

        <div className="mt-16 text-center">

          <h2 className="text-4xl font-serif text-red-900 mb-8">
            🌸 Мы в социальных сетях
          </h2>

          <p className="text-xl text-gray-700 mb-8">
            Следите за нашими концертами, новостями и новыми песнями.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <a
              href="https://vk.com/club225091419"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7d2f2f] text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition"
            >
              VK
            </a>

            <a
              href="https://rutube.ru/plst/530748/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7d2f2f] text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition"
            >
              RUTUBE
            </a>

            <a
              href="https://www.youtube.com/playlist?list=PLDwc8Kfs431VML8OIqW8NZT4Y-GTAnIe8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7d2f2f] text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition"
            >
              YouTube
            </a>

          </div>

        </div>

      </div>
    </main>
  );
}
