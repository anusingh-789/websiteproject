import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";

function Home() {
  return (
    <div>

      <section className="hero">
        <article>
          <h1>VIT Tech Expo 2026</h1>

          <p>
            Where student innovators bring ideas to life. Explore projects,
            attend sessions, and experience the future of technology.
          </p>

          <Link to="/register">
            <button>Register Now</button>
          </Link>

          <Link to="/schedule">
            <button>View Schedule</button>
          </Link>
        </article>
      </section>

      <section>
        <h2>Event Details</h2>

        <article>
          <h3>Date and Venue</h3>
          <p>10 April 2026, CS Hall, VIT Campus</p>
        </article>

        <article>
          <h3>Open For</h3>
          <p>Students and staff</p>
        </article>

        <article>
          <h3>Featured Tracks</h3>
          <p>AI, ML, Cybersecurity, Web Development, Robotics</p>
        </article>
      </section>

      <section>
        <h2>Schedule Preview</h2>

        <ul>
          <li>10:00 AM - Opening Ceremony</li>
          <li>12:00 PM - AI Workshop</li>
          <li>02:00 PM - Cybersecurity Talk</li>
        </ul>

        <Link to="/schedule">View Full Schedule</Link>
      </section>

      <section>
        <h2>Highlights</h2>

        <EventCard 
          title="Keynote Session" 
          desc="Industry experts discuss emerging technologies." 
        />

        <EventCard 
          title="Project Expo" 
          desc="Students showcase innovative projects." 
        />

      </section>

    </div>
  );
}

export default Home;
