import React, { useState } from "react";
import {
  BarChart3,
  Boxes,
  ShoppingCart,
  PackageCheck,
  ShieldCheck,
  Zap,
  Check,
  ChevronRight,
  LineChart,
  Settings,
  Database,
  CircleDollarSign,
  Truck,
  Search,
  Globe2,
  Workflow,
  BellRing,
  Megaphone,
  TrendingUp,
  Mail,
} from "lucide-react";

// One-page micro-site for a Marketplace Management Portal
// TailwindCSS required. Paste into your React project and ensure Tailwind is configured.

const integrations = [
  {
    name: "Amazon 1P & 3P",
    icon: (
      <img
        src="/amazon-svgrepo-com.svg"
        alt="Amazon"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  {
    name: "Walmart",
    icon: (
      <img
        src="/walmart-svgrepo-com.svg"
        alt="Walmart"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  {
    name: "eBay",
    icon: (
      <img
        src="/ebay-svgrepo-com.svg"
        alt="Ebay"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  {
    name: "Wayfair",
    icon: (
      <img
        src="/Wayfair_logo.svg"
        alt="Ebay"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  { name: "HomeDepot", 
   icon: (
      <img
        src="/the-home-depot-seeklogo.png"
        alt="Ebay"
        className="w-5 h-5 object-contain"
      />
    ),},
  { name: "More via API", icon: <Settings className="w-5 h-5" /> },
];

const metrics = [
  { label: "Orders (Today)", value: "2,134" },
  { label: "Revenue", value: "$184,920" },
  { label: "Expense", value: "$49,310" },
  { label: "Net Profit", value: "$135,610" },
];

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Unified Dashboard & Automation",
    text: "Get a real-time executive view of your business: orders, revenue, expenses, refunds, net profit — all reconciled and automated. Say goodbye to manual imports and formula spreadsheets.",
  },
  {
    icon: <Boxes className="w-6 h-6" />,
    title: "Multi-Marketplace Listings & Inventory Sync",
    text: "Keep a single catalog, sync pricing and stock, prevent overselling, and let us handle your listings on Seller Central and Vendor Central.",
  },
  {
    icon: <PackageCheck className="w-6 h-6" />,
    title: "Order & Fulfillment Hub",
    text: "View and act on all inbound orders from every marketplace in one screen. Print labels, split/merge shipments, and automate status updates.",
  },
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
    title: "Financial Reconciliation & Profit Analysis",
    text: "Your P&L rolls up fees, taxes, refunds, promotions, shipping & ad cost — showing net margin by SKU, brand, and marketplace. Stop guessing profitability; see it clearly.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Ad Performance & ROI Insights",
    text: "Track CPC, ad spend vs ROI, impressions, clicks, conversions — all tied to individual SKUs and channels.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Buy Box & Suppression Monitoring",
    text: "Track Buy Box win rates, suppression alerts, price parity violations, and listing health. Understand which SKUs need attention to win visibility and sales.",
  },
  {
    icon: <BellRing className="w-6 h-6" />,
    title: "Intelligent Alerts & Forecasting",
    text: "Get proactive alerts on low stock, delayed orders, abnormal refunds, suppressed listings. Forecast demand, identify low-moving SKUs, and rebalance inventory in advance.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Role-Based Access",
    text: "Control user permissions with role-based access — manage who can edit listings, fulfill orders, update pricing, and view financial data.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Shipping Integrations",
    text: "Generate labels directly from your carrier and pull tracking details and shipping charges into MarketLynxe, so you can manage fulfillment without leaving the platform.",
  },
  {
    icon: <Boxes className="w-6 h-6" />,
    title: "Smarter Warehouse Control:",
    text: "Set buffers, safety stock, and marketplace-specific thresholds with multi-warehouse support, kitting, and bundle management to keep inventory synchronized and reliable across every channel. ",
  },
];

const steps = [
  {
    step: 1,
    title: "Connect Channels",
    text: "Link Amazon (1P & 3P), Walmart, eBay, and other channels using API.",
  },
  {
    step: 2,
    title: "Unify Your Catalog",
    text: "Map attributes, standardize data, sync inventory and pricing, and connect products to the right marketplace categories.",
  },
  {
    step: 3,
    title: "Launch Everywhere",
    text: "Publish once, sell everywhere — seamless omnichannel experience across marketplaces.",
  },
  {
    step: 4,
    title: "Manage with Ease",
    text: "Centralized orders, fulfillment, and customer communication.",
  },
  {
    step: 5,
    title: "Scale Smarter",
    text: "Executive dashboards + alerts + ad insights = growth on autopilot.",
  },
];

const faqs = [
  {
    q: "Can I control email notifications?",
    a: "Yes. Create rules by marketplace, order status, threshold, and recipient for both seller and buyer communications.",
  },
  {
    q: "Do you support both Amazon 1P and 3P?",
    a: "Absolutely. Manage 1P (Vendor Central) and 3P (Seller Central) from one place, including catalog, orders, and analytics.",
  },
  {
    q: "How hard is setup?",
    a: "Most users connect channels in minutes. Our team helps with mappings, imports, and QA if needed.",
  },
  {
    q: "Can I restrict access by role?",
    a: "Role-based access control lets you gate listings, pricing, or fulfillment actions by team role.",
  },
];

const testimonials = [
  {
    quote:
      "With MarketLynxe, all my marketplaces are finally in one place. I can see orders, ads, and profits at a glance, and spend more time growing my business instead of managing logins.",
    author: "7-figure Amazon Seller",
  },
  {
    quote:
      "MarketLynxe replaced 5 dashboards, and dozens of manual reports — saving us ~20 hours/week in seeing where our business stands.",
    author: "Amazon/eBay seller",
  },
  {
    quote:
      "Finally, a single dashboard that actually shows profit — not just revenue. This changed how we make decisions every day.",
    author: "Multi-Channel Distributor",
  },
];

const whyMarketLynxe = [
  {
    icon: "⚡",
    title: "Save Time, Eliminate Chaos",
    desc: "One login replaces 5+ dashboards.",
  },
  {
    icon: "📊",
    title: "Run on Data, Not Guesswork",
    desc: "See true profitability across every SKU and channel.",
  },
  {
    icon: "🚀",
    title: "Scale Without Risk",
    desc: "Automated stock, pricing, and compliance guardrails.",
  },
  {
    icon: "🔔",
    title: "Stay Ahead of Problems",
    desc: "Instant alerts for stockouts, delays, and suppressed listings.",
  },
  {
    icon: "🤝",
    title: "Built for Teams",
    desc: "Role-based and privacy/access controls make it enterprise-ready.",
  },
  {
    icon: "🌍",
    title: "Future-Proof",
    desc: "Add new channels and integrations as your business grows.",
  },
];

export default function MarketplaceOnePager() {
  const [selectedMarketplace, setSelectedMarketplace] = useState([]);
  const [customMarketplace, setCustomMarketplace] = useState("");

  const handleMarketplaceChange = (e) => {
    const value = e.target.value;
    setSelectedMarketplace(value);
    if (value !== "Other") setCustomMarketplace("");
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-50 to-white text-purple-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-purple-200 h-20">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-full">
          <div className="flex items-center h-full">
            <a
              href="#hero"
              // onClick={(e) => {
              //   e.preventDefault();
              //   window.scrollTo({ top: 0, behavior: "smooth" });
              // }}
            >
              <img
                src="/shared image.jpeg"
                alt="Marketlynxe Logo"
                className="h-16 w-auto mx-auto"
              />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-purple-900">
              Features
            </a>
            <a href="#integrations" className="hover:text-purple-900">
              Integrations
            </a>
            <a href="#dashboard" className="hover:text-purple-900">
              Dashboard
            </a>
            <a href="#how" className="hover:text-purple-900">
              How it works
            </a>
            {/* <a href="#faq" className="hover:text-purple-900">FAQ</a> */}
          </nav>
          <div className="flex items-center gap-2">
            <a
            href="mailto:business@marketlynxe.com"
              className="flex items-center gap-2 rounded-2xl px-4 py-2 text-sm hover:bg-purple-50"
      >
              <Mail className="h-4 w-4 text-purple-500"/>
              business@marketlynxe.com
            </a>
            <a
              href="#contact"
              className="rounded-2xl bg-purple-700 text-white px-4 py-2 text-sm hover:bg-purple-800"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              One Command Center.
              <span className="text-purple-700"> Every Marketplace. </span>
            </h1>
            <p className="mt-4 text-medium text-purple-700/85">
              Connect Amazon (1P/3P), Walmart, eBay, Wayfair, HomeDepot, and
              more. Instantly track orders, revenue, expenses, and net profit —
              while controlling listings, managing orders, shipping, and
              fulfillment without juggling multiple logins. Say goodbye to
              fragmented tools and spreadsheets. MarketLynxe unifies everything
              into 360-degree view — including ad performance insights, Buy Box
              tracking, and seamless third-party integrations with shipping,
              warehouses, and more — so you never miss an opportunity to grow.
            </p>

            {/* 🔹 Added value bullets */}
            <ul className="mt-6 space-y-2 text-purple-700/85 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 text-purple-700" />
                Control listings, pricing & inventory cross-marketplace with
                real-time sync.
              </li>
              <li className="flex items-start gap-2">
                <Check className=" h-4 mt-0.5 text-purple-700" />
                Implement custom business rules tailored to vendors and product
                categories, including custom formulas for COGS, pricing, profit,
                and other calculations.
              </li>
              <li className="flex items-start gap-2">
                <Check className=" h-4 mt-0.5 text-purple-700" />
                Automate order fulfillment with shipping integrations including
                ShipStation, Shippo, Easyship, ShipHero, and more.
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 text-purple-700" />
                Monitor ad performance (CPC, ROAS, spend vs conversions) plus
                SKU-level profitability.
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 text-purple-700" />
                Track Buy Box performance and suppression risks.
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-2xl bg-purple-700 text-white px-5 py-3 text-sm font-medium hover:bg-purple-800"
              >
                <Zap className="w-4 h-4" /> Book a Demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-2xl border border-purple-300 px-5 py-3 text-sm font-medium hover:bg-purple-50"
              >
                See it in action <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-purple-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Role-based access
              </div>
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4" /> Automation rules
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" /> Advanced filters
              </div>
            </div>
          </div>

          {/* HERO MOCKUP */}
          <div className="relative">
            <div className="rounded-3xl border bg-white shadow-xl overflow-hidden">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="text-sm font-medium">Executive Dashboard</div>
                <div className="text-xs text-purple-500">Today</div>
              </div>
              <div className="grid md:grid-cols-4 gap-4 p-4">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border p-4">
                    <div className="text-xs text-purple-500">{m.label}</div>
                    <div className="text-2xl font-semibold mt-2">{m.value}</div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <div className="rounded-2xl border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium flex items-center gap-2">
                      <LineChart className="w-4 h-4" /> Hourly Performance
                    </div>
                    <div className="text-xs text-purple-500">
                      Orders vs. Revenue
                    </div>
                  </div>
                  {/* Simple SVG sparkline placeholder */}
                  <svg viewBox="0 0 400 100" className="w-full h-24">
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      points="0,80 40,70 80,72 120,60 160,50 200,55 240,40 280,42 320,30 360,35 400,20"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="py-14 bg-white border-y">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-s uppercase tracking-wider text-purple-500">
            Connect
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            Native integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
            {integrations.map((i) => (
              <div
                key={i.name}
                className="flex items-center gap-2 rounded-2xl border p-3"
              >
                {i.icon}
                <span className="text-sm">{i.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-purple-600">
            Plus custom connectors for regional marketplaces on request.
          </p>
        </div>
      </section>
      {/* VIDEO / DEMO SECTION */}
      <section className="pt-6 pb-1 bg-purple-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mt-2">Built for modern marketplace teams</h3>
            <p className="mt-2 text-s text-purple-700/85">MarketLynxe is inspired by the best tools in the industry but designed to keep things simple. With quick channel setup and seamless API connections, your team can get started quickly without technical headaches. Everything you need to connect marketplaces, unify data, and manage operations comes together in one comprehensive command center. </p>
          <h2 className="mt-2 text-2xl font-semibold text-purple-900">
            Watch the demo to experience the platform in action.
          </h2>
          {/* <p className="mt-2 text-purple-700/85 text-lg">
            See how MarketLynxe unifies marketplaces, listings, ads, and
            shipping into one holistic dashboard.
          </p> */}

          <div className="flex justify-center">
            <div
              className="relative w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3"
              style={{ paddingBottom: "50.25%" }}
            >
              <iframe
                src="https://player.vimeo.com/video/1116998171"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Demo Video"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-s uppercase tracking-wider text-purple-500">
            Capabilities
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            Everything in one place
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border p-6 hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-700 text-white grid place-items-center">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-purple-700/85">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD DEEPER DIVE */}
      <section id="dashboard" className="py-16 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-s uppercase tracking-wider text-purple-500">
                Executive View
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                Profit & Loss — in real time
              </h2>
              <p className="mt-3 text-purple-700/85">
                See gross revenue, channel fees, taxes, shipping, promos, COGS
                and net profit. Compare by hour, day or month. Identify products
                that win the Buy Box and replicate success.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border p-4">
                  <div className="text-xs text-purple-500">
                    Top Product Today
                  </div>
                  <div className="text-lg font-semibold">
                    SKU-4583 • $12,410
                  </div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-xs text-purple-500">Refund Rate</div>
                  <div className="text-lg font-semibold">1.2%</div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-xs text-purple-500">Buy Box Hold</div>
                  <div className="text-lg font-semibold">93%</div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-xs text-purple-500">
                    Low Stock Alerts
                  </div>
                  <div className="text-lg font-semibold">8 SKUs</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border bg-white shadow-xl overflow-hidden">
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="text-sm font-medium">
                    Orders — Action Center
                  </div>
                  <div className="text-xs text-purple-500">
                    All Marketplaces
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-12 text-xs font-medium text-purple-500">
                    <div className="col-span-3">Order</div>
                    <div className="col-span-3">Marketplace</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2">Total</div>
                    <div className="col-span-2">Action</div>
                  </div>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="grid grid-cols-12 items-center text-sm py-3 border-b last:border-0"
                    >
                      <div className="col-span-3">#10{i}482</div>
                      <div className="col-span-3">Amazon 3P</div>
                      <div className="col-span-2">
                        <span className="rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1">
                          Paid
                        </span>
                      </div>
                      <div className="col-span-2">$129.90</div>
                      <div className="col-span-2">
                        <a className="text-purple-700 hover:underline" href="#">
                          Ship
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-s uppercase tracking-wider text-purple-500">
            Workflow
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            From connect to scale
          </h2>
          <div className="grid md:grid-cols-5 gap-4 mt-8">
            {steps.map((s) => (
              <div key={s.step} className="rounded-3xl border p-5">
                <div className="w-8 h-8 rounded-full bg-purple-700 text-white grid place-items-center text-sm font-semibold">
                  {s.step}
                </div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-purple-700/85">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MARKETLYNXE */}
      <section className="py-16 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why MarketLynxe?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {whyMarketLynxe.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-6 text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-purple-700/85">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="py-16 bg-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Ready to centralize your marketplaces?
            </h2>
            <p className="mt-2 text-purple-100">
              We'll tailor the demo to your catalog size, channels, and
              fulfillment model.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-white text-purple-700 px-5 py-3 text-sm font-medium hover:bg-purple-50"
              >
                Get Started
              </a>
              {/* <a
                href="#faq"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/10"
              >
                See FAQs
              </a> */}
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 border border-white/10 p-6">
            <div className="text-sm text-purple-100">What you'll see</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Live dashboard walkthrough
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Listing creation & validation
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Order to label in under a minute
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Buy Box & P&L insights
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* <section id="faq" className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border p-6">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-purple-700/85">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CONTACT */}
      <section id="contact" className="py-14 border-t">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border p-6">
            <h2 className="text-2xl font-semibold text-center">Book a Demo</h2>
            <p className="mt-2 text-sm text-center text-purple-700/85">
              Tell us a bit about your business and we'll tailor the demo to
              your needs.
            </p>

            <form className="mt-6 grid md:grid-cols-2 gap-4">
              {/* First Name */}
              <input
                className="rounded-xl border px-4 py-3 text-sm"
                placeholder="First Name"
                name="firstName"
                required
              />

              {/* Last Name */}
              <input
                className="rounded-xl border px-4 py-3 text-sm"
                placeholder="Last Name"
                name="lastName"
                required
              />

              {/* Email */}
              <input
                className="rounded-xl border px-4 py-3 text-sm md:col-span-2"
                placeholder="Work Email"
                type="email"
                name="email"
                required
              />

              {/* Company */}
              <input
                className="rounded-xl border px-4 py-3 text-sm md:col-span-2"
                placeholder="Company Name"
                name="company"
                required
              />

              {/* Marketplace Dropdown */}
              <div className="md:col-span-2">
                <label className="block text-sm text-purple-700 mb-1">
                  Which marketplace do you sell on?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Amazon","Walmart","eBay","Wayfair",'HomeDepot','TikTok',"Other"].map((market)=>(
                    <label   key={market} className="flex items-center gap-2 rounded-xl border p-3 hover:bg-purple-50 cursor-pointer">
                      <input type="checkbox" value={market}
                      checked={selectedMarketplace.includes(market)} onChange={(e)=>{
                        if(e.target.checked)
                        {
                          setSelectedMarketplace([...selectedMarketplace,market])

                        }
                        else
                        {
                          setSelectedMarketplace(
                            selectedMarketplace.filter((m)=>m!==market)
                          )
                        }
                      }}
                      />
                      <span className="text-sm">{market}</span>
                    </label>
                  ))}
                </div>
              {selectedMarketplace.includes("Other") && (
                <input
                  className="rounded-xl border px-4 py-3 text-sm md:col-span-2"
                  placeholder="Please specify other marketplace(s)"
                  name="customMarketplace"
                  value={customMarketplace}
                  onChange={(e) => setCustomMarketplace(e.target.value)}
                  required
                />
              )}
              </div>

              

              {/* Button */}
              <button
                type="submit"
                className="rounded-2xl bg-purple-700 text-white px-5 py-3 text-sm font-medium hover:bg-purple-800 md:col-span-2"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tecenterxt- text-sm text-purple-500">
        © {new Date().getFullYear()} MarketLynxe. All rights reserved.
      </footer>
    </div>
  );
}
