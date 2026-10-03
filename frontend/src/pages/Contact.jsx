import React from "react";
import styled from "styled-components";
import { tablet } from "@/Responsive";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 20px;

  /* =====================================
   CONTACT PAGE
===================================== */

  .contact-page {
    width: 100%;
    min-height: 100vh;
    background: #f8fafc;
    color: #0f172a;
  }

  /* =====================================
   HERO
===================================== */

  .contact-hero {
    width: 100%;
    padding: 90px 20px;
    background: linear-gradient(135deg, #0f172a, #1e3a8a);
    color: white;
    box-sizing: border-box;
  }

  .contact-hero-content {
    width: 100%;
    max-width: 850px;
    margin: auto;
    text-align: center;
  }

  .contact-label {
    display: inline-block;
    margin-bottom: 15px;
    color: #93c5fd;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .contact-hero h1 {
    margin: 0 0 18px;
    font-size: 46px;
    font-weight: 700;
    line-height: 1.1;
  }

  .contact-hero p {
    max-width: 700px;
    margin: auto;
    color: #dbeafe;
    font-size: 17px;
    line-height: 1.7;
  }

  /* =====================================
   CONTACT SECTION
===================================== */

  .contact-section {
    width: 100%;
    padding: 80px 20px;
    box-sizing: border-box;
  }

  .contact-container {
    width: 100%;
    max-width: 1200px;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;

    align-items: start;
  }

  /* =====================================
   CONTACT INFORMATION
===================================== */

  .contact-info {
    width: 100%;
  }

  .contact-heading {
    margin-bottom: 40px;
  }

  .contact-heading > span {
    display: block;
    margin-bottom: 10px;

    color: #2563eb;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  .contact-heading h2 {
    margin: 0 0 15px;

    font-size: 34px;
    line-height: 1.2;
  }

  .contact-heading p {
    margin: 0;

    color: #64748b;
    line-height: 1.7;
    font-size: 16px;
  }

  /* =====================================
   CONTACT DETAILS
===================================== */

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .contact-detail {
    display: flex;
    align-items: flex-start;
    gap: 18px;
  }

  .contact-icon {
    width: 48px;
    height: 48px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #eff6ff;
    border-radius: 10px;

    font-size: 20px;
  }

  .contact-detail h3 {
    margin: 0 0 6px;

    font-size: 18px;
  }

  .contact-detail p {
    margin: 0 0 7px;

    color: #64748b;
    line-height: 1.6;
  }

  .contact-detail a {
    color: #2563eb;
    font-weight: 600;
    text-decoration: none;
  }

  .contact-detail a:hover {
    text-decoration: underline;
  }

  /* =====================================
   SECURITY NOTICE
===================================== */

  .contact-notice {
    margin-top: 40px;
    padding: 20px;

    border-left: 4px solid #2563eb;
    background: #eff6ff;
    border-radius: 5px;
  }

  .contact-notice h3 {
    margin: 0 0 8px;
    font-size: 16px;
  }

  .contact-notice p {
    margin: 0;

    color: #475569;
    font-size: 14px;
    line-height: 1.7;
  }

  /* =====================================
   CONTACT FORM
===================================== */

  .contact-form-wrapper {
    padding: 35px;

    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;

    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
  }

  .contact-form-wrapper h2 {
    margin: 0 0 10px;
    font-size: 26px;
  }

  .contact-form-wrapper > p {
    margin: 0 0 30px;

    color: #64748b;
    line-height: 1.6;
  }

  /* =====================================
   FORM
===================================== */

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group label {
    font-size: 14px;
    font-weight: 600;
    color: #334155;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    box-sizing: border-box;

    padding: 13px 14px;

    border: 1px solid #cbd5e1;
    border-radius: 6px;

    background: white;

    color: #0f172a;
    font-size: 14px;

    outline: none;

    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: #2563eb;

    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 140px;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: #94a3b8;
  }

  /* =====================================
   CHECKBOX
===================================== */

  .form-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .form-checkbox input {
    margin-top: 4px;
  }

  .form-checkbox label {
    color: #64748b;
    font-size: 13px;
    line-height: 1.5;
  }

  /* =====================================
   SUBMIT BUTTON
===================================== */

  .contact-submit {
    width: 100%;

    padding: 14px 20px;

    border: none;
    border-radius: 6px;

    background: var(--primary-color);
    color: white;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    transition:
      background 0.3s ease,
      transform 0.2s ease;
  }

  .contact-submit:hover {
    background: #1d4ed8;
  }

  .contact-submit:active {
    transform: scale(0.98);
  }

  /* =====================================
   FAQ SECTION
===================================== */

  .contact-faq {
    width: 100%;
    padding: 70px 20px;

    background: #eff6ff;

    box-sizing: border-box;
  }

  .contact-faq-content {
    max-width: 750px;
    margin: auto;

    text-align: center;
  }

  .contact-faq h2 {
    margin: 0 0 15px;
    font-size: 30px;
  }

  .contact-faq p {
    margin: 0 auto 30px;

    max-width: 650px;

    color: #64748b;
    line-height: 1.7;
  }

  .faq-button {
    display: inline-block;

    padding: 13px 25px;

    background: var(--primary-color);
    color: white;

    text-decoration: none;

    border-radius: 6px;

    font-weight: 600;

    transition: background 0.3s ease;
  }

  .faq-button:hover {
    background: #1d4ed8;
  }

  /* =====================================
   TABLET
===================================== */

  @media (max-width: 900px) {
    .contact-container {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    .contact-info {
      max-width: 750px;
      margin: auto;
    }

    .contact-form-wrapper {
      max-width: 750px;
      width: 100%;
      margin: auto;
      box-sizing: border-box;
    }
  }

  /* =====================================
   MOBILE
===================================== */

  @media (max-width: 600px) {
    .contact-hero {
      padding: 65px 20px;
    }

    .contact-hero h1 {
      font-size: 34px;
    }

    .contact-hero p {
      font-size: 15px;
    }

    .contact-section {
      padding: 55px 20px;
    }

    .contact-heading h2 {
      font-size: 28px;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .contact-form-wrapper {
      padding: 25px 20px;
    }

    .contact-faq {
      padding: 55px 20px;
    }

    .contact-faq h2 {
      font-size: 26px;
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-label">CONTACT XWIN</span>

          <h1>We're Here to Help</h1>

          <p>
            Have a question about your account, investments, deposits, or
            withdrawals? Get in touch with our support team and we'll be happy
            to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-heading">
              <span>GET IN TOUCH</span>
              <h2>How can we help you?</h2>
              <p>
                Whether you have a question about your account or need help
                navigating the platform, you can reach out to us through any of
                the channels below.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">✉</div>

                <div>
                  <h3>Email Support</h3>
                  <p>Send us an email and our support team will assist you.</p>
                  <Link to="mailto:support@xwin.com">support@xwin.com</Link>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">💬</div>

                <div>
                  <h3>Customer Support</h3>
                  <p>
                    Need help with your account or transactions? Contact our
                    support team.
                  </p>
                  <Link to="/help-center">Visit Help Center</Link>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">📍</div>

                <div>
                  <h3>Our Office</h3>
                  <p>
                    Xwin operates digitally. For official correspondence, please
                    use our designated contact channels.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="contact-notice">
              <h3>Before contacting us</h3>

              <p>
                For account-related questions, please avoid sending passwords,
                private keys, recovery phrases, or other sensitive security
                information through email or contact forms.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>

            <p>
              Fill out the form below and provide as much detail as possible so
              we can better understand your request.
            </p>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="account">Account & Profile</option>
                  <option value="deposit">Deposit & Funding</option>
                  <option value="investment">Investment</option>
                  <option value="withdrawal">Withdrawal</option>
                  <option value="security">Security</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us how we can help..."
                  required
                ></textarea>
              </div>

              <div className="form-checkbox">
                <input type="checkbox" id="privacy" required />

                <label htmlFor="privacy">
                  I agree to the processing of my information for the purpose of
                  responding to my request.
                </label>
              </div>

              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="contact-faq">
        <div className="contact-faq-content">
          <h2>Looking for a quick answer?</h2>

          <p>
            Check our Help Center for answers to common questions about
            accounts, investments, deposits, withdrawals, and security.
          </p>

          <Link to="/help-center" className="faq-button">
            Visit Help Center
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
