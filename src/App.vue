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
          src="@/assets/bg_photo.jpg"
          alt="About Elite Remodeling Services"
          class="absolute inset-0 -z-10 w-full h-full object-cover object-center"
      />
      <div class="backdrop-blur-md rounded-3xl p-5 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Us</h2>
          <p class="mt-8 text-lg font-medium text-gray-100 sm:text-xl">
            At <span class="font-bold text-white"><b>Elite Remodeling Services</b></span>, we are dedicated to creating beautiful,
            functional, and personalized spaces for every client. With over a decade of expertise, we transform houses into
            dream homes, combining innovative designs, premium materials, and exceptional craftsmanship. Our services include
            general remodeling, kitchen remodeling, bathroom remodeling, bedroom remodeling, garage renovations, ADU construction,
            smart home installations, and custom closet solutions. Whether you're looking to upgrade a single room or reimagine
            your entire home, our team is here to bring your vision to life.
          </p>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base text-gray-100">Years of Expertise</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">15+</dd>
            </div>
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base text-gray-100">Happy Clients</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">500+</dd>
            </div>
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base text-gray-100">Projects Delivered</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">700+</dd>
            </div>
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base text-gray-100">Customer Satisfaction</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">100%</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Our Services -->
    <section id="services" class="py-16 bg-white">
      <div class="container mx-auto max-w-7xl px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Our Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.name" class="p-6 bg-gray-100 rounded-lg shadow-md flex items-center space-x-4">

            <!-- Отображаем FontAwesome иконки -->
            <font-awesome-icon
                v-if="isFontAwesomeIcon(service.icon)"
                :icon="['fas', service.icon]"
                class="text-3xl text-blue-500"
            />

            <!-- Отображаем SVG-иконки с увеличенным размером -->
            <img v-else :src="service.icon" class="h-12 w-12" alt="" />

            <h3 class="text-lg font-semibold">{{ service.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Works -->
    <section id="works" class="py-16 bg-gray-100">
      <div class="container mx-auto max-w-7xl px-6 text-center">
<!--        <h2 class="text-3xl font-bold mb-8">Our Works</h2>-->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="work in works" :key="work.title" class="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white">
            <div class="w-full h-64">
              <img :src="work.image" :alt="work.title" class="w-full h-full object-cover">
            </div>
            <div class="px-6 py-4">
              <h3 class="font-bold text-xl mb-2">{{ work.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-16 bg-gray-100">
      <div class="container mx-auto max-w-7xl px-6 text-center">
        <h2 class="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="p-6 bg-white rounded-lg shadow-md">
            <p class="text-lg italic mb-4">"{{ testimonial.quote }}"</p>
            <h3 class="font-semibold">- {{ testimonial.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section id="contact" class="py-16 bg-white">
      <div class="container mx-auto max-w-7xl px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
        <p class="text-lg mb-6">Reach out to us for a free consultation or any questions you may have!</p>
        <form class="space-y-6 max-w-lg mx-auto">
          <div>
<!--            <label for="name" class="block text-sm font-medium text-gray-900">Name</label>-->
            <input type="text" name="name" id="name" class="block w-full py-3 px-4 text-base text-gray-900 bg-gray-100 rounded-md" placeholder="Your Name" />
          </div>
          <div>
<!--            <label for="email" class="block text-sm font-medium text-gray-900">Email</label>-->
            <input type="email" name="email" id="email" class="block w-full py-3 px-4 text-base text-gray-900 bg-gray-100 rounded-md" placeholder="Your Email" />
          </div>
          <div>
<!--            <label for="message" class="block text-sm font-medium text-gray-900">Message</label>-->
            <textarea name="message" id="message" rows="3" class="block w-full py-3 px-4 text-base text-gray-900 bg-gray-100 rounded-md" placeholder="Write your message..."></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-500">Send Message</button>
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


import lumberIcon from '@/assets/services/Lumber.svg';
import kitchenCabinetsIcon from '@/assets/services/Kitchen cabinets.svg';
import countertopIcon from '@/assets/services/Countertop.svg';
import floorIcon from '@/assets/services/floor.svg';
import drywallIcon from '@/assets/services/Drywall.svg';
export default {
  data() {
    return {
      works: [
        { title: "Smart Home", image: require('@/assets/works/smart home.jpg') },
        { title: "General Remodeling", image: require('@/assets/works/generalremodeling.jpg') },
        { title: "Kitchen Remodeling", image: require('@/assets/works/kitchen.jpeg') },
        { title: "Bedroom Remodeling", image: require('@/assets/works/bedroom remodeling.jpg') },
        { title: "Garage Renovation", image: require('@/assets/works/garage.webp') },
        { title: "Bathroom Remodeling", image: require('@/assets/works/Bathroom.jpg') },
        { title: "Outside Restoration", image: require('@/assets/works/outside.jpeg') },
        { title: "Closets Remodeling", image: require('@/assets/works/closets.jpg') },
        { title: "ADU Construction", image: require('@/assets/works/ADU.webp') },
      ],
            services:[
              { name: "Electrical", icon: "bolt" },  // FontAwesome
              { name: "Plumbing", icon: "faucet-drip" },
              { name: "Painting", icon: "paint-roller" },
              { name: "Tile Jobs", icon: "th-large" },

              // SVG-иконки
              { name: "Lumber", icon: lumberIcon },
              { name: "Kitchen Cabinets", icon: kitchenCabinetsIcon },
              { name: "Countertops", icon: countertopIcon },
              { name: "Floor Installation", icon: floorIcon },
              { name: "Drywall Installation", icon: drywallIcon },

              { name: "HVAC/Ventilation", icon: "fan" },
              { name: "Wood Restoration", icon: "brush" },
              { name: "Handyman Services", icon: "tools" },
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
    isFontAwesomeIcon(icon) {
      return typeof icon === "string" && !icon.endsWith(".svg");
    }
  },
};
</script>

<style>
/* Add smooth transitions for mobile menu */
#mobile-menu-content {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>
