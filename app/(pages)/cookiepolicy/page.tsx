export const metadata = {
  title: 'Cookie Policy',
};

const CookiePolicyPage = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
  <h1 className="text-3xl font-bold leading-tight mb-6">Cookie Policy</h1>
  <div className="prose max-w-none text-base leading-relaxed dark:prose-invert mx-auto">
        <p><b>BrainStation India Foundation (BSIF)</b><br />
        <b>Effective Date:</b> 23 August 2025</p>
        <p>This Cookie Policy explains how BrainStation India Foundation (BSIF) uses cookies and similar technologies on our website. It should be read together with our [Privacy Policy].<br />
        By using our website, you agree to our use of cookies as described here. You can manage or withdraw your consent at any time through our Cookie Settings tool or your browser preferences.</p>
        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help websites function, improve user experience, and provide insights into how the site is used.<br />
        We also use related technologies such as pixels, tags, device identifiers, and local storage, which function similarly. For simplicity, we call them all “cookies.”</p>
        <h2>2. Types of Cookies We Use</h2>
        <p>We group cookies into the following categories:</p>
        <ul>
          <li><b>Strictly Necessary Cookies</b><br />
            Required for the site to function (e.g., page navigation, donation checkout, security).<br />
            These cannot be switched off.
          </li>
          <li><b>Performance & Analytics Cookies</b><br />
            Help us understand how visitors use our site (e.g., pages viewed, time spent).<br />
            We use these to improve design, navigation, and content.
          </li>
          <li><b>Functionality Cookies</b><br />
            Remember your preferences (e.g., language, region, form entries).<br />
            Provide a more personalized experience.
          </li>
          <li><b>Marketing & Social Media Cookies</b><br />
            Allow integration with platforms like Facebook, LinkedIn, Instagram, and YouTube.<br />
            Track engagement and may show you relevant campaigns or updates.
          </li>
        </ul>
        <h2>3. Cookie Table (Examples)</h2>
        <table>
          <thead>
            <tr>
              <th>Cookie Name / Type</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>sessionid</td><td>BSIF</td><td>Maintains your login/session</td><td>Session</td><td>Strictly Necessary</td></tr>
            <tr><td>csrftoken</td><td>BSIF</td><td>Security – prevents CSRF attacks</td><td>1 year</td><td>Strictly Necessary</td></tr>
            <tr><td>_ga</td><td>Google Analytics</td><td>Tracks website usage (anonymized stats)</td><td>2 years</td><td>Performance</td></tr>
            <tr><td>_gid</td><td>Google Analytics</td><td>Tracks user behavior (anonymized)</td><td>24 hours</td><td>Performance</td></tr>
            <tr><td>cookie_consent</td><td>BSIF</td><td>Remembers cookie consent choice</td><td>6 months</td><td>Functionality</td></tr>
            <tr><td>fbp</td><td>Facebook Pixel</td><td>Measures engagement with campaigns</td><td>90 days</td><td>Marketing</td></tr>
          </tbody>
        </table>
        <p>(This table will be updated as new cookies are added/removed.)</p>
        <h2>4. How We Obtain Consent</h2>
        <ul>
          <li>On your first visit, we display a cookie banner requesting consent for non-essential cookies.</li>
          <li>You can accept all, reject all, or customize preferences.</li>
          <li>Your preferences are stored and can be changed anytime via Cookie Settings at the bottom of our site.</li>
        </ul>
        <h2>5. Managing & Disabling Cookies</h2>
        <ul>
          <li>Change your preferences in our Cookie Settings tool.</li>
          <li>Adjust your browser settings to block or delete cookies (note: some site features may not work properly).</li>
          <li>Opt-out of analytics or marketing cookies directly with providers (e.g., Google Analytics opt-out tools).</li>
        </ul>
        <h2>6. Updates to This Policy</h2>
        <p>We may update this Cookie Policy to reflect changes in technology, law, or our practices. Updated versions will be posted here with a new effective date.</p>
        <h2>7. Contact Us</h2>
        <p>If you have questions about our use of cookies, please contact:<br />
        <b>Grievance Officer (DPDPA):</b><br />
        Name:<br />
        Email:<br />
        Phone:<br />
        Postal: Brainstation India Foundation, 303 Gokul Arcade, A Wing, Sahar Road, Vile Parle East, Mumbai – 400057, Maharashtra, India.<br /><br />
        For general queries contact us (link)
        </p>
      </div>
    </section>
  );
};

export default CookiePolicyPage;
