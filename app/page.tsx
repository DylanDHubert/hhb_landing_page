"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-300 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="font-serif text-2xl font-bold text-black">
                HHB Inc.
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#product" className="text-gray-700 hover:text-[#4a5568] px-3 py-2 text-sm font-medium transition-colors">
                  Product
                </a>
                <a href="#demo" className="text-gray-700 hover:text-[#4a5568] px-3 py-2 text-sm font-medium transition-colors">
                  Demo
                </a>
                <a href="#team" className="text-gray-700 hover:text-[#4a5568] px-3 py-2 text-sm font-medium transition-colors">
                  Team
                </a>
                <a href="#about" className="text-gray-700 hover:text-[#4a5568] px-3 py-2 text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#contact" className="text-gray-700 hover:text-[#4a5568] px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative grid-pattern-bg py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              The Future of Medical Device Field Intelligence
            </h1>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered software suite that transforms complex medical device documentation 
              into intelligent, searchable data for field representatives and trainees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white border border-black text-[#4a5568] px-8 py-4 font-semibold text-lg hover:bg-[#4a5568] hover:text-white transition-all duration-300 cursor-pointer"
              >
                Request Demo
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white border border-black text-[#4a5568] px-8 py-4 font-semibold text-lg hover:bg-[#4a5568] hover:text-white transition-all duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              AI Copilot for Medical Device Field Representatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline operations, enhance training, and boost efficiency with our comprehensive AI solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl gradient-bg border border-gray-300 card-hover float-animation">
              <div className="w-16 h-16 mint-accent rounded-full flex items-center justify-center mx-auto mb-6 pulse-mint">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Document Intelligence</h3>
              <p className="text-white">
                Convert complex technical medical device PDFs into structured, AI-accessible data with 
                unprecedented accuracy and speed.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl gradient-bg border border-gray-300 card-hover float-animation animation-delay-1">
              <div className="w-16 h-16 mint-accent rounded-full flex items-center justify-center mx-auto mb-6 pulse-mint">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Natural Language Search</h3>
              <p className="text-white">
                Query medical device specifications in plain English and receive instant, accurate answers 
                powered by advanced RAG technology.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl gradient-bg border border-gray-300 card-hover float-animation animation-delay-2">
              <div className="w-16 h-16 mint-accent rounded-full flex items-center justify-center mx-auto mb-6 pulse-mint">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Training Suite</h3>
              <p className="text-white">
                Transform real queries into comprehensive test suites, creating self-serving tutors that 
                eliminate costly ride-alongs and accelerate onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 grid-pattern-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our AI copilot transforms the daily workflow of medical device field representatives
            </p>
          </div>
          
          {/* Demo iframe */}
          <div className="bg-white border-2 border-black p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 flex items-center justify-center border border-black relative">
              <iframe 
                src="https://hhb-ai.vercel.app/" 
                className="w-[90%] h-[90%] border-0"
                title="HHB AI Demo"
                allow="camera; microphone; geolocation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical excellence meets industry expertise - our founders bring together AI development and medical device sales experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dylan Hubert */}
            <div className="founder-card">
              <div className="founder-avatar">
                <img 
                  src="/images/dylanPFP.png" 
                  alt="Dylan Hubert" 
                  className="w-[90%] h-[90%] object-cover rounded-full border border-white"
                />
              </div>
              <div className="founder-info">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dylan Hubert</h3>
                <p className="text-[#4a5568] font-semibold mb-4">Co-Founder & Technical Lead</p>
                <p className="text-gray-600 mb-4">
                  BS in Computer Science, ML from American University. 2x NASA ML Internships. 
                  Expert in semantic search and RAG systems.
                </p>
              </div>
              <div className="founder-tags">
                <span className="founder-tag">Python</span>
                <span className="founder-tag">AI/ML</span>
                <span className="founder-tag">NASA</span>
              </div>
              <button 
                onClick={() => {
                  const modal = document.getElementById('contact-modal');
                  const name = document.getElementById('contact-name');
                  const email = document.getElementById('contact-email');
                  const phone = document.getElementById('contact-phone');
                  if (modal && name && email && phone) {
                    name.textContent = 'Dylan Hubert';
                    email.textContent = 'dylandhubert@outlook.com';
                    phone.textContent = '+1 (510) 325-5820';
                    modal.style.display = 'flex';
                  }
                }}
                className="mt-4 w-full border border-black text-[#4a5568] px-4 py-2 font-semibold text-sm hover:bg-[#4a5568] hover:text-white transition-all duration-300 cursor-pointer"
              >
                Contact Dylan
              </button>
            </div>
            
            {/* Luke Heitman */}
            <div className="founder-card">
              <div className="founder-avatar">
                <img 
                  src="/images/lukePFP.jpeg" 
                  alt="Luke Heitman" 
                  className="w-[90%] h-[90%] object-cover rounded-full border border-white"
                />
              </div>
              <div className="founder-info">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Luke Heitman</h3>
                <p className="text-[#4a5568] font-semibold mb-4">Co-Founder & Technical Lead</p>
                <p className="text-gray-600 mb-4">
                  BS in Computer Science, ML from American University. ML Engineer at Mind AI. 
                  Expert in RL agents and GANs.
                </p>
              </div>
              <div className="founder-tags">
                <span className="founder-tag">AI/ML</span>
                <span className="founder-tag">RL</span>
                <span className="founder-tag">GANs</span>
              </div>
              <button 
                onClick={() => {
                  const modal = document.getElementById('contact-modal');
                  const name = document.getElementById('contact-name');
                  const email = document.getElementById('contact-email');
                  const phone = document.getElementById('contact-phone');
                  if (modal && name && email && phone) {
                    name.textContent = 'Luke Heitman';
                    email.textContent = 'lheitman00@gmail.com';
                    phone.textContent = '+1 (484) 999-7787';
                    modal.style.display = 'flex';
                  }
                }}
                className="mt-4 w-full border border-black text-[#4a5568] px-4 py-2 font-semibold text-sm hover:bg-[#4a5568] hover:text-white transition-all duration-300 cursor-pointer"
              >
                Contact Luke
              </button>
            </div>
            
            {/* Alex Bull */}
            <div className="founder-card">
              <div className="founder-avatar">
                <img 
                  src="/images/alexPFP.jpeg" 
                  alt="Alex Bull" 
                  className="w-[90%] h-[90%] object-cover rounded-full border border-white"
                />
              </div>
              <div className="founder-info">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Alex Bull</h3>
                <p className="text-[#4a5568] font-semibold mb-4">Co-Founder & Field Operations</p>
                <p className="text-gray-600 mb-4">
                  BS in Comprehensive Science from Villanova. Youngest hire at Stryker. 
                  Deep domain expertise in medical device sales and customer relations.
                </p>
              </div>
              <div className="founder-tags">
                <span className="founder-tag">Sales</span>
                <span className="founder-tag">Domain Expert</span>
              </div>
              <button 
                onClick={() => {
                  const modal = document.getElementById('contact-modal');
                  const name = document.getElementById('contact-name');
                  const email = document.getElementById('contact-email');
                  const phone = document.getElementById('contact-phone');
                  if (modal && name && email && phone) {
                    name.textContent = 'Alex Bull';
                    email.textContent = 'alex.bull227@gmail.com';
                    phone.textContent = 'Contact via email';
                    modal.style.display = 'flex';
                  }
                }}
                className="mt-4 w-full border border-black text-[#4a5568] px-4 py-2 font-semibold text-sm hover:bg-[#4a5568] hover:text-white transition-all duration-300 cursor-pointer"
              >
                Contact Alex
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              About HHB Inc.
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Founded by technical experts with deep domain knowledge in medical device sales and AI development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Metrics Area */}
            <div className="mb-12 bg-white border border-black p-8 flex flex-row items-center justify-center gap-8 text-center flex-wrap">
              <div>
                <div className="text-2xl font-bold text-[#4a5568] mb-1">1000+</div>
                <div className="font-semibold text-gray-900">pages successfully processed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#4a5568] mb-1">3500ms</div>
                <div className="font-semibold text-gray-900">average response time <span className="text-gray-500">(±2000ms)</span></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#4a5568] mb-1">Lossless</div>
                <div className="font-semibold text-gray-900">data conversion & 100% model accessibility</div>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl font-bold text-white mb-6">
                Technical Excellence Meets Industry Expertise
              </h3>
              <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Our team combines cutting-edge AI development with real-world medical device sales experience. 
                We understand the challenges field representatives face daily and have built solutions that 
                address their specific needs.
              </p>
            </div>
            
            {/* DEVELOPMENT METHODOLOGY SECTION */}
            <div className="mt-8 text-center">
              <div className="bg-gray-50 border-2 border-black p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Built with Modern Development Practices</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We use agile methodology to keep our software using state-of-the-art technical document processing packages, 
                  ensuring continuous improvement and cutting-edge performance.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white border border-gray-300 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Agile Development</h4>
                    <p className="text-gray-600 text-sm">
                      Rapid iterations and continuous feedback loops ensure our AI solutions stay ahead of industry standards 
                      and adapt to evolving customer needs.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-300 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">State-of-the-Art Technology</h4>
                    <p className="text-gray-600 text-sm">
                      Leveraging the latest technical document processing packages and AI frameworks to deliver 
                      unmatched accuracy and performance in medical device documentation analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Scaling Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
            From Human-Only to Computer-Accessible
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">The Problem</h4>
              <p className="text-gray-600 leading-relaxed">
                Critical medical device information is locked in PDFs, accessible only to humans who can read and interpret complex technical documentation. This creates bottlenecks, delays, and inconsistencies in field operations.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
              <p className="text-gray-600 leading-relaxed">
                We transform human-readable documents into computer-accessible data. What once required hours of manual searching now happens instantly. What was prone to human error becomes instantly accurate. What cost thousands in labor now scales infinitely.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              "Yes, the example below looks simple for one document. But imagine this across thousands of PDFs, millions of queries, and countless field representatives. That's the power of making information computer–accessible."
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-4 tracking-wide">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complex PDFs to instant answers in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: PDF */}
            <div className="text-center">
              <div className="bg-gray-100 border-2 border-black p-8 mb-6 h-100 flex items-center justify-center">
                <div className="text-center w-full h-full flex items-center justify-center">
                  <img 
                    src="/pdf.png" 
                    alt="PDF Document" 
                    className="h-80 object-contain border border-black"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Document Processing</h3>
              <p className="text-gray-600">
                Upload complex medical device PDFs. Our AI transforms technical documentation into structured, searchable data with lossless conversion.
              </p>
            </div>
            
            {/* Step 2: Data Table */}
            <div className="text-center">
              <div className="bg-gray-100 border-2 border-black p-8 mb-6 h-100 flex items-center justify-center">
                <div className="w-full max-w-xs space-y-4">
                  <div className="bg-white border border-gray-400 rounded-lg shadow-sm overflow-hidden">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-gray-100 border-b border-gray-300">
                          <th className="px-3 py-2 text-left font-semibold text-gray-700">Size</th>
                          <th className="px-3 py-2 text-left font-semibold text-gray-700">Notch Depth</th>
                          <th className="px-3 py-2 text-left font-semibold text-gray-700">Length</th>
                          <th className="px-3 py-2 text-left font-semibold text-gray-700">Compatible?</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 text-gray-800">1–2</td>
                          <td className="px-3 py-2 text-gray-800">12mm</td>
                          <td className="px-3 py-2 text-gray-800">25mm</td>
                          <td className="px-3 py-2 text-gray-800">Titanium, Steel</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 text-gray-800">3–4</td>
                          <td className="px-3 py-2 text-gray-800">14mm</td>
                          <td className="px-3 py-2 text-gray-800">27.5mm</td>
                          <td className="px-3 py-2 text-gray-800">Steel</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 text-gray-800">5–6</td>
                          <td className="px-3 py-2 text-gray-800">16mm</td>
                          <td className="px-3 py-2 text-gray-800">30mm</td>
                          <td className="px-3 py-2 text-gray-800">Steel</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 text-gray-800">7–8</td>
                          <td className="px-3 py-2 text-gray-800">18mm</td>
                          <td className="px-3 py-2 text-gray-800">32.5mm</td>
                          <td className="px-3 py-2 text-gray-800">No</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-white border border-gray-400 rounded-lg shadow-sm p-3">
                    <p className="text-xs text-gray-600 text-left leading-relaxed">
                      The Profiled Hexagonal Implant Screw (Model H6-PRF) is a dual-threaded, self-tapping orthopedic fixation screw featuring a hexagonal shaft profile for anti-rotational stability....
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Structured Data</h3>
              <p className="text-gray-600">
                Technical specifications are extracted and organized into searchable tables. Every detail becomes instantly accessible.
              </p>
            </div>
            
            {/* Step 3: Query */}
            <div className="text-center">
              <div className="bg-gray-100 border-2 border-black p-8 mb-6 h-100 flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="space-y-3">
                    <div className="bg-white border border-gray-300 rounded p-3 text-left">
                      <div className="text-xs text-gray-600 mb-2">"What's the model number?"</div>
                      <div className="text-xs text-[#4a5568] font-semibold text-right">H6-PRF →</div>
                    </div>
                    <div className="bg-white border border-gray-300 rounded p-3 text-left">
                      <div className="text-xs text-gray-600 mb-2">"What sizes work with titanium?"</div>
                      <div className="text-xs text-[#4a5568] font-semibold text-right">Sizes 1-2, 3-4 →</div>
                    </div>
                    <div className="bg-white border border-gray-300 rounded p-3 text-left">
                      <div className="text-xs text-gray-600 mb-2">"What's the notch depth for size 5-6?"</div>
                      <div className="text-xs text-[#4a5568] font-semibold text-right">16mm →</div>
                    </div>
                    <div className="bg-white border border-gray-300 rounded p-3 text-left">
                      <div className="text-xs text-gray-600 mb-2">"What type of screw is this?"</div>
                      <div className="text-xs text-[#4a5568] font-semibold text-right">Dual-threaded, self-tapping orthopedic fixation screw →</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Language Search</h3>
              <p className="text-gray-600">
                Query your data in plain English. Get instant, accurate answers powered by our advanced RAG system.
              </p>
            </div>
          </div>
          

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Field Operations?
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Join leading medical device companies already leveraging our AI copilot technology
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border-2 border-black p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#4a5568] focus:border-transparent transition-all duration-300 text-black focus:outline-none selection:bg-[#4a5568] selection:text-black" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#4a5568] focus:border-transparent transition-all duration-300 text-black focus:outline-none selection:bg-[#4a5568] selection:text-black" placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#4a5568] focus:border-transparent transition-all duration-300 text-black focus:outline-none selection:bg-[#4a5568] selection:text-black" placeholder="Enter your company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#4a5568] focus:border-transparent transition-all duration-300 text-black focus:outline-none selection:bg-[#4a5568] selection:text-black" placeholder="Enter your email address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#4a5568] focus:border-transparent transition-all duration-300 text-black focus:outline-none selection:bg-[#4a5568] selection:text-black" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-black focus:ring-2 focus:ring-[#4a5568] focus:border-transparent transition-all duration-300 text-black focus:outline-none selection:bg-[#4a5568] selection:text-black" placeholder="Tell us about your needs and how we can help..."></textarea>
                </div>
                <button type="submit" className="w-full border border-black text-[#4a5568] py-4 font-semibold text-lg hover:bg-[#4a5568] hover:text-white transition-all duration-300">
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>&copy; 2024 HHB Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* Contact Modal */}
      <div 
        id="contact-modal" 
        className="modal-overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const modal = document.getElementById('contact-modal');
            if (modal) {
              modal.style.display = 'none';
            }
          }
        }}
      >
        <div className="modal-content shadow-2xl">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4" id="contact-name">Contact</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-5 h-5 text-[#4a5568] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-black font-semibold text-base" id="contact-email">email@example.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-5 h-5 text-[#4a5568] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-black font-semibold text-base" id="contact-phone">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
