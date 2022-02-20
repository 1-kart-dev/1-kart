import React from 'react'
import styles from '../styles/Home.module.scss'
import ReactNavbar from '../components/ReactNavbar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
    return(
        <div>
            {/* <ReactNavbar /> */}
                <header class="ud-header">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                        <button class="navbar-toggler">
                            <span class="toggler-icon"> </span>
                            <span class="toggler-icon"> </span>
                            <span class="toggler-icon"> </span>
                        </button>
                        <div class="navbar-collapse">
                            <ul id="nav" class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="ud-menu-scroll" href="#home">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="ud-menu-scroll" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="ud-menu-scroll" href="#team">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="ud-menu-scroll" href="#contact">Contact</a>
                            </li>
                            <li class="nav-item nav-item-has-children">
                                <a href="javascript:void(0)"> Pages </a>
                                <ul class="ud-submenu">
                                <li class="ud-submenu-item">
                                    <a href="about.html" class="ud-submenu-link">
                                    About Page
                                    </a>
                                </li>
                                <li class="ud-submenu-item">
                                    <a href="pricing.html" class="ud-submenu-link">
                                    Pricing Page
                                    </a>
                                </li>
                                <li class="ud-submenu-item">
                                    <a href="contact.html" class="ud-submenu-link">
                                    Contact Page
                                    </a>
                                </li>
                                <li class="ud-submenu-item">
                                    <a href="blog.html" class="ud-submenu-link">
                                    Blog Grid Page
                                    </a>
                                </li>
                                <li class="ud-submenu-item">
                                    <a href="blog-details.html" class="ud-submenu-link">
                                    Blog Details Page
                                    </a>
                                </li>
                                <li class="ud-submenu-item">
                                    <a href="login.html" class="ud-submenu-link">
                                    Sign In Page
                                    </a>
                                </li>
                                <li class="ud-submenu-item">
                                    <a href="404.html" class="ud-submenu-link">404 Page</a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </div>

                        <div class="navbar-btn d-none d-sm-inline-block">
                            <a class="ud-main-btn ud-white-btn">
                                <Link href="/SignUp">
                                    Sign Up
                                </Link>
                            </a>
                        </div>
                        </nav>
                    </div>
                    </div>
                </div>
                </header>
                <section class="ud-hero" id="home">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
                        <h1 class="ud-hero-title">
                            The New Way to Shop
                        </h1>
                        <p class="ud-hero-desc">
                        Organize all of the products that grab your attention, without the hassle. 
                        1kart gives you the tools to purchase, manage, and organize all e-commerce to best fit your purchase agenda.
                        </p>
                        </div>
                        <div
                        class="ud-hero-brands-wrapper wow fadeInUp"
                        data-wow-delay=".3s"
                        >
                        </div>
                        <div class="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section id="features" class="ud-features">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-section-title">
                        <span>Features</span>
                        <h2>Your Tool Kit</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
                        <div class="ud-feature-icon">
                            <i class="lni lni-gift"></i>
                        </div>
                        <div class="ud-feature-content">
                            <h3 class="ud-feature-title">Active Cart</h3>
                            <p class="ud-feature-desc">
                            Organize your potential items and make a purchase
                            </p>
                            <a href="javascript:void(0)" class="ud-feature-link">
                            Learn More
                            </a>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
                        <div class="ud-feature-icon">
                            <i class="lni lni-move"></i>
                        </div>
                        <div class="ud-feature-content">
                            <h3 class="ud-feature-title">Wish Lists</h3>
                            <p class="ud-feature-desc">
                            Leave items to revisit for later purchase decisions
                            </p>
                            <a href="javascript:void(0)" class="ud-feature-link">
                            Learn More
                            </a>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
                        <div class="ud-feature-icon">
                            <i class="lni lni-layout"></i>
                        </div>
                        <div class="ud-feature-content">
                            <h3 class="ud-feature-title">Subcarts</h3>
                            <p class="ud-feature-desc">
                            Store and organize items for future/ reorder purchases
                            </p>
                            <a href="javascript:void(0)" class="ud-feature-link">
                            Learn More
                            </a>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                        <div class="ud-feature-icon">
                            <i class="lni lni-layers"></i>
                        </div>
                        <div class="ud-feature-content">
                            <h3 class="ud-feature-title">My Brands</h3>
                            <p class="ud-feature-desc">
                            Users can see the brands they have shopped and analytics
                            on their e-commerce purchase history
                            </p>
                            <a href="javascript:void(0)" class="ud-feature-link">
                            Learn More
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section id="about" class="ud-about">
                <div class="container">
                    <div class="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
                    <div class="ud-about-content-wrapper">
                        <div class="ud-about-content">
                        <span class="tag">About Us</span>
                        <h2>Shopping is a Luxury, and Should Never be a Task.</h2>
                        <p>
                        Brands have left customers with the burden of sifting through the 
                        endless ad stream to find the products & brands that most 
                        represent each individual.
                        </p>
                        <p>
                        Customers can now enjoy their mindless online shopping with a home 
                        base to organize all their findings, 
                        so they can revisit and make a purchase once they’re ready. 
                        1-kart wants to offer every shopper the power to find & organize the 
                        products that best represent their lifestyle and make a purchase 
                        decision when they're ready.
                        </p>
                        <a href="javascript:void(0)" class="ud-main-btn">Learn More</a>
                        </div>
                    </div>
                    <div class="ud-about-image">
                    </div>
                    </div>
                </div>
                </section>
                {/* <section id="pricing" class="ud-pricing">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-section-title mx-auto text-center">
                        <span>Pricing</span>
                        <h2>Our Pricing Plans</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                        </div>
                    </div>
                    </div>

                    <div class="row g-0 align-items-center justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-10">
                        <div
                        class="ud-single-pricing first-item wow fadeInUp"
                        data-wow-delay=".15s"
                        >
                        <div class="ud-pricing-header">
                            <h3>STARTING FROM</h3>
                            <h4>$ 19.99/mo</h4>
                        </div>
                        <div class="ud-pricing-body">
                            <ul>
                            <li>5 User</li>
                            <li>All UI components</li>
                            <li>Lifetime access</li>
                            <li>Free updates</li>
                            <li>Use on 1 (one) project</li>
                            <li>4 Months support</li>
                            </ul>
                        </div>
                        <div class="ud-pricing-footer">
                            <a href="javascript:void(0)" class="ud-main-btn ud-border-btn">
                            Purchase Now
                            </a>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-10">
                        <div
                        class="ud-single-pricing active wow fadeInUp"
                        data-wow-delay=".1s"
                        >
                        <span class="ud-popular-tag">POPULAR</span>
                        <div class="ud-pricing-header">
                            <h3>STARTING FROM</h3>
                            <h4>$ 30.99/mo</h4>
                        </div>
                        <div class="ud-pricing-body">
                            <ul>
                            <li>5 User</li>
                            <li>All UI components</li>
                            <li>Lifetime access</li>
                            <li>Free updates</li>
                            <li>Use on 1 (one) project</li>
                            <li>4 Months support</li>
                            </ul>
                        </div>
                        <div class="ud-pricing-footer">
                            <a href="javascript:void(0)" class="ud-main-btn ud-white-btn">
                            Purchase Now
                            </a>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-10">
                        <div
                        class="ud-single-pricing last-item wow fadeInUp"
                        data-wow-delay=".15s"
                        >
                        <div class="ud-pricing-header">
                            <h3>STARTING FROM</h3>
                            <h4>$ 70.99/mo</h4>
                        </div>
                        <div class="ud-pricing-body">
                            <ul>
                            <li>5 User</li>
                            <li>All UI components</li>
                            <li>Lifetime access</li>
                            <li>Free updates</li>
                            <li>Use on 1 (one) project</li>
                            <li>4 Months support</li>
                            </ul>
                        </div>
                        <div class="ud-pricing-footer">
                            <a href="javascript:void(0)" class="ud-main-btn ud-border-btn">
                            Purchase Now
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}
                {/* <section id="faq" class="ud-faq">
                <div class="shape">
                    <img src="assets/images/faq/shape.svg" alt="shape" />
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-section-title text-center mx-auto">
                        <span>FAQ</span>
                        <h2>Any Questions? Answered</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-lg-6">
                        <div class="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                        <div class="accordion">
                            <button
                            class="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            >
                            <span class="icon flex-shrink-0">
                                <i class="lni lni-chevron-down"></i>
                            </span>
                            <span>How to use UIdeck?</span>
                            </button>
                            <div id="collapseOne" class="accordion-collapse collapse">
                            <div class="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                        <div class="accordion">
                            <button
                            class="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            >
                            <span class="icon flex-shrink-0">
                                <i class="lni lni-chevron-down"></i>
                            </span>
                            <span>How to download icons from Lineicons?</span>
                            </button>
                            <div id="collapseTwo" class="accordion-collapse collapse">
                            <div class="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                        <div class="accordion">
                            <button
                            class="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            >
                            <span class="icon flex-shrink-0">
                                <i class="lni lni-chevron-down"></i>
                            </span>
                            <span>Is GrayGrids part of UIdeck?</span>
                            </button>
                            <div id="collapseThree" class="accordion-collapse collapse">
                            <div class="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                        <div class="accordion">
                            <button
                            class="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            >
                            <span class="icon flex-shrink-0">
                                <i class="lni lni-chevron-down"></i>
                            </span>
                            <span>Can I use this template for commercial project?</span>
                            </button>
                            <div id="collapseFour" class="accordion-collapse collapse">
                            <div class="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                        <div class="accordion">
                            <button
                            class="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            >
                            <span class="icon flex-shrink-0">
                                <i class="lni lni-chevron-down"></i>
                            </span>
                            <span>Do you have plan releasing Play Pro?</span>
                            </button>
                            <div id="collapseFive" class="accordion-collapse collapse">
                            <div class="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                        <div class="accordion">
                            <button
                            class="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            >
                            <span class="icon flex-shrink-0">
                                <i class="lni lni-chevron-down"></i>
                            </span>
                            <span>Where and how to host this template?</span>
                            </button>
                            <div id="collapseSix" class="accordion-collapse collapse">
                            <div class="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}
                {/* <section id="testimonials" class="ud-testimonials">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-section-title mx-auto text-center">
                        <span>Testimonials</span>
                        <h2>What our Customers Says</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div
                        class="ud-single-testimonial wow fadeInUp"
                        data-wow-delay=".1s"
                        >
                        <div class="ud-testimonial-ratings">
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                        </div>
                        <div class="ud-testimonial-content">
                            <p>
                            “Our members are so impressed. It's intuitive. It's clean.
                            It's distraction free. If you're building a community.
                            </p>
                        </div>
                        <div class="ud-testimonial-info">
                            <div class="ud-testimonial-image">
                            <img
                                src="assets/images/testimonials/author-01.png"
                                alt="author"
                            />
                            </div>
                            <div class="ud-testimonial-meta">
                            <h4>Sabo Masties</h4>
                            <p>Founder @UIdeck</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div
                        class="ud-single-testimonial wow fadeInUp"
                        data-wow-delay=".15s"
                        >
                        <div class="ud-testimonial-ratings">
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                        </div>
                        <div class="ud-testimonial-content">
                            <p>
                            “Our members are so impressed. It's intuitive. It's clean.
                            It's distraction free. If you're building a community.
                            </p>
                        </div>
                        <div class="ud-testimonial-info">
                            <div class="ud-testimonial-image">
                            <img
                                src="assets/images/testimonials/author-02.png"
                                alt="author"
                            />
                            </div>
                            <div class="ud-testimonial-meta">
                            <h4>Margin Gesmu</h4>
                            <p>Founder @Lineicons</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div
                        class="ud-single-testimonial wow fadeInUp"
                        data-wow-delay=".2s"
                        >
                        <div class="ud-testimonial-ratings">
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                            <i class="lni lni-star-filled"></i>
                        </div>
                        <div class="ud-testimonial-content">
                            <p>
                            “Our members are so impressed. It's intuitive. It's clean.
                            It's distraction free. If you're building a community.
                            </p>
                        </div>
                        <div class="ud-testimonial-info">
                            <div class="ud-testimonial-image">
                            <img
                                src="assets/images/testimonials/author-03.png"
                                alt="author"
                            />
                            </div>
                            <div class="ud-testimonial-meta">
                            <h4>William Smith</h4>
                            <p>Founder @GrayGrids</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-brands wow fadeInUp" data-wow-delay=".2s">
                        <div class="ud-title">
                            <h6>Trusted and Used by</h6>
                        </div>
                        <div class="ud-brands-logo">
                            <div class="ud-single-logo">
                            <img src="assets/images/brands/ayroui.svg" alt="ayroui" />
                            </div>
                            <div class="ud-single-logo">
                            <img src="assets/images/brands/uideck.svg" alt="uideck" />
                            </div>
                            <div class="ud-single-logo">
                            <img
                                src="assets/images/brands/graygrids.svg"
                                alt="graygrids"
                            />
                            </div>
                            <div class="ud-single-logo">
                            <img
                                src="assets/images/brands/lineicons.svg"
                                alt="lineicons"
                            />
                            </div>
                            <div class="ud-single-logo">
                            <img
                                src="assets/images/brands/ecommerce-html.svg"
                                alt="ecommerce-html"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}
                <section id="team" class="ud-team">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-section-title mx-auto text-center">
                        <span>Our Team</span>
                        <h2>Meet The Team</h2>
                        <p>
                            
                        </p>
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="ud-single-team wow fadeInUp" data-wow-delay=".1s">
                        {/* <div class="ud-team-image-wrapper">
                            <div class="ud-team-image">
                            <img src="assets/images/team/team-01.png" alt="team" />
                            </div>

                            <img
                            src="assets/images/team/dotted-shape.svg"
                            alt="shape"
                            class="shape shape-1"
                            />
                            <img
                            src="assets/images/team/shape-2.svg"
                            alt="shape"
                            class="shape shape-2"
                            />
                        </div> */}
                        <div class="ud-team-info">
                            <h5>Lorenzo Gonzales</h5>
                            <h6>Co-Founder</h6>
                        </div>
                        <ul class="ud-team-socials">
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-facebook-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-twitter-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-instagram-filled"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="ud-single-team wow fadeInUp" data-wow-delay=".15s">
                        {/* <div class="ud-team-image-wrapper">
                            <div class="ud-team-image">
                            <img src="assets/images/team/team-02.png" alt="team" />
                            </div>

                            <img
                            src="assets/images/team/dotted-shape.svg"
                            alt="shape"
                            class="shape shape-1"
                            />
                            <img
                            src="assets/images/team/shape-2.svg"
                            alt="shape"
                            class="shape shape-2"
                            />
                        </div> */}
                        <div class="ud-team-info">
                            <h5>Joey Fieno</h5>
                            <h6>Co-Founder</h6>
                        </div>
                        <ul class="ud-team-socials">
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-facebook-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-twitter-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-instagram-filled"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="ud-single-team wow fadeInUp" data-wow-delay=".2s">
                        {/* <div class="ud-team-image-wrapper">
                            <div class="ud-team-image">
                            <img src="assets/images/team/team-03.png" alt="team" />
                            </div>

                            <img
                            src="assets/images/team/dotted-shape.svg"
                            alt="shape"
                            class="shape shape-1"
                            />
                            <img
                            src="assets/images/team/shape-2.svg"
                            alt="shape"
                            class="shape shape-2"
                            />
                        </div> */}
                        <div class="ud-team-info">
                            <h5>Ushno Chakraborty</h5>
                            <h6>Lead Developer</h6>
                        </div>
                        <ul class="ud-team-socials">
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-facebook-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-twitter-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-instagram-filled"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="ud-single-team wow fadeInUp" data-wow-delay=".25s">
                        {/* <div class="ud-team-image-wrapper">
                            <div class="ud-team-image">
                            <img src="assets/images/team/team-04.png" alt="team" />
                            </div>

                            <img
                            src="assets/images/team/dotted-shape.svg"
                            alt="shape"
                            class="shape shape-1"
                            />
                            <img
                            src="assets/images/team/shape-2.svg"
                            alt="shape"
                            class="shape shape-2"
                            />
                        </div> */}
                        <div class="ud-team-info">
                            <h5>Will Swinyer</h5>
                            <h6>Software Developer</h6>
                        </div>
                        <ul class="ud-team-socials">
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-facebook-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-twitter-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-instagram-filled"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section id="contact" class="ud-contact">
                <div class="container">
                    <div class="row align-items-center">
                    <div class="col-xl-8 col-lg-7">
                        <div class="ud-contact-content-wrapper">
                        <div class="ud-contact-title">
                            <span>CONTACT US</span>
                            <h2>
                            Let’s talk about <br />
                            Love to hear from you!
                            </h2>
                        </div>
                        <div class="ud-contact-info-wrapper">
                            <div class="ud-single-info">
                            <div class="ud-info-icon">
                                <i class="lni lni-map-marker"></i>
                            </div>
                            <div class="ud-info-meta">
                                <h5>Our Location</h5>
                                <p>204 Short Street, Chapel Hill, North Carolina</p>
                            </div>
                            </div>
                            <div class="ud-single-info">
                            <div class="ud-info-icon">
                                <i class="lni lni-envelope"></i>
                            </div>
                            <div class="ud-info-meta">
                                <h5>How Can We Help?</h5>
                                <p>help@1-kart.com</p>
                                <p>contact@1-kart.com</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div
                        class="ud-contact-form-wrapper wow fadeInUp"
                        data-wow-delay=".2s"
                        >
                        <h3 class="ud-contact-form-title">Send us a Message</h3>
                        <form class="ud-contact-form">
                            <div class="ud-form-group">
                            <label for="fullName">Full Name*</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="John Doe"
                            />
                            </div>
                            <div class="ud-form-group">
                            <label for="email">Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@yourmail.com"
                            />
                            </div>
                            <div class="ud-form-group">
                            <label for="phone">Phone*</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="(123) 456-7890"
                            />
                            </div>
                            <div class="ud-form-group">
                            <label for="message">Message*</label>
                            <textarea
                                name="message"
                                rows="1"
                                placeholder="type your message here"
                            ></textarea>
                            </div>
                            <div class="ud-form-group mb-0">
                            <button type="submit" class="ud-main-btn">
                                Send Message
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <footer class="ud-footer wow fadeInUp" data-wow-delay=".15s">
                {/* <div class="shape shape-1">
                    <img src="assets/images/footer/shape-1.svg" alt="shape" />
                </div>
                <div class="shape shape-2">
                    <img src="assets/images/footer/shape-2.svg" alt="shape" />
                </div>
                <div class="shape shape-3">
                    <img src="assets/images/footer/shape-3.svg" alt="shape" />
                </div> */}
                <div class="ud-footer-widgets">
                    <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="ud-widget">
                            <a href="index.html" class="ud-footer-logo">
                            {/* <img src="assets/images/logo/logo.svg" alt="logo" /> */}
                            </a>
                            <p class="ud-widget-desc">
                            We create digital experiences for brands and companies by
                            using technology.
                            </p>
                            <ul class="ud-widget-socials">
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-facebook-filled"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-twitter-filled"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-instagram-filled"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-linkedin-original"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                        <div class="ud-widget">
                            <h5 class="ud-widget-title">About Us</h5>
                            <ul class="ud-widget-links">
                            <li>
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Features</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">About</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Testimonial</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div class="ud-widget">
                            <h5 class="ud-widget-title">Features</h5>
                            <ul class="ud-widget-links">
                            <li>
                                <a href="javascript:void(0)">How it works</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Privacy policy</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Terms of service</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Refund policy</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        {/* <div class="ud-widget">
                            <h5 class="ud-widget-title">Our Products</h5>
                            <ul class="ud-widget-links">
                            <li>
                                <a
                                href="https://lineicons.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >Lineicons
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://ecommercehtml.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >Ecommerce HTML</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://ayroui.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >Ayro UI</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://graygrids.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >Plain Admin</a
                                >
                            </li>
                            </ul>
                        </div> */}
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-8 col-sm-10">
                        {/* <div class="ud-widget">
                            <h5 class="ud-widget-title">Partners</h5>
                            <ul class="ud-widget-brands">
                            <li>
                                <a
                                href="https://ayroui.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src="assets/images/footer/brands/ayroui.svg"
                                    alt="ayroui"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://ecommercehtml.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src="assets/images/footer/brands/ecommerce-html.svg"
                                    alt="ecommerce-html"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://graygrids.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src="assets/images/footer/brands/graygrids.svg"
                                    alt="graygrids"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://lineicons.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src="assets/images/footer/brands/lineicons.svg"
                                    alt="lineicons"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://uideck.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src="assets/images/footer/brands/uideck.svg"
                                    alt="uideck"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://tailwindtemplates.co/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src="assets/images/footer/brands/tailwindtemplates.svg"
                                    alt="tailwindtemplates"
                                />
                                </a>
                            </li>
                            </ul>
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
                <div class="ud-footer-bottom">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                        <ul class="ud-footer-bottom-left">
                            <li>
                            <a href="javascript:void(0)">Privacy policy</a>
                            </li>
                            <li>
                            <a href="javascript:void(0)">Support policy</a>
                            </li>
                            <li>
                            <a href="javascript:void(0)">Terms of service</a>
                            </li>
                        </ul>
                        </div>
                        <div class="col-md-4">
                        {/* <p class="ud-footer-bottom-right">
                            Designed and Developed by
                            <a href="https://uideck.com" rel="nofollow">UIdeck</a>
                        </p> */}
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
                <a href="javascript:void(0)" class="back-to-top">
                <i class="lni lni-chevron-up"> </i>
                </a>
            <footer className={styles.footer}>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
            </footer>
        </div>
    );
}