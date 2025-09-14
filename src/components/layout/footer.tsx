export function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-gradient-to-tl from-black/15 to-transparent py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
        <p className="text-sm text-purple-900/70">
          © {new Date().getFullYear()} Rosângela | Constelação Familiar Sistêmica
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-purple-900/70 sm:justify-end">
          <a
            href="https://www.instagram.com/rosangelalopesterapeuta/"
            className="hover:text-purple-900 transition-colors"
          >
            Instagram
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://api.whatsapp.com/send?phone=5537999732842"
            className="hover:text-purple-900 transition-colors"
          >
            WhatsApp
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="#" className="hover:text-purple-900 transition-colors">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
