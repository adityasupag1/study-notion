import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#000814] text-[#F1F2FF] flex flex-col items-center">
      {/* Header Section */}
      <section className="w-11/12 max-w-[1160px] mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">About StudyNotion</h1>
        <p className="text-lg text-[#AFB2BF] text-center max-w-3xl mx-auto">
          StudyNotion is an innovative ed-tech platform designed to revolutionize the way students learn, 
          collaborate, and succeed in their academic journey. We combine cutting-edge technology with 
          educational expertise to create a seamless learning experience.
        </p>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-[#161d2929] py-16">
        <div className="w-11/12 max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-[#AFB2BF] mb-6">
                Our mission is to democratize quality education by providing accessible, affordable, 
                and engaging learning tools to students worldwide. We believe that every student deserves 
                the opportunity to excel academically.
              </p>
              <p className="text-lg text-[#AFB2BF]">
                Through our platform, we aim to break down barriers to education and create a global 
                community of learners who support and inspire each other.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-64 bg-[#2C333F] rounded-lg flex items-center justify-center">
                <svg className="w-20 h-20 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-11/12 max-w-[1160px] mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F] text-center">
            <div className="w-24 h-24 bg-[#2C333F] rounded-full flex items-center justify-center text-[#FFD60A] font-bold text-2xl mx-auto mb-4">JD</div>
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-[#999DAA] mb-4">Founder & CEO</p>
            <p className="text-[#AFB2BF]">Education technology enthusiast with 10+ years of experience in ed-tech startups.</p>
          </div>
          
          <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F] text-center">
            <div className="w-24 h-24 bg-[#2C333F] rounded-full flex items-center justify-center text-[#FFD60A] font-bold text-2xl mx-auto mb-4">AS</div>
            <h3 className="text-xl font-semibold mb-2">Alice Smith</h3>
            <p className="text-[#999DAA] mb-4">Chief Learning Officer</p>
            <p className="text-[#AFB2BF]">Former professor with a passion for creating engaging learning experiences.</p>
          </div>
          
          <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F] text-center">
            <div className="w-24 h-24 bg-[#2C333F] rounded-full flex items-center justify-center text-[#FFD60A] font-bold text-2xl mx-auto mb-4">RJ</div>
            <h3 className="text-xl font-semibold mb-2">Robert Johnson</h3>
            <p className="text-[#999DAA] mb-4">Lead Developer</p>
            <p className="text-[#AFB2BF]">Full-stack developer specializing in creating intuitive educational platforms.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-[#161d2929] py-16">
        <div className="w-11/12 max-w-[1160px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2C333F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#161D29] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-[#AFB2BF]">We believe that learning is a social activity and that students achieve more when they work together.</p>
            </div>
            
            <div className="bg-[#2C333F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#161D29] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-[#AFB2BF]">We continuously explore new technologies and methodologies to enhance the learning experience.</p>
            </div>
            
            <div className="bg-[#2C333F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#161D29] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-[#AFB2BF]">We strive to make quality education accessible to everyone, regardless of their background or location.</p>
            </div>
            
            <div className="bg-[#2C333F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#161D29] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-[#AFB2BF]">We are committed to maintaining the highest standards in educational content and platform performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-11/12 max-w-[1160px] mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#161D29] p-6 rounded-lg text-center border border-[#2C333F]">
            <div className="text-3xl font-bold text-[#FFD60A] mb-2">50K+</div>
            <p className="text-[#AFB2BF]">Active Users</p>
          </div>
          <div className="bg-[#161D29] p-6 rounded-lg text-center border border-[#2C333F]">
            <div className="text-3xl font-bold text-[#FFD60A] mb-2">120+</div>
            <p className="text-[#AFB2BF]">Countries</p>
          </div>
          <div className="bg-[#161D29] p-6 rounded-lg text-center border border-[#2C333F]">
            <div className="text-3xl font-bold text-[#FFD60A] mb-2">95%</div>
            <p className="text-[#AFB2BF]">Satisfaction Rate</p>
          </div>
          <div className="bg-[#161D29] p-6 rounded-lg text-center border border-[#2C333F]">
            <div className="text-3xl font-bold text-[#FFD60A] mb-2">2021</div>
            <p className="text-[#AFB2BF]">Founded</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#161d2929] py-16">
        <div className="w-11/12 max-w-[1160px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-[#AFB2BF]">
            Become part of a growing community of learners who are transforming their educational experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <button className="bg-[#FFD60A] text-[#000814] py-2 px-8 rounded-lg font-semibold hover:opacity-90 transition-all">
                Sign Up Now
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-[#2C333F] border border-[#2C333F] text-[#F1F2FF] py-2 px-8 rounded-lg font-semibold hover:bg-[#161D29] transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
			
    </div>
  );
};

export default About;