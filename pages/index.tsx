import Head from 'next/head';
import { useEffect, useRef, useState, ReactNode, useCallback } from 'react';
import styles from '@/pages/index.module.css';

/* ---------------------------------- data ---------------------------------- */

const CONTACT_EMAIL = 'fawadiqbal274@gmail.com';

// Real, dark-styled street map centred on Islamabad (F-sectors / Blue Area).
const MAP_EMBED =
  'https://www.openstreetmap.org/export/embed.html?bbox=72.86%2C33.60%2C73.22%2C33.79&layer=mapnik';

const projects = [
  {
    name: 'SellAnyProperty',
    image: '/sellanyproperty.png',
    url: 'https://github.com/fawad526',
    metricLabel: 'Production · AWS',
    stat: 'Live',
    description:
      'Multi-tenant real-estate platform with tenant-based data isolation, dynamic content rendering and end-to-end deployment on AWS for high availability.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'AWS'],
    accent: 'cyan',
  },
  {
    name: 'NCRP',
    image: '/ncrp.png',
    url: 'https://github.com/fawad526',
    metricLabel: 'Government-tier',
    stat: 'RBAC',
    description:
      'Platform for the National Council of Radiation & Protection with role-based access control, user management and admin dashboards for compliance & oversight.',
    stack: ['React', 'Node.js', 'MongoDB', 'RBAC'],
    accent: 'violet',
  },
  {
    name: 'CICIL',
    image: '/cicil.png',
    url: 'https://github.com/fawad526',
    metricLabel: '3D analytics',
    stat: 'Three.js',
    description:
      'Empowering people with disabilities through advanced analytics dashboards, 3D data visualization and accessibility-first interfaces for informed healthcare decisions.',
    stack: ['React', 'Three.js', 'Styled-Components'],
    accent: 'pink',
  },
  {
    name: 'Kareer Konnect',
    image: '/kareerkonnect.png',
    url: 'https://app.34-204-229-91.sslip.io/',
    metricLabel: 'Official launch · AWS',
    stat: 'Live',
    description:
      'Revamped and officially launched MERN-stack platform connecting researchers and students with faculty, employers and jobseekers — advanced filtering, tailored matchmaking, deployed on AWS.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'AWS'],
    accent: 'cyan',
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Digistromer',
    location: 'UAE · Remote',
    period: 'Mar 2024 — Present',
    current: true,
    summary:
      'Spearheading a multi-tenant real-estate platform end-to-end — Next.js + Node.js + PostgreSQL on AWS (EC2, RDS, S3) with CI/CD for production reliability.',
  },
  {
    title: 'Associate Full Stack Developer',
    company: 'Liam Crest',
    location: 'USA · Remote',
    period: 'Mar 2023 — Mar 2024',
    current: false,
    summary:
      'Built medical applications with component-based architectures, partnering with designers and leadership to optimise product flows and interfaces.',
  },
  {
    title: 'MERN Stack Developer — Intern',
    company: 'Texinity Technologies',
    location: 'Islamabad, PK',
    period: 'Aug — Sep 2022',
    current: false,
    summary:
      'Built backend services with Node.js & Express and RESTful APIs on MongoDB, and shipped UI in React with Material UI and Bootstrap 5.',
  },
  {
    title: 'MERN Stack Developer — Intern',
    company: 'Daxno Technologies',
    location: 'Islamabad, PK',
    period: 'Jul — Aug 2022',
    current: false,
    summary:
      'Maintained backend functionality with Node.js, Express and MongoDB and developed responsive React UI screens with modern CSS frameworks.',
  },
];

const stack = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Prisma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

type Block = { type: 'p' | 'h'; text: string };

interface Post {
  title: string;
  blurb: string;
  date: string;
  read: string;
  gradient: string;
  content: Block[];
}

const posts: Post[] = [
  {
    title: 'Architecting a multi-tenant SaaS on AWS',
    blurb: 'How I designed tenant isolation, shared infrastructure and zero-downtime deploys for a real-estate platform.',
    date: 'Jul 2025',
    read: '12 min read',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 55%, #a855f7 100%)',
    content: [
      { type: 'p', text: 'When I started building the real-estate platform at Digistromer, the single hardest decision was not which framework to use or how to style a listing card. It was architectural: how do you serve dozens of independent clients — each with their own agents, branding, listings and data — from one codebase, without their information ever bleeding into each other? This is the multi-tenancy problem, and getting it wrong is one of the most expensive mistakes to unwind once you have real customers in production.' },
      { type: 'p', text: 'In this post I want to walk through the decisions I made, why I made them, and the trade-offs I would weigh differently if I were starting again today.' },
      { type: 'h', text: 'One codebase, many tenants' },
      { type: 'p', text: 'The platform runs on Next.js for the frontend and API layer, Node.js services for the heavier background work, and PostgreSQL as the single source of truth. The core idea is simple to state and surprisingly hard to enforce: every request must be resolved to a tenant as early as possible, and that tenant context must then be threaded through every single query for the lifetime of the request.' },
      { type: 'p', text: 'Concretely, when a request arrives I resolve the tenant from the subdomain (client-a.example.com) or from a signed token on API calls. That tenant identifier is attached to the request context immediately, before any business logic runs. From that point on, no query is allowed to touch the database without a tenant filter — a client can only ever see their own listings, users and media, because the data access layer refuses to run otherwise.' },
      { type: 'p', text: 'The reason I put so much weight on this is that isolation-by-convention always fails eventually. Someone writes a quick query in a hurry, forgets the filter, and now tenant A can see tenant B’s data. The only durable fix is to make the safe path the default path and the unsafe path impossible.' },
      { type: 'h', text: 'Infrastructure on AWS' },
      { type: 'p', text: 'I provisioned the stack on AWS. EC2 runs the application tier, RDS hosts PostgreSQL so I get managed backups, automated failover and point-in-time recovery without babysitting a database server, and S3 stores all property media and documents. Keeping media in S3 behind signed URLs was a deliberate choice: it means the application servers stay completely stateless, which is what lets me scale them horizontally by simply adding more instances behind a load balancer.' },
      { type: 'p', text: 'Statelessness is the quiet hero of scalable architecture. The moment a server holds something important in local memory or on local disk, you can no longer freely add, remove or replace servers — and every scaling and deployment problem gets harder. Pushing state out to RDS and S3 keeps the app tier disposable.' },
      { type: 'h', text: 'Deployment without downtime' },
      { type: 'p', text: 'CI/CD pipelines build, test and deploy on every merge to the main branch, so shipping a feature is a push, not a ceremony. New versions roll out gradually behind health checks: an instance only starts receiving traffic once it reports healthy, and the old version keeps serving until the new one is ready. If a deploy goes wrong, rolling back is another automated step rather than a panicked manual scramble.' },
      { type: 'p', text: 'For a small team — often just me on the platform side — this automation is the difference between spending an afternoon on a release and spending thirty seconds. Your pipeline is effectively an extra teammate who never gets tired and never forgets a step.' },
      { type: 'h', text: 'What I would tell my past self' },
      { type: 'p', text: 'Three things. First, decide your tenant isolation model before you write the first query — retrofitting it later means rewriting your entire data layer. Second, make tenant context impossible to forget rather than merely documented; a convention in a README will not save you at 2am. Third, invest in observability from day one. When something breaks across tenants, you want to know which tenant, which request and which query in seconds, not hours — and you cannot add that visibility retroactively to an incident that already happened.' },
      { type: 'p', text: 'Multi-tenancy is not a feature you bolt on. It is a shape your entire system takes. Get the shape right early, and everything after it gets easier.' },
    ],
  },
  {
    title: 'Tenant isolation patterns in PostgreSQL + Prisma',
    blurb: 'Row-level vs. schema-per-tenant vs. database-per-tenant — the trade-offs I weighed in production.',
    date: 'May 2025',
    read: '9 min read',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%)',
    content: [
      { type: 'p', text: 'Ask five engineers how to isolate tenants in a relational database and you will get five confident, contradictory answers. The truth is there is no single correct way — only a set of trade-offs between how strong the isolation is, how much operational overhead you take on, and how far the approach scales. This post breaks down the three patterns I actually considered for a production PostgreSQL database accessed through Prisma, and where each one earns its place.' },
      { type: 'h', text: 'Pattern 1 — Shared schema with a tenant_id column' },
      { type: 'p', text: 'This is the simplest model and, for most SaaS products, the right starting point. Every table carries a tenant_id column, and every query filters on it. All tenants share the same tables in the same database, distinguished only by that column.' },
      { type: 'p', text: 'The upside is real: it is cheap to run, trivial to add a new tenant (just insert rows), and it scales comfortably to thousands of tenants on a single database. The downside is equally real: your entire isolation guarantee now rests on every query remembering to filter by tenant. One forgotten WHERE clause and tenant A is looking at tenant B’s data — a bug that is both catastrophic and easy to introduce.' },
      { type: 'p', text: 'My answer to that risk is to never rely on developers remembering. I lean on a Prisma client extension that automatically injects the tenant filter into every query based on the current request context. The safe filter is applied for you; you would have to go out of your way to bypass it. Optionally, PostgreSQL row-level security can enforce the same rule at the database itself, so even a raw query cannot escape it.' },
      { type: 'h', text: 'Pattern 2 — Schema per tenant' },
      { type: 'p', text: 'Here each tenant gets their own PostgreSQL schema (a namespace of tables) inside a shared database. Isolation is noticeably stronger — tenant data lives in physically separate tables — and per-tenant operations like exporting or backing up a single customer become straightforward.' },
      { type: 'p', text: 'The cost shows up in operations. Every migration now has to run across every schema, so a simple column change becomes a loop over hundreds of namespaces. Connection and search-path management gets more involved, and tooling that assumes a single schema needs adapting. This pattern fits a few hundred larger, higher-value tenants far better than it fits tens of thousands of tiny ones.' },
      { type: 'h', text: 'Pattern 3 — Database per tenant' },
      { type: 'p', text: 'The strongest isolation and the heaviest operationally: a completely separate database for each tenant. There is no shared surface where data can leak, and you can even run different tenants on different hardware. But you now operate a fleet of databases — migrations, backups, monitoring and cost all multiply per tenant.' },
      { type: 'p', text: 'I reserve this for enterprise clients with hard compliance requirements who are explicitly paying for that guarantee. For everyone else it is over-engineering that slows you down.' },
      { type: 'h', text: 'What I actually shipped' },
      { type: 'p', text: 'For the real-estate platform I started with the shared schema plus enforced, automatic tenant filtering — the cheapest model to run, hardened so the isolation cannot be forgotten. Crucially, I kept a clear migration path to promote a large or sensitive client up to their own schema when the business justifies it.' },
      { type: 'p', text: 'That is the real lesson: start with the simplest model that can be made safe, and design the escape hatch before you need it. You rarely regret being able to move up a level; you almost always regret having built the heavy version before you had the customers to warrant it.' },
    ],
  },
  {
    title: 'Shipping a product end-to-end as a solo full-stack dev',
    blurb: 'From frontend to CI/CD — the workflow that lets one engineer own the whole stack without dropping quality.',
    date: 'Mar 2025',
    read: '7 min read',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 55%, #3b82f6 100%)',
    content: [
      { type: 'p', text: 'Owning a product from the database schema all the way to the pixels on screen sounds overwhelming, and if you try to do it the way a large team does, it is. But a solo full-stack developer is not a small team — it is a different way of working entirely. With the right guardrails, one engineer can move remarkably fast without letting quality slide. This is the workflow that works for me, refined across the platforms I have shipped.' },
      { type: 'h', text: 'Build vertical slices, not horizontal layers' },
      { type: 'p', text: 'The most common trap I see is building layer by layer: finish the whole database schema, then the whole API, then the whole UI. It feels organized, but it means you have nothing you can actually use until the very end, and you discover your wrong assumptions at the worst possible time.' },
      { type: 'p', text: 'Instead I build thin vertical slices. Pick one capability — say, “an agent can publish a listing” — and build just the schema, API and UI needed for that one thing, end to end. It is demoable the same day. That tight loop of build-something-real, look-at-it, adjust is what keeps both the product and my motivation on track.' },
      { type: 'h', text: 'Let the tooling carry the load' },
      { type: 'p', text: 'When you are the entire team, you have no colleague to catch your mistakes in review — so your tools have to. TypeScript from the database layer to the frontend eliminates whole categories of bugs before the code ever runs; if the shape of the data changes, the compiler tells me every place that now needs updating. Prisma keeps the database access type-safe and its migrations version-controlled. Continuous integration runs the build and the tests on every push, so a regression surfaces in a red check within minutes instead of in a customer’s bug report a week later.' },
      { type: 'p', text: 'None of this is glamorous, but it is exactly the safety net that lets one person confidently touch every part of the stack.' },
      { type: 'h', text: 'Automate the boring parts ruthlessly' },
      { type: 'p', text: 'Every manual step in your release process is a step you will eventually get wrong when you are tired. So I automate them out of existence: deploys, database migrations and preview environments all happen without me typing a command. The less ceremony there is between “it works on my machine” and “it is live for customers”, the more of my limited time goes into actually building things people use.' },
      { type: 'h', text: 'Know what to skip' },
      { type: 'p', text: 'The final skill of solo development is not doing more — it is knowing what not to do. I do not build abstractions for problems I do not have yet. I do not add configuration options nobody asked for. I ship the direct solution, keep the code readable enough that future-me can change it, and revisit only when a real requirement forces the issue.' },
      { type: 'p', text: 'Owning the whole stack is not about being a hero who does everything manually. It is about ruthlessly leaning on types, automation and small feedback loops so that one person can do the work of a team — and still sleep at night.' },
    ],
  },
];

const socials = [
  { label: '@fawad526', href: 'https://github.com/fawad526', icon: 'github' },
  { label: 'in/fawad526', href: 'https://www.linkedin.com/in/fawad526', icon: 'linkedin' },
  { label: '@FawadBravo526', href: 'https://x.com/FawadBravo526', icon: 'x' },
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}`, icon: 'mail' },
];

/* ------------------------------- reveal hook ------------------------------ */

function Reveal({ children, delay = 0, as = 'div', className = '', id }: {
  children: ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      id={id}
      className={`${styles.reveal} ${shown ? styles.revealed : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------- clock chip ------------------------------- */

function Clock() {
  const [time, setTime] = useState('');
  const [night, setNight] = useState(true);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const str = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      const hour = Number(
        now.toLocaleString('en-US', { timeZone: 'Asia/Karachi', hour: 'numeric', hour12: false })
      );
      setNight(hour < 6 || hour >= 18);
      setTime(str);
    };
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={styles['clock']}>
      <span className={styles['clock-icon']} aria-hidden="true">
        {night ? (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </span>
      {time || '—'} PKT
    </span>
  );
}

/* --------------------------------- icons ---------------------------------- */

function SocialIcon({ name }: { name: string }) {
  const p: Record<string, ReactNode> = {
    github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    x: <path d="M4 4l16 16M20 4L4 20" />,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {p[name]}
    </svg>
  );
}

/* ------------------------------ contact modal ----------------------------- */

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => textRef.current?.focus(), 120);
    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  const mailtoFallback = () => {
    const body = encodeURIComponent(`${message}\n\n— ${email || ''}`);
    const subject = encodeURIComponent('Hello from your portfolio');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const send = async () => {
    if (!message.trim() || status === 'sending') return;
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, email }),
      });
      if (res.ok) {
        setStatus('sent');
        setMessage('');
        setEmail('');
        return;
      }
      if (res.status === 501) {
        // Server email not configured — open the visitor's mail client instead.
        mailtoFallback();
        setStatus('sent');
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Something went wrong.');
      setStatus('error');
    } catch {
      mailtoFallback();
      setStatus('sent');
    }
  };

  if (!open) return null;

  return (
    <div className={styles['modal-overlay']} onMouseDown={onClose}>
      <div
        className={styles['modal']}
        role="dialog"
        aria-modal="true"
        aria-label="Contact Fawad"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className={styles['modal-close']} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className={styles['modal-head']}>
          <img src="/full_pic.jpg" alt="Fawad Iqbal" className={styles['modal-avatar']} />
          <div className={styles['modal-headtext']}>
            <strong>Fawad Iqbal</strong>
            <p>
              Hey, thanks for visiting my portfolio! If you have any questions or just want to say
              hi, feel free to send me a message.
            </p>
          </div>
        </div>

        {status === 'sent' ? (
          <div className={styles['modal-sent']}>
            <span className={styles['sent-check']} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <p>Thanks! Your message is on its way to my inbox.</p>
            <button className={styles['modal-newmsg']} onClick={() => setStatus('idle')}>
              Send another
            </button>
          </div>
        ) : (
          <div className={styles['modal-form']}>
            <textarea
              ref={textRef}
              className={styles['modal-textarea']}
              placeholder="Write a message…"
              maxLength={1000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input
              type="email"
              className={styles['modal-email']}
              placeholder="optional@email.com (if you'd like a response)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={styles['modal-footer']}>
              <span className={styles['modal-count']}>{message.length} / 1,000</span>
              {status === 'error' && <span className={styles['modal-error']}>{error}</span>}
              <button
                className={styles['modal-send']}
                onClick={send}
                disabled={!message.trim() || status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------- post modal ------------------------------- */

function PostModal({ post, onClose }: { post: Post | null; onClose: () => void }) {
  useEffect(() => {
    if (!post) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div className={styles['modal-overlay']} onMouseDown={onClose}>
      <article
        className={`${styles.modal} ${styles['post-modal']}`}
        role="dialog"
        aria-modal="true"
        aria-label={post.title}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className={styles['modal-close']} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <header className={styles['pm-cover']} style={{ backgroundImage: post.gradient }}>
          <div className={styles['pm-meta']}>
            <span>{post.date}</span>
            <span className={styles['post-dot']} />
            <span>{post.read}</span>
          </div>
          <h2 className={styles['pm-title']}>{post.title}</h2>
        </header>

        <div className={styles['pm-scroll']}>
          {post.content.map((block, i) =>
            block.type === 'h' ? (
              <h3 key={i} className={styles['pm-h']}>{block.text}</h3>
            ) : (
              <p key={i} className={styles['pm-p']}>{block.text}</p>
            )
          )}
          <div className={styles['pm-end']}>
            <span>Thanks for reading — Fawad</span>
          </div>
        </div>
      </article>
    </div>
  );
}

/* -------------------------------- the page -------------------------------- */

export default function Home() {
  const [active, setActive] = useState('top');
  const [contactOpen, setContactOpen] = useState(false);
  const [openPost, setOpenPost] = useState<Post | null>(null);

  useEffect(() => {
    const ids = ['top', 'blog', 'connect'];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const dockItems = [
    { id: 'top', label: 'Profile', onClick: () => scrollTo('top'), icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></> },
    { id: 'blog', label: 'Blog', onClick: () => scrollTo('blog'), icon: <><path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z" /><path d="M8 8h8M8 12h8M8 16h5" /></> },
    { id: 'connect', label: 'Contact', onClick: () => setContactOpen(true), icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></> },
  ];

  return (
    <div className={styles.page}>
      <Head>
        <title>Fawad Iqbal — Full Stack Developer</title>
        <meta name="description" content="Fawad Iqbal — Full Stack Developer building scalable, multi-tenant products for the web, based in Islamabad, Pakistan." />
        <link rel="icon" href="/fullpic2.png" />
      </Head>

      <div className={styles.aurora} aria-hidden="true" />

      <main className={styles.shell} id="top">
        {/* ------------------------------- hero ------------------------------- */}
        <section className={styles.hero}>
          <div className={styles['hero-map']} aria-hidden="true">
            <div className={styles['map-grid']} />
            <iframe
              className={styles['map-frame']}
              src={MAP_EMBED}
              title="Islamabad"
              loading="lazy"
              tabIndex={-1}
              scrolling="no"
            />
            <div className={styles['map-pin']}>
              <span className={styles['pin-dot']} />
              <span className={styles['pin-ring']} />
              <span className={styles['pin-label']}>Islamabad</span>
            </div>
          </div>

          <div className={styles['hero-top']}>
            <Clock />
            <span className={styles['hero-loc']}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Islamabad, Pakistan
            </span>
          </div>

          <div className={styles['hero-avatar']}>
            <img src="/full_pic.jpg" alt="Fawad Iqbal" />
            <span className={styles['avatar-glow']} aria-hidden="true" />
          </div>

          <div className={styles['hero-intro']}>
            <span className={styles.hello}>Hello,</span>
            <h1 className={styles['hero-name']}>I&apos;m Fawad.</h1>
          </div>
        </section>

        <Reveal as="p" className={styles.lead}>
          I&apos;m a <strong>Full Stack Developer</strong> based in Islamabad, Pakistan, focused on
          building production-grade, scalable web applications end-to-end. I currently lead
          real-estate engineering at <a href="#work">Digistromer (UAE)</a>.
        </Reveal>

        {/* ------------------------------ about ------------------------------- */}
        <Reveal as="section" className={styles.block}>
          <h2 className={styles.heading}>About</h2>
          <p className={styles.body}>
            I architect and ship multi-tenant SaaS platforms with{' '}
            <span className={styles.hl}>Next.js</span>, <span className={styles.hl}>Node.js</span>{' '}
            and <span className={styles.hl}>PostgreSQL</span>, deployed on{' '}
            <span className={styles.hl}>AWS</span> (EC2 · RDS · S3) with hands-on ownership of the
            entire stack. Before Digistromer I worked on medical applications at Liam Crest (USA)
            and completed back-to-back MERN internships. I hold a{' '}
            <span className={styles.hl}>BS in Software Engineering</span> from Air University
            Islamabad.
          </p>
          <div className={styles['stat-row']}>
            {[
              ['3+', 'Years exp.'],
              ['10+', 'Projects'],
              ['3', 'Countries'],
              ['4', 'Companies'],
            ].map(([n, l]) => (
              <div key={l} className={styles.stat}>
                <span className={styles['stat-num']}>{n}</span>
                <span className={styles['stat-label']}>{l}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* --------------------------- featured projects ---------------------- */}
        <Reveal as="section" className={styles.block}>
          <h2 className={styles.heading}>Featured projects</h2>
          <p className={styles.body}>
            A selection of work shipped end-to-end — from multi-tenant SaaS to government-tier
            compliance systems.
          </p>
          <div className={styles['project-grid']}>
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.project} ${styles[`accent-${p.accent}`]}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className={styles['project-top']}>
                  <span className={styles['project-metric']}>{p.metricLabel}</span>
                  <span className={styles['project-stat']}>{p.stat}</span>
                </div>
                <div className={styles['project-media']}>
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className={styles['project-info']}>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className={styles['project-tags']}>
                    {p.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <a
            href="https://github.com/fawad526"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['more-link']}
          >
            See all projects on GitHub →
          </a>
        </Reveal>

        {/* ------------------------------- work ------------------------------- */}
        <Reveal as="section" className={styles.block} id="work">
          <h2 className={styles.heading}>Work</h2>
          <div className={styles.timeline}>
            {experiences.map((e) => (
              <div key={e.company + e.period} className={styles['tl-item']}>
                <span className={`${styles['tl-dot']} ${e.current ? styles['tl-dot-live'] : ''}`} />
                <div className={styles['tl-head']}>
                  <span className={styles['tl-role']}>
                    {e.title} <span className={styles['tl-at']}>@</span>{' '}
                    <span className={styles['tl-company']}>{e.company}</span>
                  </span>
                  <span className={styles['tl-period']}>{e.period}</span>
                </div>
                <span className={styles['tl-loc']}>{e.location}</span>
                <p className={styles['tl-summary']}>{e.summary}</p>
              </div>
            ))}
          </div>
          <div className={styles.edu}>
            <span className={styles['edu-icon']} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
            <div>
              <strong>BS Software Engineering</strong> — Air University Islamabad
              <span className={styles['edu-period']}>2019 — 2023</span>
            </div>
          </div>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles['more-link']}>
            Read my CV →
          </a>
        </Reveal>

        {/* ------------------------------ stack ------------------------------- */}
        <Reveal as="section" className={styles.block}>
          <h2 className={styles.heading}>Stack</h2>
          <p className={styles.body}>
            The tools I reach for across the full stack — frontend, backend, data and cloud.
          </p>
          <div className={styles['stack-row']}>
            {stack.map((s, i) => (
              <span key={s.name} className={styles['stack-chip']} title={s.name} style={{ transitionDelay: `${i * 40}ms` }}>
                <img src={s.src} alt={s.name} loading="lazy" />
              </span>
            ))}
          </div>
        </Reveal>

        {/* ------------------------------- blog ------------------------------- */}
        <Reveal as="section" className={styles.block} id="blog">
          <h2 className={styles.heading}>Blog</h2>
          <p className={styles.body}>
            Notes on building scalable web architectures, multi-tenant SaaS and the day-to-day of
            full-stack engineering.
          </p>
          <div className={styles['post-list']}>
            {posts.map((post) => (
              <button
                key={post.title}
                type="button"
                onClick={() => setOpenPost(post)}
                className={styles.post}
              >
                <div className={styles['post-cover']} style={{ backgroundImage: post.gradient }}>
                  <span className={styles['post-sheen']} aria-hidden="true" />
                </div>
                <div className={styles['post-body']}>
                  <div className={styles['post-meta']}>
                    <span>{post.date}</span>
                    <span className={styles['post-dot']} />
                    <span>{post.read}</span>
                  </div>
                  <h3 className={styles['post-title']}>{post.title}</h3>
                  <p className={styles['post-blurb']}>{post.blurb}</p>
                  <span className={styles['post-read-cue']}>
                    Read article
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Reveal>

        {/* ----------------------------- connect ------------------------------ */}
        <Reveal as="section" className={styles.block} id="connect">
          <h2 className={styles.heading}>Let&apos;s connect</h2>
          <p className={styles.body}>
            My inbox is always open — whether it&apos;s a project, a collaboration or just a chat
            about scalable web architectures. Reach me on any of these.
          </p>
          <div className={styles['connect-row']}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles['connect-pill']}>
                <SocialIcon name={s.icon} />
                {s.label}
              </a>
            ))}
          </div>
          <button className={styles['say-hello']} onClick={() => setContactOpen(true)}>
            Say hello
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </Reveal>

        <footer className={styles.credit}>
          Designed &amp; built by <span>Fawad Iqbal</span> · © {new Date().getFullYear()}
        </footer>
      </main>

      {/* -------------------------------- dock -------------------------------- */}
      <nav className={styles.dock} aria-label="Primary">
        {dockItems.map((d) => (
          <button
            key={d.id}
            onClick={d.onClick}
            className={`${styles['dock-btn']} ${active === d.id && !contactOpen ? styles['dock-active'] : ''} ${d.id === 'connect' && contactOpen ? styles['dock-active'] : ''}`}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {d.icon}
            </svg>
            <span>{d.label}</span>
          </button>
        ))}
      </nav>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <PostModal post={openPost} onClose={() => setOpenPost(null)} />
    </div>
  );
}
