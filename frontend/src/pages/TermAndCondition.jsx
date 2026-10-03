import React from "react";
import styled from "styled-components";
import { tablet } from "@/Responsive";

const Wrapper = styled.div`
  padding: 20px;

  h1 {
    font-weight: bold;
    text-align: center;
    font-size: 30px;
    ${tablet({ fontSize: "40px" })}
  }
  h2 {
    font-weight: bold;
    margin: 20px 5px;
    font-size: 24px;
  }
  ul {
    list-style-type: disc;
    padding-left: 24px;
  }

  ul li {
    margin-bottom: 10px;
    line-height: 1.6;
  }

  ul li::marker {
  }
`;

function TermAndCondition() {
  return (
    <Wrapper className="lg:w-[80%]">
      <div className="terms-container">
        <h1 className="my-10">Terms & Conditions</h1>

        <p className="mb-4">
          <strong>Last Updated: October 1, 2026</strong>
        </p>

        <p>
          Welcome to <strong>Xwin</strong>. These Terms & Conditions ("Terms")
          govern your access to and use of the Xwin website, application, and
          related services.
        </p>

        <p>
          By creating an account or using Xwin, you acknowledge that you have
          read, understood, and agreed to these Terms. If you do not agree with
          these Terms, you should not use our services.
        </p>

        <h2>About Xwin</h2>

        <p>
          Xwin is a digital platform that provides access to cryptocurrency and
          investment-related services.
        </p>

        <p>
          The availability of specific services, assets, features, payment
          methods, and investment products may vary depending on your location
          and applicable laws.
        </p>

        <h2>Eligibility</h2>

        <p>To use Xwin, you must:</p>

        <ul>
          <li>Meet the minimum legal age required in your jurisdiction.</li>
          <li>Provide accurate and complete information.</li>
          <li>Have the legal capacity to enter into these Terms.</li>
          <li>Comply with all applicable laws and regulations.</li>
          <li>
            Not be located in a jurisdiction where the use of our services is
            prohibited.
          </li>
        </ul>

        <p>
          Xwin reserves the right to restrict access where required by
          applicable law or regulatory requirements.
        </p>

        <h2>Account Registration</h2>

        <p>
          You may be required to create an account before accessing certain Xwin
          services.
        </p>

        <p>You agree to:</p>

        <ul>
          <li>Provide accurate and up-to-date information.</li>
          <li>Keep your login credentials secure.</li>
          <li>Not share your account with another person.</li>
          <li>
            Notify Xwin promptly if you believe your account has been
            compromised.
          </li>
          <li>
            Be responsible for activity carried out through your account unless
            unauthorized activity is established.
          </li>
        </ul>

        <h2>Identity Verification</h2>

        <p>
          Xwin may require users to complete identity verification before
          accessing certain services.
        </p>

        <p>
          You may be asked to provide identification documents or other
          information to comply with applicable Know Your Customer (KYC),
          anti-money-laundering, fraud-prevention, and regulatory requirements.
        </p>

        <h2>Deposits</h2>

        <p>
          Users may fund their accounts using the payment methods made available
          by Xwin.
        </p>

        <p>
          Before completing a deposit, you are responsible for confirming that
          the payment details and amount are correct.
        </p>

        <p>
          Processing times may vary depending on the payment method and
          applicable third-party providers.
        </p>

        <h2>Investments</h2>

        <p>
          Xwin may provide access to various cryptocurrency and investment
          opportunities.
        </p>

        <p>
          Before making an investment, you should review the relevant
          information and understand the associated risks.
        </p>

        <p>
          <strong>Past performance does not guarantee future results.</strong>
        </p>

        <p>
          The value of cryptocurrencies and other investments can increase or
          decrease, and you may lose some or all of the money you invest.
        </p>

        <h2>Cryptocurrency Risk</h2>

        <p>
          Cryptocurrency markets can be highly volatile. Cryptocurrency prices
          may change significantly and rapidly due to market conditions,
          liquidity, regulation, technology, and other factors.
        </p>

        <p>
          You are responsible for evaluating whether a particular investment is
          appropriate for your circumstances.
        </p>

        <h2>Withdrawals</h2>

        <p>
          Users may request withdrawals from their Xwin accounts subject to
          applicable requirements.
        </p>

        <p>Withdrawals may be subject to:</p>

        <ul>
          <li>Identity verification</li>
          <li>Security checks</li>
          <li>Minimum or maximum withdrawal limits</li>
          <li>Processing times</li>
          <li>Applicable fees</li>
          <li>Legal and regulatory requirements</li>
        </ul>

        <h2>Fees</h2>

        <p>
          Certain Xwin services may be subject to fees. Where applicable,
          relevant fees will be displayed before you complete the applicable
          transaction.
        </p>

        <p>
          Fees may include transaction, withdrawal, processing, or other service
          charges.
        </p>

        <h2>Prohibited Activities</h2>

        <p>You agree not to use Xwin to:</p>

        <ul>
          <li>Engage in fraud or illegal activities.</li>
          <li>Provide false or misleading information.</li>
          <li>Attempt to gain unauthorized access to another account.</li>
          <li>Manipulate or interfere with the platform.</li>
          <li>Use the platform for money laundering or terrorist financing.</li>
          <li>Circumvent security or identity-verification procedures.</li>
          <li>Upload malicious software or harmful content.</li>
          <li>
            Conduct activities that violate applicable laws or regulations.
          </li>
        </ul>

        <h2>Account Suspension and Termination</h2>

        <p>
          Xwin may suspend, restrict, or terminate your account where we
          reasonably believe that:
        </p>

        <ul>
          <li>You have violated these Terms.</li>
          <li>
            Your account has been involved in fraudulent or suspicious activity.
          </li>
          <li>You have provided false information.</li>
          <li>Your activity creates a security or legal risk.</li>
          <li>We are required to do so by law or a competent authority.</li>
        </ul>

        <h2>Platform Availability</h2>

        <p>
          We aim to keep Xwin available and operational, but we do not guarantee
          uninterrupted access.
        </p>

        <p>The platform may occasionally become unavailable because of:</p>

        <ul>
          <li>Scheduled maintenance</li>
          <li>Technical issues</li>
          <li>Network failures</li>
          <li>Cybersecurity incidents</li>
          <li>Third-party service interruptions</li>
          <li>Events beyond our reasonable control</li>
        </ul>

        <h2>Third-Party Services</h2>

        <p>
          Xwin may integrate with third-party payment processors, financial
          service providers, technology providers, wallets, or other services.
        </p>

        <p>
          Third-party services may have their own terms and privacy policies.
          Xwin is not responsible for services or content controlled by
          independent third parties.
        </p>

        <h2>Intellectual Property</h2>

        <p>
          All Xwin branding, logos, designs, software, text, graphics, and other
          original content are owned by or licensed to Xwin unless otherwise
          stated.
        </p>

        <p>
          You may not copy, reproduce, distribute, modify, sell, or commercially
          exploit Xwin's intellectual property without prior written permission.
        </p>

        <h2>Disclaimer</h2>

        <p>
          Xwin provides information and services for their intended purposes and
          does not provide personalized financial, investment, tax, or legal
          advice unless expressly stated.
        </p>

        <p>
          Information displayed on the platform may change and should not be
          interpreted as a guarantee of future investment performance.
        </p>

        <h2>Limitation of Liability</h2>

        <p>
          To the extent permitted by applicable law, Xwin will not be
          responsible for losses resulting from circumstances outside our
          reasonable control, including market volatility, network failures,
          third-party service interruptions, unauthorized access resulting from
          compromised user credentials, or changes in applicable laws or
          regulations.
        </p>

        <h2>Indemnification</h2>

        <p>
          To the extent permitted by applicable law, you agree to indemnify and
          hold Xwin and its affiliates, employees, officers, and service
          providers harmless from claims, losses, damages, liabilities, and
          expenses arising from your violation of these Terms or misuse of the
          platform.
        </p>

        <h2>Changes to These Terms</h2>

        <p>
          We may update these Terms from time to time. When changes are made,
          the updated version will be published on this page with a revised
          "Last Updated" date.
        </p>

        <h2>Governing Law</h2>

        <p>
          These Terms shall be governed by and interpreted according to the
          applicable laws of the jurisdiction in which Xwin is legally
          established, unless applicable law requires otherwise.
        </p>

        <h2>Contact Us</h2>

        <p>
          If you have questions about these Terms & Conditions, please contact
          us:
        </p>

        <p>
          <strong>Xwin</strong>
          <br />
          Email: legal@xwin.com
        </p>

        <div className="risk-notice">
          <h2>Important Risk Notice</h2>

          <p>
            <strong>
              Cryptocurrency and other investments involve risk. The value of
              digital assets can rise or fall, and you may lose some or all of
              your investment.
            </strong>
          </p>

          <p>
            You should carefully consider your financial circumstances and risk
            tolerance before investing.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default TermAndCondition;
