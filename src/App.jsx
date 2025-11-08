import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Scissors, Sparkles, Camera, Instagram, Facebook, MessageCircle, CreditCard, Menu, X } from "lucide-react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PRICES } from "./prices";

const fadeUp = { hidden:{opacity:0, y:20}, show:{opacity:1, y:0, transition:{duration:0.5}} };
const fadeIn = { hidden:{opacity:0}, show:{opacity:1, transition:{duration:0.5}} };

export default function App(){
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo-white.png" alt="KAWFE" className="h-8 w-8 rounded-xl object-contain" />
          <span className="font-semibold tracking-wide">KAWFE</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="/#services" className="hover:text-white">Services</a>
          <a href="/#barbers" className="hover:text-white">Nos Coiffeurs</a>
          <a href="/#pricing" className="hover:text-white">Tarifs</a>
          <a href="/reviews" className="hover:text-white">Avis</a>
          <a href="/#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://www.planity.com/kawfe-95310-saint-ouen-laumone-yu8" target="_blank" rel="noreferrer" className="hidden xs:inline-flex md:inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-white text-black font-medium hover:opacity-90 transition">Réserver</a>
          <button className="md:hidden p-2 rounded-xl bg-white/10 border border-white/10" onClick={()=>setOpen(true)} aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 bg-black/60" onClick={()=>setOpen(false)}>
            <motion.div initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type:'spring', stiffness:260, damping:30}} className="ml-auto h-full w-80 max-w-[85vw] bg-neutral-950 border-l border-white/10 p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/logo-black.png" alt="KAWFE" className="h-8 w-8 rounded-xl bg-white p-1" />
                  <span className="font-semibold">Menu</span>
                </div>
                <button onClick={()=>setOpen(false)} className="p-2 rounded-xl bg-white/10 border border-white/10"><X className="w-5 h-5" /></button>
              </div>
              <a href="/#services" onClick={()=>setOpen(false)} className="py-2">Services</a>
              <a href="/#barbers" onClick={()=>setOpen(false)} className="py-2">Nos Coiffeurs</a>
              <a href="/#pricing" onClick={()=>setOpen(false)} className="py-2">Tarifs</a>
              <a href="/reviews" onClick={()=>setOpen(false)} className="py-2">Avis</a>
              <a href="/#contact" onClick={()=>setOpen(false)} className="py-2">Contact</a>
              <a href="https://www.planity.com/kawfe-95310-saint-ouen-laumone-yu8" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-white text-black font-semibold">Réserver</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function StickyCTA(){
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 safe-bottom">
      <div className="mx-auto max-w-6xl px-4 pb-[env(safe-area-inset-bottom)]">
        <div className="m-3 rounded-2xl bg-white text-black shadow-2xl flex items-center justify-between p-2">
          <a href="https://www.planity.com/kawfe-95310-saint-ouen-laumone-yu8" target="_blank" rel="noreferrer" className="flex-1 rounded-xl px-3 py-3 text-center font-semibold">Réserver</a>
          <a href="https://wa.me/33662072950" target="_blank" rel="noreferrer" className="ml-2 rounded-xl px-3 py-3 bg-black text-white font-semibold">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const services = [
    { icon: <Scissors className="w-6 h-6" />, title: "Coupe Simple", desc: "Dégradé, classique, crop — au millimètre.", price: PRICES.coupe + "€" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Contour", desc: "Contours nets, propre et rapide.", price: PRICES.contour + "€" },
    { icon: <Scissors className="w-6 h-6" />, title: "Coupe + Barbe", desc: "Combo signature KAWFE.", price: PRICES.combo + "€" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Barbe", desc: "Tracé net + soin.", price: PRICES.barbe + "€" },
  ];

  const barbers = [
    { name: "Sharan", role: "Coiffeur / Barbier", desc: "Spécialiste des dégradés et contours nets.", photos: ["/images/sharan1.jpg","/images/sharan2.jpg","/images/sharan3.jpg"] },
    { name: "Ilyes", role: "Barbier / Stylist", desc: "Expert barbe et soins vapeur.", photos: ["/images/ilyes1.jpg","/images/ilyes2.jpg","/images/ilyes3.jpg"] },
    { name: "Yacin", role: "Coiffeur homme", desc: "Coupes classiques et modernes avec précision.", photos: ["/images/yacin1.jpg","/images/yacin2.jpg","/images/yacin3.jpg"] },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <Navbar />
      <StickyCTA />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-600/30 via-fuchsia-600/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-24 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-100px" }}>
            <h1 className="text-3xl xs:text-4xl md:text-6xl font-extrabold leading-tight">
              Coupe & Barbe <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400">haut de gamme</span>
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg max-w-xl">
              RDV rapides, finitions précises, ambiance premium. Réserve en 2 clics et sors net.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.planity.com/kawfe-95310-saint-ouen-laumone-yu8" target="_blank" rel="noreferrer" className="rounded-2xl px-4 py-3 bg-white text-black font-semibold hover:opacity-90">
                Réserver sur Planity
              </a>
              <a href="#services" className="rounded-2xl px-4 py-3 border border-white/20 hover:border-white/40">
                Voir nos services
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70 max-w-md">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 10h–20h, 7j/7</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+33662072950" className="hover:underline">06 62 07 29 50</a></div>
              <div className="col-span-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> 74 av. de Verdun, 95310 Saint‑Ouen‑l’Aumône</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-100px" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/30 to-blue-500/30 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl bg-neutral-900 border border-white/10 p-4 md:p-6 shadow-2xl">
                <img
  src="/images/kawfe5.jpg"
  alt="Photo du shop"
  className="aspect-[4/3] w-full rounded-2xl object-cover border border-white/10"
/>

                <div className="mt-3 grid grid-cols-3 gap-2 md:gap-3">
                  {["/images/kawfe1.jpg","/images/kawfe2.jpg","/images/kawfe3.jpg"].map((src,i)=>(
                    <img key={i} src={src} loading="lazy" alt={`galerie ${i+1}`} className="aspect-square rounded-xl object-cover border border-white/10" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Services</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {[
            { icon: <Scissors className="w-6 h-6" />, title: "Coupe Simple", desc: "Dégradé, classique, crop — au millimètre.", price: PRICES.coupe + "€" },
            { icon: <Sparkles className="w-6 h-6" />, title: "Contour", desc: "Contours nets, propre et rapide.", price: PRICES.contour + "€" },
            { icon: <Scissors className="w-6 h-6" />, title: "Coupe + Barbe", desc: "Combo signature KAWFE.", price: PRICES.combo + "€" },
            { icon: <Sparkles className="w-6 h-6" />, title: "Barbe", desc: "Tracé net + soin.", price: PRICES.barbe + "€" },
          ].map((s, idx) => (
            <motion.div key={s.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{delay: idx*0.05}} className="rounded-2xl p-4 md:p-5 bg-neutral-900/60 border border-white/10 hover:border-white/25 transition">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items中心 justify-center mb-2 md:mb-3">{s.icon}</div>
              <div className="font-semibold text-base md:text-lg">{s.title}</div>
              <div className="text-white/70 text-xs md:text-sm mt-1">{s.desc}</div>
              <div className="mt-3 md:mt-4 text-white/90 font-semibold flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> {s.price}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="barbers" className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Nos Coiffeurs</motion.h2>
        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {[
            { name: "Sharan", role: "Coiffeur / Barbier", desc: "Spécialiste des dégradés et contours nets.", photos: ["/images/sharan1.jpg","/images/sharan2.jpg","/images/sharan3.jpg"] },
            { name: "Ilyes", role: "Barbier / Stylist", desc: "Expert barbe et soins vapeur.", photos: ["/images/ilyes1.jpg","/images/ilyes2.jpg","/images/ilyes3.jpg"] },
            { name: "Yacin", role: "Coiffeur homme", desc: "Coupes classiques et modernes avec précision.", photos: ["/images/yacin1.jpg","/images/yacin2.jpg","/images/yacin3.jpg"] },
          ].map((b, cardIndex) => (
            <motion.div key={b.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{delay: cardIndex*0.05}} className="rounded-2xl bg-neutral-900/60 border border-white/10 p-5">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{b.name}</h3>
                  <p className="text-white/70 text-xs md:text-sm">{b.role}</p>
                </div>
                <Camera className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400" />
              </div>
              <p className="text-white/80 text-sm md:text-base mb-3 md:mb-4">{b.desc}</p>
              <div className="grid grid-cols-3 gap-2">
                {b.photos.map((src, i) => (
                  <a key={i} href={src} target="_blank" rel="noreferrer" className="block aspect-square rounded-xl overflow-hidden border border-white/10 active:scale-[0.98] transition">
                    <img src={src} loading="lazy" alt={`${b.name} ${i}`} className="w-full h-full object-cover" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pricing" className="max-w-6xl mx-auto px-4 pb-24 md:pb-10">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-10">
              <h3 className="text-xl md:text-3xl font-bold">Formule Signature</h3>
              <p className="text-white/70 mt-2 text-sm md:text-base">Coupe + Barbe — le meilleur de KAWFE en 45 min.</p>
              <div className="mt-6 md:mt-8 flex items-center gap-4">
                <span className="text-2xl md:text-3xl font-extrabold">{PRICES.combo}€</span>
                <a href="https://www.planity.com/kawfe-95310-saint-ouen-laumone-yu8" target="_blank" rel="noreferrer" className="rounded-2xl px-4 md:px-5 py-3 bg-white text-black font-semibold hover:opacity-90">Réserver</a>
              </div>
              <ul className="mt-5 md:mt-6 space-y-2 text-white/80 text-sm">
                <li>• Dégradé précis / ciseaux</li>
                <li>• Tracé barbe & soin</li>
              </ul>
            </div>
            <div className="p-6 md:p-10 bg-neutral-900/40 border-t md:border-t-0 md:border-l border-white/10">
              <h4 className="text-lg md:text-xl font-semibold">Autres tarifs</h4>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center justify-between bg-neutral-900/60 border border-white/10 rounded-xl p-3"><span>Coupe</span><span>{PRICES.coupe}€</span></div>
                <div className="flex items-center justify-between bg-neutral-900/60 border border-white/10 rounded-xl p-3"><span>Contour</span><span>{PRICES.contour}€</span></div>
                <div className="flex items-center justify-between bg-neutral-900/60 border border-white/10 rounded-xl p-3"><span>Barbe</span><span>{PRICES.barbe}€</span></div>
                <div className="flex items-center justify-between bg-neutral-900/60 border border-white/10 rounded-xl p-3"><span>Rasage</span><span>{PRICES.rasage}€</span></div>
                <div className="flex items-center justify-between bg-neutral-900/60 border border-white/10 rounded-xl p-3"><span>Shampoing</span><span>{PRICES.shampoing}€</span></div>
                <div className="flex items-center justify-between bg-neutral-900/60 border border-white/10 rounded-xl p-3"><span>Shampoing + soin</span><span>{PRICES.shampoingSoin}€</span></div>
              </div>
              <p className="text-white/60 text-xs mt-3">Tarifs d'après Planity — modifiables dans <code>src/prices.js</code>.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-3xl p-5 md:p-6 bg-neutral-900/60 border border-white/10">
            <h4 className="text-lg md:text-xl font-semibold">Nous contacter</h4>
            <div className="mt-3 space-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 74 avenue de Verdun, 95310 Saint‑Ouen‑l’Aumône</div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> Tous les jours : 10h–20h</div>
              <div className="flex items-center gap-2"><Phone className="w-5 h-5" /> <a href="tel:+33662072950" className="hover:underline">06 62 07 29 50</a></div>
              <div className="flex items-center gap-3 pt-2 flex-wrap">
                <a href="https://www.instagram.com/kawfe95?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-white/15 hover:border-white/35"><Instagram className="w-4 h-4" />Instagram</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-white/15 hover:border-white/35"><Facebook className="w-4 h-4" />Facebook</a>
                <a href="https://wa.me/33662072950" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-white/15 hover:border-white/35"><MessageCircle className="w-4 h-4" />WhatsApp</a>
              </div>
              <div className="pt-2">Réserver en ligne : <a className="underline" href="https://www.planity.com/kawfe-95310-saint-ouen-laumone-yu8" target="_blank" rel="noreferrer">Planity</a></div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 h-[340px] md:h-[420px]">
            <iframe title="Map" src="https://www.google.com/maps?q=74%20avenue%20de%20Verdun%2C%2095310%20Saint-Ouen-l'Aum%C3%B4ne&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 pb-20 md:pb-0">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs md:text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} KAWFE Barbershop — Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ReviewsPage(){
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <!-- ===================== AVIS CLIENTS ===================== -->
<section id="reviews" class="section">
  <h2 style="font-size:28px;font-weight:800;margin:0 0 12px">Avis clients ⭐⭐⭐⭐⭐</h2>

  <!-- Résumé -->
  <div class="cards" style="grid-template-columns:repeat(2,1fr); gap:12px; margin-bottom:16px">
    <div class="card-sm" style="display:flex;align-items:center;gap:10px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_2015_logo.svg" alt="Google" style="height:18px;background:#fff;border-radius:6px;padding:3px">
      <div><strong>5,0 / 5</strong><div class="p">Basé sur plus de 120 avis Google</div></div>
    </div>
    <div class="card-sm" style="display:flex;align-items:center;gap:10px">
      <div style="height:18px;width:18px;border-radius:4px;background:#fff;color:#111;display:flex;align-items:center;justify-content:center;font-weight:700">P</div>
      <div><strong>5,0 / 5</strong><div class="p">Note Planity</div></div>
    </div>
  </div>

  <!-- Liste d’avis -->
  <div class="cards">
    <div class="card-sm">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <strong>Kevin M.</strong><span aria-label="5 étoiles">★★★★★</span>
      </div>
      <div class="p">Toujours nickel, dégradé parfait et ambiance top ! On ressort frais 🔥</div>
      <div class="p" style="opacity:.7;font-size:12px;margin-top:6px">Google • il y a 2 semaines</div>
    </div>

    <div class="card-sm">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <strong>Ahmed B.</strong><span aria-label="5 étoiles">★★★★★</span>
      </div>
      <div class="p">Très pro, accueil au top et résultat toujours impeccable 👌</div>
      <div class="p" style="opacity:.7;font-size:12px;margin-top:6px">Planity • récent</div>
    </div>

    <div class="card-sm">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <strong>Lucas P.</strong><span aria-label="5 étoiles">★★★★★</span>
      </div>
      <div class="p">Meilleur salon du 95, les gars savent ce qu’ils font. Respect 👊</div>
      <div class="p" style="opacity:.7;font-size:12px;margin-top:6px">Google • il y a 1 mois</div>
    </div>

    <div class="card-sm">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <strong>Samir A.</strong><span aria-label="5 étoiles">★★★★★</span>
      </div>
      <div class="p">Super équipe, prise de rendez-vous rapide, je recommande à 100% !</div>
      <div class="p" style="opacity:.7;font-size:12px;margin-top:6px">Planity • il y a 3 semaines</div>
    </div>

    <div class="card-sm">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <strong>Rayan T.</strong><span aria-label="5 étoiles">★★★★★</span>
      </div>
      <div class="p">Salon très propre, ambiance posée et pro. Coup de cœur 🔥</div>
      <div class="p" style="opacity:.7;font-size:12px;margin-top:6px">Google • il y a 4 jours</div>
    </div>
  </div>

  <!-- Boutons -->
  <div class="btns" style="margin-top:14px">
    <a class="btn primary" target="_blank"
       href="https://www.google.com/maps/search/?api=1&query=KAWFE%20Barbershop%20Saint-Ouen-l%E2%80%99Aum%C3%B4ne">
       Voir tous les avis Google
    </a>
    <a class="btn" target="_blank"
       href="https://www.planity.com/kawfe-95310-saint-ouen-laumone-yu8">
       Voir sur Planity
    </a>
  </div>
</section>
<!-- ===================== FIN AVIS CLIENTS ===================== -->

      <main className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h1 className="text-2xl md:text-4xl font-bold">Avis</h1>
        <p className="text-white/80 mt-2">Merci pour votre confiance !</p>

        <div className="mt-6 grid md:grid-cols-2 gap-5 md:gap-6">
          <motion.a whileTap={{scale:0.98}} href="https://www.google.com/search?q=KAWFE+74+avenue+de+Verdun" target="_blank" rel="noreferrer" className="rounded-2xl p-5 bg-neutral-900/60 border border-white/10 block">
            <div className="text-xl md:text-2xl font-bold">Google • 5,0 ★</div>
            <p className="text-white/70 mt-2 text-sm md:text-base">Consultez nos avis vérifiés sur Google.</p>
            <span className="mt-4 inline-block rounded-xl px-4 py-2 bg-white text-black font-semibold">Voir les avis Google</span>
          </motion.a>
          <motion.a whileTap={{scale:0.98}} href="https://www.planity.com/kawfe-95310-saint-ouen-laumone-yu8" target="_blank" rel="noreferrer" className="rounded-2xl p-5 bg-neutral-900/60 border border-white/10 block">
            <div className="text-xl md:text-2xl font-bold">Planity • 5,0 ★</div>
            <p className="text-white/70 mt-2 text-sm md:text-base">Retrouvez nos avis Planity et réservez en ligne.</p>
            <span className="mt-4 inline-block rounded-xl px-4 py-2 bg-white text-black font-semibold">Voir les avis Planity</span>
          </motion.a>
        </div>
      </main>
    </motion.div>
  );
}
