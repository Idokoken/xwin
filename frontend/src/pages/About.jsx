import React from "react";
import styled from "styled-components";
import { tablet } from "@/Responsive";

const Wrapper = styled.div`
  padding: 20px;

  /* =====================================
   ABOUT PAGE
===================================== */

  .about-page {
    width: 100%;
    min-height: 100vh;
    background: #ffffff;
    color: #0f172a;
  }

  /* =====================================
   HERO
===================================== */

  .about-hero {
    width: 100%;
    padding: 100px 20px;

    box-sizing: border-box;

    background: linear-gradient(135deg, #0f172a, #1e3a8a);

    color: white;
  }

  .about-hero-content {
    width: 100%;
    max-width: 900px;

    margin: auto;

    text-align: center;
  }

  .about-label {
    display: inline-block;

    margin-bottom: 18px;

    color: #93c5fd;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: 2px;
  }

  .about-hero h1 {
    max-width: 850px;

    margin: 0 auto 20px;

    font-size: 48px;
    line-height: 1.15;

    font-weight: 700;
  }

  .about-hero p {
    max-width: 700px;

    margin: 0 auto 35px;

    color: #dbeafe;

    font-size: 17px;
    line-height: 1.7;
  }

  .about-hero-button {
    display: inline-block;

    padding: 14px 28px;

    background: #2563eb;

    color: white;

    text-decoration: none;

    border-radius: 6px;

    font-weight: 600;

    transition: 0.3s ease;
  }

  .about-hero-button:hover {
    background: #1d4ed8;
  }

  /* =====================================
   GENERAL CONTAINER
===================================== */

  .about-container,
  .why-container,
  .about-features-container {
    width: 90%;
    max-width: 1200px;

    margin: auto;
  }

  /* =====================================
   ABOUT SECTION
===================================== */

  .about-section {
    padding: 90px 20px;

    background: white;
  }

  .about-container {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 70px;

    align-items: center;
  }

  .section-label {
    display: block;

    margin-bottom: 12px;

    color: #2563eb;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 1.5px;
  }

  .about-content h2 {
    margin: 0 0 20px;

    font-size: 36px;

    line-height: 1.2;
  }

  .about-content p {
    margin: 0 0 18px;

    color: #64748b;

    font-size: 16px;

    line-height: 1.8;
  }

  /* =====================================
   ABOUT IMAGE
===================================== */

  .about-image {
    display: flex;

    align-items: center;
    justify-content: center;
  }

  .about-image-box {
    width: 100%;
    max-width: 480px;

    height: 380px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 20px;

    background:
      radial-gradient(circle at top right, #3b82f6, transparent 40%),
      linear-gradient(135deg, #0f172a, #1e40af);

    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15);
  }

  .about-image-box span {
    color: white;

    font-size: 65px;

    font-weight: 800;

    letter-spacing: 5px;
  }

  /* =====================================
   MISSION & VISION
===================================== */

  .mission-section {
    padding: 90px 20px;

    background: #f8fafc;
  }

  .mission-container {
    width: 90%;
    max-width: 1100px;

    margin: auto;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 30px;
  }

  .mission-card {
    padding: 40px;

    background: white;

    border: 1px solid #e2e8f0;

    border-radius: 12px;

    transition: 0.3s ease;
  }

  .mission-card:hover {
    transform: translateY(-5px);

    box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
  }

  .mission-icon {
    width: 55px;
    height: 55px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin-bottom: 25px;

    border-radius: 10px;

    background: #eff6ff;

    font-size: 25px;
  }

  .mission-card > span {
    display: block;

    margin-bottom: 10px;

    color: #2563eb;

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 1.5px;
  }

  .mission-card h2 {
    margin: 0 0 15px;

    font-size: 25px;

    line-height: 1.3;
  }

  .mission-card p {
    margin: 0;

    color: #64748b;

    line-height: 1.7;
  }

  /* =====================================
   WHY XWIN
===================================== */

  .why-section {
    padding: 90px 20px;

    background: white;
  }

  .section-heading {
    max-width: 700px;

    margin: 0 auto 50px;

    text-align: center;
  }

  .section-heading h2 {
    margin: 0 0 15px;

    font-size: 36px;

    line-height: 1.2;
  }

  .section-heading p {
    margin: 0;

    color: #64748b;

    font-size: 16px;

    line-height: 1.7;
  }

  /* =====================================
   VALUES
===================================== */

  .values-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 20px;
  }

  .value-card {
    padding: 30px;

    border: 1px solid #e2e8f0;

    border-radius: 10px;

    background: white;

    transition: 0.3s ease;
  }

  .value-card:hover {
    transform: translateY(-5px);

    border-color: #bfdbfe;

    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
  }

  .value-icon {
    width: 50px;
    height: 50px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    border-radius: 10px;

    background: #eff6ff;

    font-size: 22px;
  }

  .value-card h3 {
    margin: 0 0 10px;

    font-size: 19px;
  }

  .value-card p {
    margin: 0;

    color: #64748b;

    line-height: 1.6;

    font-size: 14px;
  }

  /* =====================================
   FEATURES
===================================== */

  .about-features {
    padding: 90px 20px;

    background: #f8fafc;
  }

  .features-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 25px;
  }

  .feature-item {
    padding: 30px;

    background: white;

    border-radius: 10px;

    border: 1px solid #e2e8f0;
  }

  .feature-item > span {
    display: block;

    margin-bottom: 15px;

    color: #2563eb;

    font-size: 14px;

    font-weight: 700;
  }

  .feature-item h3 {
    margin: 0 0 10px;

    font-size: 20px;
  }

  .feature-item p {
    margin: 0;

    color: #64748b;

    line-height: 1.7;
  }

  /* =====================================
   RISK NOTICE
===================================== */

  .about-notice {
    padding: 60px 20px;

    background: #fff7ed;
  }

  .about-notice-container {
    width: 90%;
    max-width: 900px;

    margin: auto;

    padding: 30px;

    box-sizing: border-box;

    border-left: 4px solid #f97316;

    background: #ffedd5;
  }

  .about-notice h2 {
    margin: 0 0 12px;

    font-size: 22px;
  }

  .about-notice p {
    margin: 0;

    color: #7c2d12;

    line-height: 1.7;

    font-size: 14px;
  }

  /* =====================================
   CTA
===================================== */

  .about-cta {
    padding: 90px 20px;

    background: #0f172a;

    color: white;
  }

  .about-cta-content {
    max-width: 750px;

    margin: auto;

    text-align: center;
  }

  .about-cta h2 {
    margin: 0 0 15px;

    font-size: 36px;
  }

  .about-cta p {
    margin: 0 auto 30px;

    color: #cbd5e1;

    line-height: 1.7;
  }

  .about-cta-buttons {
    display: flex;

    justify-content: center;

    gap: 15px;
  }

  .primary-button,
  .secondary-button {
    padding: 13px 25px;

    border-radius: 6px;

    text-decoration: none;

    font-weight: 600;

    transition: 0.3s ease;
  }

  .primary-button {
    background: #2563eb;

    color: white;
  }

  .primary-button:hover {
    background: #1d4ed8;
  }

  .secondary-button {
    background: transparent;

    color: white;

    border: 1px solid #64748b;
  }

  .secondary-button:hover {
    background: #1e293b;
  }

  /* =====================================
   TABLET
===================================== */

  @media (max-width: 1000px) {
    .values-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* =====================================
   MOBILE
===================================== */

  @media (max-width: 768px) {
    .about-hero {
      padding: 70px 20px;
    }

    .about-hero h1 {
      font-size: 36px;
    }

    .about-container {
      grid-template-columns: 1fr;

      gap: 45px;
    }

    .about-content h2 {
      font-size: 30px;
    }

    .about-image-box {
      height: 280px;
    }

    .about-image-box span {
      font-size: 45px;
    }

    .mission-container {
      grid-template-columns: 1fr;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .values-grid {
      grid-template-columns: 1fr;
    }

    .section-heading h2 {
      font-size: 30px;
    }

    .about-cta h2 {
      font-size: 30px;
    }

    .about-cta-buttons {
      flex-direction: column;
    }

    .primary-button,
    .secondary-button {
      width: 100%;

      box-sizing: border-box;

      text-align: center;
    }
  }

  /* =====================================
   SMALL MOBILE
===================================== */

  @media (max-width: 480px) {
    .about-hero h1 {
      font-size: 30px;
    }

    .about-hero p {
      font-size: 15px;
    }

    .about-section,
    .mission-section,
    .why-section,
    .about-features {
      padding: 60px 20px;
    }

    .mission-card {
      padding: 25px;
    }

    .value-card {
      padding: 25px;
    }

    .feature-item {
      padding: 25px;
    }

    .about-notice-container {
      padding: 22px;
    }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-label">ABOUT XWIN</span>

            <h1>Building a Simpler Way to Explore Digital Investments</h1>

            <p>
              Xwin is a digital investment platform designed to make
              cryptocurrency and other investment opportunities easier to
              explore, manage, and understand.
            </p>

            <a href="/contact" className="about-hero-button">
              Get in Touch
            </a>
          </div>
        </section>

        {/* Who We Are */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <span className="section-label">WHO WE ARE</span>

              <h2>Making Digital Investing More Accessible</h2>

              <p>
                Xwin is built for individuals who want a convenient digital
                platform for exploring cryptocurrency and other investment
                opportunities.
              </p>

              <p>
                Our platform brings investment tools, portfolio information,
                market insights, and account management features together in one
                place, helping users make informed decisions about their
                investments.
              </p>

              <p>
                We believe that technology can make financial platforms easier
                to understand and more convenient to use. That's why we focus on
                creating a simple and user-friendly experience.
              </p>
            </div>

            <div className="about-image">
              <div className="about-image-box">
                <span>XWIN</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-section">
          <div className="mission-container">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>

              <span>OUR MISSION</span>

              <h2>Empowering Better Investment Experiences</h2>

              <p>
                Our mission is to provide a straightforward digital platform
                that gives users access to useful investment tools and
                information while making portfolio management simple and
                convenient.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">🚀</div>

              <span>OUR VISION</span>

              <h2>A Smarter Digital Investment Experience</h2>

              <p>
                We envision a future where people can access and manage digital
                investment opportunities through technology that is intuitive,
                transparent, and easy to use.
              </p>
            </div>
          </div>
        </section>

        {/* Why Xwin */}
        <section className="why-section">
          <div className="why-container">
            <div className="section-heading">
              <span className="section-label">WHY XWIN</span>

              <h2>Designed Around the User</h2>

              <p>
                We focus on building a platform that puts simplicity,
                accessibility, and useful information at the center of the
                experience.
              </p>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🔐</div>

                <h3>Security</h3>

                <p>
                  We prioritize responsible security practices designed to help
                  protect user accounts and information.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">📊</div>

                <h3>Transparency</h3>

                <p>
                  We aim to provide clear information about investments,
                  transactions, and the features available on our platform.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">⚡</div>

                <h3>Simplicity</h3>

                <p>
                  Our platform is designed to make managing your investment
                  activities straightforward and easy to navigate.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">💡</div>

                <h3>Innovation</h3>

                <p>
                  We continuously explore technology and new ideas that can
                  improve the digital investment experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="about-features">
          <div className="about-features-container">
            <div className="section-heading">
              <span className="section-label">THE XWIN EXPERIENCE</span>

              <h2>Everything in One Place</h2>

              <p>
                Xwin brings together tools and features designed to help users
                manage their investment activities from a single platform.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <span>01</span>
                <h3>Portfolio Management</h3>
                <p>
                  Monitor and manage your investments through a centralized
                  dashboard.
                </p>
              </div>

              <div className="feature-item">
                <span>02</span>
                <h3>Market Information</h3>
                <p>
                  Access relevant market information to better understand
                  digital asset movements.
                </p>
              </div>

              <div className="feature-item">
                <span>03</span>
                <h3>Easy Account Management</h3>
                <p>
                  Manage your profile, transactions, and investment activities
                  from one convenient account.
                </p>
              </div>

              <div className="feature-item">
                <span>04</span>
                <h3>User Support</h3>
                <p>
                  Get assistance when you have questions about your account or
                  the platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Notice */}
        <section className="about-notice">
          <div className="about-notice-container">
            <h2>Investing Involves Risk</h2>

            <p>
              Cryptocurrency and other investments can be volatile and may
              result in loss of capital. Xwin does not guarantee investment
              returns. Users should understand the risks involved and consider
              their individual financial circumstances before making investment
              decisions.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="about-cta-content">
            <h2>Ready to Explore Xwin?</h2>

            <p>
              Discover a simple digital platform for exploring and managing your
              investment activities.
            </p>

            <div className="about-cta-buttons">
              <a href="/register" className="primary-button">
                Create an Account
              </a>

              <a href="/contact" className="secondary-button">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default About;
