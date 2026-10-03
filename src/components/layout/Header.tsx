import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { REGISTER_URL } from "@/lib/event";

const navItems = [
	{ label: "Home", to: "/" },
	{ label: "Agenda", to: "/agenda" },
	{ label: "Speakers", to: "/speakers" },
	{ label: "Sponsors", to: "/sponsors" },
	{ label: "Teams", to: "/team" },
	{ label: "Gallery", to: "/gallery" },
	{ label: "Contact", to: "/contact" },
];

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const linkCls = ({ isActive }: { isActive: boolean }) =>
		`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
			isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
		}`;

	return (
		<header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
			<nav className="container flex items-center justify-between h-16">
				<NavLink to="/" className="flex items-center gap-2 font-display text-lg">
					<img
						src="/images/gdg-cloud-chandigarh.png"
						alt="Google Developer Groups Cloud Chandigarh"
						className="h-auto w-auto"
						style={{ maxWidth: "180px" }}
					/>
				</NavLink>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-1">
					{navItems.map((item) => (
						<NavLink key={item.to} to={item.to} className={linkCls} end>
							{item.label}
						</NavLink>
					))}
				</div>

				{/* Mobile Dropdown Button */}
				<div className="items-center gap-2">
					<Button
						variant="outline"
						className="w-10 h-10 flex md:hidden items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none"
						onClick={() => setMenuOpen((open) => !open)}
						aria-label="Open navigation menu"
					>
						<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</Button>
					<Button
						asChild
						variant="outline"
						className="lift hidden lg:flex w-24 h-10 items-center justify-center bg-white border-2 border-black border-t-4 border-r-4 rounded-none font-medium hover:bg-black hover:text-white bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 via-[hsl(var(--brand-green))]/10 to-[hsl(var(--brand-yellow))]/10"
					>
						<a href={REGISTER_URL}>Register</a>
					</Button>
				</div>

				{/* Mobile Dropdown Menu */}
				{menuOpen && (
					<div className="absolute top-16 left-0 w-full bg-background border-b shadow-lg md:hidden z-50 animate-fade-in">
						<div className="container flex flex-col py-2">
							{navItems.map((item) => (
								<NavLink
									key={item.to}
									to={item.to}
									className={({ isActive }) =>
										`px-4 py-3 text-base font-medium border-b last:border-b-0 transition-colors ${
											isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
										}`
									}
									end
									onClick={() => setMenuOpen(false)}
								>
									{item.label}
								</NavLink>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
