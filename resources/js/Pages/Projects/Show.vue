<script setup>
import { ref, computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { truncateForMeta } from '@/Composables/useSeo';
import Seo from '@/Components/Portfolio/Seo.vue';
import Navigation from '@/Components/Portfolio/Navigation.vue';

const props = defineProps({
    project: { type: Object, required: true },
});

const page = usePage();
const seoDescription = computed(() => truncateForMeta(props.project.description || ''));
const currentImageIndex = ref(0);

function nextImage() {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.project.images.length;
}

function prevImage() {
    currentImageIndex.value = (currentImageIndex.value - 1 + props.project.images.length) % props.project.images.length;
}
</script>

<template>
    <Seo
        :title="`${project.title} | Portfolio`"
        :description="seoDescription"
        :canonical="`/project/${project.slug}`"
        :image="project.images?.[0]?.image_path"
        type="article"
        :json-ld="[
            {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: project.title,
                description: seoDescription,
                image: project.images?.[0]?.image_path,
                keywords: project.technologies?.map((t) => t.name).join(', '),
                url: `${page.props.siteUrl}/project/${project.slug}`,
            },
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                    { '@type': 'ListItem', position: 2, name: 'Projects', item: '/projects' },
                    { '@type': 'ListItem', position: 3, name: project.title, item: `/project/${project.slug}` },
                ],
            },
        ]"
    />

    <div class="min-h-screen bg-background">
        <Navigation />

        <div class="pt-24 section-padding">
            <div class="max-w-6xl mx-auto">
                <Link href="/" class="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8">
                    <FontAwesomeIcon :icon="faArrowLeft" class="w-5 h-5" />
                    <span>Back to Portfolio</span>
                </Link>

                <div class="mb-12">
                    <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">{{ project.title }}</h1>
                    <p class="text-xl text-muted-foreground mb-8">{{ project.description }}</p>

                    <div class="flex flex-wrap gap-4">
                        <a v-if="project.live_url" :href="project.live_url" target="_blank" rel="noopener noreferrer" class="btn-outline-cyan inline-flex items-center space-x-2">
                            <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="w-4 h-4" />
                            <span>Live Demo</span>
                        </a>
                        <a v-if="project.github_url" :href="project.github_url" target="_blank" rel="noopener noreferrer" class="btn-outline inline-flex items-center space-x-2">
                            <FontAwesomeIcon :icon="faGithub" class="w-4 h-4" />
                            <span>View Code</span>
                        </a>
                    </div>
                </div>

                <!-- Image Carousel -->
                <div v-if="project.images?.length" class="mb-12">
                    <div class="relative bg-card border border-border rounded-lg overflow-hidden">
                        <div class="aspect-video relative">
                            <img
                                :src="project.images[currentImageIndex].image_path"
                                :alt="`${project.title} screenshot ${currentImageIndex + 1}`"
                                decoding="async"
                                width="1200"
                                height="675"
                                class="w-full h-full object-cover"
                            />

                            <template v-if="project.images.length > 1">
                                <button
                                    @click="prevImage"
                                    aria-label="Previous screenshot"
                                    class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-colors"
                                >
                                    <FontAwesomeIcon :icon="faChevronLeft" class="w-6 h-6 text-foreground" />
                                </button>
                                <button
                                    @click="nextImage"
                                    aria-label="Next screenshot"
                                    class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-colors"
                                >
                                    <FontAwesomeIcon :icon="faChevronRight" class="w-6 h-6 text-foreground" />
                                </button>
                            </template>
                        </div>

                        <div v-if="project.images.length > 1" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            <button
                                v-for="(image, index) in project.images"
                                :key="image.id"
                                @click="currentImageIndex = index"
                                :aria-label="`Go to screenshot ${index + 1}`"
                                class="w-3 h-3 rounded-full transition-colors"
                                :class="index === currentImageIndex ? 'bg-accent' : 'bg-muted-foreground/50'"
                            />
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2 space-y-8">
                        <section v-if="project.long_description">
                            <h2 class="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
                            <p class="text-muted-foreground leading-relaxed">{{ project.long_description }}</p>
                        </section>

                        <section v-if="project.features?.length">
                            <h2 class="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                            <ul class="space-y-3">
                                <li v-for="(feature, index) in project.features" :key="index" class="flex items-start space-x-3">
                                    <div class="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                    <span class="text-muted-foreground">{{ feature }}</span>
                                </li>
                            </ul>
                        </section>

                        <section v-if="project.challenges?.length">
                            <h2 class="text-2xl font-bold text-foreground mb-4">Challenges & Solutions</h2>
                            <ul class="space-y-3">
                                <li v-for="(challenge, index) in project.challenges" :key="index" class="flex items-start space-x-3">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span class="text-muted-foreground">{{ challenge }}</span>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div class="space-y-8">
                        <section class="bg-card border border-border rounded-lg p-6">
                            <h3 class="text-xl font-semibold text-foreground mb-4">Technologies Used</h3>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    v-for="tech in project.technologies"
                                    :key="tech.id ?? tech.name"
                                    class="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-accent font-medium"
                                >
                                    {{ tech.name }}
                                </span>
                            </div>
                        </section>

                        <section class="bg-card border border-border rounded-lg p-6">
                            <h3 class="text-xl font-semibold text-foreground mb-4">Project Links</h3>
                            <div class="space-y-3">
                                <a v-if="project.live_url" :href="project.live_url" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">
                                    <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="w-4 h-4" />
                                    <span>Live Demo</span>
                                </a>
                                <a v-if="project.github_url" :href="project.github_url" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">
                                    <FontAwesomeIcon :icon="faGithub" class="w-4 h-4" />
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
