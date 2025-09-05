import { Card, CardContent } from "@/components/ui/card";
import { Heart, Camera, Star } from "lucide-react";
import { useState } from "react";

export default function Memories() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const memories = [
    {
      id: 1,
      image: "/images/First Date.jpg",
      title: "Pertama Kali Bertemu",
      description: "Ini Adalah Awal kisah cinta kita, aku orang yang belum pernah sama sekali pacarana atau bahkan deket sama cewek untuk pertama kali merasakan hal seperti ini. Ku gatau harus gimana, betapa gugupnya aku bisa kmu bayangkan sendiri. First Impresion ketemu kmu juju raku kaget, kenapa? Karena kmu ternyata seberani itu, kmu megang tangan aku dengan beraninya. Jujur pas kmu lakuin itu hatiku rasanya kaya mau meledak, bukan hanya it uku juga ngelakuin hal konyol, ku ninggalin hp ku di motor karena saking deg”annya. Ya ku rasa karena hal” ini kita bisa pacarana sih, itu moment penting buat aku."
    },
    {
      id: 2,
      image: "/images/Memorial Date.jpg",
      title: "Memorable Date",
      description: "Mu inget momen ini? Bener banget ini Adalah momen Ketika kita ke pasar malem. Kenapa aku milih ini menjadi memorial date? Yaa karena menurutku di hari itu banyak kenangan indah yang sulit ku lupain, mulai dari kita seneng seneng bareng, ku ketemu bapakmu, main game bareng, naik biang lala bareng, dll. Jujur ku pengn sihhh nyoba ke pasar malem lagi, enta kenapa kangn aja gite ke pasar malem. Yuk ke pasar malem lagi lain kali, ku kangen nok nyoba wahana disitu. Sama sebenernyan ku kangfen ke bioskop siiii, dah lama gitu ga nonton, yang baisanya nonton tiap bulan ni dah lama banget gitu ga nonton"
    },
    {
      id: 3,
      image: "/images/First Birthday.jpg",
      title: "Ulang Tahun Mu",
      description: "Momen ini kayaknya Adalah momen kita ketemu setelah LDR an lama ya, semenjak kita jadian kita ldr an cukup lama karena aku kerja. Ya kita ketemu lagi di sini, di hari ulang tahunmu. Ku ngasi cukup banyak hadiah pasitu ke kmu, dan ku suka gitu sama responmu mu seneng banget nerima hadiah hadiah sederhana dari aku. Ku juga masih inget banget pas itu kita pergi ke discovery mall, kita jalan jalan di Pantai belakang mall, duduk duduk Santai sambil ngobrol” dan aku inget banget, pas itu ku ga lepas lepas tanganmu, gatau ya kaya takut aja gitu kmu lari hehehe. Mu inget ga ada momen lain juga pas di Pantai itu? Yaa bener kita di datengin orang random disuruh beli jajan dan jajannya ga enak mahal lagi, truss berapa tahun kemudian kita jadi tau kalo banyak orang kaya gitu"
    },
    {
      id: 4,
      image: "/images/Valentine.jpg",
      title: "Malam Berbintang",
      description: "Ini Adalah pertama kalinya kita ngerayain valentine bareng, tentu dong di hari valentine itu ku dah nyiapin hadiah, mu inget ga hadiahnya apa? Parah sih kalo ga inget. Betulll hadiahnya boneka gede, ku super susah bawa hadiah itu dari Karangasem ke Denpasar, tapi pas nyampe di tuannya yang baru dia Cuma diem di pojokan, parah emang muu ga di hargai effort ku, tapi ku ngerti siii boneka segede itu ya buat di pajang bener ku Cuma jailin kmu ajaa heheee. Oiaaaa, ku juga ngasi kmuuu coklat yaaa tapi ada yang special siii dari coklat ituuu jadi yaudahlah. Di hari itu juga kita banyak ngelakuin kegiatan ga sii, kaya foto foto berdua dan masih banyak lagi"
    },
    {
      id: 5,
      image: "/images/1 anniv.JPG",
      title: "Anniversary Pertama",
      description: "Menurutku yaaa, ini adalah momen yang banyak banget kejadian yang ga bisa di lupain mulai dari kenangan indah, sampai kenangan pahit pun ada. Kita udah plan dari jauh jauh hari ke Bedugul, ku juga udah minjem kamera key us dan bahkan udah nyewa tripod kamera, awalnya perjalan kesitu udah lancer banget mulai dari makan babi guling dll. Nah sampai di kebun raya Bedugul kita gatau nih mau kemana karena saking luas tempatnya, dan mu nyaranin nyari tempat duduk aja sambil buka kado bareng”. Pas itu kita emang udah plan buat tukaran kado. Uydah nih selesai tukaran kado kita keliling foto foto, dan mulailah momen mengesalkannya, kamera yus baterainya drop, jadi y akita terpaksa berhenti charge baterai dulu, trus jaketku jatuh aku harus keliling nyari jaket dulu, udah nih itu semua jalan pulang lkita mampir beli bensin di deket rumahmu, kita mau negmbaliin tripod ke view kamera. Ada kejadian ngeselin lagi, Hp mu jatuh di jalan dan hilang, disitu aku panik banget gatau mau ngapain dan y akita keliling nyari hp sampai akhirnya nyerah. Truss kita gajadi nyari makan dan akhirnya makan lalapan di rumah. Ada nih satu kenangan lagi ku rasa mu lupa dah. Di momen itu juga kita ciuman untuk pertaam kalinya. Inget ga mu? Parah emang di lupain."
    },
    {
      id: 6,
      image: "/images/2 Annniv.JPG",
      title: "Anniversary Kedua",
      description: "Di hari itu ku rasa jadi salah satu hari tersial kita dah rasanya, kita udah ada plan ma uke ubud dan udah minjep kamera udah prepare banget lah intinya. Kitan naik bus ke ubud, nh disini mulai sialnya, kita gatau ahrus berhenti Dimana, udah berhenti kita kena hujan yang deres banget dan gatau mau kemana, kita jalan ga jelas tanpa arah sampai kmu inget jl gautama dan kita akhirnya jalan hujan hujannan kesitu. Udah sampai disitu kita berhenti di tempat ramen, mood ku dah berantakan, Sepatu basah, hujan makin deres dan kita mutusin buat makan ramen. Jujur ramennya mahal banget dan super gaenak. Karena cuaca ga mendukung banget dan kita gatau mau kemana lagi kita putusin buat pulang. Kita balik lagi ke halte dan nunggu bis habistu jalan pulang, di bus ku ngerasa lama banget nyampenya kita kesana Cuma 2 jam pulangnya bisa 3 jam lebih. Dah nyampe terminal kita langsung pulang dehhh. Sumpah badluck banget sihh hari ituu padahal kita anniv lo bisa sampai mood berantakan banget. Ni salah satu hari yang paling ku keselin sihhh, ga puas aku melalu ke ubud."
    }
  ];

  const createHeartRain = () => {
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.innerHTML = ['💕', '💖', '💝', '❤️', '💗'][Math.floor(Math.random() * 5)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-50px';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        heart.style.zIndex = '1000';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `float 4s ease-out forwards`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
          heart.remove();
        }, 4000);
      }, i * 150);
    }
  };

  return (
    <div className="pt-24 pb-16 px-6 animate-page-enter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="relative inline-block">
            <Camera className="absolute -top-6 -left-6 text-primary/60 animate-wiggle w-8 h-8" />
            <h1 className="romantic-font text-5xl md:text-6xl font-bold gradient-text mb-4 hover:animate-love-pulse cursor-default">
              Kenangan Indah Kita
            </h1>
            <Heart className="absolute -bottom-2 -right-8 text-pink-400 animate-heartbeat w-10 h-10" />
          </div>
          <p className="text-xl text-muted-foreground hover:text-primary transition-colors duration-500">
            Setiap momen bersamamu adalah berkah yang tak ternilai 💕
          </p>
          <button 
            onClick={createHeartRain}
            className="mt-4 px-6 py-2 bg-primary/20 hover:bg-primary hover:text-white rounded-full transition-all duration-300 romantic-hover text-primary font-medium"
          >
            ✨ Hujan Cinta ✨
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <Card 
              key={memory.id} 
              className="memory-card rounded-2xl romantic-hover relative overflow-hidden group" 
              data-testid={`memory-card-${memory.id}`}
              onMouseEnter={() => setHoveredCard(memory.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative">
                {hoveredCard === memory.id && (
                  <div className="absolute top-2 right-2 z-10">
                    <Heart className="w-6 h-6 text-red-500 animate-love-pulse" />
                  </div>
                )}
                <div className="relative overflow-hidden rounded-xl mb-4 group">
                  <img 
                    src={memory.image} 
                    alt={memory.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`memory-image-${memory.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Star className="text-yellow-400 w-8 h-8 animate-twinkle" />
                  </div>
                </div>
                <h3 className={`romantic-font text-2xl font-semibold text-primary mb-2 transition-all duration-300 ${
                  hoveredCard === memory.id ? 'animate-wiggle' : ''
                }`} data-testid={`memory-title-${memory.id}`}>
                  {memory.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`memory-description-${memory.id}`}>
                  {memory.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <div className={`text-primary text-2xl transition-all duration-300 ${
                    hoveredCard === memory.id ? 'animate-bounce' : ''
                  }`}>
                    💕
                  </div>
                </div>
              </CardContent>
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-slideIn"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
