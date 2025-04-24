
const Education = () => {
  return (
    <section className="py-20" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1A1F2C] mb-12">Formation</h2>
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[#6E59A5]">
                  Master 1 : Architecture Logicielle
                </h3>
                <p className="text-gray-600">ESGIS Bénin – Cotonou</p>
              </div>
              <span className="text-gray-500 mt-2 md:mt-0">En cours</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[#6E59A5]">
                  Licence Pro en Architecture Logicielle
                </h3>
                <p className="text-gray-600">ESGIS Bénin – Cotonou</p>
              </div>
              <span className="text-gray-500 mt-2 md:mt-0">09/2020 – 06/2023</span>
            </div>
            <p className="text-gray-600 mt-2">Mention : Bien</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
