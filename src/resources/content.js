import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Станчев",
  lastName: "SEO",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "SEO Специалист",
  avatar: "/images/avatar.jpg",
  email: "seo@stanchev.bg",
  location: "Europe/Sofia", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Български", "Английски"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Абонирай се за нашия бюлетин!</>,
  description: (
    <>
      ОЧАКВАЙТЕ СКОРО
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/stantchev/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/stantcheff/",
  },
  {
    name: "dev.to",
    icon: "devto",
    link: "https://dev.to/stanchev",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Начало",
  title: `${person.name}`,
  description: `SEO услуги, които не обещават чудеса… но ги постигат. Не сме магьосници, просто знаем алгоритъма по-добре от повечето.`,
  headline: <>SEO услуги, които строят мостове между дизайн и код</>,
  featured: {
    display: true,
    title: <>Скорошен проект: <strong className="ml-4">DarosBuild</strong></>,
    href: "/work/DarosBuild-moyat-proces-po-seo-optimizatsiya",
  },
  subline: (
    <>
      Аз съм Станчев – SEO оптимизатор, който превръща хаоса в структура,
      <br /> дизайнът в код и кофеина в работещи решения
    </>
  ),
};

const about = {
  path: "/about",
  label: "За мен",
  title: `За мен – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Накратко",
    description: (
      <>
        С една година опит в SEO услугите вярвам, че SEO не е магия, 
		а наука – с данни, логика и щипка интуиция.
		Персонализирам стратегии така, както добър шивач крои костюм – по мярка.
		За мен SEO не е спринт, а маратон с динамично трасе и неочаквани завои.
		Оптимизирам, адаптирам и се уча непрекъснато – защото Google не спи. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Професионален опит",
    experiences: [
      {
        company: "Webstation LTD.",
        timeframe: "2025 - настоящем",
        role: "Стажант - SEO",
        achievements: [
          <>
            За последния месец постигнах 250% ръст в органичния трафик на сайт за ремонти.
          </>,
          <>
            Междувременно написах статия, която дори Google AI хареса и добави в своите ревюта.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Образование",
    institutions: [
      {
        name: "Военна Академия",
        description: <>Профилиран модул по Киберсигурност към „Сигурност и отбрана“ – изучаване на принципи на информационна сигурност, киберрискове, защита от атаки и анализ на поведения.</>,
      },
	  {
        name: "SoftUni",
        description: <>В момента се обучавам в SoftUni, като надграждам знанията си в SEO. Вярвам, че непрекъснатото усъвършенстване е ключово за адаптация в динамичната дигитална среда.</>,
      },
    ],
  },
 technical: {
  display: true,
  title: "Технически умения",
  skills: [
    {
      title: "SEO инструменти",
      description: <>Опит в използването на разнообразни SEO инструменти за одит, анализ и оптимизация.</>,
      tools: [
		"Google Lighthouse",
		"Ahrefs",
        "Google Analytics",
        "SEMrush",
		"Google Search Console",
        "Yoast SEO",
      ],
    },
    {
      title: "Front-end разработка",
      description: <>Бързо прототипиране с Figma и разработка.</>,
      tools: ["Next.js 15", "Tailwind CSS", "React", "Netlify"],
    },
	{
      title: "Bonus Stack",
      description: <>Технологии и инструменти, които допълват основния ми стек.</>,
      tools: ["PS","LR","Chrome DevTools", "Netlify", "npm", ".htaccess",  ],
    },
  ],
},

};

const blog = {
  path: "/blog",
  label: "Блог",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Проекти",
  title: `SEO проекти – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Галерия",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery,};
