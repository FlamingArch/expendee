
import SocialSignIn from "@/fragments/SocialSignIn"
import Button from "@/views/Button"
import Page from "@/views/Page"
import Section from "@/views/Section"
import Sidebar from "@/views/Sidebar"

export default function LayoutSignIn({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar title="Expendee" titleBrandingFont className="justify-end md:justify-center"></Sidebar>
      <Page title="Sign In" className="text-center md:justify-center md:max-w-[400px]">
        {children}
        <SocialSignIn />
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
