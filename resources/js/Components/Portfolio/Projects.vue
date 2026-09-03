<script setup>
import { Link, router } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowUpRightFromSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const props = defineProps({
    featuredProjects: { type: Array, default: () => [] },
    otherProjects: { type: Array, default: () => [] },
});

function goToProject(slug) {
    router.visit(`/project/${slug}`);
}
</script>

<template>
    <section id="projects" class="section-padding bg-background">
        <div class="max-w-7xl mx-auto">
            <div class="mb-16" data-aos="fade-right">
                <h2 class="section-header">
                    <span class="section-number">03.</span> Work I've Built
                </h2>
            </div>

            <!-- Featured Projects -->
            <div class="mb-16 sm:mb-20">
                <h3 class="text-xl sm:text-2xl font-bold text-accent mb-6 sm:mb-8" data-aos="fade-up">Featured Projects</h3>
                <div class="space-y-16 sm:space-y-24">
                    <div
                        v-for="(project, index) in featuredProjects"
                        :key="project.id"
                        class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
                        :class="{ 'lg:grid-flow-dense': index % 2 === 1 }"
                    >
                        <!-- Project Image -->
                        <div
                            class="relative group lg:col-span-7"
                            :class="{ 'lg:col-start-6': index % 2 === 1 }"
                            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
                        >
                            <Link :href="`/project/${project.slug}`">
                                <div class="relative overflow-hidden rounded-xl bg-accent/10 border-2 border-accent/30 cursor-pointer shadow-xl hover:shadow-accent/20 transition-all duration-500">
                                    <img
                                        :src="project.images?.[0]?.image_path"
                                        :alt="`Screenshot of ${project.title}`"
                                        @error="(event) => { event.target.src = '/og-image.webp'; }"
                                        loading="lazy"
                                        decoding="async"
                                        width="1200"
                                        height="800"
                                        class="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div class="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <FontAwesomeIcon :icon="faEye" class="w-12 h-12 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <!-- Project Info -->
                        <div
                            class="space-y-4 sm:space-y-6 lg:col-span-5"
                            :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }"
                            :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
                        >
                            <div>
                                <p class="text-accent font-mono text-xs sm:text-sm mb-2 flex items-center">
                                    <span class="w-8 h-[2px] bg-accent mr-2"></span>
                                    Featured Project
                                </p>
                                <Link :href="`/project/${project.slug}`">
                                    <h3 class="text-2xl sm:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors">{{ project.title }}</h3>
                                </Link>
                                <div class="bg-card border border-border rounded-xl p-5 sm:p-8 shadow-card">
                                    <p class="text-muted-foreground leading-relaxed text-sm sm:text-base">{{ project.description }}</p>
                                </div>
                            </div>

                            <div class="flex flex-wrap gap-3">
                                <span
                                    v-for="tech in project.technologies"
                                    :key="tech.id ?? tech.name"
                                    class="text-xs sm:text-sm font-mono text-accent px-3 py-1 bg-accent/10 rounded-full border border-accent/30"
                                >
                                    {{ tech.name }}
                                </span>
                            </div>

                            <div class="flex items-center space-x-4">
                                <a
                                    v-if="project.github_url"
                                    :href="project.github_url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
                                    aria-label="View GitHub repository"
                                >
                                    <FontAwesomeIcon :icon="faGithub" class="w-6 h-6" />
                                </a>
                                <a
                                    v-if="project.live_url"
                                    :href="project.live_url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
                                    aria-label="View live project"
                                >
                                    <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Other Projects -->
            <div>
                <h3 class="text-xl sm:text-2xl font-bold text-accent mb-6 sm:mb-8" data-aos="fade-up">Other Projects</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div
                        v-for="(project, index) in otherProjects"
                        :key="project.id"
                        role="link"
                        tabindex="0"
                        @click="goToProject(project.slug)"
                        @keydown.enter.space.prevent="goToProject(project.slug)"
                        class="bg-card border border-border rounded-lg p-4 sm:p-6 card-hover group hover:scale-105 transition-all duration-300 block cursor-pointer hover:border-accent/50"
                        data-aos="fade-up"
                        :data-aos-delay="index * 100"
                    >
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <FontAwesomeIcon :icon="faEye" class="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                            </div>
                            <div class="flex items-center space-x-3">
                                <a
                                    v-if="project.github_url"
                                    :href="project.github_url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    @click.stop
                                    class="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
                                >
                                    <FontAwesomeIcon :icon="faGithub" class="w-5 h-5" />
                                </a>
                                <a
                                    v-if="project.live_url"
                                    :href="project.live_url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    @click.stop
                                    class="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
                                >
                                    <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <h3 class="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                            {{ project.title }}
                        </h3>

                        <p class="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                            {{ project.description }}
                        </p>

                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tech in project.technologies.slice(0, 3)"
                                :key="tech.id ?? tech.name"
                                class="text-xs font-mono text-accent"
                            >
                                {{ tech.name }}
                            </span>
                            <span v-if="project.technologies.length > 3" class="text-xs font-mono text-muted-foreground">
                                +{{ project.technologies.length - 3 }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- View More Button -->
            <div class="text-center mt-12" data-aos="fade-up">
                <Link href="/projects" class="btn-outline-cyan inline-block">View Archive</Link>
            </div>
        </div>
    </section>
</template>
