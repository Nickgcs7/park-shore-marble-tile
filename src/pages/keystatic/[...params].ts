// This file is intentionally minimal.
// The @keystatic/astro integration (v5.0.0+) automatically handles all API routes.
// This file exists only as a placeholder - the integration takes precedence.

import type { APIRoute } from 'astro';

export const ALL: APIRoute = ({ redirect }) => {
  // Redirect to the integration-managed routes
  return redirect('/keystatic/', 307);
};
