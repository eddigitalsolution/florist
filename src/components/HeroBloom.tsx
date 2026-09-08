import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, ArrowUpRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

interface HeroBloomProps {
  onExploreCollection: () => void;
  onOpenCustomBouquet: () => void;
}

export const HeroBloom: React.FC<HeroBloomProps> = ({
  onExploreCollection,
  onOpenCustomBouquet,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const [soundActive, setSoundActive] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userMutedRef = useRef<boolean>(false);

  useEffect(() => {
    // Initialize audio element with public/audio/atlasaudio-love-522433.mp3
    const audio = new Audio('/audio/atlasaudio-love-522433.mp3');
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    // Automatic playback trigger when clicking any button on the site
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.closest('button') || target.closest('a'))) {
        if (!userMutedRef.current && audioRef.current && audioRef.current.paused) {
          audioRef.current.play().then(() => {
            setSoundActive(true);
          }).catch((err) => {
            console.warn('Autoplay on click blocked', err);
          });
        }
      }
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline entrance
      gsap.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.6,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;

    if (soundActive) {
      audioRef.current.pause();
      setSoundActive(false);
      userMutedRef.current = true;
    } else {
      audioRef.current.play().then(() => {
        setSoundActive(true);
        userMutedRef.current = false;
      }).catch((err) => {
        console.warn('Audio play error', err);
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] w-full bg-obsidian flex flex-col justify-between overflow-hidden pt-8 pb-16 px-6 md:px-12"
      aria-label="Hero - Haute Botanical Sculpture"
    >
      {/* Background Hero Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen pointer-events-none z-0"
      >
        <source src="/video/hero_section.mp4" type="video/mp4" />
      </video>

      {/* Background Vignette & Radial Light Mask */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(107,29,47,0.18)_0%,rgba(12,11,10,0.85)_55%,#0C0B0A_100%)] z-0"></div>

      {/* Top Editorial Meta Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2D2723]/60 pb-4 text-[10px] tracking-[0.25em] text-gold uppercase">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold"></span>
          <span>SPECIMEN N° 088 / PAEONIA GRANDIFLORA</span>
        </div>
        <div className="flex items-center gap-6 text-parchment/70">
          <span>KUALA LUMPUR ATELIER</span>
          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 hover:text-gold transition-colors focus:outline-none"
            aria-label={soundActive ? "Mute Botanical Ambiance" : "Play Botanical Ambiance"}
          >
            {soundActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-gold" />
                <span className="text-gold">SOUND ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>SOUND OFF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Center Interactive Showcase */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-10">

        {/* Hero Concept & Editorial Typography */}
        <div className="text-center max-w-4xl mx-auto mt-6">
          <p className="text-xs sm:text-sm tracking-[0.35em] text-gold uppercase font-light mb-3">
            Haute Couture Floral Atelier &bull; Archival Editions
          </p>
          <h1
            ref={headlineRef}
            className="font-editorial-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] text-parchment leading-[1.05] uppercase font-normal"
          >
            Flowers Worth <br />
            <span className="font-editorial-serif italic font-light lowercase text-[#DFC79E]">
              remembering.
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-parchment/70 font-light mt-5 leading-relaxed tracking-wide">
            Sculptural botanical arrangements created without synthetic floral foam.
            Rare Kyoto tree peonies, Grasse garden roses, and architectural stems curated for moments of quiet transcendence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={onExploreCollection}
              className="w-full sm:w-auto bg-parchment hover:bg-gold text-obsidian px-8 py-3.5 text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Explore Collection</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={onOpenCustomBouquet}
              className="w-full sm:w-auto border border-parchment/30 hover:border-gold text-parchment hover:text-gold px-8 py-3.5 text-xs tracking-[0.22em] uppercase font-medium transition-all duration-300"
            >
              Design Custom Bouquet
            </button>
          </div>
        </div>
      </div>

      {/* Signature Interaction Status & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-[#2D2723]/40 text-[10px] tracking-[0.2em] text-parchment/50 uppercase">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
          <span>CINEMATIC BOTANICAL EXPERIENCE &bull; HAUTE ATELIER</span>
        </div>
        <div className="flex items-center gap-2 text-gold">
          <span className="hidden sm:inline">EXPLORE ATELIER</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
