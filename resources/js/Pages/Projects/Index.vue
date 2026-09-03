<script setup>
import { ref, watch } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import { ExternalLink, Eye, Search, LoaderCircle } from '@lucide/vue';
import { GithubIcon } from '@/Components/Portfolio/icons/BrandIcons';
import Seo from '@/Components/Portfolio/Seo.vue';
import Navigation from '@/Components/Portfolio/Navigation.vue';

const props = defineProps({
    projects: { type: Array, default: () => [] },
    search: { type: String, default: '' },
});

const searchQuery = ref(props.search);
const isSearching = ref(false);
let debounceTimer = null;

watch(searchQuery, (value) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        router.get('/projects', value ? { search: value } : {}, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onStart: () => (isSearching.value = true),
            onFinish: () => (isSearching.value = false),
        });
    }, 300);
});

function goToProject(slug) {
    router.visit(`/project/${slug}`);
}
</script>

<template>
    <Seo
        title="All Projects | Portfolio"
        description="Browse the full archive of web platforms built with Laravel and Vue.js: e-commerce, fintech, AI tools, and mobile apps."
        canonical="/projects"
        :json-ld="{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                { '@type': 'ListItem', position: 2, name: 'Projects', item: '/projects' },
            ],
        }"
    />

    <div class="min-h-screen bg-background">
        <Navigation />

        <div class="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12" data-aos="fade-down">
                    <span class="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
                        Project Archive
                    </span>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6">All Projects</h1>
                    <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A complete archive of platforms and applications I've built, from e-commerce and fintech to AI-powered tools and mobile apps.
                    </p>
                </div>

                <div class="mb-10" data-aos="fade-up">
                    <div class="relative max-w-xl mx-auto">
                        <LoaderCircle v-if="isSearching" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent animate-spin" />
                        <Search v-else class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search projects by name or technology..."
                            class="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                    </div>
                    <div class="text-center text-sm text-muted-foreground mt-4">
                        Showing {{ projects.length }} project(s)
                    </div>
                </div>

                <div v-if="projects.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        v-for="project in projects"
                        :key="project.id"
                        role="link"
                        tabindex="0"
                        @click="goToProject(project.slug)"
                        @keydown.enter.space.prevent="goToProject(project.slug)"
                        class="group bg-card border border-border rounded-xl overflow-hidden card-hover hover:border-accent/50 transition-all duration-300 block cursor-pointer"
                        data-aos="fade-up"
                    >
                        <div class="relative h-48 overflow-hidden bg-accent/10">
                            <img
                                :src="project.images?.[0]?.image_path"
                                :alt="`Screenshot of ${project.title}`"
                                loading="lazy"
                                decoding="async"
                                width="600"
                                height="400"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Eye class="w-8 h-8 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
                            </div>
                            <span v-if="project.is_featured" class="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full border bg-accent/20 text-accent border-accent/30">
                                Featured
                            </span>
                        </div>

                        <div class="p-5 sm:p-6">
                            <h3 class="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                                {{ project.title }}
                            </h3>
                            <p class="text-muted-foreground text-sm mb-4 line-clamp-2">{{ project.description }}</p>

                            <div class="flex flex-wrap gap-2 mb-4">
                                <span
                                    v-for="tech in project.technologies.slice(0, 3)"
                                    :key="tech.id ?? tech.name"
                                    class="text-xs font-mono text-accent px-2 py-1 bg-accent/10 rounded-full border border-accent/20"
                                >
                                    {{ tech.name }}
                                </span>
                                <span v-if="project.technologies.length > 3" class="text-xs font-mono text-muted-foreground px-2 py-1">
                                    +{{ project.technologies.length - 3 }}
                                </span>
                            </div>

                            <div class="flex items-center gap-3">
                                <a
                                    v-if="project.github_url"
                                    :href="project.github_url"
                                    @click.stop
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
                                    aria-label="View GitHub repository"
                                >
                                    <GithubIcon class="w-5 h-5" />
                                </a>
                                <a
                                    v-if="project.live_url"
                                    :href="project.live_url"
                                    @click.stop
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
                                    aria-label="View live project"
                                >
                                    <ExternalLink class="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center py-16">
                    <div class="text-6xl mb-4">🔍</div>
                    <h3 class="text-xl font-semibold text-foreground mb-2">No projects found</h3>
                    <p class="text-muted-foreground">Try a different search term</p>
                </div>

                <div class="text-center mt-16">
                    <Link href="/" class="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
