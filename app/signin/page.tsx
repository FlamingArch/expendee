"use client";
import SocialSignIn from "@/fragments/SocialSignIn";
import Button from "@/views/Button";
import Section from "@/views/Section";

export default function PageSignIn() {
  return (
    <>
      <Section header="Sign In With Your Expendee ID">
        <input type="email" className="input-primary" placeholder="Email" />
        <input type="password" className="input-primary" placeholder="Password" />
        <Button primary label="Sign In" onClick={() => alert("Button Works")} />
      </Section>
      <Section header="Or Sign In Via">
        <SocialSignIn />
      </Section>
    </>
  );
}
