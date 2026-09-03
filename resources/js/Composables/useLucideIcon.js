import * as icons from '@lucide/vue';
import { Code2 } from '@lucide/vue';

export function resolveLucideIcon(name) {
    return icons[name] || Code2;
}
