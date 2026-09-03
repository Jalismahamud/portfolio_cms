import {
    faGithub,
    faLinkedinIn,
    faXTwitter,
    faInstagram,
    faFacebookF,
    faMedium,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const socialMeta = {
    GitHub: { icon: faGithub, color: 'hover:text-accent hover:border-accent/50', bgHover: 'hover:bg-accent/10' },
    LinkedIn: { icon: faLinkedinIn, color: 'hover:text-blue-400 hover:border-blue-400/50', bgHover: 'hover:bg-blue-400/10' },
    Twitter: { icon: faXTwitter, color: 'hover:text-sky-400 hover:border-sky-400/50', bgHover: 'hover:bg-sky-400/10' },
    Instagram: { icon: faInstagram, color: 'hover:text-pink-500 hover:border-pink-500/50', bgHover: 'hover:bg-pink-500/10' },
    Facebook: { icon: faFacebookF, color: 'hover:text-blue-500 hover:border-blue-500/50', bgHover: 'hover:bg-blue-500/10' },
    Fiverr: { icon: faBriefcase, color: 'hover:text-green-500 hover:border-green-500/50', bgHover: 'hover:bg-green-500/10' },
    Medium: { icon: faMedium, color: 'hover:text-foreground hover:border-foreground/50', bgHover: 'hover:bg-foreground/10' },
    StackOverflow: { icon: faStackOverflow, color: 'hover:text-orange-500 hover:border-orange-500/50', bgHover: 'hover:bg-orange-500/10' },
};

export function resolveSocialMeta(platform) {
    return socialMeta[platform] || { icon: faShareNodes, color: 'hover:text-accent', bgHover: 'hover:bg-accent/10' };
}
