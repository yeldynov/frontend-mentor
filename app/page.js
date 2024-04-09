import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-10 p-24'>
      <h1 className='text-6xl flex justify-center items-center text-center font-semibold'>
        Frontend Mentor Projects (new!)
      </h1>
      <Link href='/recipe-page'>
        <h3 className='text-3xl text-blue-600'>Recipe Page</h3>
      </Link>
      <Link href='/social-links-profile'>
        <h3 className='text-3xl text-blue-600'>Social Links Profile</h3>
      </Link>
      <Link href='/blog-preview-card'>
        <h3 className='text-3xl text-blue-600'>Blog Preview Card</h3>
      </Link>
      <Link href='/faq-accordion'>
        <h3 className='text-3xl text-blue-600'>FAQ Accordion</h3>
      </Link>
      <Link href='/newsletter-form'>
        <h3 className='text-3xl text-blue-600'>Newsletter Form</h3>
      </Link>
      <Link href='/blogr-landing'>
        <h3 className='text-3xl text-blue-600'>Blogr Landing Page</h3>
      </Link>
      <Link href='/loopstudio'>
        <h3 className='text-3xl text-blue-600'>Loopstudio Landing Page</h3>
      </Link>
    </main>
  )
}
