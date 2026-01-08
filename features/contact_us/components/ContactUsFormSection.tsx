"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CLIENT_CONTACT_MUTATION } from "@/lib/mutations/clientContact";
import { useMutation } from "@apollo/client/react";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  clientCompany: z.string().min(2).max(50),
  email: z.string().email(),
  contactNumber: z.string().min(6).max(12),
  ideaAboutProject: z.string().min(6).max(400),
});

const ContactUsFormSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      clientCompany: "",
      email: "",
      contactNumber: "",
      ideaAboutProject: "",
    },
  });

  const [createContact, { loading, error, data }] = useMutation(
    CLIENT_CONTACT_MUTATION
  );

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createContact({
      variables: {
        data: {
          clientName: values.fullName,
          clientEmail: values.email,
          clientCompany: values.clientCompany,
          clientContact: values.contactNumber,
          clientComments: values.ideaAboutProject,
        },
      },
    });
  }
  return (
    <div className="p-8 bg-neutral-100 rounded-xl mx-auto mb-6 sm:mb-11">
        {error && <p className="text-red-500">{error.message}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-caption-lg text-neutral-900">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm text-neutral-400 bg-neutral-50"
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clientCompany"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-caption-lg text-neutral-900">
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm text-neutral-400 bg-neutral-50"
                      placeholder="Your Company"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-caption-lg text-neutral-900">
                    Email Address*
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm text-neutral-400 bg-neutral-50"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-caption-lg text-neutral-900">
                    Contact Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm text-neutral-400 bg-neutral-50"
                      placeholder="+1 (434) 989 98"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="ideaAboutProject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-caption-lg text-neutral-900">
                  Let’s talk about your product
                </FormLabel>
                <FormControl>
                  <Input
                    type="text-area"
                    className="text-label-sm text-neutral-400 bg-neutral-50"
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="uppercase"
            type="submit"
          >
            {loading ? "Submitting..." : data ? "Submitted" : "Submit Form"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsFormSection;
