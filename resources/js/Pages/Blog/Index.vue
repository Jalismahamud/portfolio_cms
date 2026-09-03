<script setup>
import { ref, watch } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCalendar, faClock, faArrowRight, faMagnifyingGlass, faFilter, faSpinner, faInbox } from '@fortawesome/free-solid-svg-icons';
import Seo from '@/Components/Portfolio/Seo.vue';
import Navigation from '@/Components/Portfolio/Navigation.vue';

const props = defineProps({
    posts: { type: Array, default: () => [] },
    categories: { type: Array, default: () => [] },
    search: { type: String, default: '' },
    category: { type: String, default: '' },
});

const searchQuery = ref(props.search);
const selectedCategory = ref(props.category || null);
const isSearching = ref(false);
let debounceTimer = null;

function applyFilters() {
    router.get(
        '/blog',
        {
            ...(searchQuery.value ? { search: searchQuery.value } : {}),
            ...(selectedCategory.value ? { category: selectedCategory.value } : {}),
        },
        {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onStart: () => (isSearching.value = true),
            onFinish: () => (isSearching.value = false),
        },
    );
}

watch(searchQuery, () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applyFilters, 300);
});

function selectCategory(category) {
    selectedCategory.value = category;
    applyFilters();
}

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
    <Seo
        title="Blog & Articles | Portfolio"
        description="Technical articles and tutorials on Laravel, Vue.js, REST APIs, databases, AI integration, and modern web development."
        canonical="/blog"
        :json-ld="{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: '/blog' },
            ],
        }"
    />

    <div class="min-h-screen bg-background">
        <Navigation />

        <div class="pt-32 pb-20 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12" data-aos="fade-down">
                    <span class="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
                        Blog & Articles
                    </span>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6">All Articles</h1>
                    <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore tutorials, insights, and best practices in web development, DevOps, AI, and modern technologies.
                    </p>
                </div>

                <div class="mb-10 space-y-6" data-aos="fade-up">
                    <div class="relative max-w-xl mx-auto">
                        <FontAwesomeIcon v-if="isSearching" :icon="faSpinner" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent animate-spin" />
                        <FontAwesomeIcon v-else :icon="faMagnifyingGlass" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search articles by title or keyword..."
                            class="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                    </div>

                    <div class="flex flex-wrap items-center justify-center gap-3">
                        <div class="flex items-center gap-2 text-muted-foreground mr-2">
                            <FontAwesomeIcon :icon="faFilter" class="w-4 h-4" />
                            <span class="text-sm font-medium">Filter:</span>
                        </div>
                        <button
                            @click="selectCategory(null)"
                            class="px-4 py-2 rounded-full text-sm font-medium transition-all"
                            :class="selectedCategory === null ? 'bg-accent text-accent-foreground' : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-accent'"
                        >
                            All
                        </button>
                        <button
                            v-for="cat in categories"
                            :key="cat"
                            @click="selectCategory(cat)"
                            class="px-4 py-2 rounded-full text-sm font-medium transition-all"
                            :class="selectedCategory === cat ? 'bg-accent text-accent-foreground' : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-accent'"
                        >
                            {{ cat }}
                        </button>
                    </div>

                    <div class="text-center text-sm text-muted-foreground">
                        Showing {{ posts.length }} article(s)
                    </div>
                </div>

                <div v-if="posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link
                        v-for="post in posts"
                        :key="post.id"
                        :href="`/blog/${post.slug}`"
                        class="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10"
                        data-aos="fade-up"
                    >
                        <div class="relative overflow-hidden">
                            <img
                                :src="post.image"
                                :alt="post.title"
                                loading="lazy"
                                decoding="async"
                                width="600"
                                height="400"
                                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span v-if="post.category" class="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full border" :class="getCategoryColor(post.category)">
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

                            <h3 class="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                {{ post.title }}
                            </h3>

                            <p class="text-muted-foreground text-sm mb-4 line-clamp-2">{{ post.excerpt }}</p>

                            <div class="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                                Read Article
                                <FontAwesomeIcon :icon="faArrowRight" class="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div v-else class="text-center py-16">
                    <FontAwesomeIcon :icon="faInbox" class="w-16 h-16 mb-4 text-muted-foreground mx-auto" />
                    <h3 class="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                    <p class="text-muted-foreground">Try adjusting your search or filter criteria</p>
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
