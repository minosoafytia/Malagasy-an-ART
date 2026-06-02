import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-madagascar-map.jpg";
import baobabImg from "@/assets/product-baobab.jpg";
import lemurImg from "@/assets/product-lemur.jpg";
import motifsImg from "@/assets/product-motifs.jpg";
import carteImg from "@/assets/product-carte.jpg";
import artisanImg from "@/assets/artisan.jpg";
import qrImg from "@/assets/qr-story.jpg";
import { QrCode, Scan, Sparkles, Trees, Hammer, Globe2, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malagasy an'art — Art décoratif premium de Madagascar" },
      { name: "description", content: "Plateforme de valorisation de l'art mural malgache. Œuvres en bois sculpté, QR code storytelling et patrimoine culturel." },
      { property: "og:title", content: "Malagasy an'art — L'âme de Madagascar, sculptée dans le bois" },
      { property: "og:description", content: "Art décoratif premium, storytelling immersif via QR code." },
    ],
  }),
  component: Index,
});

const products = [
  { img: carteImg, name: "Carte de Madagascar", region: "Antananarivo", price: "Dès 189 €", tag: "Édition signature", desc: "Carte sculptée à la main en bois de palissandre, ponctuée de repères en laiton." },
  { img: baobabImg, name: "Baobab Sacré", region: "Morondava", price: "Dès 145 €", tag: "Nouveauté", desc: "Silhouette du baobab — emblème de l'Ouest malgache — découpée dans le bois de rose." },
  { img: lemurImg, name: "Biodiversité Lémurien", region: "Andasibe", price: "Dès 320 €", tag: "Pièce unique", desc: "Bas-relief sculpté célébrant les forêts primaires et leurs gardiens endémiques." },
  { img: motifsImg, name: "Motif Antemoro", region: "Sud-Est", price: "Dès 220 €", tag: "Tradition", desc: "Panneau géométrique inspiré des manuscrits sorabe et de l'art Sakalava." },
];

const segments = [
  { icon: Globe2, title: "Voyageurs premium", text: "Un souvenir qui transcende l'objet : une œuvre, une mémoire." },
  { icon: Trees, title: "Hôtels & Lodges", text: "Habillez vos espaces d'une identité culturelle forte et locale." },
  { icon: Sparkles, title: "Collectionneurs", text: "Éditions limitées signées par les artistes malgaches contemporains." },
  { icon: Hammer, title: "Diaspora", text: "Gardez le lien avec la Grande Île, où que vous soyez dans le monde." },
];

function Index() {
  return (
    <main className="min-h-screen grain overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground text-lg leading-none">M</span>
            </div>
            <span className="font-display text-xl tracking-tight">Malagasy <span className="italic text-primary">an'art</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#collection" className="hover:text-primary transition">Collection</a>
            <a href="#story" className="hover:text-primary transition">QR Storytelling</a>
            <a href="#artisans" className="hover:text-primary transition">Artisans</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href="#collection" className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 text-sm rounded-sm hover:bg-primary transition">
            Découvrir <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Carte de Madagascar sculptée en bois" className="w-full h-full object-cover" width={1600} height={1200} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 rounded-full text-xs uppercase tracking-[0.2em] text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Madagascar · Édition 2026
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
              L'âme de Madagascar,<br />
              <span className="italic text-primary">sculptée</span> dans le bois.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Malagasy an'art valorise l'art mural malgache premium. Chaque œuvre s'accompagne d'un <strong className="text-foreground">QR code storytelling</strong> qui révèle l'artiste, la région et le geste ancestral qui l'ont fait naître.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#collection" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm uppercase tracking-widest hover:shadow-[var(--shadow-elegant)] transition">
                Explorer la collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="#story" className="inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 text-sm uppercase tracking-widest hover:border-foreground transition">
                <Scan className="w-4 h-4" /> Voir la magie QR
              </a>
            </div>
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="font-display text-3xl text-primary">120+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Pièces uniques</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-display text-3xl text-primary">23</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Artisans partenaires</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-display text-3xl text-primary">6</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Régions sources</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Défiler ↓
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/60 bg-secondary text-secondary-foreground py-6 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap font-display text-2xl italic">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              <span>· Antananarivo</span><span>· Baobabs de Morondava</span><span>· Lémuriens d'Andasibe</span>
              <span>· Récifs de Nosy Be</span><span>· Hauts plateaux Merina</span><span>· Côte Sakalava</span>
              <span>· Manuscrits Sorabe</span>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">Collection — Hiver 2026</div>
              <h2 className="font-display text-5xl lg:text-6xl text-balance max-w-2xl">Des œuvres qui racontent la <em>Grande Île</em>.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Bois de rose, palissandre, ébène. Chaque pièce est numérotée, signée et livrée avec son passeport culturel numérique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <article key={p.name} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-wider">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <QrCode className="w-4 h-4" />
                  </div>
                </div>
                <div className="pt-5 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl">{p.name}</h3>
                    <span className="text-xs text-muted-foreground">N°0{i + 1}</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.region}</p>
                  <p className="text-sm text-foreground/80 pt-2 leading-relaxed">{p.desc}</p>
                  <div className="pt-3 flex items-center justify-between">
                    <span className="font-display text-lg text-primary">{p.price}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QR STORY */}
      <section id="story" className="bg-secondary text-secondary-foreground py-28 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,var(--gold),transparent_40%)]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="relative">
            <img src={qrImg} alt="Scan QR code sur œuvre Madagascar" loading="lazy" width={1280} height={1024} className="w-full aspect-[5/4] object-cover rounded-sm shadow-[var(--shadow-elegant)]" />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-5 rounded-sm shadow-[var(--shadow-soft)] animate-float">
              <QrCode className="w-10 h-10" />
            </div>
          </div>
          <div className="space-y-8">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Innovation signature</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-tight text-balance">
              Scannez. Plongez. <em className="text-accent">Voyagez.</em>
            </h2>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed">
              Au dos de chaque œuvre, un QR code discret. En un scan, l'histoire prend vie : vidéo immersive de l'atelier, voix de l'artisan, paysages de la région, signification des motifs.
            </p>
            <ul className="space-y-4">
              {[
                ["01", "Rencontrez l'artiste", "Un mini-documentaire de 90 secondes tourné dans son atelier."],
                ["02", "Comprenez le motif", "Origine, symbolique et techniques transmises sur 5 générations."],
                ["03", "Explorez la région", "Paysages, sons et traditions qui ont inspiré l'œuvre."],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-5 pb-4 border-b border-secondary-foreground/15">
                  <span className="font-display text-2xl text-accent shrink-0">{n}</span>
                  <div>
                    <div className="font-medium">{t}</div>
                    <div className="text-sm text-secondary-foreground/70">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Pour qui</div>
            <h2 className="font-display text-5xl lg:text-6xl text-balance">Une œuvre, mille destinations.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {segments.map((s) => (
              <div key={s.title} className="bg-background p-8 space-y-4 hover:bg-muted transition group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISANS */}
      <section id="artisans" className="py-28 px-6 lg:px-10 bg-muted">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Les mains derrière l'art</div>
            <h2 className="font-display text-5xl lg:text-6xl text-balance">
              23 artisans. <em>Un seul</em> savoir-faire ancestral.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Nous travaillons en circuit court avec des sculpteurs d'Ambositra, Antananarivo et Mahajanga. Chaque artisan reçoit une rémunération juste et figure dans le passeport numérique de l'œuvre.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <div className="font-display text-4xl text-primary">100%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Bois local certifié</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">5 gén.</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">De savoir-faire</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">+38%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Revenu artisan</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={artisanImg} alt="Artisan malgache au travail" loading="lazy" width={1280} height={1024} className="w-full aspect-[5/4] object-cover rounded-sm" />
            <div className="absolute -bottom-8 -left-8 max-w-xs bg-background p-6 shadow-[var(--shadow-elegant)] hidden md:block">
              <div className="flex gap-1 text-accent mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm italic">"Une pièce, une histoire. Le QR code change la façon dont mes clients vivent l'objet."</p>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">Rakoto H. — Sculpteur, Ambositra</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 lg:px-10 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,var(--clay),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Devenez ambassadeur</div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-balance">
            Offrez à vos murs<br /><em className="text-accent">un morceau d'île</em>.
          </h2>
          <p className="text-background/70 max-w-xl mx-auto text-lg">
            Hôtels, boutiques, collectionneurs : recevez notre catalogue et nos conditions B2B.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto pt-4">
            <input type="email" placeholder="votre@email.com" className="flex-1 bg-background/10 border border-background/20 px-5 py-4 text-background placeholder:text-background/40 focus:outline-none focus:border-accent transition" />
            <button className="bg-accent text-accent-foreground px-7 py-4 text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition">
              Recevoir le catalogue
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/70 border-t border-background/10 py-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-sm bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground leading-none">M</span>
            </div>
            <span className="font-display text-lg text-background">Malagasy an'art</span>
          </div>
          <div className="text-xs">© 2026 Malagasy an'art — Antananarivo, Madagascar · Tous droits réservés.</div>
          <div className="flex gap-6 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">Pinterest</a>
            <a href="#" className="hover:text-accent">B2B</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
