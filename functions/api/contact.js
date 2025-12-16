export async function onRequestPost(context) {
  try {
    const { request } = context;
    const body = await request.json();
    
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Configure your email recipient here
    // You can use services like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Mailgun
    // - Or send to a webhook/CRM
    
    const emailContent = `
New Contact Form Submission from Park Shore Marble & Tile

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
    `;

    // For now, we'll just log it and return success
    // In production, replace this with actual email sending logic
    console.log('Contact form submission:', emailContent);

    // Example with Resend (uncomment when you have an API key):
    /*
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'contact@yoursite.com',
        to: 'your-email@example.com',
        subject: `New Contact Form: ${name}`,
        text: emailContent
      })
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }
    */

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully' 
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}