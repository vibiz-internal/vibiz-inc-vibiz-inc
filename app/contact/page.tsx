"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                Vibiz
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/#features" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                  Features
                </Link>
                <Link href="/#pricing" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/#about" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-slate-900 px-3 py-2 text-sm font-medium border-b-2 border-indigo-600">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium rounded-lg transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Contact Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                Have questions about Vibiz? Want to see a demo? We'd love to hear from you. 
                Our team is here to help you transform your conversations into high-converting funnels.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      📧
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Email Support</h3>
                    <p className="mt-1 text-slate-600">
                      Get help from our support team
                    </p>
                    <p className="mt-1 text-indigo-600 font-medium">support@vibizinc.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      💼
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Sales & Partnerships</h3>
                    <p className="mt-1 text-slate-600">
                      Discuss enterprise solutions and partnerships
                    </p>
                    <p className="mt-1 text-indigo-600 font-medium">sales@vibizinc.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      🚀
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Quick Response</h3>
                    <p className="mt-1 text-slate-600">
                      We typically respond within 2-4 hours during business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      🌍
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Global Support</h3>
                    <p className="mt-1 text-slate-600">
                      Supporting businesses worldwide, 24/7 technical support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request Demo</option>
                    <option value="enterprise">Enterprise Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Tell us about your needs, questions, or how we can help..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-600">
                  Need immediate help?{' '}
                  <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Start your free trial
                  </Link>{' '}
                  and get instant access to our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Quick answers to common questions about Vibiz Inc.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                How does the AI conversation-to-funnel technology work?
              </h3>
              <p className="text-slate-600">
                Our AI analyzes your conversation about your business, customers, and goals. It extracts key information about pain points, solutions, target audience, and value propositions, then generates optimized landing pages, ad copy, and email sequences tailored to your specific needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                What makes Vibiz different from other funnel builders?
              </h3>
              <p className="text-slate-600">
                Unlike traditional drag-and-drop builders that require design skills and time, Vibiz transforms natural conversations into complete marketing funnels. You simply talk to our AI about your business, and it creates everything for you - no templates, no complex interfaces, just conversation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                Can I customize the generated funnels?
              </h3>
              <p className="text-slate-600">
                Absolutely! While our AI creates optimized funnels automatically, you have full control to customize colors, fonts, images, copy, and layout. You can also have follow-up conversations with the AI to refine and improve your funnels.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                What integrations do you support?
              </h3>
              <p className="text-slate-600">
                We integrate with major email marketing platforms, CRMs, payment processors, and advertising networks. Popular integrations include Mailchimp, HubSpot, Stripe, PayPal, Google Ads, Facebook Ads, and many more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}