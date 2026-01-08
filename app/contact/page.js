"use client";

import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <section className="h-screen flex items-start justify-center pt-30 px-4">
      <div className="w-full max-w-md max-h-[calc(100vh-6rem)] flex flex-col justify-start pt-4 overflow-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center">Contact Us</h2>
        <p className="text-center mb-4">We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>

        <form className="bg-white p-4 rounded shadow space-y-4 text-justify max-h-[calc(100vh-8rem)] overflow-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full border p-2 rounded"
          />
          <button className="w-full bg-black text-white py-2 rounded hover:bg-zinc-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}