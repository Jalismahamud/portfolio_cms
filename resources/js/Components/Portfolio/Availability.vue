<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWandMagicSparkles, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
    email: { type: String, default: '' },
    availabilityStatus: { type: Boolean, default: true },
    yearsExperience: { type: Number, default: null },
    projectsDelivered: { type: Number, default: null },
    satisfactionRate: { type: Number, default: null },
});

function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <section id="availability" class="section-padding bg-card/50 relative overflow-hidden">
        <div class="absolute inset-0 opacity-20">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
        </div>

        <div class="max-w-4xl mx-auto text-center relative z-10">
            <div class="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8" data-aos="fade-down">
                <FontAwesomeIcon :icon="faWandMagicSparkles" class="w-4 h-4 text-accent animate-pulse" />
                <span class="text-sm font-medium text-accent">
                    {{ availabilityStatus ? 'Open for Opportunities' : 'Currently Unavailable' }}
                </span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
                <span class="text-foreground">Available for </span>
                <span class="text-accent text-glow">Work</span>
            </h2>

            <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                I'm available for freelance projects and full-time roles, Laravel backends, Vue.js frontends, REST APIs, and AI integrations. Let's build something that ships.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
                <button
                    @click="scrollToContact"
                    class="group inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1"
                >
                    <FontAwesomeIcon :icon="faEnvelope" class="w-5 h-5" />
                    <span>Hire Me for Your Next Project</span>
                    <FontAwesomeIcon :icon="faArrowRight" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                    v-if="email"
                    :href="`mailto:${email}`"
                    class="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
                >
                    <span>{{ email }}</span>
                </a>
            </div>

            <div
                v-if="yearsExperience || projectsDelivered || satisfactionRate"
                class="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <div v-if="yearsExperience" class="text-center">
                    <div class="text-2xl sm:text-3xl font-bold text-accent">{{ yearsExperience }}+</div>
                    <div class="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div v-if="projectsDelivered" class="text-center">
                    <div class="text-2xl sm:text-3xl font-bold text-accent">{{ projectsDelivered }}+</div>
                    <div class="text-sm text-muted-foreground mt-1">Projects Delivered</div>
                </div>
                <div v-if="satisfactionRate" class="text-center">
                    <div class="text-2xl sm:text-3xl font-bold text-accent">{{ satisfactionRate }}%</div>
                    <div class="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
                </div>
            </div>
        </div>
    </section>
</template>
