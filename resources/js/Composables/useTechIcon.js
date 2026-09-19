import {
    faPhp,
    faLaravel,
    faVuejs,
    faJs,
    faHtml5,
    faCss3Alt,
    faGitAlt,
    faNode,
    faWordpress,
    faBootstrap,
    faMarkdown,
    faReact,
    faTailwindCss,
    faPostgresql,
    faGithub,
    faAws,
    faDocker,
    faStripe,
    faLinux,
    faNpm,
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faCode,
    faCloud,
    faWallet,
    faVial,
    faListCheck,
    faArrowsSpin,
    faCodeBranch,
    faDiagramProject,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Maps a Technology.name DB value to a Font Awesome icon definition.
 * Falls back to a generic "code" icon for anything not in the list.
 */
const techIcons = {
    PHP: faPhp,
    Laravel: faLaravel,
    'Vue.js': faVuejs,
    'Vue js': faVuejs,
    JavaScript: faJs,
    HTML5: faHtml5,
    CSS3: faCss3Alt,
    Git: faGitAlt,
    GitHub: faGithub,
    'Node.js': faNode,
    WordPress: faWordpress,
    Bootstrap: faBootstrap,
    Markdown: faMarkdown,
    MySQL: faDatabase,
    MongoDB: faDatabase,
    PostgreSQL: faPostgresql,
    'REST APIs': faCloud,
    'React.js': faReact,
    React: faReact,
    'Tailwind CSS': faTailwindCss,
    AWS: faAws,
    Docker: faDocker,
    Stripe: faStripe,
    'Stripe Connect': faStripe,
    Bkash: faWallet,
    'SSL Commerz': faWallet,
    Linux: faLinux,
    NPM: faNpm,
    Testing: faVial,
    'Project Planning': faListCheck,
    'Agile Methodology': faArrowsSpin,
    'CI/CD': faCodeBranch,
    'Database Design': faDiagramProject,
};

export function resolveTechIcon(name) {
    return techIcons[name] || faCode;
}
