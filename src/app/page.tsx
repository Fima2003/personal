"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code, Coffee, Heart, Wheat, Mail, MapPin, Terminal, Youtube, Link as LinkIcon, X } from "lucide-react";

export default function Home() {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <main className="snap-container bg-white text-black font-sans selection:bg-black selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yukhym (Fima) Rubin",
            "url": "https://fimarubin.com",
            "image": "https://fimarubin.com/images/fima_profile.webp",
            "jobTitle": "Engineer, Robotics & AI",
            "sameAs": [
              "https://www.linkedin.com/in/yukhym-rubin/",
              "https://github.com/Fima2003"
            ],
            "knowsAbout": ["Software Engineering", "Robotics", "AI", "Machine Learning", "CAD"]
          })
        }}
      />

      {/* SECTION 1: HERO / WHO AM I */}
      <header id="about" className="snap-section section-padding bg-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div variants={fadeInUp} className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black grayscale transition-all duration-700 hover:grayscale-0">
              <Image 
                src="/images/fima_profile.webp" 
                alt="Yukhym (Fima) Rubin" 
                fill
                sizes="(max-width: 768px) 16rem, 20rem"
                className="object-cover"
                priority // Keep hero image priority for LCP
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="w-full md:w-2/3 space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
                Yukhym <br className="hidden md:block"/> Rubin
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-500 font-bold uppercase tracking-widest pl-1 border-black">
                Engineer | Software | Robotics | CAD | AI
              </h2>
            </div>
            <p className="text-lg text-gray-800 leading-relaxed max-w-2xl font-medium">
              I have a curious mind and an innovative, solution-driven personality. 
              Whether I'm writing code, designing robots, or building AI systems, 
              I love breaking and rebuilding stuff. 
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6 font-mono uppercase text-sm font-bold tracking-tight">
              <span className="flex items-center gap-2 border-2 border-black px-6 py-3">
                <Coffee size={18} /> 3 Cups of Coffee/Day
              </span>
              <span className="flex items-center gap-2 border-2 border-black px-6 py-3 bg-black text-white">
                <Wheat size={18}/> Cereal first, then milk.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* SECTION 2: MASCOT SPOTLIGHT */}
      <aside id="mascot" className="snap-section section-padding bg-black text-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-16"
        >
          <motion.div variants={fadeInUp} className="w-full md:w-1/2 relative aspect-square border-4 border-white overflow-hidden">
             <Image 
               src="/images/lizzy_mascot.webp" 
               alt="Lizzy the Dog" 
               fill 
               sizes="(max-width: 768px) 100vw, 50vw"
               loading="lazy"
               className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
             />
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full md:w-1/2 space-y-8 text-center md:text-left">
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Meet<br/>Lizzy.</h2>
             <p className="text-2xl text-gray-300 font-serif italic">
               Named after Queen Elizabeth.<br/>(And truly the queen of the house). 
             </p>
             <div className="inline-block p-6 border-2 border-white font-mono uppercase text-lg tracking-widest bg-white text-black font-bold">
               Status: INSANELY smart.
             </div>
          </motion.div>
        </motion.div>
      </aside>

      {/* SECTION 3: PROFESSIONAL JOURNEY */}
      <section id="experience" className="snap-section section-padding bg-white text-black relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="w-full max-w-7xl flex flex-col gap-12"
        >
          <motion.div variants={fadeInUp} className="flex justify-between items-end border-b-8 border-black pb-4">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Journey</h2>
            <span className="text-2xl font-mono hidden md:block border-2 border-black px-4 py-2 bg-black text-white font-bold">03.</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-4 border-black bg-white">
            {[
              { role: "Robotics R&D Engineer", company: "Ruby.AI", current: true, desc: "Spearheading R&D in robotics and AI.", url: "https://rubyai.me", details: "Project Name: Ruby.AI\nMy Position: Robotics R&D Engineer\nWhat I have done:\n[Write an extended description of your accomplishments here...]" },
              { role: "Software Engineer", company: "Telesens", current: false, desc: "Developed scalable software solutions.", url: "https://telesens.ua", details: "Project Name: Telesens\nMy Position: Software Engineer\nWhat I have done:\n[Write an extended description of your accomplishments here...]" },
              { role: "SE Intern", company: "CloudWorks", current: false, desc: "Foundational cloud infrastructure.", url: "https://cloudwk.com", details: "Project Name: CloudWorks\nMy Position: SE Intern\nWhat I have done:\n[Write an extended description of your accomplishments here...]" },
              { role: "Founder", company: "Music Startup", current: false, desc: "'Tinder for musicians' collaboration platform.", url: "", details: "Project Name: Music Startup\nMy Position: Founder\nWhat I have done:\n[Write an extended description of your accomplishments here...]" }
            ].map((job, i) => (
              <motion.article
                key={i} 
                variants={fadeInUp}
                onClick={() => setSelectedJob(job)}
                className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-between last:border-r-0 hover:bg-black hover:text-white transition-colors group cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start mb-6 gap-2">
                    <span className="font-mono text-sm uppercase tracking-widest font-bold">
                      {job.current ? "[CURRENT]" : `[PAST 0${i}]`}
                    </span>
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <LinkIcon size={18} />
                      </a>
                    ) : (
                      <LinkIcon size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-2 leading-tight group-hover:underline">{job.role}</h3>
                  <p className="text-lg font-serif italic mb-6">{job.company}</p>
                  <p className="text-sm border-t-2 border-current pt-4 font-mono leading-relaxed">{job.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: HORIZONTAL ARSENAL */}
      <section id="projects" className="snap-section section-padding bg-black text-white relative overflow-hidden flex flex-col justify-center items-start">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="w-full flex justify-between items-end border-b-8 border-white pb-4 px-8 md:px-16 mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter w-fit">The Arsenal</motion.h2>
          <motion.span variants={fadeInUp} className="text-2xl font-mono hidden md:block bg-white text-black px-4 py-2 font-bold select-none border-2 border-white">04. SCROLL →</motion.span>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex overflow-x-auto gap-8 snap-x snap-mandatory hide-scrollbar pb-8 px-8 md:px-16 w-full pr-16 shadow-[inset_-50px_0_50px_-50px_rgba(255,255,255,0.4)]">
          {[
            { title: "Flappy Bird AI", desc: "An AI model trained to play Flappy Bird autonomously using neat algorithms.", img: "/images/project_flappy_bird.webp", url: "https://flappy-bird.fimarubin.com/" },
            { title: "Mom Protocol", desc: "A custom resilient website built for my mom to easily track my sickness status.", img: "/images/project_mom_protocol.webp", url: "https://mom-protocol.fimarubin.com" },
            { title: "Anti-Spam Bot", desc: "Automatically detects and blocks spam/scam. 99% accuracy (700 correct blocks, 1 incorrect).", img: "/images/project_bot.webp", url: "https://t.me/yun_israel_bot" }
          ].map((project, i) => (
            <article key={i} className="shrink-0 w-[90vw] md:w-[70vw] snap-center flex flex-col md:flex-row border-4 border-white bg-black">
              <div className="flex-1 flex flex-col justify-center p-8 md:p-12 order-2 md:order-1 border-t-4 md:border-t-0 md:border-r-4 border-white">
                <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight">{project.title}</h3>
                <p className="text-xl md:text-2xl text-gray-400 font-serif mb-12 leading-relaxed">{project.desc}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-3 border-2 border-white bg-white text-black px-8 py-4 uppercase font-mono font-bold hover:bg-black hover:text-white transition-colors cursor-pointer w-fit shadow-[8px_8px_0_rgba(255,255,255,0.3)] hover:shadow-none translate-y-[-4px] hover:translate-y-0 duration-200">
                  <Code size={24} /> View Source
                </a>
              </div>
              <div className="flex-1 relative min-h-[300px] md:min-h-[500px] grayscale hover:grayscale-0 transition-all duration-700 order-1 md:order-2 bg-white border-b-4 md:border-b-0 border-white">
                <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 90vw, 35vw" loading="lazy" className="object-cover" />
              </div>
            </article>
          ))}
        </motion.div>
      </section>

      {/* SECTION 5: FIMA'S PASTA */}
      <aside id="chef" className="snap-section section-padding bg-black text-white relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-16"
        >
          <motion.div variants={fadeInUp} className="w-full md:w-1/2 space-y-8 text-center md:text-left order-2 md:order-1">
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Fima's<br/>Pasta.</h2>
             <p className="text-2xl text-gray-300 font-serif italic">
               World-known chef. <br/> Master of the Carbonara.
             </p>
             <div className="inline-block p-6 border-2 border-white font-mono uppercase text-lg tracking-widest bg-white text-black font-bold">
               Michelin Star Pending.
             </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full md:w-1/2 relative aspect-square border-4 border-white grayscale order-1 md:order-2">
             <Image 
               src="/images/pasta_carbonara.webp" 
               alt="Fima's Famous Pasta Carbonara" 
               fill 
               sizes="(max-width: 768px) 100vw, 50vw"
               loading="lazy"
               className="object-cover hover:scale-105 transition-transform duration-700 hover:grayscale-0"
             />
          </motion.div>
        </motion.div>
      </aside>

      {/* SECTION 6: HORIZONTAL HOBBIES */}
      <section id="hobbies" className="snap-section section-padding bg-white text-black relative overflow-hidden flex flex-col justify-center items-start">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="w-full flex justify-between items-end border-b-8 border-black pb-4 px-8 md:px-16 mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter w-fit">Off The Clock</motion.h2>
          <motion.span variants={fadeInUp} className="text-2xl font-mono hidden md:block bg-black text-white px-4 py-2 font-bold select-none border-2 border-black">06. SCROLL →</motion.span>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex overflow-x-auto overflow-y-hidden gap-8 snap-x snap-mandatory hide-scrollbar pb-8 px-8 md:px-16 w-full pr-16">
          {[
            { title: "Grandma's Borsch", type: "Food", desc: "A hot, vibrant bowl of tradition.", img: "/images/hobby_borsch.webp", icon: <Heart size={20}/> },
            { title: "The Dark Knight", type: "Movie", desc: "A cinematic masterpiece.", img: "/images/hobby_movie.webp", icon: <Youtube size={20}/> },
            { title: "Playing Piano", type: "Hobby", desc: "Making keys dance.", video: "/videos/piano.mp4", icon: <span className="text-xl">🎹</span> },
            { title: "Reading Books", type: "Hobby", desc: "Ink on paper narratives.", img: "/images/hobby_books.webp", icon: <span className="text-xl">📚</span> },
            { title: "Tech Destruction", type: "Passion", desc: "Breaking & rebuilding stuff.", img: "/images/hobby_rebuild.webp", icon: <Terminal size={20}/> }
          ].map((hobby: any, i) => (
            <article 
              key={i} 
              className="shrink-0 w-min max-w-[85vw] snap-center flex flex-col border-4 border-black bg-white group cursor-crosshair h-[60vh] md:h-[600px]"
              onClick={() => {
                if (hobby.video) {
                  setSelectedVideo(hobby.video);
                }
              }}
            >
              <div 
                className="relative border-b-4 border-black grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden shrink-0"
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.play();
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }}
              >
                {hobby.video ? (
                  <video 
                    src={hobby.video}
                    muted
                    loop
                    playsInline
                    className="h-[250px] md:h-[350px] w-auto min-w-[260px] object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                ) : (
                  <img src={hobby.img} loading="lazy" decoding="async" className="h-[250px] md:h-[350px] w-auto min-w-[260px] object-cover group-hover:scale-105 transition-transform duration-700" alt={hobby.title}/>
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest font-bold mb-4 bg-black text-white px-3 py-1 w-fit whitespace-nowrap">
                    {hobby.icon} {hobby.type}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 tracking-tight">{hobby.title}</h3>
                </div>
                <p className="text-lg md:text-xl font-serif text-gray-700 border-l-4 border-black pl-4 my-2 md:my-4">{hobby.desc}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </section>

      {/* SECTION 7: CONNECT */}
      <footer id="contact" className="snap-section section-padding bg-black text-white flex flex-col items-center justify-center text-center relative selection:bg-white selection:text-black">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="w-24 h-24 bg-white text-black rounded-none flex items-center justify-center text-5xl font-black mx-auto mb-8 border-4 border-black outline outline-2 outline-white">
            in
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 bg-clip-text text-white">Let's Connect</motion.h2>
          <motion.p variants={fadeInUp} className="text-2xl font-serif text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            I share my engineering journey, AI projects, and robotics insights with the world on LinkedIn. 
          </motion.p>
          <motion.a variants={fadeInUp} href="https://www.linkedin.com/in/yukhym-rubin/" target="_blank" rel="noopener noreferrer" className="inline-block border-4 border-white px-12 py-6 text-3xl font-black uppercase bg-transparent text-white hover:bg-white hover:text-black transition-colors shadow-[12px_12px_0_rgba(255,255,255,0.4)] hover:shadow-none hover:translate-x-3 hover:translate-y-3 duration-200">
            Go to LinkedIn
          </motion.a>
        </motion.div>
      </footer>
      
      {/* JOB MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" 
            onClick={() => setSelectedJob(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white text-black p-8 md:p-12 max-w-2xl w-full border-4 border-black relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 p-2 hover:bg-black hover:text-white transition-colors border-2 border-transparent hover:border-black"
                onClick={() => setSelectedJob(null)}
              >
                <X size={24} />
              </button>
              <div className="mb-8 pr-12">
                <h3 className="text-4xl font-black uppercase mb-2 tracking-tight">{selectedJob.company}</h3>
                {selectedJob.url && (
                  <a href={selectedJob.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline mb-4 inline-block flex items-center gap-1">
                    <LinkIcon size={16} /> Visit Website
                  </a>
                )}
              </div>
              <div className="border-t-4 border-black pt-8 whitespace-pre-line font-serif text-lg leading-relaxed text-gray-800">
                {selectedJob.details}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] flex items-center justify-center bg-black/90 p-4" 
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video border-4 border-white bg-black flex items-center justify-center p-1"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={32} />
              </button>
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
