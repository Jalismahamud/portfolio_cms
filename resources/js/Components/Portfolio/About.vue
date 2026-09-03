<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { resolveSkillIcon } from '@/Composables/useFaIcon';
import TechIcon from './TechIcon.vue';
import ImageGallerySlider from './ImageGallerySlider.vue';

const props = defineProps({
    bio: { type: String, default: '' },
    skills: { type: Array, default: () => [] }, // [{ icon, title, description }]
    techStack: { type: Array, default: () => [] }, // [{ name, icon, category }]
    galleryImages: { type: Array, default: () => [] }, // [{ image, alt_text }]
    profilePhoto: { type: String, default: null },
});

const bioParagraphs = (props.bio || '').split('\n').filter((p) => p.trim().length > 0);

const sliderImages = [
    [{ src: props.profilePhoto || '/og-image.webp', alt: 'Profile photo' }],
    ...props.galleryImages.map((g) => ({ src: g.image, alt: g.alt_text || 'Gallery photo' })),
];
</script>

<template>
    <section id="about" class="section-padding bg-background">
        <div class="w-full sm:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
            <div class="mb-12 sm:mb-16" data-aos="fade-right">
                <h2 class="section-header">
                    <span class="section-number">01.</span> About Me
                </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <!-- Left side - About text and skills -->
                <div class="space-y-8">
                    <div class="space-y-6 text-muted-foreground leading-relaxed" data-aos="fade-up">
                        <p v-for="(paragraph, i) in bioParagraphs" :key="i">{{ paragraph }}</p>
                    </div>

                    <!-- Skills Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                            v-for="(skill, index) in skills"
                            :key="skill.id ?? skill.title"
                            class="bg-card p-4 rounded-lg border border-border card-hover group"
                            data-aos="fade-up"
                            :data-aos-delay="index * 100"
                        >
                            <div class="flex items-start space-x-3">
                                <FontAwesomeIcon
                                    :icon="resolveSkillIcon(skill.icon)"
                                    class="w-6 h-6 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                                />
                                <div>
                                    <h3 class="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">{{ skill.title }}</h3>
                                    <p class="text-sm text-muted-foreground">{{ skill.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right side - Gallery and Tech stack -->
                <div class="space-y-6 sm:space-y-8">
                    <!-- Photo Gallery Slider -->
                    <div v-if="sliderImages.length" class="bg-card border border-border rounded-xl p-4 sm:p-5" data-aos="fade-left">
                        <p class="text-sm text-muted-foreground mb-4 text-center">
                            Software Engineer
                        </p>
                        <ImageGallerySlider :images="sliderImages" :auto-play-interval="5000" />
                    </div>

                    <!-- Tech Stack -->
                    <div class="bg-card border border-border rounded-lg p-4 sm:p-6" data-aos="fade-left">
                        <h3 class="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-accent">Technologies I Work With</h3>
                        <div class="tech-grid">
                            <TechIcon
                                v-for="tech in techStack"
                                :key="tech.id ?? tech.name"
                                :name="tech.name"
                                :icon="tech.icon"
                                :category="tech.category"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
