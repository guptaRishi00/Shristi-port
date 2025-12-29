import React from "react";

export default function Footer() {
  const backgroundImagePath = "/bg2.png";

  return (
    <footer
      // Added py-16 to ensure top/bottom spacing on mobile
      className="relative w-full px-6 py-16 sm:px-12 lg:p-20 bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImagePath})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Heading Section */}
        <div className="text-center space-y-4">
          {/* Adjusted text size: 3xl mobile -> 5xl tablet -> 6xl desktop */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Let’s Connect!
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, creative
            projects, and innovative design challenges. Feel free to reach out
            through any of the channels below.
          </p>
        </div>

        {/* Links & Contact Info */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8">
          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold mb-4">
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
              <h3 className="text-white text-xl font-semibold mb-2">Contact</h3>

              {/* Phone */}
              <div className="flex items-center gap-3 text-gray-300">
                {/* Added shrink-0 to prevent icon squishing */}
                <svg
                  className="shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7134 19.9971C13.2699 19.9441 9.18207 19.3798 4.9012 15.0999C0.620304 10.82 0.0559144 6.73309 0.00280124 5.28995C-0.0781407 3.09114 1.60661 0.954701 3.55364 0.120462C4.0105 -0.0752961 4.56386 -0.0394716 5.00131 0.279544C6.60291 1.44754 7.70949 3.21347 8.65945 4.60289C9.08861 5.23054 8.98603 6.08749 8.40311 6.59198L6.44854 8.04326C6.25481 8.18708 6.19039 8.44847 6.30659 8.65989C6.74881 9.46472 7.53666 10.6623 8.43817 11.5637C9.34075 12.466 10.5953 13.3045 11.4556 13.7964C11.6787 13.924 11.9592 13.8501 12.1003 13.6353L13.3718 11.6989C13.8594 11.0501 14.77 10.9084 15.4318 11.3664C16.8418 12.342 18.4865 13.4284 19.6908 14.9703C20.0329 15.4084 20.0838 15.9812 19.8797 16.4574C19.0415 18.4129 16.9201 20.0784 14.7134 19.9971Z"
                    fill="white"
                  />
                </svg>
                <span>9111070564</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-gray-300">
                <svg
                  className="shrink-0"
                  width="16"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0V3L12 9L24 3V0H0ZM0 6V18H24V6L12 12L0 6Z"
                    fill="white"
                  />
                </svg>
                {/* break-all ensures long emails don't break layout on tiny screens */}
                <span className="break-all">shristimittal026@gmail.com</span>
              </div>

              {/* Social Links */}
              {/* Changed layout to row on all screens for cleaner alignment */}
              <div className="flex flex-row items-center gap-3 text-gray-300">
                <span className="font-medium">Follow</span>
                <div className="flex gap-3 flex-wrap">
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
        <div className="border-t border-white/30 pt-6">
          <p className="text-gray-300 text-sm text-center">
            © 2024 Shristi Mittal. Designed With Passion For Exceptional User
            Experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
