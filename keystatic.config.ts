import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'Nickgcs7/park-shore-marble-tile',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'description' },
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
      format: { contentField: 'quote' },
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
});