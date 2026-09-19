<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\BlogTag;
use App\Models\Certification;
use App\Models\ContactInfo;
use App\Models\Education;
use App\Models\Experience;
use App\Models\GalleryImage;
use App\Models\Profile;
use App\Models\Project;
use App\Models\ProjectImage;
use App\Models\Skill;
use App\Models\SkillGroup;
use App\Models\SocialLink;
use App\Models\Technology;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        $profile = Profile::updateOrCreate([], [
            'name' => 'Jalis Mahamud',
            'tagline' => 'Full Stack Web Developer | PHP & Laravel Specialist',
            'bio' => "Hi, I'm Jalis \xe2\x80\x94 a Full Stack Web Developer with 3+ years of professional experience building scalable, secure web applications with Laravel, PHP, Vue.js and React.js.\nI've shipped e-commerce platforms, SaaS products and enterprise systems, with a strong focus on REST APIs, clean database design and real-world payment integrations (Stripe, SSL Commerz, Bkash).\nBased in Dhaka, Bangladesh, I enjoy turning complex business requirements into robust backends and responsive, user-friendly interfaces.",
            'profile_photo' => '/og-image.webp',
            'resume_file' => '/storage/resume/cv.pdf',
            'location' => 'Dhaka, Bangladesh',
            'email' => 'jalismahamud31@gmail.com',
            'phone' => '+8801785927491',
            'availability_status' => true,
            'years_experience' => 3,
            'projects_delivered' => 20,
            'satisfaction_rate' => 100,
        ]);

        $skills = [
            ['icon' => 'server', 'title' => 'Backend Development', 'description' => 'PHP (OOP & Design Patterns), Laravel, RESTful API development and Eloquent ORM'],
            ['icon' => 'code', 'title' => 'Frontend Development', 'description' => 'Vue.js 3, React.js and JavaScript (ES6+) with Tailwind CSS and Bootstrap'],
            ['icon' => 'database', 'title' => 'Database Design', 'description' => 'MySQL & PostgreSQL schema design, query optimization and data migration'],
            ['icon' => 'globe', 'title' => 'Payment Gateway Integration', 'description' => 'Stripe, Stripe Connect, SSL Commerz and Bkash payment gateway integrations'],
            ['icon' => 'code-branch', 'title' => 'DevOps & Cloud', 'description' => 'Git, GitHub, AWS (EC2, S3, RDS), Docker and CI/CD deployment workflows'],
            ['icon' => 'mobile-screen', 'title' => 'Auth & Performance', 'description' => 'JWT authentication, Socialite OAuth, performance optimization and SEO implementation'],
        ];
        foreach ($skills as $i => $skill) {
            Skill::updateOrCreate(['title' => $skill['title']], [...$skill, 'sort_order' => $i]);
        }
        Skill::whereNotIn('title', collect($skills)->pluck('title'))->delete();

        $techList = [
            ['name' => 'PHP', 'icon' => 'php', 'category' => 'Backend'],
            ['name' => 'Laravel', 'icon' => 'laravel', 'category' => 'Backend'],
            ['name' => 'REST APIs', 'icon' => 'cloud', 'category' => 'Backend'],
            ['name' => 'JavaScript', 'icon' => 'js', 'category' => 'Frontend'],
            ['name' => 'Vue.js', 'icon' => 'vuejs', 'category' => 'Frontend'],
            ['name' => 'React.js', 'icon' => 'react', 'category' => 'Frontend'],
            ['name' => 'HTML5', 'icon' => 'html5', 'category' => 'Frontend'],
            ['name' => 'CSS3', 'icon' => 'css3-alt', 'category' => 'Frontend'],
            ['name' => 'Bootstrap', 'icon' => 'bootstrap', 'category' => 'Frontend'],
            ['name' => 'Tailwind CSS', 'icon' => 'tailwindcss', 'category' => 'Frontend'],
            ['name' => 'MySQL', 'icon' => 'database', 'category' => 'Database'],
            ['name' => 'PostgreSQL', 'icon' => 'postgresql', 'category' => 'Database'],
            ['name' => 'Database Design', 'icon' => 'diagram-project', 'category' => 'Database'],
            ['name' => 'Git', 'icon' => 'git-alt', 'category' => 'Tools'],
            ['name' => 'GitHub', 'icon' => 'github', 'category' => 'Tools'],
            ['name' => 'AWS', 'icon' => 'aws', 'category' => 'DevOps'],
            ['name' => 'Docker', 'icon' => 'docker', 'category' => 'DevOps'],
            ['name' => 'Linux', 'icon' => 'linux', 'category' => 'DevOps'],
            ['name' => 'CI/CD', 'icon' => 'code-branch', 'category' => 'DevOps'],
            ['name' => 'Stripe', 'icon' => 'stripe', 'category' => 'Payment'],
            ['name' => 'Bkash', 'icon' => 'wallet', 'category' => 'Payment'],
            ['name' => 'Testing', 'icon' => 'vial', 'category' => 'Other'],
            ['name' => 'Project Planning', 'icon' => 'list-check', 'category' => 'Other'],
            ['name' => 'Agile Methodology', 'icon' => 'arrows-spin', 'category' => 'Other'],
        ];
        $technologies = collect();
        foreach ($techList as $i => $tech) {
            $technologies->push(Technology::updateOrCreate(['name' => $tech['name']], [...$tech, 'sort_order' => $i]));
        }
        Technology::whereNotIn('name', collect($techList)->pluck('name'))->delete();

        foreach (range(1, 4) as $i) {
            GalleryImage::updateOrCreate(
                ['alt_text' => "Gallery photo {$i}"],
                ['image' => "https://placehold.co/600x450?text=Gallery+{$i}", 'sort_order' => $i - 1],
            );
        }

        $experienceData = [
            [
                'title' => 'Full Stack Web Developer',
                'company' => 'Betopia Group',
                'location' => 'Dhaka, Bangladesh',
                'start_date' => '2024-08-01',
                'end_date' => '2025-11-30',
                'employment_types' => ['Full-time', 'On-site'],
                'description' => [
                    'Designed and developed full-stack web applications using Laravel and Vue.js for diverse client requirements',
                    'Implemented RESTful APIs, database architectures and payment integrations, collaborating with cross-functional teams',
                    'Integrated 4+ payment gateways (Stripe, SSL Commerz, Bkash) for e-commerce platforms',
                    'Built responsive Vue.js frontends with modern UI/UX practices',
                    'Optimized database queries resulting in a 40%+ performance improvement',
                ],
                'technologies' => ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'REST APIs', 'Stripe'],
            ],
            [
                'title' => 'Full Stack Web Developer',
                'company' => 'Classic IT & Sky Mart LTD',
                'location' => 'Dhaka, Bangladesh',
                'start_date' => '2025-11-01',
                'end_date' => null,
                'employment_types' => ['Full-time', 'On-site'],
                'description' => [
                    'Contributing to full-stack web application development using Laravel and Vue.js',
                    'Building and maintaining ERP and e-commerce modules with secure payment integrations',
                    'Developing RESTful APIs with role-based authentication and authorization',
                ],
                'technologies' => ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'REST APIs'],
            ],
        ];
        $experienceIds = collect();
        foreach ($experienceData as $i => $data) {
            $techs = $data['technologies'];
            unset($data['technologies']);

            $experience = Experience::updateOrCreate(
                ['title' => $data['title'], 'company' => $data['company']],
                [...$data, 'sort_order' => $i],
            );
            $experience->technologies()->sync($technologies->whereIn('name', $techs)->pluck('id'));
            $experienceIds->push($experience->id);
        }
        Experience::whereNotIn('id', $experienceIds)->delete();

        $projectsData = [
            [
                'slug' => 'chique-ai-fashion-assistant',
                'title' => 'Chique - AI Fashion Assistant Platform',
                'description' => 'An intelligent fashion assistant platform to help users discover and manage personalized outfit ideas.',
                'long_description' => "Developed an intelligent fashion assistant platform to help users discover and manage personalized outfit ideas. I integrated external fashion retailer APIs to pull in live product data, built an AI stylist chat experience for outfit comparisons, and wired up Stripe subscription billing to monetize premium access.",
                'github_url' => null,
                'live_url' => null,
                'features' => [
                    'Clothing recommendations from top fashion retailers (Amazon, Shein, etc.)',
                    'Daily outfit inspiration tailored to weather and occasions',
                    'Outfit comparison tool with AI stylist chat support',
                    'Stripe subscription integration for premium access and monetization',
                ],
                'challenges' => [
                    'Normalizing product data across multiple third-party retailer APIs',
                    'Keeping recommendation logic fast under real-time chat load',
                ],
                'is_featured' => true,
                'techs' => ['PHP', 'Laravel', 'MySQL', 'React.js', 'Stripe'],
            ],
            [
                'slug' => 'bimrparts-bmw-parts-marketplace',
                'title' => 'Bimrparts - Second-hand BMW Parts Marketplace',
                'description' => 'A niche marketplace platform for buying and selling second-hand BMW car parts.',
                'long_description' => "Built a niche marketplace platform for buying and selling second-hand BMW car parts. It supports a role-switching system for a seamless buyer/seller experience, Stripe Connect for secure seller onboarding and multi-party payouts, and an admin approval workflow to keep listings trustworthy.",
                'github_url' => null,
                'live_url' => null,
                'features' => [
                    'Role-switching system for seamless buyer/seller experience',
                    'Stripe Connect integration for secure seller onboarding and multi-party payouts',
                    'Admin product approval system to maintain quality and trust',
                    'Real-time notifications and email alerts for order and account updates',
                ],
                'challenges' => [
                    'Handling multi-party payouts correctly with Stripe Connect',
                    'Designing a part categorization system flexible enough for varied BMW models',
                ],
                'is_featured' => false,
                'techs' => ['PHP', 'Laravel', 'MySQL', 'React.js', 'Stripe'],
            ],
            [
                'slug' => 'cryptax-crypto-tax-platform',
                'title' => 'Cryptax - Cryptocurrency Taxation Platform',
                'description' => 'A secure and intelligent cryptocurrency taxation platform for individuals and businesses to simplify tax reporting.',
                'long_description' => "Built a secure and intelligent cryptocurrency taxation platform for individuals and businesses to simplify tax reporting. It's designed around accuracy, efficiency, and secure tax automation, with real-time crypto calculations and Stripe subscription billing for plan management.",
                'github_url' => null,
                'live_url' => null,
                'features' => [
                    'AI-powered tax assistant for generating custom reports and real-time crypto calculations',
                    'Live Expert Chat for direct support from certified crypto tax professionals',
                    'Stripe subscription billing for plan management and recurring payments',
                    'Designed for accuracy, efficiency, and secure tax automation',
                ],
                'challenges' => [
                    'Keeping tax calculations accurate across fluctuating crypto prices',
                    'Generating compliant, audit-ready reports automatically',
                ],
                'is_featured' => true,
                'techs' => ['PHP', 'Laravel', 'MySQL', 'React.js', 'Stripe'],
            ],
            [
                'slug' => 'dfl-properties-real-estate-management',
                'title' => 'DFL Properties - Cooperative Real Estate Management System',
                'description' => 'A cooperative real estate management system for managing multi-project client enrollments, payments, and financial operations.',
                'long_description' => "Developed a cooperative real estate management system for managing multi-project client enrollments, payments, and financial operations. It gives Accounts Head, Director, Client, and Employee roles their own scoped dashboards, backed by a dual-entry accounting engine with automated journal entries and financial reports.",
                'github_url' => null,
                'live_url' => null,
                'features' => [
                    'Role-based access control for Accounts Head, Director, Client, and Employee with scoped dashboards',
                    'Automated installment scheduling, due/overdue tracking, and PDF receipt generation',
                    'Dual-entry accounting engine with Chart of Accounts, automated journal entries, and financial reports',
                    'Director commission auto-calculation, HRM with payroll generation and CSV attendance import',
                ],
                'challenges' => [
                    'Modeling a dual-entry accounting engine that stays balanced under concurrent transactions',
                    'Coordinating installment, commission and payroll logic within a single role-based system',
                ],
                'is_featured' => true,
                'techs' => ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
            ],
            [
                'slug' => 'hrm-system',
                'title' => 'Human Resource Management (HRM) System',
                'description' => 'A modern HRM system to efficiently manage employee records, attendance tracking, payroll processing, and performance monitoring.',
                'long_description' => "Built a modern HRM system to efficiently manage employee records, attendance tracking, payroll processing, and performance monitoring, so HR teams get one place to handle the full employee lifecycle instead of juggling spreadsheets.",
                'github_url' => null,
                'live_url' => null,
                'features' => [
                    'Employee Management for centralized staff profiles and lifecycle handling',
                    'Attendance Management with real-time tracking and leave control',
                    'Payroll System for automated salary, deductions, and payslip generation',
                    'KPI Metrics Dashboard to evaluate employee performance and productivity',
                ],
                'challenges' => [
                    'Syncing biometric device data reliably with attendance records',
                    'Keeping payroll calculations accurate across varied deduction rules',
                ],
                'is_featured' => false,
                'techs' => ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
            ],
        ];

        foreach ($projectsData as $i => $data) {
            $techs = $data['techs'];
            unset($data['techs']);

            $project = Project::updateOrCreate(['slug' => $data['slug']], [...$data, 'sort_order' => $i]);
            $project->technologies()->sync($technologies->whereIn('name', $techs)->pluck('id'));

            ProjectImage::updateOrCreate(
                ['project_id' => $project->id, 'sort_order' => 0],
                ['image_path' => "https://placehold.co/1200x800?text=" . urlencode($project->title)],
            );
        }
        Project::whereNotIn('slug', collect($projectsData)->pluck('slug'))->delete();

        $educationData = [
            [
                'degree' => 'Bachelor of Science in Computer Science & Engineering',
                'institution' => 'Dhaka International University',
                'location' => 'Satarkul, Badda, Dhaka, Bangladesh',
                'start_year' => 2021,
                'end_year' => 2025,
                'grade' => '3.34 CGPA',
                'description' => 'Studied computer science fundamentals including programming, software engineering, and information systems.',
                'highlights' => ['Object-Oriented Programming & Design Patterns', 'Relational Database Design', 'Software Development Life Cycle'],
                'projects_note' => ['Database Design Projects', 'RESTful API Development with Authentication'],
            ],
            [
                'degree' => 'Higher Secondary Certificate (HSC)',
                'institution' => 'Shahid Smriti Degree College',
                'location' => 'Swarupkati, Pirojpur, Bangladesh',
                'start_year' => 2018,
                'end_year' => 2020,
                'grade' => '4.17 GPA',
                'description' => 'Completed Higher Secondary education in the Science stream.',
                'highlights' => ['Mathematics', 'Physics', 'Chemistry', 'ICT'],
                'projects_note' => ['Science Fair Projects'],
            ],
        ];
        $educationIds = collect();
        foreach ($educationData as $i => $edu) {
            $record = Education::updateOrCreate(['degree' => $edu['degree'], 'institution' => $edu['institution']], [...$edu, 'sort_order' => $i]);
            $educationIds->push($record->id);
        }
        Education::whereNotIn('id', $educationIds)->delete();

        $certData = [
            [
                'title' => 'Web Development with PHP & Laravel',
                'provider' => 'OSTAD Limited',
                'issue_date' => '2024-01-15',
                'description' => 'Comprehensive certification course covering the full PHP & Laravel ecosystem, front-end integration with Vue.js/React, REST API development, authentication & authorization, payment integration, and best practices in modern web development.',
                'skills' => ['PHP', 'Laravel', 'Vue.js', 'React.js', 'REST API', 'Payment Integration'],
            ],
        ];
        foreach ($certData as $i => $cert) {
            Certification::updateOrCreate(['title' => $cert['title']], [
                ...$cert,
                'image' => 'https://placehold.co/400x280?text=Certificate',
                'sort_order' => $i,
            ]);
        }
        Certification::whereNotIn('title', collect($certData)->pluck('title'))->delete();

        $skillGroupsData = [
            'Backend' => ['PHP (OOP, Design Patterns)', 'Laravel', 'REST API Development', 'Database Design (MySQL, PostgreSQL)', 'Authentication & Authorization'],
            'Frontend' => ['Vue.js 3', 'JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Axios'],
            'Databases' => ['MySQL', 'PostgreSQL', 'Query Optimization', 'Database Schema Design', 'Data Migration'],
            'Payment Gateways' => ['Stripe', 'Stripe Connect', 'SSL Commerz', 'Bkash'],
            'DevOps & Tools' => ['Git', 'GitHub', 'AWS (EC2, S3, RDS)', 'Docker', 'Composer', 'NPM'],
            'Other' => ['JWT Authentication', 'Socialite OAuth', 'Laravel Eloquent ORM', 'Blade Templating', 'SEO Implementation', 'Responsive Design'],
        ];
        foreach (array_values($skillGroupsData) as $i => $items) {
            $category = array_keys($skillGroupsData)[$i];
            $group = SkillGroup::updateOrCreate(['category' => $category], ['sort_order' => $i]);
            foreach ($items as $j => $item) {
                $group->items()->updateOrCreate(['item_text' => $item], ['sort_order' => $j]);
            }
            $group->items()->whereNotIn('item_text', $items)->delete();
        }
        SkillGroup::whereNotIn('category', array_keys($skillGroupsData))->delete();

        $blogPostsData = [
            [
                'slug' => 'building-scalable-laravel-applications',
                'title' => 'Building Scalable Laravel Applications',
                'excerpt' => 'Practical lessons on structuring Laravel apps so they keep performing as traffic and complexity grow.',
                'category' => 'Laravel',
                'content' => "## Introduction\n\nEvery Laravel project starts simple, but a handful of decisions early on decide whether it stays maintainable once real traffic hits. Over the last few years working on e-commerce and marketplace projects, a few habits have consistently paid off.\n\n## Database Optimization\n\nIndex the columns you actually filter and sort by, not every column that looks important:\n\n```php\nSchema::table('orders', function (Blueprint \$table) {\n    \$table->index(['status', 'created_at']);\n});\n```\n\nEager load relationships explicitly instead of letting Blade or a resource trigger N+1 queries \xe2\x80\x94 `Telescope` or `debugbar` catches most of these early.\n\n## Caching Strategies\n\nRedis is worth the setup cost even on small projects. Cache expensive aggregate queries (dashboard stats, catalog filters) and invalidate them on the specific events that change the data, not on a timer.\n\n## Queues for Everything Slow\n\nEmail sending, PDF generation, webhook calls to payment gateways \xe2\x80\x94 none of that belongs in the request/response cycle. Pushing it to a queued job keeps response times predictable.\n\n## Conclusion\n\nScalability in Laravel is rarely about a single trick. It's indexing the right columns, caching the right queries, and keeping the request cycle free of anything that can happen later.",
                'tags' => ['Laravel', 'PHP', 'Scalability'],
                'read_time' => 7,
            ],
            [
                'slug' => 'vue-vs-react-choosing-frontend-2026',
                'title' => 'Vue.js vs React: Choosing the Right Frontend for Your Laravel Project',
                'excerpt' => 'A comparison based on shipping production apps with both Vue.js and React on top of Laravel APIs.',
                'category' => 'Frontend',
                'content' => "## Two Frameworks, Two Different Feels\n\nI've shipped production apps with both Vue.js and React sitting on top of Laravel backends, and the honest answer to \"which is better\" is: it depends on your team and your API shape.\n\n## When Vue.js Wins\n\nFor projects using Inertia.js, Vue's single-file components and reactivity system feel closer to Blade, which makes onboarding backend-heavy teams faster. State management stays simple for most CRUD-heavy admin panels and dashboards.\n\n## When React Wins\n\nFor client-facing product apps with complex, deeply nested UI state \xe2\x80\x94 like a fashion recommendation feed or a real-time chat widget \xe2\x80\x94 React's ecosystem (React Query, Zustand) tends to scale better with a larger frontend-focused team.\n\n## What Actually Matters\n\n- API contract consistency (a clean REST or resource layer matters more than the framework choice)\n- Team familiarity \xe2\x80\x94 don't introduce a second framework mid-project without a strong reason\n- Long-term maintenance cost, not just initial development speed\n\n## Conclusion\n\nBoth pair well with Laravel. Pick based on your team's strengths and the complexity of your UI state, not framework hype.",
                'tags' => ['Vue.js', 'React.js', 'Frontend'],
                'read_time' => 6,
            ],
            [
                'slug' => 'integrating-stripe-connect-marketplace',
                'title' => 'Integrating Stripe Connect for Multi-Vendor Marketplaces',
                'excerpt' => 'Notes on wiring up Stripe Connect for seller onboarding and multi-party payouts in a Laravel marketplace.',
                'category' => 'Payments',
                'content' => "## Why Stripe Connect\n\nWhen you're building a marketplace where multiple sellers need to get paid directly \xe2\x80\x94 not just your platform \xe2\x80\x94 Stripe Connect is the tool built for exactly that. I used it on a used-parts marketplace where sellers needed their own payout accounts.\n\n## Onboarding Sellers\n\nStripe's hosted onboarding flow handles KYC so you don't have to store sensitive identity documents yourself:\n\n```php\n\$account = \$stripe->accounts->create([\n    'type' => 'express',\n    'country' => 'US',\n    'capabilities' => [\n        'transfers' => ['requested' => true],\n    ],\n]);\n```\n\nRedirect the seller to an account link, then listen for the `account.updated` webhook to know when they're fully verified.\n\n## Splitting Payments\n\nUse `application_fee_amount` on the PaymentIntent to take your platform cut automatically, with the remainder routed to the connected account \xe2\x80\x94 no manual transfer logic needed for the common case.\n\n## Handling Refunds and Disputes\n\nRefunds against a destination charge need to be tested carefully; by default the connected account absorbs the refund, which surprises a lot of teams the first time it happens.\n\n## Conclusion\n\nStripe Connect removes most of the hard parts of multi-party payments, but webhook handling and refund behavior deserve extra test coverage before launch.",
                'tags' => ['Stripe', 'Stripe Connect', 'Laravel'],
                'read_time' => 9,
            ],
            [
                'slug' => 'sslcommerz-bkash-payment-integration-bangladesh',
                'title' => 'A Practical Guide to SSLCommerz and Bkash Integration in Laravel',
                'excerpt' => 'What to expect when adding local Bangladeshi payment gateways alongside Stripe in a Laravel checkout flow.',
                'category' => 'Payments',
                'content' => "## Why Local Gateways Matter\n\nFor e-commerce platforms targeting Bangladeshi customers, Stripe alone isn't enough \xe2\x80\x94 SSLCommerz and Bkash cover cards, mobile banking and mobile wallets that a huge share of customers actually use.\n\n## SSLCommerz Flow\n\nSSLCommerz uses a redirect-based session flow: you create a session server-side, redirect the customer to their hosted payment page, then verify the transaction with a server-to-server validation call once they return \xe2\x80\x94 never trust the redirect query string alone.\n\n## Bkash Integration\n\nBkash's Merchant API is token-based and requires refreshing the grant token periodically. I wrapped it in a small service class so the rest of the checkout code never has to know which gateway is active:\n\n```php\ninterface PaymentGateway\n{\n    public function charge(Order \$order): PaymentResult;\n}\n```\n\n## Reconciliation\n\nBoth gateways send IPN/webhook callbacks, but I've found it safer to also run a scheduled job that re-verifies any order still marked \"pending\" after a few minutes \xe2\x80\x94 callbacks occasionally get dropped.\n\n## Conclusion\n\nSupporting multiple local gateways means more edge cases, but a common `PaymentGateway` interface keeps the checkout controller clean regardless of which one the customer picks.",
                'tags' => ['SSL Commerz', 'Bkash', 'Payment Gateway'],
                'read_time' => 8,
            ],
            [
                'slug' => 'jwt-authentication-laravel-api',
                'title' => 'Securing REST APIs with JWT Authentication in Laravel',
                'excerpt' => 'How I set up stateless JWT authentication for a Laravel API consumed by separate Vue.js and mobile clients.',
                'category' => 'Backend',
                'content' => "## Why JWT Over Sessions\n\nOnce an API needs to serve both a Vue.js SPA and a mobile client, stateless authentication becomes a lot easier to reason about than cookie-based sessions.\n\n## Setting Up\n\nUsing `tymon/jwt-auth`, the token issuance is straightforward once the guard is configured in `auth.php`:\n\n```php\n\$token = auth('api')->attempt([\n    'email' => \$request->email,\n    'password' => \$request->password,\n]);\n```\n\n## Refresh Tokens Done Right\n\nShort-lived access tokens (15\xe2\x80\x9330 minutes) paired with a refresh endpoint keep the blast radius small if a token leaks, without forcing users to log in constantly.\n\n## Middleware and Guards\n\nA custom middleware validates the token on every protected route and attaches the authenticated user to the request, so controllers stay unaware of the auth mechanism entirely.\n\n## Common Pitfalls\n\n- Forgetting to blacklist tokens on logout\n- Storing tokens in `localStorage` instead of an httpOnly cookie when XSS is a real concern\n- Not rotating the signing secret on a schedule\n\n## Conclusion\n\nJWT isn't automatically more secure than sessions \xe2\x80\x94 it just trades server-side state for careful client-side handling. Get the refresh and revocation strategy right and it works well for multi-client APIs.",
                'tags' => ['JWT', 'Laravel', 'Security'],
                'read_time' => 8,
            ],
            [
                'slug' => 'laravel-socialite-oauth-social-login',
                'title' => 'Implementing Social Login with Laravel Socialite',
                'excerpt' => 'Adding Google and Facebook login to a Laravel app without turning the User model into a mess.',
                'category' => 'Backend',
                'content' => "## The Goal\n\nUsers expect a one-click login option. Laravel Socialite makes the OAuth handshake simple, but keeping the User model clean as you add providers takes a bit more care.\n\n## Basic Setup\n\n```php\nRoute::get('/auth/{provider}/redirect', function (\$provider) {\n    return Socialite::driver(\$provider)->redirect();\n});\n\nRoute::get('/auth/{provider}/callback', function (\$provider) {\n    \$socialUser = Socialite::driver(\$provider)->user();\n    // find or create a local user\n});\n```\n\n## Avoiding Duplicate Accounts\n\nMatch incoming social users by email first, and only fall back to creating a new account if no match exists \xe2\x80\x94 otherwise the same person ends up with two accounts depending on how they signed up.\n\n## Linking Multiple Providers\n\nA separate `social_accounts` pivot table (provider name + provider id + user id) lets one user link both Google and Facebook to the same account later, instead of hardcoding provider columns onto `users`.\n\n## Conclusion\n\nSocialite handles the OAuth mechanics; the real design work is in how you map social identities onto your existing user accounts without creating duplicates.",
                'tags' => ['Socialite', 'OAuth', 'Laravel'],
                'read_time' => 6,
            ],
            [
                'slug' => 'query-optimization-mysql-postgresql',
                'title' => 'Query Optimization Techniques for MySQL and PostgreSQL',
                'excerpt' => 'Concrete steps I use to find and fix slow queries before they become production incidents.',
                'category' => 'Database',
                'content' => "## Start With EXPLAIN\n\nBefore adding any index, run `EXPLAIN ANALYZE` and actually read the output. Guessing at indexes without a query plan usually adds write overhead without fixing the read that's actually slow.\n\n## Composite Indexes, Ordered Correctly\n\nColumn order in a composite index matters \xe2\x80\x94 put the equality filters before the range filters:\n\n```sql\nCREATE INDEX idx_orders_status_created ON orders (status, created_at);\n```\n\n## N+1 Is Still the #1 Offender\n\nIn Laravel, `->with()` eager loading fixes most of it, but watch for N+1 hiding inside accessors or Blade loops that call a relationship method directly.\n\n## MySQL vs PostgreSQL Differences\n\nPostgreSQL's query planner is generally more sophisticated with complex joins and partial indexes, while MySQL (with InnoDB) tends to be more forgiving of simpler, high-write workloads. Neither is universally faster \xe2\x80\x94 it depends on the query shape.\n\n## Pagination at Scale\n\nOffset pagination gets slow on large tables; cursor-based (keyset) pagination using an indexed column keeps performance flat regardless of page depth.\n\n## Conclusion\n\nMost \"database is slow\" problems trace back to a handful of causes: missing indexes, N+1 queries, or offset pagination on a large table. Fix those first before reaching for caching.",
                'tags' => ['MySQL', 'PostgreSQL', 'Performance'],
                'read_time' => 9,
            ],
            [
                'slug' => 'deploying-laravel-docker-aws',
                'title' => 'Deploying Laravel Applications with Docker on AWS EC2',
                'excerpt' => 'A walkthrough of the Docker + AWS setup I use to deploy Laravel apps with predictable, repeatable releases.',
                'category' => 'DevOps',
                'content' => "## Why Docker\n\nContainerizing a Laravel app removes the \"works on my machine\" problem and makes it trivial to run the exact same image in staging and production.\n\n## A Minimal Dockerfile\n\n```dockerfile\nFROM php:8.3-fpm\nCOPY . /var/www\nRUN composer install --no-dev --optimize-autoloader\n```\n\nPair it with an nginx container and a separate container for the queue worker \xe2\x80\x94 keeping the web process and the worker process isolated makes scaling either one independently much easier.\n\n## AWS Setup\n\nEC2 for the app containers, RDS for a managed MySQL/PostgreSQL instance, and S3 for user-uploaded files and backups. Storing uploads outside the container means deployments never risk losing user data.\n\n## Zero-Downtime Releases\n\nRunning migrations before swapping traffic, plus a simple blue-green setup behind a load balancer, avoids the dreaded \"maintenance mode\" window on every deploy.\n\n## Environment Secrets\n\nAWS Systems Manager Parameter Store keeps `.env` values out of the Docker image entirely \xe2\x80\x94 secrets get injected at container start, not baked into a layer.\n\n## Conclusion\n\nDocker plus AWS's managed services (RDS, S3) gives you reproducible deploys without having to hand-manage servers for every environment.",
                'tags' => ['Docker', 'AWS', 'DevOps'],
                'read_time' => 10,
            ],
            [
                'slug' => 'building-real-time-notifications-laravel-echo',
                'title' => 'Building Real-Time Order Notifications with Laravel Echo',
                'excerpt' => 'How real-time order and status notifications were added to a marketplace using Laravel Echo and broadcasting.',
                'category' => 'Laravel',
                'content' => "## The Requirement\n\nSellers on a marketplace platform needed to know the moment an order came in, without refreshing the page. Laravel's event broadcasting plus Echo on the frontend solved this cleanly.\n\n## Broadcasting an Event\n\n```php\nclass OrderPlaced implements ShouldBroadcast\n{\n    public function broadcastOn(): Channel\n    {\n        return new PrivateChannel('seller.' . \$this->order->seller_id);\n    }\n}\n```\n\n## Listening on the Frontend\n\n```js\nEcho.private(`seller.\${sellerId}`)\n    .listen('OrderPlaced', (e) => {\n        notifications.value.unshift(e.order);\n    });\n```\n\n## Choosing a Broadcast Driver\n\nPusher is the fastest way to get started, but for cost control on higher-traffic apps, a self-hosted `laravel-websockets` or Soketi setup pays off once you're broadcasting thousands of events a day.\n\n## Falling Back Gracefully\n\nEmail notifications still fire alongside the broadcast event, so sellers who aren't actively online never miss an order \xe2\x80\x94 real-time is an enhancement, not the only channel.\n\n## Conclusion\n\nReal-time notifications make a marketplace feel alive, but they should always sit on top of a reliable fallback channel like email, not replace it.",
                'tags' => ['Laravel', 'WebSockets', 'Real-time'],
                'read_time' => 7,
            ],
            [
                'slug' => 'ai-powered-recommendation-systems-ecommerce',
                'title' => 'Adding AI-Powered Recommendations to an E-commerce Platform',
                'excerpt' => 'Lessons from wiring AI-driven personalized recommendations into a fashion e-commerce platform.',
                'category' => 'AI',
                'content' => "## The Problem\n\nA generic \"you might also like\" grid isn't enough for a fashion platform \xe2\x80\x94 users expect recommendations that actually reflect their taste, the weather, and the occasion.\n\n## Architecture\n\nI kept the AI recommendation logic behind a dedicated service so the rest of the Laravel app just calls a simple interface:\n\n```php\n\$suggestions = app(RecommendationService::class)\n    ->forUser(\$user)\n    ->limit(8)\n    ->get();\n```\n\nInternally it combines the user's past interactions, current weather data, and catalog metadata before calling out to the AI model.\n\n## Latency Matters\n\nAI calls are the slowest part of the request. Caching recommendations per user for a short window (a few hours) and regenerating them via a queued job kept page loads fast without serving stale suggestions for too long.\n\n## Feedback Loops\n\nTracking which recommended items actually got clicked or purchased fed back into ranking future suggestions \xe2\x80\x94 without that loop, the \"AI\" part quickly becomes static.\n\n## Conclusion\n\nThe hard part of AI recommendations usually isn't the model call itself \xe2\x80\x94 it's the caching, queuing and feedback plumbing around it that makes the experience actually feel fast and personalized.",
                'tags' => ['AI', 'E-commerce', 'Laravel'],
                'read_time' => 8,
            ],
            [
                'slug' => 'seo-optimization-laravel-inertia-vue',
                'title' => 'SEO Optimization Strategies for Laravel + Inertia + Vue Apps',
                'excerpt' => 'Practical SEO fixes for server-rendered Laravel/Inertia/Vue apps that still need to rank well.',
                'category' => 'SEO',
                'content' => "## SPA Doesn't Have to Mean Invisible to Search Engines\n\nInertia.js apps are server-rendered on first load, which already puts them ahead of pure client-side SPAs for SEO \xe2\x80\x94 but there's still work to do to rank well.\n\n## Meta Tags Per Page\n\nEach Inertia page component sets its own title and meta description server-side via the shared props, so crawlers see accurate, unique tags per route instead of one static `<head>`.\n\n## Structured Data\n\nAdding JSON-LD schema (Product, Article, BreadcrumbList depending on the page) directly in the Blade root template helps search engines understand page content beyond just the visible text.\n\n## Sitemaps and Canonical URLs\n\nA scheduled Artisan command regenerates `sitemap.xml` nightly from published content, and every page sets a canonical URL to avoid duplicate-content penalties from query-string variations.\n\n## Performance as an SEO Factor\n\nCore Web Vitals matter for ranking, so image lazy-loading, route-level code splitting, and caching API responses all double as SEO work, not just UX polish.\n\n## Conclusion\n\nSEO for a Laravel/Inertia/Vue app comes down to getting the server-rendered fundamentals right \xe2\x80\x94 meta tags, structured data, sitemaps and performance \xe2\x80\x94 rather than fighting the framework.",
                'tags' => ['SEO', 'Inertia.js', 'Vue.js'],
                'read_time' => 7,
            ],
            [
                'slug' => 'lessons-from-building-dual-entry-accounting-engine',
                'title' => 'Lessons from Building a Dual-Entry Accounting Engine in Laravel',
                'excerpt' => 'What building a real double-entry bookkeeping system for a real estate management platform taught me.',
                'category' => 'Laravel',
                'content' => "## Why Not Just a Transactions Table\n\nA simple `amount` column with a `type` flag works until an accountant asks for a proper Chart of Accounts and a trial balance that actually reconciles. Real accounting needs double-entry bookkeeping from day one.\n\n## The Core Model\n\nEvery financial event creates at least two ledger entries \xe2\x80\x94 a debit and a credit \xe2\x80\x94 that must always sum to zero:\n\n```php\nLedgerEntry::create(['account_id' => \$cash, 'debit' => 5000]);\nLedgerEntry::create(['account_id' => \$revenue, 'credit' => 5000]);\n```\n\nWrapping every posting in a database transaction is non-negotiable \xe2\x80\x94 a half-written entry pair corrupts the books silently.\n\n## Chart of Accounts\n\nModeling accounts as a self-referencing tree (Assets > Cash > Petty Cash, for example) makes it possible to generate reports at any level of granularity without duplicating logic per report type.\n\n## Commission and Installments\n\nOn top of the ledger, automated commission calculation and installment due-tracking both just post their own ledger entries \xe2\x80\x94 keeping the accounting core generic meant new financial features didn't need special-case code.\n\n## Conclusion\n\nBuilding a real double-entry engine takes longer upfront than a flat transactions table, but it's the only way financial reports stay trustworthy as the system grows.",
                'tags' => ['Laravel', 'Accounting', 'Architecture'],
                'read_time' => 10,
            ],
        ];

        foreach ($blogPostsData as $i => $data) {
            $tagNames = $data['tags'];
            unset($data['tags']);
            $readTime = $data['read_time'];
            unset($data['read_time']);

            $daysAgo = [8, 20, 33, 47, 61, 78, 95, 114, 133, 155, 178, 205][$i] ?? (10 + $i * 15);

            $post = BlogPost::updateOrCreate(['slug' => $data['slug']], [
                ...$data,
                'image' => 'https://placehold.co/1200x600?text=' . urlencode($data['title']),
                'author' => 'Jalis Mahamud',
                'read_time' => $readTime,
                'published_at' => now()->subDays($daysAgo),
                'is_published' => true,
            ]);

            $tagIds = collect($tagNames)->map(function ($name) {
                return BlogTag::updateOrCreate(['name' => $name], ['slug' => Str::slug($name)])->id;
            });
            $post->tags()->sync($tagIds);
        }
        BlogPost::whereNotIn('slug', collect($blogPostsData)->pluck('slug'))->delete();

        $contactInfoData = [
            ['icon' => 'Mail', 'label' => 'Email', 'value' => 'jalismahamud31@gmail.com', 'href' => 'mailto:jalismahamud31@gmail.com'],
            ['icon' => 'Phone', 'label' => 'Phone', 'value' => '+8801785927491', 'href' => 'tel:+8801785927491'],
            ['icon' => 'MapPin', 'label' => 'Location', 'value' => 'Dhaka, Bangladesh', 'href' => null],
        ];
        foreach ($contactInfoData as $i => $data) {
            ContactInfo::updateOrCreate(['label' => $data['label']], [...$data, 'sort_order' => $i]);
        }

        $socialLinksData = [
            ['platform_name' => 'GitHub', 'href' => 'https://github.com/Jalismahamud', 'sort_order' => 0],
            ['platform_name' => 'LinkedIn', 'href' => 'https://www.linkedin.com/in/jalis-mahamud-546039363/', 'sort_order' => 1],
            ['platform_name' => 'Facebook', 'href' => 'https://www.facebook.com/mdjalish.mahamud.16', 'sort_order' => 2],
            ['platform_name' => 'Medium', 'href' => 'https://medium.com/@jalismahamud31', 'sort_order' => 4],
            ['platform_name' => 'Fiverr', 'href' => 'https://www.fiverr.com/s/L3d4qgL', 'sort_order' => 6],
            ['platform_name' => 'Instagram', 'href' => 'https://www.instagram.com/j__a__l__i__s?igsh=eHN3aHk3Z2p6NW8=', 'sort_order' => 7],
        ];
        foreach ($socialLinksData as $data) {
            SocialLink::updateOrCreate(['platform_name' => $data['platform_name']], $data);
        }
        SocialLink::whereNotIn('platform_name', collect($socialLinksData)->pluck('platform_name'))->delete();
    }
}
