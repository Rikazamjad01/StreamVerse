"use client";

const data = [
  "Last updated: 2025-08-25",
  "This Privacy Policy explains how StreamVerse (the “Service”) and its mobile application, the StreamVERSE app (collectively “we”, “us”, or “our”), collect, use, disclose, and protect information when you visit our website, create an account, connect social platforms, or use our multi-streaming, analytics, and comment management features.",
  "Who We Are & How To Contact Us",
  "StreamVerse operates a platform that lets creators go live to multiple social networks at once and review analytics and audience interactions from a single dashboard. For privacy questions or requests, contact us via the site’s Contact page or at your privacy email here.",
  "Information We Collect",
  "1) You provide to us: Account details (name, email, password or SSO identifier), profile & billing (country/region, plan, tax info), support content (messages, attachments).",
  "2) From linked platforms: OAuth tokens, platform identifiers, channel/page IDs, metadata necessary for streaming, comments, analytics. We do not store third-party passwords.",
  "3) Automatically collected: Usage/device data (app version, OS, IP, crash logs, performance diagnostics), stream events (start time, destinations, bitrate, dropped frames), cookies for sessions, preferences, analytics, marketing attribution, and fraud prevention.",
  "4) Payment data: We use third-party processors (Stripe, Apple, Google, etc.). We only store limited billing info (tokens, last 4 digits, expiry) and receipts; full card details are not stored.",
  "How We Use Information",
  "We use your information to operate and improve the Service, authenticate you, process payments, monitor performance, deliver support, send updates and marketing (with consent), and comply with laws and platform rules.",
  "Sharing & Disclosure",
  "We share with service providers (hosting, analytics, payments, email), connected platforms (to enable streaming and fetch data), legal authorities if required, and during corporate transactions (e.g., acquisition).",
  "Data Retention",
  "We retain data as needed for service, legal compliance, dispute resolution. OAuth tokens persist while accounts remain connected; disconnecting revokes future access.",
  "Security",
  "We use encryption and access controls to protect user data, but cannot guarantee absolute security.",
  "Your Choices",
  "You can update or delete your data, disconnect platforms, opt out of marketing emails, or control cookies via browser or our settings.",
  "EU/UK Users",
  "We process data based on contract performance, legitimate interests, consent, or legal obligation. You have rights to access, rectify, erase, restrict processing, object, and data portability. Lodge complaints with regulators.",
  "California Residents",
  "We collect categories described above, do not sell personal information. You can request access, deletion or correction without discrimination.",
  "International Transfers",
  "We may process data outside your country with safeguards (e.g., standard contractual clauses).",
  "Children",
  "Our Service is not for children under the age of digital consent (generally 13+). We do not knowingly collect their data; we will delete any we learn we have.",
  "Third-Party Links & Services",
  "Our Service uses third-party platforms governed by their own policies; we are not responsible for their practices.",
  "Changes to This Policy",
  "We may update this policy occasionally. We will update the “Last updated” date. Continued use means you accept changes.",
  "Contact",
  "For questions or requests, use the Contact page or email your privacy email here.",
  "Disclaimer",
  "This document is a general template adapted for a multi-streaming/analytics product and does not constitute legal advice. Please consult counsel for your jurisdiction."
];

function PrivacyPolicy() {
  return (
    <div className="flex flex-col py-[5vh] px-4 bg-white">
      <h4 className="text-lg md:text-xl text-black">
        StreamVerse Privacy Policy
      </h4>
      <h1 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-black">
        Privacy Policy
      </h1>

      <div className="w-full pt-6 md:pt-10 space-y-4">
        {data.map((element, idx) => {
          const isHeading = /^[A-Za-z0-9].*:$/.test(element) || element.match(/^(\d\)|Last updated)/);
          return (
            <p
              key={idx}
              className={`text-black leading-relaxed ${
                isHeading
                  ? "font-medium text-base md:text-lg"
                  : "text-xs md:text-sm"
              }`}
            >
              {element}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
