import {
    faCode,
    faServer,
    faDatabase,
    faGlobe,
    faMobileScreen,
    faCodeBranch,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Maps a Skill.icon DB value (a Font Awesome solid icon name, e.g. "code")
 * to its Font Awesome icon definition. Falls back to a generic icon when
 * the stored name doesn't match a known icon.
 */
const skillIcons = {
    code: faCode,
    server: faServer,
    database: faDatabase,
    globe: faGlobe,
    'mobile-screen': faMobileScreen,
    'code-branch': faCodeBranch,
};

export function resolveSkillIcon(name) {
    return skillIcons[name] || faLayerGroup;
}
