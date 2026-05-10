"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Mail, Loader2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { GithubIcon, LinkedInIcon } from "../ui/icons";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const socials = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/rifah07",
    handle: "@rifah07",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/rifah-sajida-deya",
    handle: "rifah-sajida-deya",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:rifah.dev@gmail.com",
    handle: "rifah.dev@gmail.com",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      toast.success("Message sent!", {
        description: "I'll get back to you soon.",
      });
      reset();
    } catch (err) {
      toast.error("Failed to send", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's work together."
              description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
            />
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/0.3)] hover:bg-[hsl(var(--muted)/0.5)] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                      {handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">
                Name
              </label>
              <input
                {...register("name")}
                placeholder="Your name"
                className="w-full h-10 px-3 rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--background))] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent transition-all"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="your@email.com"
                className="w-full h-10 px-3 rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--background))] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent transition-all"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-3 py-2 rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--background))] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent transition-all resize-none"
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[hsl(var(--primary)/0.9)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
