# Ten MS Job Assessment - Course Landing Page

A modern, responsive course landing page built with Next.js 15, Tailwind CSS 4, and TypeScript. This project showcases a comprehensive IELTS course with dynamic content, interactive components, and optimized performance.

## ✨ Features

-   **Modern Design**: Built with Tailwind CSS 4 using the new `@theme inline` syntax
-   **Responsive Layout**: Fully responsive design that works on all devices
-   **Dynamic Content**: Course data fetched from API with type-safe TypeScript
-   **Interactive Components**:
    -   Accordion-style course details
    -   Hover effects on course preview
    -   Modular card components
-   **Performance Optimized**:
    -   Next.js 15 App Router
    -   Image optimization
    -   Custom container configurations
-   **Accessible**: Semantic HTML and keyboard navigation support

## 🛠️ Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Styling**: Tailwind CSS 4
-   **Language**: TypeScript
-   **Icons**: React Icons (Feather Icons, Font Awesome)
-   **Fonts**: Geist Sans & Geist Mono
-   **HTML Parsing**: html-react-parser

## 📦 Installation

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd ten_ms_job_assesment
    ```
2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

`Open (http://localhost:3000)[http://localhost:3000] with your browser to see the result.`

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind CSS 4 config
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main course landing page
├── components/
│   ├── ui/
│   │   └── SectionTitle.tsx # Reusable section title component
│   ├── CourseContent.tsx    # Course content section
│   ├── CourseCta.tsx        # Call-to-action section
│   ├── CourseDescription.tsx # Course description with HTML parsing
│   ├── CourseDetails.tsx    # Accordion-style course details
│   ├── CourseFeatures.tsx   # Course features with images
│   ├── CourseHeader.tsx     # Course header/hero section
│   ├── CourseInstructor.tsx # Instructor information
│   ├── CourseModules.tsx    # Course modules/curriculum
│   └── CoursePreview.tsx    # Course preview with hover effects
└── lib/
    └── api/
        └── getCourseDetails.ts # API functions for fetching course data
```
