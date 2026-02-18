import Link from "next/link";
import NavAuthButton from "./NavAuthButton";
import CartButton from "./CartButton";
import AboutButton from "./Aboutbutton";




export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="w-full px-4 pt-4 ">
        <div className="flex items-center justify-between rounded-2xl px-5 py-3 text-emerald-50 shadow-sm" style={{ backgroundColor: "var(--primary)" }}>
          <Link href="/" className="text-base font-semibold tracking-tight">
            Campus Coach
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            {/*<section id="how-it-works">
                <Link href="/#how-it-works" className="hover:opacity-80">
                How it works
                </Link>*
            </section>*/}
            {/*<section id="about">
                <Link href="/#about" className="hover:opacity-80">
                About
                </Link>
            </section>*/}
            <AboutButton />
            <Link
              href="/scholarships"
              className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-950" style={{background: "var(--accent)"}}
            >
              Browse scholarships
            </Link>

           <CartButton />
           <NavAuthButton />
          



          </nav>
        </div>
      </div>
    </header>
  );
}
