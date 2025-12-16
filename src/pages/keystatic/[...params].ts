import { makeHandler } from '@keystatic/astro/api';

export const ALL = makeHandler({
  config: import('../../../keystatic.config'),
});