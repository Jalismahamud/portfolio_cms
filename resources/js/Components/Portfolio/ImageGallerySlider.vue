<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
    images: { type: Array, required: true }, // [{ src, alt }]
    autoPlayInterval: { type: Number, default: 4000 },
});

const currentIndex = ref(0);
const isHovered = ref(false);
const fallbackImage = '/og-image.webp';
let intervalId = null;

function useFallbackImage(event) {
    if (event.target.src.endsWith(fallbackImage)) return;

    event.target.src = fallbackImage;
}

function startAutoPlay() {
    stopAutoPlay();
    intervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.images.length;
    }, props.autoPlayInterval);
}

function stopAutoPlay() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function goToNext() {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
    startAutoPlay();
}

function goToPrev() {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
    startAutoPlay();
}

function goToSlide(index) {
    currentIndex.value = index;
    startAutoPlay();
}

onMounted(() => {
    if (!isHovered.value) startAutoPlay();
});

onUnmounted(() => {
    stopAutoPlay();
});
</script>

<template>
    <div
        class="group relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 p-1"
        @mouseenter="isHovered = true; stopAutoPlay()"
        @mouseleave="isHovered = false; startAutoPlay()"
    >
        <!-- Main Image Container -->
        <div class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-card">
            <Transition name="slide-fade" mode="out-in">
                <div :key="currentIndex" class="absolute inset-0">
                    <img
                        :src="images[currentIndex].src"
                        :alt="images[currentIndex].alt"
                        @error="useFallbackImage"
                        decoding="async"
                        class="h-full w-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
            </Transition>

            <button
                v-if="images.length > 1"
                @click="goToPrev"
                class="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 hover:border-accent transition-all duration-300 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 z-10"
                aria-label="Previous image"
            >
                <FontAwesomeIcon :icon="faChevronLeft" class="w-5 h-5 text-foreground" />
            </button>
            <button
                v-if="images.length > 1"
                @click="goToNext"
                class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 hover:border-accent transition-all duration-300 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 z-10"
                aria-label="Next image"
            >
                <FontAwesomeIcon :icon="faChevronRight" class="w-5 h-5 text-foreground" />
            </button>

            <div class="absolute top-3 right-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs text-foreground font-medium">
                {{ currentIndex + 1 }} / {{ images.length }}
            </div>
        </div>

        <!-- Dot Indicators -->
        <div class="flex justify-center gap-2 mt-4 pb-2">
            <button
                v-for="(_, index) in images"
                :key="index"
                @click="goToSlide(index)"
                class="transition-all duration-300 rounded-full"
                :class="index === currentIndex ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground/60'"
                :aria-label="`Go to slide ${index + 1}`"
            />
        </div>

        <!-- Thumbnail Strip -->
        <div class="flex gap-2 mt-2 overflow-x-auto pb-2 px-1 scrollbar-hide">
            <button
                v-for="(image, index) in images"
                :key="index"
                @click="goToSlide(index)"
                class="relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 hover:scale-105"
                :class="index === currentIndex ? 'border-accent ring-2 ring-accent/30' : 'border-transparent hover:border-accent/50'"
            >
                <img
                    :src="image.src"
                    :alt="image.alt"
                    @error="useFallbackImage"
                    loading="lazy"
                    decoding="async"
                    width="64"
                    height="48"
                    class="w-full h-full object-cover"
                />
                <div v-if="index === currentIndex" class="absolute inset-0 bg-accent/20" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}
.slide-fade-enter-from {
    opacity: 0;
    transform: scale(0.95) translateX(30px);
}
.slide-fade-leave-to {
    opacity: 0;
    transform: scale(0.95) translateX(-30px);
}
</style>
