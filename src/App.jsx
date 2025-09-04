import React from "react";
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
} from "lucide-react";

// One-page micro-site for a Marketplace Management Portal
// TailwindCSS required. Paste into your React project and ensure Tailwind is configured.

const integrations = [
  { name: "Amazon 1P & 3P", icon: <ShoppingCart className="w-5 h-5" /> },
  { name: "Walmart", icon: <ShoppingCart className="w-5 h-5" /> },
  { name: "eBay", icon: <Globe2 className="w-5 h-5" /> },
  { name: "TikTok Shop", icon: <Globe2 className="w-5 h-5" /> },
  { name: "Shopify", icon: <Globe2 className="w-5 h-5" /> },
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
    title: "Executive Analytics Dashboard",
    text:
      "All marketplaces in one view — orders, revenue, expense, net profit, ROI, and hour-by-hour trends. Slice by marketplace, channel, brand, category, or SKU.",
  },
  {
    icon: <Boxes className="w-6 h-6" />,
    title: "Centralized Listings Control",
    text:
      "Create, edit, enrich, and publish product listings everywhere from a single place. Enforce attributes, media, SEO, and compliance before it goes live.",
  },
  {
    icon: <PackageCheck className="w-6 h-6" />,
    title: "Orders & Fulfillment",
    text:
      "See orders from all channels, print labels, split/merge, set rules, and trigger notifications. Take action without hopping between tabs.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Inventory & Pricing Sync",
    text:
      "Real-time stock sync, backorder thresholds, buffers, and price rules to keep listings accurate and prevent overselling.",
  },
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
    title: "Fee & P&L Insights",
    text:
      "Channel fees, taxes, shipping, promos and COGS rolled into clean P&L by SKU, marketplace, and time period.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Buy Box & Policy Guardrails",
    text:
      "Monitor Buy Box signals, price parity and policy health. Catch content issues and listing suppressions early.",
  },
  {
    icon: <BellRing className="w-6 h-6" />,
    title: "Alerts & Notifications",
    text:
      "Low-stock alerts for inventory restocking. Notifications for pending or delayed orders.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Advertisement Report",
    text:
      "Performance analysis based on Cost Per Click (CPC). Advertisement metrics tracking across channels.",
  },
];

const steps = [
  { step: 1, title: "Connect Marketplaces", text: "Amazon (1P/3P), Walmart, eBay, TikTok and more via native connectors or API." },
  { step: 2, title: "Unify Catalog & Inventory", text: "Map attributes, standardize media, and sync inventory & pricing rules." },
  { step: 3, title: "Launch Listings", text: "Publish once, syndicate everywhere with validations and approvals." },
  { step: 4, title: "Manage Orders", text: "Pick, pack, ship with carrier integrations and automated emails to buyer & seller." },
  { step: 5, title: "Track & Optimize", text: "Executive dashboard for orders, revenue, expense, net profit, and Buy Box insights." },
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

export default function MarketplaceOnePager() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-50 to-white text-purple-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-purple-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <div className="w-9 h-9 rounded-full bg-purple-700 text-white grid place-items-center font-semibold">U</div> */}
            <div className="text-xl font-semibold">Marketlynxe</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-purple-900">Features</a>
            <a href="#integrations" className="hover:text-purple-900">Integrations</a>
            <a href="#dashboard" className="hover:text-purple-900">Dashboard</a>
            <a href="#how" className="hover:text-purple-900">How it works</a>
            <a href="#faq" className="hover:text-purple-900">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#demo" className="rounded-2xl border border-purple-300 px-4 py-2 text-sm hover:bg-purple-50">Book a Demo</a>
            <a href="#contact" className="rounded-2xl bg-purple-700 text-white px-4 py-2 text-sm hover:bg-purple-800">Get Started</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              One dashboard to run <span className="text-purple-700">all marketplaces</span>
            </h1>
            <p className="mt-4 text-lg text-purple-700/85">
              Connect Amazon (1P/3P), Walmart, eBay, TikTok and more. See orders, revenue, expense, and net profit at a glance — control listings, manage orders, and ship without juggling multiple logins.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-2xl bg-purple-700 text-white px-5 py-3 text-sm font-medium hover:bg-purple-800">
                <Zap className="w-4 h-4" /> Book a Live Demo
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-2xl border border-purple-300 px-5 py-3 text-sm font-medium hover:bg-purple-50">
                Explore Features <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-purple-600">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Role-based access</div>
              <div className="flex items-center gap-2"><Workflow className="w-4 h-4" /> Automation rules</div>
              <div className="flex items-center gap-2"><Search className="w-4 h-4" /> Advanced filters</div>
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
                    <div className="text-sm font-medium flex items-center gap-2"><LineChart className="w-4 h-4" /> Hourly Performance</div>
                    <div className="text-xs text-purple-500">Orders vs. Revenue</div>
                  </div>
                  {/* Simple SVG sparkline placeholder */}
                  <svg viewBox="0 0 400 100" className="w-full h-24">
                    <polyline fill="none" stroke="currentColor" strokeWidth="2" points="0,80 40,70 80,72 120,60 160,50 200,55 240,40 280,42 320,30 360,35 400,20" />
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
          <p className="text-xs uppercase tracking-wider text-purple-500">Connect</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">Native integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
            {integrations.map((i) => (
              <div key={i.name} className="flex items-center gap-2 rounded-2xl border p-3">
                {i.icon}
                <span className="text-sm">{i.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-purple-600">Plus custom connectors for regional marketplaces on request.</p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-wider text-purple-500">Capabilities</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">Everything in one place</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl border p-6 hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-purple-700 text-white grid place-items-center">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-purple-700/85">{f.text}</p>
                <ul className="mt-4 space-y-2 text-sm text-purple-700/85">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Filters by marketplace, brand, SKU</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Export-ready views</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Automations & alerts</li>
                </ul>
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
              <p className="text-xs uppercase tracking-wider text-purple-500">Executive View</p>
              <h2 className="text-2xl md:text-3xl font-semibold mt-2">Profit & Loss — in real time</h2>
              <p className="mt-3 text-purple-700/85">
                See gross revenue, channel fees, taxes, shipping, promos, COGS and net profit. Compare by hour, day or month. Identify products that win the Buy Box and replicate success.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border p-4">
                  <div className="text-xs text-purple-500">Top Product Today</div>
                  <div className="text-lg font-semibold">SKU-4583 • $12,410</div>
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
                  <div className="text-xs text-purple-500">Low Stock Alerts</div>
                  <div className="text-lg font-semibold">8 SKUs</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border bg-white shadow-xl overflow-hidden">
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="text-sm font-medium">Orders — Action Center</div>
                  <div className="text-xs text-purple-500">All Marketplaces</div>
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
                    <div key={i} className="grid grid-cols-12 items-center text-sm py-3 border-b last:border-0">
                      <div className="col-span-3">#10{i}482</div>
                      <div className="col-span-3">Amazon 3P</div>
                      <div className="col-span-2"><span className="rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1">Paid</span></div>
                      <div className="col-span-2">$129.90</div>
                      <div className="col-span-2">
                        <a className="text-purple-700 hover:underline" href="#">Ship</a>
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
          <p className="text-xs uppercase tracking-wider text-purple-500">Workflow</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">From connect to scale</h2>
          <div className="grid md:grid-cols-5 gap-4 mt-8">
            {steps.map((s) => (
              <div key={s.step} className="rounded-3xl border p-5">
                <div className="w-8 h-8 rounded-full bg-purple-700 text-white grid place-items-center text-sm font-semibold">{s.step}</div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-purple-700/85">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / REFERENCES */}
      <section className="py-14 bg-white border-t">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6 items-start">
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold">Built for modern marketplace teams</h3>
            <p className="mt-2 text-sm text-purple-700/85">Inspired by best-in-class tools like the ones you know, with the simplicity of a single control center.</p>
            <ul className="mt-4 space-y-2 text-sm text-purple-700/85">
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> 10-minute channel setup</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> API & webhook support</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Audit trails & approvals</li>
            </ul>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold">Shipping Integrations</h3>
            <p className="mt-2 text-sm text-purple-700/85">Connect your carriers to generate labels and tracking seamlessly from the same screen.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {['UPS', 'FedEx', 'USPS', 'DHL', 'Shippo API'].map((c) => (
                <span key={c} className="rounded-full border px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold">Inventory Rules</h3>
            <p className="mt-2 text-sm text-purple-700/85">Set buffers, safety stock, and marketplace-specific thresholds to avoid overselling.</p>
            <ul className="mt-4 space-y-2 text-sm text-purple-700/85">
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Multi-warehouse support</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Kitting & bundles</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Backorder logic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="py-16 bg-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Ready to centralize your marketplaces?</h2>
            <p className="mt-2 text-purple-100">We’ll tailor the demo to your catalog size, channels, and fulfillment model.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-white text-purple-700 px-5 py-3 text-sm font-medium hover:bg-purple-50">Get Started</a>
              <a href="#faq" className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/10">See FAQs</a>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 border border-white/10 p-6">
            <div className="text-sm text-purple-100">What you’ll see</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Live dashboard walkthrough</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Listing creation & validation</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Order to label in under a minute</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Buy Box & P&L insights</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
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
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14 border-t">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border p-6">
            <h2 className="text-2xl font-semibold">Book a demo</h2>
            <p className="mt-2 text-sm text-purple-700/85">Tell us a bit about your catalog and channels — we’ll tailor the walkthrough.</p>
            <form className="mt-6 grid md:grid-cols-2 gap-4">
              <input className="rounded-xl border px-4 py-3 text-sm" placeholder="Name" />
              <input className="rounded-xl border px-4 py-3 text-sm" placeholder="Work email" />
              <input className="rounded-xl border px-4 py-3 text-sm" placeholder="Company" />
              <input className="rounded-xl border px-4 py-3 text-sm" placeholder="# of SKUs" />
              <input className="rounded-xl border px-4 py-3 text-sm md:col-span-2" placeholder="Marketplaces (Amazon, Walmart, eBay, TikTok...)" />
              <button type="button" className="rounded-2xl bg-purple-700 text-white px-5 py-3 text-sm font-medium hover:bg-purple-800 md:col-span-2">Request Demo</button>
            </form>
          </div>
          {/* <p className="text-xs text-purple-500 mt-4">By submitting, you agree to be contacted about UniqNex360 services. You can opt out anytime.</p> */}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-purple-500">
        © {new Date().getFullYear()} Marketlynxe. All rights reserved.
      </footer>
    </div>
  );
}
