export const HomeView = () => `
    <div class="page-enter">
        <section class="hero">
            <div class="hero-content container">
                <span class="hero-badge">Jinja, Uganda</span>
                <h1>A Knowledge and Innovation Hub on the Nile</h1>
                <p>Empowering communities through knowledge, digital skills, and innovation for the future. The leading public knowledge hub in Eastern Uganda.</p>
                <div class="hero-buttons">
                    <a href="/programs" class="btn btn-primary" data-link>Explore Programs</a>
                    <a href="/innovation-lab" class="btn btn-accent" data-link>Visit the Hub</a>
                </div>
            </div>
        </section>

        <section class="section-padding container">
            <div class="split-section">
                <div class="split-content">
                    <span class="card-tag">About the Hub</span>
                    <h2>More than just a library.</h2>
                    <p>We are transforming from a traditional library into a dynamic, next-generation innovation and learning ecosystem. Jinja Public Library is where youth empowerment meets community development.</p>
                    <p>We provide not only access to books, but a collaborative space for digital skills, co-working, and startup incubation right on the shores of the Nile.</p>
                    <br>
                    <a href="/about" class="btn btn-secondary" data-link>Read Our Story</a>
                </div>
                <div class="split-image">
                    <img src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800" alt="Modern Library Space">
                </div>
            </div>
        </section>

        <section class="section-padding bg-color" style="background: var(--white);">
            <div class="container">
                <div class="section-header">
                    <h2>Our Core Pillars</h2>
                    <p>Discover the areas where we drive impact and youth development.</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fa-solid fa-laptop-code"></i></div>
                        <h3>Innovation & Digital Skills</h3>
                        <p>Our Innovation Lab offers digital skills training, coding bootcamps, and youth employability programs to prepare you for the future.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fa-solid fa-book-open"></i></div>
                        <h3>Knowledge Centre</h3>
                        <p>Access quiet reading spaces, research materials, and comprehensive academic support for self-directed learning.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fa-solid fa-people-group"></i></div>
                        <h3>Collaboration & Co-Working</h3>
                        <p>Shared workspaces designed for youth collaboration, startup development, and creative idea incubation.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fa-solid fa-microphone"></i></div>
                        <h3>Dialogue & Community</h3>
                        <p>Home of the Nile Debate League. A central hub for youth dialogue, intellectual development, and community forums.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="nile-section text-center">
            <div class="container" style="position: relative; z-index: 2;">
                <h2>Flow with the Nile. Grow with Us.</h2>
                <p style="max-width: 600px; margin: 20px auto 40px; font-size: 1.1rem;">Just as the river Nile has been a source of life and connection, our hub is a continuous flow of ideas, creativity, and opportunity.</p>
                <a href="/get-involved" class="btn btn-accent" data-link>Partner With Us</a>
            </div>
        </section>

        <section class="section-padding container">
            <div class="section-header">
                <h2>Our Impact</h2>
                <p>Transforming Eastern Uganda one mind at a time.</p>
            </div>
            <div class="stats-grid">
                <div class="stat-item">
                    <h3>5,000+</h3>
                    <p>Youth Engaged</p>
                </div>
                <div class="stat-item">
                    <h3>120+</h3>
                    <p>Programs Delivered</p>
                </div>
                <div class="stat-item">
                    <h3>50+</h3>
                    <p>Community Partners</p>
                </div>
                <div class="stat-item">
                    <h3>10+</h3>
                    <p>Startups Incubated</p>
                </div>
            </div>
        </section>
    </div>
`;

export const AboutView = () => `
    <div class="page-enter">
        <header class="page-header">
            <div class="container">
                <h1>About Us</h1>
                <p>From a traditional repository of books to a vibrant ecosystem of innovation and digital empowerment.</p>
            </div>
        </header>
        <section class="section-padding container">
            <div class="split-section" style="margin-bottom: 80px;">
                <div class="split-image">
                    <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" alt="Library History">
                </div>
                <div class="split-content">
                    <span class="card-tag">Our History</span>
                    <h2>A Legacy of Knowledge</h2>
                    <p>Jinja Public Library has stood as a pillar of learning in the Central Division of Jinja for decades. As a government-affiliated institution under the National Library of Uganda, it was historically tasked with providing crucial information services and book access to students and the public.</p>
                    <p>Despite past challenges with infrastructure and resources, the library remained a beacon of hope for many seeking education.</p>
                </div>
            </div>
            <div class="split-section">
                <div class="split-content">
                    <span class="card-tag">The Transformation</span>
                    <h2>The Next Generation Hub</h2>
                    <p>Today, we are undergoing a massive transformation. We are repositioning Jinja Public Library not just as a place for quiet reading, but as Eastern Uganda's premier Innovation and Digital Skills Hub.</p>
                    <p><strong>Our Vision:</strong> To be the catalyst for youth empowerment, fostering a culture of innovation, digital literacy, and collaboration on the shores of the Nile.</p>
                </div>
                <div class="split-image">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Collaboration">
                </div>
            </div>
        </section>
    </div>
`;

export const ProgramsView = () => `
    <div class="page-enter">
        <header class="page-header">
            <div class="container">
                <h1>Our Programs</h1>
                <p>Comprehensive initiatives designed to upskill, educate, and empower the youth of Jinja.</p>
            </div>
        </header>
        <section class="section-padding container">
            <div class="card-grid">
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600');"></div>
                    <div class="card-content">
                        <span class="card-tag">Knowledge</span>
                        <h3>Knowledge & Learning</h3>
                        <p>Traditional and digital access to resources, reading clubs, and academic support for students.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600');"></div>
                    <div class="card-content">
                        <span class="card-tag">Tech</span>
                        <h3>Digital Skills & Innovation</h3>
                        <p>Coding bootcamps, digital literacy courses, and future-ready tech training in our Innovation Lab.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600');"></div>
                    <div class="card-content">
                        <span class="card-tag">Debate</span>
                        <h3>Nile Debate League</h3>
                        <p>Our flagship youth development program focusing on public speaking, critical thinking, and intellectual dialogue.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600');"></div>
                    <div class="card-content">
                        <span class="card-tag">Community</span>
                        <h3>Collaboration & Co-working</h3>
                        <p>Open spaces for youth startups, entrepreneurs, and freelancers to build ideas together.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;

export const InnovationLabView = () => `
    <div class="page-enter">
        <header class="page-header" style="background: linear-gradient(rgba(10, 37, 64, 0.8), rgba(0, 212, 255, 0.6)), url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1920') center/cover;">
            <div class="container">
                <h1>The Innovation Lab</h1>
                <p>A dedicated space for creativity, experimentation, and future-ready skills.</p>
            </div>
        </header>
        <section class="section-padding container text-center">
            <h2 style="font-size: 2.5rem; margin-bottom: 20px;">Where Ideas Come to Life</h2>
            <p style="max-width: 800px; margin: 0 auto 50px; font-size: 1.1rem; color: var(--text-muted);">
                The Innovation Lab at Jinja Public Library is the core of our transformation. We provide high-speed internet, modern workstations, and mentorship to help young innovators build solutions for local and global challenges.
            </p>
            
            <div class="features-grid text-left">
                <div class="feature-card">
                    <div class="feature-icon"><i class="fa-solid fa-lightbulb"></i></div>
                    <h3>Idea Incubation</h3>
                    <p>Got a startup idea? Use our lab to research, develop, and test your prototypes with peer feedback.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fa-solid fa-code"></i></div>
                    <h3>Future-Ready Skills</h3>
                    <p>Participate in workshops covering web development, data analysis, and digital marketing.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fa-solid fa-network-wired"></i></div>
                    <h3>Networking</h3>
                    <p>Connect with other ambitious youths, mentors, and potential investors in our collaborative space.</p>
                </div>
            </div>
        </section>
    </div>
`;

export const EventsView = () => `
    <div class="page-enter">
        <header class="page-header">
            <div class="container">
                <h1>Events & Activities</h1>
                <p>Join us for workshops, trainings, and community dialogues.</p>
            </div>
        </header>
        <section class="section-padding container">
            <div class="section-header">
                <h2>Upcoming Events</h2>
            </div>
            <div class="card-grid">
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1544144433-d50aff500b91?auto=format&fit=crop&q=80&w=600');"></div>
                    <div class="card-content">
                        <span class="card-tag">Workshop</span>
                        <h3>Intro to Web Development</h3>
                        <p><i class="fa-regular fa-calendar"></i> Oct 15, 2024 | 10:00 AM</p>
                        <p>Learn the basics of HTML, CSS, and JavaScript in our hands-on bootcamp in the Innovation Lab.</p>
                        <a href="#" class="btn btn-primary" style="margin-top: 15px;">Register Now</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600');"></div>
                    <div class="card-content">
                        <span class="card-tag">Debate</span>
                        <h3>Nile Debate League: Regional Finals</h3>
                        <p><i class="fa-regular fa-calendar"></i> Oct 22, 2024 | 2:00 PM</p>
                        <p>Watch top high school students from Jinja debate critical regional issues.</p>
                        <a href="#" class="btn btn-primary" style="margin-top: 15px;">Get Ticket</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;

export const GetInvolvedView = () => `
    <div class="page-enter">
        <header class="page-header">
            <div class="container">
                <h1>Get Involved</h1>
                <p>We are building an ecosystem. Join us as a partner, volunteer, or member.</p>
            </div>
        </header>
        <section class="section-padding container">
            <div class="split-section">
                <div class="split-content">
                    <h2>Support Youth Innovation</h2>
                    <p>Whether you are an organization looking to partner, an expert wanting to mentor, or a student wanting to join our programs, there is a place for you at Jinja Public Library.</p>
                    <ul style="margin-top: 20px; display: flex; flex-direction: column; gap: 15px;">
                        <li><i class="fa-solid fa-check" style="color: var(--accent-teal); margin-right: 10px;"></i> <strong>Partner with us</strong> to sponsor programs or provide tech resources.</li>
                        <li><i class="fa-solid fa-check" style="color: var(--accent-teal); margin-right: 10px;"></i> <strong>Volunteer</strong> as a mentor in the Innovation Lab.</li>
                        <li><i class="fa-solid fa-check" style="color: var(--accent-teal); margin-right: 10px;"></i> <strong>Join</strong> our co-working space or the Nile Debate League.</li>
                    </ul>
                </div>
                <div class="card" style="padding: 30px;">
                    <h3>Submit an Inquiry</h3>
                    <form style="margin-top: 20px;">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <select class="form-control" required>
                                <option value="">I want to...</option>
                                <option value="partner">Partner</option>
                                <option value="volunteer">Volunteer / Mentor</option>
                                <option value="join">Join a Program</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="4" placeholder="Tell us more..."></textarea>
                        </div>
                        <button type="button" class="btn btn-primary" style="width: 100%;">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
`;

export const ContactView = () => `
    <div class="page-enter">
        <header class="page-header">
            <div class="container">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Visit us in Jinja or reach out online.</p>
            </div>
        </header>
        <section class="section-padding container">
            <div class="split-section">
                <div>
                    <h2>Get In Touch</h2>
                    <p style="color: var(--text-muted); margin-bottom: 30px;">Have questions about our programs, the Innovation Lab, or how to access the library? Reach out to us!</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <div class="feature-icon" style="width: 50px; height: 50px; margin: 0;"><i class="fa-solid fa-location-dot"></i></div>
                            <div>
                                <h4 style="margin-bottom: 5px;">Location</h4>
                                <p style="color: var(--text-muted);">Central Division, Jinja, Uganda</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <div class="feature-icon" style="width: 50px; height: 50px; margin: 0;"><i class="fa-solid fa-phone"></i></div>
                            <div>
                                <h4 style="margin-bottom: 5px;">Phone / WhatsApp</h4>
                                <p style="color: var(--text-muted);">+256 123 456 789</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <div class="feature-icon" style="width: 50px; height: 50px; margin: 0;"><i class="fa-solid fa-envelope"></i></div>
                            <div>
                                <h4 style="margin-bottom: 5px;">Email</h4>
                                <p style="color: var(--text-muted);">info@jinjapubliclibrary.ug</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 15px; align-items: center;">
                            <div class="feature-icon" style="width: 50px; height: 50px; margin: 0;"><i class="fa-regular fa-clock"></i></div>
                            <div>
                                <h4 style="margin-bottom: 5px;">Opening Hours</h4>
                                <p style="color: var(--text-muted);">Mon - Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <!-- Simple map placeholder -->
                    <div style="width: 100%; height: 400px; background: #eee; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
                        <i class="fa-solid fa-map-location-dot" style="font-size: 3rem; margin-bottom: 10px;"></i>
                        <p style="position: absolute; margin-top: 60px;">Map Integration Placeholder</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;
