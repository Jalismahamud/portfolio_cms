import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import Navigation from '@/components/Navigation';
import SEO, { SITE_URL, truncateForMeta } from '@/components/SEO';

const BlogDetail = () => {
  const { slug } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Laravel Applications",
      excerpt: "Learn best practices for building enterprise-grade Laravel applications that can handle millions of users.",
      category: "Laravel",
      date: "Dec 25, 2024",
      readTime: "8 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
      slug: "building-scalable-laravel-applications",
      content: `
## Introduction

Building scalable Laravel applications requires a deep understanding of both the framework and software architecture principles. In this comprehensive guide, we'll explore the best practices that will help you create applications capable of handling millions of users.

## 1. Database Optimization

One of the most critical aspects of scalability is database performance. Here are key strategies:

### Indexing
Always ensure your frequently queried columns are properly indexed. Use Laravel's migration system to add indexes:

\`\`\`php
Schema::table('users', function (Blueprint $table) {
    $table->index(['email', 'status']);
});
\`\`\`

### Query Optimization
Use eager loading to prevent N+1 query problems:

\`\`\`php
// Bad
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->author->name;
}

// Good
$posts = Post::with('author')->get();
\`\`\`

## 2. Caching Strategies

Implement multiple layers of caching:

- **Application Cache**: Use Redis or Memcached for storing frequently accessed data
- **Query Cache**: Cache database query results
- **Full Page Cache**: Use Varnish or similar for static pages

## 3. Queue Management

Offload time-consuming tasks to queues:

\`\`\`php
dispatch(new ProcessPodcast($podcast));
\`\`\`

## 4. Load Balancing

Distribute traffic across multiple servers using load balancers like:
- AWS Elastic Load Balancer
- Nginx Load Balancing
- HAProxy

## Conclusion

Building scalable Laravel applications is a combination of proper architecture, optimization techniques, and infrastructure decisions. By following these best practices, you'll be well-equipped to handle growth.
      `,
      tags: ["Laravel", "PHP", "Scalability", "Backend"]
    },
    {
      id: 2,
      title: "Modern React Patterns for 2025",
      excerpt: "Explore the latest React patterns and hooks that will make your code cleaner and more maintainable.",
      category: "React",
      date: "Dec 20, 2024",
      readTime: "6 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
      slug: "modern-react-patterns-2025",
      content: `
## Introduction

React continues to evolve, and 2025 brings new patterns and best practices that every developer should know. Let's explore the most impactful patterns for modern React development.

## 1. Server Components

React Server Components allow you to render components on the server, reducing the JavaScript bundle size:

\`\`\`tsx
// This component runs on the server
async function BlogPosts() {
  const posts = await fetchPosts();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

## 2. Custom Hooks for Everything

Extract reusable logic into custom hooks:

\`\`\`tsx
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
\`\`\`

## 3. Compound Components Pattern

Create flexible and reusable component APIs:

\`\`\`tsx
<Select>
  <Select.Trigger>Choose option</Select.Trigger>
  <Select.Content>
    <Select.Item value="1">Option 1</Select.Item>
    <Select.Item value="2">Option 2</Select.Item>
  </Select.Content>
</Select>
\`\`\`

## 4. State Management with Zustand

Zustand provides a simpler alternative to Redux:

\`\`\`tsx
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
\`\`\`

## Conclusion

These modern React patterns will help you write cleaner, more maintainable code. Embrace these patterns gradually and watch your productivity soar.
      `,
      tags: ["React", "JavaScript", "Frontend", "Hooks"]
    },
    {
      id: 3,
      title: "Server Management Best Practices",
      excerpt: "A comprehensive guide to managing production servers, from deployment to monitoring and security.",
      category: "DevOps",
      date: "Dec 15, 2024",
      readTime: "10 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
      slug: "server-management-best-practices",
      content: `
## Introduction

Managing production servers is a critical skill for any developer or DevOps engineer. This guide covers essential practices for keeping your servers secure, performant, and reliable.

## 1. Security Hardening

### SSH Configuration
Disable password authentication and use SSH keys:

\`\`\`bash
# /etc/ssh/sshd_config
PasswordAuthentication no
PermitRootLogin no
\`\`\`

### Firewall Setup
Use UFW or iptables to restrict access:

\`\`\`bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
\`\`\`

## 2. Monitoring and Logging

Implement comprehensive monitoring:

- **Prometheus + Grafana**: For metrics visualization
- **ELK Stack**: For centralized logging
- **Uptime monitoring**: Use tools like Pingdom or UptimeRobot

## 3. Automated Backups

Set up automated backups with rotation:

\`\`\`bash
#!/bin/bash
DATE=$(date +%Y%m%d)
BACKUP_DIR="/backups"
mysqldump -u user -p database > $BACKUP_DIR/db_$DATE.sql
find $BACKUP_DIR -mtime +7 -delete
\`\`\`

## 4. CI/CD Pipeline

Automate deployments with GitHub Actions or GitLab CI:

\`\`\`yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to server
        run: ssh user@server 'cd /app && git pull && composer install'
\`\`\`

## Conclusion

Proper server management is about prevention and automation. Implement these practices to ensure your infrastructure remains stable and secure.
      `,
      tags: ["DevOps", "Linux", "Security", "Server"]
    },
    {
      id: 4,
      title: "Tailwind CSS Tips and Tricks",
      excerpt: "Master Tailwind CSS with these advanced tips and tricks for creating beautiful, responsive designs.",
      category: "CSS",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=600&fit=crop",
      slug: "tailwind-css-tips-tricks",
      content: `
## Introduction

Tailwind CSS has revolutionized how we style web applications. Here are advanced tips and tricks to take your Tailwind skills to the next level.

## 1. Custom Design System

Extend Tailwind's default theme in tailwind.config.js:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        display: ['Cal Sans', 'sans-serif'],
      },
    },
  },
};
\`\`\`

## 2. Component Classes with @apply

Create reusable component classes:

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-brand-500 text-white rounded-lg 
           hover:bg-brand-600 transition-colors duration-200;
  }
}
\`\`\`

## 3. Responsive Design Patterns

Use Tailwind's responsive prefixes effectively:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Cards -->
</div>
\`\`\`

## 4. Animation Utilities

Add custom animations:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
};
\`\`\`

## 5. Dark Mode

Implement dark mode with the dark: prefix:

\`\`\`html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <!-- Content adapts to theme -->
</div>
\`\`\`

## Conclusion

These Tailwind CSS tips will help you create more efficient and maintainable stylesheets. Remember to leverage the configuration file and create reusable patterns.
      `,
      tags: ["CSS", "Tailwind", "Frontend", "Design"]
    },
    {
      id: 5,
      title: "Getting Started with OpenAI GPT API",
      excerpt: "A comprehensive guide to integrating OpenAI's powerful GPT models into your applications with practical examples.",
      category: "AI",
      date: "Dec 28, 2024",
      readTime: "12 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
      slug: "getting-started-openai-gpt-api",
      content: `
## Introduction

OpenAI's GPT API has become a game-changer for developers. This guide will help you integrate powerful AI capabilities into your applications quickly and effectively.

## 1. Setting Up Your OpenAI Account

First, sign up for OpenAI API access:

\`\`\`bash
# Get your API key from https://platform.openai.com/api-keys
export OPENAI_API_KEY="your-api-key"
\`\`\`

## 2. Installing the OpenAI Client

Using Node.js:

\`\`\`bash
npm install openai
\`\`\`

Or Python:

\`\`\`bash
pip install openai
\`\`\`

## 3. Making Your First API Call

### JavaScript Example:

\`\`\`javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const message = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'user', content: 'Hello, what is your name?' },
    ],
  });

  console.log(message.choices[0].message.content);
}

main();
\`\`\`

### Python Example:

\`\`\`python
from openai import OpenAI

client = OpenAI(api_key='your-api-key')

response = client.chat.completions.create(
    model='gpt-4',
    messages=[
        {'role': 'user', 'content': 'Hello, what is your name?'}
    ]
)

print(response.choices[0].message.content)
\`\`\`

## 4. Working with Different Models

### GPT-3.5-Turbo (Fast & Cost-Effective)

\`\`\`javascript
const message = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'Explain quantum computing' }],
  max_tokens: 500,
});
\`\`\`

### GPT-4 (Advanced Reasoning)

\`\`\`javascript
const message = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Solve this complex algorithm' }],
  temperature: 0.7,
});
\`\`\`

## 5. Advanced Features

### Streaming Responses

\`\`\`javascript
const stream = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Write a story' }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}
\`\`\`

### Function Calling

\`\`\`javascript
const tools = [
  {
    type: 'function',
    function: {
      name: 'get_weather',
      description: 'Get the weather for a location',
      parameters: {
        type: 'object',
        properties: {
          location: { type: 'string' },
        },
      },
    },
  },
];

const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'What is the weather in New York?' }],
  tools: tools,
});
\`\`\`

## 6. Error Handling

Always implement proper error handling:

\`\`\`javascript
try {
  const message = await openai.chat.completions.create({...});
} catch (error) {
  if (error.status === 401) {
    console.error('Invalid API key');
  } else if (error.status === 429) {
    console.error('Rate limit exceeded');
  } else {
    console.error('API error:', error.message);
  }
}
\`\`\`

## Conclusion

The OpenAI GPT API opens incredible possibilities. Start with simple use cases and gradually explore advanced features. Remember to manage your API usage and costs effectively.
      `,
      tags: ["AI", "OpenAI", "GPT", "API"]
    },
    {
      id: 6,
      title: "Building RAG Systems with LangChain",
      excerpt: "Learn how to build powerful Retrieval-Augmented Generation systems using LangChain and vector databases.",
      category: "AI",
      date: "Dec 22, 2024",
      readTime: "15 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop",
      slug: "building-rag-systems-langchain",
      content: `
## Introduction

Retrieval-Augmented Generation (RAG) is revolutionizing how AI systems access and utilize information. LangChain makes building RAG systems remarkably simple.

## 1. Understanding RAG Architecture

RAG systems combine three key components:

- **Retrieval**: Fetch relevant documents from a knowledge base
- **Augmentation**: Enhance prompts with retrieved context
- **Generation**: Use LLM to generate responses based on augmented context

## 2. Setting Up LangChain

Install the required packages:

\`\`\`bash
pip install langchain openai pinecone-client
\`\`\`

## 3. Building a Vector Database

Using Pinecone:

\`\`\`python
from pinecone import Pinecone

pc = Pinecone(api_key="your-api-key")
index = pc.Index("your-index")

# Add documents to the index
documents = [
    "The Python programming language is powerful and easy to learn",
    "Machine learning is a subset of artificial intelligence",
]

for i, doc in enumerate(documents):
    index.upsert([(str(i), embedding, {"text": doc})])
\`\`\`

## 4. Creating a RAG Chain

\`\`\`python
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
from langchain.retrievers import PineconeRetriever

retriever = PineconeRetriever(index_name="your-index")
llm = OpenAI(temperature=0)

qa = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=retriever,
)

result = qa.run("What is machine learning?")
print(result)
\`\`\`

## 5. Using Different Retrievers

### Chroma (Local)

\`\`\`python
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(documents, embeddings)
\`\`\`

### FAISS (Fast Search)

\`\`\`python
from langchain.vectorstores import FAISS

vectorstore = FAISS.from_documents(documents, embeddings)
\`\`\`

## 6. Advanced RAG Patterns

### Multi-Document RAG

\`\`\`python
from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

loader = DirectoryLoader('./documents')
documents = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=1000)
chunks = splitter.split_documents(documents)
\`\`\`

### Hybrid Retrieval

\`\`\`python
from langchain.retrievers import BM25Retriever, EnsembleRetriever

bm25_retriever = BM25Retriever.from_documents(chunks)
vector_retriever = vectorstore.as_retriever()

ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, vector_retriever],
    weights=[0.5, 0.5],
)
\`\`\`

## 7. Chains and Prompts

### Custom Prompt Template

\`\`\`python
from langchain.prompts import PromptTemplate

prompt = PromptTemplate(
    template="Context: {context}\\n\\nQuestion: {question}\\n\\nAnswer:",
    input_variables=["context", "question"],
)
\`\`\`

## Conclusion

RAG systems with LangChain empower your AI applications with up-to-date, domain-specific knowledge. Start building today and create intelligent systems that can reason over your data.
      `,
      tags: ["AI", "LangChain", "RAG", "Vector Database"]
    },
    {
      id: 7,
      title: "PostgreSQL Performance Optimization",
      excerpt: "Deep dive into PostgreSQL performance tuning, indexing strategies, and query optimization techniques.",
      category: "Database",
      date: "Dec 18, 2024",
      readTime: "14 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&h=600&fit=crop",
      slug: "postgresql-performance-optimization",
      content: `
## Introduction

PostgreSQL is a powerful database, but unlocking its full performance potential requires understanding optimization techniques.

## 1. Index Strategies

### B-Tree Index (Default)

\`\`\`sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);
\`\`\`

### Hash Index

\`\`\`sql
CREATE INDEX idx_status_hash ON orders USING HASH (status);
\`\`\`

### GiST and GIN Indexes

\`\`\`sql
-- For full-text search
CREATE INDEX idx_documents_text ON documents USING gin(to_tsvector('english', content));
\`\`\`

### Partial Indexes

\`\`\`sql
-- Only index active users
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';
\`\`\`

## 2. Query Optimization

### Using EXPLAIN ANALYZE

\`\`\`sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id
ORDER BY order_count DESC;
\`\`\`

### Avoiding N+1 Queries

\`\`\`sql
-- Bad: 1 + N queries
SELECT * FROM users;
-- Then in application, for each user: SELECT * FROM orders WHERE user_id = ?

-- Good: 1 query with JOIN
SELECT u.*, o.* FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
\`\`\`

## 3. Vacuuming and Maintenance

\`\`\`sql
-- Vacuum removes dead rows
VACUUM ANALYZE;

-- Aggressive vacuum for large operations
VACUUM FULL;

-- Reindex if needed
REINDEX TABLE users;
\`\`\`

## 4. Connection Pooling

Using PgBouncer:

\`\`\`ini
[databases]
mydb = host=localhost port=5432 dbname=mydb

[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 25
\`\`\`

## 5. Configuration Tuning

### postgresql.conf

\`\`\`ini
# Shared buffers (typically 25% of RAM)
shared_buffers = 4GB

# Effective cache size (typically 50-75% of RAM)
effective_cache_size = 12GB

# Work memory per operation
work_mem = 10MB

# For batch operations
maintenance_work_mem = 1GB
\`\`\`

## 6. Monitoring Performance

\`\`\`sql
-- Check slow queries
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- Check table sizes
SELECT schemaname, tablename, pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename))
FROM pg_tables
WHERE schemaname != 'pg_catalog'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
\`\`\`

## Conclusion

PostgreSQL performance optimization is a continuous process. Monitor regularly, analyze slow queries, and implement appropriate indexes for your access patterns.
      `,
      tags: ["PostgreSQL", "Database", "Performance", "SQL"]
    },
    {
      id: 8,
      title: "MongoDB Schema Design Patterns",
      excerpt: "Master MongoDB schema design with best practices for embedding, referencing, and handling complex data relationships.",
      category: "Database",
      date: "Dec 12, 2024",
      readTime: "11 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
      slug: "mongodb-schema-design-patterns",
      content: `
## Introduction

MongoDB's flexible schema allows multiple design patterns. Choosing the right one is crucial for query performance and application scalability.

## 1. Embedding Pattern

Best for one-to-few relationships:

\`\`\`javascript
// User with embedded addresses
db.users.insertOne({
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  addresses: [
    { street: "123 Main St", city: "New York" },
    { street: "456 Oak Ave", city: "Boston" }
  ]
});
\`\`\`

**Advantages:**
- Faster queries (no JOINs needed)
- Atomic updates

**Disadvantages:**
- Document size limits
- Difficult to query across embedded documents

## 2. Referencing Pattern

Best for one-to-many and many-to-many relationships:

\`\`\`javascript
// Users collection
db.users.insertOne({
  _id: ObjectId("..."),
  name: "John Doe",
  postIds: [ObjectId("..."), ObjectId("...")]
});

// Posts collection
db.posts.insertOne({
  _id: ObjectId("..."),
  title: "MongoDB Basics",
  authorId: ObjectId("...")
});
\`\`\`

**Advantages:**
- Flexible data structure
- Easier to scale

**Disadvantages:**
- Requires multi-document queries
- Not atomic across collections

## 3. Polymorphic Pattern

Handle different types within same collection:

\`\`\`javascript
// Events collection with different event types
db.events.insertOne({
  _id: ObjectId("..."),
  type: "login",
  userId: ObjectId("..."),
  timestamp: new Date(),
  details: { ipAddress: "192.168.1.1" }
});

db.events.insertOne({
  _id: ObjectId("..."),
  type: "purchase",
  userId: ObjectId("..."),
  timestamp: new Date(),
  details: { orderId: ObjectId("..."), amount: 99.99 }
});
\`\`\`

## 4. Attribute Pattern

Store optional fields differently:

\`\`\`javascript
// Products with variable attributes
db.products.insertOne({
  _id: ObjectId("..."),
  name: "Laptop",
  attributes: {
    processor: "Intel i9",
    ram: "16GB",
    storage: "512GB SSD"
  }
});

// Enables efficient queries
db.products.find({ "attributes.processor": "Intel i9" });
\`\`\`

## 5. Bucket Pattern

Group time-series data:

\`\`\`javascript
// Approximate 1MB per bucket
db.metrics.insertOne({
  _id: ObjectId("..."),
  sensor_id: 1,
  timestamp: new Date("2024-01-01"),
  values: [
    { time: new Date("2024-01-01T00:00:00Z"), reading: 23.5 },
    { time: new Date("2024-01-01T00:01:00Z"), reading: 23.7 }
  ]
});
\`\`\`

## 6. Indexing for Performance

\`\`\`javascript
// Single field index
db.users.createIndex({ email: 1 });

// Compound index
db.posts.createIndex({ authorId: 1, createdAt: -1 });

// Text index for full-text search
db.articles.createIndex({ content: "text" });

// Geospatial index
db.stores.createIndex({ location: "2dsphere" });
\`\`\`

## 7. Schema Validation

\`\`\`javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "name"],
      properties: {
        email: { bsonType: "string" },
        name: { bsonType: "string" },
        age: { bsonType: "int" }
      }
    }
  }
});
\`\`\`

## Conclusion

Master these MongoDB schema patterns and you'll design databases that scale efficiently. Choose patterns based on your access patterns and growth projections.
      `,
      tags: ["MongoDB", "Database", "Schema Design", "NoSQL"]
    },
    {
      id: 9,
      title: "Web Application Security Fundamentals",
      excerpt: "Essential security practices every developer should know to protect web applications from common vulnerabilities.",
      category: "Security",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop",
      slug: "web-application-security-fundamentals",
      content: `
## Introduction

Security shouldn't be an afterthought. Let's explore essential practices every developer must implement.

## 1. SQL Injection Prevention

### The Vulnerability

\`\`\`php
// Bad - vulnerable to SQL injection
$query = "SELECT * FROM users WHERE email = '" . $_POST['email'] . "'";
$result = mysqli_query($connection, $query);
\`\`\`

### The Solution - Use Prepared Statements

\`\`\`php
// Good - safe with prepared statements
$stmt = $connection->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $_POST['email']);
$stmt->execute();
$result = $stmt->get_result();
\`\`\`

## 2. Cross-Site Scripting (XSS) Prevention

### The Vulnerability

\`\`\`html
<!-- Bad - allows XSS attacks -->
<div id="user-comment"></div>
<script>
document.getElementById('user-comment').innerHTML = userInput;
</script>
\`\`\`

### The Solution - Escape Output

\`\`\`javascript
// Good - safe output
document.getElementById('user-comment').textContent = userInput;

// Or use a library like DOMPurify
import DOMPurify from 'dompurify';
document.getElementById('user-comment').innerHTML = DOMPurify.sanitize(userInput);
\`\`\`

## 3. Cross-Site Request Forgery (CSRF) Prevention

### Implement CSRF Tokens

\`\`\`php
// Generate token
session_start();
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Include in forms
echo '<form method="POST">';
echo '<input type="hidden" name="csrf_token" value="' . $_SESSION['csrf_token'] . '">';
echo '</form>';

// Verify token on submission
if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die('CSRF token mismatch');
}
\`\`\`

## 4. Authentication Best Practices

### Password Hashing

\`\`\`php
// Use bcrypt
$hash = password_hash($password, PASSWORD_BCRYPT);

// Verify password
if (password_verify($inputPassword, $hash)) {
    // Password is correct
}
\`\`\`

### JWT Tokens

\`\`\`javascript
import jwt from 'jsonwebtoken';

// Create token
const token = jwt.sign({ userId: user.id }, 'secret-key', { expiresIn: '1h' });

// Verify token
jwt.verify(token, 'secret-key', (err, decoded) => {
    if (err) throw err;
    console.log(decoded);
});
\`\`\`

## 5. Authorization and Access Control

### Role-Based Access Control

\`\`\`javascript
const authorized = (requiredRole) => {
    return (req, res, next) => {
        if (req.user.role !== requiredRole) {
            return res.status(403).json({ error: 'Access denied' });
        }
        next();
    };
};

app.delete('/users/:id', authorized('admin'), deleteUser);
\`\`\`

## 6. Secure Headers

\`\`\`javascript
const helmet = require('helmet');

app.use(helmet().contentSecurityPolicy());
app.use(helmet().hsts({ maxAge: 31536000 })); // 1 year
app.use(helmet().noSniff());
app.use(helmet().xssFilter());
app.use(helmet().referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));
\`\`\`

## 7. API Security

### Rate Limiting

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // 100 requests per windowMs
});

app.use('/api/', limiter);
\`\`\`

### Input Validation

\`\`\`javascript
const { body, validationResult } = require('express-validator');

app.post('/users', [
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Process request
});
\`\`\`

## 8. Environment Variables

\`\`\`bash
# Never commit secrets - use .env files
DATABASE_URL=postgresql://user:pass@localhost/db
API_KEY=your_secret_api_key
JWT_SECRET=your_jwt_secret
\`\`\`

## Conclusion

Security is a foundation, not a feature. Implement these practices consistently across all your projects to build secure, trustworthy applications.
      `,
      tags: ["Security", "Web Development", "Best Practices", "Protection"]
    },
    {
      id: 10,
      title: "Implementing OAuth 2.0 and JWT Authentication",
      excerpt: "Step-by-step guide to implementing secure authentication using OAuth 2.0 and JSON Web Tokens in modern applications.",
      category: "Security",
      date: "Dec 5, 2024",
      readTime: "13 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=600&fit=crop",
      slug: "implementing-oauth-jwt-authentication",
      content: `
## Introduction

OAuth 2.0 and JWT have become industry standards for secure authentication. This guide covers implementing both patterns in modern applications.

## 1. Understanding OAuth 2.0

OAuth 2.0 is an authorization protocol that allows users to grant applications access to their resources without sharing passwords.

### OAuth 2.0 Flow

\`\`\`
1. User clicks "Login with Google"
2. Application redirects to Google's authorization server
3. User grants permission
4. Google redirects back with authorization code
5. Application exchanges code for access token
6. Application uses token to access user resources
\`\`\`

## 2. Setting Up OAuth 2.0 with Google

### Node.js with Passport:

\`\`\`javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/dashboard');
  }
);
\`\`\`

## 3. JWT Tokens in Depth

JWT consists of three parts: header, payload, and signature.

### Creating a JWT:

\`\`\`javascript
const jwt = require('jsonwebtoken');

const payload = {
  userId: user.id,
  email: user.email,
  role: user.role
};

const token = jwt.sign(payload, process.env.JWT_SECRET, {
  expiresIn: '24h',
  issuer: 'myapp.com'
});
\`\`\`

### Verifying a JWT:

\`\`\`javascript
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error: error.message };
  }
};
\`\`\`

## 4. Implementing JWT Middleware

\`\`\`javascript
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const { valid, decoded } = verifyToken(token);
  
  if (!valid) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  req.user = decoded;
  next();
};

// Use middleware
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});
\`\`\`

## 5. Refresh Tokens

Implement refresh tokens for better security:

\`\`\`javascript
let refreshTokens = []; // In production, use database

app.post('/refresh-token', (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshTokens.includes(refreshToken)) {
    return res.status(401).json({ error: 'Invalid refresh token' });
  }

  const { valid, decoded } = verifyToken(refreshToken);
  
  if (!valid) {
    return res.status(401).json({ error: 'Refresh token expired' });
  }

  const newAccessToken = jwt.sign(
    { userId: decoded.userId, email: decoded.email },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  res.json({ accessToken: newAccessToken });
});
\`\`\`

## 6. Front-end Implementation

### React with JWT:

\`\`\`javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await api.post('/refresh-token', { refreshToken });
      localStorage.setItem('accessToken', data.accessToken);
      return api(error.config);
    }
    return Promise.reject(error);
  }
);

export default api;
\`\`\`

## 7. Security Best Practices

- **Store tokens securely**: Use httpOnly cookies for web apps
- **Implement CORS**: Restrict which origins can access your API
- **Use HTTPS**: Always secure token transmission
- **Rotate secrets**: Regularly rotate your signing keys
- **Log authentication events**: Monitor failed attempts

## Conclusion

OAuth 2.0 and JWT together provide robust, industry-standard authentication. Implement these patterns to build secure, scalable applications.
      `,
      tags: ["Security", "Authentication", "OAuth", "JWT"]
    },
    {
      id: 11,
      title: "Prompt Engineering Masterclass",
      excerpt: "Advanced techniques for crafting effective prompts that get the best results from large language models.",
      category: "AI",
      date: "Dec 1, 2024",
      readTime: "9 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1737641624486-7846df8528dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvbXB0JTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D",
      slug: "prompt-engineering-masterclass",
      content: `
## Introduction

Prompt engineering is the art and science of communicating effectively with AI models. Master these techniques to unlock the full potential of language models.

## 1. The Anatomy of a Good Prompt

A strong prompt typically includes:

- **Context**: Background information
- **Instructions**: Clear directives
- **Format**: Desired output structure
- **Examples**: Few-shot learning
- **Constraints**: Limitations or rules

\`\`\`
Context: You are an expert Python developer.
Task: Write a function to find the median of a sorted array.
Format: Provide only the code, no explanation.
Constraint: Time complexity must be O(log n).
\`\`\`

## 2. Few-Shot Prompting

Provide examples to guide the model:

\`\`\`
Classify the sentiment:

Example 1:
Text: "This product is amazing!"
Sentiment: Positive

Example 2:
Text: "I'm very disappointed"
Sentiment: Negative

Now classify:
Text: "It's okay, nothing special"
Sentiment:
\`\`\`

## 3. Chain of Thought Prompting

Break down complex reasoning:

\`\`\`
Solve step by step:

Problem: If it takes 5 workers 2 hours to build a wall, how long would it take 10 workers?

Step 1: Calculate total work hours needed
Step 2: Calculate hours with new worker count
Step 3: Provide final answer

Work through each step:
\`\`\`

## 4. Role-Based Prompting

Assign a specific persona:

\`\`\`
You are a seasoned DevOps engineer with 10 years of experience in cloud infrastructure. 
Help me design a scalable Kubernetes deployment strategy for a microservices application 
that handles 1 million requests per day.
\`\`\`

## 5. Meta-Prompting

Instruct the model how to process requests:

\`\`\`
When responding:
1. First, identify what type of question this is
2. Determine the most relevant knowledge to apply
3. Structure your answer with clear sections
4. Provide code examples where applicable
5. End with a summary

Following these guidelines, answer:
[Your question here]
\`\`\`

## 6. Temperature and Parameters

Understand model behavior parameters:

\`\`\`javascript
// Creative response (high temperature)
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Write a creative story' }],
  temperature: 0.9,
  max_tokens: 500
});

// Deterministic response (low temperature)
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: '2+2=' }],
  temperature: 0.1,
});
\`\`\`

## 7. Avoiding Common Pitfalls

### Don't:
- Be vague about what you want
- Assume the model knows context it wasn't given
- Ask multiple unrelated questions at once
- Use jargon without explanation

### Do:
- Be specific and detailed
- Provide relevant context
- Ask focused questions
- Use simple, clear language

## 8. Advanced Techniques

### Refinement Loop:

\`\`\`
Initial prompt: "Write a function"
Feedback: "Make it handle edge cases"
Refinement: "Add checks for null values and empty arrays"
Final version: "Write a robust function that..."
\`\`\`

### Constraint-Based Generation:

\`\`\`
Generate a solution with these constraints:
- Must follow SOLID principles
- Cannot use more than 3 if statements
- Must include error handling
- Should be testable
\`\`\`

## Conclusion

Prompt engineering is a critical skill for working with AI models. Practice these techniques and iterate to find what works best for your use cases.
      `,
      tags: ["AI", "LLM", "Prompting", "Best Practices"]
    },
    {
      id: 12,
      title: "Redis Caching Strategies for High Performance",
      excerpt: "Learn effective caching patterns with Redis to dramatically improve your application's performance and scalability.",
      category: "Database",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      slug: "redis-caching-strategies",
      content: `
## Introduction

Redis has become the go-to solution for caching in modern applications. Learn proven strategies to maximize performance and reduce database load.

## 1. Setting Up Redis

### Installation and Configuration

\`\`\`bash
# Using Docker
docker run -d -p 6379:6379 redis:latest

# Verifying connection
redis-cli ping
\`\`\`

### Node.js Client Setup

\`\`\`javascript
const redis = require('redis');
const client = redis.createClient({
  host: 'localhost',
  port: 6379
});

client.on('error', (err) => console.log('Redis error:', err));
client.connect();
\`\`\`

## 2. Cache Invalidation Strategies

### TTL (Time To Live)

\`\`\`javascript
// Set key with 1 hour expiration
await client.setex('user:123', 3600, JSON.stringify(userData));

// Or using modern syntax
await client.set('user:123', JSON.stringify(userData), {
  EX: 3600  // expires in 1 hour
});
\`\`\`

### Manual Invalidation

\`\`\`javascript
const updateUser = async (userId, data) => {
  // Update database
  await db.update('users', { id: userId }, data);
  
  // Invalidate cache
  await client.del(\`user:\${userId}\`);
};
\`\`\`

### Event-Based Invalidation

\`\`\`javascript
// Using pub/sub
await client.subscribe('user.updated', (message) => {
  const userId = message;
  await client.del(\`user:\${userId}\`);
});

// Publish event
await client.publish('user.updated', '123');
\`\`\`

## 3. Caching Patterns

### Cache-Aside (Lazy Loading)

\`\`\`javascript
const getUser = async (userId) => {
  // Try cache first
  const cached = await client.get(\`user:\${userId}\`);
  if (cached) return JSON.parse(cached);

  // Fall back to database
  const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
  
  // Cache the result
  await client.set(\`user:\${userId}\`, JSON.stringify(user), { EX: 3600 });
  
  return user;
};
\`\`\`

### Write-Through Caching

\`\`\`javascript
const updateUser = async (userId, data) => {
  // Update database
  const updated = await db.update('users', { id: userId }, data);
  
  // Update cache immediately
  await client.set(\`user:\${userId}\`, JSON.stringify(updated), { EX: 3600 });
  
  return updated;
};
\`\`\`

### Write-Behind Caching

\`\`\`javascript
const updateUser = async (userId, data) => {
  // Update cache first
  await client.set(\`user:\${userId}\`, JSON.stringify(data), { EX: 3600 });
  
  // Queue database update (can be async)
  queue.add({
    type: 'update_user',
    userId,
    data,
    timestamp: Date.now()
  });
};
\`\`\`

## 4. Advanced Caching Techniques

### Cache Stampede Prevention

\`\`\`javascript
const getWithSoftExpiry = async (key, ttl, hashTtl) => {
  const value = await client.get(key);
  if (value) {
    // Check if soft expired
    const expireTime = await client.ttl(key);
    if (expireTime > 0 && expireTime < ttl * 0.1) {
      // Soft expired - refresh in background
      refreshInBackground(key);
    }
    return JSON.parse(value);
  }
  return null;
};
\`\`\`

### Using Redis Streams for Queues

\`\`\`javascript
// Add to stream
await client.xAdd('notifications', '*', { 
  userId: '123', 
  message: 'New message' 
});

// Read from stream
const messages = await client.xRead(
  { key: 'notifications', id: '0' },
  { COUNT: 10 }
);
\`\`\`

## 5. Monitoring and Optimization

### Key Metrics

\`\`\`javascript
// Get Redis info
const info = await client.info('stats');
console.log('Hits:', info.keyspace_hits);
console.log('Misses:', info.keyspace_misses);

// Calculate hit rate
const hitRate = hits / (hits + misses);
console.log(\`Hit rate: \${(hitRate * 100).toFixed(2)}%\`);
\`\`\`

### Memory Management

\`\`\`bash
# Monitor memory usage
redis-cli info memory

# Set max memory policy
redis-cli CONFIG SET maxmemory-policy allkeys-lru

# Clear expired keys
redis-cli FLUSHALL ASYNC
\`\`\`

## 6. Real-World Example

\`\`\`javascript
class CachedDatabase {
  constructor(redisClient, db) {
    this.redis = redisClient;
    this.db = db;
  }

  async getUser(userId) {
    const cacheKey = \`user:\${userId}\`;
    const cached = await this.redis.get(cacheKey);
    
    if (cached) {
      return JSON.parse(cached);
    }

    const user = await this.db.query(
      'SELECT * FROM users WHERE id = ?',
      [userId]
    );

    if (user) {
      await this.redis.set(cacheKey, JSON.stringify(user), { EX: 3600 });
    }

    return user;
  }

  async updateUser(userId, data) {
    await this.db.update('users', { id: userId }, data);
    await this.redis.del(\`user:\${userId}\`);
  }
}
\`\`\`

## 7. Common Pitfalls

- **Caching too much**: Only cache what's frequently accessed
- **Ignoring TTL**: Always set expiration times
- **Stale data**: Implement proper invalidation strategies
- **Memory leaks**: Monitor memory usage and clean up

## Conclusion

Redis is a powerful tool for caching. Choose the right pattern for your use case and monitor performance to ensure optimal results.
      `,
      tags: ["Redis", "Caching", "Performance", "Database"]
    },
    {
      id: 13,
      title: "Designing Scalable MySQL Databases for High-Traffic Applications",
      excerpt: "Comprehensive guide on building scalable and reliable MySQL databases, covering normalization, replication, sharding, and query performance optimization.",
      category: "Database",
      date: "Jul 10, 2025",
      readTime: "13 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1741958193874-6ef299f6b053?w=1200&h=600&fit=crop",
      slug: "scalable-mysql-databases",
      content: `
## Introduction

MySQL powers millions of applications worldwide. Building scalable databases requires understanding indexing, replication, and optimization techniques.

## 1. Database Normalization

### Normalization Levels

**First Normal Form (1NF)**:
- Eliminate repeating groups
- All values must be atomic

**Second Normal Form (2NF)**:
- Must be in 1NF
- Remove partial dependencies

**Third Normal Form (3NF)**:
- Must be in 2NF
- Remove transitive dependencies

\`\`\`sql
-- Good normalization example
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  amount DECIMAL(10,2),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

## 2. Indexing Strategies

### Primary Index

\`\`\`sql
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  sku VARCHAR(100) UNIQUE
);
\`\`\`

### Single Column Index

\`\`\`sql
CREATE INDEX idx_email ON users(email);
SELECT * FROM users WHERE email = 'user@example.com';
\`\`\`

### Composite Index

\`\`\`sql
-- Multi-column index for frequent queries
CREATE INDEX idx_user_date ON orders(user_id, created_at);

-- Uses index efficiently
SELECT * FROM orders WHERE user_id = 123 AND created_at > '2024-01-01';

-- Also uses index (left prefix)
SELECT * FROM orders WHERE user_id = 123;

-- Does NOT use index (missing left column)
SELECT * FROM orders WHERE created_at > '2024-01-01';
\`\`\`

### Full-Text Index

\`\`\`sql
ALTER TABLE articles ADD FULLTEXT ft_title_content (title, content);

SELECT * FROM articles 
WHERE MATCH(title, content) AGAINST('database' IN BOOLEAN MODE);
\`\`\`

## 3. Query Optimization

### Using EXPLAIN

\`\`\`sql
EXPLAIN FORMAT=JSON
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id
ORDER BY order_count DESC;
\`\`\`

### Optimization Tips

\`\`\`sql
-- Bad: N+1 problem
SELECT * FROM users;
-- Then in application loop: SELECT * FROM orders WHERE user_id = ?

-- Good: Use JOIN
SELECT u.*, o.* FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- Bad: SELECT *
SELECT * FROM users WHERE status = 'active';

-- Good: Select specific columns
SELECT id, name, email FROM users WHERE status = 'active';

-- Bad: Using functions in WHERE clause
SELECT * FROM users WHERE YEAR(created_at) = 2024;

-- Good: Use range comparison
SELECT * FROM users WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01';
\`\`\`

## 4. Replication for Scalability

### Master-Slave Replication Setup

\`\`\`bash
# Master Configuration (my.cnf)
[mysqld]
server-id = 1
log-bin = mysql-bin
binlog-format = ROW

# Enable replication
GRANT REPLICATION SLAVE ON *.* TO 'replication'@'slave-ip' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;
\`\`\`

### Configure Slave

\`\`\`sql
CHANGE MASTER TO
  MASTER_HOST='master-ip',
  MASTER_USER='replication',
  MASTER_PASSWORD='password',
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=0;

START SLAVE;
SHOW SLAVE STATUS\\G
\`\`\`

## 5. Sharding for Horizontal Scaling

### Range-Based Sharding

\`\`\`sql
-- Shard based on user ID ranges
-- Shard 1: user_id 1-1000000
-- Shard 2: user_id 1000001-2000000

-- Determine shard
function getShardId(userId) {
  return Math.floor(userId / 1000000);
}
\`\`\`

### Hash-Based Sharding

\`\`\`javascript
function getShardId(userId) {
  const shardCount = 4;
  return hash(userId) % shardCount;
}
\`\`\`

## 6. Connection Pooling

### Using MySQL Connection Pool

\`\`\`javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myapp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const connection = await pool.getConnection();
const [rows] = await connection.query('SELECT * FROM users');
connection.release();
\`\`\`

## 7. Partitioning

### Range Partitioning

\`\`\`sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  created_at DATE,
  amount DECIMAL(10,2)
) PARTITION BY RANGE(YEAR(created_at)) (
  PARTITION p2022 VALUES LESS THAN (2023),
  PARTITION p2023 VALUES LESS THAN (2024),
  PARTITION p2024 VALUES LESS THAN (2025)
);
\`\`\`

### List Partitioning

\`\`\`sql
CREATE TABLE users (
  id INT,
  region VARCHAR(50)
) PARTITION BY LIST(region) (
  PARTITION p_north VALUES IN ('NY', 'Boston'),
  PARTITION p_south VALUES IN ('TX', 'Florida')
);
\`\`\`

## 8. Monitoring and Maintenance

### Key Metrics

\`\`\`sql
-- Check active connections
SHOW PROCESSLIST;

-- Check query statistics
SELECT * FROM performance_schema.events_statements_summary_by_digest
ORDER BY SUM_TIMER_WAIT DESC LIMIT 10;

-- Check table sizes
SELECT table_name, ROUND(((data_length + index_length) / 1024 / 1024), 2) as size_mb
FROM information_schema.tables
WHERE table_schema = 'myapp'
ORDER BY size_mb DESC;
\`\`\`

### Regular Maintenance

\`\`\`sql
-- Check table integrity
CHECK TABLE users;
REPAIR TABLE users;

-- Optimize table
OPTIMIZE TABLE users;

-- Analyze tables
ANALYZE TABLE users;
\`\`\`

## 9. Backup Strategies

\`\`\`bash
# Full backup
mysqldump -u root -p --all-databases > backup.sql

# Incremental backup with binary logs
mysqlbinlog mysql-bin.000001 > incremental.sql

# Point-in-time recovery
mysql -u root -p < backup.sql
mysql -u root -p < incremental.sql
\`\`\`

## Conclusion

Building scalable MySQL databases combines proper design, indexing, replication, and monitoring. These patterns will help you handle massive scale while maintaining performance.
      `,
      tags: ["MySQL", "Database", "Scalability", "SQL"]
    },
    {
      id: 14,
      title: "Building Modern REST APIs with Laravel: A Practical Guide",
      excerpt: "Learn step-by-step how to design, implement, and secure RESTful APIs in Laravel, including authentication, rate limiting, and response optimization.",
      category: "Laravel",
      date: "Jan 5, 2025",
      readTime: "9 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1672309558498-cfcc89afff25?w=1200&h=600&fit=crop",
      slug: "modern-rest-apis-laravel",
      content: `
## Introduction

RESTful APIs are the backbone of modern web and mobile applications. Laravel makes it straightforward to design clean, secure, and well-documented APIs. This guide walks through the practical steps of building a production-ready REST API.

## 1. Structuring API Routes

Keep API routes separate and versioned from the start:

\`\`\`php
// routes/api.php
Route::prefix('v1')->group(function () {
    Route::apiResource('posts', PostController::class);
    Route::apiResource('users', UserController::class)->only(['index', 'show']);
});
\`\`\`

Using \`apiResource\` gives you the standard index, show, store, update, and destroy endpoints without repeating yourself.

## 2. Authentication with Sanctum

Laravel Sanctum provides lightweight token-based authentication ideal for SPAs and mobile clients:

\`\`\`php
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
\`\`\`

Issue tokens on login and require them on protected routes:

\`\`\`php
$token = $user->createToken('api-token')->plainTextToken;
\`\`\`

## 3. Request Validation with Form Requests

Move validation logic out of controllers into dedicated Form Request classes:

\`\`\`php
class StorePostRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ];
    }
}
\`\`\`

## 4. Consistent API Responses

Use API Resources to control exactly what gets serialized:

\`\`\`php
class PostResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'excerpt' => Str::limit($this->body, 120),
            'published_at' => $this->created_at->toIso8601String(),
        ];
    }
}
\`\`\`

## 5. Rate Limiting

Protect your API from abuse using Laravel's built-in throttle middleware:

\`\`\`php
Route::middleware('throttle:60,1')->group(function () {
    Route::apiResource('posts', PostController::class);
});
\`\`\`

## 6. Error Handling

Return consistent, machine-readable error payloads by customizing your exception handler so clients can reliably parse failures instead of guessing from status codes alone.

## Conclusion

A practical Laravel REST API comes down to clear route structure, token-based authentication, strict validation, predictable resource responses, and rate limiting. Together these practices make your API both secure and pleasant to consume.
      `,
      tags: ["Laravel", "REST API", "PHP", "Backend"]
    },
    {
      id: 15,
      title: "Vue.js & Inertia.js for Dynamic Single Page Applications",
      excerpt: "Discover how to create responsive, reactive SPAs using Vue.js combined with Inertia.js for seamless Laravel integration.",
      category: "Frontend",
      date: "Feb 20, 2025",
      readTime: "11 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=600&fit=crop",
      slug: "vue-inertia-spa-laravel",
      content: `
## Introduction

Inertia.js lets you build fully client-rendered, Vue-powered single-page applications while keeping Laravel's routing, controllers, and authentication exactly as you already know them — no separate API layer required.

## 1. Why Inertia Instead of a Separate API?

Traditional SPAs require you to build and maintain a full JSON API alongside your frontend. Inertia removes that duplication: controllers return Inertia responses instead of JSON, and Vue components receive props directly.

\`\`\`php
class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Posts/Index', [
            'posts' => Post::latest()->paginate(10),
        ]);
    }
}
\`\`\`

## 2. Setting Up Vue Pages

Each controller response maps to a Vue page component:

\`\`\`vue
<script setup>
defineProps({ posts: Object })
</script>

<template>
  <div v-for="post in posts.data" :key="post.id">
    {{ post.title }}
  </div>
</template>
\`\`\`

## 3. Navigating Without Full Reloads

Inertia's \`<Link>\` component replaces standard anchor tags to keep navigation client-side:

\`\`\`vue
<Link href="/posts" class="text-accent">View all posts</Link>
\`\`\`

## 4. Forms and Validation

Inertia's form helper handles submission state, progress, and Laravel validation errors automatically:

\`\`\`vue
<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({ title: '', body: '' })

function submit() {
  form.post('/posts')
}
</script>
\`\`\`

Validation errors from Laravel's Form Requests are available directly as \`form.errors\`, with no extra API wiring needed.

## 5. Shared Data Across Pages

Use Inertia's shared data (via a middleware) to expose things like the authenticated user or flash messages to every page without repeating props:

\`\`\`php
class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => ['user' => $request->user()],
        ]);
    }
}
\`\`\`

## 6. Performance: Partial Reloads

For data-heavy pages, request only the props that changed instead of the whole page payload, keeping navigation fast even as pages grow in complexity.

## Conclusion

Inertia.js gives you the reactivity and feel of a modern SPA while keeping Laravel as the single source of truth for routing, auth, and validation — no duplicate API to maintain, and no context-switching between two codebases.
      `,
      tags: ["Vue.js", "Inertia.js", "Laravel", "SPA"]
    },
    {
      id: 16,
      title: "Practical Machine Learning Projects for Web Developers",
      excerpt: "Hands-on machine learning implementations for web applications, including prediction models, recommendation systems, and data preprocessing techniques.",
      category: "AI",
      date: "Apr 3, 2025",
      readTime: "10 min read",
      author: "Jalis Mahamud",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop",
      slug: "ml-projects-for-web-developers",
      content: `
## Introduction

You don't need a data science degree to bring machine learning into a web application. As a backend-focused developer, the most practical path is treating ML models as a service your app calls, then handling the plumbing you already know well: APIs, queues, and databases.

## 1. Prediction Models Behind a Simple API

Rather than embedding ML logic in your PHP/Laravel codebase, expose a lightweight prediction service (Python + FastAPI or Flask) and call it like any other internal API:

\`\`\`php
$response = Http::post('http://ml-service:8000/predict', [
    'features' => $inputFeatures,
]);

$prediction = $response->json('prediction');
\`\`\`

This keeps your Laravel app simple while letting the ML service scale and be redeployed independently.

## 2. Recommendation Systems

A practical starting point for "customers also liked" style features is collaborative filtering based on co-occurrence, which you can approximate directly in SQL before reaching for a dedicated ML library:

\`\`\`sql
SELECT product_b, COUNT(*) as score
FROM order_items a
JOIN order_items b ON a.order_id = b.order_id AND a.product_id != b.product_id
WHERE a.product_id = ?
GROUP BY product_b
ORDER BY score DESC
LIMIT 5;
\`\`\`

For more accuracy, this can later be replaced with a proper matrix-factorization model served the same way as the prediction API above.

## 3. Data Preprocessing Pipelines

Clean, consistent input data matters more than model choice. Typical preprocessing steps include:

- Handling missing values (impute or drop)
- Normalizing numeric ranges
- Encoding categorical fields
- De-duplicating and validating input rows

\`\`\`php
dispatch(new PreprocessDatasetJob($datasetId));
\`\`\`

Running preprocessing as a queued job keeps long-running data work off the request cycle.

## 4. Caching Predictions

ML inference can be slow relative to a typical web request. Cache predictions for identical or slowly-changing inputs:

\`\`\`php
$prediction = Cache::remember("prediction:{$userId}", now()->addHours(6), function () use ($features) {
    return $this->mlService->predict($features);
});
\`\`\`

## 5. Monitoring Model Drift

Track prediction accuracy over time in production, not just at training time — real-world data shifts, and a model that was accurate at launch can quietly degrade months later.

## Conclusion

Bringing machine learning into a web application doesn't require rewriting your stack. Treat models as services, preprocess data asynchronously, cache aggressively, and keep monitoring in place — the same engineering discipline you already apply to any other backend dependency.
      `,
      tags: ["Machine Learning", "AI", "Python", "Web Development"]
    },
    {
      id: 17,
      title: "Deploying Laravel Applications on AWS: EC2, RDS, and S3 in Production",
      excerpt: "A practical walkthrough of hosting a Laravel application on AWS — provisioning EC2, connecting to RDS, offloading file storage to S3, and keeping it all deployable with zero downtime.",
      category: "DevOps",
      date: "Jan 15, 2026",
      readTime: "11 min read",
      author: "Jalis Mahamud",
      image: "/blog/aws-deployment.webp",
      slug: "deploying-laravel-on-aws",
      content: `
## Introduction

AWS can feel overwhelming the first time you try to move a Laravel app off shared hosting. In practice, a solid production setup only needs four services working together: an **EC2** instance to run PHP, an **RDS** database instead of a local MySQL install, **S3** for anything users upload, and a **security group** that only opens the ports you actually need. This guide walks through wiring those four pieces together the way I set them up for client projects.

## 1. Provisioning the EC2 Instance

Start with a **t3.small** or **t3.medium** Ubuntu 22.04 instance — enough headroom for PHP-FPM and Nginx without over-paying. Once it's running, install the standard LEMP-for-Laravel stack:

\`\`\`bash
sudo apt update && sudo apt install -y nginx mysql-client php8.3-fpm php8.3-cli \\
  php8.3-mbstring php8.3-xml php8.3-curl php8.3-zip php8.3-bcmath unzip git

curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
\`\`\`

Clone the repository into \`/var/www/app\`, run \`composer install --optimize-autoloader --no-dev\`, and set the ownership so PHP-FPM can write to \`storage\` and \`bootstrap/cache\`:

\`\`\`bash
sudo chown -R www-data:www-data /var/www/app/storage /var/www/app/bootstrap/cache
\`\`\`

## 2. Connecting to RDS Instead of Local MySQL

Running MySQL on the same box as your app is the first thing to fix — it competes for RAM with PHP-FPM and makes backups and scaling much harder. Create a **MySQL 8 RDS instance** in the same VPC, then point \`.env\` at it:

\`\`\`env
DB_CONNECTION=mysql
DB_HOST=app-db.xxxxxxxx.ap-south-1.rds.amazonaws.com
DB_PORT=3306
DB_DATABASE=app_production
DB_USERNAME=app_user
DB_PASSWORD=your-secret-password
\`\`\`

In the RDS security group, only allow inbound port 3306 from your **EC2 instance's security group** — never from \`0.0.0.0/0\`. This one setting is the difference between a private database and a publicly-brute-forceable one.

## 3. Offloading File Storage to S3

Anything a user uploads — avatars, invoices, generated PDFs — should never live on the EC2 instance itself. If you ever need to scale to a second server, or the instance is replaced, local files disappear with it. Laravel's S3 driver handles this with almost no code changes:

\`\`\`bash
composer require league/flysystem-aws-s3-v3
\`\`\`

\`\`\`env
FILESYSTEM_DISK=s3
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
AWS_DEFAULT_REGION=ap-south-1
AWS_BUCKET=app-production-uploads
\`\`\`

From here, every existing \`Storage::disk('s3')->put(...)\` call in your codebase just works — no controller logic changes.

## 4. Nginx and Zero-Downtime Deploys

A minimal Nginx server block pointed at Laravel's \`public/\` directory:

\`\`\`nginx
server {
    listen 80;
    server_name app.example.com;
    root /var/www/app/public;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \\.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
    }
}
\`\`\`

For deploys, avoid the classic mistake of running \`git pull\` directly on a live directory — a half-finished pull can serve broken PHP mid-request. A simple release-based deploy script keeps the previous version live until the new one is fully ready:

\`\`\`bash
#!/bin/bash
set -e
RELEASE=$(date +%Y%m%d%H%M%S)
git clone --depth 1 git@github.com:you/app.git /var/www/releases/$RELEASE
cd /var/www/releases/$RELEASE
composer install --optimize-autoloader --no-dev
php artisan migrate --force
ln -sfn /var/www/releases/$RELEASE /var/www/app
sudo systemctl reload php8.3-fpm
\`\`\`

## 5. Basic Cost Awareness

A t3.small EC2 instance plus a db.t3.micro RDS instance is usually enough for a small-to-mid production app, and both qualify for reserved-instance discounts once traffic is predictable. Set up **AWS Budgets** with an email alert on day one — it's the cheapest insurance against an unexpectedly expensive month.

## Conclusion

None of this requires deep AWS expertise — it's the same Laravel deployment you already know, with the database and file storage moved to managed services that handle backups, durability, and scaling for you. Once EC2, RDS, and S3 are wired together, the app behaves exactly like it did locally, just with production-grade infrastructure underneath it.
      `,
      tags: ["AWS", "Laravel", "DevOps", "Cloud"]
    },
    {
      id: 18,
      title: "Deploying a Laravel App on a Hostinger VPS: Complete Step-by-Step Guide",
      excerpt: "How to take a Laravel project from local development to a fully configured Hostinger VPS — Nginx, PHP-FPM, MySQL, SSL, and a deployment workflow you can repeat for every release.",
      category: "DevOps",
      date: "Jan 22, 2026",
      readTime: "10 min read",
      author: "Jalis Mahamud",
      image: "/blog/hostinger-vps.webp",
      slug: "laravel-hostinger-vps-deployment",
      content: `
## Introduction

Hostinger's VPS plans are a popular, affordable way to self-host a Laravel application without the complexity of a full cloud provider. Unlike shared hosting, a VPS gives you root access — which means you're responsible for setting up the whole stack yourself. Here's exactly how I configure one for a production Laravel deployment.

## 1. Initial Server Setup

After provisioning the VPS from the Hostinger dashboard (Ubuntu 22.04 is the safest default), connect over SSH and do the basic hardening first — before installing anything else:

\`\`\`bash
ssh root@your-vps-ip

adduser deploy
usermod -aG sudo deploy

ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
\`\`\`

Switch to the \`deploy\` user for everything from here on — running your app as \`root\` is a habit worth breaking immediately.

## 2. Installing the Stack

\`\`\`bash
sudo apt update && sudo apt install -y nginx mysql-server php8.3-fpm \\
  php8.3-mysql php8.3-mbstring php8.3-xml php8.3-curl php8.3-zip unzip git curl

curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
\`\`\`

Secure the MySQL installation and create a dedicated database and user for the app — never run the app off the \`root\` MySQL account:

\`\`\`bash
sudo mysql_secure_installation

sudo mysql -e "CREATE DATABASE app_production;"
sudo mysql -e "CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'strong-password-here';"
sudo mysql -e "GRANT ALL PRIVILEGES ON app_production.* TO 'app_user'@'localhost';"
\`\`\`

## 3. Deploying the Application

\`\`\`bash
cd /var/www
sudo git clone https://github.com/you/app.git
cd app
composer install --optimize-autoloader --no-dev
cp .env.example .env
php artisan key:generate
php artisan migrate --force

sudo chown -R www-data:www-data /var/www/app
sudo chmod -R 775 /var/www/app/storage /var/www/app/bootstrap/cache
\`\`\`

## 4. Nginx Virtual Host

Create \`/etc/nginx/sites-available/app\`:

\`\`\`nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/app/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \\.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
    }

    location ~ /\\.(?!well-known).* {
        deny all;
    }
}
\`\`\`

\`\`\`bash
sudo ln -s /etc/nginx/sites-available/app /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
\`\`\`

## 5. Free SSL with Let's Encrypt

Point your domain's A record at the VPS IP first, then issue a certificate with Certbot — it edits the Nginx config for you and sets up auto-renewal:

\`\`\`bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
\`\`\`

## 6. Queues and the Scheduler

Most Laravel apps need a queue worker and the scheduler running continuously. Supervisor keeps the queue worker alive across crashes and reboots:

\`\`\`ini
; /etc/supervisor/conf.d/app-worker.conf
[program:app-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/app/artisan queue:work --sleep=3 --tries=3
autostart=true
autorestart=true
numprocs=2
user=www-data
\`\`\`

\`\`\`bash
sudo supervisorctl reread && sudo supervisorctl update
\`\`\`

And a single cron entry drives Laravel's own scheduler:

\`\`\`bash
* * * * * cd /var/www/app && php artisan schedule:run >> /dev/null 2>&1
\`\`\`

## Conclusion

A Hostinger VPS gets you the same production capability as a much more expensive managed platform, as long as you set up the fundamentals correctly: a non-root deploy user, a dedicated database user, HTTPS from day one, and Supervisor keeping your queue workers alive. Once this is in place, shipping a new release is just \`git pull\`, \`composer install\`, \`migrate\`, and a queue restart.
      `,
      tags: ["Hostinger", "VPS", "Laravel", "Nginx", "DevOps"]
    },
    {
      id: 19,
      title: "Claude AI Models Explained: Choosing the Right Model for Your App",
      excerpt: "Anthropic's Claude models come in different tiers built for different jobs. Here's how the model family breaks down, and a practical framework for picking the right one for a real application.",
      category: "AI",
      date: "Feb 3, 2026",
      readTime: "9 min read",
      author: "Jalis Mahamud",
      image: "/blog/claude-ai-models.webp",
      slug: "claude-ai-models-explained",
      content: `
## Introduction

When I first started integrating Claude into a Laravel backend, the hardest decision wasn't the API itself — it was picking which model to call. Anthropic ships several Claude models, and each one is a genuine tradeoff between speed, cost, and reasoning depth, not just "better" or "worse" versions of each other. This post breaks down how the model lineup is organized and, more usefully, how to decide which one belongs in a given feature.

## 1. The Model Tiers, in Plain Terms

Claude models are organized into three practical tiers:

- **Haiku** — the fastest and cheapest tier. Built for high-volume, low-latency work: classifying support tickets, extracting fields from a form, moderating comments, powering an autocomplete suggestion.
- **Sonnet** — the balanced tier, and the right default for most application features. It handles multi-step reasoning, coding, and agentic tool use at a fraction of the cost of the top tier, and for the majority of product features the quality difference over the top tier is small.
- **Opus** — the top tier for complex agentic coding, long documents, and enterprise-grade reasoning. Reach for it when a task genuinely requires the deepest reasoning available — large refactors, multi-step research, or workflows where getting the answer right matters more than shaving off cost.

Anthropic also ships an even more capable frontier tier above Opus for the most demanding long-horizon agentic work, priced accordingly above it — most applications never need to reach for it, but it exists for the hardest problems.

## 2. A Framework for Choosing

Rather than picking a model because it's "the newest," ask three questions about the feature you're building:

\`\`\`
1. How often does this run?
   High volume (thousands/day)  → lean toward Haiku
   Low volume (user-triggered)  → Sonnet or Opus is affordable

2. How much reasoning does one call actually need?
   Single-step lookup/classification → Haiku
   Multi-step reasoning, coding, tool use → Sonnet
   Long-horizon planning, hardest problems → Opus

3. What's the cost of a wrong answer?
   Low stakes (a suggestion, draft text) → cheaper tier is fine
   High stakes (financial, legal, production code) → pay for the better tier
\`\`\`

A support-ticket triage feature that runs 10,000 times a day is a Haiku job even if Opus would technically do it "better" — the marginal quality gain isn't worth 5-10x the cost at that volume. A one-off "review this pull request for bugs" feature is the opposite: it runs rarely, and a missed bug is expensive, so the top tier earns its cost.

## 3. Calling the API from PHP

Anthropic's PHP SDK makes the model choice a single parameter — switching tiers to compare cost and quality on your own workload is trivial:

\`\`\`php
use Anthropic\\Client;

$client = Anthropic\\Client::withApiKey(env('ANTHROPIC_API_KEY'));

$response = $client->messages->create(
    model: 'claude-sonnet-5',
    maxTokens: 1024,
    messages: [
        ['role' => 'user', 'content' => 'Summarize this support ticket in one sentence: ' . $ticketBody],
    ],
);

$summary = $response->content[0]->text;
\`\`\`

Swapping \`claude-sonnet-5\` for \`claude-haiku-4-5\` or \`claude-opus-5\` is the entire migration — no other code changes, which makes it cheap to benchmark a feature against two tiers before committing.

## 4. Context Window and Output Limits Matter Too

Beyond raw reasoning quality, check two practical limits before picking a model: the **context window** (how much input text it can read at once — most current Claude models handle very large documents, but Haiku's window is smaller than Sonnet's or Opus's) and the **max output tokens** per response. A feature that summarizes an entire codebase or a long legal contract needs a large context window regardless of which reasoning tier you pick.

## 5. A Practical Default

For a typical SaaS product, a reasonable starting split is: Haiku for background classification and moderation jobs, Sonnet for the user-facing AI features (chat assistants, code generation, content drafting), and Opus reserved for a small number of "do this right, cost is secondary" internal tools. Start every new feature on the balanced tier and only move up or down once you've measured actual output quality against your own data — cost estimates from a demo prompt rarely match a real production workload.

## Conclusion

There's no universally "best" Claude model — only the right model for a specific job. Match the tier to how often the feature runs, how much reasoning one call actually needs, and what a wrong answer costs you, and the choice usually becomes obvious rather than a guess.
      `,
      tags: ["AI", "Claude", "Anthropic", "API"]
    },
    {
      id: 20,
      title: "Essential PHP Built-in Functions Every Developer Should Master",
      excerpt: "PHP ships with hundreds of built-in functions, but a small, well-understood set covers most real-world backend work. Here are the ones worth knowing cold, with practical examples of each.",
      category: "PHP",
      date: "Feb 12, 2026",
      readTime: "10 min read",
      author: "Jalis Mahamud",
      image: "/blog/php-builtin-functions.webp",
      slug: "essential-php-builtin-functions",
      content: `
## Introduction

It's easy to reach for a package for something PHP already does natively. Knowing the standard library well means writing less code, shipping fewer dependencies, and reading other people's PHP faster. Here are the built-in functions that come up constantly in real backend work, grouped by what they're actually used for.

## 1. Array Functions

These do the bulk of everyday data-shaping work — filtering, transforming, and searching collections without a loop:

\`\`\`php
$users = [
    ['name' => 'Ayesha', 'age' => 28, 'active' => true],
    ['name' => 'Rafi', 'age' => 17, 'active' => false],
    ['name' => 'Nusrat', 'age' => 34, 'active' => true],
];

// array_filter - keep only matching elements
$activeUsers = array_filter($users, fn($u) => $u['active']);

// array_map - transform every element
$names = array_map(fn($u) => $u['name'], $users);

// array_column - pull a single field out of an array of arrays/objects
$ages = array_column($users, 'age');

// array_reduce - fold an array down to a single value
$totalAge = array_reduce($users, fn($carry, $u) => $carry + $u['age'], 0);

// in_array / array_search
in_array('Rafi', $names);      // true
array_search('Rafi', $names);  // 1 (the index)
\`\`\`

\`array_filter\` re-keys nothing by default — the original array indexes are preserved, which surprises people the first time they \`json_encode\` a filtered array and get an object instead of a list. Fix it with \`array_values()\` when you need a clean re-indexed array.

## 2. String Functions

\`\`\`php
// str_contains / str_starts_with / str_ends_with (PHP 8+)
str_contains('user@example.com', '@');   // true
str_starts_with('/api/users', '/api');   // true

// sprintf - safe, readable string formatting
$message = sprintf('%s has %d unread messages', $user->name, $count);

// trim / rtrim / ltrim
trim('  hello  ');   // 'hello'

// explode / implode
$parts = explode(',', 'php,laravel,vue');
$csv = implode(', ', $parts);

// str_pad - useful for invoice numbers, fixed-width IDs
str_pad('42', 6, '0', STR_PAD_LEFT);  // '000042'
\`\`\`

## 3. Escaping and Sanitizing Output

This is where PHP's built-ins directly prevent security bugs. \`htmlspecialchars()\` converts characters that would otherwise be interpreted as HTML into safe entities — critical any time you echo user input into a page:

\`\`\`php
$comment = '<script>alert("xss")</script>';

echo htmlspecialchars($comment, ENT_QUOTES, 'UTF-8');
// Output: &lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;
\`\`\`

Without that call, the browser would execute the script tag instead of displaying it as text — this single function is one of the most important lines of defense against stored XSS in any PHP app that renders user-submitted content.

## 4. Date and Time Functions

\`\`\`php
$now = new DateTime();
echo $now->format('Y-m-d H:i:s');

// strtotime - parse human-readable dates
$timestamp = strtotime('next monday');

// date_diff for durations
$start = new DateTime('2026-01-01');
$end = new DateTime('2026-03-15');
$interval = $start->diff($end);
echo $interval->days . ' days';
\`\`\`

In Laravel apps, Carbon wraps these same functions with a friendlier API, but knowing the underlying \`DateTime\`/\`strtotime\` behavior helps when debugging timezone issues Carbon doesn't fully abstract away.

## 5. Type Checking and Conversion

\`\`\`php
gettype($value);          // 'string', 'integer', 'array', etc.
is_numeric('123.45');     // true
is_array($value);
(int) '42px';             // 42 - stops parsing at the first non-numeric char
intval('42px');           // same as above, more explicit
filter_var($email, FILTER_VALIDATE_EMAIL);  // returns false if invalid
\`\`\`

\`filter_var\` with \`FILTER_VALIDATE_EMAIL\` is a quick, dependency-free way to validate email format before it ever reaches a validation rule or database constraint.

## 6. JSON Handling

\`\`\`php
$json = json_encode(['name' => 'Jalis', 'role' => 'Developer']);
$data = json_decode($json, true); // true = associative array, not stdClass
\`\`\`

Always check \`json_last_error()\` after decoding untrusted input — a malformed payload returns \`null\` silently rather than throwing, which is an easy source of bugs if unchecked.

## Conclusion

None of these functions are exotic — that's the point. Reaching for \`array_filter\`, \`htmlspecialchars\`, and \`filter_var\` instead of hand-rolled loops or a third-party package keeps a codebase smaller, faster, and easier for the next developer to read. Spend an hour with the PHP manual's array and string function pages — it pays for itself on nearly every ticket afterward.
      `,
      tags: ["PHP", "Backend", "Best Practices"]
    },
    {
      id: 21,
      title: "Laravel Queues & Jobs: Building Scalable Background Processing",
      excerpt: "Anything that doesn't need to happen before the response goes out — emails, exports, notifications — belongs in a queue. Here's how to design Laravel jobs that scale.",
      category: "Laravel",
      date: "Feb 20, 2026",
      readTime: "10 min read",
      author: "Jalis Mahamud",
      image: "/blog/laravel-queues.webp",
      slug: "laravel-queues-and-jobs",
      content: `
## Introduction

A common performance complaint — "this endpoint takes 4 seconds to respond" — is usually a queue problem, not a database problem. If a request sends an email, generates a PDF, or calls a third-party API before returning a response, the user is waiting on work that doesn't need to happen synchronously. Laravel's queue system moves that work off the request cycle entirely.

## 1. Choosing a Queue Driver

Laravel supports several drivers out of the box. For anything beyond local development, **Redis** is the practical default — it's fast, supports delayed jobs natively, and pairs well with Horizon for monitoring:

\`\`\`env
QUEUE_CONNECTION=redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
\`\`\`

The \`database\` driver works for low-volume apps without a Redis instance available, but under real load it puts unnecessary write pressure on the same database serving your application.

## 2. Writing a Job

A job is a plain class describing one unit of background work:

\`\`\`php
namespace App\\Jobs;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Bus\\Dispatchable;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Queue\\SerializesModels;

class SendInvoiceEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 3;
    public int $backoff = 30;

    public function __construct(public Invoice $invoice) {}

    public function handle(InvoiceMailer $mailer): void
    {
        $mailer->send($this->invoice);
    }
}
\`\`\`

Dispatching it from a controller is a single line, and the HTTP response returns immediately without waiting for the email to actually send:

\`\`\`php
SendInvoiceEmail::dispatch($invoice);
\`\`\`

## 3. Running Workers

A queued job does nothing until a worker process picks it up:

\`\`\`bash
php artisan queue:work --tries=3 --timeout=90
\`\`\`

In production, this process needs to run continuously and restart automatically if it crashes — that's a job for **Supervisor**, not a terminal you leave open:

\`\`\`ini
[program:app-worker]
command=php /var/www/app/artisan queue:work --sleep=3 --tries=3
autostart=true
autorestart=true
numprocs=4
user=www-data
\`\`\`

\`numprocs=4\` runs four worker processes in parallel, so four jobs can process simultaneously instead of one at a time.

## 4. Handling Failures Gracefully

Jobs fail — a third-party API times out, a mail server is briefly unreachable. Define what should happen on final failure with the \`failed()\` method, and use \`retryUntil()\` for jobs that should keep retrying over a longer window rather than a fixed number of attempts:

\`\`\`php
public function failed(Throwable $exception): void
{
    Log::error('Invoice email permanently failed', [
        'invoice_id' => $this->invoice->id,
        'error' => $exception->getMessage(),
    ]);

    Notification::route('slack', config('services.slack.alerts'))
        ->notify(new JobFailedNotification($this));
}

public function retryUntil(): DateTime
{
    return now()->addMinutes(30);
}
\`\`\`

## 5. Chaining and Batching Related Jobs

When several jobs need to run in sequence, chain them so each only starts after the previous one succeeds:

\`\`\`php
Bus::chain([
    new GenerateInvoicePdf($order),
    new UploadInvoiceToS3($order),
    new SendInvoiceEmail($order),
])->dispatch();
\`\`\`

For independent jobs that should run in parallel but need a single "all done" callback — like processing 500 rows of a CSV import — use a batch instead:

\`\`\`php
$batch = Bus::batch(
    $rows->map(fn($row) => new ImportRow($row))
)->then(function (Batch $batch) {
    Notification::send($user, new ImportCompleted($batch));
})->dispatch();
\`\`\`

## 6. Monitoring with Horizon

For Redis-backed queues, **Laravel Horizon** gives you a dashboard showing throughput, failed jobs, and wait times per queue — without it, a stuck queue is invisible until users start complaining:

\`\`\`bash
composer require laravel/horizon
php artisan horizon:install
php artisan horizon
\`\`\`

## Conclusion

The rule of thumb is simple: if a step in a request doesn't need to finish before the user gets a response, it belongs in a queue. Combined with Supervisor for reliability and Horizon for visibility, queued jobs turn a slow, fragile request handler into a fast response plus a resilient background pipeline.
      `,
      tags: ["Laravel", "Queues", "Jobs", "Performance"]
    },
    {
      id: 22,
      title: "Dockerizing a Laravel + Vue.js Application for Consistent Environments",
      excerpt: "\"It works on my machine\" disappears once the whole stack — PHP, Nginx, MySQL, and the Vue build — runs from the same Docker Compose file for every developer and every server.",
      category: "DevOps",
      date: "Mar 1, 2026",
      readTime: "11 min read",
      author: "Jalis Mahamud",
      image: "/blog/docker-laravel.webp",
      slug: "dockerizing-laravel-vue",
      content: `
## Introduction

Every team eventually hits the same problem: a new developer's PHP version doesn't match production, or MySQL behaves slightly differently between two machines, and a bug only reproduces on one laptop. Docker fixes this by describing the entire stack — PHP, web server, database, and the Vue.js frontend build — as code, so every environment runs from the exact same definition.

## 1. The PHP Application Container

A multi-stage Dockerfile keeps the final image small by only carrying build tools during the build step, not into the running container:

\`\`\`dockerfile
FROM php:8.3-fpm AS base

RUN apt-get update && apt-get install -y \\
    libzip-dev unzip git curl \\
    && docker-php-ext-install pdo_mysql zip bcmath

WORKDIR /var/www

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --optimize-autoloader

COPY . .
RUN php artisan config:cache

CMD ["php-fpm"]
\`\`\`

## 2. The Vue.js Build Container

The frontend doesn't need to run as a long-lived container in production — it just needs to build static assets once. A separate Node stage handles that:

\`\`\`dockerfile
FROM node:20-alpine AS frontend

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
\`\`\`

## 3. Wiring It Together with Docker Compose

\`docker-compose.yml\` defines every service — app, web server, database, and Redis — and how they talk to each other:

\`\`\`yaml
services:
  app:
    build: .
    volumes:
      - ./:/var/www
    depends_on:
      - db
      - redis

  nginx:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./:/var/www
      - ./docker/nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - app

  db:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: app
      MYSQL_USER: app
      MYSQL_PASSWORD: secret
      MYSQL_ROOT_PASSWORD: rootsecret
    volumes:
      - db_data:/var/lib/mysql

  redis:
    image: redis:alpine

volumes:
  db_data:
\`\`\`

Every service name (\`db\`, \`redis\`) is also its hostname inside the Docker network, so \`.env\` just points \`DB_HOST=db\` instead of an IP address — Docker's internal DNS resolves it.

## 4. Local Development vs. Production

The same Compose file shouldn't run identically in both places. A \`docker-compose.override.yml\` — automatically merged in local development — mounts the source code live and enables Xdebug, while the production file only ships the built image:

\`\`\`yaml
# docker-compose.override.yml (local only, git-ignored optional)
services:
  app:
    volumes:
      - ./:/var/www   # live code, no rebuild needed on save
    environment:
      APP_DEBUG: "true"
\`\`\`

In production, skip the override file entirely and run against the built image only:

\`\`\`bash
docker compose -f docker-compose.yml up -d --build
\`\`\`

## 5. Running Artisan Commands Inside the Container

Since the app now lives inside a container, day-to-day Artisan commands run through \`docker compose exec\` rather than directly on the host:

\`\`\`bash
docker compose exec app php artisan migrate
docker compose exec app php artisan queue:work
docker compose exec app composer install
\`\`\`

## 6. Keeping Images Small

Two habits keep image size and build time under control: a \`.dockerignore\` that excludes \`node_modules\`, \`vendor\`, and \`.git\` from the build context, and Alpine-based images wherever a project doesn't need the full Debian toolchain:

\`\`\`
# .dockerignore
node_modules
vendor
.git
storage/logs
.env
\`\`\`

## Conclusion

Once the Dockerfiles and Compose configuration are checked into the repository, "it works on my machine" stops being a debugging step — every developer, CI runner, and production server builds from the identical definition. The upfront setup cost pays for itself the first time a new team member gets a fully working environment running with a single \`docker compose up\`.
      `,
      tags: ["Docker", "Laravel", "Vue.js", "DevOps"]
    },
    {
      id: 23,
      title: "CI/CD for Laravel: Automating Deployment with GitHub Actions",
      excerpt: "Manual deploys are where bugs slip through. A GitHub Actions pipeline that runs tests, checks code style, and deploys automatically turns every merge into a safe, repeatable release.",
      category: "DevOps",
      date: "Mar 10, 2026",
      readTime: "9 min read",
      author: "Jalis Mahamud",
      image: "/blog/cicd-github-actions.webp",
      slug: "cicd-laravel-github-actions",
      content: `
## Introduction

The moment a deploy involves more than \`git pull\` and crossing your fingers, it's worth automating. GitHub Actions is a natural fit for Laravel projects already hosted on GitHub — it runs your test suite on every push and can deploy automatically once those tests pass, removing the human step where mistakes happen.

## 1. A Basic Test Workflow

Every pipeline starts the same way: run the test suite before anything else is allowed to happen. This workflow spins up a fresh MySQL service container so tests run against a real database, not SQLite stand-ins that can hide MySQL-specific bugs:

\`\`\`yaml
# .github/workflows/tests.yml
name: Tests

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      mysql:
        image: mysql:8.0
        env:
          MYSQL_DATABASE: testing
          MYSQL_ROOT_PASSWORD: secret
        ports:
          - 3306:3306
        options: >-
          --health-cmd="mysqladmin ping"
          --health-interval=10s
          --health-timeout=5s
          --health-retries=5

    steps:
      - uses: actions/checkout@v4

      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: "8.3"
          extensions: mbstring, pdo_mysql, bcmath

      - name: Install dependencies
        run: composer install --prefer-dist --no-progress

      - name: Copy .env
        run: cp .env.example .env

      - name: Generate app key
        run: php artisan key:generate

      - name: Run migrations
        run: php artisan migrate --force
        env:
          DB_HOST: 127.0.0.1
          DB_DATABASE: testing
          DB_PASSWORD: secret

      - name: Run tests
        run: php artisan test
        env:
          DB_HOST: 127.0.0.1
          DB_DATABASE: testing
          DB_PASSWORD: secret
\`\`\`

## 2. Adding Static Analysis and Style Checks

Catching bugs before runtime is cheaper than catching them after. Adding **PHPStan** and **Laravel Pint** as separate steps means a pull request fails fast on obvious issues without waiting for the full test suite:

\`\`\`yaml
      - name: Static analysis
        run: vendor/bin/phpstan analyse

      - name: Code style check
        run: vendor/bin/pint --test
\`\`\`

## 3. Deploying After Tests Pass

Once tests are green on \`main\`, a second job — gated with \`needs: test\` — deploys over SSH. This ensures a broken commit can never reach the server, because the deploy job simply never runs if the test job fails:

\`\`\`yaml
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Deploy over SSH
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.SERVER_HOST }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /var/www/app
            git pull origin main
            composer install --optimize-autoloader --no-dev
            php artisan migrate --force
            php artisan config:cache
            php artisan queue:restart
\`\`\`

Every credential — the host, SSH user, and private key — lives in **GitHub Secrets**, never hardcoded in the workflow file. \`queue:restart\` at the end is easy to forget but important: without it, running queue workers keep executing old, cached code until they're manually restarted.

## 4. Zero-Downtime Deploys with Release Directories

For higher-traffic apps, replace the simple \`git pull\` step with a release-based deploy — clone into a timestamped directory, then atomically swap a symlink once the new release is fully ready, so there's never a moment where the live directory contains a half-updated codebase:

\`\`\`bash
RELEASE=$(date +%Y%m%d%H%M%S)
git clone --depth 1 git@github.com:you/app.git /var/www/releases/$RELEASE
cd /var/www/releases/$RELEASE && composer install --optimize-autoloader --no-dev
ln -sfn /var/www/releases/$RELEASE /var/www/app
sudo systemctl reload php8.3-fpm
\`\`\`

## Conclusion

A CI/CD pipeline doesn't need to be elaborate to be valuable — running the test suite automatically on every push already catches the majority of regressions before they reach a reviewer, and gating deployment behind that same test job means a broken commit physically cannot reach production. From there, it's just a matter of scaling the pipeline's sophistication to match the project's traffic and risk tolerance.
      `,
      tags: ["CI/CD", "GitHub Actions", "Laravel", "DevOps"]
    },
    {
      id: 24,
      title: "Laravel Sanctum Authentication for SPAs: A Practical Guide",
      excerpt: "Sanctum's cookie-based SPA authentication is simpler and more secure than juggling JWTs by hand. Here's how the CSRF/session handshake works and how to wire it up with a Vue.js frontend.",
      category: "Laravel",
      date: "Mar 18, 2026",
      readTime: "9 min read",
      author: "Jalis Mahamud",
      image: "/blog/laravel-sanctum-spa.webp",
      slug: "laravel-sanctum-spa-auth",
      content: `
## Introduction

For a single-page app served from the same top-level domain as its API, Laravel Sanctum's cookie-based SPA authentication is a better fit than issuing JWTs — it reuses Laravel's own session and CSRF protection instead of you having to build token refresh and storage logic by hand. This guide covers the actual request flow, since that's the part that trips people up.

## 1. Installing and Configuring Sanctum

\`\`\`bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\\\\Sanctum\\\\SanctumServiceProvider"
php artisan migrate
\`\`\`

Tell Sanctum which frontend domains are allowed to authenticate via cookies, and make sure the session driver is shared correctly between both:

\`\`\`env
SANCTUM_STATEFUL_DOMAINS=localhost:5173,app.example.com
SESSION_DOMAIN=.example.com
\`\`\`

Add the middleware to your API group in \`bootstrap/app.php\` (Laravel 11+) or \`app/Http/Kernel.php\` on earlier versions:

\`\`\`php
->withMiddleware(function (Middleware $middleware) {
    $middleware->statefulApi();
})
\`\`\`

## 2. The Request Flow, Step by Step

This is the part that's easy to get wrong: Sanctum's SPA auth is **not** "send a token in a header." It's a three-step cookie handshake:

1. The SPA requests \`GET /sanctum/csrf-cookie\` first. Laravel responds with a \`XSRF-TOKEN\` cookie.
2. The frontend HTTP client reads that cookie and sends its value back as an \`X-XSRF-TOKEN\` header on every subsequent request (Axios does this automatically).
3. The SPA then posts credentials to \`/login\`. On success, Laravel sets a session cookie, and every request after that is authenticated purely by that cookie — no token to store in \`localStorage\` at all.

\`\`\`javascript
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://api.example.com';

async function login(email, password) {
  await axios.get('/sanctum/csrf-cookie');
  await axios.post('/login', { email, password });
  const user = await axios.get('/api/user');
  return user.data;
}
\`\`\`

## 3. Why Not localStorage?

Storing a JWT in \`localStorage\` is readable by any JavaScript running on the page — including an injected script from an XSS vulnerability elsewhere in the app. Sanctum's session cookie, by contrast, is set with \`HttpOnly\`, meaning JavaScript cannot read it at all, even if an XSS bug exists elsewhere. Combined with the CSRF token requirement, this closes off both the theft-via-XSS and forged-request attack surfaces that hand-rolled JWT-in-localStorage setups are prone to.

## 4. Protecting Routes

\`\`\`php
// routes/api.php
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn (Request $request) => $request->user());
    Route::apiResource('projects', ProjectController::class);
});
\`\`\`

Any request that reaches these routes without a valid session cookie gets a \`401\` automatically — no manual token verification code needed in the controller.

## 5. Mobile and Third-Party API Tokens

Sanctum also issues traditional bearer tokens for cases where cookies don't make sense — a mobile app, or a third party calling your API directly:

\`\`\`php
$token = $user->createToken('mobile-app')->plainTextToken;
\`\`\`

\`\`\`php
Route::middleware('auth:sanctum')->get('/api/data', function (Request $request) {
    return $request->user()->tokenCan('read-data')
        ? Data::all()
        : abort(403);
});
\`\`\`

Token abilities (\`read-data\`, \`write-data\`) let you scope exactly what a given token can do — useful for issuing limited-permission API keys to third-party integrations without giving them full account access.

## 6. Common Pitfall: CORS and Credentials

A frequent source of confusion is a request that works in Postman but fails from the browser with a CORS error. Two settings are required together — CORS must allow credentials, and the frontend must actually send them:

\`\`\`php
// config/cors.php
'supports_credentials' => true,
'allowed_origins' => ['https://app.example.com'],
\`\`\`

Without \`supports_credentials => true\` on the backend and \`withCredentials: true\` on the frontend, the session cookie is silently dropped by the browser and every authenticated request returns \`401\`, even though the login step appeared to succeed.

## Conclusion

Sanctum's SPA mode trades a small amount of upfront configuration — matching domains, CORS, and the CSRF handshake — for a genuinely simpler and more secure authentication model than storing tokens client-side. For any SPA and API sharing a parent domain, it's the right default over rolling your own JWT flow.
      `,
      tags: ["Laravel", "Sanctum", "Authentication", "Vue.js"]
    },
    {
      id: 25,
      title: "Real-Time Features in Laravel with WebSockets and Reverb",
      excerpt: "Live notifications, chat, and dashboards that update themselves — Laravel Reverb brings first-party WebSocket broadcasting into the framework without a third-party service in the loop.",
      category: "Laravel",
      date: "Mar 25, 2026",
      readTime: "10 min read",
      author: "Jalis Mahamud",
      image: "/blog/laravel-websockets.webp",
      slug: "realtime-laravel-websockets",
      content: `
## Introduction

Polling an endpoint every few seconds to check "did anything change" wastes server resources and still feels laggy to users. WebSockets solve this by letting the server push updates the instant they happen. Laravel Reverb — the framework's own WebSocket server — makes this practical to self-host, instead of depending on a paid third-party broadcasting service for every project.

## 1. Installing Reverb

\`\`\`bash
composer require laravel/reverb
php artisan reverb:install
\`\`\`

This publishes broadcasting configuration and adds the relevant environment variables:

\`\`\`env
BROADCAST_CONNECTION=reverb

REVERB_APP_ID=my-app
REVERB_APP_KEY=local-key
REVERB_APP_SECRET=local-secret
REVERB_HOST=localhost
REVERB_PORT=8080
\`\`\`

Start the WebSocket server itself as its own long-running process, separate from PHP-FPM:

\`\`\`bash
php artisan reverb:start
\`\`\`

## 2. Defining a Broadcast Event

Any event that should push to connected clients implements \`ShouldBroadcast\` and declares which channel it broadcasts on:

\`\`\`php
namespace App\\Events;

use Illuminate\\Broadcasting\\Channel;
use Illuminate\\Broadcasting\\InteractsWithSockets;
use Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;

class OrderStatusUpdated implements ShouldBroadcast
{
    use InteractsWithSockets;

    public function __construct(public Order $order) {}

    public function broadcastOn(): Channel
    {
        return new PrivateChannel('orders.' . $this->order->id);
    }

    public function broadcastWith(): array
    {
        return [
            'status' => $this->order->status,
            'updated_at' => $this->order->updated_at,
        ];
    }
}
\`\`\`

Firing it from a controller or job is identical to any other Laravel event:

\`\`\`php
event(new OrderStatusUpdated($order));
\`\`\`

## 3. Authorizing Private Channels

A **private channel** requires the subscribing user to be authorized — this is where you prevent User A from listening to User B's order updates:

\`\`\`php
// routes/channels.php
Broadcast::channel('orders.{orderId}', function (User $user, int $orderId) {
    return $user->id === Order::findOrNew($orderId)->user_id;
});
\`\`\`

Reverb calls this closure on every subscription attempt — if it returns \`false\` or \`null\`, the connection is rejected before any data can flow to that client.

## 4. Listening on the Frontend

With **Laravel Echo** configured to talk to Reverb, subscribing to updates from Vue is a few lines:

\`\`\`javascript
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: false,
});

echo.private(\`orders.\${orderId}\`)
    .listen('OrderStatusUpdated', (event) => {
        order.value.status = event.status;
    });
\`\`\`

The moment the backend fires \`OrderStatusUpdated\`, every subscribed browser tab updates instantly — no polling, no refresh button.

## 5. Presence Channels for "Who's Online"

For features like showing which users are currently viewing a shared document, a **presence channel** tracks who's connected, not just who's authorized:

\`\`\`php
Broadcast::channel('document.{documentId}', function (User $user, int $documentId) {
    return ['id' => $user->id, 'name' => $user->name];
});
\`\`\`

\`\`\`javascript
echo.join(\`document.\${documentId}\`)
    .here((users) => { onlineUsers.value = users; })
    .joining((user) => { onlineUsers.value.push(user); })
    .leaving((user) => {
        onlineUsers.value = onlineUsers.value.filter(u => u.id !== user.id);
    });
\`\`\`

## 6. Running Reverb in Production

Reverb needs to run as its own supervised, always-on process, same as a queue worker:

\`\`\`ini
[program:reverb]
command=php /var/www/app/artisan reverb:start
autostart=true
autorestart=true
user=www-data
\`\`\`

Put it behind Nginx with a WebSocket-aware proxy configuration so connections upgrade correctly from HTTP to \`ws://\`:

\`\`\`nginx
location /app/ {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
\`\`\`

## Conclusion

Real-time features used to mean either paying for a third-party broadcasting service or hand-rolling a WebSocket server. Reverb closes that gap inside Laravel itself — private and presence channels handle authorization, Echo handles the frontend subscription, and the result is instant updates without a single polling request.
      `,
      tags: ["Laravel", "WebSockets", "Reverb", "Real-time"]
    },
    {
      id: 26,
      title: "Building Multi-Tenant SaaS Applications with Laravel",
      excerpt: "Every SaaS product eventually asks the same question: how do you isolate one customer's data from another's, cleanly, at scale? Here's how single-database multi-tenancy works in Laravel.",
      category: "Laravel",
      date: "Apr 2, 2026",
      readTime: "12 min read",
      author: "Jalis Mahamud",
      image: "/blog/multi-tenant-saas.webp",
      slug: "multi-tenant-saas-laravel",
      content: `
## Introduction

Multi-tenancy is the architecture behind every B2B SaaS product — one codebase and one deployment serving many separate customers ("tenants"), each with data that must never leak into another's. There are a few ways to build this in Laravel; this post focuses on **single-database, row-level tenancy**, the approach that scales well without the operational overhead of managing a separate database per customer.

## 1. The Core Idea: A Tenant Column and a Global Scope

The simplest correct approach adds a \`tenant_id\` column to every tenant-owned table, then enforces it automatically so no query can accidentally cross tenant boundaries:

\`\`\`php
Schema::table('projects', function (Blueprint $table) {
    $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();
});
\`\`\`

A global scope applies the \`tenant_id\` filter to every query on that model automatically, so individual controllers and jobs never have to remember to add \`where('tenant_id', ...)\` themselves:

\`\`\`php
namespace App\\Models\\Scopes;

use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Scope;

class TenantScope implements Scope
{
    public function apply(Builder $builder, Model $model): void
    {
        if ($tenantId = app('currentTenant')?->id) {
            $builder->where($model->getTable() . '.tenant_id', $tenantId);
        }
    }
}
\`\`\`

\`\`\`php
class Project extends Model
{
    protected static function booted(): void
    {
        static::addGlobalScope(new TenantScope);

        static::creating(function (Project $project) {
            $project->tenant_id ??= app('currentTenant')?->id;
        });
    }
}
\`\`\`

With this in place, \`Project::all()\` transparently only returns the current tenant's projects — the isolation happens at the model layer, not scattered across every controller.

## 2. Resolving the Current Tenant

The tenant needs to be identified early in the request lifecycle — typically from the subdomain (\`acme.app.com\`) or a custom domain mapped to a tenant record. A middleware resolves it once and binds it into the container:

\`\`\`php
namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use App\\Models\\Tenant;

class ResolveTenant
{
    public function handle(Request $request, Closure $next)
    {
        $subdomain = explode('.', $request->getHost())[0];

        $tenant = Tenant::where('subdomain', $subdomain)->firstOrFail();

        app()->instance('currentTenant', $tenant);

        return $next($request);
    }
}
\`\`\`

## 3. Protecting Against Cross-Tenant Access via Route Model Binding

Global scopes handle listing queries, but a direct \`GET /projects/42\` request needs an extra check — otherwise a user could guess another tenant's numeric ID and, depending on how the query is built, potentially access a record outside their own scope. Route model binding combined with the scope closes this gap automatically, since the underlying query already filters by tenant — a mismatched ID simply resolves to a 404 rather than someone else's record:

\`\`\`php
Route::get('/projects/{project}', [ProjectController::class, 'show']);
\`\`\`

Because \`Project::find()\` already carries the tenant scope, a project belonging to a different tenant will never match — Laravel throws a \`ModelNotFoundException\` (a clean 404) instead of exposing the other tenant's data.

## 4. Queued Jobs Need the Tenant Context Too

This is the most commonly missed detail in multi-tenant apps: a queued job runs in a separate process, so the \`currentTenant\` binding from the original request is gone by the time the worker picks it up. Jobs must carry the tenant ID explicitly and re-bind it themselves:

\`\`\`php
class GenerateReport implements ShouldQueue
{
    public function __construct(public int $tenantId, public int $reportId) {}

    public function handle(): void
    {
        app()->instance('currentTenant', Tenant::find($this->tenantId));

        // Now Report::find($this->reportId) is correctly scoped
    }
}
\`\`\`

Skipping this step is a classic multi-tenant bug: everything works in manual testing (synchronous requests always have the tenant bound), then queued jobs silently operate with no tenant context in production.

## 5. Per-Tenant Configuration and Branding

Beyond data isolation, most SaaS products need per-tenant settings — a custom logo, a subscription plan, feature flags. Keep these on the \`tenants\` table itself and expose them through a helper rather than scattering \`Tenant::find()\` calls everywhere:

\`\`\`php
function currentTenant(): ?Tenant
{
    return app('currentTenant');
}
\`\`\`

\`\`\`blade
<img src="{{ currentTenant()->logo_url }}" alt="{{ currentTenant()->name }}">

@if (currentTenant()->plan === 'enterprise')
    <x-advanced-analytics />
@endif
\`\`\`

## 6. When to Reach for Separate Databases Instead

Row-level tenancy scales well until a customer needs guarantees a shared database can't provide — strict regulatory data residency, or a single enormous tenant whose query load would degrade every other tenant sharing the same tables. At that point, packages like \`stancl/tenancy\` support a database-per-tenant model within the same Laravel app, at the cost of more complex migrations and connection management. Start with the simpler row-level approach; most products never actually need to graduate past it.

## Conclusion

Multi-tenancy done well is mostly invisible — customers never see the underlying \`tenant_id\` column, they just experience their data as fully separate from everyone else's. The two habits that keep it that way are enforcing the tenant scope at the model layer rather than in individual controllers, and remembering that queued jobs need the tenant context re-established explicitly, since they don't inherit it from the request that dispatched them.
      `,
      tags: ["Laravel", "SaaS", "Multi-tenancy", "Architecture"]
    }
  ];

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <SEO
          title="Article Not Found | Jalis Mahamud"
          description="This article could not be found. Browse the full blog archive instead."
          canonical={`/blog/${slug ?? ''}`}
          noindex
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/#blog" className="btn-outline-cyan">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const publishedIso = new Date(post.date).toISOString();

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Laravel: 'bg-red-500/20 text-red-400 border-red-500/30',
      React: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      Frontend: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      DevOps: 'bg-green-500/20 text-green-400 border-green-500/30',
      CSS: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      AI: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      Database: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      Security: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
      PHP: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    };
    return colors[category] || 'bg-accent/20 text-accent border-accent/30';
  };

  // Escape HTML special chars in the raw markdown *before* the markdown-to-HTML
  // replacements below, so code samples containing "<", ">" or "&" (e.g. Blade/
  // Vue templates, htmlspecialchars() examples, Apache <VirtualHost> blocks)
  // render as literal text instead of being parsed as real DOM elements.
  const escapeHtml = (str: string) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | Jalis Mahamud`}
        description={truncateForMeta(post.excerpt)}
        canonical={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: truncateForMeta(post.excerpt),
            image: post.image,
            datePublished: publishedIso,
            author: { '@type': 'Person', name: post.author, url: SITE_URL },
            publisher: { '@type': 'Person', name: 'Jalis Mahamud', url: SITE_URL },
            keywords: post.tags.join(', '),
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
              { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
            ],
          },
        ]}
      />
      <Navigation />

      {/* Hero Image */}
      <div className="pt-24">
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <img
            ref={(el) => el?.setAttribute('fetchpriority', 'high')}
            src={post.image}
            alt={post.title}
            decoding="async"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-32 z-10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <span className={`inline-block px-4 py-1 text-sm font-medium rounded-full border ${getCategoryColor(post.category)} mb-4`}>
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Content */}
          <article className="bg-card border border-border rounded-xl p-6 sm:p-8 md:p-12 mb-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              <div 
                className="text-foreground leading-relaxed space-y-4 blog-content"
                dangerouslySetInnerHTML={{ 
                  __html: escapeHtml(post.content)
                    .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">$1</h2>')
                    .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">$1</h3>')
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-secondary/50 border border-border rounded-lg p-4 overflow-x-auto my-4"><code class="text-accent text-sm">$2</code></pre>')
                    .replace(/`([^`]+)`/g, '<code class="bg-secondary/50 px-2 py-1 rounded text-accent text-sm">$1</code>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                    .replace(/- (.*)/g, '<li class="text-muted-foreground ml-4">$1</li>')
                    .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-4">')
                }}
              />
            </div>
          </article>

          {/* Tags */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5 text-accent" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-secondary border border-border rounded-full text-sm text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="text-center pb-12">
            <Link 
              to="/#blog" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
