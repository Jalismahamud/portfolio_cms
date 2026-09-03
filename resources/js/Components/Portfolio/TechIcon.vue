<script setup>
import { ref } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
    icon: { type: String, default: '' },
    category: { type: String, default: '' },
});

const isHovered = ref(false);

const isImageIcon = /^https?:\/\//.test(props.icon);
</script>

<template>
    <div
        class="relative group"
        data-aos="zoom-in"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div class="bg-secondary p-4 rounded-lg text-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20 hover:bg-accent/10 border border-transparent hover:border-accent/30">
            <div class="text-3xl mb-2 transition-all duration-300 cursor-pointer flex items-center justify-center h-12">
                <img
                    v-if="isImageIcon"
                    :src="icon"
                    :alt="`${name} icon`"
                    loading="lazy"
                    decoding="async"
                    width="40"
                    height="40"
                    class="w-10 h-10 object-contain transition-all duration-300"
                    :class="{ 'scale-125 drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]': isHovered }"
                />
                <span v-else class="text-3xl transition-transform duration-300" :class="{ 'scale-125': isHovered }">
                    {{ icon }}
                </span>
            </div>
            <div class="text-sm font-medium text-foreground">{{ name }}</div>
            <div class="text-xs text-accent mt-1">{{ category }}</div>
        </div>

        <div
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-accent/30 rounded-lg text-xs text-foreground whitespace-nowrap z-20 transition-all duration-200"
            :class="isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'"
        >
            Expert in {{ name }}
            <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-accent/30"></div>
        </div>
    </div>
</template>
