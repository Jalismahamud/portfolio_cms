<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
    education: { type: Array, default: () => [] },
    certifications: { type: Array, default: () => [] },
    experiences: { type: Array, default: () => [] },
});

const trackRef = ref(null);
const progress = ref(0);
const direction = ref('down');
let ticking = false;

function formatYear(dateStr) {
    const d = new Date(dateStr);
    return Number.isNaN(d.getTime()) ? '' : String(d.getFullYear());
}

function formatMonthYear(dateStr) {
    const d = new Date(dateStr);
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

const chapters = computed(() => {
    const items = [];

    for (const edu of props.education) {
        const children = (edu.highlights?.length ? edu.highlights : [edu.description]).filter(Boolean);
        items.push({
            key: `edu-${edu.id}`,
            sortDate: `${edu.start_year}-01-01`,
            year: String(edu.start_year),
            title: edu.degree,
            place: edu.institution,
            children,
            ongoing: false,
        });
    }

    for (const cert of props.certifications) {
        const children = (cert.skills?.length ? cert.skills : [cert.description]).filter(Boolean);
        items.push({
            key: `cert-${cert.id}`,
            sortDate: cert.issue_date,
            year: formatYear(cert.issue_date),
            title: cert.title,
            place: cert.provider,
            children,
            ongoing: false,
        });
    }

    for (const exp of props.experiences) {
        const children = (exp.description || []).filter(Boolean);
        items.push({
            key: `exp-${exp.id}`,
            sortDate: exp.start_date,
            year: formatMonthYear(exp.start_date),
            title: exp.title,
            place: exp.end_date ? exp.company : `${exp.company} · Present`,
            children,
            ongoing: !exp.end_date,
        });
    }

    return items
        .filter((item) => item.title)
        .sort((a, b) => new Date(a.sortDate) - new Date(b.sortDate));
});

const renderChapters = computed(() => {
    const list = chapters.value;

    let totalSteps = 1;
    list.forEach((c) => {
        totalSteps += 1 + c.children.length;
    });

    let idx = 0;
    const result = list.map((c, ci) => {
        const parentThreshold = (idx + 0.15) / totalSteps;
        const parentActive = progress.value >= parentThreshold;
        idx += 1;

        const children = c.children.map((text) => {
            const t = (idx + 0.15) / totalSteps;
            const active = progress.value >= t;
            idx += 1;
            return { text, active };
        });

        return {
            ...c,
            active: parentActive,
            isLast: ci === list.length - 1,
            children,
        };
    });

    const runningThreshold = idx / totalSteps;

    return { chapters: result, runningActive: progress.value >= runningThreshold };
});

const showRunning = computed(() => {
    const list = chapters.value;
    return list.length > 0 && list[list.length - 1].ongoing && renderChapters.value.runningActive;
});

function updateProgress() {
    ticking = false;
    const el = trackRef.value;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    const traveled = vh * 0.45 - rect.top;
    const total = rect.height;
    const next = total > 0 ? Math.min(Math.max(traveled / total, 0), 1) : 0;

    if (next > progress.value + 0.0005) direction.value = 'down';
    else if (next < progress.value - 0.0005) direction.value = 'up';

    progress.value = next;
}

function onScroll() {
    if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateProgress);
    }
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateProgress();
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
});
</script>

<template>
    <div v-if="chapters.length" class="bg-card border border-border rounded-lg p-4 sm:p-6">
        <div class="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full font-mono text-xs text-accent mb-4">
                Career Path
            </div>
            <h3 class="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-3">My Journey So Far</h3>
            <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Scroll to launch the rocket &mdash; each stage opens up into what I actually learned there.
            </p>
        </div>

        <div ref="trackRef" class="relative mx-auto w-full max-w-[660px]">
            <div class="absolute left-[27px] top-1 bottom-1 w-[3px] rounded-full bg-border"></div>
            <div
                class="absolute left-[27px] top-1 w-[3px] rounded-full bg-gradient-to-b from-accent to-accent/40 transition-[height] duration-100 ease-linear"
                :style="{ height: `${progress * 100}%` }"
            ></div>

            <div
                class="absolute left-[9px] z-10 h-[38px] w-[38px] transition-[top] duration-100 ease-linear"
                :style="{ top: `calc(${progress * 100}% - 19px)` }"
            >
                <svg
                    viewBox="0 0 24 24" width="38" height="38"
                    class="transition-transform duration-300"
                    :style="{ transform: direction === 'up' ? 'rotate(0deg)' : 'rotate(180deg)', filter: 'drop-shadow(0 0 6px hsl(var(--accent) / 0.8))' }"
                >
                    <path d="M12 2c3.2 2.6 4.8 6.3 4.8 11c0 2.1-.5 3.9-1.3 5.3l-3.5 4l-3.5-4c-.8-1.4-1.3-3.2-1.3-5.3c0-4.7 1.6-8.4 4.8-11z" fill="hsl(var(--background))" stroke="hsl(var(--accent))" stroke-width="1.3" />
                    <circle cx="12" cy="10.5" r="2.1" fill="hsl(var(--background))" stroke="hsl(var(--accent))" stroke-width="1" />
                    <path d="M7.6 14.5l-3.3 1.7l1.1-3.6z" fill="hsl(var(--accent))" />
                    <path d="M16.4 14.5l3.3 1.7l-1.1-3.6z" fill="hsl(var(--accent))" />
                    <path d="M10.4 21l1.6 2.4l1.6-2.4z" fill="hsl(var(--highlight))" />
                </svg>
            </div>

            <template v-for="chapter in renderChapters.chapters" :key="chapter.key">
                <div
                    class="relative pb-5 pl-[70px] transition-all duration-700 ease-out"
                    :style="chapter.active ? { opacity: 1, transform: 'translateY(0)' } : { opacity: 0, transform: 'translateY(22px)' }"
                >
                    <div
                        class="absolute left-[13px] top-[2px] flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300"
                        :class="chapter.active ? 'bg-accent' : 'bg-card border-2 border-border'"
                        :style="chapter.active ? { boxShadow: '0 0 14px hsl(var(--accent) / 0.7)' } : {}"
                    >
                        <FontAwesomeIcon v-if="chapter.active" :icon="faCheck" class="h-3.5 w-3.5 text-background" />
                    </div>
                    <div class="rounded-xl border border-border bg-background/40 px-[22px] py-[18px]">
                        <div class="mb-1.5 font-mono text-xs tracking-wide text-accent">{{ chapter.year }}</div>
                        <h4 class="mb-1 font-serif text-xl font-normal text-foreground">{{ chapter.title }}</h4>
                        <p class="text-xs text-muted-foreground">{{ chapter.place }}</p>
                    </div>
                </div>

                <div
                    class="ml-10 flex flex-col gap-3.5 border-l-2 border-dashed border-highlight/30 pl-6"
                    :class="chapter.isLast ? 'mb-4' : 'mb-10'"
                >
                    <div
                        v-for="(child, ci) in chapter.children"
                        :key="ci"
                        class="flex items-start gap-3 transition-all duration-500 ease-out"
                        :style="child.active ? { opacity: 1, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-14px)' }"
                    >
                        <div
                            class="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 rounded-sm transition-all duration-300"
                            :class="child.active ? 'bg-highlight' : 'bg-muted'"
                            :style="child.active ? { boxShadow: '0 0 8px hsl(var(--highlight) / 0.7)' } : {}"
                        ></div>
                        <p class="text-sm leading-relaxed text-muted-foreground">{{ child.text }}</p>
                    </div>
                </div>
            </template>

            <div v-if="showRunning" class="relative pl-[70px] transition-opacity duration-500">
                <div class="flex items-center gap-2.5 font-mono text-sm text-accent">
                    <span class="h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></span>
                    Currently running&hellip;
                </div>
            </div>
        </div>
    </div>
</template>
