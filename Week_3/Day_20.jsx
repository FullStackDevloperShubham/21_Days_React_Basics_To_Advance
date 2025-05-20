Day 20: Deploy on Vercel/Netlify + SEO

Step 1: Prepare Your Project for Deployment
Build your project (React, Next.js, etc.) using the command:


npm run build
Make sure your build folder (e.g., build or .next) is ready to deploy.

Step 2: Deploy on Vercel (Recommended for Next.js)

Create a Vercel account at vercel.com (if you don’t have one).

Connect your GitHub/GitLab/Bitbucket repo to Vercel.

Vercel automatically detects your framework and runs the build.

After deployment, you get a live URL like your-project.vercel.app.

Optional: Add a custom domain if you have one.


Step 3: Deploy on Netlify (Great for React or static sites)

Create a Netlify account at netlify.com.

Connect your Git repo or drag and drop your build folder.

Set build command (usually npm run build) and publish directory (usually build).

Click deploy, and your site is live.

Optional: Add a custom domain.

Step 4: SEO Basics to Implement Before Deployment
1. Meta Tags (in your HTML <head>)
Title:


<title>Your Project Title | Your Name</title>
Description:


<meta name="description" content="A brief description of your project or website.">
Keywords (optional, less impactful nowadays but okay):


<meta name="keywords" content="React, portfolio, developer, projects">
Viewport (for responsiveness):


<meta name="viewport" content="width=device-width, initial-scale=1">

2. Open Graph Tags (for social media previews)

<meta property="og:title" content="Your Project Title">
<meta property="og:description" content="A brief description of your project or website.">
<meta property="og:image" content="https://yourdomain.com/image.png">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website"></meta>

4. Add a robots.txt and sitemap.xml (optional but recommended for bigger sites)
robots.txt example:

makefile

User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml