"use client"

import Section from "@/components/global/Section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const TculesSubscription = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async () => {
    const email = emailRef.current?.value?.trim()

    // 1️⃣ Validate
    if (!email || !EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setError(null)
    setLoading(true)

    // try {
    //   // 2️⃣ Call GraphQL mutation
    //   const res = await fetch(
    //     process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL!,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         query: `
    //           mutation CreateSubscription($email: String!) {
    //             createSubscription(data: { email: $email }) {
    //               data {
    //                 id
    //               }
    //             }
    //           }
    //         `,
    //         variables: { email },
    //       }),
    //     }
    //   )

    //   const json = await res.json()

    //   if (json.errors) {
    //     throw new Error(json.errors[0].message)
    //   }

    //   if (emailRef.current) {
    //     emailRef.current.value = ""
    //   }

    //   alert("Subscribed successfully 🎉")
    // } catch (err) {
    //   setError(`Something went wrong. Please try again. ${err}`)
    // } finally {
    //   setLoading(false)
    // }
  }

  return (
    <Section>
      <h1 className="text-center mb-6">
        <span className="text-display-sm text-accent-600 inline-block md:inline">
          Level up
        </span>
        <span className="text-heading-sm text-neutral-800 ml-4 inline-block md:inline">
          Your UX knowledge
        </span>
      </h1>

      <p className="text-label-xl text-center text-neutral-700 mb-8">
        Subscribe to receive practical UX insights for your product
      </p>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <Input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            className="w-52 text-label-sm"
          />
          <Button onClick={handleSubscribe} disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>

        {error && (
          <p className="text-sm text-red-500 mt-2">
            {error}
          </p>
        )}
      </div>
    </Section>
  )
}

export default TculesSubscription
