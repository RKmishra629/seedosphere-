# Seedosphere - Research & Innovation Website

A professional, research-oriented portfolio website for Seedosphere, an agricultural research startup focused on innovation and sustainable farming solutions.

## 🌱 About the Website

This website showcases Seedosphere's research work, team, publications, and innovative agricultural products. It features a modern, responsive design with a green agricultural theme.

## 📁 Website Structure

### Pages Included:

1. **index.html** - Home page featuring:
   - Hero section with company introduction
   - About section with mission and vision
   - Research areas showcase
   - Products preview (Seedling Bucket & Fruit-A-Guard)
   - Latest publications preview
   - Contact form

2. **team.html** - Team page featuring:
   - Leadership team profiles
   - Research team members
   - Technical & development team
   - Advisory board
   - Join team CTA

3. **patents.html** - Patents page featuring:
   - 6 detailed patent descriptions
   - Filter by status (All, Granted, Filed, Pending)
   - Patent metadata and key features
   - Technology licensing CTA

4. **research-papers.html** - Research papers page featuring:
   - 7 comprehensive research paper summaries
   - Filter by year (All, 2024, 2023, 2022)
   - Publication metadata and key findings
   - Collaboration CTA

5. **seedling-bucket.html** - Product page featuring:
   - Product hero with key statistics
   - Problem statement
   - Solution overview
   - Features and specifications
   - Benefits and research validation
   - Applications and use cases

6. **fruit-a-guard.html** - Product page featuring:
   - Product hero with key statistics
   - Problem statement
   - Solution overview
   - How it works (step-by-step)
   - Features and specifications
   - Benefits and applications
   - Customer testimonials

### Supporting Files:

- **styles.css** - Complete styling with:
  - Green agricultural color scheme
  - Responsive design for all devices
  - Smooth animations and transitions
  - Modern card-based layouts

- **script.js** - Interactive features:
  - Mobile navigation toggle
  - Smooth scrolling
  - Filter functionality for publications
  - Contact form handling
  - Scroll animations
  - Counter animations for statistics

## 🎨 Design Features

- **Color Scheme**: Green agricultural theme with primary color (#2d6a4f)
- **Typography**: Clean, professional Segoe UI font
- **Icons**: Font Awesome 6.4.0 icons throughout
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Animations**: Smooth transitions and scroll-triggered animations

## 🚀 Getting Started

### Viewing the Website:

1. Open `index.html` in your web browser
2. Navigate through pages using the top navigation menu

### Customization Guide:

#### 1. Update Company Information

**Contact Details** (in all pages' footer and contact section):
```html
<!-- Find and replace: -->
- info@seedosphere.com → your-email@domain.com
- +91 XXX XXX XXXX → your phone number
- City, State → your location
```

**Social Media Links** (in footer):
```html
<!-- Find the social-links section and update href values -->
<a href="https://linkedin.com/company/your-company"><i class="fab fa-linkedin"></i></a>
<a href="https://twitter.com/your-handle"><i class="fab fa-twitter"></i></a>
```

#### 2. Team Page Customization

Replace placeholder names and information:
```html
<!-- Find each team-member div and update: -->
<h3>Dr. [Name]</h3>  → <h3>Dr. John Doe</h3>
<p class="member-role">Position</p>
<p class="member-bio">Biography text...</p>
```

Add real team photos by replacing the placeholder divs:
```html
<!-- Replace: -->
<div class="member-image">
    <i class="fas fa-user"></i>
</div>
<!-- With: -->
<div class="member-image">
    <img src="images/team-member-1.jpg" alt="Dr. John Doe">
</div>
```

#### 3. Publications Customization

**Patents (patents.html)**:
- Update patent numbers, filing dates, and inventor names
- Modify abstracts and key features
- Add actual patent links

**Research Papers (research-papers.html)**:
- Update publication details (journal names, DOIs, dates)
- Modify author lists
- Update abstracts and findings
- Add PDF download links

#### 4. Products Customization

Update product statistics, features, and specifications:
```html
<!-- In product hero sections: -->
<h3>35%</h3>  → Update with your actual data
<p>Better Germination</p>
```

Add product images:
```html
<!-- Replace placeholder divs with actual images -->
<img src="images/seedling-bucket.jpg" alt="Seedling Bucket">
```

#### 5. Color Scheme Customization

Edit `styles.css` root variables:
```css
:root {
    --primary-color: #2d6a4f;      /* Main brand color */
    --primary-light: #40916c;       /* Lighter shade */
    --primary-dark: #1b4332;        /* Darker shade */
    --secondary-color: #52b788;     /* Secondary color */
    --accent-color: #74c69d;        /* Accent color */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Adding Images

To add actual images:

1. Create an `images` folder in the project directory
2. Add your images (team photos, product images, logos)
3. Replace placeholder divs with `<img>` tags:
```html
<img src="images/your-image.jpg" alt="Description">
```

Recommended image sizes:
- Team photos: 400x400px
- Product images: 800x600px
- Hero images: 1200x800px

## 📧 Contact Form Setup

The contact form currently uses JavaScript console logging. To make it functional:

1. **Option A - Use a form service:**
   - FormSpree: https://formspree.io
   - Netlify Forms: https://www.netlify.com/products/forms
   - GetForm: https://getform.io

2. **Option B - Create your own backend:**
   - Set up a server with Node.js/PHP
   - Configure email sending
   - Update form action in `script.js`

## 🚀 Deployment

### GitHub Pages (Free):
1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/seedosphere`

### Netlify (Free):
1. Sign up at netlify.com
2. Drag and drop your project folder
3. Get instant HTTPS URL

### Custom Domain:
- Purchase domain from GoDaddy, Namecheap, etc.
- Update DNS settings to point to your hosting
- Configure HTTPS certificate

## 📝 SEO Optimization

Add to each page's `<head>`:
```html
<meta name="description" content="Your page description">
<meta name="keywords" content="agriculture, research, seedosphere">
<meta property="og:title" content="Seedosphere">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-image-url.jpg">
```

## 🔧 Future Enhancements

Potential additions:
- Blog section for research updates
- News/events section
- Gallery/photo archive
- Video presentations
- Download center for brochures
- Online shop integration
- Multi-language support
- Dark mode toggle

## 📞 Support

For questions about customization:
1. Review the code comments
2. Check browser console for errors
3. Test responsiveness using browser DevTools

## 📄 License

This website template is free to use and modify for Seedosphere.

## ✅ Checklist Before Launch

- [ ] Update all [Name] placeholders with real names
- [ ] Replace XXX phone numbers with real numbers
- [ ] Update email addresses
- [ ] Add social media links
- [ ] Replace placeholder images
- [ ] Update patent and research paper details
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Check all internal links
- [ ] Add favicon
- [ ] Set up analytics (Google Analytics)
- [ ] Configure SEO meta tags
- [ ] Test page load speed
- [ ] Verify all content for accuracy

---

**Built for Seedosphere - Agricultural Research & Innovation**
*Version 1.0 - October 2025*
