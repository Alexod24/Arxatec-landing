import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/#index'),
      
    },
    {
      text: 'Sobre Nosotros',
      links: [
        {
          text: 'Historia',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Experiencia',
          href: getPermalink('/homes/personal') + '#resume',
        },
        
        {
          text: 'Terminos',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacidad y Politica',
          href: getPermalink('/privacy'),
        },
       
      ],
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Características',
          href: getPermalink('/#features'),
        },
        {
          text: 'Soluciones',
          href: getPermalink('/#soluciones'),
        },
        {
          text: 'Servicios',
          href: getPermalink('/#servicios'),
        },
        
        
      ],
    },
    {
      text: 'Primeros pasos',
      links: [
        {
          text: 'Como iniciar',
          href: getPermalink('/#pasos'),
        },
        
      ],
    },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },

    {
      text: 'Otros',
      href: '#',
      links: [
        {
          text: 'Planes',
          href: getPermalink('/#precios'),
        },
        {
          text: 'Preguntas frecuentes',
          href: getPermalink('/#precios'),
        },
        {
          text: 'FAQ',
          href: getPermalink('/#faq'),
        },
        {
          text: 'Testimonios',
          href: getPermalink('/#testimonios'),
        },
      ]
    },
  ],
  actions: [{ text: 'Iniciar Sesión', href: 'https://arxatec.net/auth/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Consultas Legales', href: '#' },
        { text: 'Asesoría Personalizada', href: '#' },
        { text: 'Testimonios', href: '#' },
        { text: 'Precios', href: '#' },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { text: 'API para Desarrolladores', href: '#' },
        { text: 'Documentación', href: '#' },
        { text: 'Guías Legales', href: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Centro de Ayuda', href: '#' },
        { text: 'Foro Comunitario', href: '#' },
        { text: 'Servicios Profesionales', href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Sobre Arxatec', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Carreras', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: '#' },
    { text: 'Política de Privacidad', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://arxatec.com/favicon/favicon-32x32.png" alt="Arxatec logo" loading="lazy"></img>
    Hecho por <a class="text-blue-600 underline dark:text-muted" href="#"> ArxaTEC</a> · Todos los derechos reservados.
  `,
};

