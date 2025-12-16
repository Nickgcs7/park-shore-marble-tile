// DEPRECATED: This file should be DELETED
// It was part of the old Decap CMS OAuth flow which has been replaced by Keystatic.
// Keystatic uses GitHub's built-in authentication - no custom OAuth needed.
//
// DELETE THIS FILE via GitHub UI:
// 1. Click the trash icon above
// 2. Commit the deletion
//
// This empty export prevents build errors until the file is deleted.
export async function onRequestGet() {
  return new Response('This endpoint is deprecated. Use /keystatic instead.', { status: 410 });
}
