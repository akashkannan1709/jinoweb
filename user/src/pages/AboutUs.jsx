import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  ShieldCheck, 
  Target,
  Users,
  ChevronRight
} from 'lucide-react';

// --- Reusable Components ---
const GlassCard = ({ children, className = '', hoverEffect = false }) => {
  const isDarkMode = useSelector((state) => state.theme.current) === "dark";
  return (
    <div className={`
      backdrop-blur-xl border 
      rounded-2xl p-6
      ${isDarkMode ? 'bg-[#1E293B]/60 border-[#334155]' : 'bg-white/80 border-gray-200 shadow-xl'}
      ${hoverEffect ? `transition-colors duration-300 ${isDarkMode ? 'hover:border-[#2ae500]/50' : 'hover:border-[#2ae500]'}` : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const isDarkMode = useSelector((state) => state.theme.current) === "dark";
  const baseStyle = "px-6 py-2.5 rounded-lg font-bold transition-all duration-300 flex items-center justify-center";
  const variants = {
    primary: "bg-[#2ae500] text-[#053900] hover:bg-[#39ff14] shadow-[0_0_15px_rgba(42,229,0,0.2)] hover:shadow-[0_0_20px_rgba(42,229,0,0.4)]",
    outline: `bg-transparent border ${isDarkMode ? 'border-[#334155] text-white hover:border-white/50' : 'border-gray-300 text-gray-800 hover:border-gray-500'}`,
    ghost: `bg-transparent ${isDarkMode ? 'text-white hover:text-[#2ae500]' : 'text-gray-800 hover:text-[#2ae500]'}`,
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- About Us Page Component ---
export default function AboutUs() {
  const isDarkMode = useSelector((state) => state.theme.current) === "dark";
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden selection:bg-[#2ae500] selection:text-[#053900] transition-colors duration-500 ${isDarkMode ? 'bg-[#0B0C10] text-[#F8FAFC]' : 'bg-gray-50 text-gray-900'}`}>
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 min-h-[60vh] flex items-center justify-center text-center">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1518605368461-1e1e38ce8058?q=80&w=2000&auto=format&fit=crop" 
              alt="Stadium background" 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-[#0B0C10]/80' : 'bg-white/80'} backdrop-blur-[2px]`}></div>
            {/* Gradient fade to bottom */}
            <div className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t ${isDarkMode ? 'from-[#0B0C10] to-transparent' : 'from-gray-50 to-transparent'}`}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <span className="text-[#2ae500] text-sm font-bold tracking-[0.2em] uppercase">Understanding</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              About Our <span className="text-[#2ae500]">Project</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              We didn't just lay down turf; we built a home for the beautiful game, engineered for professional grade play in our community.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text */}
            <div className="space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold border-l-4 border-[#2ae500] pl-6 leading-tight">
                Your Perfect Game Starts Here!
              </h2>

              <div className="space-y-8 pl-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-[#2ae500] w-6 h-6" />
                    <h3 className="text-xl font-bold text-[#2ae500]">Local Mission</h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    To empower the athletic community by providing local athletes and enthusiasts with top-tier, accessibly priced synthetic turf pitches so that hidden talent flourishes.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-[#00D1FF] w-6 h-6" />
                    <h3 className="text-xl font-bold text-[#00D1FF]">Community Vision</h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    To be the cornerstone of athletic life in Pamban, where every local player feels like a professional the moment they step onto our premium synthetic surface.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-[400px]">
              {/* Large Left Image */}
              <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden border border-[#334155] shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1551280857-2b9bae120c51?q=80&w=800&auto=format&fit=crop" 
                  alt="Turf close up" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[#2ae500] font-bold text-lg">01</span>
                  <p className="text-white text-sm font-semibold">Professional Quality</p>
                </div>
              </div>

              {/* Top Right Card */}
              <GlassCard className="col-span-1 row-span-1 flex flex-col justify-end relative overflow-hidden group !p-4">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2ae500]"></div>
                <div>
                  <span className="text-[#00D1FF] font-bold text-lg">02</span>
                  <p className={isDarkMode ? 'text-white text-sm font-semibold' : 'text-gray-900 text-sm font-semibold'}>Accessible to All</p>
                </div>
              </GlassCard>

              {/* Bottom Right Image */}
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden border border-[#334155] shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop" 
                  alt="Football cleats" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Why We Built Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <GlassCard className="max-w-5xl mx-auto md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2ae500]/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold mb-8 relative z-10">
              Why we built <span className="text-[#2ae500]">J4 Arena</span>
            </h2>
            
            <div className={`space-y-6 text-sm md:text-base leading-relaxed relative z-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                For too long, the talented players of Pamban were forced to play on uneven dirt patches or travel hours to find a decent pitch. We saw the passion in the local matches—the grit, the skill, and the community spirit—but the facilities didn't match the ambition.
              </p>
              <p>
                We realized that Pamban didn't just need another playground; it needed a <strong className={isDarkMode ? 'text-white' : 'text-black'}>professional arena</strong>. J4 Turf Pamban was engineered to bridge that gap, bringing FIFA-standard synthetic grass and pro lighting to our neighborhood.
              </p>
              <p>
                We didn't just lay down turf; we built a home for the beautiful game. Because every athlete in Pamban deserves a pitch that rewards their hard work rather than hindering it.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Our Journey Section (Timeline) */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Journey</h2>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-full ${isDarkMode ? 'bg-[#334155]' : 'bg-gray-200'}`}></div>

            {/* Timeline Items */}
            <div className="space-y-24">
              
              {/* Node 1: Left */}
              <div className="flex justify-start w-full relative">
                <div className="w-1/2 pr-8 md:pr-16 text-right">
                  <div className="text-[#2ae500] text-xs font-bold uppercase tracking-wider mb-2">Phase One</div>
                  <h3 className="text-2xl font-bold mb-2">Groundbreaking</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Breaking ground on the site of J4 Arena, transforming local land into a professional sports hub.
                  </p>
                </div>
                {/* Node Indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-[#2ae500] shadow-[0_0_15px_#2ae500] border-4 border-[#0B0C10]"></div>
              </div>

              {/* Node 2: Right */}
              <div className="flex justify-end w-full relative">
                <div className="w-1/2 pl-8 md:pl-16 text-left">
                  <div className="text-[#00D1FF] text-xs font-bold uppercase tracking-wider mb-2">Phase Two</div>
                  <h3 className="text-2xl font-bold mb-2">Grand Opening</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    The lights turn on for the first time. Our premium pitch opened to all local teams and players.
                  </p>
                </div>
                {/* Node Indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-[#00D1FF] shadow-[0_0_15px_#00D1FF] border-4 border-[#0B0C10]"></div>
              </div>

              {/* Node 3: Left */}
              <div className="flex justify-start w-full relative">
                <div className="w-1/2 pr-8 md:pr-16 text-right">
                  <div className="text-[#2ae500] text-xs font-bold uppercase tracking-wider mb-2">Phase Three</div>
                  <h3 className="text-2xl font-bold mb-2">Community Hub</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Launch of local leagues, community events, and training clinics. J4 Pamban is a central hub.
                  </p>
                </div>
                {/* Node Indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-[#2ae500] shadow-[0_0_15px_#2ae500] border-4 border-[#0B0C10]"></div>
              </div>

            </div>
          </div>
        </section>

        {/* Beyond the Pitch: Winz Photography */}
        <section className="relative py-24 px-6 mt-12 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/onboarding/jenoback.png" 
              alt="Photographer" 
              className="w-full h-full object-cover opacity-90 object-right-top"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-[#0B0C10] via-[#0B0C10]/80 to-transparent' : 'from-gray-50 via-gray-50/90 to-transparent'}`}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <span className="text-[#2ae500] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Creative Partnerships</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Beyond the Pitch: <br className="hidden md:block"/>
                <span className="text-[#2ae500]">Winz Photography</span>
              </h2>
              <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Our founders' passion for excellence extends beyond sports. Winz Photography captures the raw energy, precision, and spirit of the community through high-end professional photography and cinematography.
              </p>
              <Button className="gap-2">
                Explore <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        

      </div>
  );
}