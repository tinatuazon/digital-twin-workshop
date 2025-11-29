"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SendIcon, Loader2 } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Define the form schema with validation rules
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize the form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Handle form submission
  function onSubmit(data: FormValues) {
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log("Form submitted:", data)
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 mb-4 rounded-full bg-[#22d3ee] flex items-center justify-center">
          <SendIcon className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-foreground">Message Sent!</h4>
        <p className="text-sm text-center text-gray-600 dark:text-muted-foreground mb-4">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)} className="border-gray-300 dark:border-border text-gray-700 dark:text-foreground hover:bg-gray-100 dark:hover:bg-zinc-800/40">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-muted-foreground font-medium">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="bg-gray-50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:border-[#22d3ee] dark:focus:border-[#22d3ee]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-muted-foreground font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-gray-50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:border-[#22d3ee] dark:focus:border-[#22d3ee]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 dark:text-muted-foreground font-medium">Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="What is this regarding?"
                  className="bg-gray-50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:border-[#22d3ee] dark:focus:border-[#22d3ee]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 dark:text-muted-foreground font-medium">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  className="bg-gray-50 dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 focus:border-[#22d3ee] dark:focus:border-[#22d3ee] min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#22d3ee] hover:bg-[#1dd1e6] text-black"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <SendIcon className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
