"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const data = [
  `Last updated: 2025-08-25`,
  "Agreement to Terms",
  "These Terms & Conditions (“Terms”) form a binding agreement between you and StreamVerse (“StreamVerse”, “we”, “us”, “our”) governing your access to and use of our website, the StreamVERSE mobile app, and related services (collectively, the “Service”). By accessing or using the Service, you agree to these Terms and to our Privacy Policy. If you do not agree, do not use the Service.",
  "Eligibility",
  "You must be at least the age of majority in your jurisdiction (and in any case 13+) to use the Service. If you use the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.",
  "Accounts & Security",
  "• You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.",
  "• You must provide accurate information and keep it up to date.",
  "• Notify us immediately of any unauthorized use or security incident.",
  "Connecting Third-Party Platforms",
  "The Service enables streaming to, and interaction with, third-party platforms (e.g., YouTube, TikTok, Instagram, Facebook, BIGO). By connecting a platform, you grant us permission to use the permissions you authorize (via OAuth or similar) to publish your streams, retrieve comments/metrics, and otherwise operate the Service. Your use of any third-party platform is subject to that platform’s own terms, policies, and community guidelines. We are not responsible for third-party platforms or their actions. You may disconnect a platform at any time; doing so may limit functionality.",
  "Subscriptions, Trials, and Payments",
    "• Some features require a paid subscription. Plan details and pricing are shown in the Service.",
    "• Unless stated otherwise, subscriptions automatically renew for the same term and price then in effect. You can cancel renewal in your Apple App Store or Google Play account settings before the renewal date.",
    "• Free trials, if offered, convert to paid plans unless you cancel before the trial ends.",
    "• Payments are processed securely by Apple (for iOS) or Google (for Android). StreamVerse does not process or store your full payment details. Your purchases are also subject to the applicable app store’s terms and conditions.",
    "• Except where required by law or by the app store’s own refund policies, fees are non-refundable and non-transferable.",
    "• Prices and features may change at renewal; we will notify you of material changes when required.",
    "• You are responsible for any taxes, duties, and carrier data charges.",
  "You retain all rights to content you stream, upload, or otherwise submit (“User Content”). To operate the Service, you grant StreamVerse a worldwide, non-exclusive, royalty-free, sublicensable license to host, store, encode, transmit, display, and otherwise process User Content as necessary to provide the Service (e.g., multi-streaming, transcoding, generating previews, analytics, and comment management).",
  "Your Responsibilities",
  "• Comply with all applicable laws and third-party platform rules.",
  "• Do not post or stream unlawful, infringing, misleading, harmful, hateful, or abusive content, or content that invades privacy or violates others’ rights.",
  "• Do not attempt to bypass technical limits, scrape, reverse engineer, probe, or disrupt the Service.",
  "• Do not upload malware or use the Service to send spam or conduct fraud.",
  "• Ensure you have all necessary rights and permissions to stream and distribute your content.",
  "Intellectual Property",
  "The Service (including software, designs, text, graphics, logos, and trademarks) is owned by or licensed to StreamVerse and is protected by intellectual property laws. Except for your User Content and rights expressly granted to you, no rights are transferred to you. Feedback you provide may be used by us without restriction.",
  "Third-Party Services",
  "Integrations, links, and features provided by third parties are governed by their terms and privacy policies. We do not control and are not responsible for third-party services.",
  "Termination",
  "You may stop using the Service at any time and cancel renewal as described above. We may suspend or terminate access if you breach these Terms, create risk, cause harm, or where required by law. Upon termination, licenses you granted survive only as necessary to complete ongoing lawful uses, and sections that by nature should survive will survive (e.g., IP, disclaimers, liability limits, indemnity, dispute resolution).",
  "Disclaimers",
  "THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE”. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE. We do not warrant that the Service will be uninterrupted, secure, or error-free, or that metrics or analytics will be accurate or complete.",
  "Limitation of Liability",
  "TO THE MAXIMUM EXTENT PERMITTED BY LAW, STREAMVERSE AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIMS RELATING TO THE SERVICE WILL NOT EXCEED THE AMOUNTS YOU PAID TO US IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.",
  "Indemnification",
  "You will defend, indemnify, and hold harmless StreamVerse and its affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising from your User Content, your use of the Service, your violation of these Terms, or your violation of any third-party right or law.",
  "Changes to the Service and to These Terms",
  "We may modify or discontinue features at any time. We may update these Terms from time to time. Material changes will be posted with a new “Last updated” date. Your continued use after changes means you accept the updated Terms.",
  "Governing Law & Dispute Resolution",
  "These Terms are governed by the laws of [your governing jurisdiction], without regard to conflict-of-laws principles. Any dispute will be resolved exclusively in the courts located in [your venue], and you consent to personal jurisdiction there. Where arbitration or consumer-specific requirements apply in your region, insert the appropriate language here.",
  "Miscellaneous",
  "• These Terms are the entire agreement between you and StreamVerse about the Service.",
  "• If any provision is unenforceable, the remainder remains in effect.",
  "• You may not assign these Terms without our consent; we may assign them as part of a merger, acquisition, or sale of assets.",
  "• No waiver of any term is a continuing waiver.",
  "• Force majeure: we are not responsible for events beyond our reasonable control.",
  "Contact",
  "Questions about these Terms? Use the Contact page or email dsentllc23@gmail.com.",
  "Disclaimer",
  "This document is a general template adapted for a multi-streaming/analytics product. It does not constitute legal advice. Please have counsel review for your specific company, governing law, and app-store rules."
];

function TermsAndConditions() {
  return (
    <div className="flex flex-col bg-white pt-2">
      <Navbar/>
      <div className="flex flex-col py-[5vh] px-4">
        <h1 className="mt-3 text-xl md:text-2xl lg:text-3xl font-bold text-black">
          Terms & Conditions
        </h1>

        <div className="w-full pt-6 space-y-4">
          {data.map((element, idx) => {
            const isHeading =
              /^[A-Za-z].*$/.test(element) &&
              !element.startsWith("•") &&
              element === element.trim();
            return (
              <p
                key={idx}
                className={`text-black leading-relaxed ${
                  isHeading
                    ? "text-xs md:text-sm"
                    : "text-xs md:text-sm"
                }`}
              >
                {element}
              </p>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;
