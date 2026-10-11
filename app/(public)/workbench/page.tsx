import { Workbench } from "@/components/workbench"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Workbench", description: "Ahmed Elkhateeb’s experience in ICT teaching, technical support, design, and technology sales." }

export default function WorkbenchPage() {
  return <div className="pt-24"><Workbench /></div>
}
