const products = [
  { img: "images/product-carte.jpg", name: "Carte de Madagascar", region: "Antananarivo", price: "Dès 189 €", tag: "Édition signature", desc: "Carte sculptée à la main en bois de palissandre, ponctuée de repères en laiton.", num: "01" },
  { img: "images/product-baobab.jpg", name: "Baobab Sacré", region: "Morondava", price: "Dès 145 €", tag: "Nouveauté", desc: "Silhouette du baobab — emblème de l'Ouest malgache — découpée dans le bois de rose.", num: "02" },
  { img: "images/product-lemur.jpg", name: "Biodiversité Lémurien", region: "Andasibe", price: "Dès 320 €", tag: "Pièce unique", desc: "Bas-relief sculpté célébrant les forêts primaires et leurs gardiens endémiques.", num: "03" },
  { img: "images/product-motifs.jpg", name: "Motif Antemoro", region: "Sud-Est", price: "Dès 220 €", tag: "Tradition", desc: "Panneau géométrique inspiré des manuscrits sorabe et de l'art Sakalava.", num: "04" },
];

const segments = [
  { icon: "globe-2", title: "Voyageurs premium", text: "Un souvenir qui transcende l'objet : une œuvre, une mémoire." },
  { icon: "trees", title: "Hôtels & Lodges", text: "Habillez vos espaces d'une identité culturelle forte et locale." },
  { icon: "sparkles", title: "Collectionneurs", text: "Éditions limitées signées par les artistes malgaches contemporains." },
  { icon: "hammer", title: "Diaspora", text: "Gardez le lien avec la Grande Île, où que vous soyez dans le monde." },
];

const qrSteps = [
  ["01", "Rencontrez l'artiste", "Un mini-documentaire de 90 secondes tourné dans son atelier."],
  ["02", "Comprenez le motif", "Origine, symbolique et techniques transmises sur 5 générations."],
  ["03", "Explorez la région", "Paysages, sons et traditions qui ont inspiré l'œuvre."],
];

document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Navbar scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });
});
