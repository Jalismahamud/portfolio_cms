<script setup>
import { ref } from 'vue';
import { GraduationCap, Calendar, MapPin, Award, Book, Eye, X } from '@lucide/vue';

const props = defineProps({
    education: { type: Array, default: () => [] },
    certifications: { type: Array, default: () => [] },
    skillGroups: { type: Array, default: () => [] }, // [{ category, items: [{ item_text }] }]
});

const selectedImage = ref(null);

function formatIssueDate(date) {
    return new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
</script>

<template>
    <section id="education" class="section-padding bg-card/30">
        <div class="w-full sm:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
            <div class="mb-20" data-aos="fade-right">
                <h2 class="section-header">
                    <span class="section-number">04.</span> My Qualifications
                </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-20">
                <!-- Formal Education -->
                <div class="lg:col-span-2 space-y-12">
                    <div>
                        <h3 class="text-2xl font-bold text-accent mb-6 flex items-center" data-aos="fade-up">
                            <GraduationCap class="w-6 h-6 mr-2" />
                            Formal Education
                        </h3>

                        <div
                            v-for="(edu, index) in education"
                            :key="edu.id"
                            class="bg-card border border-border rounded-lg p-6 sm:p-8 lg:p-10 xl:p-12 mb-8 shadow-card hover:shadow-elegant transition-all duration-300"
                            data-aos="fade-up"
                            :data-aos-delay="index * 100"
                        >
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="md:col-span-1">
                                    <div class="bg-accent/10 border border-accent/20 rounded-lg p-4">
                                        <h4 class="font-bold text-foreground text-lg mb-2">{{ edu.degree }}</h4>
                                        <p class="text-accent font-semibold mb-3">{{ edu.institution }}</p>

                                        <div class="space-y-2 text-sm text-muted-foreground">
                                            <div class="flex items-center space-x-2">
                                                <Calendar class="w-4 h-4 text-accent" />
                                                <span>{{ edu.start_year }}{{ edu.end_year ? ` - ${edu.end_year}` : '' }}</span>
                                            </div>
                                            <div v-if="edu.location" class="flex items-center space-x-2">
                                                <MapPin class="w-4 h-4 text-accent" />
                                                <span>{{ edu.location }}</span>
                                            </div>
                                            <div v-if="edu.grade" class="flex items-center space-x-2">
                                                <Award class="w-4 h-4 text-accent" />
                                                <span>{{ edu.grade }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="md:col-span-2 space-y-6">
                                    <p v-if="edu.description" class="text-muted-foreground leading-relaxed">{{ edu.description }}</p>

                                    <div v-if="edu.highlights?.length">
                                        <h5 class="font-semibold text-foreground mb-3">Key Subjects:</h5>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            <div v-for="(highlight, i) in edu.highlights" :key="i" class="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <div class="w-2 h-2 bg-accent rounded-full"></div>
                                                <span>{{ highlight }}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="edu.projects_note?.length">
                                        <h5 class="font-semibold text-foreground mb-3">Projects:</h5>
                                        <ul class="space-y-1">
                                            <li v-for="(project, i) in edu.projects_note" :key="i" class="flex items-start space-x-2 text-sm text-muted-foreground">
                                                <div class="w-2 h-2 bg-highlight rounded-full mt-2"></div>
                                                <span>{{ project }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Skills Summary -->
                <div class="space-y-8">
                    <h3 class="text-2xl font-bold text-accent mb-6" data-aos="fade-left">Skills Overview</h3>

                    <div
                        v-for="(group, index) in skillGroups"
                        :key="group.id"
                        class="bg-card border border-border rounded-lg p-6 sm:p-7 lg:p-8 xl:p-10 shadow-card hover:shadow-elegant transition-all duration-300 group"
                        data-aos="fade-left"
                        :data-aos-delay="index * 100"
                    >
                        <h4 class="font-semibold text-foreground mb-3 text-sm group-hover:text-accent transition-colors">{{ group.category }}</h4>
                        <div class="flex flex-wrap gap-1">
                            <span
                                v-for="item in group.items"
                                :key="item.id"
                                class="px-2 py-1 bg-secondary text-accent text-xs rounded border border-border hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 cursor-default"
                            >
                                {{ item.item_text }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Certifications -->
            <div class="mt-16 xl:mt-20">
                <h3 class="text-2xl font-bold text-accent mb-6 flex items-center" data-aos="fade-up">
                    <Book class="w-6 h-6 mr-2" />
                    Certifications
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    <div
                        v-for="(cert, index) in certifications"
                        :key="cert.id"
                        class="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-card hover:shadow-elegant hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                        data-aos="fade-up"
                        :data-aos-delay="index * 100"
                    >
                        <div
                            v-if="cert.image"
                            class="w-full h-36 sm:h-40 bg-white/[0.08] rounded-lg mb-4 overflow-hidden border border-accent/20 group-hover:border-accent/40 transition-colors cursor-pointer relative flex-shrink-0"
                            @click="selectedImage = cert.image"
                        >
                            <img
                                :src="cert.image"
                                :alt="`${cert.title} certificate`"
                                loading="lazy"
                                decoding="async"
                                width="400"
                                height="280"
                                class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                            />
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                <Eye class="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <div v-else class="w-full h-36 sm:h-40 bg-accent/10 rounded-lg mb-4 flex items-center justify-center border border-accent/20 group-hover:border-accent/40 transition-colors flex-shrink-0">
                            <Book class="w-10 h-10 text-accent/50" />
                        </div>

                        <h4 class="font-semibold text-foreground mb-1.5 line-clamp-2 min-h-[2.75rem] group-hover:text-accent transition-colors">
                            {{ cert.title }}
                        </h4>
                        <p class="text-accent text-sm font-medium mb-1">{{ cert.provider }}</p>
                        <p class="text-muted-foreground text-xs mb-3 flex items-center gap-1.5">
                            <Calendar class="w-3.5 h-3.5 flex-shrink-0" />
                            {{ formatIssueDate(cert.issue_date) }}
                        </p>

                        <p v-if="cert.description" class="text-muted-foreground text-xs mb-3 line-clamp-2">{{ cert.description }}</p>

                        <div class="flex flex-wrap gap-1.5 mt-auto pt-1">
                            <span
                                v-for="(skill, i) in cert.skills"
                                :key="i"
                                class="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/10"
                            >
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Image Modal -->
                <Teleport to="body">
                    <Transition name="fade">
                        <div
                            v-if="selectedImage"
                            class="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
                            @click.self="selectedImage = null"
                        >
                            <div class="relative bg-background/95 backdrop-blur-sm border border-accent/20 rounded-lg p-4 sm:p-6 max-w-2xl sm:max-w-3xl lg:max-w-4xl w-full max-h-[95vh] overflow-hidden">
                                <button
                                    @click="selectedImage = null"
                                    class="absolute top-3 right-3 p-2 rounded-full bg-card border border-border hover:bg-accent/10 transition-colors z-10"
                                    aria-label="Close"
                                >
                                    <X class="w-5 h-5 text-foreground" />
                                </button>
                                <div class="flex items-center justify-center h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
                                    <img
                                        :src="selectedImage"
                                        alt="Certificate preview, enlarged"
                                        decoding="async"
                                        class="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                                        @contextmenu.prevent
                                        draggable="false"
                                    />
                                </div>
                            </div>
                        </div>
                    </Transition>
                </Teleport>
            </div>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
