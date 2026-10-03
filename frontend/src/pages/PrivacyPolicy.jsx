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

function PrivacyPolicy() {
  return (
    <Wrapper className="lg:w-[80%]">
      <h1>Privacy Policy</h1>
      <h6>Last Updated: October 1, 2026</h6>
      <p>
        At Xwin, we respect your privacy and are committed to protecting the
        personal information you provide when using our website, application,
        and services.
      </p>
      <p>
        This Privacy Policy explains what information we collect, how we use it,
        how we protect it, and the choices you have regarding your personal
        information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        Depending on how you use Xwin, we may collect the following information:
      </p>
      <h5>Personal Information</h5>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Date of birth</li>
        <li>Residential address</li>
        <li>Account login information</li>
        <li>Identification and verification information where required</li>
      </ul>
      <h2>Financial and Transaction Information</h2>
      <p>
        When you make deposits, investments, withdrawals, or other transactions,
        we may collect information necessary to process and record those
        transactions.
      </p>
      <p>
        We may work with third-party payment providers and financial service
        providers to process payments. We do not necessarily store complete
        payment-card or banking credentials ourselves.
      </p>
      <h2>Technical Information</h2>
      <p>We may automatically collect information such as:</p>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device information</li>
        <li>Operating system</li>
        <li>Login times</li>
        <li>Pages and features accessed</li>
        <li>Cookies and similar technologies</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>Create and manage your Xwin account</li>
        <li>Verify your identity</li>
        <li>Process transactions and withdrawals</li>
        <li>Provide and improve our services</li>
        <li>Communicate with you about your account</li>
        <li>Provide customer support</li>
        <li>Detect and prevent fraud, abuse, and unauthorized activity</li>
        <li>Maintain the security of our platform</li>
        <li>Comply with applicable legal and regulatory requirements</li>
        <li>
          Send relevant service updates and, where permitted, marketing
          communications
        </li>
      </ul>
      <h2>Identity Verification</h2>
      <p>
        Because Xwin provides financial and cryptocurrency-related services, we
        may be required to verify your identity before allowing certain
        activities on the platform
      </p>
      <p>
        This may involve requesting identification documents or other
        information necessary to comply with applicable laws, regulations, and
        anti-fraud or anti-money-laundering requirements.
      </p>
      <h2>How We Share Your Information</h2>
      <p>We do not sell your personal information</p>
      <p>
        We may share information with trusted third parties when necessary to
        operate Xwin, including:
      </p>
      <ul>
        <li>Payment and financial service providers</li>
        <li>Identity verification providers</li>
        <li>Cloud hosting and technology providers</li>
        <li>Security and fraud-prevention providers</li>
        <li>Customer support providers</li>
        <li>Professional advisers</li>
        <li>Government authorities or regulators where legally required</li>
      </ul>
      <p>
        Third-party service providers are expected to handle information in
        accordance with applicable privacy and security requirements.
      </p>
      <h2>Data Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect your
        personal information from unauthorized access, loss, misuse, alteration,
        or disclosure.
      </p>
      <p>
        However, no internet-based service can guarantee absolute security. You
        are responsible for keeping your account credentials confidential and
        notifying us if you suspect unauthorized access to your account.
      </p>
      <h2>Cookies</h2>
      <p>
        Xwin may use cookies and similar technologies to improve website
        functionality, understand how users interact with our platform, remember
        preferences, and improve our services.
      </p>
      <p>
        Where required by applicable law, we will provide appropriate cookie
        controls and allow you to manage your cookie preferences.
      </p>
      <h2>Data Retention</h2>
      <p>
        We retain personal information only for as long as reasonably necessary
        for the purposes described in this Privacy Policy, including providing
        our services, maintaining business records, resolving disputes,
        preventing fraud, and meeting legal or regulatory obligations.
      </p>
      <p>
        When information is no longer required, we will take reasonable steps to
        securely delete or anonymize it where appropriate.
      </p>
      <h2>Your Privacy Rights</h2>
      <p>
        Depending on your location and applicable law, you may have rights
        regarding your personal information, including the right to:
      </p>
      <ul>
        <li>Request access to your personal information</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of certain information</li>
        <li>Object to or restrict certain processing</li>
        <li>Withdraw consent where processing is based on consent</li>
        <li>Request a copy of certain personal information</li>
        <li>Make a privacy-related complaint</li>
      </ul>
      <p>Some requests may be subject to legal or regulatory limitations.</p>
      <h2>Third-Party Services</h2>
      <p>
        Our platform may contain links to or integrate with third-party
        websites, applications, payment providers, wallets, or other services.
      </p>
      <p>
        Xwin is not responsible for the privacy practices of third-party
        services. We recommend reviewing their privacy policies before providing
        personal information.
      </p>
      <h2>Children's Privacy</h2>
      <p>
        Xwin is not intended for individuals who are not legally permitted to
        use cryptocurrency or investment services in their jurisdiction.
      </p>
      <p>
        We do not knowingly collect personal information from children where
        such collection is prohibited by applicable law
      </p>
      <h2>International Data Transfers</h2>
      <p>
        Depending on the services we use and where you access Xwin from, your
        information may be processed or stored in countries other than your
        country of residenc
      </p>
      <p>
        Where applicable, we will take reasonable steps to ensure that
        international transfers of personal information are handled in
        accordance with applicable data protection laws.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        to our services, legal requirements, or privacy practices.
      </p>
      <p>
        When we make significant changes, we may provide additional notice where
        required.
      </p>
      <p>
        The updated policy will be published on this page with a revised "Last
        Updated" date.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, your personal
        information, or how Xwin handles your data, please contact us:
      </p>
      <p>Email: privacy@xwin.com</p>
      <p>
        We will review and respond to privacy requests within the period
        required by applicable law.
      </p>
    </Wrapper>
  );
}

export default PrivacyPolicy;
