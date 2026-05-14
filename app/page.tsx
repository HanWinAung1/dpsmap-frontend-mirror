'use client';

import { useState } from 'react';
import { ChevronDown, MapPin, Phone, Mail, Share2, Download, Star, ShoppingCart, Menu, X } from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'mm'>('en');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    en: {
      home: 'Home',
      shop: 'Shop Maps',
      print: 'Print Service',
      strategy: 'Strategy',
      account: 'Account',
      cart: 'Cart',
      announcement: '2025 Yangon City Map Update is now available! Pre-order now with promo price 27,000mmk.',
      heroTitle: 'Myanmar Maps & Regional Cartography',
      heroSubtitle: 'Since 1995, we\'ve been providing accurate, detailed maps of Myanmar at affordable prices.',
      buyNow: 'Buy Now',
      visitShop: 'Visit Shop',
      yangonCityMap: 'Yangon City Map',
      myanmarMap: 'Myanmar Map',
      yangonRegion: 'Yangon Region',
      mandalayMap: 'Mandalay Map',
      availableMaps: 'Available Map Categories',
      cityMaps: 'City & GIS Maps',
      adminMaps: 'Administrative Maps',
      agriMaps: 'Agriculture & Natural Resources',
      specialMaps: 'Specialized Maps',
      touristMaps: 'Tourist & Guide Maps',
      stateMaps: 'State and District Maps',
      whyChoose: 'Why Choose DPS Map?',
      verifiedData: 'Verified Data',
      qualityPrinting: 'High Quality Printing',
      fastShipping: 'Fast Shipping',
      faq: 'Frequently Asked Questions',
      all: 'All',
      products: 'Products',
      quality: 'Quality',
      customization: 'Customization',
      materials: 'Materials',
      shipping: 'Shipping',
      digital: 'Digital Products',
      freeDownloads: 'Free Map Downloads',
      contact: 'Contact Us',
      phone: '+95 (0) 977 5204020',
      email: 'dpsmap@gmail.com',
      address: 'Rm:307, Yae Kyaw Complex, Pazundaung Township, Yangon',
      stats5000: '5000+',
      statsMapsSold: 'Maps Sold',
      stats38: '3.8',
      statsRating: 'Customer Rating',
      stats34: '34',
      statsTownships: 'Yangon Townships',
      stats1995: '1995',
      statsSince: 'Since Year',
    },
    mm: {
      home: 'ပင်မစာမျက်နှာ',
      shop: 'မြေပုံများ ဝယ်ရန်',
      print: 'မြေပုံထုတ်မည်',
      strategy: 'မဟာဗျူဟာ ရည်မှန်းချက်',
      account: 'အကောင့်',
      cart: 'စျေးခြင်း',
      announcement: '၂၀၂၅ ရန်ကုန်မြို့မြေပုံ အဆင့်မြှင့်တင်ခြင်း ယခု ရရှိနိုင်ပါသည်။',
      heroTitle: 'မြန်မာပြည် မြေပုံ နှင့် ပြည်နယ်တိုင်းဒေသကြီး မြေပုံများ',
      heroSubtitle: '၁၉၉၅ ခုနှစ်မှစ၍ တိကျသော မြေပုံရေးဆွဲခြင်း',
      buyNow: 'ယခုဝယ်ရန်',
      visitShop: 'ဆိုင်ကိုကြည့်ပါ',
      yangonCityMap: 'ရန်ကုန်မြို့မြေပုံ',
      myanmarMap: 'မြန်မာမြေပုံ',
      yangonRegion: 'ရန်ကုန်တိုင်းဒေသကြီး',
      mandalayMap: 'မန္တလေးမြေပုံ',
      availableMaps: 'ရရှိနိုင်သော မြေပုံအမျိုးအစား',
      cityMaps: 'မြို့ပြအသေးစိတ်မြေပုံများ',
      adminMaps: 'အုပ်ချုပ်ရေးဆိုင်ရာ မြေပုံများ',
      agriMaps: 'စိုက်ပျိုးရေးနှင့် သဘာဝအရင်းအမြစ်',
      specialMaps: 'ဘေးအန္တရာယ်မြေပုံများ',
      touristMaps: 'ခရီးသွားမြေပုံများ',
      stateMaps: 'တိုင်းဒေသကြီးမြေပုံများ',
      whyChoose: 'ဘာကြောင့် DPS Map ကို ရွေးချယ်သင့်သလဲ?',
      verifiedData: 'အတည်ပြုထားသော ဒေတာ',
      qualityPrinting: 'အရည်အသွေးမြင့် ပုံနှိပ်ခြင်း',
      fastShipping: 'မြန်ဆန်သော ပို့ဆောင်ရေး',
      faq: 'မကြေးမုံးမေးခွန်းများ',
      all: 'အားလုံး',
      products: 'ထုတ်ကုန်များ',
      quality: 'အရည်အသွေး',
      customization: 'စိတ်ကြိုက်ပြင်ဆင်ခြင်း',
      materials: 'ပစ္စည်းများ',
      shipping: 'ပို့ဆောင်ရေး',
      digital: 'ဒစ်ဂျစ်တယ်ထုတ်ကုန်များ',
      freeDownloads: 'အခမဲ့မြေပုံများ ဒေါင်းလုဒ်လုပ်ပါ',
      contact: 'ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ',
      phone: '+95 (0) 977 5204020',
      email: 'dpsmap@gmail.com',
      address: 'အခန်း ၃၀၇၊ ရယ်ကျော် ကွန်ပလက်စ်၊ ပုဒုံတောင်ပိုင်း၊ ရန်ကုန်',
      stats5000: '၅၀၀၀+',
      statsMapsSold: 'ရောင်းချပြီး မြေပုံများ',
      stats38: '၃.၈',
      statsRating: 'ဖောက်သည်အဆင့်သတ်မှတ်ချက်',
      stats34: '၃၄',
      statsTownships: 'ရန်ကုန် မြို့နယ်များ',
      stats1995: '၁၉၉၅',
      statsSince: 'ခုနှစ်မှစ၍',
    }
  };

  const currentLang = t[language];

  const products = [
    {
      id: 'yangon-city',
      name: language === 'en' ? 'Yangon City Map' : 'ရန်ကုန်မြို့မြေပုံ',
      description: language === 'en' 
        ? 'Complete township-level mapping of Yangon\'s 34 administrative divisions with street names and building numbers.'
        : 'ရန်ကုန်မြို့ စည်ပင်သာယာနယ်နိမိတ် ၃၃ မြို့နယ်အပါအဝင် လမ်းအမည်၊ အမှတ်စဉ်များ ပါဝင်သည်။',
      pricing: ['Vinyl (4\' x 6\') - 312,000 MMK', 'Vinyl (8\' x 4\') - 156,000 MMK', 'PDF - 250,000 MMK', 'JPG - 75,000 MMK'],
      rating: 4.8,
      reviews: 127,
    },
    {
      id: 'myanmar-map',
      name: language === 'en' ? 'Myanmar Map' : 'မြန်မာမြေပုံ',
      description: language === 'en'
        ? 'Complete map of Myanmar in both Myanmar and English versions with regional boundaries.'
        : 'မြန်မာနိုင်ငံမြေပုံ (Myanmar Version & English Version နှစ်မျိုးရှိသည်)',
      pricing: ['Vinyl (2\' x 4\') - 104,000 MMK', 'Vinyl (3\' x 6\') - 234,000 MMK', 'PDF/JPG - Available'],
      rating: 5.0,
      reviews: 23,
    },
    {
      id: 'yangon-region',
      name: language === 'en' ? 'Yangon Region' : 'ရန်ကုန်တိုင်းဒေသကြီး',
      description: language === 'en'
        ? 'Regional map of Yangon Division with detailed township boundaries.'
        : 'ရန်ကုန်တိုင်းဒေသကြီး',
      pricing: ['Vinyl (2\' x 3\') - 78,000 MMK'],
      rating: 4.5,
      reviews: 45,
    },
    {
      id: 'mandalay-map',
      name: language === 'en' ? 'Mandalay Map' : 'မန္တလေးမြေပုံ',
      description: language === 'en'
        ? 'Detailed map of Mandalay city with townships, street names, and transportation routes.'
        : 'မန္တလေးမြို့အတွင်းရှိ မြို့နယ်များ၊ လမ်းအမည်၊ ဘတ်စ်ကားဂိတ် နှင့် မြို့ပတ်ရထားလမ်းစိတ်',
      pricing: ['Vinyl (4\' x 6\') - 312,000 MMK', 'PDF - Available'],
      rating: 4.7,
      reviews: 89,
    },
  ];

  const faqItems = [
    {
      id: 'faq-1',
      category: language === 'en' ? 'Products' : 'ထုတ်ကုန်များ',
      question: language === 'en' ? 'What types of maps do you offer?' : 'သင်တို့သည် မည်သည့် အမျိုးအစား မြေပုံများ ပေးလိုသနည်း?',
      answer: language === 'en'
        ? 'We offer a wide variety of maps including vinyl wall maps, paper prints, photopaper prints, canvas maps, stickers, and digital PDF formats.'
        : 'ကျွန်ုပ်တို့သည် ဗိုင်းနယ်လ် နံရံမြေပုံများ၊ စာရွက်ပုံနှိပ်ခြင်းများ၊ ဆွဲဆောင်မြေပုံများ နှင့် ဒစ်ဂျစ်တယ်ပုံစံများ ပေးလိုက်ပါသည်။',
    },
    {
      id: 'faq-2',
      category: language === 'en' ? 'Quality' : 'အရည်အသွေး',
      question: language === 'en' ? 'How accurate are your maps?' : 'သင်တို့၏ မြေပုံများ မည်မျှ တိကျသနည်း?',
      answer: language === 'en'
        ? 'Our maps are created using the latest survey data and are regularly updated. We work with official sources to ensure accuracy.'
        : 'ကျွန်ုပ်တို့၏ မြေပုံများသည် နောက်ဆုံးအဆင့် စစ်တမ်းချက်ခြင်းဒေတာကို အသုံးပြုပြီး ပုံမှန်အဆင့်မြှင့်တင်ထားသည်။',
    },
    {
      id: 'faq-3',
      category: language === 'en' ? 'Customization' : 'စိတ်ကြိုက်ပြင်ဆင်ခြင်း',
      question: language === 'en' ? 'Do you offer custom map printing?' : 'သင်တို့သည် စိတ်ကြိုက်မြေပုံပုံနှိပ်ခြင်း ပေးလိုသနည်း?',
      answer: language === 'en'
        ? 'Yes, we offer custom map printing services. You can request specific areas, custom sizes, different materials, and add your business information.'
        : 'ဟုတ်ကဲ့၊ ကျွန်ုပ်တို့သည် စိတ်ကြိုက်မြေပုံပုံနှိပ်ခြင်းဝန်ဆောင်မှု ပေးလိုက်ပါသည်။',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm">
        <p>📢 {currentLang.announcement}</p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">DPS Map</h1>
              <p className="text-xs text-gray-600">Precision Cartography</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-900">{currentLang.home}</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-900">{currentLang.shop}</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-900">{currentLang.print}</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-900">{currentLang.strategy}</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => setLanguage('mm')}
                className={`px-3 py-2 rounded text-sm font-medium ${language === 'mm' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                🇲🇲 MY
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-2 rounded text-sm font-medium ${language === 'en' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                🇬🇧 EN
              </button>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{currentLang.heroTitle}</h2>
            <p className="text-lg text-blue-100 mb-8">{currentLang.heroSubtitle}</p>
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition">
                {currentLang.buyNow}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-blue-900 transition">
                {currentLang.visitShop}
              </button>
            </div>
          </div>
          <div className="bg-blue-700 h-64 md:h-80 rounded-lg flex items-center justify-center">
            <p className="text-blue-200">Map Image</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-900 mb-2">{currentLang.stats5000}</p>
            <p className="text-gray-600">{currentLang.statsMapsSold}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-900 mb-2">{currentLang.stats38}</p>
            <p className="text-gray-600">{currentLang.statsRating}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-900 mb-2">{currentLang.stats34}</p>
            <p className="text-gray-600">{currentLang.statsTownships}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-900 mb-2">{currentLang.stats1995}</p>
            <p className="text-gray-600">{currentLang.statsSince}</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">Maps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">{product.name}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  
                  {product.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  )}

                  <div className="space-y-2 mb-6">
                    {product.pricing.map((price, idx) => (
                      <p key={idx} className="text-sm text-gray-700">{price}</p>
                    ))}
                  </div>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Maps Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">{currentLang.availableMaps}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: currentLang.cityMaps, items: ['Yangon GIS Map', 'Mandalay City Map', 'Naypyitaw Map'] },
              { title: currentLang.adminMaps, items: ['Township Boundaries', 'State & Region Maps', 'Village Tract Maps'] },
              { title: currentLang.specialMaps, items: ['Earthquake Maps', 'Flood Risk Maps', 'Industrial Zones'] },
            ].map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-bold text-blue-900 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-gray-700 hover:text-orange-500 transition flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
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
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">{currentLang.faq}</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="text-left">
                    <p className="text-xs font-semibold text-orange-500 mb-1">{item.category}</p>
                    <p className="font-medium text-gray-900">{item.question}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform ${expandedFAQ === item.id ? 'rotate-180' : ''}`} />
                </button>
                {expandedFAQ === item.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{currentLang.contact}</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+959775204020" className="text-blue-100 hover:text-white">{currentLang.phone}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:dpsmap@gmail.com" className="text-blue-100 hover:text-white">{currentLang.email}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-blue-100">{currentLang.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-800 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6">{currentLang.freeDownloads}</h3>
            <div className="space-y-3">
              {['Yangon Township Map', 'Myanmar Map (ENG)', 'Myanmar Map (MM)', 'Mandalay Map'].map((map) => (
                <button key={map} className="w-full flex items-center justify-between p-3 bg-blue-700 hover:bg-blue-600 rounded transition">
                  <span className="text-sm">{map}</span>
                  <Download className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
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
                <a href="#" className="hover:text-white transition"><Share2 className="w-5 h-5" /></a>
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
