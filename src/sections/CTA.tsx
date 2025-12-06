import { ArrowRight, Users, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section id="join" className="w-full bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center text-white flex flex-col items-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full border border-cyan-500/30">
            <span className="text-sm font-semibold">Join Our Growing Community</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Ready to Shape Your <span className="text-cyan-400">Future</span>?
          </h2>
          
          <p className="text-xl lg:text-2xl max-w-2xl leading-relaxed text-gray-300">
            Join the Telangana IT Wing Association and become a force multiplier in building tomorrow's technology landscape.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-3xl py-8 border-y border-gray-700">
            <div className="text-center px-4">
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">5000+</div>
              <div className="text-sm text-gray-400">Active Members</div>
            </div>
            <div className="text-center border-x border-gray-700 px-4">
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-sm text-gray-400">Events Hosted</div>
            </div>
            <div className="text-center px-4">
              <div className="text-sm text-gray-400">Industry Partners</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-cyan-500 text-white px-10 py-4 rounded-lg hover:bg-cyan-600 transition-all font-bold flex items-center justify-center space-x-2 shadow-xl shadow-cyan-500/30">
              <Users size={20} />
              <span>Register Now</span>
              <ArrowRight size={20} />
            </button>
            
            <button className="bg-transparent text-white px-10 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold border-2 border-gray-600 hover:border-gray-500">
              Learn More About Benefits
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <CheckCircle size={20} className="text-emerald-400" />
              <span>Free Membership</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <CheckCircle size={20} className="text-emerald-400" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <CheckCircle size={20} className="text-emerald-400" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;