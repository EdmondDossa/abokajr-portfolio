import { Mail, Linkedin, Github } from "lucide-react";
import { playClickSound } from "../utils/sounds";
import ProfilImg from "@/assets/images/im_profil.jpeg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm z-50 border-b border-white/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-[50px] w-[50px] rounded-full overflow-hidden transform hover:scale-110 transition-all duration-300">
              <img src={ProfilImg} />
            </div>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse">
              Marie Edmond
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {[
              {
                href: "mailto:marie.edmond.hegnon@gmail.com",
                icon: Mail,
                label: "Email",
              },
              {
                href: "https://www.linkedin.com/in/marie-edmond-dossa-hegnon-037b23353/",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/EdmondDossa",
                icon: Github,
                label: "GitHub",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                onClick={() => playClickSound()}
                className="text-gray-600 hover:text-purple-500 transform hover:scale-110 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
