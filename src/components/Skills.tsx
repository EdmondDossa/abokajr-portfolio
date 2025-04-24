
import { playClickSound } from "../utils/sounds";

const skillCategories = [
  {
    title: "Développement Front-end",
    skills: ["VueJS", "ReactJS", "NextJS", "TypeScript", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Développement Back-end",
    skills: ["Laravel", "Symfony", "NestJS", "AdonisJS", "API RESTful"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Développement Mobile",
    skills: ["Flutter", "ReactNative", "Android"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Autres",
    skills: ["Git", "Python", "Java", "SQL", "Travail en équipe"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-12 animate-pulse">
          Compétences
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => playClickSound()}
              className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-900/40 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm transform hover:scale-110 transition-transform duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
