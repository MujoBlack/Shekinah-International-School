import { useState, type FormEvent } from "react";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { contactLevels, contactPhones, contactWhatsApp } from "@/mocks/contact";

const FORM_ENDPOINT = "https://readdy.ai/api/form/dbku16db5pdo4itvs2ug";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full box-border rounded-[12px] border border-background-300 bg-background-50 px-4 py-3 text-[15px] text-foreground-900 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-500 focus:bg-white";
const labelClass = "mb-1.5 block text-[13px] font-medium text-foreground-700";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const guard = String(formData.get("company_alt") ?? "").trim();
    if (guard) {
      setStatus("success");
      return;
    }
    formData.delete("company_alt");

    setStatus("submitting");
    setFormError("");

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      payload.append(key, String(value));
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      const responseText = await response.text();
      let parsed: {
        code?: string;
        message?: string;
        meta?: { message?: string; detail?: string };
      } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMessage =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;

      if (response.ok && parsed?.code === "OK") {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
      setFormError(serverMessage || "We could not send your message. Please call us instead.");
    } catch {
      setFormError("Something went wrong on the way. Please try again or call 0755 469134.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact-form"
      className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-20 md:px-8 md:pt-28"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <Reveal>
          <div className="h-full rounded-[24px] border border-background-200 bg-white p-5 shadow-card md:p-8">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <i className="ri-checkbox-circle-line text-3xl leading-none" />
                </span>
                <h2 className="mt-6 font-heading text-[24px] font-normal text-foreground-950 md:text-[28px]">
                  Thank you — your message is with us.
                </h2>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-foreground-600">
                  Our office will get back to you within one working day. If it is urgent, call 0755 469134 or send
                  a WhatsApp message.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-7 cursor-pointer rounded-full border border-primary-500 px-5 py-2.5 text-[14px] font-medium text-primary-700 transition-colors hover:bg-primary-50"
                >
                  <span className="whitespace-nowrap">Send another message</span>
                </button>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit}>
                <Eyebrow tone="mint">Enquire</Eyebrow>
                <h2 className="mt-4 font-heading text-[24px] font-normal leading-[1.15] text-foreground-950 md:text-[30px]">
                  Send us a message
                </h2>
                <p className="mt-2 text-[13px] text-foreground-500">
                  Short and simple. Fields marked with * are required.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="contact-name">
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Grace Namubiru"
                      className={fieldClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="contact-phone">
                      Phone *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 0755 469134"
                      className={fieldClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="contact-email">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="contact-child">
                      Child&apos;s Name *
                    </label>
                    <input
                      id="contact-child"
                      name="child_name"
                      type="text"
                      required
                      placeholder="Child's full name"
                      className={fieldClass}
                    />
                  </div>

                  <div className="min-w-0 sm:col-span-2">
                    <label className={labelClass} htmlFor="contact-level">
                      Level / Year applying for *
                    </label>
                    <select id="contact-level" name="level" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a level
                      </option>
                      {contactLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="min-w-0 sm:col-span-2">
                    <label className={labelClass} htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      maxLength={500}
                      placeholder="How can we help?"
                      className={`${fieldClass} resize-none`}
                    />
                    <p className="mt-1.5 text-right text-[11px] text-foreground-400">Up to 500 characters</p>
                  </div>
                </div>

                <div className="field-guard" aria-hidden="true">
                  <label htmlFor="contact-company-alt">Company</label>
                  <input
                    id="contact-company-alt"
                    name="company_alt"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    readOnly
                  />
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="mt-4 flex items-start gap-2.5 rounded-[12px] border border-accent-200 bg-accent-50 px-4 py-3"
                  >
                    <i className="ri-error-warning-line mt-0.5 text-[15px] leading-none text-accent-600" />
                    <p className="text-[13px] leading-relaxed text-accent-800">{formError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 w-full cursor-pointer rounded-full bg-primary-500 px-6 py-3.5 text-[15px] font-medium text-background-50 transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="whitespace-nowrap">
                    {status === "submitting" ? "Sending message…" : "Send Enquiry"}
                  </span>
                </button>
                <p className="mt-3 text-center text-[11px] leading-relaxed text-foreground-400">
                  We only use your details to respond to this enquiry.
                </p>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            id="book-a-visit"
            className="relative flex h-full scroll-mt-28 flex-col justify-between overflow-hidden rounded-[24px] bg-primary-900 px-6 py-8 md:px-9 md:py-10"
          >
            <i className="pointer-events-none absolute -right-6 -top-8 text-[150px] leading-none text-primary-700/40 ri-sun-line" />
            <i className="pointer-events-none absolute bottom-6 right-8 text-[26px] leading-none text-accent-400/70 ri-star-line" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-background-50/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-background-50 md:text-[12px]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                School visits
              </span>
              <h2 className="mt-5 font-heading text-[28px] font-normal leading-[1.14] text-background-50 md:text-[36px]">
                Book a School Visit
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-background-50/80 md:text-[16px]">
                The best way to get to know Shekinah is to see it. Book a tour and meet our Principal.
              </p>

              <ul className="mt-7 space-y-3 text-[14px] text-background-50/80">
                <li className="flex items-start gap-2.5">
                  <i className="ri-time-line mt-0.5 text-[15px] leading-none text-background-50/60" />
                  <span>Monday to Friday, 7:30am – 5:00pm</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-map-pin-line mt-0.5 text-[15px] leading-none text-background-50/60" />
                  <span>Bugonga, Entebbe — about 10 minutes from the town centre</span>
                </li>
              </ul>
            </div>

            <div className="relative mt-8">
              <a
                href="#contact-form"
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-background-50 px-6 py-3 text-[15px] font-medium text-primary-800 transition-colors hover:bg-white sm:w-auto"
              >
                <span className="whitespace-nowrap">Book a School Visit</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-background-50 transition-transform duration-300 group-hover:translate-x-1">
                  <i className="ri-arrow-right-line text-[15px] leading-none" />
                </span>
              </a>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <a
                  href={`tel:${contactPhones[0].replace(/\s/g, "")}`}
                  className="inline-flex cursor-pointer items-center gap-2 text-[14px] text-background-50/85 transition-colors hover:text-background-50"
                >
                  <i className="ri-phone-line text-[15px] leading-none" />
                  <span className="whitespace-nowrap">{contactPhones[0]}</span>
                </a>
                <a
                  href={contactWhatsApp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 text-[14px] text-background-50/85 transition-colors hover:text-background-50 sm:ml-4"
                >
                  <i className="ri-whatsapp-line text-[15px] leading-none" />
                  <span className="whitespace-nowrap">WhatsApp</span>
                </a>
              </div>
              <Doodle icon="ri-leaf-line" tone="red" size="text-xl" className="mt-6 hidden opacity-70 md:flex" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}