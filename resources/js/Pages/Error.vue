<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faFolderOpen, faBook } from '@fortawesome/free-solid-svg-icons';
import Seo from '@/Components/Portfolio/Seo.vue';
import Navigation from '@/Components/Portfolio/Navigation.vue';

const props = defineProps({
    status: { type: Number, required: true },
});

const page = usePage();

const messages = {
    404: {
        title: 'Page not found',
        description: "The page you're looking for doesn't exist or may have been moved.",
    },
    403: {
        title: 'Forbidden',
        description: "You don't have permission to access this page.",
    },
    500: {
        title: 'Server error',
        description: 'Something went wrong on our end. Please try again shortly.',
    },
    503: {
        title: 'Service unavailable',
        description: "We're down for maintenance. Please check back soon.",
    },
};

const message = computed(() => messages[props.status] || messages[500]);
</script>

<template>
    <Seo
        :title="`${message.title} | Portfolio`"
        :description="message.description"
        :canonical="page.url"
        noindex
    />

    <div class="min-h-screen bg-background">
        <Navigation />

        <div class="min-h-screen flex items-center justify-center px-4 pt-24">
            <div class="text-center">
                <p class="section-number text-6xl sm:text-7xl mb-4">{{ status }}</p>
                <h1 class="text-2xl sm:text-3xl font-bold text-foreground mb-3">{{ message.title }}</h1>
                <p class="text-muted-foreground max-w-md mx-auto mb-8">{{ message.description }}</p>

                <div class="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/"
                        class="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
                    >
                        <FontAwesomeIcon :icon="faHouse" class="w-5 h-5" />
                        Back to Home
                    </Link>
                    <Link
                        href="/projects"
                        class="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground font-medium hover:text-accent hover:border-accent/50 transition-all duration-300"
                    >
                        <FontAwesomeIcon :icon="faFolderOpen" class="w-5 h-5" />
                        View Projects
                    </Link>
                    <Link
                        href="/blog"
                        class="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground font-medium hover:text-accent hover:border-accent/50 transition-all duration-300"
                    >
                        <FontAwesomeIcon :icon="faBook" class="w-5 h-5" />
                        Read the Blog
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
