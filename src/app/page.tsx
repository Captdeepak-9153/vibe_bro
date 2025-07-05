import { Button } from "@/components/ui/button";

const Page = async () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to Vibe Bro</h1>
      <Button className="mb-4">Click Me</Button>
    </div>
  );
};
export default Page;