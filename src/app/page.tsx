'use client';

import React, { useState } from 'react';

const skills = [
  { name: 'Risk Assessments', percent: 90 },
  { name: 'Tech Audits', percent: 85 },
  { name: 'Cloud Security', percent: 88 },
  { name: 'Third-party Risk Management', percent: 82 },
  { name: 'ISO Audits', percent: 90 },
  { name: 'AWS Security Tools', percent: 85 },
  { name: 'Azure Security Centre', percent: 80 },
  { name: 'Data Security', percent: 87 },
];

const certifications = [
  'ISO 27001:2022 Lead Auditor',
  'AWS Certified Solutions Architect - Associate',
  'AWS Certified Cloud Practitioner',
  'Microsoft Certified: Azure Fundamentals (AZ-900)',
  'Palo Alto Networks PSE Prisma Cloud Professional',
  'Certified Ethical Hacker (CEH) v11',
  'eLearnSecurity Junior Penetration Tester',
  'Google Project Management Foundations',
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  // Contact form state
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Formspree endpoint (replace with your own)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwlbjqq';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFDF2] text-black font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-[#FFFDF2]/80 border-b border-black/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-2xl font-black tracking-widest">SD</span>
          <ul className="flex gap-8 text-base font-semibold">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  style={{ paddingBottom: 2 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center pt-36 pb-20">
        <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center mb-6 shadow-lg">
          <span className="text-5xl font-extrabold text-[#FFFDF2] select-none">SD</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center mb-3">
          Soham Dhande
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-black/70 mb-6 text-center">
          IT Auditor &amp; Cloud Security Specialist
        </h2>
        <p className="text-black/70 max-w-xl text-center mb-8 text-lg">
          2+ years in IT risk management, cloud security, and GRC. ISO 27001 Lead Auditor. AWS, Azure, GCP expertise.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-black text-[#FFFDF2] px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-black/80 transition"
          >
            Contact
          </a>
          <a
            href="#experience"
            className="border-2 border-black text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-black hover:text-[#FFFDF2] transition"
          >
            Experience
          </a>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-24 pb-24">
        {/* About */}
        <section id="about" className="space-y-4">
          <h3 className="text-3xl font-black mb-2">About Me</h3>
          <p className="text-lg">
            I'm an IT Auditor and Cloud Security Specialist with 2+ years of experience in IT risk management, cloud security assessments, and GRC. I evaluate IT controls in line with NIST, ISO 27001, CIS Benchmarks, and more.
          </p>
          <p className="text-lg">
            I excel at collaborating with auditors, conducting control assessments, and facilitating third-party/vendor risk evaluations across AWS, Azure, and GCP. Strong in stakeholder engagement, audit coordination, and risk remediation.
          </p>
          <div className="flex flex-wrap gap-8 mt-4 text-base text-black/60 font-semibold">
            <span>📍 Pune, India</span>
            <span>🎓 ISO 27001 LA Certified</span>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-8">
          <h3 className="text-3xl font-black mb-2">Experience</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-xl">Consultant <span className="text-black/60">@ Freelancing</span></h4>
              <span className="text-sm text-black/40">Current</span>
              <ul className="list-disc ml-6 mt-2 text-lg">
                <li>Drafted and implemented security policies for startups (ISO/IEC 27001).</li>
                <li>Conducted gap assessments for compliance readiness.</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-black/60 font-semibold">
                <span>ISO 27001</span>
                <span>Security Policies</span>
                <span>Gap Assessment</span>
                <span>Compliance</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl">Consultant <span className="text-black/60">@ Deloitte</span></h4>
              <span className="text-sm text-black/40">07/2023 – 02/2025</span>
              <ul className="list-disc ml-6 mt-2 text-lg">
                <li>Developed security controls aligned with CIS Benchmarks.</li>
                <li>Managed third-party vendor security reviews (cloud &amp; on-premises).</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-black/60 font-semibold">
                <span>CIS Benchmarks</span>
                <span>Security Assessments</span>
                <span>Third-party Risk</span>
                <span>GRC</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl">DevOps Intern <span className="text-black/60">@ Expert Cloud Consulting</span></h4>
              <span className="text-sm text-black/40">02/2023 – 04/2023</span>
              <ul className="list-disc ml-6 mt-2 text-lg">
                <li>Hands-on with IaC, pipeline automation, and technical writing.</li>
                <li>Built CI/CD pipelines and wrote security-focused blogs.</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-black/60 font-semibold">
                <span>IaC</span>
                <span>CI/CD</span>
                <span>Pipeline Automation</span>
                <span>Technical Writing</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl">Cyber Security Analyst <span className="text-black/60">@ Coditing</span></h4>
              <span className="text-sm text-black/40">06/2022 – 07/2022</span>
              <ul className="list-disc ml-6 mt-2 text-lg">
                <li>Cybersecurity analysis and threat assessment.</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-black/60 font-semibold">
                <span>Threat Analysis</span>
                <span>Security Monitoring</span>
                <span>Incident Response</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <h3 className="text-3xl font-black mb-2">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between text-base font-semibold">
                  <span>{skill.name}</span>
                  <span className="text-black/60">{skill.percent}%</span>
                </div>
                <div className="w-full bg-black/10 rounded h-2 mt-1">
                  <div
                    className="bg-black h-2 rounded"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h3 className="text-3xl font-black mb-2">Projects</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg">Cloud Audits (TPRM) <span className="text-sm text-black/40">IT Sector</span></h4>
              <p className="text-lg text-black/70">Comprehensive third-party risk management audits for cloud infrastructure.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">Project Management <span className="text-sm text-black/40">BFSI Sector</span></h4>
              <p className="text-lg text-black/70">Led project management initiatives in banking and financial services.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">Third Party Risk Management <span className="text-sm text-black/40">BFSI Sector</span></h4>
              <p className="text-lg text-black/70">Implemented comprehensive TPRM frameworks for financial institutions.</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="space-y-4">
          <h3 className="text-3xl font-black mb-2">Certifications</h3>
          <ul className="list-disc ml-6 text-lg text-black/80 space-y-1">
            {certifications.map(cert => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="flex flex-col items-center space-y-8">
          <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-center">
            {/* Get In Touch Info */}
            <div className="flex-1 flex flex-col items-center md:items-start space-y-4">
              <h3 className="text-3xl font-black mb-2">Get In Touch</h3>
              <p className="text-lg text-center md:text-left text-black/70 max-w-xl">
                Let's discuss how I can help secure your organization's IT infrastructure and ensure compliance.
              </p>
              <div className="flex flex-col gap-2 text-black/80 items-center md:items-start text-lg font-semibold">
                <a href="mailto:sohamdhande11@gmail.com" className="hover:underline">sohamdhande11@gmail.com</a>
                <span>📞 +91 7559444529</span>
                <a href="https://www.linkedin.com/in/sohamdhande" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 w-full max-w-md bg-[#FFFDF2] border border-black/10 rounded-lg shadow p-6 flex flex-col gap-4"
            >
              <h4 className="text-xl font-bold mb-1">Contact Form</h4>
              {submitted ? (
                <div className="text-green-700 font-semibold bg-green-100 border border-green-300 rounded p-3 text-center">
                  Thank you! Your message has been sent.
                </div>
              ) : (
                <>
                  {error && (
                    <div className="text-red-700 font-semibold bg-red-100 border border-red-300 rounded p-2 text-center">
                      {error}
                    </div>
                  )}
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="border border-black/20 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black/30 text-base"
                    autoComplete="off"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="border border-black/20 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black/30 text-base"
                    autoComplete="off"
                  />
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Your Message"
                    className="border border-black/20 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black/30 text-base resize-none"
                  />
                  <button
                    type="submit"
                    className="bg-black text-[#FFFDF2] px-6 py-2 rounded-full font-bold text-base shadow hover:bg-black/80 transition"
                  >
                    Send
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-black/40 py-10 mt-10">
        © 2025 Soham Dhande. All rights reserved.
      </footer>
    </main>
  );
}