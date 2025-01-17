<template>
  <div class="bg-gray-50 text-gray-800">
      <!-- Header -->
      <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Elite Remodeling</span>
              <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Elite Remodeling Logo"
              />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button
                @click="toggleMobileMenu"
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a href="#about" class="text-sm font-semibold text-gray-900 hover:underline">About Us</a>
            <a href="#works" class="text-sm font-semibold text-gray-900 hover:underline">Our Works</a>
            <a href="#services" class="text-sm font-semibold text-gray-900 hover:underline">Our Services</a>
            <a href="#testimonials" class="text-sm font-semibold text-gray-900 hover:underline">Testimonials</a>
            <a href="#faq" class="text-sm font-semibold text-gray-900 hover:underline">FAQ</a>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contact" class="text-sm font-semibold text-gray-900">
              Get in Touch <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <!-- Mobile Menu -->
        <div
            v-show="isMobileMenuOpen"
            class="fixed inset-0 z-10 bg-white p-6 lg:hidden transition duration-300 ease-in-out"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Elite Remodeling</span>
              <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Elite Remodeling Logo"
              />
            </a>
            <button @click="closeMobileMenu" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 space-y-2">
            <a
                @click="closeMobileMenu"
                href="#about"
                class="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2"
            >About Us</a>
            <a
                @click="closeMobileMenu"
                href="#works"
                class="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2"
            >Our Works</a>
            <a
                @click="closeMobileMenu"
                href="#services"
                class="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2"
            >Our Services</a>
            <a
                @click="closeMobileMenu"
                href="#testimonials"
                class="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2"
            >Testimonials</a>
            <a
                @click="closeMobileMenu"
                href="#faq"
                class="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2"
            >FAQ</a>
            <a
                @click="closeMobileMenu"
                href="#contact"
                class="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2"
            >Contact Us</a>
            <a
                @click="closeMobileMenu"
                href="#contact"
                class="block w-full text-center mt-4 px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-500"
            >Get in Touch</a>
          </div>
        </div>
      </header>
    <!-- About Us -->
    <section id="about" class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="About Elite Remodeling Services"
          class="absolute inset-0 -z-10 w-full h-full object-cover object-center"
      />
      <div
          class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
      >
        <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-indigo-500 to-purple-700 opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
      <div
          class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
      >
        <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-indigo-500 to-purple-700 opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Us</h2>
          <p class="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
            At <span class="font-bold text-white">Elite Remodeling Services</span>, we are dedicated to creating beautiful,
            functional, and personalized spaces for every client. With over a decade of expertise, we transform houses into
            dream homes, combining innovative designs, premium materials, and exceptional craftsmanship.
          </p>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base text-gray-300">Years of Expertise</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">15+</dd>
            </div>
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base text-gray-300">Happy Clients</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">500+</dd>
            </div>
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base text-gray-300">Projects Delivered</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">700+</dd>
            </div>
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base text-gray-300">Customer Satisfaction</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">100%</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Our Works -->
    <section id="works" class="py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Our Works</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
              v-for="work in works"
              :key="work.title"
              class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 bg-white"
          >
            <img :src="work.image" :alt="work.title" class="w-full h-48 object-cover">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ work.title }}</div>
              <p class="text-gray-700 text-base">{{ work.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Services -->
    <section id="services" class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Our Services</h2>
        <p class="text-lg mb-6">
          We offer a comprehensive range of services designed to cater to all your remodeling and home improvement needs.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service" class="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">{{ service }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-16 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="p-6 bg-white rounded-lg shadow-md">
            <p class="text-lg italic mb-4">"{{ testimonial.quote }}"</p>
            <h3 class="font-semibold">- {{ testimonial.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">FAQ</h2>
        <div class="space-y-4">
          <div v-for="faq in faqs" :key="faq.question" class="p-4 bg-gray-100 rounded-lg">
            <h3 class="font-semibold">{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section id="contact" class="py-16 bg-gray-100">
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
          <p class="text-lg mb-6">Reach out to us for a free consultation or any questions you may have!</p>
        </div>
        <form class="space-y-6 max-w-lg mx-auto">
          <!-- Name Input -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
            <div class="mt-2">
              <div
                  class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
              >
                <!-- Icon -->
                <svg
                    class="shrink-0 h-6 w-6 text-gray-500 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"
                  />
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 14.25c-4.8 0-7.5 2.4-7.5 3.75v.75h15v-.75c0-1.35-2.7-3.75-7.5-3.75z"
                  />
                </svg>
                <input
                    type="text"
                    name="name"
                    id="name"
                    class="block min-w-0 grow py-3 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                    placeholder="Your Name"
                />
              </div>
            </div>
          </div>

          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
            <div class="mt-2">
              <div
                  class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
              >
                <!-- Icon -->
                <svg
                    class="shrink-0 h-6 w-6 text-gray-500 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75M21.75 6.75a2.25 2.25 0 0 0-2.25-2.25H4.5a2.25 2.25 0 0 0-2.25 2.25M21.75 6.75l-9 6.75-9-6.75"
                  />
                </svg>
                <input
                    type="email"
                    name="email"
                    id="email"
                    class="block min-w-0 grow py-3 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                    placeholder="Your Email"
                />
              </div>
            </div>
          </div>

          <!-- Message Input -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
            <div class="mt-2">
              <div
                  class="flex items-start rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
              >
                <!-- Icon -->
<!--                <svg-->
<!--                    class="shrink-0 mt-2 h-6 w-6 text-gray-500 sm:h-5 sm:w-5"-->
<!--                    fill="none"-->
<!--                    viewBox="0 0 24 24"-->
<!--                    stroke-width="1.5"-->
<!--                    stroke="currentColor"-->
<!--                    aria-hidden="true"-->
<!--                >-->
<!--                  <path-->
<!--                      stroke-linecap="round"-->
<!--                      stroke-linejoin="round"-->
<!--                      d="M12 4.5v15m7.5-7.5h-15"-->
<!--                  />-->
<!--                </svg>-->
                <textarea
                    name="message"
                    id="message"
                    rows="2"
                    class="block min-w-0 grow py-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                    placeholder="Write your message..."
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="text-center">
            <button
                type="submit"
                class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
    <!-- Footer -->
    <footer class="bg-white text-gray-900 rounded-lg shadow m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                class="h-8"
                alt="Elite Remodeling Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Elite Remodeling</span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#about" class="hover:underline me-4 md:me-6">About Us</a>
            </li>
            <li>
              <a href="#services" class="hover:underline me-4 md:me-6">Services</a>
            </li>
            <li>
              <a href="#faq" class="hover:underline me-4 md:me-6">FAQ</a>
            </li>
            <li>
              <a href="#contact" class="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center">
        © 2025 <a href="#" class="hover:underline">Elite Remodeling</a>. All Rights Reserved.
      </span>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          title: "Kitchen Remodeling",
          description: "Transform your kitchen into a functional and stylish space.",
          image: require('@/assets/works/kitchen.jpeg'), // Correct path
        },
        {
          title: "Home Remodeling",
          description: "Elevate your home with our expert remodeling services.",
          image: require('@/assets/works/home.jpeg'), // Correct path
        },
        {
          title: "Bath Remodeling",
          description: "Transform your kitchen into a functional and stylish space.",
          image: require('@/assets/works/kitchen.jpeg'), // Correct path
        },
        {
          title: "Whole House Remodeling",
          description: "Elevate your home with our expert remodeling services.",
          image: require('@/assets/works/home.jpeg'), // Correct path
        },
        {
          title: "Kitchen Remodeling",
          description: "Transform your kitchen into a functional and stylish space.",
          image: require('@/assets/works/kitchen.jpeg'), // Correct path
        },
        {
          title: "Garage Conversions",
          description: "Elevate your home with our expert remodeling services.",
          image: require('@/assets/works/home.jpeg'), // Correct path
        },
        {
          title: "Roofing",
          description: "Transform your kitchen into a functional and stylish space.",
          image: require('@/assets/works/kitchen.jpeg'), // Correct path
        },
        {
          title: "Interior and Exterior Painting",
          description: "Elevate your home with our expert remodeling services.",
          image: require('@/assets/works/home.jpeg'), // Correct path
        },
        {
          title: "Handyman Jobs",
          description: "Elevate your home with our expert remodeling services.",
          image: require('@/assets/works/home.jpeg'), // Correct path
        },
        {
          title: "Smart Home Installation",
          description: "Transform your kitchen into a functional and stylish space.",
          image: require('@/assets/works/kitchen.jpeg'), // Correct path
        },
        {
          title: "Driveways",
          description: "Elevate your home with our expert remodeling services.",
          image: require('@/assets/works/home.jpeg'), // Correct path
        },
      ],
      services: [
        "Custom Design",
        "Project Management",
        "Budget-Friendly Options",
        "High-Quality Materials",
        "Licensed & Insured Professionals",
        "Eco-Friendly Solutions",
      ],
      testimonials: [
        { name: "John Doe", quote: "Amazing work! My kitchen looks stunning." },
        { name: "Jane Smith", quote: "Professional and efficient team!" },
        { name: "Mike Brown", quote: "Exceeded my expectations in every way." },
      ],
      faqs: [
        {
          question: "How long does a remodeling project take?",
          answer: "The timeline depends on the scope of the project, but we strive to complete all work on schedule.",
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free consultations to discuss your needs and project goals.",
        },
        {
          question: "Are your services insured?",
          answer: "Absolutely, all our services are fully licensed and insured for your peace of mind.",
        },
      ],
      isMobileMenuOpen: false, // State for toggling mobile menu
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
};
</script>

<style>
/* Add smooth transitions for mobile menu */
#mobile-menu-content {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>
