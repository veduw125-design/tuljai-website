import React from 'react';

const SITE = {
  name: "Tuljai Lawns & Lodging",
  tagline: "Celebrate in Style, Stay in Comfort",
  whatsapp: "8080647081",
  owner: "Suyash Gore",
  location: "3CXF+4XV, Bagal Nagar, Kurduvadi, Maharashtra 413208"
};

const Header = () => (
  <nav className="topnav">
    <div className="brand-wrap">
      <img src="/images/owner.jpg" alt="Owner" />
      <div className="brand">Tuljai Lawns & Lodging</div>
    </div>
    <div className="links">
      <a href="#gallery">Gallery</a>
      <a href="#booking">Booking</a>
      <a href="#contact">Contact</a>
      <a className="cta" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <h1>Tuljai Lawns & Banquets</h1>
      <p>Where every celebration becomes unforgettable</p>
      <a href="#booking" className="btn">Book Now</a>
      <a href="#gallery" className="btn">View Gallery</a>
    </div>
  </section>
);

const Gallery = () => {
  const images = [
    "/images/gallery1.png",
    "/images/gallery2.png"
  ].filter(Boolean);
  return (
    <section id="gallery" style={{background:'#fff'}}>
      <div className="container">
        <h2 style={{color:'#7b1113'}}>Gallery</h2>
        <div className="grid gallery" style={{marginTop:18}}>
          {images.map((src, i)=> <img key={i} src={src} alt={`Gallery ${i+1}`} />)}
        </div>
      </div>
    </section>
  );
};

const Booking = () => (
  <section id="booking" style={{background:'#fff7ef'}}>
    <div className="container">
      <h2 style={{color:'#7b1113'}}>Quick Booking</h2>
      <p>Send us your details and we'll confirm on WhatsApp.</p>
      <form className="form" onSubmit={(e)=>e.preventDefault()} style={{marginTop:14, maxWidth:520, marginLeft:'auto', marginRight:'auto'}}>
        <input placeholder="Your Name" style={{marginBottom:10}} />
        <input type="email" placeholder="Email" style={{marginBottom:10}} />
        <input type="date" placeholder="Event / Check-in Date" style={{marginBottom:10}} />
        <textarea rows="4" placeholder="Message / Details" style={{marginBottom:12}} />
        <button onClick={()=>window.open('https://wa.me/8080647081','_blank')}>Send on WhatsApp</button>
      </form>
    </div>
  </section>
);

const Contact = () => {
  const map = "https://www.google.com/maps?q=18.0991356,75.4247126&z=17&output=embed";
  return (
    <section id="contact" style={{background:'#fff'}}>
      <div className="container" style={{textAlign:'center'}}>
        <h2 style={{color:'#7b1113'}}>Contact Us</h2>
        <div className="owner-card">
          <img src="/images/owner.jpg" alt="Owner" />
          <div>
            <h3 style={{margin:'6px 0 4px'}}>{SITE.owner}</h3>
            <p style={{margin:'4px 0'}}>💬 <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">Chat on WhatsApp: +91 {SITE.whatsapp}</a></p>
            <p style={{margin:'4px 0'}}>📍 {SITE.location}</p>
          </div>
        </div>
        <div className="map" style={{marginTop:18}}>
          <iframe title="Location" src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()} Tuljai Lawns & Lodging • Kurduvadi, Maharashtra
  </footer>
);

export default function App(){
  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}
