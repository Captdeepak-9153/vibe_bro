import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //Imagine this is a for Download step
    await step.sleep("Download step", "30s");

    //Imagine this is for transcript step
    await step.sleep("Transcript step", "10s");


    //Imagine this is for Summary step
    await step.sleep(" Summarry step", "5s");

    return { message: `Hello ${event.data.email}!` };
  },
);
