export default function About() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500 pt-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">About Canvix Pro</h1>
        <div className="w-20 h-1 bg-brand rounded-full"></div>
      </div>

      <div className="prose prose-lg max-w-none text-text-main">
        <p className="text-xl text-text-muted leading-relaxed mb-8">
          At <strong className="text-text-main">Envalis Technologies</strong>, we believe that powerful editing tools shouldn't compromise your privacy or require an internet connection.
        </p>

        <div className="bg-bg-card border border-border-main rounded-2xl p-8 md:p-12 mb-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-3xl rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-text-main mb-4">Our Origin</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Canvix Pro was born out of a simple need: a comprehensive, premium-feeling image and PDF utility toolkit that works <strong className="text-text-main">100% locally</strong>. Unlike other apps that upload your personal photos to cloud servers for processing, Canvix leverages the raw power of your smartphone's hardware to edit, convert, and compress files instantly.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand/5 to-transparent border-l-4 border-brand p-8 rounded-r-2xl">
          <h2 className="text-2xl font-bold text-text-main mb-4">Our Mission</h2>
          <p className="text-text-muted leading-relaxed">
            Our mission is to provide an all-in-one studio that is fast, secure, and accessible to everyone. We are dedicated to continuously improving Canvix Pro, adding new features while maintaining our strict commitment to on-device processing and user privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
