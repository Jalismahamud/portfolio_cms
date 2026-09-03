<script setup>
import { Link } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCalendar, faClock, faArrowRight, faBook } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
    posts: { type: Array, default: () => [] },
});

const categoryColors = {
    Laravel: 'bg-red-500/20 text-red-400 border-red-500/30',
    React: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Frontend: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    DevOps: 'bg-green-500/20 text-green-400 border-green-500/30',
    CSS: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    AI: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Database: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Security: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    PHP: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
};

function getCategoryColor(category) {
    return categoryColors[category] || 'bg-accent/20 text-accent border-accent/30';
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
</script>

<template>
    <section id="blog" class="section-padding bg-card/30 relative overflow-hidden">
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 left-10 w-32 h-32 bg-highlight rounded-full blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="mb-16 sm:mb-20 text-center" data-aos="fade-down">
                <h2 class="section-header">
                    <span class="section-number">05.</span> Blog & Articles
                </h2>
                <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Technical articles and tutorials on web development, software architecture, and modern technologies.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8" :class="{ 'lg:grid-cols-3': posts.length >= 3 }">
                <Link
                    v-for="(post, index) in posts"
                    :key="post.id"
                    :href="`/blog/${post.slug}`"
                    class="group block bg-card border border-border rounded-xl overflow-hidden card-hover"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                >
                    <div class="relative h-48 sm:h-56 overflow-hidden">
                        <img
                            :src="post.image"
                            :alt="post.title"
                            @error="(event) => { event.target.src = '/og-image.webp'; }"
                            loading="lazy"
                            decoding="async"
                            width="500"
                            height="224"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                        <span
                            v-if="post.category"
                            class="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full border"
                            :class="getCategoryColor(post.category)"
                        >
                            {{ post.category }}
                        </span>
                    </div>

                    <div class="p-6">
                        <div class="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span v-if="post.published_at" class="flex items-center gap-1">
                                <FontAwesomeIcon :icon="faCalendar" class="w-4 h-4" />
                                {{ formatDate(post.published_at) }}
                            </span>
                            <span v-if="post.read_time" class="flex items-center gap-1">
                                <FontAwesomeIcon :icon="faClock" class="w-4 h-4" />
                                {{ post.read_time }} min read
                            </span>
                        </div>

                        <h3 class="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                            {{ post.title }}
                        </h3>

                        <p class="text-muted-foreground line-clamp-3 mb-4">{{ post.excerpt }}</p>

                        <span class="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                            Read More
                            <FontAwesomeIcon :icon="faArrowRight" class="w-4 h-4" />
                        </span>
                    </div>
                </Link>
            </div>

            <div class="mt-12 text-center" data-aos="fade-up">
                <Link
                    href="/blog"
                    class="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
                >
                    <FontAwesomeIcon :icon="faBook" class="w-5 h-5" />
                    View All Articles
                </Link>
            </div>
        </div>
    </section>
</template>
