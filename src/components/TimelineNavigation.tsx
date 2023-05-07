// components/TimelineNavigation.tsx
import React from 'react'

interface TimelineNavigationProps {
  activeSection: string | null
  onCircleClick: (section: string) => void
}

const TimelineNavigation: React.FC<TimelineNavigationProps> = ({
  activeSection,
  onCircleClick,
}) => {
  return (
    <div className="fixed right-0 top-1/2 z-50 mr-4 mt-4">
      <div className="flex flex-col items-center space-x-0 space-y-0">
        <button onClick={() => onCircleClick('/home')}>
          <div className="group">
            <div
              className={`h-5 w-5 rounded-full ${
                activeSection === '/home' ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
            <span className="absolute -ml-14 -mt-6 hidden rounded-md bg-gray-700 px-2 py-1 text-xs text-white group-hover:block">
              Home
            </span>
          </div>
        </button>
        <span className="h-3 w-0.5 bg-gray-300"></span>
        <button onClick={() => onCircleClick('/about')}>
          <div className="group">
            <div
              className={`h-5 w-5 rounded-full ${
                activeSection === '/about' ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
            <span className="absolute -ml-14 -mt-6 hidden rounded-md bg-gray-700 px-2 py-1 text-xs text-white group-hover:block">
              About
            </span>
          </div>
        </button>
        <span className="h-3 w-0.5 bg-gray-300"></span>
        <button onClick={() => onCircleClick('/portfolio')}>
          <div className="group">
            <div
              className={`h-5 w-5 rounded-full ${
                activeSection === '/portfolio' ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
            <span className="absolute -ml-14 -mt-6 hidden rounded-md bg-gray-700 px-2 py-1 text-xs text-white group-hover:block">
              Portfolio
            </span>
          </div>
        </button>
        <span className="h-3 w-0.5 bg-gray-300"></span>
        <button onClick={() => onCircleClick('/contact')}>
          <div className="group">
            <div
              className={`h-5 w-5 rounded-full ${
                activeSection === '/contact' ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
            <span className="absolute -ml-14 -mt-6 hidden rounded-md bg-gray-700 px-2 py-1 text-xs text-white group-hover:block">
              Contact
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default TimelineNavigation
