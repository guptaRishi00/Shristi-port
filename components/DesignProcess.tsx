import React from 'react';

export default function DesignProcess() {
  const processSteps = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Research & Discovery',
      description: 'Deep dive into user needs, business goals, and market research to understand the problem space.',
      items: [
        'User interviews',
        'Competitive analysis',
        'Stakeholder workshops',
        'Requirements gathering'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Ideation & Strategy',
      description: 'Generate creative solutions and define the design strategy based on research insights.',
      items: [
        'Design thinking workshops',
        'User journey mapping',
        'Information architecture',
        'Solution prioritization'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: 'Design & Prototype',
      description: 'Create high-fidelity designs and interactive prototypes to visualize the final product.',
      items: [
        'Wireframing',
        'Visual design',
        'Interactive prototyping',
        'Design system creation'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Test & Iterate',
      description: 'Validate designs through user testing and iterate based on feedback and data.',
      items: [
        'Usability testing',
        'A/B testing',
        'Feedback analysis',
        'Design refinement'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Launch & Monitor',
      description: 'Support development during implementation and monitor post-launch performance.',
      items: [
        'Development handoff',
        'Quality assurance',
        'Performance monitoring',
        'Post-launch optimization'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Collaborate & Scale',
      description: 'Work with teams to ensure design consistency and plan for future iterations.',
      items: [
        'Team training',
        'Design system maintenance',
        'Knowledge sharing',
        'Continuous improvement'
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-8 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
          My Design Process
        </h2>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-transparent border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-colors duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Items List */}
              <ul className="space-y-2">
                {step.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-300 text-sm flex items-start"
                  >
                    <span className="text-white mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}