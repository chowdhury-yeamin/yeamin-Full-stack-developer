import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Palette,
  Zap,
  Sparkles,
  Rocket,
  Brain,
  Eye,
  Heart,
} from "lucide-react";
import ProfilePic from "./assets/Yeamin-Proffesional-Pic.png";
import { motion } from "framer-motion";
import discord from "./assets/discord.png";
import { SiDiscord } from "react-icons/si";

const Portfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("hero");
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(newParticles);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${0.3 + Math.random() * 0.3})`;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(236, 72, 153, ${
              0.15 * (1 - distance / 150)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [particles]);

  const skills = [
    {
      name: "React.js",
      icon: <Code className="w-6 h-6" />,
      level: 95,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Node.js",
      icon: <Database className="w-6 h-6" />,
      level: 90,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "MongoDB",
      icon: <Database className="w-6 h-6" />,
      level: 88,
      color: "from-green-600 to-teal-500",
    },
    {
      name: "Express.js",
      icon: <Zap className="w-6 h-6" />,
      level: 92,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      level: 97,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Full Stack",
      icon: <Sparkles className="w-6 h-6" />,
      level: 93,
      color: "from-purple-500 to-violet-500",
    },
  ];

  const projects = [
    {
      title: "FinEase",
      tech: "MERN Stack",
      desc: "Personal finance management App",
      link: "https://finease-client.netlify.app/",
    },
    {
      title: "QuantumGear",
      tech: "Next.js + Backend ",
      desc: "Product management App for business",
      link: "https://quantumgear-lyart.vercel.app/",
    },
    {
      title: "CS — Ticket System",
      tech: "React.js",
      desc: "Product management App for business",
      link: "http://imminent-weight.surge.sh/",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            top: "10%",
            left: "10%",
            transform: `translate(${mousePos.x * 0.02}px, ${
              mousePos.y * 0.02
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            top: "60%",
            right: "10%",
            transform: `translate(${-mousePos.x * 0.02}px, ${
              -mousePos.y * 0.02
            }px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: "10%",
            left: "50%",
            transform: `translate(${mousePos.x * 0.015}px, ${
              mousePos.y * 0.015
            }px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Glassmorphic Card */}
            <div
              className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105"
              style={{
                transform: `perspective(1000px) rotateX(${
                  mousePos.y * 0.01
                }deg) rotateY(${mousePos.x * 0.01}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* Animated Avatar Placeholder */}
              <div className="relative w-48 h-48 mx-auto mb-8 group">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <div className="absolute inset-2 bg-gradient-to-br from-slate-900 to-purple-900 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    <img src={ProfilePic} alt="" />
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Md Yeamin Chowdhury
              </h1>

              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <p className="text-2xl md:text-3xl font-semibold text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text">
                  Full Stack Developer
                </p>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              </div>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                MERN Stack Developer specialized in React.js with a passion for
                creating stunning frontend experiences. Trained at Programming
                Hero, crafting digital excellence from Sylhet, Bangladesh.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  {
                    Icon: Rocket,
                    text: "Frontend Expert",
                    color: "from-pink-500 to-rose-500",
                  },
                  {
                    Icon: Brain,
                    text: "MERN Stack",
                    color: "from-purple-500 to-violet-500",
                  },
                  {
                    Icon: Sparkles,
                    text: "UI/UX Focused",
                    color: "from-cyan-500 to-blue-500",
                  },
                ].map(({ Icon, text, color }, i) => (
                  <div
                    key={i}
                    className={`backdrop-blur-md bg-gradient-to-r ${color} bg-opacity-20 px-6 py-3 rounded-full border border-white/30 flex items-center gap-2 hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/chowdhury-yeamin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group backdrop-blur-md bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl border border-white/30 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <Github className="w-6 h-6 text-purple-300 group-hover:rotate-12 transition-transform" />
                  <span className="text-white font-semibold">GitHub</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61577632243284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group backdrop-blur-md bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl border border-white/30 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Facebook className="w-6 h-6 text-blue-300 group-hover:rotate-12 transition-transform" />
                  <span className="text-white font-semibold">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="group backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="relative h-4 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-right text-gray-300 mt-2 font-semibold">
                    {skill.level}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-purple-300 font-semibold mb-4">
                      {project.tech}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="mt-6 pt-6 border-t border-white/20">
                      <a
                        href={project.link}
                        className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors flex items-center gap-2 group/btn"
                      >
                        View Project
                        <Eye className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About me  */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="group relative overflow-hidden rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              {/* Animated Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-7 z-10">
                <img
                  src={ProfilePic}
                  alt=""
                  className="w-full md:w-1/3 max-h-[300px] border-b-2 md:border-b-0 md:border-r-2 border-gray-700 group-hover:rotate-3 transition-transform duration-300"
                />
                <p className="text-gray-300 text-base md:text-lg relative z-10">
                  Hello! I’m <strong>Md Yeamin Chowdhury</strong>, a passionate
                  MERN Stack Developer from Sylhet, Bangladesh. I specialize in{" "}
                  <strong>ReactJS</strong> and have a strong interest in
                  frontend development, building modern, responsive, and
                  user-friendly web applications. I completed my web development
                  training from <strong>Programming Hero</strong>, where I honed
                  my skills in the full stack, including NodeJS, ExpressJS,
                  MongoDB, and JavaScript. I love turning ideas into functional,
                  interactive web solutions and constantly learning new
                  technologies to stay ahead in the fast-paced world of web
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>

            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    Icon: Phone,
                    text: "+8801701101422",
                    href: "tel:+8801701101422",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    Icon: Mail,
                    text: "Contact via Email",
                    href: "mailto:chowdhuryyeamin07@gmail.com",
                    color: "from-red-500 to-pink-500",
                  },
                  {
                    Icon: MapPin,
                    text: "Sylhet, Bangladesh",
                    href: "https://www.google.com/maps?q=Sylhet,Bangladesh",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    Icon: SiDiscord,
                    text: "Contact via Discord",
                    href: "https://discord.com/users/chowdhury_yeamin07",
                    color: "from-indigo-500 via-purple-500 to-pink-500",
                  },
                ].map(({ Icon, text, href, color }, i) => (
                  <a
                    key={i}
                    href={href || "#"}
                    target={href.includes("discord") ? "_blank" : "_self"}
                    rel={href.includes("discord") ? "noopener noreferrer" : ""}
                    className={`group flex items-center gap-4 p-6 rounded-xl backdrop-blur-md bg-gradient-to-r ${color} bg-opacity-20 border border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-lg ${
                      href ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${color} shadow-lg group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">
                      {text}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-300 text-lg mb-6">
                  Ready to bring your ideas to life with cutting-edge web
                  development
                </p>
                <a
                  href="https://wa.me/8801701101422"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer animate-pulse">
                    Get In Touch
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 text-center border-t border-white/10">
          <p className="text-gray-400 text-lg">
            Crafted with{" "}
            <Heart className="w-5 h-5 inline-block text-pink-500 animate-pulse" />{" "}
            by Md Yeamin Chowdhury
          </p>
          <p className="text-gray-500 mt-2">
            Full Stack Developer | React.js Specialist | MERN Stack
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
