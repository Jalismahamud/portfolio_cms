/** Trims to a target length at a word boundary, for meta descriptions (~150-160 chars). */
export function truncateForMeta(text, max = 148) {
    if (!text) return '';
    if (text.length <= max) return text;
    const cut = text.slice(0, max);
    const lastSpace = cut.lastIndexOf(' ');
    return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}...`;
}
