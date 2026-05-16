import Lenis from "lenis";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaJava,
  FaReact,
} from "react-icons/fa";

import {
  SiPython,
  SiMysql,
  SiSpringboot,
  SiC,
  SiEspressif,
} from "react-icons/si";

import heroImage from "./assets/hero.png";
import aboutImage from "./assets/about.png";
import resumeFile from "./assets/resume.pdf";

export default function App() {
      const [loading, setLoading] = useState(true);

      useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
      });


      

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2800);

      return () => clearTimeout(timer);
    }, []);
  const techStack = [
    { icon: <SiPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiC />, name: "C" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiEspressif />, name: "ESP32" },
  ];

  

  if (loading) {
  return (
    <div className="
      h-screen
      bg-black
      flex
      items-center
      justify-center
      overflow-hidden
      relative
    ">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
        bg-[size:50px_50px]
      "></div>

      {/* Main Content */}
      <div className="relative z-10 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-7xl
            md:text-9xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            to-violet-500
            bg-clip-text
            text-transparent
            mb-6
          "
        >
          KARTIK.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            uppercase
            tracking-[0.5em]
            text-gray-500
            text-sm
            mb-12
          "
        >
          INITIALIZING EXPERIENCE
        </motion.p>

        {/* Loading Line */}
        <div className="w-[300px] h-[2px] bg-white/10 mx-auto overflow-hidden rounded-full">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-[150px] h-full bg-gradient-to-r from-cyan-400 to-violet-500"
          />
        </div>

        {/* Japanese Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            mt-10
            text-white/10
            text-5xl
            font-black
            tracking-[0.5em]
          "
        >
          未来
        </motion.p>
      </div>
    </div>
  );
}
  
 
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#06b6d455,transparent_30%),radial-gradient(circle_at_bottom_right,#7c3aed55,transparent_30%)]"></div>

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-black">
              <span className="text-cyan-400">KARTIK</span>
              <span className="text-violet-500">.</span>
            </h1>

            <p className="text-xs text-gray-500 mt-1">
              {"< / Developer / >"}
            </p>
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">

  <a
    href="#home"
    className="
      relative
      hover:text-cyan-400
      transition
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-cyan-400
      after:transition-all
      hover:after:w-full
    "
  >
    Home
  </a>

  <a
    href="#about"
    className="
      relative
      hover:text-cyan-400
      transition
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-cyan-400
      after:transition-all
      hover:after:w-full
    "
  >
    About
  </a>

  <a
    href="#projects"
    className="
      relative
      hover:text-cyan-400
      transition
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-cyan-400
      after:transition-all
      hover:after:w-full
    "
  >
    Projects
  </a>

  <a
    href="#contact"
    className="
      relative
      hover:text-cyan-400
      transition
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-cyan-400
      after:transition-all
      hover:after:w-full
    "
  >
    Contact
  </a>

</div>
          <div className="md:hidden text-gray-300 text-sm">
              MENU
            </div>

          <a
          href={resumeFile}
          download="Kartik_Suttraway_Resume.pdf"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="
              px-8
              py-4
              rounded-2xl
              border
              border-violet-500/30
              bg-white/5
              backdrop-blur-xl
              hover:bg-violet-500/10
              transition
            "
          >
            Download Resume
          </motion.button>
        </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
        id="home"
        className="relative min-h-screen flex items-center pt-32 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-10"
          >
            <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4 text-sm">
              KONNICHIWA 👋
            </p>

            <h1 className=" text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-6">
              I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Kartik
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8 h-20">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "IoT Enthusiast",
                  2000,
                  "Data Analytics Explorer",
                  2000,
                  "Building Future Tech",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              Student at MIT Vishwaprayag University Solapur, passionate about
              building intelligent systems, futuristic web experiences, and
              real-world technology solutions through development, IoT, and
              data analytics.
            </p>

            <p className="text-green-400 font-mono mb-10">
              &gt; Ready to learn. Ready to build. Ready for the future.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold shadow-2xl shadow-cyan-500/20"
              >
                Explore My Work →
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                Let's Connect
              </motion.button>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-5 text-2xl text-gray-400">
              <a
                href="https://github.com/kar-tik23"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kartik-suttraway-2a6a17360"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/kartik_suttraway/"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-3xl rounded-full"></div>

            <motion.img
              whileHover={{
                scale: 1.03,
                rotate: 1,
              }}
              src={heroImage}
              alt="hero"
              className="relative z-10 w-[320px] sm:w-[450px] md:w-[600px] lg:w-[700px] object-contain drop-shadow-[0_0_60px_rgba(0,255,255,0.25)]"
            />

            {/* Japanese Text */}
            <div className="absolute right-0 top-20 hidden lg:block">
              <p className="text-6xl text-white/10 font-black tracking-[10px] writing-mode-vertical">
                集中
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* TECH STACK */}
      <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }} className="relative z-10 px-6 mb-24">
        <div className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Tech I Work With
            </h2>

            <p className="text-sm text-gray-500">ROTATING</p>
          </div>

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-10 md:gap-16 whitespace-nowrap"
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-2xl text-gray-300"
              >
                <span className="text-cyan-400">{tech.icon}</span>
                <span className="text-lg">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
        id="about"
        className="relative z-10 py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm">
              About Me
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-tight">
              Who is{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Kartik?
              </span>
            </h2>

            <p className="text-2xl text-violet-400 mb-8">
              改善し続ける ✨
            </p>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a Computer Science student passionate about building
                futuristic digital experiences, intelligent systems, and
                real-world tech solutions.
              </p>

              <p>
                From full-stack web applications to IoT-based automation and
                data analytics, I enjoy transforming ideas into impactful
                projects that combine creativity with technology.
              </p>

              <p>
                I believe in continuous learning, clean code, and building
                technology that creates real value.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                <h3 className="text-4xl font-black text-cyan-400">2+</h3>
                <p className="text-sm text-gray-400 mt-2">Projects</p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                <h3 className="text-4xl font-black text-violet-400">5+</h3>
                <p className="text-sm text-gray-400 mt-2">Technologies</p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                <h3 className="text-4xl font-black text-cyan-400">100+</h3>
                <p className="text-sm text-gray-400 mt-2">Hours Coding</p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                <h3 className="text-4xl font-black text-violet-400">∞</h3>
                <p className="text-sm text-gray-400 mt-2">Curiosity</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              relative
              h-[450px] sm:h-[550px] md:h-[750px]
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >

            {/* Ambient Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full"></div>

            {/* Grid Overlay */}
            <div className="
              absolute
              inset-0
              opacity-[0.03]
              bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
              bg-[size:50px_50px]
            "></div>

            {/* MAIN IMAGE */}
            <motion.img
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              src={aboutImage}
              alt="about"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-contain
                z-10
                opacity-90
                scale-125
                drop-shadow-[0_0_80px_rgba(0,255,255,0.08)]
              "
            />

            {/* Top Fade */}
            <div className="
              absolute
              top-0
              left-0
              w-full
              h-40
              bg-gradient-to-b
              from-black
              to-transparent
              z-20
            "></div>

            {/* Bottom Fade */}
            <div className="
              absolute
              bottom-0
              left-0
              w-full
              h-52
              bg-gradient-to-t
              from-black
              via-black/70
              to-transparent
              z-20
            "></div>

            {/* Left Atmospheric Fade */}
            <div className="
              absolute
              left-0
              top-0
              w-40
              h-full
              bg-gradient-to-r
              from-black
              to-transparent
              z-20
            "></div>

            {/* Floating Japanese Accent */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                right-10
                top-24
                text-[120px]
                font-black
                text-white/5
                z-20
                select-none
              "
            >
              未来
            </motion.div>

            {/* Ink Atmosphere */}
            <div className="
              absolute
              bottom-10
              left-10
              text-white/5
              text-7xl
              font-black
              rotate-[-12deg]
              z-20
              tracking-widest
            ">
              FOCUS
            </div>

          </motion.div>
        </div>
      </motion.section>
      {/* PROJECTS SECTION */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  id="projects"
  className="relative z-10 py-32 px-6"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-24">
      <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm">
        Selected Work
      </p>

      <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
        Featured
        <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
    </div>

    {/* PROJECT 1 */}
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
        relative
        mb-20
        rounded-[3rem]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10"></div>

      <div className="grid lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 md:p-16">

        {/* Left */}
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Dec 2025
          </p>

          <h3 className="text-4xl md:text-5xl font-black mb-6">
            EV Data Visualization
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Developed a data analytics and visualization platform focused on
            EV charging stations and electric vehicle sales trends in India.
            Used data analysis and visualization techniques to identify growth
            patterns and insights from real-world datasets.
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Python",
              "Scikit-Learn",
              "Matplotlib",
              "Data Analytics",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  text-cyan-300
                  text-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/kar-tik23/EV-Data-Visualization-Project"
              target="_blank"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-violet-600
                  font-semibold
                "
              >
                View Project →
              </motion.button>
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-[400px] rounded-[2rem] overflow-hidden border border-white/10 bg-black/30">

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-7xl font-black text-white/10">
              EV
            </h2>
          </div>

          {/* Floating circles */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              top-10
              left-10
              w-24
              h-24
              rounded-full
              border
              border-cyan-400/30
            "
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-10
              right-10
              w-32
              h-32
              rounded-full
              border
              border-violet-400/30
            "
          />
        </div>
      </div>
    </motion.div>

    {/* PROJECT 2 */}
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
        relative
        mb-20
        rounded-[3rem]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10"></div>

      <div className="grid lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 md:p-16">

        {/* Visual */}
        <div className="relative h-[400px] rounded-[2rem] overflow-hidden border border-white/10 bg-black/30 order-2 lg:order-1">

          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-6xl font-black text-white/10 text-center">
              IOT
            </h2>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              w-40
              h-40
              rounded-full
              border
              border-green-400/30
              top-10
              left-10
            "
          />
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            Apr 2026
          </p>

          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Smart Soil Moisture Detector
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Built an IoT-based soil moisture monitoring system using ESP32 and
            HW-038 sensor modules. The system detects soil moisture levels and
            displays live readings on PC and IoT dashboards.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "ESP32",
              "HW-038",
              "Blynk",
              "IoT",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-green-500/20
                  bg-green-500/10
                  text-green-300
                  text-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/kar-tik23/smart_soil_moisture_detector"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="
                px-6
                py-3
                rounded-xl
                bg-gradient-to-r
                from-green-500
                to-cyan-500
                font-semibold
              "
            >
              View Project →
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>

    {/* PROJECT 3 */}
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
        relative
        rounded-[3rem]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10"></div>

      <div className="grid lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 md:p-16">

        {/* Content */}
        <div>
          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm mb-4">
            Ongoing
          </p>

          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Smart Sewing Machine
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Developing an intelligent sewing machine capable of creating
            programmable running designs using uploaded patterns and automated
            motion control systems powered by ESP32 and servo motors.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "ESP32",
              "Servo Motor",
              "Automation",
              "Embedded Systems",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-violet-500/20
                  bg-violet-500/10
                  text-violet-300
                  text-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/kar-tik23/smart-sewing-machine"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="
                px-6
                py-3
                rounded-xl
                bg-gradient-to-r
                from-violet-500
                to-pink-500
                font-semibold
              "
            >
              View Project →
            </motion.button>
          </a>
        </div>

        {/* Visual */}
        <div className="relative h-[400px] rounded-[2rem] overflow-hidden border border-white/10 bg-black/30">

          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-pink-500/20"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl font-black text-white/10 text-center px-6">
              SMART
              <br />
              MACHINE
            </h2>
          </div>

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-52
              h-52
              rounded-full
              border
              border-violet-400/20
            "
          />
        </div>
      </div>
    </motion.div>

  </div>
</motion.section>\

    {/* CONTACT SECTION */}
    <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
      id="contact"
      className="relative z-10 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Let's Build
            <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
            Open to collaborations, internships, innovative projects,
            and opportunities to learn and grow in the tech industry.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="
              relative
              overflow-hidden
              rounded-[3rem]
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-10
            "
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10"></div>

            <div className="relative z-10">

              <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm">
                Contact Info
              </p>

              <h3 className="text-4xl font-black mb-10">
                Reach Out
              </h3>

              {/* Email */}
              <div className="mb-8">
                <p className="text-gray-500 text-sm uppercase mb-2">
                  Email
                </p>

                <a
                  href="mailto:suttrawaykartik@gmail.com"
                  className="text-2xl font-semibold hover:text-cyan-400 transition"
                >
                  suttrawaykartik@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <p className="text-gray-500 text-sm uppercase mb-2">
                  Phone
                </p>

                <a
                  href="tel:+918010840031"
                  className="text-2xl font-semibold hover:text-cyan-400 transition"
                >
                  +91 8010840031
                </a>
              </div>

              {/* Location */}
              <div className="mb-10">
                <p className="text-gray-500 text-sm uppercase mb-2">
                  Location
                </p>

                <p className="text-2xl font-semibold">
                  Solapur, Maharashtra, India
                </p>
              </div>

              {/* Socials */}
              <div className="flex gap-5 text-3xl text-gray-400">

                <motion.a
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="https://github.com/kar-tik23"
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="https://www.linkedin.com/in/kartik-suttraway-2a6a17360"
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="https://www.instagram.com/kartik_suttraway/"
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="
              relative
              h-[350px] sm:h-[450px] md:h-[500px]
              overflow-hidden
              rounded-[3rem]
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              flex
              items-center
              justify-center
            "
          >

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10"></div>

            {/* Grid */}
            <div className="
              absolute
              inset-0
              opacity-[0.03]
              bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
              bg-[size:50px_50px]
            "></div>

            {/* Rotating Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[300px]
                h-[300px]
                rounded-full
                border
                border-cyan-500/20
              "
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[450px]
                h-[450px]
                rounded-full
                border
                border-violet-500/10
              "
            />

            {/* Main Text */}
            <div className="relative z-10 text-center px-6">

              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
                Future Focused
              </p>

              <h2 className="text-6xl md:text-7xl font-black leading-none">
                CODE
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text">
                  CREATE
                </span>
                BUILD
              </h2>

              <p className="text-gray-500 mt-8 text-lg">
                改善 • 革新 • 技術
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.section>

    {/* FOOTER */}
    <footer className="relative z-10 border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div>
          <h2 className="text-3xl font-black">
            <span className="text-cyan-400">KARTIK</span>
            <span className="text-violet-500">.</span>
          </h2>

          <p className="text-gray-500 mt-2">
            Full Stack & IoT Developer
          </p>
        </div>

        {/* Center */}
        <p className="text-gray-500 text-center">
          Designed & Developed by Kartik Suttraway © 2026
        </p>

        {/* Right */}
        <div className="flex gap-4 text-gray-400">

          <a
            href="https://github.com/kar-tik23"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kartik-suttraway-2a6a17360"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/kartik_suttraway/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

      </div>
    </footer>
    </div>
  );
}