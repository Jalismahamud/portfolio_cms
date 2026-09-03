<script setup>
import { computed } from 'vue';
import { Head, usePage } from '@inertiajs/vue3';

const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    canonical: { type: String, required: true }, // root-relative path, e.g. "/project/cryptax"
    image: { type: String, default: null },
    type: { type: String, default: 'website' },
    noindex: { type: Boolean, default: false },
    jsonLd: { type: [Object, Array], default: null },
});

const page = usePage();

function toAbsoluteUrl(path) {
    if (!path) return null;
    if (/^https?:\/\//.test(path)) return path;
    const base = page.props.siteUrl || '';
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

const absoluteCanonical = computed(() => toAbsoluteUrl(props.canonical));
const absoluteImage = computed(() => toAbsoluteUrl(props.image || '/og-image.webp'));
const jsonLdEntries = computed(() => (props.jsonLd ? (Array.isArray(props.jsonLd) ? props.jsonLd : [props.jsonLd]) : []));
</script>

<template>
    <Head>
        <title>{{ title }}</title>
        <meta name="description" :content="description" />
        <meta name="robots" :content="noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'" />
        <link rel="canonical" :href="absoluteCanonical" />

        <meta property="og:title" :content="title" />
        <meta property="og:description" :content="description" />
        <meta property="og:url" :content="absoluteCanonical" />
        <meta property="og:type" :content="type" />
        <meta property="og:image" :content="absoluteImage" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" :content="title" />
        <meta name="twitter:description" :content="description" />
        <meta name="twitter:image" :content="absoluteImage" />

        <component
            v-for="(entry, index) in jsonLdEntries"
            :key="index"
            :is="'script'"
            type="application/ld+json"
            v-html="JSON.stringify(entry)"
        />
    </Head>
</template>
