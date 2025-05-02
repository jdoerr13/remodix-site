// Remodix Landing Page Layout with Sticky Header and Hero

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// const projectData = [
//   { id: 1, label: 'Master Bath', before: '/images/before1.jpg', after: '/images/after1.jpg' },
//   { id: 2, label: 'Shower Remodel', before: '/images/before2.jpg', after: '/images/after2.jpg' },
//   { id: 3, label: 'Master Kitchen', before: '/images/before3.jpg', after: '/images/after3.jpg' },
//   { id: 4, label: 'Custom Islands', before: '/images/before4.jpg', after: '/images/after4.jpg' },
//   { id: 5, label: 'Beverage Bars', before: '/images/before5.jpg', after: '/images/after5.jpg' },
//   { id: 6, label: 'Custom Closets', before: '/images/before6.jpg', after: '/images/after6.jpg' }
// ];

const projectData = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    label: `Project ${i + 1}`,
    before: `/images/before${i + 1}.jpg`,
    after: `/images/after${i + 1}.jpg`
  }));
  
export default function HomePage() {
  const [visibleImages, setVisibleImages] = useState<{ [key: number]: 'before' | 'after' }>(() =>
    Object.fromEntries(projectData.map((p) => [p.id, 'before']))
  );

  const toggleImage = (id: number) => {
    setVisibleImages((prev) => ({
      ...prev,
      [id]: prev[id] === 'before' ? 'after' : 'before',
    }));
  };

  return (
    <div className="font-brand text-gray-800 bg-gradient-to-b from-gray-100 to-purple-200 min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3">
            <h1 className="text-2xl font-bold tracking-wide text-purple-700">REMODIX</h1>
                <nav className="flex gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-gray-700">
            <Link href="#home" className="hover:underline">Home</Link>
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#services" className="hover:underline">Services</Link>
            <Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
            </nav>
        </div>
    </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[80vh] flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40"
        style={{
            backgroundImage: "url('/images/hero-background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >


        {/* Spinning Logos */}
        <div className="fixed top-24 right-4 z-50 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] animate-spin-y-slow">
          <Image src="/images/logo2.png" alt="Remodix Spinning Logo" width={100} height={100} className="rounded-full" priority />
        </div>
                {/* Floating Contact Button */}
                <div className="fixed top-[200px] right-4 z-50">
                    <a
                        href="#contact"
                        className="bg-white/60 text-purple-800 px-4 py-2 rounded-full shadow-md backdrop-blur-md hover:bg-white/80 transition text-sm sm:text-base font-semibold border border-purple-300"
                    > Contact Us
                    </a>
                </div>

        <div className="fixed top-24 left-4 z-50 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] animate-spin-y-slow">
          <Image src="/images/logo2.png" alt="Remodix Spinning Logo" width={100} height={100} className="rounded-full" priority />
        </div>


        <div className="bg-black bg-opacity-50 p-6 sm:p-8 rounded-xl">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Elevate Your Space with Remodix</h2>
          <p className="text-md sm:text-xl mb-6 max-w-xl mx-auto">
            South Florida’s premier remodeling and renovation experts.
          </p>
          <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 sm:px-6 text-white rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition">
            Request a Free Consultation
          </a>
        </div>
      </section>



         {/* About & Services Section with Background */}
         <section className="bg-fixed bg-center bg-cover py-16 sm:py-20 px-4 sm:px-6" style={{ backgroundImage: "url('/images/south-florida.jpg')" }}>
        <div id="about" className="py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center scroll-mt-28">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.9)]">About Us</h3>
          <p className="text-lg sm:text-xl text-purple-900 font-medium leading-relaxed max-w-3xl mx-auto bg-white/70 px-4 py-3 rounded-xl shadow-md">
            Remodix combines design expertise with premium craftsmanship to deliver kitchens, bathrooms, and living spaces that reflect your unique style and needs.
          </p>
        </div>

        <div id="services" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-28">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.9)]">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-purple-700">Kitchen Remodeling</h4>
              <p className="text-gray-700">Transform your kitchen into a functional, stylish centerpiece for your home.</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-purple-700">Bathroom Renovation</h4>
              <p className="text-gray-700">Luxurious, spa-inspired designs that upgrade your daily routine.</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-purple-700">Custom Carpentry</h4>
              <p className="text-gray-700">Bespoke storage, shelving, and built-ins that fit your space and style.</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-purple-700">Flooring Renovation</h4>
              <p className="text-gray-700">High-quality flooring solutions from tile to luxury vinyl, expertly installed to elevate your space.</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-purple-700">Painting & Drywall Repair</h4>
              <p className="text-gray-700">Smooth finishes, precision lines, and vibrant colors to complete your remodel beautifully.</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow text-center">
              <h4 className="text-xl font-semibold mb-2 text-purple-700">Outdoor Living Spaces</h4>
              <p className="text-gray-700">Design and build inviting outdoor areas including patios, pergolas, and stylish lanais for year-round enjoyment.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section with Image Toggle */}
      <section id="projects" className="py-20 px-6 text-center">
      <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Click to Reveal the Remodix Transformation</h3>
        <p className="text-2xl text-center text-gray-500 mb-10">
          Real homes. Real results. Click any photo to see the after.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              onClick={() => toggleImage(project.id)}
            >
              <div className="w-full aspect-square relative">
                <Image
                  src={
                    visibleImages[project.id] === 'before'
                      ? project.before
                      : project.after
                  }
                  alt={`${project.label} ${visibleImages[project.id]}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold mb-1">{project.label}</p>
                <p className="text-sm text-gray-500">
                  {visibleImages[project.id] === 'before' ? 'Before' : 'After'} – Click to toggle
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    {/* Contact Form */}
    <section id="contact" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h3>
        <p className="text-gray-600 mb-4">Let’s bring your vision to life. Reach out to get started today!</p>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10 mb-10">
          {/* Custom Design - Left Side */}
          <div className="flex flex-col items-center text-center">
            <Image src="/images/custom-design.png" 
            alt="Custom Design" 
            width={180} 
            height={180} 
            className="rounded-xl shadow-2xl" />
            <p className="text-lg text-gray-800 font-semibold mt-2 italic">Custom Design</p>
          </div>

          {/* Contact Form - Center */}
          <form
            action="https://formspree.io/f/xeoankzg"
            method="POST"
            className="space-y-5 text-left max-w-md w-full"
          >
            <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded-xl" required />
            <input type="tel" name="phone" placeholder="Your Phone Number" className="w-full border p-3 rounded-xl" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full border p-3 rounded-xl" required />
            <textarea name="message" placeholder="Tell us about your vision..." rows={4} className="w-full border p-3 rounded-xl" required></textarea>
            <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
              Send Inquiry
            </button>
          </form>

          {/* Permitting & Licensed - Right Side */}
          <div className="flex flex-col items-center text-center">
            <Image src="/images/contractor-badge.png" alt="Permitting and Licensed" width={180} height={180} className="rounded-xl shadow-2xl" />
            <p className="text-lg text-gray-800 font-semibold mt-2 italic">Permitting & Licensed</p>
          </div>
        </div>

        <div className="mb-4 text-lg font-semibold text-purple-700">
            Call us now: <a href="tel:3058907637" className="underline hover:text-purple-900">305-890-7637</a><br />
            Email us: <a href="mailto:info@remodixfl.com" className="underline hover:text-purple-900">info@remodixfl.com</a>
        </div>
      </section>
    </div>
  );
}