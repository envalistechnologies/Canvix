export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500 pt-8 pb-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">Privacy Policy</h1>
        <div className="flex items-center gap-4 text-text-muted">
          <div className="w-12 h-1 bg-brand rounded-full"></div>
          <span className="text-sm font-medium uppercase tracking-wider">Effective Date: August 2026</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-text-main">
        <p className="text-xl text-text-muted leading-relaxed mb-12">
          Canvix Pro is designed from the ground up with your privacy as our highest priority. We believe that what you create on your device should stay on your device. This Privacy Policy details how we handle information when you use our application.
        </p>

        <div className="space-y-10">
          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">1</span>
              100% Local Processing (No Cloud Uploads)
            </h2>
            <p className="text-text-muted leading-relaxed">
              Unlike many other image editing or file conversion applications, Canvix Pro operates entirely offline. All processing—including background removal, file compression, format conversion, and watermarking—is executed entirely by your device's hardware. <strong>We do not upload your photos, documents, or processed files to any remote servers.</strong> Your personal files never leave your device, ensuring complete data security and privacy.
            </p>
          </section>

          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">2</span>
              Data Collection & Analytics
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              The Canvix app itself is designed to function without tracking your behavior. We do not collect, store, or transmit any:
            </p>
            <ul className="list-disc pl-6 text-text-muted space-y-2 mb-4">
              <li>Personally Identifiable Information (PII) such as your name, email, or phone number.</li>
              <li>Files, photos, or documents you process within the app.</li>
              <li>Behavioral tracking or in-app usage telemetry.</li>
            </ul>
            <p className="text-text-muted leading-relaxed">
              Because everything happens locally on your device, we have zero access to the content you create or modify.
            </p>
          </section>

          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">3</span>
              Third-Party Advertising (Google AdMob)
            </h2>
            <p className="text-text-muted leading-relaxed">
              To keep the application free for our users, Canvix Pro utilizes Google AdMob to display relevant advertisements. While Canvix itself does not collect personal data, the Google AdMob SDK may collect and process certain device-level information (such as your device's Advertising ID, IP address, and general location) to serve personalized or non-personalized ads. 
              <br/><br/>
              This data collection is governed entirely by Google's own Privacy Policy. You can opt out of personalized advertising by adjusting your device's system settings (e.g., opting out of Ads Personalization in your Android settings).
            </p>
          </section>

          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">4</span>
              Device Permissions
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Canvix Pro requests specific device permissions solely to provide its core functionality:
            </p>
            <ul className="list-disc pl-6 text-text-muted space-y-2">
              <li><strong>Storage/Photos (Read & Write):</strong> Required to allow you to select images or documents from your gallery, and to save the processed files back to your device. We do not access or scan any files other than those you explicitly select.</li>
              <li><strong>Camera (Optional):</strong> Required only if you choose to take a photo directly within the app for editing.</li>
            </ul>
          </section>

          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">5</span>
              Changes to this Privacy Policy
            </h2>
            <p className="text-text-muted leading-relaxed">
              We may update our Privacy Policy from time to time to reflect changes in our app or legal requirements. We will notify you of any significant changes by updating the "Effective Date" at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
