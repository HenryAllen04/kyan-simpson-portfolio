# Kyan Simpson - Personal Portfolio

A clean, minimal portfolio website built with Next.js. Designed to be easily customizable using an AI assistant like Cursor or Claude.

## 🚀 Quick Start

### Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploying to the Web

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Click "Deploy" - that's it!

---

## 📝 How to Edit Your Website (For Non-Technical Users)

This website is designed to be edited easily with an AI assistant. Simply tell your AI what you want to change in plain English!

### File Locations

| What you want to change | File to edit |
|------------------------|--------------|
| Main page content | `src/app/page.tsx` |
| Site title & SEO | `src/app/layout.tsx` |
| Colors & styling | `src/app/globals.css` |
| Profile photo | Add to `/public` folder |

### Example Prompts for Your AI Assistant

Just copy and paste these prompts (modified with your info) to your AI:

#### Adding a New Experience
```
Add a new experience to my portfolio:
- Company: [Company Name]
- Role: [Your Role]
- Description: [Brief description]
- Website: [URL if any]
```

#### Updating Your Bio
```
Update my bio to say: [Your new bio text]
```

#### Adding a New Education Entry
```
Add a new education entry:
- School: [School Name]
- Degree: [Your Degree]
- Years: [Start - End]
- Description: [Brief description]
```

#### Changing Your Profile Photo
```
Change my profile photo to use the new image I added at /public/[filename].jpg
```

#### Adding a New Activity/Interest
```
Add a new activity to my portfolio:
- Title: [Activity Name]
- Description: [Brief description]
```

#### Updating Your Contact Info
```
Update my email to [newemail@example.com]
Update my LinkedIn URL to [new LinkedIn URL]
```

#### Changing Site Colors
```
Change the website accent color to [color name or hex code]
```

---

## 🎨 Customization Guide

### Changing Your Profile Photo

1. Add your new photo to the `/public` folder
2. Tell your AI: "Change my profile photo to use `/your-photo.jpg`"

**Recommended photo specs:**
- Square aspect ratio (1:1)
- At least 200x200 pixels
- JPG or PNG format

### Understanding the Page Structure

The main page (`src/app/page.tsx`) has these sections:

1. **Profile Photo & Name** - Your photo and name at the top
2. **Bio** - Your personal introduction (2 paragraphs)
3. **Experience** - Your jobs and internships
4. **Education** - Schools and degrees
5. **Activities** - Clubs, sports, interests
6. **Now** - What you're currently doing (update regularly!)
7. **Connect** - Contact information

### Adding a New Page

If you want to add a new page (like a projects page), tell your AI:
```
Create a new page at /projects that lists my projects with the same styling as the homepage
```

---

## 🛠 Technical Details

### Tech Stack
- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Custom CSS (no Tailwind on main components)
- **Fonts:** Inter, Sohne, Newsreader
- **Analytics:** Vercel Analytics (optional)

### Project Structure
```
portfolio-site/
├── public/               # Static files (images, fonts)
│   ├── kyan.png         # Your profile photo
│   ├── kslogo.svg       # Site favicon
│   └── fonts/           # Custom fonts
├── src/
│   ├── app/
│   │   ├── page.tsx     # Homepage content
│   │   ├── layout.tsx   # Site-wide settings
│   │   └── globals.css  # Styling
│   └── components/      # Reusable components
├── package.json         # Dependencies
└── README.md           # This file
```

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Check for code errors

---

## 💡 Tips

1. **Keep it updated** - Update your "Now" section regularly to show you're active
2. **Quality over quantity** - Better to have 3-4 strong experiences than 10 weak ones
3. **Be specific** - Quantify achievements where possible
4. **Test on mobile** - Always check how changes look on your phone

---

## 🆘 Need Help?

If something breaks:
1. Tell your AI assistant: "Something is broken, here's the error: [paste error]"
2. They can usually fix it immediately!

If you want to start fresh:
1. Tell your AI: "Reset the homepage to a clean template"

---

## 📄 License

This is your personal portfolio - do whatever you want with it!

---

*Built with ❤️ as a template for easy customization*
