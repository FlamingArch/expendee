'use client';

import React from 'react'
import Button from "@/views/Button";
import Section from "@/views/Section";
import { signInEmail } from '../firebase';
import { redirect } from 'next/navigation';
import _ from "lodash"
import { FirebaseError } from 'firebase/app';
import ErrorBanner from '@/views/ErrorBanner';

export default function PageSignIn() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState<null | FirebaseError>(null)

  const handleClick = () => {
    if (email.length == 0) {
      alert('No Email Provided')
      return
    }

    if (password.length == 0) {
      alert('No Password Provided')
      return
    }

    signInEmail(email, password)
      .then(credential => {
        redirect("/")
      })
      .catch(e =>
        setError(e)
      )
  }

  return (
    <Section header="Sign In With Your Expendee ID">
      <ErrorBanner error={error?.code} />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <Button
        primary
        label="Sign In"
        onClick={handleClick}
      />
    </Section>
  );
}
