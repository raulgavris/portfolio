import React from 'react'

const navItems = [
  { section: '/home', label: 'Home' },
  { section: '/about', label: 'About' },
  { section: '/portfolio', label: 'Portfolio' },
  { section: '/contact', label: 'Contact' },
]

const TimelineNavigation: React.FC<TimelineNavigationProps> = ({
  activeSection,
  onCircleClick,
}) => (
  <div className="fixed right-0 top-1/4 z-50 mr-4 mt-4">
    <div className="flex flex-col items-center gap-0 gap-0">
      {navItems.map(({ section, label }, index) => (
        <React.Fragment key={section}>
          <button
            key={section}
            className="mousehover"
            onClick={() => onCircleClick(section)}
          >
            <div className="group">
              <div
                className={`h-5 w-5 rounded-full transition-all duration-300 hover:bg-teal ${
                  activeSection === section ? 'bg-teal' : 'bg-offWhite'
                }`}
              />
              <span className="absolute -ml-20 -mt-6 hidden h-6 w-16 rounded-md bg-darkGray px-2 py-1 text-xs text-teal shadow-basic drop-shadow-basic group-hover:block">
                {label}
              </span>
            </div>
          </button>
          {index !== navItems.length - 1 && (
            <span className="h-3 w-0.5 bg-lightGray" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
)

export default TimelineNavigation
