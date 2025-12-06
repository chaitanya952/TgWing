import { Target, Compass } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Purpose
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving innovation and collaboration across Telangana's technology landscape
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-cyan-500 rounded-2xl p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col min-h-[280px]">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Target size={28} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            
            <p className="text-lg leading-relaxed text-white/95 flex-1">
              To establish Telangana as a <span className="font-bold">global technology hub</span> by creating an interconnected ecosystem that empowers innovation, nurtures talent, and drives sustainable growth.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-200 flex flex-col min-h-[280px]">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <Compass size={28} className="text-orange-600" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            
            <p className="text-lg text-gray-600 leading-relaxed flex-1">
              To bridge gaps between <span className="font-bold text-gray-900">students</span>, 
              <span className="font-bold text-gray-900"> professionals</span>, 
              <span className="font-bold text-gray-900"> entrepreneurs</span>, and 
              <span className="font-bold text-gray-900"> industry leaders</span> through meaningful collaborations and transformative initiatives.
            </p>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all min-h-[140px] flex flex-col">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">Strategic Growth</h4>
            <p className="text-sm text-gray-600 flex-1">Building sustainable pathways for technology advancement</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all min-h-[140px] flex flex-col">
            <div className="text-4xl mb-3">🤝</div>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">Community First</h4>
            <p className="text-sm text-gray-600 flex-1">Fostering connections that create lasting impact</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all min-h-[140px] flex flex-col">
            <div className="text-4xl mb-3">💡</div>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">Innovation Hub</h4>
            <p className="text-sm text-gray-600 flex-1">Empowering ideas that shape tomorrow</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;