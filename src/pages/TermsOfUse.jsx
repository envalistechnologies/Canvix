export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500 pt-8 pb-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">Terms of Use</h1>
        <div className="flex items-center gap-4 text-text-muted">
          <div className="w-12 h-1 bg-brand rounded-full"></div>
          <span className="text-sm font-medium uppercase tracking-wider">Effective Date: August 2026</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-text-main">
        <p className="text-xl text-text-muted leading-relaxed mb-12">
          By downloading, accessing, or using the Canvix Pro application, these terms will automatically apply to you. Please ensure that you read them carefully before using the app. If you do not agree with any of these terms, you should not use the application.
        </p>

        <div className="space-y-10">
          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">1</span>
              License and App Usage
            </h2>
            <p className="text-text-muted leading-relaxed">
              Canvix Pro is a utility tool designed to process images and files locally on your device. Envalis Technologies grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the application strictly in accordance with these Terms. You agree not to use the app in any way that violates applicable laws, regulations, or third-party rights. You are expressly prohibited from reverse engineering, decompiling, or attempting to extract the source code of the application.
            </p>
          </section>

          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">2</span>
              Intellectual Property & User Content
            </h2>
            <p className="text-text-muted leading-relaxed">
              <strong>App Ownership:</strong> The Canvix Pro application itself, including its original design, user interface, algorithms, trademarks, and branding, is the exclusive property of Envalis Technologies.
              <br/><br/>
              <strong>Your Content:</strong> The developers claim absolute zero ownership or rights over any images, documents, or files you create, edit, or process using the app. Because all processing happens locally on your device, your files belong 100% to you. You are solely responsible for ensuring you have the legal right to edit or distribute the files you process.
            </p>
          </section>

          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">3</span>
              Disclaimer of Warranties
            </h2>
            <p className="text-text-muted leading-relaxed">
              The application is provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, either express or implied. While we strive to make Canvix Pro highly reliable and robust, Envalis Technologies does not warrant that the application will function uninterrupted, be free of errors, or that any specific processing result (like background removal accuracy) will meet your subjective expectations.
            </p>
          </section>

          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">4</span>
              Limitation of Liability
            </h2>
            <p className="text-text-muted leading-relaxed">
              To the maximum extent permitted by applicable law, in no event shall Envalis Technologies or its developers be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use or inability to use the app. This includes, but is not limited to, damages for data loss, file corruption, or device issues resulting from processing heavy files. Always ensure you maintain secure backups of your important documents and images.
            </p>
          </section>

          <section className="bg-bg-card border border-border-main p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand text-sm">5</span>
              Modifications to the App and Terms
            </h2>
            <p className="text-text-muted leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the app (or any part thereof) at any time, with or without notice. We may also update these Terms of Use periodically. Your continued use of the application following the posting of any changes constitutes acceptance of those changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
