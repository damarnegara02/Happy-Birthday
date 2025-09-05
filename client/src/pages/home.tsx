import { Heart, Sparkles, Star } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Home() {
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; emoji: string; left: string; delay: number }>>([]);

  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      emoji: ['💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫','💕', '✨', '💖', '🌟', '💝', '🌙', '⭐', '💫'][i],
      left: `${Math.random() * 90 + 5}%`,
      delay: Math.random() * 3
    }));
    setFloatingElements(elements);
  }, []);

  const createLoveExplosion = (e: React.MouseEvent) => {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💝', '❤️', '💗', '💓'][Math.floor(Math.random() * 6)];
        heart.style.position = 'fixed';
        heart.style.left = (e.clientX + Math.random() * 100 - 50) + 'px';
        heart.style.top = (e.clientY + Math.random() * 100 - 50) + 'px';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heart.style.zIndex = '1003';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'love-pulse 1.5s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
          heart.remove();
        }, 1500);
      }, i * 100);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 animate-page-enter relative overflow-hidden">
      {/* Floating romantic elements */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float text-2xl opacity-70 animate-twinkle"
            style={{
              left: element.left,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${element.delay}s`
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative mb-8">
          <div className="animate-bounce">
            <Heart className="text-6xl text-primary animate-love-pulse mx-auto w-16 h-16 animate-romantic-glow" data-testid="heart-main" />
          </div>
          <Sparkles className="absolute -top-4 -right-4 text-yellow-400 animate-twinkle w-8 h-8" />
          <Star className="absolute -bottom-2 -left-6 text-purple-400 animate-wiggle w-6 h-6" />
        </div>
        
        <h1 className="romantic-font text-6xl md:text-8xl font-bold gradient-text mb-6 animate-fadeIn hover:animate-wiggle cursor-default">
          Happy Birthday Sayangku
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fadeIn hover:text-primary transition-colors duration-500" 
          style={{ animationDelay: '0.3s' }}
        >
          Selamat Ulang Tahun ke 20 Sayang, Semoga Panjang umur dan Sehat Selalu ✨
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" 
          style={{ animationDelay: '0.6s' }}
        >
          <Link
            href="/memories"
            className="px-8 py-4 bg-gradient-to-r from-primary to-pink-500 text-primary-foreground rounded-full text-lg font-medium romantic-hover inline-flex items-center justify-center gap-3 shadow-lg animate-romantic-glow"
            data-testid="button-memories"
            onClick={(e) => createLoveExplosion(e)}
          >
            <Heart className="w-5 h-5 animate-heartbeat" />
            Lihat Kenangan Kita
            <Sparkles className="w-4 h-4 animate-twinkle" />
          </Link>
          
          <Link
            href="/letter"
            className="px-8 py-4 bg-gradient-to-r from-secondary to-purple-500 text-secondary-foreground rounded-full text-lg font-medium romantic-hover inline-flex items-center justify-center gap-3 shadow-lg animate-romantic-glow"
            data-testid="button-letter"
            onClick={(e) => createLoveExplosion(e)}
            style={{ animationDelay: '0.2s' }}
          >
            <Heart className="w-5 h-5 animate-heartbeat" />
            Baca Suratku
            <Star className="w-4 h-4 animate-wiggle" />
          </Link>
        </div>

        {/* Romantic quote */}
        <div 
          className="mt-12 animate-fadeIn"
          style={{ animationDelay: '1s' }}
        >
          <p className="romantic-font text-2xl text-primary/70 italic hover:text-primary transition-colors duration-500 cursor-default">
            " Kamu adalah cinta pertamaku dan ku harap menjadi yang pertama dan selamanya bersama" 💕
          </p>
        </div>
      </div>
    </div>
  );
}
