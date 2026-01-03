/**
 * =============================================================================
 * KYAN SIMPSON - PORTFOLIO HOMEPAGE
 * =============================================================================
 * 
 * This is your main portfolio page. It's organized into clear sections that
 * you can easily modify with an AI assistant.
 * 
 * HOW TO EDIT THIS FILE:
 * -----------------------
 * Simply tell your AI assistant things like:
 * - "Add a new experience at Goldman Sachs"
 * - "Update my bio to mention my new internship"
 * - "Add a new project I worked on"
 * - "Change my LinkedIn URL"
 * 
 * SECTIONS IN THIS FILE:
 * 1. Profile Photo & Name (top of the page)
 * 2. Bio/Introduction (your personal pitch)
 * 3. Experience (jobs and internships)
 * 4. Education (schools and degrees)
 * 5. Activities & Interests (clubs, sports, hobbies)
 * 6. Now Section (what you're currently focused on)
 * 7. Connect Section (contact information)
 * 
 * =============================================================================
 */

"use client";

import { useEffect } from "react";
import ExternalLinkIcon from "@/components/ExternalLinkIcon";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Animation setup - no need to modify this
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el, index) => {
      const htmlElement = el as HTMLElement;
      const stagger = htmlElement.getAttribute('style')?.match(/--stagger:(\d+)/)?.[1] || index;
      htmlElement.style.setProperty('--stagger', stagger.toString());
    });
  }, []);

  return (
    <>
      <div className="blur" aria-hidden="true"></div>
      <main>
        <div className="main-grid">
          <article data-animation-controller="true">
            
            {/* ============================================================
                SECTION 1: PROFILE PHOTO & NAME
                ============================================================
                To change the profile photo:
                1. Add your new photo to the /public folder
                2. Update the src path below (e.g., "/your-photo.jpg")
                
                To change your name, simply edit the text in the <h1> tag
            */}
            <div className="prose">
              {/* Profile Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/kyan.png" 
                alt="Kyan Simpson" 
                className="profile-photo"
                data-animate="" 
                style={{ "--stagger": 0 } as React.CSSProperties}
              />
              
              {/* Your Name */}
              <h1 data-animate="" style={{ "--stagger": 1 } as React.CSSProperties}>
                Kyan Simpson
              </h1>
              
              {/* ============================================================
                  SECTION 2: BIO / INTRODUCTION
                  ============================================================
                  This is your elevator pitch. Keep it concise but impactful.
                  Use <em> tags for italic emphasis on key phrases.
                  
                  To edit: Just change the text between the <p> tags
              */}
              <p data-animate="" style={{ "--stagger": 2 } as React.CSSProperties}>
                <em>Driven by numbers</em>. Mathematics and Economics student at Amherst College 
                with hands-on experience in investment banking and private equity across New York and beyond.
              </p>
              <p data-animate="" style={{ "--stagger": 3 } as React.CSSProperties}>
                Honorary Academic Scholar from Harrow School with straight A* grades in Maths, Economics, and Physics. 
                Passionate about financial markets, development economics, and building a career in finance.
              </p>
            </div>

            {/* ============================================================
                SECTIONS 3-5: EXPERIENCE, EDUCATION & ACTIVITIES
                ============================================================
                These are displayed in a 3-column grid on desktop.
                
                STRUCTURE OF EACH ITEM:
                <div className="item-block">
                  <a href="URL">Company/School Name <ExternalLinkIcon /></a>
                  <p>Role and brief description</p>
                </div>
                
                TO ADD A NEW ITEM: Copy an existing item-block and modify it
                TO REMOVE AN ITEM: Delete the entire <div className="item-block">...</div>
                TO ADD A LINK: Use <a href="https://...">Text <ExternalLinkIcon /></a>
                TO REMOVE A LINK: Use <a>Text</a> (no href)
            */}
            <div className="scroller" data-animate="" style={{ "--stagger": 4 } as React.CSSProperties}>
              <div className="stack">
                
                {/* ---------- EXPERIENCE COLUMN ---------- */}
                <div className="column">
                  <h2>Experience</h2>
                  
                  {/* Experience Item 1 */}
                  <div className="item-block">
                    <a href="https://www.broadhavencapital.com/" rel="noopener" target="_blank">
                      Broadhaven Capital Partners
                      <ExternalLinkIcon />
                    </a>
                    <p>Incoming 2026 Investment Banking Summer Analyst. New York.</p>
                  </div>
                  
                  {/* Experience Item 2 */}
                  <div className="item-block">
                    <a href="https://www.middleground.com/" rel="noopener" target="_blank">
                      MiddleGround Capital
                      <ExternalLinkIcon />
                    </a>
                    <p>Summer 2025 Private Equity Analyst. New York.</p>
                  </div>
                  
                  {/* Experience Item 3 */}
                  <div className="item-block">
                    <a href="https://shoalsgrowthpartners.com/" rel="noopener" target="_blank">
                      Shoals Growth Partners
                      <ExternalLinkIcon />
                    </a>
                    <p>Private Equity Analyst. Remote. Sep - Dec 2024.</p>
                  </div>
                  
                  {/* Experience Item 4 */}
                  <div className="item-block">
                    <a>Rebellion Research</a>
                    <p>Economic Research Analyst. Feb - Aug 2024.</p>
                  </div>
                </div>

                {/* ---------- EDUCATION COLUMN ---------- */}
                <div className="column">
                  <h2>Education</h2>
                  
                  {/* Education Item 1 */}
                  <div className="item-block">
                    <a href="https://www.amherst.edu/" rel="noopener" target="_blank">
                      Amherst College
                      <ExternalLinkIcon />
                    </a>
                    <p>BA Mathematics & Economics. Class of 2027. Math Peer Tutor.</p>
                  </div>
                  
                  {/* Education Item 2 */}
                  <div className="item-block">
                    <a href="https://www.harrowschool.org.uk/" rel="noopener" target="_blank">
                      Harrow School
                      <ExternalLinkIcon />
                    </a>
                    <p>A-Levels: Maths (A*), Economics (A*), Physics (A*), Geography (A). Honorary Academic Scholar.</p>
                  </div>
                  
                  {/* Education Item 3 */}
                  <div className="item-block">
                    <a>Reddam House Berkshire</a>
                    <p>11 A*s at GCSE. Academic Scholar. UKMT Maths Challenge &apos;Best in School&apos;. 2017-2021.</p>
                  </div>
                </div>

                {/* ---------- ACTIVITIES & MORE COLUMN ---------- */}
                <div className="column">
                  <h2>Activities & More</h2>
                  
                  {/* Football Item 1 - Reading FC */}
                  <div className="item-block">
                    <a href="https://www.readingfc.co.uk/" rel="noopener" target="_blank">
                      Reading FC Academy
                      <ExternalLinkIcon />
                    </a>
                    <p>Category 1 Academy (highest UK level). Captain of Premier League Cup team. 2014-2019.</p>
                  </div>
                  
                  {/* Football Item 2 - Achievements */}
                  <div className="item-block">
                    <a>Football Achievements</a>
                    <p>Winner of Iber Cup tournaments. Top scorer at Harrow School. 196 career goals, 148 assists.</p>
                  </div>
                  
                  {/* Activity Item 3 */}
                  <div className="item-block">
                    <a>Scholars of Finance</a>
                    <p>Member at Amherst College. Club Rugby and Club Soccer.</p>
                  </div>
                  
                  {/* Activity Item 4 */}
                  <div className="item-block">
                    <a>Leadership & Awards</a>
                    <p>Head of Harrow Afro-Caribbean Society. NCH Economics Essay Prize. Silver Duke of Edinburgh.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================
                SECTION 6: NOW
                ============================================================
                What you're currently focused on. Update this regularly to
                keep your site feeling fresh and current.
            */}
            <div className="prose" data-animate="" style={{ "--stagger": 5 } as React.CSSProperties}>
              <h2>Now</h2>
              <p>
                Currently in my junior year at Amherst College, diving deep into 
                <em> development economics and financial globalization</em>. Taking courses that bridge 
                quantitative analysis with real-world economic policy.
              </p>
              <p>
                Preparing for my upcoming summer at MiddleGround Capital in New York, 
                where I&apos;ll be gaining hands-on private equity experience. Looking forward to 
                applying classroom knowledge to live deal analysis.
              </p>
              <p>
                Outside academics, staying active with club rugby and soccer, and continuing 
                to mentor peers in mathematics. Always eager to connect with professionals 
                in finance and learn from their experiences.
              </p>
            </div>

            {/* ============================================================
                SECTION 7: CONNECT
                ============================================================
                Your contact information. Update the LinkedIn URL and email.
                
                TO ADD MORE LINKS: Copy the <a> tag pattern
                Example: <a href="https://twitter.com/yourhandle">Twitter</a>
            */}
            <div className="prose" data-animate="" style={{ "--stagger": 6 } as React.CSSProperties}>
              <h2>Connect</h2>
              <p>
                Reach me at{" "}
                <a href="https://www.linkedin.com/in/kyan-simpson-893094236/" rel="noopener" target="_blank">
                  LinkedIn
                </a>{" "}
                or <a href="mailto:ksimpson27@amherst.edu">ksimpson27@amherst.edu</a>.
              </p>
            </div>
            
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
