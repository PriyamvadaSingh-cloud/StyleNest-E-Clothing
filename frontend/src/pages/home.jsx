
import { useState } from "react"
import { Menu, X, Search, ShoppingBag, ChevronRight, Heart } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed w-full bg-background z-50 border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden" aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-light tracking-wider ml-4 md:ml-0">StyleNest</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
            <a href="#" className="hover:opacity-60 transition-opacity">
              Shop
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              Collections
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              About
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              Contact
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hover:opacity-60 transition-opacity">
              <Search size={20} />
            </button>
            <button aria-label="Wishlist" className="hover:opacity-60 transition-opacity">
              <Heart size={20} />
            </button>
            <button aria-label="Shopping bag" className="hover:opacity-60 transition-opacity">
              <ShoppingBag size={20} />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-4 text-sm font-light tracking-wide">
              <a href="#" className="block hover:opacity-60 transition-opacity">
                Shop
              </a>
              <a href="#" className="block hover:opacity-60 transition-opacity">
                Collections
              </a>
              <a href="#" className="block hover:opacity-60 transition-opacity">
                About
              </a>
              <a href="#" className="block hover:opacity-60 transition-opacity">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="relative overflow-hidden h-96 md:h-[600px]">
          <img src="/luxury-fashion-clothing-product-photography.jpg" alt="Featured collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-6xl font-light tracking-wider text-white mb-4">New Season</h2>
            <p className="text-white text-sm md:text-base font-light tracking-wide mb-8">
              Explore our latest collection of timeless pieces
            </p>
            <button className="bg-white text-foreground px-8 py-3 text-sm font-light tracking-wider hover:bg-opacity-90 transition-all">
              Discover Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h3 className="text-3xl md:text-4xl font-light tracking-wider mb-12 text-center">Shop by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Women", image: "women%20fashion%20apparel%20collection" },
            { name: "Men", image: "men%20fashion%20apparel%20collection" },
            { name: "Accessories", image: "luxury%20fashion%20accessories" },
          ].map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="relative h-96 md:h-[450px] overflow-hidden bg-muted mb-4">
                <img
                  src={`/.jpg?height=450&width=400&query=${category.image}`}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-light tracking-wide">{category.name}</h4>
                <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-light tracking-wider mb-4">Premium Quality, Timeless Style</h3>
          <p className="text-muted-foreground text-base font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Curated collections of contemporary clothing designed for the modern lifestyle. Every piece reflects our
            commitment to quality and elegant design.
          </p>
          <button className="bg-foreground text-background px-8 py-3 text-sm font-light tracking-wider hover:opacity-90 transition-all">
            View All Collections
          </button>
        </div>
      </section>

      {/* Collection Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-light tracking-wider mb-6">Sustainable Fashion</h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Our commitment to sustainability means every piece is crafted with care for the environment. From
              eco-conscious materials to ethical production, StyleNest is fashion with a purpose.
            </p>
            <button className="flex items-center gap-2 text-sm font-light tracking-wide hover:opacity-60 transition-opacity">
              Learn More <ChevronRight size={18} />
            </button>
          </div>
          <div className="h-96 md:h-[500px] bg-muted overflow-hidden">
            <img src="/sustainable-fashion-clothing.png" alt="Sustainable collection" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h3 className="text-3xl md:text-4xl font-light tracking-wider mb-4">Stay Updated</h3>
          <p className="font-light leading-relaxed mb-8 opacity-90">
            Subscribe to receive exclusive offers and updates about new collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-background text-foreground px-4 py-3 text-sm font-light outline-none"
            />
            <button className="bg-background text-foreground px-8 py-3 text-sm font-light tracking-wider hover:opacity-90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-light text-sm tracking-wider mb-4">Shop</h4>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-sm tracking-wider mb-4">Support</h4>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-sm tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-sm tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm font-light text-muted-foreground">
            <p>&copy; 2025 StyleNest. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
