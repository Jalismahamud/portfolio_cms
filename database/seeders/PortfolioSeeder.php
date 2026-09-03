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

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        $profile = Profile::updateOrCreate([], [
            'name' => 'Jalis Mahamud',
            'tagline' => 'Laravel & Vue.js Full Stack Developer',
            'bio' => "Hello! I'm a passionate Laravel developer dedicated to crafting efficient and reliable web applications.\nWith extensive experience in PHP and Laravel, I specialize in building scalable, maintainable applications.\nBased in Dhaka, Bangladesh, I work remotely and enjoy taking on new challenges.",
            'profile_photo' => 'https://placehold.co/600x600?text=Profile',
            'resume_file' => null,
            'location' => 'Dhaka, Bangladesh',
            'email' => 'admin@example.com',
            'phone' => '+8801700000000',
            'availability_status' => true,
            'years_experience' => 5,
            'projects_delivered' => 50,
            'satisfaction_rate' => 100,
        ]);

        $skills = [
            ['icon' => 'Code2', 'title' => 'Frontend Development', 'description' => 'JavaScript, Vue.js, Tailwind and responsive design'],
            ['icon' => 'Server', 'title' => 'Backend Development', 'description' => 'PHP, Laravel, RESTful APIs'],
            ['icon' => 'Database', 'title' => 'Database Design', 'description' => 'SQL and NoSQL database optimization'],
            ['icon' => 'Globe', 'title' => 'Web Technologies', 'description' => 'Full-stack web application development'],
            ['icon' => 'Smartphone', 'title' => 'Mobile Development', 'description' => 'Progressive web apps'],
            ['icon' => 'GitBranch', 'title' => 'DevOps & Tools', 'description' => 'CI/CD, Docker, cloud deployment'],
        ];
        foreach ($skills as $i => $skill) {
            Skill::updateOrCreate(['title' => $skill['title']], [...$skill, 'sort_order' => $i]);
        }

        $techList = [
            ['name' => 'PHP', 'icon' => '🐘', 'category' => 'Backend'],
            ['name' => 'Laravel', 'icon' => '🔴', 'category' => 'Backend'],
            ['name' => 'Vue.js', 'icon' => '🟢', 'category' => 'Frontend'],
            ['name' => 'JavaScript', 'icon' => '🟨', 'category' => 'Frontend'],
            ['name' => 'Tailwind CSS', 'icon' => '💨', 'category' => 'Frontend'],
            ['name' => 'MySQL', 'icon' => '🐬', 'category' => 'Database'],
            ['name' => 'Git', 'icon' => '📚', 'category' => 'Tools'],
            ['name' => 'REST APIs', 'icon' => '🔗', 'category' => 'Backend'],
        ];
        $technologies = collect();
        foreach ($techList as $i => $tech) {
            $technologies->push(Technology::updateOrCreate(['name' => $tech['name']], [...$tech, 'sort_order' => $i]));
        }

        foreach (range(1, 4) as $i) {
            GalleryImage::updateOrCreate(
                ['alt_text' => "Gallery photo {$i}"],
                ['image' => "https://placehold.co/600x450?text=Gallery+{$i}", 'sort_order' => $i - 1],
            );
        }

        $exp1 = Experience::updateOrCreate(
            ['title' => 'PHP & Laravel Developer', 'company' => 'Softvence Agency'],
            [
                'location' => 'Dhaka, Bangladesh',
                'start_date' => '2024-03-10',
                'end_date' => '2025-10-30',
                'employment_types' => ['Full-time', 'On-site'],
                'description' => [
                    'Specialized in backend development using Laravel framework',
                    'Built and maintained RESTful APIs and database systems',
                    'Implemented secure authentication and authorization systems',
                ],
                'sort_order' => 0,
            ],
        );
        $exp1->technologies()->sync($technologies->whereIn('name', ['PHP', 'Laravel', 'MySQL', 'REST APIs'])->pluck('id'));

        $exp2 = Experience::updateOrCreate(
            ['title' => 'Full Stack Developer', 'company' => 'Classic IT & Sky Mart Ltd.'],
            [
                'location' => 'Uttara, Dhaka',
                'start_date' => '2025-11-10',
                'end_date' => null,
                'employment_types' => ['Full-time', 'On-site'],
                'description' => [
                    'Developed ERP modules using Laravel & Vue.js',
                    'Built scalable e-commerce and POS systems with payment integration',
                    'Created secure REST APIs with role-based authentication',
                ],
                'sort_order' => 1,
            ],
        );
        $exp2->technologies()->sync($technologies->whereIn('name', ['PHP', 'Laravel', 'Vue.js', 'MySQL'])->pluck('id'));

        $projectsData = [
            [
                'slug' => 'ai-chique',
                'title' => 'AI Chique - AI-Powered Fashion Assistant',
                'description' => 'An AI-powered fashion assistant that provides personalized style recommendations and virtual try-on experiences.',
                'long_description' => 'AI Chique combines artificial intelligence with e-commerce to deliver a seamless shopping experience, using machine learning to understand user preferences and provide highly personalized recommendations.',
                'github_url' => 'https://github.com/example/ai-chique',
                'live_url' => 'https://example.com',
                'features' => ['Personalized style recommendations', 'Virtual try-on', 'Seamless e-commerce integration'],
                'challenges' => ['Integrating complex AI models', 'Building a scalable architecture'],
                'is_featured' => true,
                'techs' => ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'REST APIs'],
            ],
            [
                'slug' => 'soko-room',
                'title' => 'Soko Room - E-commerce Platform',
                'description' => 'A modern e-commerce platform enabling users to list, manage, and sell products with a product boosting system.',
                'long_description' => 'Soko Room is a full-featured e-commerce platform with sophisticated product management, integrated payment processing, and detailed seller analytics.',
                'github_url' => 'https://github.com/example/soko-room',
                'live_url' => 'https://example.com',
                'features' => ['Product boosting system', 'Secure payment integration', 'Admin dashboard with financial reporting'],
                'challenges' => ['Implementing complex payment workflows', 'Building scalable boosting algorithms'],
                'is_featured' => true,
                'techs' => ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
            ],
            [
                'slug' => 'bmw-parts',
                'title' => 'BMW Parts - Parts Marketplace',
                'description' => 'A specialized platform for buying and selling second-hand BMW car parts.',
                'long_description' => 'A niche marketplace for BMW enthusiasts and dealers, with role-switching for buyers/sellers and secure multi-party payouts.',
                'github_url' => 'https://github.com/example/bmw-parts',
                'live_url' => 'https://example.com',
                'features' => ['Role-switching buyer/seller experience', 'Admin product approval', 'Advanced BMW-specific search'],
                'challenges' => ['Marketplace payment integration', 'Part categorization system'],
                'is_featured' => false,
                'techs' => ['PHP', 'Laravel', 'MySQL'],
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

        $educationData = [
            [
                'degree' => 'Computer Science and Information Technology',
                'institution' => 'Dhaka International University',
                'location' => 'Badda, Dhaka, Bangladesh',
                'start_year' => 2021,
                'end_year' => 2025,
                'grade' => '3.34 CGPA',
                'description' => 'Studied computer science fundamentals including programming, software engineering, and information systems.',
                'highlights' => ['Object-Oriented Programming & Design Patterns', 'Relational Database Design', 'Software Development Life Cycle'],
                'projects_note' => ['Database Design Projects', 'RESTful API Development with Authentication'],
            ],
            [
                'degree' => 'Higher Secondary Certificate (HSC) - Science',
                'institution' => 'Shahid Smrity Degree College',
                'location' => 'Pirojpur, Bangladesh',
                'start_year' => 2018,
                'end_year' => 2020,
                'grade' => '4.56 GPA',
                'description' => 'Completed Higher Secondary education in the Science stream.',
                'highlights' => ['Mathematics', 'Physics', 'Chemistry', 'ICT'],
                'projects_note' => ['Science Fair Projects'],
            ],
        ];
        foreach ($educationData as $i => $edu) {
            Education::updateOrCreate(['degree' => $edu['degree'], 'institution' => $edu['institution']], [...$edu, 'sort_order' => $i]);
        }

        $certData = [
            ['title' => 'Web Development with PHP & Laravel and Vue.js', 'provider' => 'Ostad Limited', 'issue_date' => '2024-01-05', 'skills' => ['PHP', 'Laravel', 'MySQL', 'Vue.js']],
            ['title' => 'Networking Basics Certificate', 'provider' => 'CISCO Networking Academy', 'issue_date' => '2024-09-01', 'skills' => ['Networking Fundamentals', 'IP Addressing']],
        ];
        foreach ($certData as $i => $cert) {
            Certification::updateOrCreate(['title' => $cert['title']], [
                ...$cert,
                'description' => 'Completed course covering practical, hands-on skills.',
                'image' => 'https://placehold.co/400x280?text=Certificate',
                'sort_order' => $i,
            ]);
        }

        $skillGroupsData = [
            'Programming Languages' => ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
            'Frameworks' => ['Laravel', 'Vue.js', 'Inertia.js'],
            'Databases' => ['MySQL', 'MongoDB'],
            'Tools & Design' => ['Git', 'Postman', 'Figma'],
        ];
        foreach (array_values($skillGroupsData) as $i => $items) {
            $category = array_keys($skillGroupsData)[$i];
            $group = SkillGroup::updateOrCreate(['category' => $category], ['sort_order' => $i]);
            foreach ($items as $j => $item) {
                $group->items()->updateOrCreate(['item_text' => $item], ['sort_order' => $j]);
            }
        }

        $blogPostsData = [
            [
                'slug' => 'building-scalable-laravel-applications',
                'title' => 'Building Scalable Laravel Applications',
                'excerpt' => 'Learn best practices for building enterprise-grade Laravel applications that can handle millions of users.',
                'category' => 'Laravel',
                'content' => "## Introduction\n\nBuilding scalable Laravel applications requires understanding both the framework and software architecture principles.\n\n## Database Optimization\n\nAlways index your frequently queried columns:\n\n```php\nSchema::table('users', function (Blueprint \$table) {\n    \$table->index(['email', 'status']);\n});\n```\n\n## Caching Strategies\n\nUse Redis or Memcached for frequently accessed data.\n\n## Conclusion\n\nScalability comes from proper architecture and optimization techniques.",
                'tags' => ['Laravel', 'PHP', 'Scalability'],
            ],
            [
                'slug' => 'vue-inertia-spa-laravel',
                'title' => 'Vue.js & Inertia.js for Dynamic Single Page Applications',
                'excerpt' => 'Discover how to create responsive, reactive SPAs using Vue.js combined with Inertia.js for seamless Laravel integration.',
                'category' => 'Frontend',
                'content' => "## Introduction\n\nInertia.js lets you build SPAs without building an API.\n\n## Setup\n\nInertia's `<Link>` component replaces standard anchor tags to keep navigation client-side.\n\n## Conclusion\n\nInertia bridges the gap between server-side and single-page apps.",
                'tags' => ['Vue.js', 'Inertia.js', 'Laravel'],
            ],
            [
                'slug' => 'getting-started-openai-gpt-api',
                'title' => 'Integrating OpenAI GPT API for Intelligent Applications',
                'excerpt' => 'A professional guide to leveraging OpenAI GPT models in real-world projects.',
                'category' => 'AI',
                'content' => "## Introduction\n\nOpenAI's GPT models can power chatbots, content generation, and more.\n\n## Basic Integration\n\nSend a prompt and receive a completion via the API.\n\n## Conclusion\n\nAI integration opens up powerful new product possibilities.",
                'tags' => ['AI', 'OpenAI', 'API'],
            ],
        ];

        foreach ($blogPostsData as $i => $data) {
            $tagNames = $data['tags'];
            unset($data['tags']);

            $post = BlogPost::updateOrCreate(['slug' => $data['slug']], [
                ...$data,
                'image' => 'https://placehold.co/1200x600?text=' . urlencode($data['title']),
                'author' => 'Jalis Mahamud',
                'read_time' => 8 + $i,
                'published_at' => now()->subDays(30 - $i * 10),
                'is_published' => true,
            ]);

            $tagIds = collect($tagNames)->map(function ($name) {
                return BlogTag::updateOrCreate(['name' => $name], ['slug' => \Illuminate\Support\Str::slug($name)])->id;
            });
            $post->tags()->sync($tagIds);
        }

        $contactInfoData = [
            ['icon' => 'Mail', 'label' => 'Email', 'value' => 'admin@example.com', 'href' => 'mailto:admin@example.com'],
            ['icon' => 'Phone', 'label' => 'Phone', 'value' => '+8801700000000', 'href' => 'tel:+8801700000000'],
            ['icon' => 'MapPin', 'label' => 'Location', 'value' => 'Dhaka, Bangladesh', 'href' => null],
        ];
        foreach ($contactInfoData as $i => $data) {
            ContactInfo::updateOrCreate(['label' => $data['label']], [...$data, 'sort_order' => $i]);
        }

        $socialLinksData = [
            ['platform_name' => 'GitHub', 'href' => 'https://github.com/example'],
            ['platform_name' => 'LinkedIn', 'href' => 'https://linkedin.com/in/example'],
            ['platform_name' => 'Twitter', 'href' => 'https://x.com/example'],
        ];
        foreach ($socialLinksData as $i => $data) {
            SocialLink::updateOrCreate(['platform_name' => $data['platform_name']], [...$data, 'sort_order' => $i]);
        }
    }
}
