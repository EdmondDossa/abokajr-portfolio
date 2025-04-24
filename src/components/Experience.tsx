
const experiences = [
  {
    title: "Développeur logiciels",
    company: "Personnel",
    type: "Contrat d'apprentissage",
    period: "01/2025 – Actuel",
    responsibilities: [
      "Adaptation aux différentes plateformes (mobiles, tablettes, ordinateurs)",
      "Participation à des projets de transformation digitale"
    ]
  },
  {
    title: "Développeur full stack",
    company: "Vertim Coders",
    type: "CDD",
    period: "06/2023 – Actuel",
    responsibilities: [
      "Développement d'applications web en JavaScript, HTML et CSS",
      "Conception de bases de données relationnelles et non relationnelles",
      "Documentation technique, analyse des besoins, conception back-end/front-end",
      "Mise en œuvre d'API RESTful"
    ]
  },
  {
    title: "Développeur Web",
    company: "41 DEVS",
    type: "Stage",
    period: "04/2023 – 06/2023",
    responsibilities: [
      "Développement d'interfaces web avec VueJS et TailwindCSS",
      "Utilisation de Git, correction d'erreurs, maintenance de sites web responsives"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-12">
          Expérience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br from-purple-50 to-pink-50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {exp.company} - {exp.type}
                  </p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0 group-hover:text-purple-600 transition-colors duration-300">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
