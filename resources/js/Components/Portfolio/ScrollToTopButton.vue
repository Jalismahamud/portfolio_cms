<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const showScrollTop = ref(false);

function handleScroll() {
    showScrollTop.value = window.scrollY > 400;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
    <Transition name="pop">
        <button
            v-if="showScrollTop"
            @click="scrollToTop"
            class="fixed bottom-8 right-8 z-50 p-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300"
            aria-label="Scroll to top"
        >
            <FontAwesomeIcon :icon="faArrowUp" class="w-5 h-5" />
        </button>
    </Transition>
</template>

<style scoped>
.pop-enter-active,
.pop-leave-active {
    transition: all 0.3s ease;
}
.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.5);
}
</style>
