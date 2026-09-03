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
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faCloud } from '@fortawesome/free-solid-svg-icons';

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
    'Node.js': faNode,
    WordPress: faWordpress,
    Bootstrap: faBootstrap,
    Markdown: faMarkdown,
    MySQL: faDatabase,
    MongoDB: faDatabase,
    'REST APIs': faCloud,
};

export function resolveTechIcon(name) {
    return techIcons[name] || faCode;
}
