// --- VIEWS ---

const HomeView = () => `
    <div class="page-enter">
        <section class="hero" style="background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url('https://commons.wikimedia.org/wiki/Special:FilePath/Source_of_the_Nile_Bridge_profile.jpg') center/cover fixed;">
            <div class="hero-content container">
                <div class="hero-badge"><i class="fa-solid fa-location-dot"></i> Jinja, Uganda</div>
                <h1>A <span style="color: var(--accent-teal);">Knowledge & Innovation</span> Hub on the Nile.</h1>
                <p>Empowering communities through digital skills, creativity, and collaboration. We are building the future of Eastern Uganda, right by the river.</p>
                <div class="hero-buttons">
                    <a href="#/programs" class="btn btn-primary" data-link>Explore Programs</a>
                    <a href="#/innovation-lab" class="btn btn-glass" data-link>Visit the Hub <i class="fa-solid fa-arrow-right" style="margin-left: 10px;"></i></a>
                </div>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 100px; background: linear-gradient(to top, var(--bg-light), transparent);"></div>
        </section>

        <section class="section-padding container">
            <div class="split-section">
                <div class="split-content">
                    <h2 class="text-gradient">More than a library.</h2>
                    <p>We are transforming from a traditional library into a dynamic, next-generation innovation and learning ecosystem. Jinja Public Library is where youth empowerment meets community development.</p>
                    <p>We provide not only access to books, but a collaborative space for digital skills, co-working, and startup incubation right on the shores of the Nile.</p>
                    <br>
                    <a href="#/about" class="btn btn-primary" data-link>Read Our Story</a>
                </div>
                <div class="split-image">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" alt="Modern Library Computers and Books Space">
                </div>
            </div>
        </section>

        <section class="section-padding" style="background: linear-gradient(rgba(240, 249, 255, 0.85), rgba(240, 249, 255, 0.95)), url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1920') center/cover fixed; border-top: 1px solid #E0F2FE; border-bottom: 1px solid #E0F2FE;">
            <div class="container">
                <div class="section-header">
                    <h2>Our <span class="text-gradient">Core Pillars</span></h2>
                    <p>Discover the areas where we drive impact and youth development across the region.</p>
                </div>
                
                <!-- Bento Box Grid -->
                <div class="bento-grid">
                    <!-- Large Item -->
                    <div class="bento-item">
                        <div class="bento-icon"><i class="fa-solid fa-laptop-code"></i></div>
                        <h3>Innovation & Digital Skills</h3>
                        <p>Our Innovation Lab offers cutting-edge digital skills training, coding bootcamps, and youth employability programs to prepare you for the tech-driven future.</p>
                    </div>
                    
                    <!-- Normal Item -->
                    <div class="bento-item">
                        <div class="bento-icon"><i class="fa-solid fa-book-open"></i></div>
                        <h3>Knowledge Centre</h3>
                        <p>Access quiet reading spaces, research materials, and comprehensive academic support.</p>
                    </div>
                    
                    <!-- Tall Item -->
                    <div class="bento-item">
                        <div class="bento-icon"><i class="fa-solid fa-microphone"></i></div>
                        <h3>Dialogue & Community</h3>
                        <p>Home of the Nile Debate League. A central hub for youth dialogue, intellectual development, public speaking, and community forums.</p>
                    </div>
                    
                    <!-- Normal Item -->
                    <div class="bento-item">
                        <div class="bento-icon"><i class="fa-solid fa-people-group"></i></div>
                        <h3>Collaboration & Co-Working</h3>
                        <p>Premium shared workspaces designed for youth collaboration, startup development, and creative idea incubation. High-speed internet and modern amenities included.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-padding container">
            <div class="section-header">
                <h2>Our <span class="text-gradient">Impact</span></h2>
                <p>Transforming Eastern Uganda one mind at a time.</p>
            </div>
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>5k+</h3>
                    <p>Youth Engaged</p>
                </div>
                <div class="stat-card">
                    <h3>120+</h3>
                    <p>Programs Delivered</p>
                </div>
                <div class="stat-card">
                    <h3>50+</h3>
                    <p>Community Partners</p>
                </div>
                <div class="stat-card">
                    <h3>10+</h3>
                    <p>Startups Incubated</p>
                </div>
            </div>
        </section>

        <section class="section-padding text-center" style="margin-bottom: 50px; background: url('https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&q=80&w=1920') center/cover fixed;">
            <div class="container">
                <div style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(15px); border: var(--glass-border); border-radius: 40px; padding: 100px 40px; box-shadow: 0 20px 50px rgba(0,0,0,0.1);">
                    <h2 style="font-size: 3.5rem; margin-bottom: 20px;">Flow with the Nile. <span class="text-gradient">Grow with Us.</span></h2>
                    <p style="max-width: 600px; margin: 0 auto 40px; font-size: 1.3rem; color: var(--text-main);">Just as the river Nile has been a source of life and connection, our hub is a continuous flow of ideas, creativity, and opportunity.</p>
                    <a href="#/get-involved" class="btn btn-primary" data-link>Partner With Us</a>
                </div>
            </div>
        </section>
    </div>
`;

const AboutView = () => `
    <div class="page-enter">
        <!-- Hero Banner: Beautiful Nile aerial image -->
        <section class="hero-about">
            <div class="container">
                <div class="hero-badge"><i class="fa-solid fa-book"></i> Our Story</div>
                <h1 style="font-size: 4.5rem; color: #fff; text-shadow: 0 4px 15px rgba(0,0,0,0.4); margin-bottom: 20px;">About <span style="color: var(--accent-teal);">Jinja Public Library</span></h1>
                <p style="font-size: 1.3rem; color: rgba(255,255,255,0.95); max-width: 650px; margin: 0 auto; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">From a traditional repository of books to a vibrant ecosystem of innovation and digital empowerment.</p>
            </div>
        </section>

        <!-- Stats Bar -->
        <section style="background: var(--primary-blue); padding: 50px 0;">
            <div class="container stats-grid">
                <div class="stat-card" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);">
                    <h3 style="color: var(--accent-teal);">5k+</h3>
                    <p style="color: #fff;">Youth Engaged</p>
                </div>
                <div class="stat-card" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);">
                    <h3 style="color: var(--accent-teal);">120+</h3>
                    <p style="color: #fff;">Programs Delivered</p>
                </div>
                <div class="stat-card" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);">
                    <h3 style="color: var(--accent-teal);">50+</h3>
                    <p style="color: #fff;">Community Partners</p>
                </div>
                <div class="stat-card" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);">
                    <h3 style="color: var(--accent-teal);">10+</h3>
                    <p style="color: #fff;">Startups Incubated</p>
                </div>
            </div>
        </section>

        <!-- Legacy Section -->
        <section class="section-padding container">
            <div class="split-section" style="margin-bottom: 120px;">
                <div class="split-image">
                    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800" alt="Library books and history">
                </div>
                <div class="split-content">
                    <div class="hero-badge" style="animation: none; margin-bottom: 20px;"><i class="fa-solid fa-landmark"></i> Our Heritage</div>
                    <h2 class="text-gradient-gold" style="font-size: 3rem;">A Legacy of Knowledge</h2>
                    <p>Jinja Public Library has stood as a pillar of learning in the Central Division of Jinja for decades. As a government-affiliated institution under the National Library of Uganda, it provided crucial information services and book access to students and the public.</p>
                    <p>Despite past challenges with infrastructure and resources, the library remained a beacon of hope for many seeking education and a better future.</p>
                </div>
            </div>
            <div class="split-section">
                <div class="split-content">
                    <div class="hero-badge" style="animation: none; margin-bottom: 20px;"><i class="fa-solid fa-rocket"></i> The Future</div>
                    <h2 class="text-gradient" style="font-size: 3rem;">The Next Generation Hub</h2>
                    <p>Today, we are repositioning Jinja Public Library as Eastern Uganda's premier Innovation and Digital Skills Hub — a dynamic space where youth empowerment and community development intersect.</p>
                    <p><strong style="color: var(--primary-blue);">Our Vision:</strong> To be the catalyst for youth empowerment, fostering a culture of innovation, digital literacy, and collaboration on the shores of the Nile.</p>
                    <p><strong style="color: var(--primary-blue);">Our Mission:</strong> To provide inclusive access to knowledge, cutting-edge digital tools, and mentorship, empowering the youth of Eastern Uganda to innovate and solve local challenges.</p>
                    <br>
                    <a href="#/get-involved" class="btn btn-primary" data-link>Join Our Mission</a>
                </div>
                <div class="split-image">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Youth collaboration and teamwork">
                </div>
            </div>
        </section>

        <!-- Call to action: River Nile background -->
        <section class="section-padding text-center" style="background: linear-gradient(rgba(0,71,171,0.6), rgba(0,71,171,0.75)), url('https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&q=80&w=1920') center/cover fixed; padding: 100px 0;">
            <div class="container">
                <h2 style="font-size: 3rem; color: #fff; margin-bottom: 20px;">Be Part of the Transformation</h2>
                <p style="color: rgba(255,255,255,0.9); font-size: 1.2rem; max-width: 600px; margin: 0 auto 40px;">Explore our programs, visit the Innovation Lab, or partner with us to build the future of Eastern Uganda.</p>
                <a href="#/programs" class="btn btn-accent" data-link>View Our Programs</a>
            </div>
        </section>
    </div>
`;

const ProgramsView = () => `
    <div class="page-enter">
        <!-- Hero Banner: Students studying / tech learning image -->
        <section style="min-height: 55vh; display: flex; align-items: center; justify-content: center; text-align: center; padding-top: 130px; padding-bottom: 80px; background: linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920') center/cover fixed; position: relative;">
            <div class="container">
                <div class="hero-badge"><i class="fa-solid fa-graduation-cap"></i> What We Offer</div>
                <h1 style="font-size: 4.5rem; color: #fff; text-shadow: 0 4px 15px rgba(0,0,0,0.4); margin-bottom: 20px;">Our <span style="color: var(--accent-teal);">Programs</span></h1>
                <p style="font-size: 1.3rem; color: rgba(255,255,255,0.95); max-width: 650px; margin: 0 auto; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">Comprehensive initiatives designed to upskill, educate, and empower the youth of Jinja.</p>
            </div>
        </section>

        <section class="section-padding container">
            <div class="card-grid">
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600');">
                        <span class="card-tag">Knowledge</span>
                    </div>
                    <div class="card-content">
                        <h3>Knowledge & Learning</h3>
                        <p>Traditional and digital access to resources, reading clubs, and academic support for students. Build your foundation with us.</p>
                        <a href="#/get-involved" class="btn btn-primary" style="align-self: flex-start; margin-top: auto;" data-link>Learn More</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600');">
                        <span class="card-tag" style="background: var(--accent-teal); color: #fff;">Tech</span>
                    </div>
                    <div class="card-content">
                        <h3>Digital Skills & Innovation</h3>
                        <p>Coding bootcamps, digital literacy courses, and future-ready tech training in our state-of-the-art Innovation Lab.</p>
                        <a href="#/innovation-lab" class="btn btn-primary" style="align-self: flex-start; margin-top: auto;" data-link>Explore Lab</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img" style="background-image: url('/debate.JPG');">
                        <span class="card-tag" style="background: var(--accent-gold); color: #fff;">Debate</span>
                    </div>
                    <div class="card-content">
                        <h3>Nile Debate League</h3>
                        <p>Our flagship youth development program focusing on public speaking, critical thinking, and intellectual dialogue for youth across the region.</p>
                        <a href="#/nile-debate-league" class="btn btn-primary" style="align-self: flex-start; margin-top: auto;" data-link>Learn More</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600');">
                        <span class="card-tag">Community</span>
                    </div>
                    <div class="card-content">
                        <h3>Collaboration & Co-working</h3>
                        <p>Open spaces for youth startups, entrepreneurs, and freelancers to build ideas together with high-speed internet and modern amenities.</p>
                        <a href="#/get-involved" class="btn btn-primary" style="align-self: flex-start; margin-top: auto;" data-link>Learn More</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="section-padding text-center" style="background: #F0F9FF; border-top: 1px solid #E0F2FE;">
            <div class="container">
                <h2 style="font-size: 2.8rem; margin-bottom: 20px;">Ready to <span class="text-gradient">Get Started?</span></h2>
                <p style="color: var(--text-muted); font-size: 1.2rem; max-width: 550px; margin: 0 auto 40px;">Apply for any of our programs or visit us in person at Jinja Public Library.</p>
                <a href="#/get-involved" class="btn btn-primary" data-link>Apply Now</a>
            </div>
        </section>
    </div>
`;



const InnovationLabView = () => `
    <div class="page-enter">
        <!-- Full-screen Hero -->
        <section style="min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding-top: 100px; background: linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920') center/cover fixed; position: relative;">
            <div class="container">
                <div class="hero-badge"><i class="fa-solid fa-flask"></i> Open 24/7 for Members</div>
                <h1 style="font-size: 5rem; color: #fff; text-shadow: 0 8px 30px rgba(0,0,0,0.3); margin-bottom: 20px;">The <span style="color: var(--accent-teal);">Innovation Lab</span></h1>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.9); max-width: 700px; margin: 0 auto 40px; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">Where ideas become reality. A dedicated space for creativity, experimentation, and future-ready digital skills at Jinja Public Library.</p>
                <a href="#/get-involved" class="btn btn-accent" data-link>Join the Lab</a>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 120px; background: linear-gradient(to top, var(--bg-light), transparent);"></div>
        </section>

        <!-- Features bento -->
        <section class="section-padding container">
            <div class="section-header">
                <h2>What We <span class="text-gradient">Offer</span></h2>
                <p>The Innovation Lab is the core of our transformation. We provide everything you need to build the future.</p>
            </div>
            <div class="bento-grid text-left">
                <div class="bento-item">
                    <div class="bento-icon"><i class="fa-solid fa-lightbulb"></i></div>
                    <h3>Idea Incubation</h3>
                    <p>Got a startup idea? Use our lab to research, develop, and test your prototypes with peer and mentor feedback.</p>
                </div>
                <div class="bento-item">
                    <div class="bento-icon"><i class="fa-solid fa-code"></i></div>
                    <h3>Future-Ready Skills</h3>
                    <p>Participate in workshops covering web development, data analysis, UI/UX, and digital marketing.</p>
                </div>
                <div class="bento-item">
                    <div class="bento-icon"><i class="fa-solid fa-wifi"></i></div>
                    <h3>High-Speed Internet</h3>
                    <p>Stay connected with fast, reliable internet access for research, remote work, and online learning.</p>
                </div>
                <div class="bento-item">
                    <div class="bento-icon"><i class="fa-solid fa-network-wired"></i></div>
                    <h3>Networking</h3>
                    <p>Connect with ambitious youths, mentors, and potential investors in our vibrant collaborative space.</p>
                </div>
            </div>
        </section>

        <!-- CTA Banner -->
        <section class="section-padding text-center" style="background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&q=80&w=1920') center/cover fixed;">
            <div class="container">
                <div class="hero-badge" style="background: var(--accent-gold); color: #000; border: none; margin-bottom: 20px;"><i class="fa-solid fa-id-card"></i> ACCESS ALL AREAS</div>
                <h2 style="font-size: 3.5rem; color: #fff; margin-bottom: 20px;">Join the <span style="color: var(--accent-teal);">Lab Ecosystem.</span></h2>
                <p style="color: rgba(255,255,255,0.85); font-size: 1.3rem; max-width: 650px; margin: 0 auto 40px;">Become an official member of the Jinja Innovation Lab. Get priority access to co-working spaces, 24/7 internet, high-end workstations, and exclusive tech masterclasses.</p>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                    <a href="#/get-involved" class="btn btn-accent" style="padding: 20px 50px; font-size: 1.2rem;" data-link>Apply for Membership</a>
                    <a href="#/contact" class="btn btn-glass" style="padding: 20px 50px; font-size: 1.2rem;" data-link>Schedule a Tour</a>
                </div>
                <p style="margin-top: 30px; color: rgba(255,255,255,0.5); font-size: 0.9rem;"><i class="fa-brands fa-whatsapp"></i> Instant application processing via WhatsApp</p>
            </div>
        </section>
    </div>
`;

const EventsView = () => `
    <div class="page-enter">
        <section style="min-height: 55vh; display: flex; align-items: center; justify-content: center; text-align: center; padding-top: 130px; padding-bottom: 80px; background: linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1920') center/cover fixed;">
            <div class="container">
                <div class="hero-badge"><i class="fa-solid fa-calendar-star"></i> What's On</div>
                <h1 style="font-size: 4.5rem; color: #fff; text-shadow: 0 8px 30px rgba(0,0,0,0.3); margin-bottom: 20px;">Events & <span style="color: var(--accent-teal);">Activities</span></h1>
                <p style="font-size: 1.3rem; color: rgba(255,255,255,0.9); max-width: 650px; margin: 0 auto; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">Join us for workshops, trainings, debates, and community dialogues right on the Nile.</p>
            </div>
        </section>

        <section class="section-padding container">
            <div class="section-header">
                <h2>Upcoming <span class="text-gradient">Events</span></h2>
                <p>Don't miss what's coming up at Jinja Public Library.</p>
            </div>
            <div class="card-grid">
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1544144433-d50aff500b91?auto=format&fit=crop&q=80&w=600');">
                        <span class="card-tag" style="background: var(--accent-teal); color: #fff;">Workshop</span>
                    </div>
                    <div class="card-content">
                        <div class="hero-badge" style="background: var(--accent-gold); color: #000; padding: 4px 12px; margin-bottom: 10px; font-size: 0.7rem;">EDITION 1</div>
                        <h3>Intro to Web Development</h3>
                        <p style="color: var(--primary-blue); font-weight: 600; margin-bottom: 10px;"><i class="fa-regular fa-calendar"></i> June 15, 2026 &nbsp;|&nbsp; 10:00 AM</p>
                        <p>Learn the basics of HTML, CSS, and JavaScript in our hands-on bootcamp inside the Innovation Lab.</p>
                        <a href="#/get-involved" class="btn btn-primary" style="margin-top: auto; align-self: flex-start;" data-link>Register Now</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img" style="background-image: url('/debate.JPG');">
                        <span class="card-tag" style="background: var(--accent-gold); color: #fff;">Debate</span>
                    </div>
                    <div class="card-content">
                        <div class="hero-badge" style="background: var(--accent-gold); color: #000; padding: 4px 12px; margin-bottom: 10px; font-size: 0.7rem;">EDITION 1</div>
                        <h3>Nile Debate League: Regional Finals</h3>
                        <p style="color: var(--primary-blue); font-weight: 600; margin-bottom: 10px;"><i class="fa-regular fa-calendar"></i> July 22, 2026 &nbsp;|&nbsp; 2:00 PM</p>
                        <p>Watch top high school students from Jinja debate critical regional issues in our main hall.</p>
                        <a href="#/nile-debate-league" class="btn btn-primary" style="margin-top: auto; align-self: flex-start;" data-link>Get Details</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600');">
                        <span class="card-tag" style="background: var(--primary-blue); color: #fff;">Training</span>
                    </div>
                    <div class="card-content">
                        <div class="hero-badge" style="background: var(--accent-gold); color: #000; padding: 4px 12px; margin-bottom: 10px; font-size: 0.7rem;">EDITION 1</div>
                        <h3>Digital Marketing Masterclass</h3>
                        <p style="color: var(--primary-blue); font-weight: 600; margin-bottom: 10px;"><i class="fa-regular fa-calendar"></i> August 5, 2026 &nbsp;|&nbsp; 9:00 AM</p>
                        <p>A full-day intensive on social media strategy, content creation, and online brand building for youth entrepreneurs.</p>
                        <a href="#/get-involved" class="btn btn-primary" style="margin-top: auto; align-self: flex-start;" data-link>Register Now</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;

const GetInvolvedView = () => `
    <div class="page-enter">
        <section style="min-height: 55vh; display: flex; align-items: center; justify-content: center; text-align: center; padding-top: 130px; padding-bottom: 80px; background: linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1920') center/cover fixed;">
            <div class="container">
                <div class="hero-badge"><i class="fa-solid fa-handshake"></i> Partner With Us</div>
                <h1 style="font-size: 4.5rem; color: #fff; text-shadow: 0 8px 30px rgba(0,0,0,0.3); margin-bottom: 20px;">Get <span style="color: var(--accent-teal);">Involved</span></h1>
                <p style="font-size: 1.3rem; color: rgba(255,255,255,0.9); max-width: 650px; margin: 0 auto; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">We are building an ecosystem. Join us as a partner, volunteer, or member of the Jinja community hub.</p>
            </div>
        </section>

        <section class="section-padding container">
            <div class="split-section">
                <div class="split-content">
                    <div class="hero-badge" style="animation: none; margin-bottom: 20px;"><i class="fa-solid fa-lightbulb"></i> Ways to Help</div>
                    <h2 class="text-gradient" style="font-size: 3rem;">Support Youth Innovation</h2>
                    <p>Whether you are an organization looking to partner, an expert wanting to mentor, or a student wanting to join our programs, there is a place for you here.</p>
                    <ul style="margin-top: 30px; display: flex; flex-direction: column; gap: 20px;">
                        <li style="display: flex; gap: 15px; font-size: 1.1rem; align-items: center;">
                            <div class="bento-icon" style="width: 48px; height: 48px; font-size: 18px; margin: 0; flex-shrink: 0;"><i class="fa-solid fa-handshake"></i></div>
                            <div><strong style="color: var(--primary-blue);">Partner with us</strong> — sponsor programs or provide tech resources.</div>
                        </li>
                        <li style="display: flex; gap: 15px; font-size: 1.1rem; align-items: center;">
                            <div class="bento-icon" style="width: 48px; height: 48px; font-size: 18px; margin: 0; flex-shrink: 0;"><i class="fa-solid fa-chalkboard-user"></i></div>
                            <div><strong style="color: var(--primary-blue);">Volunteer</strong> — mentor the next generation in the Innovation Lab.</div>
                        </li>
                        <li style="display: flex; gap: 15px; font-size: 1.1rem; align-items: center;">
                            <div class="bento-icon" style="width: 48px; height: 48px; font-size: 18px; margin: 0; flex-shrink: 0;"><i class="fa-solid fa-user-plus"></i></div>
                            <div><strong style="color: var(--primary-blue);">Join</strong> — co-working space, debate league, or digital programs.</div>
                        </li>
                    </ul>
                </div>
                <div style="background: #F0F9FF; border: 1px solid #E0F2FE; border-radius: 32px; padding: 50px; box-shadow: 0 10px 40px rgba(0,0,0,0.05);">
                    <div id="registration-form-container">
                        <h3 style="font-size: 2rem; margin-bottom: 10px;">Submit an Inquiry</h3>
                        <p style="color: var(--text-muted); margin-bottom: 30px;">We'll get back to you within 48 hours.</p>
                        <form id="registration-form" onsubmit="event.preventDefault(); window.handleFormSubmit('registration-form')">
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" placeholder="Your Full Name" required>
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" class="form-control" placeholder="Your Email Address" required>
                            </div>
                            <div class="form-group">
                                <select name="interest" class="form-control" required>
                                    <option value="" disabled selected>I want to...</option>
                                    <option value="partner">Partner / Sponsor</option>
                                    <option value="volunteer">Volunteer / Mentor</option>
                                    <option value="lab-membership">Apply for Innovation Lab Membership</option>
                                    <option value="join">Join a Program</option>
                                    <option value="debate">Register for Nile Debate League</option>
                                    <option value="donate">Donate Resources</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea name="message" class="form-control" rows="4" placeholder="Tell us more about your interest..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.1rem; padding: 18px;">Send Application <i class="fa-solid fa-paper-plane" style="margin-left: 10px;"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;

const ContactView = () => `
    <div class="page-enter">
        <section style="min-height: 50vh; display: flex; align-items: center; justify-content: center; text-align: center; padding-top: 130px; padding-bottom: 80px; background: linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('https://commons.wikimedia.org/wiki/Special:FilePath/Source_of_the_Nile_Bridge_profile.jpg') center/cover fixed;">
            <div class="container">
                <div class="hero-badge"><i class="fa-solid fa-envelope"></i> Reach Out</div>
                <h1 style="font-size: 4.5rem; color: #fff; text-shadow: 0 8px 30px rgba(0,0,0,0.3); margin-bottom: 20px;">Contact <span style="color: var(--accent-teal);">Us</span></h1>
                <p style="font-size: 1.3rem; color: rgba(255,255,255,0.9); max-width: 650px; margin: 0 auto; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">We'd love to hear from you. Visit us in Jinja or reach out online — we are always open.</p>
            </div>
        </section>

        <section class="section-padding container">
            <div class="split-section" style="gap: 80px;">
                <div style="flex: 1;">
                    <div class="hero-badge" style="animation: none; margin-bottom: 30px;"><i class="fa-solid fa-location-dot"></i> Find Us</div>
                    <h2 class="text-gradient" style="font-size: 3rem; margin-bottom: 30px;">Get In Touch</h2>
                    
                    <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 40px;">
                        <div style="display: flex; gap: 20px; align-items: center; background: #fff; border-radius: 20px; padding: 20px; border: 1px solid #E2E8F0; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                            <div class="bento-icon" style="margin: 0; flex-shrink: 0; background: var(--primary-blue); color: #fff;"><i class="fa-solid fa-location-dot"></i></div>
                            <div>
                                <h4 style="font-size: 1.1rem; margin-bottom: 4px;">Location</h4>
                                <p style="color: var(--text-muted);">Central Division, Jinja, Uganda</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 20px; align-items: center; background: #fff; border-radius: 20px; padding: 20px; border: 1px solid #E2E8F0; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                            <div class="bento-icon" style="margin: 0; flex-shrink: 0; background: var(--accent-teal); color: #fff;"><i class="fa-solid fa-phone"></i></div>
                            <div>
                                <h4 style="font-size: 1.1rem; margin-bottom: 4px;">Phone / WhatsApp</h4>
                                <p style="color: var(--text-muted);">+256 772 645 710<br>+250 795 616 222</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 20px; align-items: center; background: #fff; border-radius: 20px; padding: 20px; border: 1px solid #E2E8F0; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                            <div class="bento-icon" style="margin: 0; flex-shrink: 0; background: var(--accent-gold); color: #fff;"><i class="fa-solid fa-envelope"></i></div>
                            <div>
                                <h4 style="font-size: 1.1rem; margin-bottom: 4px;">Email</h4>
                                <p style="color: var(--text-muted);">hello@jinjapubliclibrary.ug</p>
                            </div>
                        </div>
                    </div>

                    <!-- Map Image Placeholder -->
                    <div style="width: 100%; height: 300px; background: linear-gradient(rgba(0,71,171,0.1), rgba(0,71,171,0.2)), url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800') center/cover; border-radius: 32px; border: 1px solid #E2E8F0;"></div>
                </div>

                <div style="flex: 1; background: #fff; border: 1px solid #E2E8F0; border-radius: 32px; padding: 50px; box-shadow: 0 20px 50px rgba(0,0,0,0.05);">
                    <div id="contact-form-container">
                        <h3 style="font-size: 2rem; margin-bottom: 10px;">Direct Message</h3>
                        <p style="color: var(--text-muted); margin-bottom: 30px;">Send us a quick message for any general inquiries.</p>
                        <form id="contact-form" onsubmit="event.preventDefault(); window.handleFormSubmit('contact-form')">
                            <div class="form-group">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-main);">Full Name</label>
                                <input type="text" name="name" class="form-control" placeholder="John Doe" required>
                            </div>
                            <div class="form-group">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-main);">Email Address</label>
                                <input type="email" name="email" class="form-control" placeholder="john@example.com" required>
                            </div>
                            <div class="form-group">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-main);">Message Topic</label>
                                <input type="text" name="subject" class="form-control" placeholder="General Inquiry" required>
                            </div>
                            <div class="form-group">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-main);">Message</label>
                                <textarea name="message" class="form-control" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.1rem; padding: 18px;">Send Message <i class="fa-solid fa-paper-plane" style="margin-left: 10px;"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;

// --- FORM HANDLING ---
window.handleFormSubmit = (formId) => {
    const container = document.getElementById(formId + '-container');
    const form = document.getElementById(formId);
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Lead Distribution: Randomly select between the two provided numbers
    const coordinators = ['256772645710', '250795616222'];
    const whatsappNumber = coordinators[Math.floor(Math.random() * coordinators.length)]; 
    
    let message = `Hello Jinja Public Library!%0A%0A`;
    message += `*Name:* ${data.name}%0A`;
    message += `*Email:* ${data.email}%0A`;
    
    if (data.interest) message += `*Interest:* ${data.interest}%0A`;
    if (data.subject) message += `*Subject:* ${data.subject}%0A`;
    
    message += `%0A*Message:*%0A${data.message}`;

    const waUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Simulate loading state
    const btn = form.querySelector('button');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Opening WhatsApp...';

    // Open WhatsApp after a brief delay
    setTimeout(() => {
        window.open(waUrl, '_blank');
        
        container.innerHTML = `
            <div class="page-enter text-center" style="padding: 40px 20px;">
                <div class="bento-icon" style="width: 80px; height: 80px; font-size: 32px; background: var(--accent-teal); color: #fff; margin: 0 auto 30px; animation: bounce 1s infinite alternate;">
                    <i class="fa-solid fa-check"></i>
                </div>
                <h3 style="font-size: 2.2rem; margin-bottom: 15px;">Success!</h3>
                <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 30px;">Your message has been prepared for WhatsApp. If it didn't open automatically, please check your browser's popup blocker.</p>
                <button class="btn btn-primary" onclick="location.reload()">Send Another Message</button>
            </div>
        `;
    }, 1000);
};

const NileDebateView = () => `
    <div class="page-enter">
        <section style="min-height: 85vh; display: flex; align-items: center; justify-content: center; text-align: center; padding-top: 130px; padding-bottom: 80px; background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/debate.JPG') center/cover fixed; position: relative; overflow: hidden;">
            <div class="container" style="position: relative; z-index: 2;">
                <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 30px;">
                    <div class="hero-badge" style="background: var(--accent-gold); border: none; color: #000; font-weight: 800; transform: rotate(-2deg);"><i class="fa-solid fa-star"></i> THE PIONEER EDITION</div>
                    <div class="hero-badge" style="background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.4);"><i class="fa-solid fa-bolt"></i> NOW LAUNCHING</div>
                </div>
                <h1 style="font-size: 5.5rem; color: #fff; text-shadow: 0 10px 40px rgba(0,0,0,0.5); margin-bottom: 20px; line-height: 1.1;">Edition 1: The <span style="color: var(--accent-teal);">Intellectual</span> Frontier.</h1>
                <p style="font-size: 1.6rem; color: rgba(255,255,255,0.95); max-width: 850px; margin: 0 auto 40px; text-shadow: 0 2px 15px rgba(0,0,0,0.4); font-weight: 500;">Nile Debate Society Edition 1 is officially here. We are calling the first 30 schools to pioneer a movement that will redefine innovation in Jinja City.</p>
                <div class="hero-buttons">
                    <a href="#/get-involved" class="btn btn-accent" style="padding: 18px 40px; font-size: 1.2rem; transform: scale(1.05);" data-link>Register Your School</a>
                    <a href="#nile-movement" class="btn btn-glass" style="padding: 18px 40px; font-size: 1.2rem;">Join the Movement</a>
                </div>
            </div>
            <!-- Decorative Elements -->
            <div style="position: absolute; bottom: -50px; left: -50px; width: 300px; height: 300px; background: var(--accent-teal); filter: blur(150px); opacity: 0.3;"></div>
            <div style="position: absolute; top: -50px; right: -50px; width: 300px; height: 300px; background: var(--accent-gold); filter: blur(150px); opacity: 0.2;"></div>
        </section>

        <!-- The Movement -->
        <section id="nile-movement" class="section-padding container">
            <div class="text-center" style="margin-bottom: 80px;">
                <div class="hero-badge" style="animation: none; margin-bottom: 20px;"><i class="fa-solid fa-trophy"></i> BEYOND WORDS</div>
                <h2 class="text-gradient" style="font-size: 3.5rem;">Debate Reimagined</h2>
                <p style="max-width: 700px; margin: 0 auto; font-size: 1.2rem;">We are shifting from memorized speeches to <strong>Applied Comparative Action Debates (ACAD)</strong>. Our students don't just talk about problems — they design systems to solve them.</p>
            </div>

            <div class="card-grid">
                <div class="card" style="border: none; background: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.05);">
                    <div class="card-content">
                        <div class="bento-icon" style="background: linear-gradient(135deg, var(--primary-blue), #0077FF); color: #fff;"><i class="fa-solid fa-brain"></i></div>
                        <h3>Critical Thinking</h3>
                        <p>Mastering the art of systems analysis and logical reasoning in a fast-paced environment.</p>
                    </div>
                </div>
                <div class="card" style="border: none; background: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.05);">
                    <div class="card-content">
                        <div class="bento-icon" style="background: linear-gradient(135deg, var(--accent-teal), #00BFA5); color: #fff;"><i class="fa-solid fa-lightbulb"></i></div>
                        <h3>Innovation Mindset</h3>
                        <p>Turning intellectual dialogue into practical SME models and policy designs.</p>
                    </div>
                </div>
                <div class="card" style="border: none; background: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.05);">
                    <div class="card-content">
                        <div class="bento-icon" style="background: linear-gradient(135deg, var(--accent-gold), #FFB000); color: #fff;"><i class="fa-solid fa-users-gear"></i></div>
                        <h3>Leadership</h3>
                        <p>Empowering the next generation of Jinja’s leaders through structured public defense of ideas.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- The Journey -->
        <section class="section-padding" style="background: #0F172A; color: #fff; position: relative; overflow: hidden;">
            <div class="container">
                <div class="section-header">
                    <h2 style="color: #fff; font-size: 3.5rem;">Edition 1: The <span style="color: var(--accent-teal);">Road to Victory</span></h2>
                    <p style="color: rgba(255,255,255,0.7); font-size: 1.2rem;">The inaugural journey from school training masterclasses to the Grand Championship Finals.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 60px;">
                    <div style="background: rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); position: relative;">
                        <span style="font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.05); position: absolute; top: 10px; right: 20px;">01</span>
                        <h4 style="color: var(--accent-teal); margin-bottom: 15px; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 2px;">Onboarding</h4>
                        <p>Schools across Jinja City join the movement and form their elite debate societies.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); position: relative;">
                        <span style="font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.05); position: absolute; top: 10px; right: 20px;">02</span>
                        <h4 style="color: var(--accent-teal); margin-bottom: 15px; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 2px;">Masterclasses</h4>
                        <p>Intensive training at the Library Hub on ACAD methodology and systems thinking.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); position: relative;">
                        <span style="font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.05); position: absolute; top: 10px; right: 20px;">03</span>
                        <h4 style="color: var(--accent-gold); margin-bottom: 15px; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 2px;">Tournament</h4>
                        <p>High-stakes inter-school competitions leading to the grand city finals.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); position: relative; border-color: var(--accent-teal);">
                        <span style="font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.05); position: absolute; top: 10px; right: 20px;">04</span>
                        <h4 style="color: #fff; margin-bottom: 15px; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 2px;">Innovation Bootcamp</h4>
                        <p>The top 5 teams enter an exclusive incubator to turn their winning ideas into reality.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Edition 1 Focus: Full Width Split -->
        <section style="display: flex; align-items: stretch; min-height: 600px; background: #fff; overflow: hidden; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0;">
            <div style="flex: 1; position: relative; min-height: 500px;">
                <img src="https://www.tuyambe.org/wp-content/uploads/2018/03/povety-uganda-870x580.jpg" alt="Poverty Challenge" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="flex: 1; display: flex; align-items: center; padding: 80px 10%; background: #fff;">
                <div style="max-width: 600px;">
                    <div class="hero-badge" style="animation: none; margin-bottom: 20px; background: var(--primary-blue); color: #fff;"><i class="fa-solid fa-earth-africa"></i> EDITION 1 CHALLENGE</div>
                    <h2 class="text-gradient" style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 25px;">Poverty Beyond <span style="color: var(--accent-teal);">Governance</span></h2>
                    <p style="font-size: 1.2rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 30px;">We are tackling <strong>SDG 1: No Poverty</strong>. Students will dive deep into industrial labor systems, skills mismatches, and urban inequality to design the solutions Jinja needs.</p>
                    <div style="display: flex; gap: 40px;">
                        <div style="text-align: center;">
                            <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary-blue);">30+</div>
                            <div style="color: var(--text-muted); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Schools</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-teal);">240+</div>
                            <div style="color: var(--text-muted); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Debaters</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Winners Bootcamp -->
        <section class="section-padding" style="background: #0F172A; color: #fff;">
            <div class="container">
                <div class="section-header">
                    <div class="hero-badge" style="background: var(--accent-gold); color: #000; border: none;"><i class="fa-solid fa-crown"></i> THE ELITE PATH</div>
                    <h2 style="color: #fff;">Winners <span style="color: var(--accent-teal);">Bootcamp</span></h2>
                    <p style="color: rgba(255,255,255,0.7); font-size: 1.3rem; max-width: 800px; margin: 0 auto;"><strong>From Victim to Champion.</strong> The top 5 teams don't just win a trophy — they enter a powerhouse incubator to become formidable founders and changemakers.</p>
                </div>
                <div class="card-grid" style="grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); margin-top: 60px;">
                    <div style="position: relative; border-radius: 30px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.3); height: 500px; border: 1px solid rgba(255,255,255,0.1);">
                        <img src="2.jpg" alt="Mentorship" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 40px; background: linear-gradient(transparent, rgba(0,0,0,0.9));">
                            <h4 style="color: var(--accent-teal); font-size: 1.5rem; margin-bottom: 10px;">World-Class Mentorship</h4>
                            <p style="color: rgba(255,255,255,0.8);">Connecting students with industry titans and policy experts to refine their vision.</p>
                        </div>
                    </div>
                    <div style="position: relative; border-radius: 30px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.3); height: 500px; border: 1px solid rgba(255,255,255,0.1);">
                        <img src="3.jpg" alt="Founder Journey" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 40px; background: linear-gradient(transparent, rgba(0,0,0,0.9));">
                            <h4 style="color: var(--accent-gold); font-size: 1.5rem; margin-bottom: 10px;">Becoming Founders</h4>
                            <p style="color: rgba(255,255,255,0.8);">Equipping youth with the tools to build scalable ventures and lead societal change.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Strategic Partners -->
        <section class="section-padding" style="background: #fff; border-top: 1px solid #E2E8F0;">
            <div class="container">
                <div class="section-header">
                    <div class="hero-badge" style="animation: none; margin-bottom: 20px;"><i class="fa-solid fa-handshake"></i> COLLABORATION</div>
                    <h2>Strategic <span class="text-gradient">Partners</span></h2>
                    <p>Building the future of Jinja through institutional and corporate synergy.</p>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; align-items: center; justify-items: center; margin-top: 60px; opacity: 0.8;">
                    <div style="text-align: center;">
                        <img src="logo.png" alt="Jinja Public Library" style="height: 60px; filter: grayscale(1); opacity: 0.7; transition: 0.3s;" onmouseover="this.style.filter='none'; this.style.opacity='1'" onmouseout="this.style.filter='grayscale(1)'; this.style.opacity='0.7'">
                        <div style="margin-top: 10px; font-weight: 600; color: var(--text-muted); font-size: 0.9rem;">Jinja Public Library</div>
                    </div>
                    <div style="text-align: center;">
                        <i class="fa-solid fa-landmark" style="font-size: 3rem; color: #64748B; margin-bottom: 10px;"></i>
                        <div style="font-weight: 600; color: var(--text-muted); font-size: 0.9rem;">City Education Office</div>
                    </div>
                    <div style="text-align: center;">
                        <i class="fa-solid fa-water" style="font-size: 3rem; color: #64748B; margin-bottom: 10px;"></i>
                        <div style="font-weight: 600; color: var(--text-muted); font-size: 0.9rem;">Nile Valley Initiative</div>
                    </div>
                    <div style="text-align: center;">
                        <i class="fa-solid fa-building" style="font-size: 3rem; color: #64748B; margin-bottom: 10px;"></i>
                        <div style="font-weight: 600; color: var(--text-muted); font-size: 0.9rem;">Corporate Partners</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section-padding" style="background: linear-gradient(135deg, var(--primary-blue), #003366); color: #fff; text-center;">
            <div class="container text-center">
                <h2 style="color: #fff; font-size: 3.5rem; margin-bottom: 20px;">Ready to Lead?</h2>
                <p style="color: rgba(255,255,255,0.8); font-size: 1.4rem; max-width: 800px; margin: 0 auto 50px;">Whether you are a school, a mentor, or a corporate partner, there’s a place for you in the Nile Valley Initiative.</p>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                    <a href="#/get-involved" class="btn btn-accent" style="padding: 20px 50px; font-size: 1.2rem;" data-link>Register Your School</a>
                    <a href="#/contact" class="btn btn-glass" style="padding: 20px 50px; font-size: 1.2rem;" data-link>Partner With Us</a>
                </div>
            </div>
        </section>
    </div>
`;

// --- ROUTER ---

const routes = {
    '/': HomeView,
    '': HomeView,
    '#': HomeView,
    '#/': HomeView,
    '#/about': AboutView,
    '#/programs': ProgramsView,
    '#/innovation-lab': InnovationLabView,
    '#/events': EventsView,
    '#/nile-debate-league': NileDebateView,
    '#/get-involved': GetInvolvedView,
    '#/contact': ContactView
};

const router = () => {
    const appContent = document.getElementById('app-content');
    if (!appContent) return;

    let hash = window.location.hash || '#/';
    if (hash === '#') hash = '#/';
    
    const view = routes[hash] || routes['#/'];
    appContent.innerHTML = view();
    updateNavLinks(hash);
    window.scrollTo(0, 0);
};

const navigateTo = (hash) => {
    window.location.hash = hash;
    router();
};

const updateNavLinks = (hash) => {
    document.querySelectorAll('.nav-link').forEach(link => {
        let href = link.getAttribute('href');
        if (href === hash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    updateNavLinks(window.location.hash || '#/');

    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
            const link = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
            
            const navLinks = document.getElementById('nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });

    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    window.addEventListener('hashchange', router);
    router();
});
