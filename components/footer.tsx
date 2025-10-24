"use client";

import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MessageCircle } from "lucide-react";

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer = () => {
  const pathname = usePathname();
  
  // Check if we're on a page with a sidebar
  const hasSidebar = pathname?.startsWith('/dashboard') || pathname?.startsWith('/courses');
  
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className={`text-center text-muted-foreground ${
          hasSidebar 
            ? 'md:rtl:pr-56 md:ltr:pl-56 lg:rtl:pr-80 lg:ltr:pl-80' 
            : ''
        }`}>
          <div className="inline-block bg-[#27c08d]/10 border-2 border-[#27c08d]/20 rounded-lg px-6 py-3 mb-4">
            <p className="font-semibold text-lg text-[#27c08d]"> واتساب : 01091659219</p>
          </div>
          
          {/* Social Media Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#27c08d] mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.facebook.com/share/178KpYmB2u/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#27c08d]/10 hover:bg-[#27c08d]/20 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-[#27c08d]" />
              </a>
              <a 
                href="https://www.instagram.com/sheha_bezz38gmailcom?igsh=MTRqOHVkZ3F5bWowbQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#27c08d]/10 hover:bg-[#27c08d]/20 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#27c08d]" />
              </a>
              <a 
                href="https://www.tiktok.com/@shehabezz777?_t=ZS-8zJai5mKOG8&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#27c08d]/10 hover:bg-[#27c08d]/20 rounded-full transition-colors duration-200"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-6 h-6 text-[#27c08d]" />
              </a>
              <a 
                href="https://wa.me/201091659219"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#27c08d]/10 hover:bg-[#27c08d]/20 rounded-full transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-[#27c08d]" />
              </a>
            </div>
          </div>
          
          <p>© {new Date().getFullYear()} Mordesu Studio. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}; 