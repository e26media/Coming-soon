import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/e26media/?hl=en", 
    label: "Instagram" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/e26-media-production-private-limited/posts/?feedView=all", 
    label: "LinkedIn" 
  },
  { 
    icon: Facebook, 
    href: "https://www.facebook.com/people/E26-Media-Production/61565034466150/", 
    label: "Facebook" 
  },
  { 
    icon: MessageCircle, 
    href: "https://wa.me/918495901407", 
    label: "WhatsApp" 
  },
];

const FloatingShape = ({
  className, 
  delay = 0, 
  duration = 20,
  size = "w-32 h-32"
}: { 
  className?: string; 
  delay?: number; 
  duration?: number;
  size?: string;
}) => (
  <motion.div
    className={`absolute rounded-full bg-primary/5 blur-xl ${size} ${className}`}
    animate={{
      y: [0, -30, 0, 30, 0],
      x: [0, 20, 0, -20, 0],
      scale: [1, 1.1, 1, 0.9, 1],
      rotate: [0, 90, 180, 270, 360],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const ParticleField = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 4,
  }));

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

const WaveLines = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    viewBox="0 0 1200 800"
    preserveAspectRatio="none"
  >
    {[0, 1, 2, 3].map((i) => (
      <motion.path
        key={i}
        d="M0,400 Q300,300 600,400 T1200,400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary"
        style={{ translateY: i * 40 }}
        animate={{
          d: [
            "M0,400 Q300,300 600,400 T1200,400",
            "M0,400 Q300,500 600,400 T1200,400",
            "M0,400 Q300,300 600,400 T1200,400",
          ],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5,
        }}
      />
    ))}
  </svg>
);

const GridPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
);

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <GridPattern />
        
        {/* Animated Wave Lines */}
        <WaveLines />
        
        {/* Floating Particles */}
        <ParticleField />
        
        {/* Large Floating Shapes */}
        <FloatingShape 
          className="top-10 left-10" 
          size="w-72 h-72" 
          delay={0} 
          duration={25}
        />
        <FloatingShape 
          className="bottom-20 right-10" 
          size="w-96 h-96" 
          delay={2} 
          duration={30}
        />
        <FloatingShape 
          className="top-1/3 right-1/4" 
          size="w-48 h-48" 
          delay={1} 
          duration={20}
        />
        <FloatingShape 
          className="bottom-1/3 left-1/4" 
          size="w-64 h-64" 
          delay={3} 
          duration={22}
        />
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gradient-radial from-accent/20 to-transparent blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated Circles */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-primary/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full border border-primary/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="E26 Media Production Pvt Ltd"
          className="mb-12 h-20 w-auto md:h-28"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
          }}
         
          transition={{ 
            opacity: { duration: 0.6, delay: 0.2 },
            scale: { duration: 0.6, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Heading */}
        <motion.h1
          className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Coming Soon
        </motion.h1>

        <motion.p
          className="mb-10 max-w-md text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          We're crafting something extraordinary. Stay tuned for the launch.
        </motion.p>

        {/* Email form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-lg border border-border bg-card/50 backdrop-blur-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <motion.button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all"
                style={{ fontFamily: "var(--font-display)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </>
          ) : (
            <motion.p
              className="w-full text-center text-primary font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              ✓ You're on the list!
            </motion.p>
          )}
        </motion.form>

        {/* Social Media Links */}
        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.p
        className="absolute bottom-6 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        © 2026 E26 Media Production Pvt Ltd
      </motion.p>
    </div>
  );
};

export default Index;
