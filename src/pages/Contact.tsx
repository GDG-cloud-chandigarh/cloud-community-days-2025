import { Helmet } from "react-helmet-async";
import { Sticker } from "@/components/Sticker";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { useRef } from "react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({ title: "Message sent", description: "We will be in touch shortly!" });
          formRef.current?.reset();
        },
        () => {
          toast({ title: "Error", description: "Failed to send message. Please try again." });
        }
      );
  }

  return (
    <>
      {/* Desktop/Laptop header image */}
      <img
        src="/images/page-banner.png"
        alt="Cloud Community Days 2026 Logo"
        className="w-full mb-6 object-contain hidden sm:block"
      />
      {/* Mobile header image */}
      <img
        src="/images/page-banner-mobile.png"
        alt="Cloud Community Days 2026 Mobile Logo"
        className="w-full object-contain block sm:hidden"
      />
      <section className="relative container py-16">
        <Helmet>
          <title>Contact • Cloud Community Days</title>
          <meta name="description" content="Contact the Cloud Community Days team for partnerships, volunteering, and general queries." />
          <link rel="canonical" href="/contact" />
        </Helmet>
        <Sticker shape="cloud" colour="green" className="absolute left-[8%] top-[22%] h-20 hidden lg:block" rotate={-6} />
        <Sticker shape="star" colour="red" className="absolute left-[14%] top-[62%] h-14 hidden lg:block" rotate={12} delay={3} />
        <Sticker shape="blocks" colour="yellow" className="absolute right-[7%] top-[35%] h-16 hidden lg:block" delay={1} />
        <div className="max-w-xl mx-auto bg-card shadow-2xl p-8 items-center justify-center bg-white border-2 border-black border-t-4 border-r-4">
          <h1 className="font-display text-4xl mb-4 text-center">Contact Us</h1>
          <p className="text-muted-foreground mb-8 text-center">
            We'd love to hear from you! 
            <br/>
            Fill out the form below and our team will get back to you soon.
          </p>
          <form ref={formRef} className="grid gap-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="user_name" className="block mb-2 font-medium text-sm text-black">
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                className="border px-4 py-3 w-full bg-background focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block mb-2 font-medium text-sm text-black">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                className="border px-4 py-3 w-full bg-background focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-sm text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border px-4 py-3 w-full bg-background min-h-32 resize-y focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button
              className="h-12 px-6 flex items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium transition hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
