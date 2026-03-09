import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Map" },
  { href: "/timeline", label: "Timeline" },
  { href: "/browse", label: "Browse" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-stone-300 bg-stone-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <Link href="/" className="text-xl font-semibold text-stone-900">
            Chronicle
          </Link>
          <p className="text-sm text-stone-600">The Viking Age</p>
        </div>
        <nav className="flex gap-4 text-sm text-stone-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
