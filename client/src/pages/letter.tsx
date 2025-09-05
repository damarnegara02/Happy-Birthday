import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Sparkles, Star } from "lucide-react";
import { Link } from "wouter";

export default function Letter() {
  const [isOpened, setIsOpened] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [glowEffect, setGlowEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowEffect(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const openLetter = () => {
    setIsOpened(true);
    setTimeout(() => {
      setShowMessage(true);
      createLoveExplosion();
    }, 800);
  };

  const createLoveExplosion = () => {
    // Create multiple waves of romantic elements
    for (let wave = 0; wave < 3; wave++) {
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          setTimeout(() => {
            const element = document.createElement('div');
            const emojis = ['❤️', '💕', '💖', '💝', '💗', '💓', '💘', '✨', '⭐', '🌟'];
            element.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            element.style.position = 'fixed';
            element.style.left = Math.random() * 100 + 'vw';
            element.style.top = '100vh';
            element.style.fontSize = Math.random() * 25 + 20 + 'px';
            element.style.zIndex = '1000';
            element.style.pointerEvents = 'none';
            element.style.animation = `float ${3 + Math.random() * 2}s ease-out forwards`;
            
            document.body.appendChild(element);
            
            setTimeout(() => {
              element.remove();
            }, 5000);
          }, i * 100);
        }
      }, wave * 800);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 animate-page-enter relative">
      {/* Romantic background elements */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <Sparkles className="absolute top-20 left-10 text-yellow-400 animate-twinkle w-6 h-6" />
        <Heart className="absolute top-40 right-20 text-pink-400 animate-heartbeat w-8 h-8" />
        <Star className="absolute bottom-32 left-20 text-purple-400 animate-wiggle w-5 h-5" />
        <Sparkles className="absolute bottom-20 right-10 text-yellow-400 animate-twinkle w-7 h-7" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="relative mb-8">
          <h1 className="romantic-font text-5xl md:text-6xl font-bold gradient-text mb-4 hover:animate-love-pulse cursor-default">
            Surat Cinta Untukmu
          </h1>
          <div className="absolute -top-4 -right-8">
            <Mail className="text-primary/40 animate-wiggle w-8 h-8" />
          </div>
        </div>
        
        <p className="text-xl text-muted-foreground mb-12 hover:text-primary transition-colors duration-500 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          Klik amplop di bawah untuk membaca surat spesial dariku 💌
        </p>

        {/* Enhanced Envelope Animation */}
        <div 
          className={`envelope mx-auto w-80 h-60 relative mb-8 cursor-pointer transition-all duration-500 hover:scale-110 ${
            isOpened ? 'opened' : 'romantic-hover'
          } ${glowEffect && !isOpened ? 'animate-romantic-glow' : ''}`}
          onClick={openLetter}
          data-testid="envelope"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary via-pink-500 to-secondary rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden">
            {/* Decorative elements on envelope */}
            <div className="absolute top-2 left-2">
              <Heart className="w-4 h-4 text-primary-foreground/60 animate-heartbeat" />
            </div>
            <div className="absolute bottom-2 right-2">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-twinkle" />
            </div>
            
            {/* Enhanced envelope flap */}
            <div className="envelope-flap absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-accent via-pink-400 to-primary rounded-t-lg border-b-2 border-primary-foreground/20 flex items-end justify-center pb-4 transition-all duration-500">
              <Heart className={`w-8 h-8 text-primary-foreground transition-all duration-300 ${!isOpened ? 'animate-love-pulse' : ''}`} />
            </div>
            
            {/* Main envelope content */}
            <div className="text-primary-foreground text-center relative z-10">
              <Mail className="w-16 h-16 mx-auto mb-2 animate-float" />
              <p className="romantic-font text-xl hover:scale-105 transition-transform duration-300">Untuk: Kamu ❤️</p>
              {!isOpened && (
                <div className="mt-2 flex justify-center space-x-1">
                  {['💕', '✨', '💖'].map((emoji, i) => (
                    <span 
                      key={i} 
                      className="animate-bounce text-lg"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Shimmer effect */}
            {!isOpened && (
              <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-slideIn"></div>
            )}
          </div>
        </div>

        {/* Love Message */}
        {showMessage && (
          <div className="animate-fadeIn" data-testid="love-message">
            <Card className="memory-card rounded-2xl mb-8">
              <CardContent className="p-8 text-left">
                <div className="text-center mb-6">
                  <p className="romantic-font text-3xl text-primary">Happy Birthday Sayang</p>
                  <p className="text-muted-foreground">Dari: Pacarmu Tercinta</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Sayang,</p>
                  
                  <p>aku ucapin selamat ulang tahun buat kmu, aku berharap kmu Panjang umur dan diberikan Kesehatan selalu, ku juga berharap semoga kmu diberikan rezeki yang melimpah dan bisa cepet lulus kuliah dan dapat kerjaan yang terbaik, semoga juga kmu diberikan kesabaran yang luas banget ngadepin pacarmu yang angin anginan ini hehe.</p>
                  
                  <p>Dari awal kita ketemu kmu udah ngubah banyak banget hal di dalam hidupku, kmu buat hidupku lebih berwarna, lebih terarah dan lebih banyak kenangan indah. Bersamamu ku udah ngejalanin banyak banget momen sukda dan duka yang udah kita lewatin bareng banreng.</p>
                  
                  <p>Ku harap kmu ga bakal berubah, kmu tetap dengan dirimu sendiri dengan dirimu seperti itu lah ku cinta kmu apa adanya ku suka kmu apa adanya, ku juga berharap kmu selalu ingat aklu ada di sampingmu, selama kmu masih sama aku ku bakal selalu ada, ku bakal jadi pendengar, penghibur, pacar dan apapun yang kmu pengenin. Ku harap kmu bakal selalu inget aklo akua da di sampingmu, jadi kalo kmu ada masalah kalo kmu ada apa apa, kmu harus ngomong sama aku yaa, jangan di pendam sendiri, itu ga baik. Kmu bilang ke aku kmu curhat ke aku, aku bakal dengerin. Mungkin ku ga bisa ngasi Solusi tapi ku bakal menajaadi pendengar terbaikmu.</p>
                  
                  <p>Udah 2 tahun lebih kita Bersama dan yaa, harapanku masih sama dan ga bakal berubah, mungkin mu udah bosen bvanget sama harapan ini, tapi ini Adalah harapanku terbesar. Ku harap kitab isa selalu bersama menjalani hubungan suka dan duka, semoga kita dikuatkan dan menjadi orang yang tidak terpisahkan, menjadi pasangan yang saling mengisi dan melengkapi, menjadi pasangan yang bisa menperbaiki diri agar hubungan lebih baik. Menjadi dua orang yang tidak terpisahkan hingga menjadi suami istri dan tak terpisahkan sampai tau dan ajal menjemput. Aku tau, ku masih banyak kekurangan dan kesalahan, ku tau diriku ini masih jauh dari kata sempurna, tapi ku harap kmu bisa ngarahin aku jadi apa yang kmu mau, ku harap kmu jangan tinggalin aku, bombing aku hingga menjadi pria yang paling kmu sukai.</p>
                  
                  <p>Yaa itu Adalah harapanku dan doaku buat kmu. Sekali lagi Happy Birthday Sayanggg.Makasi karena udah selalua da untukku dan ngarahin aku menjadi lebih baik, doa terbaik buat pacarku tercinta Love You. Jangan lupa traktir aku yaaa heheee</p>
                  
                  <p className="text-center romantic-font text-2xl text-primary mt-8">
                    Makasi Udah nemenin aku dari 0 Semoga kedepannya kitamenjadi tak terpisahkan dan hidup dengan Bahagia dan berkecukupan ❤️
                  </p>
                  
                  <div className="text-right mt-6">
                    <p className="romantic-font text-xl text-primary">Dengan cinta,</p>
                    <p className="romantic-font text-2xl text-primary">Pacarmu Tercinta ❤️</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Link href="/">
                <Button className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-all duration-300 card-hover" data-testid="button-home">
                  <Heart className="w-5 h-5 mr-2" />
                  Kembali ke Home
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
