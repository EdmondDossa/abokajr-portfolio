const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
          À propos
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl shadow-xl mb-6 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Code on screen"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Développeur de logiciels expérimenté avec plus de 2 ans d'expérience dans l'industrie informatique, j'ai travaillé sur une large gamme de projets. Maîtrisant plusieurs langages de programmation et frameworks, j'ai une solide expérience dans l'analyse des besoins des utilisateurs, la conception de solutions logicielles robustes et la gestion efficace des projets de développement.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="font-semibold text-[#6E59A5] mb-2">Contact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Cotonou, Menontin</li>
                  <li>98462982</li>
                  <li className="break-all">marie.edmond.hegnon@gmail.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#6E59A5] mb-2">Langues</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Français (Avancé)</li>
                  <li>Anglais (Intermédiaire - B1)</li>
                  <li>Anglais (Élémentaire - A2)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-[#6E59A5] mb-4">Centres d'intérêt</h3>
            <div className="flex flex-wrap gap-2">
              {["Théâtre", "Football", "Basketball", "Lecture", "Musique"].map((interest) => (
                <span
                  key={interest}
                  className="bg-[#F2FCE2] text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
