
import Button from "@/views/Button"
import Page from "@/views/Page"
import Section from "@/views/Section"
import Sidebar from "@/views/Sidebar"

export default function LayoutSignIn({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar className="hidden md:flex" />
      <Page title="Sign In" className="text-center justify-center md:max-w-[400px]">
        {children}
        <Section header="Don't Have An Account?">
          <Button
            href="/signup"
            label="Sign Up" />
          <Button
            href="/guest"
            label="Try Expendee without Account"
            icon={<b>NEW!</b>} />
        </Section>
      </Page>
    </>
  )
}
