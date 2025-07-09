// src/pages/Contact.tsx
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Input from "../components/common/Input";
import SocialLinks from "../components/common/SocialLinks";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptcha = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!captchaToken) {
      setStatus("Please verify you are not a robot.");
      return;
    }

    // TODO: Handle sending form data via API or email service (e.g. EmailJS, backend)
    console.log("Message Sent:", formData);
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Google reCAPTCHA */}
            <div>
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleCaptcha}
              />
            </div>

            {status && (
              <div className="text-sm text-blue-600 mt-2">{status}</div>
            )}

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
            >
              Send Message
            </button>
          </form>

          {/* Social & Info */}
          <div className="space-y-6">
            <p className="text-gray-700">
              We'd love to hear from you! Whether you’re a potential mentor,
              mentee, or just have questions — feel free to reach out.
            </p>

            <div>
              <h2 className="text-lg font-semibold mb-2">Email</h2>
              <p className="text-blue-600">support@Mentorship.com</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
