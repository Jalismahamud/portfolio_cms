import { useState } from 'react';

interface TechIconProps {
  name: string;
  icon: string;
  category: string;
  index: number;
}

const techIcons: Record<string, string> = {
  'PHP (OOP)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Laravel Framework': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'CodeIgniter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Vue js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'jQuery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'C Language': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
};

const TechIcon = ({ name, icon, category, index }: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconUrl = techIcons[name];

  return (
    <div
      className="relative group"
      data-aos="zoom-in"
      data-aos-delay={index * 50}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-secondary p-4 rounded-lg text-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20 hover:bg-accent/10 border border-transparent hover:border-accent/30">
        <div className="text-3xl mb-2 transition-all duration-300 cursor-pointer flex items-center justify-center h-12">
          {iconUrl ? (
            <img
              src={iconUrl}
              alt={`${name} icon`}
              loading="lazy"
              decoding="async"
              width={40}
              height={40}
              className={`w-10 h-10 object-contain transition-all duration-300 ${isHovered ? 'scale-125 drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]' : ''}`}
            />
          ) : (
            <span className={`text-3xl transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}>
              {icon}
            </span>
          )}
        </div>
        <div className="text-sm font-medium text-foreground">{name}</div>
        <div className="text-xs text-accent mt-1">{category}</div>
      </div>

      {/* Tooltip */}
      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-accent/30 rounded-lg text-xs text-foreground whitespace-nowrap z-20 transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
        Expert in {name}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-accent/30"></div>
      </div>
    </div>
  );
};

export default TechIcon;