export function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-gradient-to-tl from-black/15 to-transparent py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-purple-900/70">
          © {new Date().getFullYear()} Rosângela | Constelação Familiar
          Sistêmica
        </p>
        <div className="flex items-center gap-4 text-sm text-purple-900/70">
          <a href="https://www.instagram.com/rosangelalopesterapeuta/" className="hover:text-purple-900">
            Instagram
          </a>
          <span>•</span>
          <a href="https://api.whatsapp.com/send?phone=5537999732842" className="hover:text-purple-900">
            WhatsApp
          </a>
          <span>•</span>
          <a href="#" className="hover:text-purple-900">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
