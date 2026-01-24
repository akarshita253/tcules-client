"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CLIENT_CONTACT_MUTATION } from "@/lib/mutations/clientContact";
import { useMutation } from "@apollo/client/react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  clientCompany: z.string().min(2).max(50),
  email: z.string().email(),
  contactNumber: z.string().min(6).max(12),
  ideaAboutProject: z.string().min(6).max(400),
});

const PseoContactUsForm = () => {
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
    CLIENT_CONTACT_MUTATION,
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
    <div className="p-10 rounded-xl mx-auto mb-6 sm:mb-11 shadow-[0_4px_45.1px_0_rgba(0,0,0,0.03)]">
      {error && <p className="text-red-500">{error.message}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-caption-lg text-neutral-800 uppercase mb-3 font-medium">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm text-neutral-800 bg-neutral-100 placeholder:text-neutral-400 placeholder:text-label-sm "
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
                  <FormLabel className="text-caption-lg text-neutral-800 uppercase mb-3 font-medium">
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm text-neutral-800 bg-neutral-100 placeholder:text-neutral-400 placeholder:text-label-sm "
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
                  <FormLabel className="text-caption-lg text-neutral-800 uppercase mb-3 font-medium">
                    Email Address*
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm text-neutral-800 bg-neutral-100 placeholder:text-neutral-400 placeholder:text-label-sm "
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
                  <FormLabel className="text-caption-lg text-neutral-800 uppercase mb-3 font-medium">
                    Contact Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm text-neutral-800 bg-neutral-100 placeholder:text-neutral-400 placeholder:text-label-sm "
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
                <FormLabel className="text-caption-lg text-neutral-800 uppercase mb-3 font-medium">
                  Let’s talk about your product
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    className="text-label-sm text-neutral-800 h-[100px] md:h-[186px] bg-neutral-100 placeholder:text-neutral-400 placeholder:text-label-sm "
                    placeholder="Tell us about your product and we will take it from there...."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"secondary"} type="submit">
            {loading ? "Submitting..." : data ? "Submitted" : "Submit Form"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PseoContactUsForm;
