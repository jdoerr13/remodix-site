import { useState } from 'react';
import Image from 'next/image';

const projectData = [
  { id: 1, label: 'Master Bath', before: '/images/before1.jpg', after: '/images/after1.jpg' },
  { id: 2, label: 'Shower Remodel', before: '/images/before2.jpg', after: '/images/after2.jpg' },
  { id: 3, label: 'Master Kitchen', before: '/images/before3.jpg', after: '/images/after3.jpg' },
  { id: 4, label: 'Custom Islands', before: '/images/before4.jpg', after: '/images/after4.jpg' },
  { id: 5, label: 'Beverage Bars', before: '/images/before5.jpg', after: '/images/after5.jpg' },
  { id: 6, label: 'Custom Closets', before: '/images/before6.jpg', after: '/images/after6.jpg' }
];

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
    <>
      <div className="w-full min-h-screen px-6 py-12 font-brand text-gray-800 bg-gradient-to-r from-gray-100 to-purple-200">
        {/* Top Section with Badges and Centered Logo */}
        <div className="w-full flex justify-between items-start px-6 pb-10">
          {/* Custom Design - Left Side */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/custom-design.png"
              alt="Custom Design"
              width={180}
              height={180}
              className="rounded-xl shadow-2xl"
            />
            <p className="text-lg text-gray-800 font-semibold mt-2 italic">Custom Design</p>
          </div>

          {/* Logo and Branding - Center */}
          <div className="flex flex-col items-center text-center max-w-2xl">
            {/* Logo Glow Wrapper */}
            <div className="p-2 bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-600 rounded-full shadow-xl" style={{ perspective: '1000px' }}>
                <div className="w-[260px] h-[260px] animate-flip-logo">
                    <Image
                    src="/images/logo2.png"
                    alt="Remodix Icon"
                    width={260}
                    height={260}
                    className="rounded-full"
                    priority
                    />
                </div>
                </div>

            {/* Brand Text */}
            <h1 className="text-6xl font-brand tracking-[0.25em] uppercase bg-gradient-to-r from-purple-700 via-pink-500 to-purple-700 text-transparent bg-clip-text drop-shadow-md mt-6">
  REMODIX
</h1>

            {/* Description */}
            <p className="text-3xl sm:text-4xl mt-6 text-gray-800 font-bold leading-relaxed text-center">
  <span className="whitespace-nowrap">
    South Florida’s premier remodeling and renovation experts.
  </span>
</p>
<p className="text-2xl sm:text-3xl mt-2 text-gray-700 leading-relaxed text-center">
  <span className="italic text-purple-700 font-semibold">
    Custom
  </span>{' '}
  kitchens, luxury bathrooms, and transformative designs that turn your vision into reality.
</p>


            <a
              href="#inquiry"
              className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Request Your Free Consultation
            </a>
          </div>

          {/* Permitting & Licensed - Right Side */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/contractor-badge.png"
              alt="Permitting and Licensed"
              width={180}
              height={180}
              className="rounded-xl shadow-2xl"
            />
            <p className="text-lg text-gray-800 font-semibold mt-2 italic">Permitting & Licensed</p>
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-2 text-center text-gray-700">
          Click to Reveal the Remodix Transformation
        </h2>
        <p className="text-md text-center text-gray-500 mb-10">
          Real homes. Real results. Tap any photo to see the after.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              onClick={() => toggleImage(project.id)}
            >
              <Image
                src={
                  visibleImages[project.id] === 'before'
                    ? project.before
                    : project.after
                }
                alt={`${project.label} ${visibleImages[project.id]}`}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover"
              />
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
      <section
        id="inquiry"
        className="bg-white shadow-xl rounded-3xl p-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Let’s Talk About Your Project</h2>
        <form
          action="https://formspree.io/f/xeoankzg"
          method="POST"
          className="space-y-5 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 rounded-xl"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="w-full border p-3 rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-xl"
            required
          />
          <textarea
            name="message"
            placeholder="Tell us about your vision..."
            rows={4}
            className="w-full border p-3 rounded-xl"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Send Inquiry
          </button>
        </form>
      </section>
    </>
  );
}
