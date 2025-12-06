import { Users, Lightbulb, Rocket, BookOpen, Briefcase } from "lucide-react";

const drivingForces = [
  {
    icon: Users,
    title: "Community",
    desc: "Building a strong network of tech professionals",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Fostering creative solutions and new ideas",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Rocket,
    title: "Growth",
    desc: "Accelerating career and business development",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: BookOpen,
    title: "Learning",
    desc: "Continuous skill development and knowledge sharing",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Briefcase,
    title: "Opportunities",
    desc: "Connecting talent with industry leaders",
    color: "bg-amber-100 text-amber-600"
  }
];

const DrivingForces = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core Driving Force
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Five pillars that power our mission to transform Telangana's tech ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {drivingForces.map((force, i) => (
            <div 
              key={i} 
              className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 flex flex-col min-h-[200px]"
            >
              <div className={`w-14 h-14 ${force.color} rounded-xl flex items-center justify-center mb-4 self-start`}>
                <force.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{force.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{force.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrivingForces;