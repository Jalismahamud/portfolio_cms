import { faEnvelope, faPhone, faLocationDot, faIdCard } from '@fortawesome/free-solid-svg-icons';

const contactIcons = {
    Mail: faEnvelope,
    Phone: faPhone,
    MapPin: faLocationDot,
};

export function resolveContactIcon(name) {
    return contactIcons[name] || faIdCard;
}
