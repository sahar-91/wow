"use client";

import { useState } from "react";

export default function ContactForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            body: body,
            userId: Number(userId),
          }),
        }
      );

      await response.json();

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-black">
        <div className="container mx-auto px-10 md:px-50 py-20">
          <button
            onClick={() => setSubmitted(false)}
            className="mb-20 cursor-pointer text-lg text-gray-400 hover:text-white"
          >
            ← Back
          </button>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="mb-4 text-5xl font-bold text-white">
                Thank You!
              </h1>

              <p className="text-xl text-gray-300">
                Your message has been sent successfully.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-10 md:px-50 py-20">
        <h1 className="mb-6 text-center text-3xl font-semibold text-white">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="mb-4 block text-xl text-white">
              Title
            </label>

            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full cursor-pointer rounded bg-[#111] p-6 text-xl text-white outline-none placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="mb-4 block text-xl text-white">
              Description
            </label>

            <textarea
              placeholder="Write your message..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              rows={6}
              className="w-full cursor-pointer resize-none rounded bg-[#111] p-6 text-xl text-white outline-none placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="mb-4 block text-xl text-white">
              User ID
            </label>

            <div className="flex items-center rounded bg-[#111]">
              <input
                type="number"
                placeholder="Enter user id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                className="w-full cursor-pointer bg-transparent p-6 text-xl text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded cursor-pointer bg-cyan-400 py-5 text-xl font-medium text-black transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}