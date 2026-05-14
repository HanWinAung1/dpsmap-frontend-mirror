import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Download, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

/**
 * DPS Map Clone - Professional Cartographic Minimalism Design
 * 
 * Design Philosophy:
 * - Clean, grid-based layouts with generous whitespace
 * - Swiss-style modernism reflecting cartographic precision
 * - Deep blue (#1e3a8a) primary with warm orange (#ff6b35) accents
 * - Typography-driven with Playfair Display for authority
 * - Asymmetric layouts with left-aligned content
 */

interface Product {
  id: string;
  name: string;
  nameMyanmar: string;
  description: string;
  descriptionMyanmar: string;
  image: string;
  pricing: string[];
  rating?: number;
  reviews?: number;
  discount?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'mm'>('en');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 'yangon-city',
      name: 'Yangon City Map',
      nameMyammer: 'ရန်ကုန်မြို့မြေပုံ',
      description: 'Complete township-level mapping of Yangon\'s 34 administrative divisions with street names and building numbers.',
      descriptionMyammer: 'ရန်ကုန်မြို့ စည်ပင်သာယာနယ်နိမိတ် ၃၃ မြို့နယ်အပါအဝင် လမ်းအမည်၊ အမှတ်စဉ်များ ပါဝင်သည်။',
      image: 'https://via.placeholder.com/400x300?text=Yangon+City+Map',
      pricing: ['Vinyl (4\' x 6\') - 312,000 MMK', 'Vinyl (8\' x 4\') - 156,000 MMK', 'PDF - 250,000 MMK', 'JPG - 75,000 MMK'],
      rating: 4.8,
      reviews: 127,
    },
    {
      id: 'myanmar-map',
      name: 'Myanmar Map',
      nameMyammer: 'မြန်မာမြေပုံ',
      description: 'Complete map of Myanmar in both Myanmar and English versions with regional boundaries.',
      descriptionMyammer: 'မြန်မာနိုင်ငံမြေပုံ (Myanmar Version & English Version နှစ်မျိုးရှိသည်)',
      image: 'https://via.placeholder.com/400x300?text=Myanmar+Map',
      pricing: ['Vinyl (2\' x 4\') - 104,000 MMK', 'Vinyl (3\' x 6\') - 234,000 MMK', 'PDF/JPG - Available'],
      rating: 5.0,
      reviews: 23,
    },
    {
      id: 'yangon-region',
      name: 'Yangon Region',
      nameMyammer: 'ရန်ကုန်တိုင်းဒေသကြီး',
      description: 'Regional map of Yangon Division with detailed township boundaries.',
      descriptionMyammer: 'ရန်ကုန်တိုင်းဒေသကြီး',
      image: 'https://via.placeholder.com/400x300?text=Yangon+Region',
      pricing: ['Vinyl (2\' x 3\') - 78,000 MMK'],
      rating: 4.5,
      reviews: 45,
    },
    {
      id: 'mandalay-map',
      name: 'Mandalay Map',
      nameMyammer: 'မန္တလေးမြေပုံ',
      description: 'Detailed map of Mandalay city with townships, street names, and transportation routes.',
      descriptionMyammer: 'မန္တလေးမြို့အတွင်းရှိ မြို့နယ်များ၊ လမ်းအမည်၊ ဘတ်စ်ကားဂိတ် နှင့် မြို့ပတ်ရထားလမ်းစိတ်',
      image: 'https://via.placeholder.com/400x300?text=Mandalay+Map',
      pricing: ['Vinyl (4\' x 6\') - 312,000 MMK', 'PDF - Available'],
      rating: 4.7,
      reviews: 89,
    },
  ];

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'Products',
      question: 'What types of maps do you offer?',
      answer: 'We offer a wide variety of maps including vinyl wall maps, paper prints, photopaper prints, canvas maps, stickers, and digital PDF formats. Our collection covers Yangon city, Myanmar administrative regions, transportation networks, and specialized areas like industrial zones.',
    },
    {
      id: 'faq-2',
      category: 'Quality',
      question: 'How accurate are your maps?',
      answer: 'Our maps are created using the latest survey data and are regularly updated. We work with official sources including the Yangon City Development Committee and government survey departments to ensure accuracy. Most of our maps are updated annually.',
    },
    {
      id: 'faq-3',
      category: 'Customization',
      question: 'Do you offer custom map printing?',
      answer: 'Yes, we offer custom map printing services. You can request specific areas, custom sizes, different materials, and even add your business information or branding.',
    },
    {
      id: 'faq-4',
      category: 'Materials',
      question: 'What materials are your maps printed on?',
      answer: 'We print on high-quality vinyl, photo paper, canvas, and premium paper. Each material is selected for durability and visual quality to ensure your maps last for years.',
    },
  ];

  const stats = [
    { number: '5000+', label: 'Maps Sold' },
    { number: '3.8', label: 'Customer Rating' },
    { number: '34', label: 'Yangon Townships' },
    { number: '1995', label: 'Since Year' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">DPS Map</h1>
              <p className="text-xs text-muted-foreground">Precision Cartography</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition">Home</a>
            <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition">Products</a>
            <a href="#maps" className="text-sm font-medium text-foreground hover:text-primary transition">Maps</a>
            <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary-bg rounded transition">
              {language === 'en' ? '🇬🇧 EN' : '🇲🇲 MM'}
            </button>
            <button className="p-2 hover:bg-secondary-bg rounded transition">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Announcement Banner */}
        <div className="bg-secondary text-white py-2 px-4">
          <p className="text-sm text-center">
            🎉 Latest News: 2025 Yangon City Map Update is now available! Use code <strong>DPS2025</strong> for 10% discount.
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24 map-grid-pattern">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Myanmar Maps & Regional Cartography
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Since 1995, we've been providing accurate, detailed maps of Myanmar and its regions at affordable prices.
              </p>
              <div className="flex gap-4">
                <button className="button-primary">Shop Now</button>
                <button className="button-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-blue-900 rounded-lg h-64 md:h-80 flex items-center justify-center">
              <p className="text-blue-200">Featured Map Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary-bg py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Maps</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="product-card overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">{product.name}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  
                  {product.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'fill-secondary text-secondary' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>
                  )}

                  <div className="space-y-2 mb-6">
                    {product.pricing.map((price, idx) => (
                      <p key={idx} className="text-sm text-foreground font-mono">{price}</p>
                    ))}
                  </div>

                  <button className="button-primary w-full">Add to Cart</button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="button-secondary">View All Products</button>
          </div>
        </div>
      </section>

      {/* Available Maps Section */}
      <section id="maps" className="bg-secondary-bg py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Available Map Categories</h2>
            <p className="text-muted-foreground max-w-2xl">
              DPS Map is a leader in Myanmar's digital mapping field, providing detailed cartographic solutions for government agencies, NGOs, and private businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'City & GIS Maps', items: ['Yangon GIS Map', 'Mandalay City Map', 'Naypyitaw Map'] },
              { title: 'Administrative Maps', items: ['Township Boundaries', 'State & Region Maps', 'Village Tract Maps'] },
              { title: 'Specialized Maps', items: ['Earthquake Maps', 'Flood Risk Maps', 'Industrial Zones'] },
            ].map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-bold text-primary mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-foreground hover:text-secondary transition flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="section-divider"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary-bg transition"
                >
                  <div className="text-left">
                    <p className="text-xs font-semibold text-secondary mb-1">{item.category}</p>
                    <p className="font-medium text-foreground">{item.question}</p>
                  </div>
                  <span className={`text-secondary transition-transform ${expandedFAQ === item.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFAQ === item.id && (
                  <div className="px-6 py-4 bg-secondary-bg border-t border-border">
                    <p className="text-sm text-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-blue-100">+95 (0) 977 5204020</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-blue-100">dpsmap@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-blue-100">Rm:307, Yae Kyaw Complex, Pazundaung Township, Yangon</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Download Free Maps</h3>
              <div className="space-y-3">
                {['Yangon Township Map', 'Myanmar Map (ENG)', 'Myanmar Map (MM)', 'Mandalay Map'].map((map) => (
                  <button key={map} className="w-full flex items-center justify-between p-3 bg-blue-800 hover:bg-blue-700 rounded transition">
                    <span className="text-sm">{map}</span>
                    <Download className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">About DPS Map</h4>
              <p className="text-sm">Leading provider of accurate, detailed maps of Myanmar since 1995.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Wall Maps</a></li>
                <li><a href="#" className="hover:text-white transition">Digital Maps</a></li>
                <li><a href="#" className="hover:text-white transition">Custom Printing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 DPS Map. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
