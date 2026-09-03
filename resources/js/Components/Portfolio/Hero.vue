<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileArrowDown, faComment } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
    name: { type: String, required: true },
    bio: { type: String, default: '' },
    resumeUrl: { type: String, default: '/cv.pdf' },
    services: { type: Array, default: () => [] },
});

const defaultServices = [
    'Building high-performance web apps.',
    'Crafting scalable Laravel systems.',
    'Designing reliable backend architectures.',
    'Creating clean, intuitive interfaces.',
    'Managing cloud deployments.',
    'Engineering systems to scale.',
    'Delivering full-stack solutions.',
];

const serviceList = props.services.length ? props.services : defaultServices;

const currentTime = ref(new Date());
const serviceText = ref('');
const serviceIndex = ref(0);
const isTyping = ref(true);

const stars = Array.from({ length: 20 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${8 + Math.random() * 6}s`,
}));

let clockTimer = null;
let typingTimer = null;

function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });
}

function tickTyping() {
    const current = serviceList[serviceIndex.value];

    if (isTyping.value) {
        if (serviceText.value.length < current.length) {
            typingTimer = setTimeout(() => {
                serviceText.value = current.slice(0, serviceText.value.length + 1);
                tickTyping();
            }, 80);
        } else {
            typingTimer = setTimeout(() => {
                isTyping.value = false;
                tickTyping();
            }, 5000);
        }
    } else {
        if (serviceText.value.length > 0) {
            typingTimer = setTimeout(() => {
                serviceText.value = serviceText.value.slice(0, -1);
                tickTyping();
            }, 50);
        } else {
            serviceIndex.value = (serviceIndex.value + 1) % serviceList.length;
            isTyping.value = true;
            tickTyping();
        }
    }
}

onMounted(() => {
    clockTimer = setInterval(() => {
        currentTime.value = new Date();
    }, 1000);

    tickTyping();
});

onUnmounted(() => {
    if (clockTimer) clearInterval(clockTimer);
    if (typingTimer) clearTimeout(typingTimer);
});

function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <section class="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-24">
        <!-- Background pattern -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
        </div>

        <!-- Floating Stars/Particles -->
        <div
            v-for="(star, i) in stars"
            :key="i"
            class="absolute w-1 h-1 bg-accent rounded-full animate-star-slow opacity-60"
            :style="star"
        />

        <div class="w-full min-w-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <!-- Real-time clock -->
            <div class="mb-10 sm:mb-14 pt-4 text-accent font-mono text-base sm:text-lg animate-fade-in flex items-center justify-center gap-3">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>{{ formatTime(currentTime) }}</span>
                <span class="text-muted-foreground">|</span>
                <span class="text-muted-foreground">UTC+6 Dhaka</span>
            </div>

            <!-- Main heading -->
            <div class="mb-6 sm:mb-8 animate-slide-up">
                <p class="text-accent mb-3 sm:mb-4 text-base sm:text-lg font-mono">Hey, I'm</p>
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4 font-serif">
                    <span class="inline-block overflow-hidden whitespace-nowrap border-r-2 border-accent bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">
                        {{ name }}
                    </span>
                </h1>
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-muted-foreground mb-4 sm:mb-6 font-serif min-h-[2.4em] sm:min-h-[1.2em]">
                    <span class="inline-block max-w-full break-words border-r-2 border-accent">
                        {{ serviceText }}
                    </span>
                </h2>
            </div>

            <!-- Description -->
            <div class="mb-8 sm:mb-12 animate-slide-up" style="animation-delay: 0.2s">
                <p class="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
                    {{ bio }}
                </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up mb-12 sm:mb-16" style="animation-delay: 0.4s">
                <button
                    @click="scrollToContact"
                    class="group inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-muted/50 border border-border rounded-lg text-foreground font-medium hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                    <FontAwesomeIcon :icon="faComment" class="w-5 h-5" />
                    <span>Get In Touch</span>
                </button>

                <a
                    :href="resumeUrl"
                    download="My-CV.pdf"
                    class="group inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
                >
                    <FontAwesomeIcon :icon="faFileArrowDown" class="w-5 h-5" />
                    <span>Download Resume</span>
                </a>
            </div>
        </div>

        <!-- Floating elements -->
        <div class="absolute top-24 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
        <div class="absolute bottom-20 right-10 w-6 h-6 bg-highlight rounded-full animate-float opacity-40" style="animation-delay: 1s"></div>
        <div class="absolute top-1/2 left-20 w-2 h-2 bg-accent rounded-full animate-float opacity-80" style="animation-delay: 2s"></div>
        <div class="absolute top-36 right-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style="animation-delay: 0.5s"></div>
        <div class="absolute top-44 left-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-70" style="animation-delay: 1.5s"></div>
        <div class="absolute bottom-32 left-1/4 w-3 h-3 bg-highlight rounded-full animate-float opacity-50" style="animation-delay: 2.5s"></div>
        <div class="absolute top-1/3 right-16 w-2 h-2 bg-accent rounded-full animate-float opacity-60" style="animation-delay: 0.8s"></div>
        <div class="absolute bottom-40 right-1/3 w-4 h-4 bg-accent rounded-full animate-float opacity-40" style="animation-delay: 1.2s"></div>
        <div class="absolute top-28 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-80" style="animation-delay: 1.8s"></div>
    </section>
</template>
