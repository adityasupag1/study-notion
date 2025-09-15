import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#000814] text-[#F1F2FF] flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-11/12 max-w-[1160px] mx-auto py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-6">
          Empower Your Learning Journey with StudyNotion
        </h1>
        <p className="text-lg mb-8 max-w-3xl text-[#AFB2BF]">
          StudyNotion is a centralized platform that simplifies the learning process 
          by providing tools for note-taking, collaboration, and progress tracking.
        </p>
        <div className="flex gap-4">
          <Link to="/signup">
            <button className="bg-[#FFD60A] text-[#000814] py-2 px-6 rounded-lg font-medium hover:opacity-90 transition-all">
              Get Started
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-[#161D29] border border-[#2C333F] text-[#F1F2FF] py-2 px-6 rounded-lg font-medium hover:bg-[#2C333F] transition-all">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-[#161d2929] py-16">
        <div className="w-11/12 max-w-[1160px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2C333F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#161D29] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Organized Notes</h3>
              <p className="text-[#AFB2BF]">Create, organize, and access your notes from anywhere with our intuitive interface.</p>
            </div>
            
            <div className="bg-[#2C333F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#161D29] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborate Easily</h3>
              <p className="text-[#AFB2BF]">Share notes and study materials with classmates and work together in real-time.</p>
            </div>
            
            <div className="bg-[#2C333F] p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#161D29] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-[#AFB2BF]">Monitor your learning journey with detailed analytics and achievement tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-11/12 max-w-[1160px] mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#2C333F] rounded-full flex items-center justify-center text-[#FFD60A] font-bold mr-4">AJ</div>
              <div>
                <h4 className="font-semibold">Alex Johnson</h4>
                <p className="text-[#999DAA]">Computer Science Student</p>
              </div>
            </div>
            <p className="text-[#AFB2BF]">"StudyNotion has completely transformed how I organize my lecture notes. I've improved my grades significantly since I started using it!"</p>
          </div>
          
          <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#2C333F] rounded-full flex items-center justify-center text-[#FFD60A] font-bold mr-4">MR</div>
              <div>
                <h4 className="font-semibold">Maria Rodriguez</h4>
                <p className="text-[#999DAA]">Medical Student</p>
              </div>
            </div>
            <p className="text-[#AFB2BF]">"The collaboration features are amazing. My study group uses StudyNotion to share resources and it's made our sessions so much more productive."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#161d2929] py-16">
        <div className="w-11/12 max-w-[1160px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Study Habits?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-[#AFB2BF]">Join thousands of students who are already using StudyNotion to ace their exams.</p>
          <Link to="/signup">
            <button className="bg-[#FFD60A] text-[#000814] py-2 px-8 rounded-lg font-semibold hover:opacity-90 transition-all">
              Create Your Account Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;