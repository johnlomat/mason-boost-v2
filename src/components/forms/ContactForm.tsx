'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { useToast } from '@/hooks/use-toast'

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  website: z.string().url({
    message: 'Invalid URL.',
  }),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
})

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      website: '',
      message: '',
    },
  })

  const { toast } = useToast()

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      const result = await response.json()
      console.log(result) // Handle success response
      // Optionally reset the form or show a success message
      toast({
        description: 'Your message has been sent.',
      })
      form.reset()
    } catch (error) {
      console.error('Error sending email:', error)
      // Optionally show an error message to the user
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <VisuallyHidden.Root>
                <FormLabel>Name</FormLabel>
              </VisuallyHidden.Root>
              <FormControl>
                <Input
                  placeholder="Name"
                  {...field}
                  className="border-white bg-[#CAA57F] text-white placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid-cols-2 gap-x-4 space-y-6 md:-mt-2 md:grid md:-space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:-mt-2">
                <VisuallyHidden.Root>
                  <FormLabel>Email</FormLabel>
                </VisuallyHidden.Root>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="col-span-1 border-white bg-[#CAA57F] text-white placeholder:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="md:-mt-2">
                <VisuallyHidden.Root>
                  <FormLabel>Phone</FormLabel>
                </VisuallyHidden.Root>
                <FormControl>
                  <Input
                    placeholder="Phone"
                    {...field}
                    className="col-span-1 border-white bg-[#CAA57F] text-white placeholder:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <VisuallyHidden.Root>
                <FormLabel>Website</FormLabel>
              </VisuallyHidden.Root>
              <FormControl>
                <Input
                  placeholder="Website"
                  {...field}
                  className="border-white bg-[#CAA57F] text-white placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <VisuallyHidden.Root>
                <FormLabel>Message</FormLabel>
              </VisuallyHidden.Root>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  {...field}
                  className="min-h-[6.5rem] border-white bg-[#CAA57F] text-white placeholder:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center">
          <Button type="submit" variant="secondary">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
