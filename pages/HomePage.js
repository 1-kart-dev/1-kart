import React, { useState } from 'react'
import styles from '../styles/Home.module.scss'
import ReactNavbar from '../components/ReactNavbar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/1kartCircle.png';
import { Button } from '@material-ui/core'
import axios from 'axios'

export default function HomePage() {
    const [waitlistForm, setWaitlistForm] = useState({})
    const [show, setShow] = useState(true)
    const handleSubmitWaitlist = async (e) => {
        await axios.post('/api/waitlist/', waitlistForm)
        setShow(false)
    }

    return(
        <div>
            {/* <ReactNavbar /> */}
                <header className="ud-header">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler">
                            <span className="toggler-icon"> </span>
                            <span className="toggler-icon"> </span>
                            <span className="toggler-icon"> </span>
                        </button>
                        
                        <div className="navbar-collapse">
                        <div className="navbar-btn d-none d-sm-inline-block">
                            <Image src={logo} width="70px" height="70px" alt="logo"/>
                        </div>
                        <h2>1kart</h2>
                            <ul id="nav" className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="ud-menu-scroll" href="#home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="ud-menu-scroll" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="ud-menu-scroll" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="ud-menu-scroll" href="#waitlist">Waitlist</a>
                            </li>
                            <li className="nav-item nav-item-has-children">
                                <a href="javascript:void(0)"> Pages </a>
                                <ul className="ud-submenu">
                                <li className="ud-submenu-item">
                                    <a href="about.html" className="ud-submenu-link">
                                    About Page
                                    </a>
                                </li>
                                <li className="ud-submenu-item">
                                    <a href="pricing.html" className="ud-submenu-link">
                                    Pricing Page
                                    </a>
                                </li>
                                <li className="ud-submenu-item">
                                    <a href="contact.html" className="ud-submenu-link">
                                    Contact Page
                                    </a>
                                </li>
                                <li className="ud-submenu-item">
                                    <a href="blog.html" className="ud-submenu-link">
                                    Blog Grid Page
                                    </a>
                                </li>
                                <li className="ud-submenu-item">
                                    <a href="blog-details.html" className="ud-submenu-link">
                                    Blog Details Page
                                    </a>
                                </li>
                                <li className="ud-submenu-item">
                                    <a href="login.html" className="ud-submenu-link">
                                    Sign In Page
                                    </a>
                                </li>
                                <li className="ud-submenu-item">
                                    <a href="404.html" className="ud-submenu-link">404 Page</a>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </div>

                        <div className="navbar-btn d-none d-sm-inline-block">
                            <a className="ud-main-btn ud-white-btn">
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
                <section className="ud-hero" id="home">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
                        <div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
                        <Image src={logo} width="200px" height="200px" alt="logo"/>
                        </div>
                        <h1 className="ud-hero-title">
                            <span className="ud-hero-title-color-2">Shop Smart.</span> <br/>
                            1kart.
                        </h1>
                        <p className="ud-hero-desc">
                        Organize all of the products that grab your attention, without the hassle. 
                        1kart gives you the tools to purchase, manage, and organize all e-commerce to best fit your purchase agenda.
                        </p>
                        </div>
                        <div className="ud-hero-buttons">
                            <a href='#waitlist' className="ud-main-btn">
                                Join the Waitlist
                            </a>
                        </div>
                        <div
                        className="ud-hero-brands-wrapper wow fadeInUp"
                        data-wow-delay=".3s"
                        >
                        </div>                        
                    </div>
                    </div>
                </div>
                </section>
                <section id="features" className="ud-features">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="ud-section-title">
                        <span>Features</span>
                        <h2>Your Tool Kit</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some .
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
                        <div className="ud-feature-icon">
                            <i className="lni lni-gift"></i>
                        </div>
                        <div className="ud-feature-content">
                            <h3 className="ud-feature-title">Active Cart</h3>
                            <p className="ud-feature-desc">
                            Organize your potential items and make a purchase
                            </p>
                            <a href="javascript:void(0)" className="ud-feature-link">
                            Learn More
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
                        <div className="ud-feature-icon">
                            <i className="lni lni-move"></i>
                        </div>
                        <div className="ud-feature-content">
                            <h3 className="ud-feature-title">Wish Lists</h3>
                            <p className="ud-feature-desc">
                            Leave items to revisit for later purchase decisions
                            </p>
                            <a href="javascript:void(0)" className="ud-feature-link">
                            Learn More
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
                        <div className="ud-feature-icon">
                            <i className="lni lni-layout"></i>
                        </div>
                        <div className="ud-feature-content">
                            <h3 className="ud-feature-title">Subcarts</h3>
                            <p className="ud-feature-desc">
                            Store and organize items for future/ reorder purchases
                            </p>
                            <a href="javascript:void(0)" className="ud-feature-link">
                            Learn More
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                        <div className="ud-feature-icon">
                            <i className="lni lni-layers"></i>
                        </div>
                        <div className="ud-feature-content">
                            <h3 className="ud-feature-title">My Brands</h3>
                            <p className="ud-feature-desc">
                            Users can see the brands they have shopped and analytics
                            on their e-commerce purchase history
                            </p>
                            <a href="javascript:void(0)" className="ud-feature-link">
                            Learn More
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section id="about" className="ud-about">
                <div className="container">
                    <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
                    <div className="ud-about-content-wrapper">
                        <div className="ud-about-content">
                        <span className="tag">About Us</span>
                        <h2>Shopping is a Luxury, and Should Never be a Task.</h2>
                        <p>
                        Brands have left customers with the burden of sifting through the 
                        endless ad stream to find the products & brands that most 
                        represent each individual.
                        </p>
                        <p>
                        Customers can now enjoy their mindless online shopping with a home 
                        base to organize all their findings, 
                        so they can revisit and make a purchase once they&apos;re ready. 
                        1-kart wants to offer every shopper the power to find & organize the 
                        products that best represent their lifestyle and make a purchase 
                        decision when they&apos;re ready.
                        </p>
                        <a href="javascript:void(0)" className="ud-main-btn">Learn More</a>
                        </div>
                    </div>
                    <div className="ud-about-image">
                    </div>
                    </div>
                </div>
                </section>
                {/* <section id="pricing" className="ud-pricing">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="ud-section-title mx-auto text-center">
                        <span>Pricing</span>
                        <h2>Our Pricing Plans</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some .
                        </p>
                        </div>
                    </div>
                    </div>

                    <div className="row g-0 align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div
                        className="ud-single-pricing first-item wow fadeInUp"
                        data-wow-delay=".15s"
                        >
                        <div className="ud-pricing-header">
                            <h3>STARTING FROM</h3>
                            <h4>$ 19.99/mo</h4>
                        </div>
                        <div className="ud-pricing-body">
                            <ul>
                            <li>5 User</li>
                            <li>All UI components</li>
                            <li>Lifetime access</li>
                            <li>Free updates</li>
                            <li>Use on 1 (one) project</li>
                            <li>4 Months support</li>
                            </ul>
                        </div>
                        <div className="ud-pricing-footer">
                            <a href="javascript:void(0)" className="ud-main-btn ud-border-btn">
                            Purchase Now
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div
                        className="ud-single-pricing active wow fadeInUp"
                        data-wow-delay=".1s"
                        >
                        <span className="ud-popular-tag">POPULAR</span>
                        <div className="ud-pricing-header">
                            <h3>STARTING FROM</h3>
                            <h4>$ 30.99/mo</h4>
                        </div>
                        <div className="ud-pricing-body">
                            <ul>
                            <li>5 User</li>
                            <li>All UI components</li>
                            <li>Lifetime access</li>
                            <li>Free updates</li>
                            <li>Use on 1 (one) project</li>
                            <li>4 Months support</li>
                            </ul>
                        </div>
                        <div className="ud-pricing-footer">
                            <a href="javascript:void(0)" className="ud-main-btn ud-white-btn">
                            Purchase Now
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div
                        className="ud-single-pricing last-item wow fadeInUp"
                        data-wow-delay=".15s"
                        >
                        <div className="ud-pricing-header">
                            <h3>STARTING FROM</h3>
                            <h4>$ 70.99/mo</h4>
                        </div>
                        <div className="ud-pricing-body">
                            <ul>
                            <li>5 User</li>
                            <li>All UI components</li>
                            <li>Lifetime access</li>
                            <li>Free updates</li>
                            <li>Use on 1 (one) project</li>
                            <li>4 Months support</li>
                            </ul>
                        </div>
                        <div className="ud-pricing-footer">
                            <a href="javascript:void(0)" className="ud-main-btn ud-border-btn">
                            Purchase Now
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}
                {/* <section id="faq" className="ud-faq">
                <div className="shape">
                    <img src="assets/images/faq/shape.svg" alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="ud-section-title text-center mx-auto">
                        <span>FAQ</span>
                        <h2>Any Questions? Answered</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-lg-6">
                        <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                        <div className="accordion">
                            <button
                            className="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            >
                            <span className="icon flex-shrink-0">
                                <i className="lni lni-chevron-down"></i>
                            </span>
                            <span>How to use UIdeck?</span>
                            </button>
                            <div id="collapseOne" className="accordion-collapse collapse">
                            <div className="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                        <div className="accordion">
                            <button
                            className="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            >
                            <span className="icon flex-shrink-0">
                                <i className="lni lni-chevron-down"></i>
                            </span>
                            <span>How to download icons from Lineicons?</span>
                            </button>
                            <div id="collapseTwo" className="accordion-collapse collapse">
                            <div className="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                        <div className="accordion">
                            <button
                            className="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            >
                            <span className="icon flex-shrink-0">
                                <i className="lni lni-chevron-down"></i>
                            </span>
                            <span>Is GrayGrids part of UIdeck?</span>
                            </button>
                            <div id="collapseThree" className="accordion-collapse collapse">
                            <div className="ud-faq-body">
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
                    <div className="col-lg-6">
                        <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                        <div className="accordion">
                            <button
                            className="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            >
                            <span className="icon flex-shrink-0">
                                <i className="lni lni-chevron-down"></i>
                            </span>
                            <span>Can I use this template for commercial project?</span>
                            </button>
                            <div id="collapseFour" className="accordion-collapse collapse">
                            <div className="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                        <div className="accordion">
                            <button
                            className="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            >
                            <span className="icon flex-shrink-0">
                                <i className="lni lni-chevron-down"></i>
                            </span>
                            <span>Do you have plan releasing Play Pro?</span>
                            </button>
                            <div id="collapseFive" className="accordion-collapse collapse">
                            <div className="ud-faq-body">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                        <div className="accordion">
                            <button
                            className="ud-faq-btn collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            >
                            <span className="icon flex-shrink-0">
                                <i className="lni lni-chevron-down"></i>
                            </span>
                            <span>Where and how to host this template?</span>
                            </button>
                            <div id="collapseSix" className="accordion-collapse collapse">
                            <div className="ud-faq-body">
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
                {/* <section id="testimonials" className="ud-testimonials">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="ud-section-title mx-auto text-center">
                        <span>Testimonials</span>
                        <h2>What our Customers Says</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div
                        className="ud-single-testimonial wow fadeInUp"
                        data-wow-delay=".1s"
                        >
                        <div className="ud-testimonial-ratings">
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                        </div>
                        <div className="ud-testimonial-content">
                            <p>
                            “Our members are so impressed. It's intuitive. It's clean.
                            It's distraction free. If you're building a community.
                            </p>
                        </div>
                        <div className="ud-testimonial-info">
                            <div className="ud-testimonial-image">
                            <img
                                src="assets/images/testimonials/author-01.png"
                                alt="author"
                            />
                            </div>
                            <div className="ud-testimonial-meta">
                            <h4>Sabo Masties</h4>
                            <p>Founder @UIdeck</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                        className="ud-single-testimonial wow fadeInUp"
                        data-wow-delay=".15s"
                        >
                        <div className="ud-testimonial-ratings">
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                        </div>
                        <div className="ud-testimonial-content">
                            <p>
                            “Our members are so impressed. It's intuitive. It's clean.
                            It's distraction free. If you're building a community.
                            </p>
                        </div>
                        <div className="ud-testimonial-info">
                            <div className="ud-testimonial-image">
                            <img
                                src="assets/images/testimonials/author-02.png"
                                alt="author"
                            />
                            </div>
                            <div className="ud-testimonial-meta">
                            <h4>Margin Gesmu</h4>
                            <p>Founder @Lineicons</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                        className="ud-single-testimonial wow fadeInUp"
                        data-wow-delay=".2s"
                        >
                        <div className="ud-testimonial-ratings">
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                            <i className="lni lni-star-filled"></i>
                        </div>
                        <div className="ud-testimonial-content">
                            <p>
                            “Our members are so impressed. It's intuitive. It's clean.
                            It's distraction free. If you're building a community.
                            </p>
                        </div>
                        <div className="ud-testimonial-info">
                            <div className="ud-testimonial-image">
                            <img
                                src="assets/images/testimonials/author-03.png"
                                alt="author"
                            />
                            </div>
                            <div className="ud-testimonial-meta">
                            <h4>William Smith</h4>
                            <p>Founder @GrayGrids</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="ud-brands wow fadeInUp" data-wow-delay=".2s">
                        <div className="ud-title">
                            <h6>Trusted and Used by</h6>
                        </div>
                        <div className="ud-brands-logo">
                            <div className="ud-single-logo">
                            <img src="assets/images/brands/ayroui.svg" alt="ayroui" />
                            </div>
                            <div className="ud-single-logo">
                            <img src="assets/images/brands/uideck.svg" alt="uideck" />
                            </div>
                            <div className="ud-single-logo">
                            <img
                                src="assets/images/brands/graygrids.svg"
                                alt="graygrids"
                            />
                            </div>
                            <div className="ud-single-logo">
                            <img
                                src="assets/images/brands/lineicons.svg"
                                alt="lineicons"
                            />
                            </div>
                            <div className="ud-single-logo">
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
                <section id="team" className="ud-team">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="ud-section-title mx-auto text-center">
                        <span>Our Team</span>
                        <h2>Meet The Team</h2>
                        <p>
                            
                        </p>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="ud-single-team wow fadeInUp" data-wow-delay=".1s">
                        {/* <div className="ud-team-image-wrapper">
                            <div className="ud-team-image">
                            <img src="assets/images/team/team-01.png" alt="team" />
                            </div>

                            <img
                            src="assets/images/team/dotted-shape.svg"
                            alt="shape"
                            className="shape shape-1"
                            />
                            <img
                            src="assets/images/team/shape-2.svg"
                            alt="shape"
                            className="shape shape-2"
                            />
                        </div> */}
                        <div className="ud-team-info">
                            <h5>Lorenzo Gonzales</h5>
                            <h6>Co-Founder</h6>
                        </div>
                        <ul className="ud-team-socials">
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-facebook-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-twitter-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-instagram-filled"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="ud-single-team wow fadeInUp" data-wow-delay=".15s">
                        {/* <div className="ud-team-image-wrapper">
                            <div className="ud-team-image">
                            <img src="assets/images/team/team-02.png" alt="team" />
                            </div>

                            <img
                            src="assets/images/team/dotted-shape.svg"
                            alt="shape"
                            className="shape shape-1"
                            />
                            <img
                            src="assets/images/team/shape-2.svg"
                            alt="shape"
                            className="shape shape-2"
                            />
                        </div> */}
                        <div className="ud-team-info">
                            <h5>Ushno Chakraborty</h5>
                            <h6>Head of Technology</h6>
                        </div>
                        <ul className="ud-team-socials">
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-facebook-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-twitter-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-instagram-filled"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="ud-single-team wow fadeInUp" data-wow-delay=".2s">
                        {/* <div className="ud-team-image-wrapper">
                            <div className="ud-team-image">
                            <img src="assets/images/team/team-03.png" alt="team" />
                            </div>

                            <img
                            src="assets/images/team/dotted-shape.svg"
                            alt="shape"
                            className="shape shape-1"
                            />
                            <img
                            src="assets/images/team/shape-2.svg"
                            alt="shape"
                            className="shape shape-2"
                            />
                        </div> */}
                        <div className="ud-team-info">
                            <h5>Sam Lempp</h5>
                            <h6>Lead Developer</h6>
                        </div>
                        <ul className="ud-team-socials">
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-facebook-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-twitter-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-instagram-filled"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
                        {/* <div className="ud-team-image-wrapper">
                            <div className="ud-team-image">
                            <img src="assets/images/team/team-04.png" alt="team" />
                            </div>

                            <img
                            src="assets/images/team/dotted-shape.svg"
                            alt="shape"
                            className="shape shape-1"
                            />
                            <img
                            src="assets/images/team/shape-2.svg"
                            alt="shape"
                            className="shape shape-2"
                            />
                        </div> */}
                        <div className="ud-team-info">
                            <h5>Will Swinyer</h5>
                            <h6>Lead Developer</h6>
                        </div>
                        <ul className="ud-team-socials">
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-facebook-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-twitter-filled"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-instagram-filled"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section id="waitlist" className="ud-contact">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="ud-contact-content-wrapper">
                        <div className="ud-contact-title">
                            <span>WAITLIST</span>
                            <h2>
                            Join the waitlist <br />
                             to be notified when 1kart goes live
                            </h2>
                        </div>
                        <div className="ud-contact-info-wrapper">
                            <div className="ud-single-info">
                            <div className="ud-info-icon">
                                <i className="lni lni-map-marker"></i>
                            </div>
                            <div className="ud-info-meta">
                                <h5>Our Location</h5>
                                <p>204 Short Street, Chapel Hill, North Carolina</p>
                            </div>
                            </div>
                            <div className="ud-single-info">
                            <div className="ud-info-icon">
                                <i className="lni lni-envelope"></i>
                            </div>
                            <div className="ud-info-meta">
                                <h5>How Can We Help?</h5>
                                <p>help@1-kart.com</p>
                                <p>contact@1-kart.com</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div
                        className="ud-contact-form-wrapper wow fadeInUp"
                        data-wow-delay=".2s"
                        >
                        {show && <h3 className="ud-contact-form-title">Sign up for the waitlist</h3>}
                        {!show && <h3 className="ud-contact-form-title">You&apos;re signed up for the waitlist!</h3>}
                        {show && <form className="ud-contact-form">
                            <div className="ud-form-group">
                            <label htmlFor="fullName">Full Name*</label>
                            <input
                                required
                                type="text"
                                name="fullName"
                                placeholder="John Doe"
                                onChange={(e) => setWaitlistForm({...waitlistForm, name: e.target.value})}
                            />
                            </div>
                            <div className="ud-form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="example@yourmail.com"
                                onChange={(e) => setWaitlistForm({...waitlistForm, email: e.target.value})}
                            />
                            </div>
                            <div className="ud-form-group">
                            <label htmlFor="phone">Phone*</label>
                            <input
                                required
                                type="text"
                                name="phone"
                                placeholder="(123) 456-7890"
                                onChange={(e) => setWaitlistForm({...waitlistForm, phone: e.target.value})}
                            />
                            </div>
                            
                            <div className="ud-form-group mb-0">
                            <button type="button" className="ud-main-btn" onClick={async (e)=> await handleSubmitWaitlist(e)}>
                                Sign up
                            </button>
                            </div>
                        </form>}
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
                {/* <div className="shape shape-1">
                    <img src="assets/images/footer/shape-1.svg" alt="shape" />
                </div>
                <div className="shape shape-2">
                    <img src="assets/images/footer/shape-2.svg" alt="shape" />
                </div>
                <div className="shape shape-3">
                    <img src="assets/images/footer/shape-3.svg" alt="shape" />
                </div> */}
                <div className="ud-footer-widgets">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="ud-widget">
                            <a href="index.html" className="ud-footer-logo">
                            {/* <img src="assets/images/logo/logo.svg" alt="logo" /> */}
                            </a>
                            <p className="ud-widget-desc">
                            We enhance the digital e-commerce experience for both customers and merchants.
                            </p>
                            <ul className="ud-widget-socials">
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-facebook-filled"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-twitter-filled"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-instagram-filled"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i className="lni lni-linkedin-original"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                        <div className="ud-widget">
                            <h5 className="ud-widget-title">About Us</h5>
                            <ul className="ud-widget-links">
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
                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div className="ud-widget">
                            <h5 className="ud-widget-title">Features</h5>
                            <ul className="ud-widget-links">
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
                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        {/* <div className="ud-widget">
                            <h5 className="ud-widget-title">Our Products</h5>
                            <ul className="ud-widget-links">
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
                        <div className="col-xl-3 col-lg-6 col-md-8 col-sm-10">
                        {/* <div className="ud-widget">
                            <h5 className="ud-widget-title">Partners</h5>
                            <ul className="ud-widget-brands">
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
                <div className="ud-footer-bottom">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                        <ul className="ud-footer-bottom-left">
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
                        <div className="col-md-4">
                        {/* <p className="ud-footer-bottom-right">
                            Designed and Developed by
                            <a href="https://uideck.com" rel="nofollow">UIdeck</a>
                        </p> */}
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
                <a href="javascript:void(0)" className="back-to-top">
                <i className="lni lni-chevron-up"> </i>
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