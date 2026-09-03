<script setup>
import { computed } from 'vue';
import Seo from '@/Components/Portfolio/Seo.vue';
import Navigation from '@/Components/Portfolio/Navigation.vue';
import Hero from '@/Components/Portfolio/Hero.vue';
import About from '@/Components/Portfolio/About.vue';
import Experience from '@/Components/Portfolio/Experience.vue';
import Projects from '@/Components/Portfolio/Projects.vue';
import Availability from '@/Components/Portfolio/Availability.vue';
import Education from '@/Components/Portfolio/Education.vue';
import Blog from '@/Components/Portfolio/Blog.vue';
import AIShowcase from '@/Components/Portfolio/AIShowcase.vue';
import Contact from '@/Components/Portfolio/Contact.vue';
import ScrollToTopButton from '@/Components/Portfolio/ScrollToTopButton.vue';

const props = defineProps({
    profile: { type: Object, default: () => ({}) },
    skills: { type: Array, default: () => [] },
    techStack: { type: Array, default: () => [] },
    galleryImages: { type: Array, default: () => [] },
    experiences: { type: Array, default: () => [] },
    featuredProjects: { type: Array, default: () => [] },
    otherProjects: { type: Array, default: () => [] },
    education: { type: Array, default: () => [] },
    certifications: { type: Array, default: () => [] },
    skillGroups: { type: Array, default: () => [] },
    latestBlogPosts: { type: Array, default: () => [] },
    contactInfo: { type: Array, default: () => [] },
    socialLinks: { type: Array, default: () => [] },
});

const seoTitle = computed(() =>
    props.profile?.name ? `${props.profile.name} | Laravel & Vue.js Full Stack Developer` : 'Portfolio',
);
const seoDescription = computed(() => props.profile?.tagline || props.profile?.bio?.slice(0, 155) || '');
</script>

<template>
    <Seo
        :title="seoTitle"
        :description="seoDescription"
        canonical="/"
        :image="profile?.profile_photo"
        :json-ld="{
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile?.name,
            jobTitle: profile?.tagline,
            email: profile?.email,
        }"
    />

    <div class="min-h-screen bg-background overflow-x-hidden">
        <Navigation :resume-url="profile?.resume_file" :logo-url="profile?.profile_photo" />

        <Hero :name="profile?.name" :bio="profile?.bio" :resume-url="profile?.resume_file" />

        <About
            :bio="profile?.bio"
            :skills="skills"
            :tech-stack="techStack"
            :gallery-images="galleryImages"
            :profile-photo="profile?.profile_photo"
        />

        <Experience :experiences="experiences" :resume-url="profile?.resume_file" />

        <Projects :featured-projects="featuredProjects" :other-projects="otherProjects" />

        <Availability
            :email="profile?.email"
            :availability-status="profile?.availability_status"
            :years-experience="profile?.years_experience"
            :projects-delivered="profile?.projects_delivered"
            :satisfaction-rate="profile?.satisfaction_rate"
        />

        <Education :education="education" :certifications="certifications" :skill-groups="skillGroups" />

        <Blog :posts="latestBlogPosts" />

        <AIShowcase />

        <Contact :contact-info="contactInfo" :social-links="socialLinks" :owner-name="profile?.name" />

        <ScrollToTopButton />
    </div>
</template>
