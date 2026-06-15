import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MessageCircle, MapPin, Search, Bell, ShoppingCart, Clock,
  Star, Truck, Globe2, Upload, Stethoscope, Baby, Smile, Sparkles,
  Pill, HeartPulse, Apple, Leaf, User, Activity, Eye, Bone, Brain,
  ShieldCheck, Award, BadgeCheck, ChevronRight, ChevronLeft,
  Facebook, Instagram, Plus, Menu, Home, FlaskConical, Tag,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/919941950586?text=Hi%20Rajam%20Medicals,%20I'd%20like%20to%20place%20an%20order.";
const PHONE_TEL = "tel:04423770606";

function useOpenStatus() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const check = () => {
      const d = new Date();
      const m = d.getHours() * 60 + d.getMinutes();
      // 8:15-14:00 OR 16:00-23:00
      setOpen((m >= 8 * 60 + 15 && m < 14 * 60) || (m >= 16 * 60 && m < 23 * 60));
    };
    check();
    const i = setInterval(check, 30000);
    return () => clearInterval(i);
  }, []);
  return open;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive text-destructive-foreground shadow-soft">
        <Plus className="h-6 w-6" strokeWidth={3} />
      </div>
      <div className="leading-tight">
        <div className={`font-extrabold tracking-tight ${compact ? "text-base" : "text-lg"}`}>
          RAJAM MEDICALS
        </div>
        <div className="text-[10px] font-medium opacity-80">Est. 2006 · Trusted 18+ Yrs</div>
      </div>
    </div>
  );
}

function AnnouncementBar() {
  const items = [
    "🚚 Free Home Delivery in Saligramam",
    "🌏 Pan India Medicine Delivery",
    "⭐ 5.0 Google Rated",
    "📞 044 2377 0606",
    "💬 WhatsApp: 9941950586",
    "⏰ Open 8:15 AM – 2 PM & 4 PM – 11 PM",
    "🗓️ Open All 365 Days",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-primary text-primary-foreground py-2 border-y border-white/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="mx-6 text-sm font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-card shadow-card">
      {/* Mobile teal header */}
      <div className="lg:hidden bg-primary text-primary-foreground">
        <div className="px-4 pt-3 pb-2 flex items-center justify-between">
          <div>
            <Logo compact />
          </div>
          <div className="flex items-center gap-3">
            <button aria-label="Notifications" className="relative">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-secondary" />
            </button>
            <button aria-label="Cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 text-[10px] bg-secondary text-secondary-foreground font-bold rounded-full h-4 min-w-4 px-1 grid place-items-center">0</span>
            </button>
          </div>
        </div>
        <div className="px-4 pb-3">
          <div className="flex items-center gap-1 text-xs mb-2 opacity-90">
            <MapPin className="h-3 w-3" /> Saligramam, Chennai ▾
          </div>
          <div className="flex items-center bg-card text-foreground rounded-full px-4 py-2.5 shadow-soft">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <input className="flex-1 bg-transparent outline-none text-sm" placeholder="Search Medicines & Products..." />
          </div>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">
          <Logo />
          <button className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground border border-border rounded-full px-3 py-2">
            <MapPin className="h-4 w-4 text-primary" />
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase text-muted-foreground">Deliver to</div>
              <div className="font-medium">Saligramam, Chennai ▾</div>
            </div>
          </button>
          <div className="flex-1 flex items-center bg-muted rounded-full px-5 py-3">
            <Search className="h-5 w-5 text-muted-foreground mr-3" />
            <input className="flex-1 bg-transparent outline-none text-sm" placeholder="Search Medicines, Wellness Products, Healthcare Devices..." />
          </div>
          <button className="relative p-2 hover:bg-muted rounded-full" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <button className="relative p-2 hover:bg-muted rounded-full" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 text-[10px] bg-destructive text-destructive-foreground font-bold rounded-full h-4 min-w-4 px-1 grid place-items-center">0</span>
          </button>
          <button className="bg-destructive text-destructive-foreground font-semibold rounded-full px-6 py-2.5 hover:opacity-90">
            Login
          </button>
        </div>
        {/* Nav */}
        <nav className="border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-7 text-sm font-medium overflow-x-auto no-scrollbar">
            {["Buy Medicines","Our Doctors","Lab Tests","Health Records","Offers & Deals","Delivery Info","Contact Us"].map(n => (
              <a key={n} href="#" className="py-3 whitespace-nowrap hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors">{n}</a>
            ))}
          </div>
        </nav>
        {/* Category bar */}
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-6 text-xs font-medium overflow-x-auto no-scrollbar py-2.5">
            {["Prescription Meds","Baby Care","Skin Care","Women Care","Personal Care","Ayurveda","Health Devices","Nutritional Supplements","Home Essentials","Health Conditions"].map(n => (
              <a key={n} href="#" className="whitespace-nowrap hover:text-secondary transition-colors">{n}</a>
            ))}
          </div>
        </div>
      </div>

      <AnnouncementBar />
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/85 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1 text-xs font-medium mb-4">
              <Star className="h-3 w-3 fill-secondary text-secondary" /> 5.0 Google Rated · Est. 2006
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">
              Welcome to <span className="text-secondary">Rajam Medicals</span>
            </h1>
            <p className="mt-3 text-base lg:text-lg opacity-90">
              Chennai's Trusted Pharmacy Since 2006 · Saligramam
            </p>
            <div className="mt-6 flex items-center bg-card text-foreground rounded-full px-5 py-3 shadow-soft max-w-2xl mx-auto lg:mx-0">
              <Search className="h-5 w-5 text-muted-foreground mr-3" />
              <input className="flex-1 bg-transparent outline-none text-sm" placeholder="Search for medicines, devices, supplements..." />
              <button className="hidden sm:inline-flex bg-destructive text-destructive-foreground rounded-full px-5 py-2 text-sm font-semibold">Search</button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start text-xs">
              {[
                ["✅","Est. 2006"],
                ["⭐","5.0 Google Rated"],
                ["🚚","Home Delivery"],
                ["🌏","Pan India"],
              ].map(([i,t]) => (
                <span key={t} className="bg-white/10 backdrop-blur rounded-full px-3 py-1.5 font-medium">{i} {t}</span>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-end gap-4">
            <div className="w-44 h-56 rounded-3xl bg-secondary/90 grid place-items-center text-7xl shadow-soft">👨‍⚕️</div>
            <div className="w-44 h-64 rounded-3xl bg-destructive/90 grid place-items-center text-7xl shadow-soft">👩‍⚕️</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickActions() {
  const cards = [
    { icon: Upload, title: "Upload Prescription", sub: "UPTO 20% OFF", color: "bg-orange-50 text-secondary", href: WHATSAPP },
    { icon: Stethoscope, title: "Consult Our Doctors", sub: "BOOK NOW →", color: "bg-teal-50 text-primary", href: "#doctors" },
    { icon: Truck, title: "Pan India Delivery", sub: "ORDER NOW →", color: "bg-red-50 text-destructive", href: WHATSAPP },
    { icon: Phone, title: "Call 044 2377 0606", sub: "CALL NOW →", color: "bg-amber-50 text-secondary", href: PHONE_TEL },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {cards.map((c) => (
          <a key={c.title} href={c.href} className="group bg-card rounded-2xl p-4 lg:p-5 shadow-card hover:shadow-soft transition-all hover:-translate-y-0.5 border border-border">
            <div className={`h-12 w-12 rounded-xl grid place-items-center ${c.color} mb-3`}>
              <c.icon className="h-6 w-6" />
            </div>
            <div className="font-semibold text-sm lg:text-base">{c.title}</div>
            <div className="text-xs font-bold text-destructive mt-1">{c.sub}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Doctors() {
  const docs = [
    { icon: "👶", name: "Child Specialist", role: "Paediatric Care", note: "Available at Rajam Medicals" },
    { icon: "🏥", name: "Dr. Chandralekha", role: "General Physician", note: "Government Certified" },
    { icon: "🦷", name: "Dr. Jayam", role: "Dentist", note: "Government Certified" },
    { icon: "🧴", name: "Dermatologist", role: "Skin Specialist", note: "Available at Rajam Medicals" },
  ];
  return (
    <section id="doctors" className="bg-muted/40 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold">Consult Our Specialist Doctors</h2>
          <p className="text-muted-foreground text-sm mt-2">Available at Rajam Medicals, Saligramam</p>
        </div>
        <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 snap-x">
          {docs.map((d) => (
            <div key={d.name} className="snap-start shrink-0 w-64 lg:w-auto bg-card rounded-2xl p-5 shadow-card hover:shadow-soft transition-all border border-border">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 grid place-items-center text-4xl mb-4">{d.icon}</div>
              <div className="inline-flex text-[10px] font-bold uppercase bg-primary/10 text-primary rounded-full px-2 py-0.5 mb-2">{d.role}</div>
              <div className="font-bold text-lg">{d.name}</div>
              <div className="text-xs text-muted-foreground mt-1 mb-4">{d.note}</div>
              <a href={WHATSAPP} className="flex items-center justify-center gap-2 w-full bg-cta text-cta-foreground font-semibold rounded-full py-2.5 text-sm hover:opacity-90">
                <MessageCircle className="h-4 w-4" /> Book via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const cats = [
    { i: Sparkles, n: "Skin Care", c: "from-pink-100 to-pink-50 text-pink-600" },
    { i: Baby, n: "Baby Essentials", c: "from-purple-100 to-purple-50 text-purple-600" },
    { i: HeartPulse, n: "Sexual Wellness", c: "from-cyan-100 to-cyan-50 text-cyan-600" },
    { i: Apple, n: "Health Foods", c: "from-orange-100 to-orange-50 text-orange-600" },
    { i: Leaf, n: "Ayurveda", c: "from-green-100 to-green-50 text-green-600" },
    { i: User, n: "Women Care", c: "from-rose-100 to-rose-50 text-rose-600" },
    { i: Pill, n: "Personal Care", c: "from-teal-100 to-teal-50 text-primary" },
    { i: Activity, n: "Senior Care", c: "from-amber-100 to-amber-50 text-secondary" },
    { i: Smile, n: "Dental Care", c: "from-sky-100 to-sky-50 text-sky-600" },
    { i: Eye, n: "Eye Care", c: "from-indigo-100 to-indigo-50 text-indigo-600" },
    { i: Bone, n: "Diabetic Care", c: "from-lime-100 to-lime-50 text-lime-700" },
    { i: Brain, n: "Cardiac Care", c: "from-red-100 to-red-50 text-destructive" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-14">
      <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">For Everyday Wellness Needs</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 lg:gap-4">
        {cats.map((c) => (
          <a href="#" key={c.n} className="flex flex-col items-center gap-2 group">
            <div className={`h-16 w-16 lg:h-20 lg:w-20 rounded-2xl bg-gradient-to-br ${c.c} grid place-items-center shadow-card group-hover:shadow-soft transition-all group-hover:-translate-y-1`}>
              <c.i className="h-8 w-8 lg:h-9 lg:w-9" strokeWidth={1.8} />
            </div>
            <div className="text-[11px] lg:text-xs font-medium text-center leading-tight">{c.n}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function HealthConditions() {
  const conds = ["Diabetes Care","Cardiac Care","Stomach Care","Pain Relief","Liver Care","Oral/Dental","Respiratory","Skin Conditions","Elderly Care","Cold & Immunity"];
  const icons = [Activity, HeartPulse, Pill, Sparkles, Leaf, Smile, Brain, User, Bone, ShieldCheck];
  return (
    <section className="bg-muted/40 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">Browse by Health Conditions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {conds.map((n, i) => {
            const Icon = icons[i];
            return (
              <a href="#" key={n} className="bg-card rounded-2xl p-4 flex items-center gap-3 border border-border hover:border-primary hover:shadow-card transition-all">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-medium text-sm">{n}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Deals() {
  const deals = [
    { t: "MINIMUM 50% OFF", s: "Top brands daily essentials" },
    { t: "BUY 1 GET 1", s: "Wellness & personal care" },
    { t: "UNDER ₹199 STORE", s: "Everyday savings" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-14">
      <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">Amazing Deals You Can't Miss</h2>
      <div className="grid grid-cols-3 gap-3 lg:gap-5">
        {deals.map((d) => (
          <div key={d.t} className="bg-card border-2 border-primary rounded-2xl p-4 lg:p-6 text-center hover:shadow-soft transition-all">
            <Tag className="h-6 w-6 lg:h-8 lg:w-8 text-primary mx-auto mb-2" />
            <div className="font-extrabold text-primary text-sm lg:text-xl leading-tight">{d.t}</div>
            <div className="text-[10px] lg:text-xs text-muted-foreground mt-1">{d.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Carousel() {
  const slides = [
    { bg: "from-primary to-primary/70", icon: "📋", t: "Upload Prescription — Get 20% OFF Instantly" },
    { bg: "from-secondary to-orange-400", icon: "🚚", t: "Free Home Delivery in Saligramam Area" },
    { bg: "from-destructive to-red-400", icon: "🌏", t: "We Deliver Medicines Across India" },
    { bg: "from-primary to-teal-600", icon: "👨‍⚕️", t: "Consult Doctors at Rajam Medicals" },
    { bg: "from-secondary to-amber-500", icon: "⭐", t: "5.0 Google Rated · Trusted Since 2006" },
    { bg: "from-destructive to-rose-500", icon: "📞", t: "Call 044 2377 0606 · WhatsApp 9941950586" },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [slides.length]);
  const s = slides[i];
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${s.bg} text-white px-6 py-8 lg:py-12 shadow-soft transition-all duration-500`}>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="text-5xl lg:text-7xl">{s.icon}</div>
          <div className="text-lg lg:text-3xl font-bold leading-tight">{s.t}</div>
        </div>
        <button onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)} className="hidden lg:grid absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white/20 backdrop-blur hover:bg-white/30">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => setI((p) => (p + 1) % slides.length)} className="hidden lg:grid absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white/20 backdrop-blur hover:bg-white/30">
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, k) => (
            <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-white" : "w-1.5 bg-white/50"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Delivery() {
  const cards = [
    { icon: Home, title: "Local Home Delivery", desc: "Saligramam & nearby areas. Same-day delivery available." },
    { icon: Globe2, title: "Pan India Delivery", desc: "We deliver medicines across India. Order via WhatsApp/Call." },
    { icon: MessageCircle, title: "Quick Order via WhatsApp", desc: "Send medicine name or photo. WhatsApp: 9941950586." },
  ];
  return (
    <section className="bg-muted/40 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">We Deliver To Your Doorstep</h2>
        <p className="text-muted-foreground text-sm mb-6">Fast, reliable, anywhere in India.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div key={c.title} className="bg-card rounded-2xl p-6 border border-border shadow-card">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="font-bold text-lg">{c.title}</div>
              <div className="text-sm text-muted-foreground mt-2">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopInfoAndMap() {
  const open = useOpenStatus();
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-14">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-extrabold">RAJAM MEDICALS</h2>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${open ? "bg-green-100 text-green-700" : "bg-red-100 text-destructive"}`}>
              <span className={`h-2 w-2 rounded-full ${open ? "bg-green-600 animate-pulse" : "bg-destructive"}`} />
              {open ? "Open Now" : "Closed"}
            </span>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0" /><span>No. 34/15, Kamaraj Salai, Venkatesh Nagar, Saligramam, Chennai - 600092</span></div>
            <div className="flex gap-3"><Phone className="h-5 w-5 text-primary shrink-0" /><a href={PHONE_TEL} className="hover:text-primary">044 2377 0606</a></div>
            <div className="flex gap-3"><MessageCircle className="h-5 w-5 text-primary shrink-0" /><a href={WHATSAPP} className="hover:text-primary">WhatsApp: 9941950586</a></div>
            <div className="flex gap-3"><Clock className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div>Morning: 8:15 AM – 2:00 PM</div>
                <div>Evening: 4:00 PM – 11:00 PM</div>
                <div className="text-xs text-muted-foreground mt-1">Open All 365 Days — No Holidays</div>
              </div>
            </div>
            <div className="flex gap-3"><Star className="h-5 w-5 text-secondary fill-secondary shrink-0" /><span>5.0 on Google (2 Reviews)</span></div>
            <div className="flex gap-3"><Award className="h-5 w-5 text-primary shrink-0" /><span>Established 2006 · 18+ Years of Trust</span></div>
            <div className="flex gap-3"><User className="h-5 w-5 text-primary shrink-0" /><span>Owner: Mr. Singaravelan</span></div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <a href={PHONE_TEL} className="flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full py-3 font-semibold hover:opacity-90">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={WHATSAPP} className="flex items-center justify-center gap-2 bg-cta text-cta-foreground rounded-full py-3 font-semibold hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-card min-h-[400px]">
          <iframe
            title="Rajam Medicals Location"
            src="https://www.google.com/maps?q=No.+34%2F15+Kamaraj+Salai+Venkatesh+Nagar+Saligramam+Chennai+600092&output=embed"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-muted/40 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">What Our Customers Say</h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />)}</div>
          <span className="font-bold text-lg">5.0</span>
          <span className="text-muted-foreground text-sm">(2 Google Reviews)</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            { n: "Verified Customer", t: "Best medical shop in Saligramam. Friendly staff and quick service. Mr. Singaravelan is very helpful." },
            { n: "Verified Customer", t: "Trusted since years. Always genuine medicines and home delivery is fast. Highly recommended." },
          ].map((r) => (
            <div key={r.t} className="bg-card rounded-2xl p-5 text-left border border-border shadow-card">
              <div className="flex mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />)}</div>
              <p className="text-sm text-foreground/80 mb-3">"{r.t}"</p>
              <div className="text-xs font-semibold text-muted-foreground">— {r.n}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a href="https://www.google.com/maps/search/Rajam+Medicals+Saligramam+Chennai" target="_blank" rel="noreferrer" className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 font-semibold text-sm">View on Google Maps</a>
          <a href="https://www.google.com/maps/search/Rajam+Medicals+Saligramam+Chennai" target="_blank" rel="noreferrer" className="border-2 border-primary text-primary rounded-full px-6 py-2.5 font-semibold text-sm">Write a Review</a>
        </div>
      </div>
    </section>
  );
}

function TrustBadges() {
  const badges = [
    { i: ShieldCheck, t: "100% Genuine" },
    { i: Award, t: "Since 2006" },
    { i: Star, t: "5.0 Google" },
    { i: Truck, t: "Pan India" },
    { i: Stethoscope, t: "Expert Doctors" },
    { i: Phone, t: "24/7 Support" },
    { i: BadgeCheck, t: "Secure Payments" },
    { i: Clock, t: "365 Days Open" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4">
        {badges.map((b) => (
          <div key={b.t} className="flex flex-col items-center gap-2 p-3 text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center">
              <b.i className="h-6 w-6" />
            </div>
            <div className="text-xs font-semibold">{b.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Logo />
          <p className="text-sm mt-4 opacity-90">Trusted Pharmacy in Chennai. Owner: Mr. Singaravelan.</p>
          <div className="inline-flex items-center gap-1 mt-3 bg-white/10 rounded-full px-3 py-1 text-xs">
            <Star className="h-3 w-3 fill-secondary text-secondary" /> 5.0 Google Rated
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {["Home","Medicines","Our Doctors","Lab Tests","Offers","Contact"].map(n => (
              <li key={n}><a href="#" className="hover:text-secondary">{n}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>📍 No. 34/15, Kamaraj Salai, Venkatesh Nagar, Saligramam, Chennai - 600092</li>
            <li>📞 <a href={PHONE_TEL}>044 2377 0606</a></li>
            <li>💬 <a href={WHATSAPP}>WhatsApp: 9941950586</a></li>
            <li>⏰ 8:15 AM – 2 PM | 4 PM – 11 PM</li>
            <li>🗓️ Open All 365 Days</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>✅ Prescription Medicines</li>
            <li>🚚 Home Delivery</li>
            <li>🌏 Pan India Delivery</li>
            <li>👨‍⚕️ Doctor Consultations</li>
            <li>🦷 Dental Care · 🧴 Skin Care · 👶 Child Specialist</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 grid place-items-center hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 grid place-items-center hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
          <a href={WHATSAPP} aria-label="WhatsApp" className="h-9 w-9 rounded-full bg-white/10 grid place-items-center hover:bg-white/20"><MessageCircle className="h-4 w-4" /></a>
        </div>
        <div className="text-xs opacity-80 text-center">
          © 2025 Rajam Medicals. All Rights Reserved. · Licensed Medical Store · Chennai, Tamil Nadu
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <>
      <a href={WHATSAPP} className="fixed bottom-20 lg:bottom-6 right-4 z-50 flex items-center gap-2 bg-green-500 text-white rounded-full px-4 py-3 shadow-soft hover:scale-105 transition-transform">
        <MessageCircle className="h-5 w-5" />
        <span className="font-semibold text-sm">Quick Order</span>
      </a>
      <a href={PHONE_TEL} className="hidden sm:flex fixed bottom-20 lg:bottom-6 left-4 z-50 items-center gap-2 bg-destructive text-destructive-foreground rounded-full px-4 py-3 shadow-soft hover:scale-105 transition-transform">
        <Phone className="h-5 w-5" />
        <span className="font-semibold text-sm">Call Us</span>
      </a>
    </>
  );
}

function MobileBottomNav() {
  const items = [
    { i: Pill, n: "Medicines", active: true },
    { i: Stethoscope, n: "Doctors" },
    { i: FlaskConical, n: "Lab Tests" },
    { i: Truck, n: "Delivery" },
    { i: User, n: "Account" },
  ];
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card border-t border-border shadow-[0_-4px_20px_-8px_rgb(0_0_0/0.1)]">
      <div className="grid grid-cols-5">
        {items.map((it) => (
          <button key={it.n} className={`flex flex-col items-center gap-1 py-2.5 ${it.active ? "text-primary" : "text-muted-foreground"}`}>
            <it.i className="h-5 w-5" />
            <span className="text-[10px] font-medium">{it.n}</span>
            {it.active && <span className="absolute bottom-0 h-0.5 w-8 bg-primary rounded-t" />}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <Doctors />
        <Categories />
        <HealthConditions />
        <Deals />
        <Carousel />
        <Delivery />
        <ShopInfoAndMap />
        <Reviews />
        <TrustBadges />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileBottomNav />
    </div>
  );
}
