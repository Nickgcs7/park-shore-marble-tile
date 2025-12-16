/**
 * GitHub OAuth Initiator for Decap CMS
 * This function redirects to GitHub for authorization
 */

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // Check if this is a callback with a code (coming back from GitHub)
  const code = url.searchParams.get('code');
  
  if (code) {
    // This is the callback from GitHub - exchange code for token
    try {
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: env.OAUTH_GITHUB_CLIENT_ID,
          client_secret: env.OAUTH_GITHUB_CLIENT_SECRET,
          code: code,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        throw new Error(tokenData.error_description || tokenData.error);
      }

      // Return HTML that posts the token back to the CMS
      const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Authorizing...</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: #f5f5f5;
    }
    .message {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .spinner {
      border: 3px solid #f3f3f3;
      border-top: 3px solid #1e3a5f;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="message">
    <div class="spinner"></div>
    <p>Authorizing with GitHub...</p>
  </div>
  <script>
    (function() {
      function receiveMessage(e) {
        console.log("Received message:", e.data);
        if (e.data === "authorizing:github") {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify(tokenData)}',
            e.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
      }
      window.addEventListener("message", receiveMessage, false);
      
      window.opener.postMessage(
        "authorizing:github",
        window.location.origin
      );
    })();
  </script>
</body>
</html>`;

      return new Response(html, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    } catch (error) {
      console.error('OAuth error:', error);
      return new Response(
        `<html><body><h1>Authentication Error</h1><p>${error.message}</p><p><a href="/admin">Back to CMS</a></p></body></html>`,
        { 
          status: 500,
          headers: { 'Content-Type': 'text/html' }
        }
      );
    }
  }
  
  // Initial request - redirect to GitHub for authorization
  const clientId = env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response('OAuth not configured. Please add OAUTH_GITHUB_CLIENT_ID to environment variables.', { 
      status: 500 
    });
  }
  
  // Build the GitHub authorization URL
  const redirectUri = `${url.origin}/api/auth`;
  const scope = 'repo,user'; // Permissions needed for CMS
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
  
  // Redirect to GitHub
  return Response.redirect(githubAuthUrl, 302);
}