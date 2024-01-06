
import Page from "@/views/Page"
import Section from "@/views/Section"
import Sidebar from "@/views/Sidebar"
import Link from "next/link"

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar title="Expendee" titleBrandingFont />
      <Page>
        <Section header="Sign in with your Expendee ID">
          {children}
        </Section>
        <Section header="Don't Have An Account?">
          <Link href="/signup" className="button-secondary">Sign Up</Link>
          <Link href="/guest" className="button-secondary">
          </Link>
        </Section>
      </Page>
    </>
  )
}
