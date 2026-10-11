import { ProjectsGrid } from "@/components/projects-grid"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Selected Focus", description: "Ahmed Elkhateeb’s areas of exploration: software and web solutions, AI education, digital learning, and IT systems and networking." }

export default function ProjectsPage() {
  return <div className="pt-24"><ProjectsGrid /></div>
}
