import { profile } from '../data/content.js'
import { ArrowUpIcon, GitHubIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './Icons.jsx'

// Sizes differ because the outline icons have padding inside their viewBox; these render at the same visual size.
const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedInIcon, size: 17 },
  { label: 'GitHub', href: profile.github, icon: GitHubIcon, size: 18 },
  { label: 'WhatsApp', href: profile.whatsapp, icon: WhatsAppIcon, size: 24 },
  { label: 'Instagram', href: profile.instagram, icon: InstagramIcon, size: 23 },
]

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap items-center gap-1">
          {socials.map(({ label, href, icon: SocialIcon, size }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              title={label}
              className="grid size-10 place-items-center text-muted transition-colors hover:text-accent-text"
            >
              <SocialIcon size={size} />
            </a>
          ))}
          <a
            href="#top"
            className="group ml-2 inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            Back to top
            <ArrowUpIcon size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
