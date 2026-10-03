import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "@/Responsive";

const Wrapper = styled.div`
  padding: 20px;

  /* ================================
   HELP CENTER
================================ */

  .help-center {
    width: 100%;
    min-height: 100vh;
    background: #f8fafc;
    color: #1e293b;
  }

  /* ================================
   HERO
================================ */

  .help-hero {
    width: 100%;
    padding: 80px 20px;
    background: linear-gradient(135deg, #0f172a, #1e3a8a);
    color: white;
  }

  .help-hero-content {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .help-hero h1 {
    margin: 0 0 15px;
    font-size: 42px;
    font-weight: 700;
  }

  .help-hero p {
    max-width: 700px;
    margin: 0 auto 35px;
    color: #dbeafe;
    font-size: 17px;
    line-height: 1.7;
  }

  /* Search */

  .help-search {
    display: flex;
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    background: white;
    padding: 6px;
    border-radius: 8px;
  }

  .help-search input {
    flex: 1;
    border: none;
    outline: none;
    padding: 15px;
    font-size: 15px;
    color: #1e293b;
  }

  .help-search button {
    border: none;
    background: var(--primary-color);
    color: white;
    padding: 0 25px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
  }

  .help-search button:hover {
    background: #1d4ed8;
  }

  /* ================================
   GENERAL SECTION
================================ */

  .help-categories,
  .popular-questions {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 0;
  }

  .help-section-title {
    text-align: center;
    margin-bottom: 45px;
  }

  .help-section-title h2 {
    margin: 0 0 10px;
    font-size: 32px;
    font-weight: 700;
    color: #0f172a;
  }

  .help-section-title p {
    margin: 0;
    color: #64748b;
    font-size: 16px;
  }

  /* ================================
   HELP CARDS
================================ */

  .help-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  .help-card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
  }

  .help-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  }

  .help-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 10px;
    background: #eff6ff;
    font-size: 24px;
  }

  .help-card h3 {
    margin: 0 0 10px;
    font-size: 20px;
    color: #0f172a;
  }

  .help-card > p {
    margin-bottom: 20px;
    color: #64748b;
    line-height: 1.6;
  }

  .help-card ul {
    margin: 0;
    padding-left: 20px;
    list-style-type: disc;
  }

  .help-card li {
    margin-bottom: 10px;
    color: #475569;
    line-height: 1.5;
  }

  .help-card li::marker {
    color: #2563eb;
  }

  /* ================================
   SUPPORT
================================ */

  .support-section {
    padding: 70px 20px;
    background: #eff6ff;
  }

  .support-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .support-content h2 {
    margin: 0 0 15px;
    font-size: 32px;
    color: #0f172a;
  }

  .support-content p {
    margin: 0 0 30px;
    color: #64748b;
    font-size: 16px;
  }

  .support-button {
    display: inline-block;
    padding: 13px 25px;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: background 0.3s ease;
  }

  .support-button:hover {
    background: #1d4ed8;
  }

  /* ================================
   RESPONSIVE
================================ */

  @media (max-width: 900px) {
    .help-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .help-hero h1 {
      font-size: 36px;
    }
  }

  @media (max-width: 600px) {
    .help-hero {
      padding: 60px 20px;
    }

    .help-hero h1 {
      font-size: 30px;
    }

    .help-hero p {
      font-size: 15px;
    }

    .help-search {
      flex-direction: column;
      background: transparent;
      gap: 10px;
    }

    .help-search input {
      width: 100%;
      box-sizing: border-box;
      border-radius: 6px;
    }

    .help-search button {
      width: 100%;
      padding: 14px;
    }

    .help-grid {
      grid-template-columns: 1fr;
    }

    .help-categories,
    .popular-questions {
      width: 90%;
      padding: 50px 0;
    }

    .help-section-title h2 {
      font-size: 27px;
    }

    .help-card {
      padding: 25px;
    }

    .support-section {
      padding: 55px 20px;
    }

    .support-content h2 {
      font-size: 27px;
    }
  }
`;

function HelpCenter() {
  return (
    <Wrapper>
      <div className="help-center">
        {/* Hero Section */}
        <section className="help-hero">
          <div className="help-hero-content">
            <h1>How Can We Help You?</h1>
            <p>
              Find answers to your questions about your Xwin account,
              investments, deposits, withdrawals, security, and cryptocurrency.
            </p>

            <div className="help-search">
              <input type="text" placeholder="Search for help..." />
              <button>Search</button>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="help-categories">
          <div className="help-section-title">
            <h2>Help Center</h2>
            <p>
              Browse our most common topics to find the information you need.
            </p>
          </div>

          <div className="help-grid">
            {/* Account */}
            <div className="help-card">
              <div className="help-icon">👤</div>
              <h3>Account & Profile</h3>
              <p>
                Get help managing your Xwin account and personal information.
              </p>

              <ul>
                <li>How do I create an account?</li>
                <li>How do I verify my account?</li>
                <li>How do I reset my password?</li>
                <li>How do I change my email address?</li>
                <li>How do I update my profile?</li>
                <li>How do I close my account?</li>
              </ul>
            </div>

            {/* Deposits */}
            <div className="help-card">
              <div className="help-icon">💳</div>
              <h3>Deposits & Funding</h3>
              <p>
                Learn how to fund your Xwin account and manage your deposits.
              </p>

              <ul>
                <li>How do I deposit funds?</li>
                <li>What payment methods are supported?</li>
                <li>Is there a minimum deposit?</li>
                <li>Why is my deposit pending?</li>
                <li>What should I do if my deposit fails?</li>
              </ul>
            </div>

            {/* Investments */}
            <div className="help-card">
              <div className="help-icon">📈</div>
              <h3>Investments</h3>
              <p>
                Find information about investing and managing your portfolio.
              </p>

              <ul>
                <li>How do I make an investment?</li>
                <li>What investment options are available?</li>
                <li>Is there a minimum investment amount?</li>
                <li>How do I track my investments?</li>
                <li>Can I have multiple investments?</li>
                <li>Where can I view my investment history?</li>
              </ul>
            </div>

            {/* Withdrawals */}
            <div className="help-card">
              <div className="help-icon">💰</div>
              <h3>Withdrawals</h3>
              <p>
                Learn how to withdraw funds and understand withdrawal
                processing.
              </p>

              <ul>
                <li>How do I withdraw my funds?</li>
                <li>How long do withdrawals take?</li>
                <li>Are there withdrawal fees?</li>
                <li>Why is my withdrawal pending?</li>
                <li>Why was my withdrawal rejected?</li>
                <li>Are there withdrawal limits?</li>
              </ul>
            </div>

            {/* Security */}
            <div className="help-card">
              <div className="help-icon">🔐</div>
              <h3>Security</h3>
              <p>
                Keep your account secure and learn what to do if you notice
                suspicious activity.
              </p>

              <ul>
                <li>How do I protect my account?</li>
                <li>How do I enable two-factor authentication?</li>
                <li>How do I change my password?</li>
                <li>What should I do if I notice suspicious activity?</li>
                <li>What should I do if I lose access to my account?</li>
              </ul>
            </div>

            {/* Cryptocurrency */}
            <div className="help-card">
              <div className="help-icon">₿</div>
              <h3>Cryptocurrency</h3>
              <p>
                Learn more about cryptocurrency and the risks associated with
                digital asset investments.
              </p>

              <ul>
                <li>What is cryptocurrency?</li>
                <li>How can I invest in cryptocurrency?</li>
                <li>What cryptocurrencies are supported?</li>
                <li>Why do cryptocurrency prices change?</li>
                <li>Where can I view current prices?</li>
                <li>What are the risks of cryptocurrency investing?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="support-section">
          <div className="support-content">
            <h2>Still Need Help?</h2>
            <p>
              Can't find what you're looking for? Our support team is here to
              help.
            </p>

            <Link to="/contact-us" className="support-button">
              Contact Support
            </Link>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

export default HelpCenter;
