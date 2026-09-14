<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useForm, usePage } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowUpRightFromSquare, faCheck, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { resolveSocialMeta } from '@/Composables/useSocialIcon';
import { resolveContactIcon } from '@/Composables/useContactIcon';
import Toast from './Toast.vue';

const props = defineProps({
    contactInfo: { type: Array, default: () => [] },
    socialLinks: { type: Array, default: () => [] },
    ownerName: { type: String, default: '' },
});

const page = usePage();
const siteSettings = computed(() => page.props.siteSettings || {});
const form = useForm({
    name: '',
    email: '',
    company: '',
    inquiry_type: '',
    budget_range: '',
    subject: '',
    message: '',
    website: '',
});
const toast = ref({ show: false, title: '', description: '' });
const clientErrors = ref({});
const mapElement = ref(null);
const mapReady = ref(false);
let map;
let mapObserver;

const inquiryTypes = [
    'Laravel Development',
    'Full Stack Development',
    'Web Application',
    'E-commerce Development',
    'REST API Development',
    'AI Integration',
    'ERP / Business Software',
    'Portfolio / Website',
    'General Inquiry',
    'Other',
];

const budgetRanges = ['Not Sure Yet', 'Under $500', '$500 - $1,000', '$1,000 - $3,000', '$3,000+', "Let's Discuss"];

const contactItems = computed(() => {
    const items = [...props.contactInfo];
    const labels = items.map((item) => item.label?.toLowerCase());

    if (!labels.some((label) => label?.includes('email'))) {
        items.unshift({ id: 'business-email', icon: 'Mail', label: 'Email', value: 'info@jalisdev.com', href: 'mailto:info@jalisdev.com' });
    }

    if (!labels.some((label) => label?.includes('location'))) {
        items.push({ id: 'business-location', icon: 'MapPin', label: 'Location', value: 'Khilbarirtek Boroitola Bazar, Rohim Road, Vatara, Dhaka' });
    }

    if (!labels.some((label) => label?.includes('website'))) {
        items.push({ id: 'business-website', icon: 'IdCard', label: 'Website', value: 'jalisdev.com', href: 'https://jalisdev.com' });
    }

    return items;
});

const footerOwnerName = computed(() => siteSettings.value.site_name || props.ownerName);
const footerDescription = computed(() => siteSettings.value.footer_description || 'Building thoughtful digital products with a focus on dependable user experiences.');
const copyrightText = computed(() => (siteSettings.value.copyright_text || '© {year} {name}. All rights reserved.')
    .replace('{year}', new Date().getFullYear())
    .replace('{name}', footerOwnerName.value));

function fieldError(field) {
    return clientErrors.value[field] || form.errors[field];
}

function validateForm() {
    const errors = {};

    if (!form.name.trim()) errors.name = 'Please enter your name.';
    if (!form.email.trim()) errors.email = 'Please enter your email address.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) errors.subject = 'Please add a subject.';
    if (!form.message.trim()) errors.message = 'Please tell me a little about your project.';
    else if (form.message.trim().length < 20) errors.message = 'Please write at least 20 characters.';

    clientErrors.value = errors;

    return Object.keys(errors).length === 0;
}

function handleSubmit() {
    if (!validateForm()) return;

    form.post('/contact', {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            clientErrors.value = {};

            toast.value = {
                show: true,
                title: 'Message Sent!',
                description: page.props.flash?.success || "Thank you for reaching out. I'll get back to you soon.",
            };

            setTimeout(() => {
                toast.value.show = false;
            }, 4000);
        },
        onError: () => {
            toast.value = {
                show: true,
                title: 'Unable to send message',
                description: 'Please review the highlighted fields and try again.',
            };
        },
    });
}

async function initializeMap() {
    const { default: L } = await import('leaflet');
    await import('leaflet/dist/leaflet.css');
    if (!mapElement.value) return;

    map = L.map(mapElement.value, { scrollWheelZoom: false }).setView([23.7914513, 90.430083], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
    }).addTo(map);

    L.marker([23.7914513, 90.430083])
        .addTo(map)
        .bindPopup('<strong>Khilbarirtek Boroitola Bazar</strong><br>Rohim Road, Vatara, Dhaka')
        .openPopup();
    mapReady.value = true;
}

onMounted(() => {
    mapObserver = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
            mapObserver.disconnect();
            initializeMap();
        }
    }, { rootMargin: '300px' });

    if (mapElement.value) mapObserver.observe(mapElement.value);
});

onBeforeUnmount(() => {
    mapObserver?.disconnect();
    map?.remove();
});
</script>

<template>
    <section id="contact" class="section-padding bg-background relative overflow-hidden">
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-40 h-40 bg-highlight rounded-full blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="mb-16 sm:mb-20 text-center" data-aos="fade-down">
                <h2 class="section-header">
                    <span class="section-number">07.</span> Get In Touch
                </h2>
                <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                    I'm always interested in new opportunities and interesting projects. Whether you have a question or just want to say hello, feel free to reach out!
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
                <!-- Contact Information -->
                <div class="space-y-6 sm:space-y-8">
                    <div data-aos="fade-right">
                        <h3 class="text-xl sm:text-2xl font-bold text-accent mb-4 sm:mb-6">Let's Work Together</h3>
                        <p class="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                                Have a question, project idea, or business opportunity? Share the details and I'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div class="space-y-4">
                        <component
                            :is="contact.href ? 'a' : 'div'"
                            v-for="(contact, index) in contactItems"
                            :key="contact.id"
                            :href="contact.href || undefined"
                            class="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg card-hover group"
                            data-aos="fade-right"
                            :data-aos-delay="index * 100"
                        >
                            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <FontAwesomeIcon :icon="resolveContactIcon(contact.icon)" class="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <p class="text-sm text-muted-foreground">{{ contact.label }}</p>
                                <p class="font-medium text-foreground group-hover:text-accent transition-colors">{{ contact.value }}</p>
                            </div>
                        </component>
                    </div>

                    <div class="border border-accent/30 bg-accent/5 rounded-lg p-5" data-aos="fade-right" data-aos-delay="250">
                        <div class="flex items-start gap-3">
                            <FontAwesomeIcon :icon="faCheck" class="mt-1 text-accent" />
                            <div>
                                <p class="font-semibold text-foreground">Available for freelance and remote opportunities.</p>
                                <p class="text-sm text-muted-foreground mt-1">Based in Khilbarirtek Boroitola Bazar, Vatara, Dhaka.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="300">
                        <h4 class="font-semibold text-foreground mb-4">Find me on</h4>
                        <div class="flex flex-wrap gap-3">
                            <a
                                v-for="social in socialLinks"
                                :key="social.id"
                                :href="social.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-card"
                                :class="[resolveSocialMeta(social.platform_name).color, resolveSocialMeta(social.platform_name).bgHover]"
                                :aria-label="social.platform_name"
                                :title="social.platform_name"
                            >
                                <FontAwesomeIcon :icon="resolveSocialMeta(social.platform_name).icon" class="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="bg-card border border-border rounded-lg p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-elegant transition-all duration-300" data-aos="fade-left">
                    <h3 class="text-2xl font-bold text-accent mb-2">Have a Project in Mind?</h3>
                    <p class="text-sm text-muted-foreground mb-6">Tell me what you are building, and let's explore how I can help.</p>

                    <form @submit.prevent="handleSubmit" class="space-y-6">
                        <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" class="absolute -left-[9999px] h-px w-px opacity-0" aria-hidden="true" />
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-foreground mb-2">Name *</label>
                                <input
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    class="w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"
                                    :class="fieldError('name') ? 'border-destructive' : 'border-border'"
                                    placeholder="Your name"
                                    autocomplete="name"
                                    :aria-invalid="Boolean(fieldError('name'))"
                                    aria-describedby="name-error"
                                />
                                <p v-if="fieldError('name')" id="name-error" class="mt-1.5 text-sm text-destructive">{{ fieldError('name') }}</p>
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-medium text-foreground mb-2">Email *</label>
                                <input
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"
                                    :class="fieldError('email') ? 'border-destructive' : 'border-border'"
                                    placeholder="your.email@example.com"
                                    autocomplete="email"
                                    :aria-invalid="Boolean(fieldError('email'))"
                                    aria-describedby="email-error"
                                />
                                <p v-if="fieldError('email')" id="email-error" class="mt-1.5 text-sm text-destructive">{{ fieldError('email') }}</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label for="company" class="block text-sm font-medium text-foreground mb-2">Company / Organization <span class="text-muted-foreground">(optional)</span></label>
                                <input id="company" v-model="form.company" type="text" class="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground" placeholder="Your company" autocomplete="organization" />
                            </div>

                            <div>
                                <label for="inquiry_type" class="block text-sm font-medium text-foreground mb-2">Project Type</label>
                                <select id="inquiry_type" v-model="form.inquiry_type" class="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground">
                                    <option value="">Select an option</option>
                                    <option v-for="type in inquiryTypes" :key="type" :value="type">{{ type }}</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="budget_range" class="block text-sm font-medium text-foreground mb-2">Budget Range <span class="text-muted-foreground">(optional)</span></label>
                            <select id="budget_range" v-model="form.budget_range" class="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground">
                                <option value="">Select a budget range</option>
                                <option v-for="budget in budgetRanges" :key="budget" :value="budget">{{ budget }}</option>
                            </select>
                        </div>

                        <div>
                            <label for="subject" class="block text-sm font-medium text-foreground mb-2">Subject *</label>
                            <input
                                id="subject"
                                v-model="form.subject"
                                type="text"
                                class="w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"
                                :class="fieldError('subject') ? 'border-destructive' : 'border-border'"
                                placeholder="What's this about?"
                                :aria-invalid="Boolean(fieldError('subject'))"
                                aria-describedby="subject-error"
                            />
                            <p v-if="fieldError('subject')" id="subject-error" class="mt-1.5 text-sm text-destructive">{{ fieldError('subject') }}</p>
                        </div>

                        <div>
                            <label for="message" class="block text-sm font-medium text-foreground mb-2">Message *</label>
                            <textarea
                                id="message"
                                v-model="form.message"
                                rows="5"
                                class="w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground resize-none"
                                :class="fieldError('message') ? 'border-destructive' : 'border-border'"
                                placeholder="Tell me about your project or just say hello..."
                                :aria-invalid="Boolean(fieldError('message'))"
                                aria-describedby="message-error"
                            ></textarea>
                            <p v-if="fieldError('message')" id="message-error" class="mt-1.5 text-sm text-destructive">{{ fieldError('message') }}</p>
                        </div>

                        <p v-if="toast.show && toast.title === 'Message Sent!'" class="flex items-start gap-2 rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm text-foreground" role="status">
                            <FontAwesomeIcon :icon="faCheck" class="mt-0.5 text-accent" />
                            <span>{{ toast.description }}</span>
                        </p>

                        <p v-if="toast.show && toast.title === 'Unable to send message'" class="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive" role="alert">
                            {{ toast.description }}
                        </p>

                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="w-full flex items-center justify-center space-x-2 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            <FontAwesomeIcon :icon="faPaperPlane" class="w-5 h-5" />
                            <span>{{ form.processing ? 'Sending...' : 'Send Message' }}</span>
                        </button>
                    </form>
                </div>
            </div>

            <div class="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end" data-aos="fade-up">
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <FontAwesomeIcon :icon="faLocationDot" class="text-accent" />
                        <h3 class="text-xl font-bold text-foreground">Find Me Here</h3>
                    </div>
                    <div ref="mapElement" class="relative h-72 sm:h-80 w-full rounded-lg border border-border overflow-hidden shadow-card" aria-label="Map showing Khilbarirtek Boroitola Bazar">
                        <div v-if="!mapReady" class="absolute inset-0 flex items-center justify-center bg-card text-sm text-muted-foreground">Loading map...</div>
                    </div>
                </div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=23.7914513,90.430083" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 btn-outline-cyan whitespace-nowrap">
                    <span>Get Directions</span>
                    <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="w-4 h-4" />
                </a>
            </div>

            <!-- Footer -->
            <div class="mt-8 pt-5 pb-1 border-t border-border text-center" data-aos="fade-up">
                <p class="text-muted-foreground">{{ footerOwnerName }}</p>
                <p class="max-w-xl mx-auto text-sm text-muted-foreground mt-2">{{ footerDescription }}</p>
                <p class="text-sm text-muted-foreground mt-2">{{ copyrightText }}</p>
            </div>
        </div>

        <Toast :show="toast.show" :title="toast.title" :description="toast.description" />
    </section>
</template>
