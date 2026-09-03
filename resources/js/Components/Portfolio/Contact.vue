<script setup>
import { ref, watch } from 'vue';
import { useForm, usePage } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { resolveSocialMeta } from '@/Composables/useSocialIcon';
import { resolveContactIcon } from '@/Composables/useContactIcon';
import Toast from './Toast.vue';

const props = defineProps({
    contactInfo: { type: Array, default: () => [] }, // [{ icon, label, value, href }]
    socialLinks: { type: Array, default: () => [] }, // [{ platform_name, href }]
    ownerName: { type: String, default: '' },
});

const page = usePage();
const form = useForm({ name: '', email: '', subject: '', message: '' });
const toast = ref({ show: false, title: '', description: '' });

function handleSubmit() {
    form.post('/contact', {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();

            toast.value = {
                show: true,
                title: 'Message Sent!',
                description: page.props.flash?.success || "Thank you for reaching out. I'll get back to you soon.",
            };

            setTimeout(() => {
                toast.value.show = false;
            }, 4000);
        },
    });
}
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
                    <span class="section-number">06.</span> Get In Touch
                </h2>
                <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                    I'm always interested in new opportunities and interesting projects. Whether you have a question or just want to say hello, feel free to reach out!
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
                <!-- Contact Information -->
                <div class="space-y-6 sm:space-y-8">
                    <div data-aos="fade-right">
                        <h3 class="text-xl sm:text-2xl font-bold text-accent mb-4 sm:mb-6">Let's Connect</h3>
                        <p class="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                            I'm currently open to new opportunities and always excited to work on innovative projects. If you're looking for a dedicated developer or just want to connect, I'd love to hear from you.
                        </p>
                    </div>

                    <div class="space-y-4">
                        <component
                            :is="contact.href ? 'a' : 'div'"
                            v-for="(contact, index) in contactInfo"
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
                <div class="bg-card border border-border rounded-lg p-6 sm:p-8 lg:p-12 xl:p-16 shadow-card hover:shadow-elegant transition-all duration-300" data-aos="fade-left">
                    <h3 class="text-2xl font-bold text-accent mb-6">Send a Message</h3>

                    <form @submit.prevent="handleSubmit" class="space-y-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-foreground mb-2">Name *</label>
                                <input
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    class="w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"
                                    :class="form.errors.name ? 'border-destructive' : 'border-border'"
                                    placeholder="Your name"
                                />
                                <p v-if="form.errors.name" class="mt-1.5 text-sm text-destructive">{{ form.errors.name }}</p>
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-medium text-foreground mb-2">Email *</label>
                                <input
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"
                                    :class="form.errors.email ? 'border-destructive' : 'border-border'"
                                    placeholder="your.email@example.com"
                                />
                                <p v-if="form.errors.email" class="mt-1.5 text-sm text-destructive">{{ form.errors.email }}</p>
                            </div>
                        </div>

                        <div>
                            <label for="subject" class="block text-sm font-medium text-foreground mb-2">Subject *</label>
                            <input
                                id="subject"
                                v-model="form.subject"
                                type="text"
                                class="w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"
                                :class="form.errors.subject ? 'border-destructive' : 'border-border'"
                                placeholder="What's this about?"
                            />
                            <p v-if="form.errors.subject" class="mt-1.5 text-sm text-destructive">{{ form.errors.subject }}</p>
                        </div>

                        <div>
                            <label for="message" class="block text-sm font-medium text-foreground mb-2">Message *</label>
                            <textarea
                                id="message"
                                v-model="form.message"
                                rows="5"
                                class="w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground resize-none"
                                :class="form.errors.message ? 'border-destructive' : 'border-border'"
                                placeholder="Tell me about your project or just say hello..."
                            ></textarea>
                            <p v-if="form.errors.message" class="mt-1.5 text-sm text-destructive">{{ form.errors.message }}</p>
                        </div>

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

            <!-- Footer -->
            <div class="mt-8 pt-5 pb-1 border-t border-border text-center" data-aos="fade-up">
                <p class="text-muted-foreground">{{ ownerName }}</p>
                <p class="text-sm text-muted-foreground mt-1">© {{ new Date().getFullYear() }} {{ ownerName }}. All rights reserved.</p>
            </div>
        </div>

        <Toast :show="toast.show" :title="toast.title" :description="toast.description" />
    </section>
</template>
