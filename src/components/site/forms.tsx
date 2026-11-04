import { useState, type FormEvent, type ReactNode } from "react";
import { Btn, CONTACT, SITE, VISIT } from "./ui";
import { Link } from "react-router-dom";

/* TODO before launch: this is the form endpoint inherited from the Readdy export.
   Swap it for the school's own (Formspree, Netlify Forms or similar) so requests reach the office inbox. */
const FORM_ENDPOINT = "https://readdy.ai/api/form/dbku16db5pdo4itvs2ug";

type Status = "idle" | "sending" | "done" | "error";

function useSubmit(kind: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_alt") ?? "").trim()) {
      setStatus("done");
      return;
    }
    data.delete("company_alt");
    data.append("form_type", kind);
    const body = new URLSearchParams();
    data.forEach((v, k) => body.append(k, String(v)));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      const txt = await res.text();
      let ok = res.ok;
      try {
        ok = ok && JSON.parse(txt)?.code === "OK";
      } catch {
        /* non-JSON reply */
      }
      if (ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
        setError(`We couldn't send that just now. Please call ${SITE.phones[0]} or email ${SITE.email}.`);
      }
    } catch {
      setStatus("error");
      setError(`Something went wrong on the way. Please try again or call ${SITE.phones[0]}.`);
    }
  };
  return { status, error, onSubmit, reset: () => setStatus("idle") };
}

function Field({ label, children, full }: { label: string; children: ReactNode; full?: boolean }) {
  return (
    <div className={`field ${full ? "full" : ""}`}>
      <label>
        <span className="lab">{label}</span>
        {children}
      </label>
    </div>
  );
}

function Choice({ name, options, label, full = true, required }: { name: string; options: string[]; label: string; full?: boolean; required?: boolean }) {
  return (
    <fieldset className={`field ${full ? "full" : ""}`} style={{ border: 0 }}>
      <legend className="lab">{label}</legend>
      <div className="choice">
        {options.map((o, i) => (
          <label key={o}>
            <input type="radio" name={name} value={o} required={required && i === 0} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Done({ title, text, onAgain }: { title: string; text: string; onAgain: () => void }) {
  return (
    <div className="done" role="status">
      <div className="tick"><i className="ri-check-line" /></div>
      <h3 className="s-h3" style={{ marginTop: 18 }}>{title}</h3>
      <p className="s-muted" style={{ marginTop: 8, maxWidth: 420, marginInline: "auto" }}>{text}</p>
      <div style={{ marginTop: 22 }}>
        <Btn variant="line" onClick={onAgain}>Send another</Btn>
      </div>
    </div>
  );
}

const years = ["Kindergarten 1 (2–3)", "Kindergarten 2 (3–4)", "Reception (4–5)", "Year 1", "Year 2 and up", "Not sure yet"];

/* "Book a School Visit": a request for a tour on a preferred day */
export function VisitForm() {
  const { status, error, onSubmit, reset } = useSubmit("School visit request");
  const today = new Date().toISOString().slice(0, 10);
  if (status === "done")
    return (
      <div className="form-card">
        <Done title="Visit request sent" text="Thank you. Our admissions office will call or email you to confirm the day and time of your visit." onAgain={reset} />
      </div>
    );
  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="fgrid">
        <Field label="Your name"><input name="parent_name" required autoComplete="name" /></Field>
        <Field label="Phone number"><input name="phone" type="tel" required autoComplete="tel" placeholder="07..." /></Field>
        <Field label="Email" full><input name="email" type="email" required autoComplete="email" /></Field>
        <Field label="Child's year group">
          <select name="year_group" required defaultValue="">
            <option value="" disabled>Choose…</option>
            {years.map((y) => <option key={y}>{y}</option>)}
          </select>
        </Field>
        <Field label="Number of children">
          <select name="children" defaultValue="1">
            {["1", "2", "3", "4+"].map((n) => <option key={n}>{n}</option>)}
          </select>
        </Field>
        <Field label="Preferred date"><input name="preferred_date" type="date" min={today} required /></Field>
        <Field label="Second choice (optional)"><input name="second_date" type="date" min={today} /></Field>
        <Choice name="preferred_time" label="Best time of day" options={["Morning", "Afternoon", "Either"]} required />
        <Field label="Anything we should know? (optional)" full>
          <textarea name="message" placeholder="Questions you'd like answered on the day, your child's needs, how you heard about us…" />
        </Field>
      </div>
      <input className="hp" name="company_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && <p className="form-msg" role="alert">{error}</p>}
      <div style={{ marginTop: 22, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <Btn type="submit" variant="red" arrow disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request My Visit"}
        </Btn>
        <span className="s-muted" style={{ fontSize: 14 }}>
          Just a question? <Link to={CONTACT} className="tlink">Contact us instead</Link>
        </span>
      </div>
    </form>
  );
}

/* "Contact": general enquiries */
export function ContactForm() {
  const { status, error, onSubmit, reset } = useSubmit("General enquiry");
  if (status === "done")
    return (
      <div className="form-card">
        <Done title="Message sent" text="Thank you for getting in touch. We'll reply as soon as we can, usually within one school day." onAgain={reset} />
      </div>
    );
  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="fgrid">
        <Choice name="topic" label="What's it about?" options={["Admissions", "Fees", "Transport", "Current parent", "Something else"]} required />
        <Field label="Your name"><input name="name" required autoComplete="name" /></Field>
        <Field label="Phone (optional)"><input name="phone" type="tel" autoComplete="tel" /></Field>
        <Field label="Email" full><input name="email" type="email" required autoComplete="email" /></Field>
        <Field label="Your message" full><textarea name="message" required /></Field>
      </div>
      <input className="hp" name="company_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && <p className="form-msg" role="alert">{error}</p>}
      <div style={{ marginTop: 22, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <Btn type="submit" variant="pine" arrow disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </Btn>
        <span className="s-muted" style={{ fontSize: 14 }}>
          Want to see the school? <Link to={VISIT} className="tlink">Book a visit</Link>
        </span>
      </div>
    </form>
  );
}
