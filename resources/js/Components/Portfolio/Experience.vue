<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCalendar, faLocationDot, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
    experiences: { type: Array, default: () => [] },
    resumeUrl: { type: String, default: '/cv.pdf' },
});

function formatDuration(exp) {
    const start = new Date(exp.start_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    const end = exp.end_date
        ? new Date(exp.end_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
        : 'Present';
    return `${start} - ${end}`;
}
</script>

<template>
    <section id="experience" class="section-padding bg-card/30">
        <div class="w-full sm:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
            <div class="mb-16">
                <h2 class="section-header">
                    <span class="section-number">02.</span> Where I've Worked
                </h2>
            </div>

            <div class="space-y-8">
                <div
                    v-for="(exp, index) in experiences"
                    :key="exp.id"
                    class="bg-card border border-border rounded-lg p-5 sm:p-6 lg:p-8 card-hover animate-slide-up"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                >
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Left side - Company info -->
                        <div class="lg:col-span-1">
                            <div class="bg-accent/10 border border-accent/20 rounded-lg p-4 sm:p-5 lg:p-6 space-y-3">
                                <h3 class="text-xl font-bold text-foreground">{{ exp.title }}</h3>
                                <h4 class="text-lg text-accent font-semibold">{{ exp.company }}</h4>

                                <div class="space-y-2 text-sm text-muted-foreground">
                                    <div class="flex items-center space-x-2">
                                        <FontAwesomeIcon :icon="faCalendar" class="w-4 h-4 text-accent" />
                                        <span>{{ formatDuration(exp) }}</span>
                                    </div>
                                    <div v-if="exp.location" class="flex items-center space-x-2">
                                        <FontAwesomeIcon :icon="faLocationDot" class="w-4 h-4 text-accent" />
                                        <span>{{ exp.location }}</span>
                                    </div>
                                    <div class="flex gap-2 mt-2">
                                        <span
                                            v-for="(t, i) in exp.employment_types"
                                            :key="i"
                                            class="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium"
                                        >
                                            {{ t }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right side - Job details -->
                        <div class="lg:col-span-2 space-y-6">
                            <div>
                                <h5 class="font-semibold text-foreground mb-3">Key Responsibilities:</h5>
                                <ul class="space-y-2">
                                    <li
                                        v-for="(item, i) in exp.description"
                                        :key="i"
                                        class="flex items-start space-x-3 text-muted-foreground"
                                    >
                                        <div class="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <span>{{ item }}</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h5 class="font-semibold text-foreground mb-3">Technologies Used:</h5>
                                <div class="flex flex-wrap gap-2">
                                    <span
                                        v-for="tech in exp.technologies"
                                        :key="tech.id ?? tech.name"
                                        class="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-accent font-medium"
                                    >
                                        {{ tech.name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Download CV Button -->
            <div class="text-center mt-12">
                <a :href="resumeUrl" download="My-CV.pdf" class="btn-outline-cyan inline-flex items-center space-x-2">
                    <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="w-4 h-4" />
                    <span>Download Full CV</span>
                </a>
            </div>
        </div>
    </section>
</template>
