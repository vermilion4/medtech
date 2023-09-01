import Image from 'next/image';

export default function Home ()
{
  return (
    <>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between h-16">
            <div className="flex mx-auto h-[60px]">

              <img
                src="/logo.jpeg"
                alt="Logo"

              />

            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-wrap lg:items-center">
        <div className="w-full px-4 py-16 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 relative">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-[#003087]">Contact Us</h1>

            <p className="mt-4 text-gray-500">
              Thank you for visiting our page.<br /> We are happy to see you here.<br /><br />

              Our website is in the process of being built<br /> and will be ready shortly. In the meantime,<br /> we&apos;d love to hear from you.<br /><br /> To discover how we&apos;re shaping the future of<br />healthcare, leave us a message and we will<br /> get back to you promptly.<br /><br />

              <span className='font-semibold'>With Thanks<br />
                Abiodun, Austin, Celeste & Isabelle<br />
                <span className='text-[#00A499]'>(The MedTech Solutions Founding Team)</span>
              </span>
            </p>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <input type="hidden" name="access_key" value="2074eb4d-ae33-4a3c-8c02-1b183b1e5453" />
            <input type="hidden" name="from_name" value="MedTech Contact Form" />
            <input type="checkbox" name="botcheck" class="hidden" style={ { display: "none;" } } />
            <div>
              <label htmlFor="name" className="sr-only">Name</label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  name="name"
                  placeholder="Enter full name"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  name="email"
                  placeholder="Enter email"
                  required
                />

              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  name='subject'
                  placeholder="Enter subject/title"
                  required
                />


              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>

              <div className="relative">
                <textarea
                  name="message"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter message"
                  required
                />


              </div>
            </div>

            <div className="flex items-center justify-between">

              <button
                type="submit"
                className="inline-block rounded-lg bg-[#00A499] px-5 py-3 text-sm font-medium text-white"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mx-auto max-w-md w-full pt-8 space-x-3 ">
            <button
              type="button"

              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:scale-105"
              style={ { backgroundColor: "#c13584" } }>
              <a href="https://instagram.com/medtechsolutionsglobal?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </button>
            <button
              type="button"

              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:scale-105"
              style={ { backgroundColor: "#0077b5" } }>
              <a href="https://www.linkedin.com/company/medtechsolutionsglobal/" target='_blank'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </button>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style="background-color: #1877f2">
              <a href="https://www.facebook.com/medtechsolutionsglobal" target='_blank'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </button>
          </div>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-screen lg:w-1/2">
          <img
            alt="Contact us"
            src="/image.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </>
  );
}
