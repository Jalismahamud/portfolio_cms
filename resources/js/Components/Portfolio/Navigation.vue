<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Link, usePage, router } from '@inertiajs/vue3';
import { Moon, Sun, Menu, X, FileDown, MessageCircle } from '@lucide/vue';
import { useTheme } from '@/Composables/useTheme';

const props = defineProps({
    resumeUrl: { type: String, default: '/cv.pdf' },
    logoUrl: { type: String, default: null },
});

const navItems = [
    { id: 'about', label: '01. About', href: '#about' },
    { id: 'experience', label: '02. Experience', href: '#experience' },
    { id: 'projects', label: '03. Projects', href: '#projects' },
    { id: 'education', label: '04. Education', href: '#education' },
    { id: 'blog', label: '05. Blog', href: '#blog' },
    { id: 'contact', label: '06. Contact', href: '#contact' },
];

const { theme, toggleTheme } = useTheme();
const activeSection = ref('about');
const isMobileMenuOpen = ref(false);
const page = usePage();

const isHome = computed(() => page.url === '/' || page.url.startsWith('/#'));

function splitLabel(label) {
    const [num, ...rest] = label.split('. ');
    return { num: `${num}.`, text: rest.join('. ') };
}

let handleScroll = null;

onMounted(() => {
    if (page.url.startsWith('/blog')) {
        activeSection.value = 'blog';
        return;
    }
    if (page.url.startsWith('/project')) {
        activeSection.value = 'projects';
        return;
    }
    if (!isHome.value) return;

    handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let current = 'about';

        for (const item of navItems) {
            const el = document.getElementById(item.id);
            if (el) {
                const rect = el.getBoundingClientRect();
                const top = window.scrollY + rect.top;
                const bottom = top + rect.height;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    current = item.id;
                    break;
                }
            }
        }

        if (activeSection.value !== current) {
            activeSection.value = current;
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    if (handleScroll) window.removeEventListener('scroll', handleScroll);
});

function scrollToSection(href) {
    const targetId = href.replace('#', '');
    isMobileMenuOpen.value = false;

    if (!isHome.value) {
        router.visit(`/${href}`);
        return;
    }

    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    isMobileMenuOpen.value = false;

    if (!isHome.value) {
        router.visit('/#contact');
        return;
    }

    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    isMobileMenuOpen.value = false;

    if (!isHome.value) {
        router.visit('/');
        return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <!-- Logo -->
                <div class="flex items-center">
                    <Link href="/" @click.prevent="scrollToTop" aria-label="Home" class="relative cursor-pointer inline-block">
                        <img
                            v-if="logoUrl"
                            :src="logoUrl"
                            alt="Logo"
                            width="96"
                            height="112"
                            class="h-28 w-24 sm:h-24 sm:w-20 animate-logo-orbit z-10 relative cursor-pointer"
                        />
                    </Link>
                </div>

                <!-- Navigation Links -->
                <div class="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    <button
                        v-for="item in navItems"
                        :key="item.id"
                        @click="scrollToSection(item.href)"
                        class="nav-link text-sm xl:text-base"
                        :class="{ active: activeSection === item.id }"
                    >
                        <span class="section-number">{{ splitLabel(item.label).num }}</span>
                        <span class="ml-1">{{ splitLabel(item.label).text }}</span>
                    </button>
                </div>

                <!-- Mobile Menu Button & Theme Toggle & Resume Button -->
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <button
                        @click="isMobileMenuOpen = !isMobileMenuOpen"
                        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
                        :aria-expanded="isMobileMenuOpen"
                        class="lg:hidden p-2 rounded-lg bg-card border border-border hover:bg-accent/10 transition-colors"
                    >
                        <X v-if="isMobileMenuOpen" class="w-5 h-5 text-accent" />
                        <Menu v-else class="w-5 h-5 text-accent" />
                    </button>

                    <button
                        @click="toggleTheme"
                        :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
                        class="p-2 rounded-lg bg-card border border-border hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                    >
                        <Sun v-if="theme === 'dark'" class="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                        <Moon v-else class="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </button>

                    <button
                        @click="scrollToContact"
                        class="hidden sm:flex items-center space-x-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <MessageCircle class="w-4 h-4" />
                        <span>Get in Touch</span>
                    </button>

                    <a
                        :href="resumeUrl"
                        download="My-CV.pdf"
                        class="hidden sm:flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/50 rounded-lg text-sm font-medium text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
                    >
                        <FileDown class="w-4 h-4" />
                        <span>Resume</span>
                    </a>
                </div>
            </div>

            <!-- Mobile Navigation Menu -->
            <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-border mt-4 pt-4 pb-6 animate-fade-in">
                <div class="space-y-3">
                    <button
                        v-for="item in navItems"
                        :key="item.id"
                        @click="scrollToSection(item.href)"
                        class="nav-link w-full text-left py-3 px-4 rounded-lg transition-colors"
                        :class="activeSection === item.id ? 'active bg-accent/10 text-accent' : 'hover:bg-accent/5 text-muted-foreground hover:text-accent'"
                    >
                        <span class="section-number text-sm mr-2">{{ splitLabel(item.label).num }}</span>
                        <span class="text-sm">{{ splitLabel(item.label).text }}</span>
                    </button>

                    <div class="pt-4 border-t border-border space-y-3">
                        <button
                            @click="scrollToContact"
                            class="flex items-center justify-center space-x-2 w-full py-3 bg-muted/50 border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent/50 transition-all"
                        >
                            <MessageCircle class="w-4 h-4" />
                            <span>Get in Touch</span>
                        </button>
                        <a
                            :href="resumeUrl"
                            download="My-CV.pdf"
                            class="flex items-center justify-center space-x-2 w-full py-3 bg-accent/10 border border-accent/50 rounded-lg text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                        >
                            <FileDown class="w-4 h-4" />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
