import { useState } from "react";
import { playClickSound } from "../utils/sounds";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactImg from "@/assets/images/im_contact.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    window.location.href = `mailto:marie.edmond.hegnon@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    toast({
      title: "Message envoyé !",
      description:
        "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
      id="contact"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-12">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl shadow-xl mb-6 transform hover:scale-105 transition-transform duration-300">
              <img
                src={contactImg}
                alt="Contact"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:marie.edmond.hegnon@gmail.com"
                className="hover:text-purple-700 transition-colors"
              >
                marie.edmond.hegnon@gmail.com
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              onClick={() => playClickSound()}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-md hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
