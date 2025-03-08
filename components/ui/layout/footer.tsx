import { ClanName } from "@/app/page"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2D2E6D] via-[#2D2E6D] to-[#1D1E4D] text-[#F3F9FE] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2024 Clã <ClanName />. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" className="hover:text-[#BCB099] transition-colors">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-[#BCB099] transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a href="mailto:contact@lordwolf.com" className="hover:text-[#BCB099] transition-colors">
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

