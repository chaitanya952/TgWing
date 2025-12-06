import GlobeCanvas from "../components/GlobeCanvas";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full w-fit">
              <span className="text-sm font-semibold">Building the Future Together</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connecting Telangana's Tech Ecosystem
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              The Telangana IT Wing Association fosters growth, innovation, and collaboration across all spheres of the state's technology sector.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition font-semibold flex items-center space-x-2 shadow-lg shadow-cyan-500/30">
                <span>Get Involved Today</span>
                <ArrowRight size={20} />
              </button>
              
              <button className="bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold border-2 border-gray-300 shadow-sm">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-300">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-cyan-600">5000+</div>
                <div className="text-sm text-gray-600 mt-1 font-medium">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-cyan-600">150+</div>
                <div className="text-sm text-gray-600 mt-1 font-medium">Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-cyan-600">50+</div>
                <div className="text-sm text-gray-600 mt-1 font-medium">Partners</div>
              </div>
            </div>
          </div>

          {/* Right Content - Globe */}
          <div className="flex justify-center items-center lg:justify-end">
            <GlobeCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;