import { Scissors, Minimize, RefreshCw, FileImage, Type, Maximize, RotateCcw, Info, ListOrdered } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      icon: <Scissors className="w-8 h-8 text-brand" />,
      title: "Background Remover",
      description: "Instantly isolate subjects and remove image backgrounds with high precision, completely offline."
    },
    {
      icon: <Minimize className="w-8 h-8 text-brand" />,
      title: "Smart Compressor",
      description: "Reduce file sizes drastically without losing visual quality. Perfect for saving storage and fast sharing."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-brand" />,
      title: "Format Converter",
      description: "Seamlessly convert between JPG, PNG, WEBP, and PDF formats in seconds."
    },
    {
      icon: <FileImage className="w-8 h-8 text-brand" />,
      title: "PDF to Image & Image to PDF",
      description: "Convert your documents into high-quality images, or stitch multiple photos into a single PDF document."
    },
    {
      icon: <Type className="w-8 h-8 text-brand" />,
      title: "Watermarking",
      description: "Protect your creative work by applying customizable text or image watermarks."
    },
    {
      icon: <Maximize className="w-8 h-8 text-brand" />,
      title: "Resize & Crop",
      description: "Easily adjust dimensions and crop photos for perfect social media framing."
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-brand" />,
      title: "Rotate & Flip",
      description: "Fix orientation issues with simple intuitive rotation and flip tools."
    },
    {
      icon: <Info className="w-8 h-8 text-brand" />,
      title: "Metadata Viewer",
      description: "Dive deep into your photo's EXIF data to view camera settings, locations, and technical details."
    },
    {
      icon: <ListOrdered className="w-8 h-8 text-brand" />,
      title: "Bulk Renamer",
      description: "Organize your gallery by renaming multiple files efficiently with custom patterns."
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <div className="text-center mb-16 pt-4 md:pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
          Everything You Need, <span className="text-brand">In One App.</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          A comprehensive suite of powerful tools designed to give you complete control over your files, without ever leaving your device.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="group relative bg-bg-card border border-border-main rounded-2xl p-8 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm flex flex-col overflow-hidden"
          >
            {/* Subtle background glow effect on hover */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand/5 group-hover:border-brand/20 transition-all duration-300 shadow-sm">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-brand transition-colors duration-300">{tool.title}</h3>
              <p className="text-text-muted text-[15px] leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
