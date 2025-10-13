import React from "react";

export default function Footer() {
  const backgroundImagePath = "/bg2.png";

  return (
    <footer
      className="relative w-full px-6 sm:px-12 lg:px-16 py-10 bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImagePath})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let’s Connect!
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, creative
            projects, and innovative design challenges. Feel free to reach out
            through any of the channels below.
          </p>
        </div>

        {/* Links & Contact Info - Balanced */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#resume"
                className="text-gray-300 hover:text-white underline transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex justify-start md:justify-end">
            <div className="space-y-4">
              <h3 className="text-white text-xl font-semibold mb-5">Contact</h3>

              {/* Phone */}
              <div className="flex items-center gap-3 text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>9111070564</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>shristimittal026@gmail.com</span>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-gray-300">
                <span className="font-medium mb-2 sm:mb-0">Follow:</span>
                <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 hover:bg-blue-700 flex items-center justify-center rounded transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>

                  {/* Behance */}
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-500 hover:bg-blue-600 flex items-center justify-center rounded transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zM6.466 20H0V5h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/40 pt-8">
          <p className="text-gray-300 text-sm text-center">
            © 2024 Shristi Mittal. Designed With Passion For Exceptional User
            Experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
