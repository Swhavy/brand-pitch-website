'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function BrandPresentation() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedBrand, setSelectedBrand] = useState('kraft')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const brands = [
    {
      id: 'kraft',
      name: 'KRAFT CULINARY',
      fullName: 'Kraft Culinary',
      tagline: 'Crafted For Every Great Meal.',
      positioning: 'Global Heritage Luxury',
      personality: ['Premium', 'Established', 'Trustworthy', 'Sophisticated'],
      color: '#B8943A',
      darkColor: '#a88339',
      bgColor: '#fdf8f8',
      textColor: '#1c1b1b',
      description:
        'Luxury European-style kitchenware adapted for modern African homes. Heritage meets contemporary minimalism.',
      fullDescription:
        'Kraft Culinary represents the intersection of European craftsmanship tradition and contemporary African minimalism. Each piece is meticulously designed to elevate everyday cooking into a refined ritual, combining premium materials with timeless aesthetics. Perfect for discerning homeowners who view their kitchen as an extension of their personal brand.',
      colorPalette: [
        { name: 'Primary Gold', hex: '#B8943A' },
        { name: 'Deep Cream', hex: '#fdf8f8' },
        { name: 'Charcoal', hex: '#1c1b1b' },
        { name: 'Accent Bronze', hex: '#8B7355' },
      ],
      metaAds: [
        {
          platform: 'Instagram',
          copy: 'Elevate your kitchen to a luxury sanctuary. Kraft Culinary brings European heritage and African soul together. Every meal becomes a ceremony. ✦',
        },
        {
          platform: 'Facebook',
          copy: 'Discover kitchenware that tells a story. Kraft Culinary premium tools designed for the modern African home. Crafted for every great meal.',
        },
        {
          platform: 'TikTok',
          copy: 'POV: Your kitchen is now a masterpiece. Kraft Culinary kitchenware that makes cooking feel like art 🍽️✨',
        },
      ],
    },
    {
      id: 'culinark',
      name: 'CULINARK',
      fullName: 'Culinark',
      tagline: 'Tools with a Mark.',
      positioning: 'Minimalist-Noir',
      personality: ['Innovative', 'Clean', 'Bold', 'Digital-First'],
      color: '#e6c364',
      darkColor: '#c9a84c',
      bgColor: '#131313',
      textColor: '#e5e2e1',
      description:
        'Modern kitchenware for design-conscious users who demand precision and aesthetics.',
      fullDescription:
        'Culinark is the digital-native kitchenware brand for the contemporary minimalist. Sleek, functional, and unapologetically modern, each product is engineered for precision while maintaining aesthetic purity. This is kitchenware for the Instagram generation—tools that look as good as they perform.',
      colorPalette: [
        { name: 'Luminous Gold', hex: '#e6c364' },
        { name: 'Matte Black', hex: '#131313' },
        { name: 'Soft Cream', hex: '#e5e2e1' },
        { name: 'Steel Gray', hex: '#2a2a2a' },
      ],
      metaAds: [
        {
          platform: 'Instagram',
          copy: 'Minimalist. Bold. Precise. CULINARK—where design meets function. Zero compromise. 🎯',
        },
        {
          platform: 'TikTok',
          copy: 'Your kitchen aesthetic just got an upgrade. CULINARK tools that are pure minimalist genius ◆',
        },
        {
          platform: 'LinkedIn',
          copy: 'CULINARK: Strategic kitchen design for the modern professional. Elegance in every detail.',
        },
      ],
    },
    {
      id: 'kitchora',
      name: 'KITCHORA',
      fullName: 'Kitchora',
      tagline: 'Where Great Kitchens Begin.',
      positioning: 'Contemporary Minimalist',
      personality: ['Warm', 'Emotional', 'Cultural', 'Aspirational'],
      color: '#94451a',
      darkColor: '#b35d30',
      bgColor: '#fcf9f8',
      textColor: '#1b1c1c',
      description:
        'Kitchenware bridging African artisanal heritage with modern, minimalist living.',
      fullDescription:
        'Kitchora celebrates African culinary heritage while embracing contemporary minimalism. This brand tells the story of master artisans adapting ancient techniques to modern aesthetics. Every piece carries warmth and authenticity—kitchenware that connects you to generations of culinary tradition while serving your modern lifestyle.',
      colorPalette: [
        { name: 'Warm Rust', hex: '#94451a' },
        { name: 'Terracotta', hex: '#b35d30' },
        { name: 'Ivory', hex: '#fcf9f8' },
        { name: 'Earth Brown', hex: '#7a3b1f' },
      ],
      metaAds: [
        {
          platform: 'Instagram',
          copy: 'Where tradition meets tomorrow. Kitchora—African-inspired kitchenware for the modern home. Rooted. Contemporary. Beautiful. 🌍',
        },
        {
          platform: 'Facebook',
          copy: 'Kitchora brings African artisanal heritage into your contemporary kitchen. Tools crafted with soul, designed with purpose.',
        },
        {
          platform: 'Pinterest',
          copy: 'Modern kitchen inspo: Kitchora combines African heritage with minimalist design. Where great kitchens begin. 🍳',
        },
      ],
    },
  ]

  const active = brands.find((b) => b.id === selectedBrand) || brands[0]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white overflow-hidden">
      {/* Animated background dots */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              x="40"
              y="40"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="1.5" fill="white" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Navigation */}
      <header className="relative z-40 fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/swavy-logo.png"
                alt="SWAVY Digital Solutions"
                className="h-12 w-12"
              />
              <div className="hidden md:block">
                <p className="text-xs font-bold tracking-widest text-black">
                  SWAVY
                </p>
                <p className="text-xs font-light text-gray-600">
                  DIGITAL SOLUTIONS
                </p>
              </div>
            </div>
            <div className="hidden md:block h-8 w-px bg-white/10"></div>
            <span className="text-sm font-light tracking-[0.15em] text-gray-400 hidden md:inline">
              PREMIUM BRAND STRATEGY
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs tracking-widest">
            <button
              onClick={() => setActiveTab('overview')}
              className={`transition-all ${activeTab === 'overview' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              OVERVIEW
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`transition-all ${activeTab === 'comparison' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              COMPARISON
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`transition-all ${activeTab === 'details' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              BRAND DETAILS
            </button>
            <button
              onClick={() => setActiveTab('recommendation')}
              className={`transition-all ${activeTab === 'recommendation' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              RECOMMENDATION
            </button>
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/5 py-4 px-6">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setActiveTab('overview')
                  setMobileMenuOpen(false)
                }}
                className={`text-left py-2 text-sm tracking-widest transition-all ${
                  activeTab === 'overview'
                    ? 'text-white font-semibold'
                    : 'text-gray-400'
                }`}
              >
                OVERVIEW
              </button>
              <button
                onClick={() => {
                  setActiveTab('comparison')
                  setMobileMenuOpen(false)
                }}
                className={`text-left py-2 text-sm tracking-widest transition-all ${
                  activeTab === 'comparison'
                    ? 'text-white font-semibold'
                    : 'text-gray-400'
                }`}
              >
                COMPARISON
              </button>
              <button
                onClick={() => {
                  setActiveTab('details')
                  setMobileMenuOpen(false)
                }}
                className={`text-left py-2 text-sm tracking-widest transition-all ${
                  activeTab === 'details'
                    ? 'text-white font-semibold'
                    : 'text-gray-400'
                }`}
              >
                BRAND DETAILS
              </button>
              <button
                onClick={() => {
                  setActiveTab('recommendation')
                  setMobileMenuOpen(false)
                }}
                className={`text-left py-2 text-sm tracking-widest transition-all ${
                  activeTab === 'recommendation'
                    ? 'text-white font-semibold'
                    : 'text-gray-400'
                }`}
              >
                RECOMMENDATION
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
            Three Premium Brand Directions
          </h1>
          <p className="text-lg text-gray-400 mb-2">
            Strategic brand architecture for a Nigerian premium kitchenware
            Business
          </p>
          <p className="text-xs tracking-[0.2em] text-gray-600">
            CREATED FOR CHIJIOKE EMMANUEL EMEJULU
          </p>
        </div>
      </section>

      {/* Main Presentation Area */}
      {activeTab === 'overview' && (
        <section className="relative z-20 max-w-7xl mx-auto px-6 pb-32">
          {/* Browser Mockups - Angled Display */}
          <div className="relative h-screen flex items-center justify-center mb-16">
            {/* Kraft Culinary */}
            <div
              className="absolute transform transition-all duration-500"
              style={{
                left: selectedBrand === 'kraft' ? '50%' : '10%',
                top: selectedBrand === 'kraft' ? '50%' : '30%',
                transform:
                  selectedBrand === 'kraft'
                    ? 'translate(-50%, -50%) rotateX(0deg) rotateZ(0deg) scale(1)'
                    : 'translate(0, 0) rotateX(15deg) rotateZ(-15deg) scale(0.75)',
                zIndex: selectedBrand === 'kraft' ? 30 : 10,
              }}
            >
              <div
                className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
                style={{
                  width: '500px',
                  perspective: '1000px',
                  boxShadow:
                    '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                {/* Browser header */}
                <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-500 truncate">
                    www.kraft-culinary.com
                  </div>
                </div>
                {/* Browser content */}
                <div
                  className="h-72 bg-gradient-to-b"
                  style={{ backgroundColor: brands[0].bgColor }}
                >
                  <div className="h-full flex flex-col items-center justify-center px-6">
                    <div
                      className="text-3xl mb-3"
                      style={{ color: brands[0].color }}
                    >
                      ✦
                    </div>
                    <h2
                      className="text-2xl font-bold"
                      style={{ color: brands[0].color }}
                    >
                      KRAFT CULINARY
                    </h2>
                    <p className="text-xs mt-2 text-gray-600">
                      Global Heritage Luxury
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Culinark */}
            <div
              className="absolute transform transition-all duration-500"
              style={{
                right: selectedBrand === 'culinark' ? '50%' : '10%',
                top: selectedBrand === 'culinark' ? '50%' : '35%',
                transform:
                  selectedBrand === 'culinark'
                    ? 'translate(50%, -50%) rotateX(0deg) rotateZ(0deg) scale(1)'
                    : 'translate(0, 0) rotateX(15deg) rotateZ(15deg) scale(0.75)',
                zIndex: selectedBrand === 'culinark' ? 30 : 10,
              }}
            >
              <div
                className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
                style={{
                  width: '500px',
                  boxShadow:
                    '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                {/* Browser header */}
                <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-500 truncate">
                    www.culinark.io
                  </div>
                </div>
                {/* Browser content */}
                <div
                  className="h-72 bg-gradient-to-b"
                  style={{ backgroundColor: brands[1].bgColor }}
                >
                  <div className="h-full flex flex-col items-center justify-center px-6">
                    <div
                      className="text-3xl mb-3"
                      style={{ color: brands[1].color }}
                    >
                      ◆
                    </div>
                    <h2
                      className="text-2xl font-bold"
                      style={{ color: brands[1].color }}
                    >
                      CULINARK
                    </h2>
                    <p
                      className="text-xs mt-2 opacity-50"
                      style={{ color: brands[1].color }}
                    >
                      Minimalist-Noir
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kitchora - Center */}
            <div
              className="absolute transform transition-all duration-500"
              style={{
                left: selectedBrand === 'kitchora' ? '50%' : '50%',
                top: selectedBrand === 'kitchora' ? '50%' : '50%',
                transform:
                  selectedBrand === 'kitchora'
                    ? 'translate(-50%, -50%) rotateX(0deg) rotateZ(0deg) scale(1)'
                    : 'translate(-50%, -50%) rotateX(5deg) scale(0.85)',
                zIndex: selectedBrand === 'kitchora' ? 30 : 20,
              }}
            >
              <div
                className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
                style={{
                  width: '500px',
                  boxShadow:
                    '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                {/* Browser header */}
                <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-500 truncate">
                    www.kitchora.com
                  </div>
                </div>
                {/* Browser content */}
                <div
                  className="h-72 bg-gradient-to-b"
                  style={{ backgroundColor: brands[2].bgColor }}
                >
                  <div className="h-full flex flex-col items-center justify-center px-6">
                    <div
                      className="text-3xl mb-3"
                      style={{ color: brands[2].color }}
                    >
                      ◇
                    </div>
                    <h2
                      className="text-2xl font-bold"
                      style={{ color: brands[2].color }}
                    >
                      KITCHORA
                    </h2>
                    <p
                      className="text-xs mt-2 opacity-50"
                      style={{ color: brands[2].color }}
                    >
                      Contemporary Minimalist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Selection - Mobile Dropdown */}
          <div className="md:hidden mt-20 mb-8">
            <label className="block text-xs font-semibold text-gray-400 tracking-widest mb-3">
              SELECT BRAND
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white font-semibold"
              style={{
                borderColor: active.color + '40',
              }}
            >
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name} • {brand.tagline}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Selection - Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6 mt-20">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id)}
                className="text-left p-6 rounded-lg border transition-all"
                style={{
                  borderColor:
                    selectedBrand === brand.id ? brand.color : '#374151',
                  backgroundColor:
                    selectedBrand === brand.id ? brand.color + '15' : '#1f2937',
                }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{brand.tagline}</p>
                <p className="text-xs text-gray-500">{brand.positioning}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Comparison Section */}
      {activeTab === 'comparison' && (
        <section className="relative z-20 max-w-6xl mx-auto px-6 py-20 pb-32">
          <h2 className="text-4xl font-light mb-16 text-center">
            Strategic Comparison Matrix
          </h2>

          <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-gray-500 font-normal">
                      Criteria
                    </th>
                    {brands.map((brand) => (
                      <th
                        key={brand.id}
                        className="text-center p-4 text-white font-semibold text-xs"
                      >
                        {brand.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      criterion: 'Premium Perception',
                      scores: ['⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐'],
                    },
                    {
                      criterion: 'Market Scalability',
                      scores: ['⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐'],
                    },
                    {
                      criterion: 'Emotional Appeal',
                      scores: ['⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐⭐'],
                    },
                    {
                      criterion: 'Digital Marketing Strength',
                      scores: ['⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐'],
                    },
                    {
                      criterion: 'Cultural Relevance',
                      scores: ['⭐⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐⭐'],
                    },
                    {
                      criterion: 'Heritage Value',
                      scores: ['⭐⭐⭐⭐⭐', '⭐⭐', '⭐⭐⭐⭐'],
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-800 hover:bg-gray-800/30"
                    >
                      <td className="p-4 text-gray-300 text-sm">
                        {row.criterion}
                      </td>
                      {row.scores.map((score, i) => (
                        <td key={i} className="text-center p-4">
                          <span className="text-yellow-500 text-sm">
                            {score}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Brand Details Section */}
      {activeTab === 'details' && (
        <section className="relative z-20 max-w-6xl mx-auto px-6 py-20 pb-32">
          <h2 className="text-4xl font-light mb-16 text-center">
            Brand Architecture & Marketing
          </h2>

          {/* Brand Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id)}
                className="px-6 py-3 rounded-lg border transition-all text-sm font-semibold tracking-wider"
                style={{
                  borderColor:
                    selectedBrand === brand.id ? brand.color : '#374151',
                  backgroundColor:
                    selectedBrand === brand.id
                      ? brand.color + '20'
                      : 'transparent',
                  color: selectedBrand === brand.id ? brand.color : '#9ca3af',
                }}
              >
                {brand.name}
              </button>
            ))}
          </div>

          {/* Brand Details Content */}
          <div className="space-y-12">
            {/* Full Description */}
            <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-8">
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: active.color }}
              >
                About {active.fullName}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {active.fullDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {active.personality.map((trait, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: active.color + '20',
                      color: active.color,
                    }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: active.color }}
              >
                Brand Color Palette
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {active.colorPalette.map((color, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg overflow-hidden border border-gray-800"
                  >
                    <div
                      className="h-24 w-full"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div className="bg-gray-900 p-3">
                      <p className="text-sm font-semibold text-gray-100">
                        {color.name}
                      </p>
                      <p className="text-xs text-gray-500">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta Ad Copy */}
            <div>
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: active.color }}
              >
                Social Media Campaign Ideas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {active.metaAds.map((ad, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900/50 rounded-lg border border-gray-800 p-6"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded"
                        style={{
                          backgroundColor: active.color + '30',
                          color: active.color,
                        }}
                      >
                        {ad.platform}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      "{ad.copy}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recommendation Section */}
      {activeTab === 'recommendation' && (
        <section className="relative z-20 max-w-6xl mx-auto px-6 py-20 pb-32">
          <h2 className="text-4xl font-light mb-16 text-center">
            Strategic Recommendation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-lg border border-yellow-500/30 bg-gradient-to-b from-yellow-500/10 to-transparent">
              <div className="text-4xl mb-4">🥇</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                KRAFT CULINARY
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Best premium positioning with strong heritage value. Ideal for
                aspirational African market seeking luxury and authenticity
                combined with modern minimalism.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-transparent">
              <div className="text-4xl mb-4">🥈</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                CULINARK
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Superior scalability and digital-first positioning perfect for
                tech-savvy, design-conscious demographics. Best for online-first
                market expansion.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-orange-500/30 bg-gradient-to-b from-orange-500/10 to-transparent">
              <div className="text-4xl mb-4">🥉</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">
                KITCHORA
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strongest emotional and cultural connection. Perfect for
                capturing the modern African household seeking warmth,
                tradition, and contemporary design.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-16 text-center">
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              This comprehensive brand system was strategically designed to
              position the business as a leading premium kitchenware brand in
              Nigeria&apos;s evolving lifestyle market. Each direction addresses
              distinct market segments while maintaining premium positioning.
            </p>
            <div className="text-xs tracking-[0.2em] text-gray-600">
              <p className="mb-2">CREATED BY</p>
              <p className="text-white text-lg font-light tracking-[0.15em]">
                SWHAVY DIGITAL SOLUTIONS
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-20 border-t border-gray-800/50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-gray-800">
            <div>
              <p className="text-xs text-gray-400 tracking-widest mb-2">
                PRESENTED BY
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/swavy-logo.png"
                  alt="SWAVY Digital Solutions"
                  className="h-10 w-10"
                />
                <div>
                  <p className="text-sm font-bold text-white">
                    SWAVY DIGITAL SOLUTIONS
                  </p>
                  <p className="text-xs text-gray-500">
                    Premium Brand Strategy & Design
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 tracking-widest mb-1">
                CREATIVE DIRECTION
              </p>
              <p className="text-sm font-semibold text-white">
                Anyanechi Divine
              </p>
              <p className="text-xs text-gray-500">
                Brand Strategist & Designer
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-600 mb-2">
              © 2026 SWAVY Digital Solutions. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-700">
              Premium Brand Architecture Presentation | Strategic Culinary Brand
              Direction
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
