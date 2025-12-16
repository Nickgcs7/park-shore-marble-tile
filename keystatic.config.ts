import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'parkshore/parkshoremarbletile',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Project Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        image: fields.image({
          label: 'Featured Image',
          directory: 'public/images/uploads',
          publicPath: '/images/uploads/',
        }),
        date: fields.date({
          label: 'Date Completed',
          defaultValue: { kind: 'today' },
        }),
        featured: fields.checkbox({
          label: 'Featured on Homepage',
          defaultValue: false,
        }),
      },
    }),
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'name',
      path: 'src/content/testimonials/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Client Name' } }),
        quote: fields.text({
          label: 'Testimonial',
          multiline: true,
        }),
        projectType: fields.text({
          label: 'Project Type (optional)',
        }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
        }),
      },
    }),
  },
  singletons: {
    homePage: singleton({
      label: 'Home Page',
      path: 'src/content/pages/home',
      format: { data: 'yaml' },
      schema: {
        title: fields.text({ label: 'Page Title' }),
        heroHeading: fields.text({ label: 'Hero Heading' }),
        heroSubheading: fields.text({ label: 'Hero Subheading', multiline: true }),
        aboutSection: fields.text({ label: 'About Section', multiline: true }),
      },
    }),
    servicesPage: singleton({
      label: 'Services Page',
      path: 'src/content/pages/services',
      format: { data: 'yaml' },
      schema: {
        title: fields.text({ label: 'Page Title' }),
        body: fields.text({ label: 'Content', multiline: true }),
      },
    }),
    contactPage: singleton({
      label: 'Contact Page',
      path: 'src/content/pages/contact',
      format: { data: 'yaml' },
      schema: {
        title: fields.text({ label: 'Page Title' }),
        body: fields.text({ label: 'Contact Info', multiline: true }),
        email: fields.text({ label: 'Email Address' }),
        phone: fields.text({ label: 'Phone Number' }),
      },
    }),
  },
});
