import { Link } from 'react-router-dom';
import { Shield, Zap, CloudOff, ArrowRight, Download, Image as ImageIcon, FileText, Settings2 } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <CloudOff className="w-6 h-6 text-brand" />,
      title: "100% Offline Processing",
      description: "Your files never leave your device. Complete privacy and zero data cost."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand" />,
      title: "Premium Design",
      description: "A gorgeous, intuitive, and modern UI built for speed and efficiency."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand" />,
      title: "No Cloud Storage",
      description: "No hidden servers, no uploads. Everything happens securely on your phone."
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative pt-4 pb-8 md:pt-8 md:pb-12 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/15 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
            Version 2.0 Now Available
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-text-main tracking-tight mb-8 leading-tight">
            Your Ultimate <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
              All-in-One Image Studio.
            </span>
          </h1>
          
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Powerful offline image and PDF tools right in your pocket. Remove backgrounds, convert formats, compress, and edit files entirely on your device with zero quality loss and maximum privacy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#download" 
              className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              Download on Google Play
            </a>
            <Link 
              to="/tools" 
              className="flex items-center gap-2 bg-white hover:bg-slate-50 text-text-main px-8 py-4 rounded-full text-lg font-semibold transition-all border border-border-main hover:border-slate-300 w-full sm:w-auto justify-center shadow-sm"
            >
              Explore Tools
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Canvix */}
      <section className="py-20 border-t border-border-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Why Choose Canvix?</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Engineered for performance, designed for privacy. Experience the next generation of mobile file utility.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-bg-card border border-border-main rounded-2xl p-8 hover:border-brand/30 transition-colors group relative overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full group-hover:bg-brand/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tools Preview */}
      <section className="py-20 mt-10 bg-gradient-to-b from-transparent to-brand/5 rounded-3xl border border-brand/10 p-8 md:p-12 text-center shadow-sm">
        <h2 className="text-3xl font-bold text-text-main mb-6">Ready to transform your files?</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white border border-border-main px-4 py-2 rounded-lg text-sm text-text-muted shadow-sm"><ImageIcon size={16} /> Image Editing</div>
          <div className="flex items-center gap-2 bg-white border border-border-main px-4 py-2 rounded-lg text-sm text-text-muted shadow-sm"><FileText size={16} /> PDF Conversion</div>
          <div className="flex items-center gap-2 bg-white border border-border-main px-4 py-2 rounded-lg text-sm text-text-muted shadow-sm"><Settings2 size={16} /> Batch Processing</div>
        </div>
        <Link 
          to="/tools" 
          className="inline-flex items-center gap-2 text-brand hover:text-brand-dark font-medium"
        >
          View all tools <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
