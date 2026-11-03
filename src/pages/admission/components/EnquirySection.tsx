import { useState, type FormEvent } from "react";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { admissionPhones, levelOptions } from "@/mocks/admission";

const FORM_ENDPOINT = "https://readdy.ai/api/form/dbktvembe8r9umpnnsd0";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full box-border rounded-[12px] border border-background-300 bg-background-50 px-4 py-3 text-[15px] text-foreground-900 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-500 focus:bg-white";
const labelClass = "mb-1.5 block text-[13px] font-medium text-foreground-700";

export default function EnquirySection() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const guard = String(formData.get("contact_alt") ?? "").trim();
    if (guard) {
      setStatus("success");
      return;
    }
    formData.delete("contact_alt");

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
      setFormError(serverMessage || "We could not send your enquiry. Please call us instead.");
    } catch {
      setStatus("error");
      setFormError("Something went wrong on the way. Please try again or call 0755 469134.");
    }
  };

  return (
    <section id="enquiry-form" className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-20 md:px-8 md:pt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow tone="mint">Enquire</Eyebrow>
          <div className="relative mt-5">
            <h2 className="font-heading text-[30px] font-normal leading-[1.12] text-foreground-950 md:text-[44px]">
              Thinking about Shekinah for your <span className="highlight-swipe">child</span>?
            </h2>
            <Doodle icon="ri-leaf-line" tone="red" className="absolute -right-2 top-0 hidden md:flex" size="text-2xl" />
          </div>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
            Tell us a little about your child and we will call you back within one working day to arrange a visit.
          </p>

          <div className="mt-8 rounded-[22px] border border-background-200 bg-background-50 p-5 md:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-500">Talk to us</p>
            <ul className="mt-3 space-y-2">
              {admissionPhones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2.5 text-[16px] text-foreground-900 transition-colors hover:text-primary-600"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <i className="ri-phone-line text-[13px] leading-none" />
                    </span>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/256755469134"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-[14px] font-medium text-background-50 transition-colors hover:bg-primary-600 sm:w-auto"
            >
              <i className="ri-whatsapp-line text-[16px] leading-none" />
              <span className="whitespace-nowrap">Chat on WhatsApp</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[24px] border border-background-200 bg-white p-5 shadow-card md:p-8">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <i className="ri-checkbox-circle-line text-3xl leading-none" />
                </span>
                <h3 className="mt-6 font-heading text-[24px] font-normal text-foreground-950 md:text-[28px]">
                  Thank you — we have your enquiry.
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-foreground-600">
                  Our admissions office will be in touch within one working day. If it is urgent, please call us on
                  0755 469134 or send us a WhatsApp message.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-7 cursor-pointer rounded-full border border-primary-500 px-5 py-2.5 text-[14px] font-medium text-primary-700 transition-colors hover:bg-primary-50"
                >
                  <span className="whitespace-nowrap">Send another enquiry</span>
                </button>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} noValidate={false}>
                <h3 className="font-heading text-[21px] font-normal text-foreground-950 md:text-[23px]">
                  Admission enquiry
                </h3>
                <p className="mt-1.5 text-[13px] text-foreground-500">Fields marked with * are required.</p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="admission-name">
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="admission-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Grace Namubiru"
                      className={fieldClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="admission-phone">
                      Phone *
                    </label>
                    <input
                      id="admission-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 0755 469134"
                      className={fieldClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="admission-email">
                      Email *
                    </label>
                    <input
                      id="admission-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="admission-child">
                      Child&apos;s Name *
                    </label>
                    <input
                      id="admission-child"
                      name="child_name"
                      type="text"
                      required
                      placeholder="Child's full name"
                      className={fieldClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="admission-level">
                      Level / Year applying for *
                    </label>
                    <select id="admission-level" name="level" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a level
                      </option>
                      {levelOptions.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="min-w-0">
                    <label className={labelClass} htmlFor="admission-date">
                      Preferred visit date <span className="font-normal text-foreground-400">(optional)</span>
                    </label>
                    <input id="admission-date" name="visit_date" type="date" className={fieldClass} />
                  </div>

                  <div className="min-w-0 sm:col-span-2">
                    <label className={labelClass} htmlFor="admission-message">
                      Message
                    </label>
                    <textarea
                      id="admission-message"
                      name="message"
                      rows={4}
                      maxLength={500}
                      placeholder="Anything you would like us to know about your child?"
                      className={`${fieldClass} resize-none`}
                    />
                    <p className="mt-1.5 text-right text-[11px] text-foreground-400">Up to 500 characters</p>
                  </div>
                </div>

                <div className="field-guard" aria-hidden="true">
                  <label htmlFor="admission-contact-alt">Alternate contact detail</label>
                  <input
                    id="admission-contact-alt"
                    name="contact_alt"
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
                    {status === "submitting" ? "Sending enquiry…" : "Submit Enquiry"}
                  </span>
                </button>
                <p className="mt-3 text-center text-[11px] leading-relaxed text-foreground-400">
                  We only use your details to respond to this enquiry.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}