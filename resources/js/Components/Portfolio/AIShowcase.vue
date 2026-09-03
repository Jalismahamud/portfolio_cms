<script setup>
import { Brain, Sparkles, Cpu, Zap, MessageSquare, Image, Code, Bot } from '@lucide/vue';

const aiModels = [
    {
        name: 'OpenAI GPT',
        icon: '🤖',
        description: 'Advanced language models for natural conversation and code generation',
        color: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
        features: ['GPT-4 Turbo', 'DALL-E 3', 'Whisper'],
    },
    {
        name: 'Google Gemini',
        icon: '✨',
        description: 'Multimodal AI for text, image, and video understanding',
        color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
        features: ['Gemini Pro', 'Gemini Ultra', 'Vision AI'],
    },
    {
        name: 'Anthropic Claude',
        icon: '🧠',
        description: 'Safe and helpful AI assistant for complex reasoning tasks',
        color: 'from-purple-500/20 to-violet-500/20 border-purple-500/30',
        features: ['Claude 3', 'Constitutional AI', 'Long Context'],
    },
    {
        name: 'xAI Grok',
        icon: '⚡',
        description: 'Real-time knowledge AI with wit and direct answers',
        color: 'from-gray-500/20 to-slate-500/20 border-gray-500/30',
        features: ['Grok-2', 'Real-time Data', 'X Integration'],
    },
    {
        name: 'Meta LLaMA',
        icon: '🦙',
        description: 'Open-source large language models for research and development',
        color: 'from-orange-500/20 to-amber-500/20 border-orange-500/30',
        features: ['LLaMA 3', 'Code LLaMA', 'Open Source'],
    },
];

const aiServices = [
    { icon: MessageSquare, title: 'AI Chatbots', description: 'Build intelligent conversational interfaces powered by LLMs' },
    { icon: Image, title: 'Image Generation', description: 'Create stunning visuals with AI-powered image generation' },
    { icon: Code, title: 'Code Assistance', description: 'AI-powered code completion, review, and generation' },
    { icon: Bot, title: 'Automation', description: 'Intelligent automation workflows with AI decision making' },
];
</script>

<template>
    <section id="ai" class="section-padding bg-background relative overflow-hidden">
        <div class="absolute inset-0">
            <div class="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div
            class="absolute inset-0 opacity-5"
            style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px"
        ></div>

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="mb-16 sm:mb-20 text-center" data-aos="fade-down">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
                    <Brain class="w-5 h-5 text-accent" />
                    <span class="text-accent font-medium">AI Integration</span>
                </div>
                <h2 class="section-header">
                    <span class="bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">Artificial Intelligence</span>
                </h2>
                <p class="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Exploring and integrating cutting-edge AI technologies to build intelligent, innovative solutions that transform user experiences.
                </p>
            </div>

            <!-- AI Models Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div
                    v-for="(model, index) in aiModels"
                    :key="model.name"
                    class="group relative bg-gradient-to-br border rounded-2xl p-6 card-hover"
                    :class="model.color"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                >
                    <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div class="relative z-10">
                        <div class="text-4xl mb-4">{{ model.icon }}</div>
                        <h3 class="text-xl font-bold text-foreground mb-2">{{ model.name }}</h3>
                        <p class="text-muted-foreground text-sm mb-4">{{ model.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="feature in model.features"
                                :key="feature"
                                class="px-2 py-1 bg-background/50 border border-border rounded-md text-xs text-accent"
                            >
                                {{ feature }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- AI Services -->
            <div class="mb-16">
                <h3 class="text-2xl font-bold text-foreground text-center mb-8" data-aos="fade-up">AI Integration Services</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        v-for="(service, index) in aiServices"
                        :key="service.title"
                        class="group bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
                        data-aos="fade-up"
                        :data-aos-delay="index * 100"
                    >
                        <div class="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            <component :is="service.icon" class="w-7 h-7 text-accent" />
                        </div>
                        <h4 class="text-lg font-semibold text-foreground mb-2">{{ service.title }}</h4>
                        <p class="text-sm text-muted-foreground">{{ service.description }}</p>
                    </div>
                </div>
            </div>

            <!-- Learning Journey -->
            <div class="bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl p-8 sm:p-12" data-aos="fade-up">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent mb-4">
                            <Sparkles class="w-4 h-4" />
                            Continuous Learning
                        </div>
                        <h3 class="text-2xl sm:text-3xl font-bold text-foreground mb-4">AI Learning Journey</h3>
                        <p class="text-muted-foreground mb-6">
                            Constantly exploring new AI technologies, from large language models to computer vision, staying at the forefront of artificial intelligence advancements.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <Zap class="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-foreground">Prompt Engineering</h4>
                                    <p class="text-sm text-muted-foreground">Crafting effective prompts for optimal AI responses</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <Cpu class="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-foreground">Model Fine-tuning</h4>
                                    <p class="text-sm text-muted-foreground">Customizing AI models for specific use cases</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <Brain class="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-foreground">RAG Systems</h4>
                                    <p class="text-sm text-muted-foreground">Building retrieval-augmented generation applications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="relative aspect-square max-w-md mx-auto">
                            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-accent/20 to-blue-500/20 rounded-full animate-pulse"></div>
                            <div class="absolute inset-8 bg-gradient-to-br from-accent/10 to-transparent rounded-full border border-accent/20 flex items-center justify-center">
                                <div class="text-center">
                                    <Brain class="w-16 h-16 text-accent mx-auto mb-4 animate-float" />
                                    <span class="text-2xl font-bold text-foreground">AI</span>
                                    <p class="text-sm text-muted-foreground mt-1">Powered Solutions</p>
                                </div>
                            </div>
                            <div class="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center animate-float">
                                <span class="text-lg">🤖</span>
                            </div>
                            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center animate-float" style="animation-delay: 0.5s">
                                <span class="text-lg">✨</span>
                            </div>
                            <div class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center animate-float" style="animation-delay: 1s">
                                <span class="text-lg">🧠</span>
                            </div>
                            <div class="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500/30 rounded-full flex items-center justify-center animate-float" style="animation-delay: 1.5s">
                                <span class="text-lg">🦙</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
