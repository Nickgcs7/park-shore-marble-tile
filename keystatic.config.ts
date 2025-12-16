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
      path: 'src/data/pages/home',
      format: { data: 'yaml' },
      schema: {
        title: fields.text({ label: 'Page Title' }),
        heroHeading: fields.text({ label: 'Hero Heading' }),
        heroSubheading: fields.text({ label: 'Hero Subheading', multiline: true }),
        aboutHeading: fields.text({ label: 'About Section Heading' }),
        aboutText: fields.text({ label: 'About Text (Paragraph 1)', multiline: true }),
        aboutText2: fields.text({ label: 'About Text (Paragraph 2)', multiline: true }),
        serviceAreas: fields.text({ label: 'Service Areas List' }),
        ctaHeading: fields.text({ label: 'CTA Heading' }),
        ctaText: fields.text({ label: 'CTA Text', multiline: true }),
      },
    }),
    contactPage: singleton({
      label: 'Contact Page',
      path: 'src/data/pages/contact',
      format: { data: 'yaml' },
      schema: {
        title: fields.text({ label: 'Page Title' }),
        subtitle: fields.text({ label: 'Page Subtitle', multiline: true }),
        email: fields.text({ label: 'Email Address' }),
        phone: fields.text({ label: 'Phone Number' }),
        address: fields.text({ label: 'Address/Location' }),
        businessHours: fields.object({
          weekdays: fields.text({ label: 'Weekday Hours' }),
          saturday: fields.text({ label: 'Saturday Hours' }),
          sunday: fields.text({ label: 'Sunday Hours' }),
        }, { label: 'Business Hours' }),
        serviceAreas: fields.text({ label: 'Service Areas Description', multiline: true }),
      },
    }),
  },
});
