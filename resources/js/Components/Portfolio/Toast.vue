<script setup>
defineProps({
    show: { type: Boolean, default: false },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
});
</script>

<template>
    <Teleport to="body">
        <Transition name="toast">
            <div
                v-if="show"
                class="fixed bottom-6 right-6 z-[60] max-w-sm w-full bg-card border border-border rounded-lg shadow-elegant p-4"
                role="status"
            >
                <p class="font-semibold text-foreground">{{ title }}</p>
                <p v-if="description" class="text-sm text-muted-foreground mt-1">{{ description }}</p>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
