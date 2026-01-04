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

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  ideaAboutProject: z.string().min(6).max(400),
});

const LabsFilContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
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
          clientComments: values.ideaAboutProject,
        },
      },
    });
  }
  return (
    <div>
        {error && <p className="text-red-500">{error.message}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-caption-lg text-neutral-50 mb-4">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm  idea-textarea text-neutral-400 outline-none bg-neutral-900 selection:bg-neutral-900 border-none ring-0"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-caption-lg text-neutral-50 mb-4">
                    Email Address*
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-label-sm  idea-textarea text-neutral-400 outline-none bg-neutral-900 selection:bg-neutral-900 border-none ring-0"
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
            name="ideaAboutProject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-caption-lg text-neutral-50 mb-4">
                  TELL US ABOUT THE ARTEFACT
                </FormLabel>
                <FormControl>
                  <Input
                    type="text-area"
                    className="text-label-sm  idea-textarea text-neutral-400 outline-none bg-neutral-900  border-none ring-0"
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="uppercase  text-neutral-800"
            type="submit"
          >
            {loading ? "Submitting..." : data ? "Submitted" : "Submit Form"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LabsFilContactForm;
