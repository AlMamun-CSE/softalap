import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  QrCode,
  Wifi,
  Shield,
  Star,
  Play,
  Github,
  Linkedin,
  Sparkles,
  Zap,
  Download,
  Smartphone,
  Mail,
} from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-glow">
                <QrCode className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold neon-text">Softalap</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm hover:neon-text"
              >
                Features
              </a>
              <a
                href="#app"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm hover:neon-text"
              >
                App
              </a>
              <a
                href="#reviews"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm hover:neon-text"
              >
                Reviews
              </a>
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                asChild
              >
                <a href="https://play.google.com/store/apps/details?id=com.softalap.qrcode.barcode.wifiscane" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative px-6 py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative max-w-4xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            The QR Scanner for the Mobile Era
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Scan WiFi QR codes and connect instantly. The fastest, most reliable QR scanner with powerful features for
            modern mobile users.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.softalap.qrcode.barcode.wifiscane"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white hover:bg-gray-900 transition-all duration-300 hover:scale-105 rounded-lg px-6 py-3 shadow-2xl hover:shadow-black/50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7">
                    <path fill="#34A853" d="M3.609 1.814L13.792 12 3.61 22.186a1.966 1.966 0 0 1-.61-1.414V3.228c0-.528.214-1.017.61-1.414z" />
                    <path fill="#FBBC04" d="m13.792 12-10.183-10.186A2.013 2.013 0 0 1 5.02 1.22L15.43 11.64 13.792 12z" />
                    <path fill="#EA4335" d="m13.792 12 1.638-.36L25.85 1.22a2.008 2.008 0 0 1 1.411.594L13.792 12z" />
                    <path fill="#0F9D58" d="m13.792 12 10.47-10.186c.396.397.61.886.61 1.414v17.544c0 .528-.214 1.017-.61 1.414L13.792 12z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="text-xs leading-none mb-1">GET IT ON</div>
                  <div className="text-xl font-semibold leading-none">Google Play</div>
                </div>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>No Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Privacy First</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              What's in Softalap?
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need to scan and connect seamlessly.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float">
                  <Wifi className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:neon-text transition-all duration-300">
                  Instant WiFi Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scan WiFi QR codes and connect instantly without typing passwords. Revolutionary speed meets
                  simplicity.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float">
                  <QrCode className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:neon-text transition-all duration-300">
                  Universal Scanner
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scan any QR code or barcode format with precision and speed. Advanced AI recognition technology.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:neon-text transition-all duration-300">
                  Privacy First
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No data collection or tracking. Your privacy is guaranteed with military-grade security.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                The complete platform to scan the mobile world.
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your toolkit to stop struggling with WiFi passwords and start connecting instantly. Securely scan,
                connect, and access digital content with Softalap's advanced AI-powered recognition.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-all duration-300 shadow-xl"
                  asChild
                >
                  <a href="https://play.google.com/store/apps/details?id=com.softalap.qrcode.barcode.wifiscane" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 w-5 h-5" />
                    Download App
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card hover:bg-white/10 transition-all duration-300 bg-transparent"
                >
                  Explore Features
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md sm:max-w-lg">
                <div className="relative animate-float">
                  <Image
                    src="/images/app-wifi-onboarding.png"
                    alt="WiFi Connection"
                    width={280}
                    height={560}
                    className="w-full max-w-[240px] sm:max-w-[280px] h-auto rounded-2xl border border-border/50 shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative mt-0 sm:mt-8 animate-float" style={{ animationDelay: "2s" }}>
                  <Image
                    src="/images/app-digital-scan.png"
                    alt="Digital Scanner"
                    width={280}
                    height={560}
                    className="w-full max-w-[240px] sm:max-w-[280px] h-auto rounded-2xl border border-border/50 shadow-2xl hover:shadow-accent/25 transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:animate-pulse">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground mb-2">downloads</div>
                <div className="text-sm text-muted-foreground">on Google Play.</div>
                <div className="mt-4 text-xs font-mono text-primary">SOFTALAP</div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-accent to-green-500 bg-clip-text text-transparent group-hover:animate-pulse">
                  98%
                </div>
                <div className="text-sm text-muted-foreground mb-2">faster</div>
                <div className="text-sm text-muted-foreground">WiFi connection.</div>
                <div className="mt-4 text-xs font-mono text-accent">INSTANT</div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent group-hover:animate-pulse">
                  100%
                </div>
                <div className="text-sm text-muted-foreground mb-2">privacy</div>
                <div className="text-sm text-muted-foreground">guaranteed.</div>
                <div className="mt-4 text-xs font-mono text-green-500">SECURE</div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:animate-pulse">
                  0
                </div>
                <div className="text-sm text-muted-foreground mb-2">ads or</div>
                <div className="text-sm text-muted-foreground">tracking.</div>
                <div className="mt-4 text-xs font-mono text-blue-500">CLEAN</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="app" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                Faster connection. More innovation.
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                The platform for rapid WiFi access. Let your devices focus on connecting instead of managing passwords
                with automated QR scanning, built-in network details, and integrated sharing capabilities.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full group-hover:animate-pulse"></div>
                  <span className="text-sm group-hover:neon-text transition-all duration-300">
                    Instant WiFi QR code scanning with AI recognition
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-green-500 rounded-full group-hover:animate-pulse"></div>
                  <span className="text-sm group-hover:neon-text transition-all duration-300">
                    Complete network information display and management
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full group-hover:animate-pulse"></div>
                  <span className="text-sm group-hover:neon-text transition-all duration-300">
                    Universal barcode and QR recognition technology
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md sm:max-w-lg">
                <div className="animate-float" style={{ animationDelay: "1s" }}>
                  <Image
                    src="/images/app-wifi-details.png"
                    alt="WiFi Details"
                    width={280}
                    height={560}
                    className="w-full max-w-[240px] sm:max-w-[280px] h-auto rounded-2xl border border-border/50 shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="animate-float" style={{ animationDelay: "3s" }}>
                  <Image
                    src="/images/app-qr-scanner.png"
                    alt="QR Scanner"
                    width={280}
                    height={560}
                    className="w-full max-w-[240px] sm:max-w-[280px] h-auto rounded-2xl border border-border/50 shadow-2xl hover:shadow-accent/25 transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Loved by users worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands who trust Softalap for their QR scanning needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed">
                  "Finally, a QR scanner that actually works! Connecting to WiFi has never been easier. The interface is
                  clean and the scanning is lightning fast."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mike Johnson</p>
                    <p className="text-xs text-muted-foreground">Google Play User</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed">
                  "Clean interface, fast scanning, and no annoying ads. This is how apps should be made. Privacy-focused
                  and user-friendly."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-green-500 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Chen</p>
                    <p className="text-xs text-muted-foreground">App Store Reviewer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed">
                  "Perfect for my business. Customers can connect to our WiFi instantly. Increased customer satisfaction
                  significantly."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-medium">Alex Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Cafe Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 glass-card">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-glow">
                  <QrCode className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold neon-text">Softalap</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Making QR code scanning effortless for everyone with cutting-edge technology.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-primary">App</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.softalap.qrcode.barcode.wifiscane" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    How to Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-accent">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    Our Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-green-500">Support</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    Report Bug
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-all duration-300 hover:neon-text">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 Softalap. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="mailto:almamun.coder@gmail.com"
                className="text-muted-foreground hover:text-blue-500 transition-all duration-300 hover:scale-110"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/AlMamun-CSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/coderalmamun/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-500 transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
