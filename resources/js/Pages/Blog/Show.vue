<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { ArrowLeft, Calendar, Clock, User, Tag } from '@lucide/vue';
import { marked } from 'marked';
import { truncateForMeta } from '@/Composables/useSeo';
import Seo from '@/Components/Portfolio/Seo.vue';
import Navigation from '@/Components/Portfolio/Navigation.vue';

const props = defineProps({
    post: { type: Object, required: true },
});

const page = usePage();
const renderedContent = computed(() => marked.parse(props.post.content || ''));
const seoDescription = computed(() => truncateForMeta(props.post.excerpt || ''));

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
</script>

<template>
    <Seo
        :title="`${post.title} | Blog`"
        :description="seoDescription"
        :canonical="`/blog/${post.slug}`"
        :image="post.image"
        type="article"
        :json-ld="[
            {
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                headline: post.title,
                description: seoDescription,
                image: post.image,
                author: { '@type': 'Person', name: post.author },
                datePublished: post.published_at,
                keywords: post.tags?.map((t) => t.name).join(', '),
                url: `${page.props.siteUrl}/blog/${post.slug}`,
            },
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                    { '@type': 'ListItem', position: 2, name: 'Blog', item: '/blog' },
                    { '@type': 'ListItem', position: 3, name: post.title, item: `/blog/${post.slug}` },
                ],
            },
        ]"
    />

    <div class="min-h-screen bg-background">
        <Navigation />

        <div class="pt-24 section-padding">
            <div class="max-w-4xl mx-auto">
                <Link href="/blog" class="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8">
                    <ArrowLeft class="w-5 h-5" />
                    <span>Back to Blog</span>
                </Link>

                <div class="mb-8">
                    <span v-if="post.category" class="inline-block px-3 py-1 text-xs font-medium rounded-full border bg-accent/20 text-accent border-accent/30 mb-4">
                        {{ post.category }}
                    </span>
                    <h1 class="text-3xl md:text-5xl font-bold text-foreground mb-6">{{ post.title }}</h1>

                    <div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span v-if="post.author" class="flex items-center gap-1">
                            <User class="w-4 h-4" />
                            {{ post.author }}
                        </span>
                        <span v-if="post.published_at" class="flex items-center gap-1">
                            <Calendar class="w-4 h-4" />
                            {{ formatDate(post.published_at) }}
                        </span>
                        <span v-if="post.read_time" class="flex items-center gap-1">
                            <Clock class="w-4 h-4" />
                            {{ post.read_time }} min read
                        </span>
                    </div>
                </div>

                <div v-if="post.image" class="mb-10 rounded-lg overflow-hidden border border-border">
                    <img :src="post.image" :alt="post.title" class="w-full h-auto object-cover" />
                </div>

                <article
                    class="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-code:text-accent prose-pre:bg-card prose-pre:border prose-pre:border-border prose-blockquote:border-accent prose-blockquote:text-muted-foreground"
                    v-html="renderedContent"
                ></article>

                <div v-if="post.tags?.length" class="mt-10 pt-8 border-t border-border">
                    <div class="flex flex-wrap items-center gap-2">
                        <Tag class="w-4 h-4 text-muted-foreground" />
                        <span
                            v-for="tag in post.tags"
                            :key="tag.id"
                            class="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-accent font-medium"
                        >
                            {{ tag.name }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
