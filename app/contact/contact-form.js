'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

function createInitialFields() {
  return {
    fullName: '',
    email: '',
    phone: '',
    serviceRequested: 'nikah',
    preferredDate: '',
    location: '',
    format: 'in-person',
    website: '',
    startedAt: String(Date.now()),
    turnstileToken: '',
    message: '',
    consent: false,
    ceremonyDate: '',
    ceremonyTime: '',
    ceremonyLocation: '',
    legalOfficiation: 'religious-only',
    guests: '',
    languages: '',
    travelDetails: '',
    organization: '',
    eventType: '',
    requestedTopic: '',
    audience: '',
    ageRange: '',
    eventDuration: '',
    additionalDetails: '',
  };
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  as = 'input',
  help,
  required = false,
  children,
}) {
  return (
    <label className="field" htmlFor={name}>
      <span>{label}</span>
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : as === 'select' ? (
        <select id={name} name={name} value={value} onChange={onChange} required={required}>
          {children}
        </select>
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} required={required} />
      )}
      {help ? <span className="field-help">{help}</span> : null}
    </label>
  );
}

export default function ContactForm({ turnstileSiteKey }) {
  const [form, setForm] = useState(createInitialFields);
  const [status, setStatus] = useState({ kind: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.onTurnstileSuccess = (token) => {
      setForm((current) => ({ ...current, turnstileToken: token }));
    };

    window.onTurnstileExpired = () => {
      setForm((current) => ({ ...current, turnstileToken: '' }));
    };

    window.onTurnstileError = () => {
      setForm((current) => ({ ...current, turnstileToken: '' }));
    };

    return () => {
      delete window.onTurnstileSuccess;
      delete window.onTurnstileExpired;
      delete window.onTurnstileError;
    };
  }, [turnstileSiteKey]);

  function resetTurnstile() {
    if (typeof window !== 'undefined' && window.turnstile) {
      window.turnstile.reset();
    }
  }

  function handleChange(event) {
    const { checked, name, type, value } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  }

  function renderServiceFields() {
    if (form.serviceRequested === 'nikah') {
      return (
        <>
          <div className="form-grid">
            <Field
              label="Ceremony date"
              name="ceremonyDate"
              value={form.ceremonyDate}
              onChange={handleChange}
              type="date"
            />
            <Field
              label="Ceremony time"
              name="ceremonyTime"
              value={form.ceremonyTime}
              onChange={handleChange}
              type="time"
            />
          </div>

          <div className="form-grid">
            <Field
              label="Ceremony location"
              name="ceremonyLocation"
              value={form.ceremonyLocation}
              onChange={handleChange}
              help="Share the venue, masjid, city, or venue type."
            />
            <Field
              label="Guests expected"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              type="number"
            />
          </div>

          <div className="form-grid">
            <Field
              label="Ontario or travel request"
              name="legalOfficiation"
              value={form.legalOfficiation}
              onChange={handleChange}
              as="select"
            >
              <option value="religious-only">Religious ceremony only</option>
              <option value="ontario-legal">Ontario legal officiation request</option>
              <option value="travel-outside-ontario">Travel outside Ontario</option>
            </Field>
            <Field
              label="Languages requested"
              name="languages"
              value={form.languages}
              onChange={handleChange}
              help="List any language or translation needs."
            />
          </div>

          <Field
            label="Travel details"
            name="travelDetails"
            value={form.travelDetails}
            onChange={handleChange}
            as="textarea"
            help="Only fill this in for travel Nikah requests outside Ontario."
          />
        </>
      );
    }

    return (
      <>
        <div className="form-grid">
          <Field
            label="Organization"
            name="organization"
            value={form.organization}
            onChange={handleChange}
          />
          <Field
            label="Event type"
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            help="For example: khutbah, workshop, fundraiser, panel, or seminar."
          />
        </div>

        <div className="form-grid">
          <Field
            label="Requested topic"
            name="requestedTopic"
            value={form.requestedTopic}
            onChange={handleChange}
          />
          <Field label="Audience" name="audience" value={form.audience} onChange={handleChange} />
        </div>

        <div className="form-grid">
          <Field
            label="Expected attendance"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            type="number"
          />
          <Field
            label="Audience age range"
            name="ageRange"
            value={form.ageRange}
            onChange={handleChange}
          />
        </div>

        <Field
          label="Event duration"
          name="eventDuration"
          value={form.eventDuration}
          onChange={handleChange}
          help="For example: 30 minutes, 1 hour, or multiple sessions."
        />
      </>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ kind: 'idle', message: '' });
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || 'Something went wrong.');
      }

      setStatus({ kind: 'success', message: payload.message });
      setForm(createInitialFields());
      resetTurnstile();
    } catch (error) {
      if (turnstileSiteKey) {
        resetTurnstile();
        setForm((current) => ({ ...current, turnstileToken: '' }));
      }

      setStatus({
        kind: 'error',
        message:
          error instanceof Error ? error.message : 'Your inquiry could not be sent right now.',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      ) : null}

      <div className="form-grid">
        <Field
          label="Full name"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <Field
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          required
        />
      </div>

      <div className="form-grid">
        <Field label="Phone, optional" name="phone" value={form.phone} onChange={handleChange} />
        <Field
          label="Service requested"
          name="serviceRequested"
          value={form.serviceRequested}
          onChange={handleChange}
          as="select"
          required
        >
          <option value="nikah">Nikah ceremony or Muslim wedding</option>
          <option value="speaking">Lecture, khutbah, talk, or speaking engagement</option>
        </Field>
      </div>

      <div className="form-grid">
        <Field
          label="Preferred date"
          name="preferredDate"
          value={form.preferredDate}
          onChange={handleChange}
          type="date"
        />
        <Field label="Location" name="location" value={form.location} onChange={handleChange} />
      </div>

      <div className="form-grid">
        <Field
          label="In-person or virtual"
          name="format"
          value={form.format}
          onChange={handleChange}
          as="select"
        >
          <option value="in-person">In-person</option>
          <option value="virtual">Virtual</option>
          <option value="hybrid">Hybrid</option>
        </Field>
        <Field
          label="Response details"
          name="additionalDetails"
          value={form.additionalDetails}
          onChange={handleChange}
          help="Use this for any details not covered above."
        />
      </div>

      <Field
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        as="textarea"
        required
      />

      {renderServiceFields()}

      <label className="consent-field" htmlFor="consent">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          required
        />
        <span>
          I understand this is an inquiry, not a confirmed booking, and consent
          to being contacted about this request.
        </span>
      </label>

      <input
        type="text"
        name="website"
        className="honeypot"
        autoComplete="off"
        tabIndex={-1}
        value={form.website}
        onChange={handleChange}
      />
      <input type="hidden" name="startedAt" value={form.startedAt} />
      <input
        type="hidden"
        name="cf-turnstile-response"
        value={form.turnstileToken}
        readOnly
      />

      <div className="turnstile-box" aria-live="polite">
        {turnstileSiteKey ? (
          <div
            className="cf-turnstile"
            data-sitekey={turnstileSiteKey}
            data-action="turnstile-spin-v2"
            data-callback="onTurnstileSuccess"
            data-expired-callback="onTurnstileExpired"
            data-error-callback="onTurnstileError"
          />
        ) : (
          <span>A quick security check will appear here when needed.</span>
        )}
      </div>

      <p className="field-help">
        Please do not include highly sensitive personal information in your message.
      </p>

      <button className="button button--primary" type="submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Submit inquiry'}
      </button>

      {status.kind !== 'idle' ? (
        <div
          className={`form-status ${
            status.kind === 'success' ? 'form-status--success' : 'form-status--error'
          }`}
          role="status"
        >
          {status.message}
        </div>
      ) : null}
    </form>
  );
}
