import { Smartphone, Code2, HelpCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500 pt-8 pb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">Get in Touch</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Have a question, feedback, or need support with Canvix Pro? We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-bg-card border border-border-main rounded-2xl p-8 text-center hover:border-brand/30 transition-colors shadow-sm hover:shadow-md">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-2">Support & Inquiries</h3>
          <p className="text-text-muted text-sm mb-4">If you need support or have any inquiry, please contact the developer directly via the Google Play Store.</p>
          <a href="#download" className="text-brand hover:text-brand-dark font-medium">
            Contact on Play Store
          </a>
        </div>

        <div className="bg-bg-card border border-border-main rounded-2xl p-8 text-center hover:border-brand/30 transition-colors shadow-sm hover:shadow-md">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-6">
            <Code2 size={32} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-2">Developer</h3>
          <p className="text-text-muted text-sm mb-4">Built with precision and care for the ultimate user experience.</p>
          <span className="text-text-main font-medium">Envalis Technologies</span>
        </div>

        <div className="bg-bg-card border border-border-main rounded-2xl p-8 text-center hover:border-brand/30 transition-colors shadow-sm hover:shadow-md">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-6">
            <Smartphone size={32} />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-2">App Availability</h3>
          <p className="text-text-muted text-sm mb-4">Available now on the Google Play Store for all Android devices.</p>
          <a href="#download" className="text-brand hover:text-brand-dark font-medium inline-flex items-center gap-1">
            Download for Android
          </a>
        </div>
      </div>
    </div>
  );
}
