<script setup>
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { resolveSkillIcon } from '@/Composables/useFaIcon';
import TechIcon from './TechIcon.vue';
import CareerTimeline from './CareerTimeline.vue';

const props = defineProps({
    name: { type: String, default: '' },
    tagline: { type: String, default: '' },
    location: { type: String, default: '' },
    availabilityStatus: { type: Boolean, default: true },
    bio: { type: String, default: '' },
    skills: { type: Array, default: () => [] }, // [{ icon, title, description }]
    techStack: { type: Array, default: () => [] }, // [{ name, icon, category }]
    education: { type: Array, default: () => [] },
    certifications: { type: Array, default: () => [] },
    experiences: { type: Array, default: () => [] },
});

const bioParagraphs = (props.bio || '').split('\n').filter((p) => p.trim().length > 0);

const focusStack = computed(() => props.techStack.slice(0, 5).map((t) => t.name).join(' · '));
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

                    <!-- Developer Snapshot (terminal card) -->
                    <div class="bg-card border border-border rounded-xl overflow-hidden" data-aos="fade-up">
                        <div class="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                            <span class="w-3 h-3 rounded-full bg-red-500/70"></span>
                            <span class="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                            <span class="w-3 h-3 rounded-full bg-green-500/70"></span>
                            <span class="ml-2 text-xs text-muted-foreground font-mono">whoami.sh</span>
                        </div>
                        <div class="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed">
                            <p><span class="text-accent">$</span> whoami</p>
                            <p class="text-foreground font-semibold mb-3 break-words">{{ name }}<span v-if="tagline"> &mdash; {{ tagline }}</span></p>

                            <p><span class="text-accent">$</span> cat status.txt</p>
                            <p class="mb-3 text-muted-foreground">
                                <span :class="availabilityStatus ? 'text-green-400' : 'text-muted-foreground'">&#9679;</span>
                                {{ availabilityStatus ? 'Available for new projects' : 'Currently unavailable' }}
                                <span v-if="location" class="block">&#128205; {{ location }}</span>
                            </p>

                            <template v-if="focusStack">
                                <p><span class="text-accent">$</span> echo $CURRENTLY_FOCUSED_ON</p>
                                <p class="mb-3 text-muted-foreground break-words">{{ focusStack }}</p>
                            </template>

                            <p><span class="text-accent">$</span> <span class="inline-block w-2 h-4 bg-accent align-middle animate-pulse"></span></p>
                        </div>
                    </div>
                </div>

                <!-- Right side - Tech stack -->
                <div class="space-y-6 sm:space-y-8">
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

            <!-- Career Path Timeline -->
            <div class="mt-12 sm:mt-16" data-aos="fade-up">
                <CareerTimeline :education="education" :certifications="certifications" :experiences="experiences" />
            </div>
        </div>
    </section>
</template>
