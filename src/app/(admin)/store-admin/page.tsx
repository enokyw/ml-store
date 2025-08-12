'use client';

import React from 'react';
import { ChevronRightIcon, HomeIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface MainContentProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  isMobile: boolean;
  isTablet: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ 
  sidebarOpen, 
  onToggleSidebar, 
  isMobile, 
  isTablet 
}) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header with Breadcrumbs */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-sm">
            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={onToggleSidebar}
                className="mr-3 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors lg:hidden"
              >
                <Bars3Icon className="w-5 h-5" />
              </button>
            )}
            
            <HomeIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <ChevronRightIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-800 transition-colors truncate">
              Building Your Application
            </span>
            <ChevronRightIcon className="w-4 h-4 text-gray-400 flex-shrink-0 hidden sm:block" />
            <span className="text-gray-900 font-medium truncate hidden sm:block">Data Fetching</span>
          </nav>
          
          {/* Additional header actions could go here */}
          <div className="flex items-center space-x-2">
            {/* Placeholder for user actions, notifications, etc. */}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
            <div className="text-center py-8 sm:py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Data Fetching</h1>
              <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm sm:text-base px-4">
                This is your main content area. Start building your application features here.
              </p>
              
              {/* Sample Content Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 rounded-lg border border-blue-200 hover:shadow-md transition-shadow duration-200">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                    <HomeIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Getting Started</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Begin your journey with our comprehensive documentation and guides.</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 rounded-lg border border-green-200 hover:shadow-md transition-shadow duration-200">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                    <HomeIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">API Integration</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Learn how to integrate with our powerful APIs and services.</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-4 sm:p-6 rounded-lg border border-purple-200 hover:shadow-md transition-shadow duration-200 sm:col-span-2 lg:col-span-1">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                    <HomeIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Best Practices</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Discover the best practices for building scalable applications.</p>
                </div>
              </div>

              {/* Additional responsive content */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-md transition-all duration-150">
                      Create New Project
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-md transition-all duration-150">
                      Import Data
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-md transition-all duration-150">
                      View Analytics
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Project deployed successfully</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">New team member added</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Database backup completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContent;