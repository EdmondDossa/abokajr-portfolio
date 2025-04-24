import { playClickSound } from "../utils/sounds";

const projects = [
  {
    title: "Plugin de vérification de licence",
    description: "Plugin de vérification et de génération de clés de licence après achats d'un produit",
  },
  {
    title: "Plugin d'enseigne lumineuse",
    description: "Plugin de conception d'enseigne lumineuse sous WordPress en VueJS et API WordPress",
  },
  {
    title: "Plugin de conception d'enseignes",
    description: "Plugin de conception de toutes sortes d'enseignes sur WordPress et app Shopify",
  },
  {
    title: "Supervision et Assistance",
    description: "Supervision – Assistance utilisateur et gestion des plugins",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-12">
          Projets Réalisés
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => playClickSound()}
              className="group bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br from-purple-50 to-pink-50"
            >
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3 group-hover:scale-105 transition-transform duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
