import '../css/app.css';
import './bootstrap';

import { createInertiaApp, router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inertia doesn't reset scroll position between visits on its own. Without
// this, navigating to a new page (e.g. a project card click) while scrolled
// down on the previous page lands the user mid-page instead of at the top.
// Skips the reset when the target has a hash so in-page anchor navigation
// (e.g. "/#blog") isn't fought.
router.on('navigate', () => {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
});

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);

        AOS.init({
            duration: 600,
            once: true,
            offset: 80,
        });
    },
    progress: {
        color: 'hsl(192 100% 50%)',
    },
});
