import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample data for demonstration
  const courses = [
    { id: 1, title: "Web Development Fundamentals", progress: 75, nextLesson: "CSS Flexbox", dueDate: "2023-06-15" },
    { id: 2, title: "JavaScript Mastery", progress: 42, nextLesson: "Async Programming", dueDate: "2023-06-20" },
    { id: 3, title: "React & Redux", progress: 20, nextLesson: "State Management", dueDate: "2023-06-25" },
  ];

  const upcomingTasks = [
    { id: 1, title: "Complete Assignment 3", course: "Web Development", due: "Tomorrow" },
    { id: 2, title: "Watch Lesson 5", course: "JavaScript Mastery", due: "2 days" },
    { id: 3, title: "Quiz: React Basics", course: "React & Redux", due: "3 days" },
  ];

  const recentActivity = [
    { id: 1, action: "Completed", item: "Lesson 4: HTML Semantics", time: "2 hours ago" },
    { id: 2, action: "Submitted", item: "Assignment 2", time: "1 day ago" },
    { id: 3, action: "Started", item: "JavaScript Functions", time: "2 days ago" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#000814] text-[#F1F2FF]">
      {/* Header */}
      <div className="w-11/12 max-w-[1160px] mx-auto py-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-[#AFB2BF]">Welcome back! Here's your learning progress.</p>
      </div>

      {/* Dashboard Tabs */}
      <div className="w-11/12 max-w-[1160px] mx-auto mb-8">
        <div className="flex border-b border-[#2C333F]">
          <button
            className={`py-3 px-6 font-medium ${activeTab === "overview" ? "text-[#FFD60A] border-b-2 border-[#FFD60A]" : "text-[#AFB2BF] hover:text-[#F1F2FF]"}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`py-3 px-6 font-medium ${activeTab === "courses" ? "text-[#FFD60A] border-b-2 border-[#FFD60A]" : "text-[#AFB2BF] hover:text-[#F1F2FF]"}`}
            onClick={() => setActiveTab("courses")}
          >
            My Courses
          </button>
          <button
            className={`py-3 px-6 font-medium ${activeTab === "progress" ? "text-[#FFD60A] border-b-2 border-[#FFD60A]" : "text-[#AFB2BF] hover:text-[#F1F2FF]"}`}
            onClick={() => setActiveTab("progress")}
          >
            Progress
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="w-11/12 max-w-[1160px] mx-auto">
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Stats Cards */}
            <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2C333F] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#AFB2BF]">Enrolled Courses</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </div>

            <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2C333F] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#AFB2BF]">Completed Lessons</p>
                  <p className="text-2xl font-bold">42</p>
                </div>
              </div>
            </div>

            <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2C333F] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#FFD60A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#AFB2BF]">Study Hours</p>
                  <p className="text-2xl font-bold">36</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Courses/Progress */}
          <div className="lg:col-span-2">
            {activeTab === "overview" && (
              <>
                <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
                <div className="space-y-4">
                  {courses.map(course => (
                    <div key={course.id} className="bg-[#161D29] p-4 rounded-lg border border-[#2C333F]">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium">{course.title}</h3>
                        <span className="text-sm text-[#AFB2BF]">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-[#2C333F] rounded-full h-2 mb-3">
                        <div 
                          className="bg-[#FFD60A] h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-[#AFB2BF]">
                        <span>Next: {course.nextLesson}</span>
                        <span>Due: {course.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "courses" && (
              <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
                <h2 className="text-xl font-semibold mb-6">All Your Courses</h2>
                <div className="space-y-4">
                  {courses.map(course => (
                    <div key={course.id} className="flex items-center justify-between p-4 bg-[#2C333F] rounded-lg">
                      <div>
                        <h3 className="font-medium">{course.title}</h3>
                        <p className="text-sm text-[#AFB2BF]">{course.progress}% Complete</p>
                      </div>
                      <button className="bg-[#FFD60A] text-[#000814] py-1 px-4 rounded text-sm font-medium hover:opacity-90">
                        Continue
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "progress" && (
              <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
                <h2 className="text-xl font-semibold mb-6">Your Learning Progress</h2>
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Overall Completion</h3>
                  <div className="w-full bg-[#2C333F] rounded-full h-4">
                    <div className="bg-[#FFD60A] h-4 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-right text-sm text-[#AFB2BF] mt-1">45% Complete</p>
                </div>
                
                <div className="space-y-4">
                  {courses.map(course => (
                    <div key={course.id}>
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">{course.title}</h3>
                        <span className="text-sm text-[#AFB2BF]">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-[#2C333F] rounded-full h-2 mb-4">
                        <div 
                          className="bg-[#FFD60A] h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
              <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
              <div className="space-y-4">
                {upcomingTasks.map(task => (
                  <div key={task.id} className="flex items-start">
                    <div className="w-3 h-3 bg-[#FFD60A] rounded-full mt-1.5 mr-3"></div>
                    <div>
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-[#AFB2BF]">{task.course} • Due in {task.due}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-center text-[#FFD60A] hover:bg-[#2C333F] rounded-lg">
                View All Tasks
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex">
                    <div className="w-2 h-2 bg-[#FFD60A] rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium">{activity.action}: {activity.item}</p>
                      <p className="text-sm text-[#AFB2BF]">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#161D29] p-6 rounded-lg border border-[#2C333F]">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full py-2 bg-[#2C333F] hover:bg-[#3a4250] rounded-lg text-sm font-medium">
                  Add New Note
                </button>
                <button className="w-full py-2 bg-[#2C333F] hover:bg-[#3a4250] rounded-lg text-sm font-medium">
                  Join Study Group
                </button>
                <button className="w-full py-2 bg-[#2C333F] hover:bg-[#3a4250] rounded-lg text-sm font-medium">
                  Schedule Study Time
                </button>
                <button className="w-full py-2 bg-[#FFD60A] text-[#000814] hover:opacity-90 rounded-lg text-sm font-medium">
                  Explore New Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;