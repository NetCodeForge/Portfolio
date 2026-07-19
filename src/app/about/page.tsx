'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, GraduationCap, Briefcase, Code, CheckCircle, MapPin, Terminal, Database, Wrench, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const timeline = [
    {
      icon: Briefcase,
      date: '2024 - Present',
      title: 'Software Developer',
      company: 'Meissasoft, Lahore, Pakistan',
      description: 'Modernizes legacy .NET applications and REST APIs; builds enterprise features with ASP.NET Core, Entity Framework Core, PostgreSQL, and cloud-native practices; contributes to developer portal and MCP integrations; implements secure OAuth 2.0 and OpenID Connect solutions; and supports architecture, testing, releases, production issues, code reviews, and mentoring.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Briefcase,
      date: '2023 - 2024',
      title: 'Full Stack Web Developer / Backend Developer',
      company: 'Raheem Solutions, Lahore, Pakistan',
      description: 'Developed and maintained applications across .NET, Node.js, .NET Core, MAUI, REST APIs, MVC, SQL, Angular, Elasticsearch, Blazor, MudBlazor, Electron, Telerik, and RDLC reporting. Contributed as a developer to Kulcha, a social app for finding nearby locations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      date: '2021 - 2023',
      title: 'Graphic Designer / Video Editor',
      company: 'Hizone',
      description: 'Created social media posts, banners, photo manipulations, and related visual assets, and edited videos for YouTube.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Briefcase,
      date: '2020 - 2021',
      title: 'Photo Editor / Graphic Designer',
      company: 'Benchmark',
      description: 'Handled graphic design, photo manipulation, photo editing and enhancement, and video editing for reviews and other projects.',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Briefcase,
      date: '2020',
      title: 'Graphic Designer Intern',
      company: 'PNY Trainings, Lahore, Pakistan',
      description: 'Designed logos, business cards, letterheads, social posts, and banners; edited reviews and tutorials; created motion graphics; and helped manage Facebook and YouTube channels.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: GraduationCap,
      date: '2023',
      title: 'Bachelor of Science in Software Engineering',
      company: 'Virtual University of Pakistan, Lahore, Pakistan',
      description: 'Completed a Bachelor of Science in Software Engineering.',
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const categoryIcons: Record<string, React.ElementType> = {
    'Backend Technologies': Terminal,
    'Database Management': Database,
    'Cloud & DevOps': Wrench,
  }

  const techCategories = {
    'Backend Technologies': [
      { name: 'C# / .NET Core', level: 92 },
      { name: 'ASP.NET Core / MVC', level: 90 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'Entity Framework Core', level: 88 },
      { name: 'Blazor / MudBlazor', level: 82 },
      { name: 'Node.js / JavaScript', level: 78 },
      { name: 'MAUI', level: 75 },
      { name: 'API Integration', level: 88 },
    ],
    'Database Management': [
      { name: 'SQL Server', level: 88 },
      { name: 'PostgreSQL', level: 86 },
      { name: 'MongoDB', level: 76 },
    ],
    'Cloud & DevOps': [
      { name: 'OAuth 2.0 / OpenID Connect', level: 84 },
      { name: 'Cloud-native Development', level: 80 },
      { name: 'Agile Methodologies', level: 88 },
      { name: 'Code Review', level: 86 },
      { name: 'Automated Testing', level: 78 },
    ]
  }

  const achievements = [
    { icon: CheckCircle, title: '3+ Years in Software', desc: 'Professional full-stack and backend development' },
    { icon: Code, title: '20+ Core Skills', desc: '.NET, APIs, databases, web, mobile, and integration tools' },
    { icon: Briefcase, title: 'Software Developer', desc: 'Currently developing enterprise solutions at Meissasoft' },
    { icon: MapPin, title: 'Lahore, Pakistan', desc: 'Based in Lahore, working across regions' }
  ]

  const certifications = [
    {
      title: 'Dot Net Development',
      issuer: 'EVS Training Institute',
      year: '2021',
    },
    {
      title: 'Diploma of Frontend Development',
      issuer: 'EVS Training Institute',
      year: '2019',
    },
    {
      title: 'Diploma of Graphic Designing',
      issuer: 'EVS Training Institute',
      year: '2019',
    },
    {
      title: 'Graphic Designer Internship',
      issuer: 'PNY Trainings',
      year: '2020',
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5" />

      <div className="relative z-10">
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                About <span className="gradient-text-enhanced">Muhammad Umar Khalid</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
                Software Developer specializing in .NET Core and full-stack technologies, with experience designing
                scalable enterprise applications, RESTful APIs, database solutions, and AI-powered integrations.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-16"
              >
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100">Muhammad Umar Khalid</h2>
                  <p className="text-2xl md:text-3xl text-blue-600 font-semibold">Software Developer</p>
                  <div className="inline-flex items-center status-available">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Currently at Meissasoft
                  </div>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                      Based in <strong>Lahore, Pakistan</strong>. Experienced in legacy-system modernization,
                      performance optimization, secure authentication, third-party integrations, Agile delivery,
                      and building maintainable enterprise applications with modern .NET technologies.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{achievement.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{achievement.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="work-experience" className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-md text-foreground mb-4">Professional Experience</h2>
              <p className="text-muted-foreground">Software development at Meissasoft and Raheem Solutions, supported by an earlier creative-technology background</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0"
                >
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-primary to-blue-600 hidden md:block"></div>
                  )}

                  <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mr-0 md:mr-8 mb-4 md:mb-0 shadow-professional-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1 card-hover p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-primary text-sm font-semibold bg-primary/10 px-2 py-1 rounded-full">{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    {item.company && (
                      <p className="text-blue-600 font-semibold mb-4 text-lg">{item.company}</p>
                    )}
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-md text-foreground mb-4">Core Skills</h2>
              <p className="text-muted-foreground">Backend, databases, cloud, and architectural expertise</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {Object.entries(techCategories).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="card-hover p-8"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      {(() => { const Icon = categoryIcons[category] || Code; return <Icon className="w-4 h-4 text-primary" aria-hidden="true" /> })()}
                    </div>
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-primary text-sm font-semibold bg-primary/10 px-2 py-1 rounded-full">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-md text-foreground mb-4">Certifications</h2>
              <p className="text-muted-foreground">Development, frontend, and graphic-design credentials</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert) => (
                <div key={cert.title} className="card-hover p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-8 card p-12"
            >
              <div className="space-y-4">
                <h2 className="heading-md text-foreground">Let&apos;s build something together.</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Open to discussions on .NET Core, full-stack development, REST APIs, enterprise applications, and AI integrations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start a Conversation
                </Link>
                <Link href="/projects" className="btn-secondary">
                  View Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
