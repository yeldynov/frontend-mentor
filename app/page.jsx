import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className="fixed inset-0 -z-10 bg-[url('/background.jpeg')] bg-cover opacity-50"></div>
      <h1 className="flex items-center justify-center text-center font-baijam text-4xl font-semibold text-black">
        Frontend Mentor Projects (new!)
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CardLink
          href="/bento-grid"
          title="Bento Grid"
          imageSrc="screens/screen15.png"
        />
        <CardLink
          href="/huddle-lp-alternate"
          title="Huddle Landing Page (alternative)"
          imageSrc="screens/screen14.png"
        />
        <CardLink
          href="/clipboard-lp"
          title="Clipboard Landing Page"
          imageSrc="screens/screen13.png"
        />
        <CardLink
          href="/crowdfund"
          title="Crowdfunding Product Page"
          imageSrc="screens/screen12.png"
        />

        <CardLink
          href="/insure-lp"
          title="Insure Landing Page"
          imageSrc="screens/screen10.png"
        />
        <CardLink
          href="/project-tracking-intro"
          title="Project Tracking Intro Page"
          imageSrc="screens/screen9.png"
        />
        <CardLink
          href="/loopstudio"
          title="Loopstudio Landing Page"
          imageSrc="screens/screen8.jpeg"
        />
        <CardLink
          href="/blogr-landing"
          title="Blogr Landing Page"
          imageSrc="screens/screen7.png"
        />
        <CardLink
          href="/age-calculator"
          title="Age Calculator"
          imageSrc="screens/screen11.png"
        />
        <CardLink
          href="/newsletter-form"
          title="Newsletter Form"
          imageSrc="screens/screen6.png"
        />
        <CardLink
          href="/faq-accordion"
          title="FAQ Accordion"
          imageSrc="screens/screen5.png"
        />
        <CardLink
          href="/blog-preview-card"
          title="Blog Preview Card"
          imageSrc="screens/screen4.png"
        />
        <CardLink
          href="/social-links-profile"
          title="Social Links Profile"
          imageSrc="screens/screen3.png"
        />
        <CardLink
          href="/recipe-page"
          title="Recipe Page"
          imageSrc="screens/screen2.png"
        />
        <CardLink
          href="/article-preview"
          title="Article Preview Component"
          imageSrc="screens/screen1.png"
        />
        <CardLink
          href="/contact-form"
          title="Contact Form"
          imageSrc="screens/screen16.png"
        />
        <CardLink
          href="/testimonials-slider"
          title="Testimonial Slider"
          imageSrc="screens/screen17.png"
        />
      </div>
      <h2 className="flex items-center justify-center self-end text-center font-baijam text-2xl font-semibold italic">
        By Nikita Yeldynov
      </h2>
    </main>
  );
}

function CardLink({ href, title, imageSrc }) {
  return (
    <Link href={href}>
      <div className="flex h-80 w-64 transform cursor-pointer flex-col items-center justify-start rounded-lg bg-white p-4 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-50 hover:shadow-xl">
        <img
          src={imageSrc}
          alt={title}
          className="h-48 w-full rounded-t-lg object-cover"
        />
        <div className="flex h-full flex-col items-center justify-center p-4">
          <h3 className="text-center text-xl text-blue-600">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
