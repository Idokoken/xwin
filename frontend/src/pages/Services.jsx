import React from "react";
import styled from "styled-components";
import { tablet } from "@/Responsive";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  a {
    text-decoration: none;
  }

  .section-tag {
    display: inline-block;
    margin-bottom: 15px;
    color: var(--primary-color);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  .section-header {
    max-width: 750px;
    margin: 0 auto 60px;
    text-align: center;
  }

  .section-header h2,
  .why-text h2,
  .cta-content h2 {
    font-size: 42px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  .section-header h2 span,
  .why-text h2 span,
  .cta-content h2 span {
    color: var(--primary-color);
  }

  .section-header p {
    color: #6b7280;
    font-size: 17px;
  }

  .hero-content h1 span {
    color: var(--primary-color);
  }

  /* =========================
   BUTTONS
========================= */

  .hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    justify-content: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 13px 25px;
    border-radius: 7px;
    font-weight: 600;
    transition: 0.3s ease;
  }

  .btn-primary {
    background: var(--primary-color);
    color: #ffffff;
  }

  .btn-primary:hover {
    background: #1d4ed8;
  }

  .btn-secondary {
    border: 1px solid #d1d5db;
    color: #111827;
    background: #ffffff;
  }

  .btn-secondary:hover {
    background: #f3f4f6;
  }

  /* =========================
   HERO
========================= */

  .services-hero {
    padding: 120px 20px;
    background: linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eef2ff 100%);
    text-align: center;
  }

  .hero-content {
    max-width: 850px;
    margin: auto;
  }

  .hero-content h1 {
    font-size: 58px;
    line-height: 1.1;
    margin-bottom: 25px;
  }

  .hero-content h1 span {
    display: block;
    color: var(--primary-color);
  }

  .hero-content p {
    max-width: 700px;
    margin: auto;
    color: #6b7280;
    font-size: 18px;
  }

  /* =========================
   SERVICES
========================= */

  .services-section {
    padding: 100px 20px;
    max-width: 1200px;
    margin: auto;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  .service-card {
    padding: 35px;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #ffffff;
    transition: all 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  }

  .service-icon {
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    border-radius: 12px;
    background: #eff6ff;
    color: #2563eb;
    font-size: 25px;
    font-weight: bold;
  }

  .service-card h3 {
    font-size: 21px;
    margin-bottom: 12px;
  }

  .service-card p {
    color: #6b7280;
    margin-bottom: 20px;
  }

  .service-card a {
    color: #2563eb;
    font-weight: 600;
  }

  /* =========================
   WHY XWIN
========================= */

  .why-section {
    padding: 100px 20px;
    background: #f8fafc;
  }

  .why-content {
    max-width: 1200px;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .why-text h2 {
    font-size: 42px;
  }

  .why-text > p {
    color: #6b7280;
    margin-bottom: 35px;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .feature {
    display: flex;
    gap: 15px;
  }

  .feature-icon {
    min-width: 35px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background: #dbeafe;
    color: #2563eb;
    font-weight: bold;
  }

  .feature h3 {
    margin-bottom: 5px;
  }

  .feature p {
    color: #6b7280;
  }

  /* =========================
   DASHBOARD CARD
========================= */

  .why-card {
    display: flex;
    justify-content: center;
  }

  .dashboard-preview {
    width: 100%;
    max-width: 450px;
    padding: 35px;
    border-radius: 20px;
    background: #111827;
    color: #ffffff;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  }

  .dashboard-preview > span {
    color: #9ca3af;
    font-size: 14px;
  }

  .balance {
    margin-top: 20px;
    font-size: 38px;
    font-weight: 700;
  }

  .balance-label {
    color: #9ca3af;
    font-size: 14px;
  }

  .chart {
    height: 120px;
    margin: 30px 0;
    border-bottom: 1px solid #374151;
    position: relative;
  }

  .chart-line {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;
    height: 60px;

    border-top: 3px solid #60a5fa;

    transform: skewY(-8deg);
  }

  .stats {
    display: flex;
    justify-content: space-between;
  }

  .stats div {
    display: flex;
    flex-direction: column;
  }

  .stats span {
    color: #9ca3af;
    font-size: 13px;
  }

  .stats strong {
    font-size: 20px;
  }

  /* =========================
   PROCESS
========================= */

  .process-section {
    padding: 100px 20px;
    max-width: 1200px;
    margin: auto;
  }

  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .process-card {
    padding: 30px;
    border-radius: 12px;
    background: #f8fafc;
  }

  .step-number {
    margin-bottom: 20px;
    color: #2563eb;
    font-size: 14px;
    font-weight: 700;
  }

  .process-card h3 {
    margin-bottom: 12px;
  }

  .process-card p {
    color: #6b7280;
  }

  /* =========================
   CTA
========================= */

  .cta-section {
    padding: 100px 20px;
    background: #111827;
    color: #ffffff;
    text-align: center;
  }

  .cta-content {
    max-width: 750px;
    margin: auto;
  }

  .cta-content h2 {
    font-size: 44px;
  }

  .cta-content p {
    color: #9ca3af;
    font-size: 17px;
  }

  .cta-section .btn-secondary {
    color: #ffffff;
    background: transparent;
    border-color: #4b5563;
  }

  /* =========================
   RISK DISCLAIMER
========================= */

  .risk-section {
    padding: 35px 20px;
    background: #f3f4f6;
    text-align: center;
  }

  .risk-section h3 {
    margin-bottom: 10px;
  }

  .risk-section p {
    max-width: 950px;
    margin: auto;
    color: #6b7280;
    font-size: 13px;
  }

  /* =========================
   RESPONSIVE
========================= */

  @media (max-width: 992px) {
    .hero-content h1 {
      font-size: 48px;
    }

    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .process-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .why-content {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }

  @media (max-width: 640px) {
    .services-hero {
      padding: 80px 20px;
    }

    .hero-content h1 {
      font-size: 38px;
    }

    .hero-content p {
      font-size: 16px;
    }

    .hero-buttons {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }

    .section-header h2,
    .why-text h2,
    .cta-content h2 {
      font-size: 32px;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }

    .process-grid {
      grid-template-columns: 1fr;
    }

    .services-section,
    .why-section,
    .process-section {
      padding: 70px 20px;
    }

    .dashboard-preview {
      padding: 25px;
    }

    .balance {
      font-size: 30px;
    }
  }
`;

function Services() {
  return (
    <Wrapper>
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="section-tag mb-4">OUR SERVICES</h1>

          <h1>
            Everything You Need to
            <span>Manage Your Digital Investments</span>
          </h1>

          <p>
            Xwin provides simple and convenient tools to help you explore
            digital assets, manage your portfolio, track your investments, and
            make more informed decisions.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/contact-us" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <span className="section-tag">WHAT WE OFFER</span>

          <h2>
            Services Designed Around
            <span>Your Investment Journey</span>
          </h2>

          <p>
            Whether you are exploring cryptocurrency for the first time or
            managing an existing portfolio, Xwin provides tools designed to make
            your investment experience simple and organized.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">₿</div>

            <h3>Crypto Investments</h3>

            <p>
              Explore cryptocurrency investment opportunities and manage your
              digital assets through a convenient online platform.
            </p>

            <Link to="/investments">Learn More →</Link>
          </div>

          <div className="service-card">
            <div className="service-icon">▣</div>

            <h3>Portfolio Management</h3>

            <p>
              Keep your digital investments organized and monitor your portfolio
              from a single, easy-to-use dashboard.
            </p>

            <a to="/portfolio">Learn More →</a>
          </div>

          <div className="service-card">
            <div className="service-icon">↗</div>

            <h3>Portfolio Tracking</h3>

            <p>
              Track your investment activity, monitor portfolio changes, and
              stay informed about your digital assets.
            </p>

            <a to="/portfolio">Learn More →</a>
          </div>

          <div className="service-card">
            <div className="service-icon">◈</div>

            <h3>Market Insights</h3>

            <p>
              Access useful market information and educational insights to help
              you better understand digital asset markets.
            </p>

            <a to="/market">Explore Insights →</a>
          </div>

          <div className="service-card">
            <div className="service-icon">⇄</div>

            <h3>Deposits & Withdrawals</h3>

            <p>
              Manage your account funding and withdrawals through
              straightforward transaction options available on the platform.
            </p>

            <Link to="/account">Learn More →</Link>
          </div>

          <div className="service-card">
            <div className="service-icon">?</div>

            <h3>Investment Education</h3>

            <p>
              Learn more about cryptocurrency, digital assets, market concepts,
              and responsible investment practices.
            </p>

            <Link href="/learn">Start Learning →</Link>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-content">
          <div className="why-text">
            <span className="section-tag">WHY XWIN</span>

            <h2>
              A Simpler Way to
              <span>Explore Digital Investments</span>
            </h2>

            <p>
              We believe managing digital investments should be simple,
              transparent, and easy to understand. Xwin brings useful investment
              tools and information together in one platform.
            </p>

            <div className="features">
              <div className="feature">
                <div className="feature-icon">✓</div>

                <div>
                  <h3>Simple Experience</h3>
                  <p>
                    Navigate your account and investment information through an
                    intuitive interface.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">✓</div>

                <div>
                  <h3>Transparent Information</h3>
                  <p>
                    Access clear information about your investments and account
                    activity.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">✓</div>

                <div>
                  <h3>Informed Decisions</h3>
                  <p>
                    Use available market information and educational resources
                    to support your investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-card">
            <div className="dashboard-preview">
              <span>Portfolio Overview</span>

              <div className="balance">$24,850.00</div>

              <div className="balance-label">Portfolio Value</div>

              <div className="chart">
                <div className="chart-line"></div>
              </div>

              <div className="stats">
                <div>
                  <span>Assets</span>
                  <strong>08</strong>
                </div>

                <div>
                  <span>Transactions</span>
                  <strong>24</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-header">
          <span className="section-tag">HOW IT WORKS</span>

          <h2>
            Get Started in
            <span>Four Simple Steps</span>
          </h2>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <div className="step-number">01</div>

            <h3>Create Your Account</h3>

            <p>
              Sign up for an Xwin account and complete the required account
              setup process.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">02</div>

            <h3>Fund Your Account</h3>

            <p>
              Add funds using the available funding options provided on the
              platform.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">03</div>

            <h3>Explore Investments</h3>

            <p>
              Explore available digital assets and investment information based
              on your goals and risk tolerance.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">04</div>

            <h3>Monitor Your Portfolio</h3>

            <p>
              Keep track of your investments and account activity through your
              Xwin dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <span className="section-tag">GET STARTED</span>

          <h2>
            Ready to Explore
            <span>Digital Investments?</span>
          </h2>

          <p>
            Create your Xwin account and discover tools designed to help you
            manage and understand your digital investment journey.
          </p>

          <div className="hero-buttons">
            <Link href="/register" class="btn btn-primary">
              Create Account
            </Link>

            <Link href="/contact" class="btn btn-secondary">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Services;
