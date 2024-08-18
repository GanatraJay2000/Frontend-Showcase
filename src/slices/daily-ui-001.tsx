import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useTheme } from "@/pages/_app";
import { Download } from "lucide-react";

function SignUpPage() {
  const { layout } = useTheme();
  console.log(layout);
  return (
    <div className={`flex w-full bg-[#f4f6ff] justify-center pt-20`}>
      <div
        className={cn(`bg-white rounded-lg p-4 shadow-lg  h-4/5 flex`, {
          "md:w-8/12": layout === "sidebar",
          "md:w-6/12": layout === "full",
        })}
      >
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-cyan-500 to-[#6059fa] rounded-lg flex-col items-center justify-between pb-5 pt-20 text-xs uppercase text-white">
          <span>Lorem Ipsum</span>
          <Button
            size="icon"
            variant="ghost"
            className="bg-[#ffffff33] hover:bg-[#ffffff55] scale-90"
          >
            <Download className="text-white scale-75" />
          </Button>
        </div>
        <div className="grow flex flex-col p-5 text-slate-600">
          <div className="grow flex justify-center items-center">
            <div className="w-10/12">
              <h1 className="font-extrabold text-2xl uppercase mb-3 text-center">
                Ganatra
              </h1>
              <p className="mb-6 text-center text-sm">
                Lovely Gradients every day.
              </p>
              <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="demoEmail@gmail.com"
                  className="rounded-sm"
                />
              </div>
              <div className="mb-10 grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="••••••••••••••"
                  className="rounded-sm"
                />
                <a href="#" className="text-sky-500 text-xs text-right">
                  Forgot Password?
                </a>
              </div>
              <Button
                size="lg"
                className="rounded-full bg-blue-500 hover:bg-blue-600 w-full mb-6 shadow-xl shadow-blue-100"
              >
                Sign In
              </Button>
              <a href="#" className="text-sm w-full block text-center">
                No accout? - <span className="text-sky-500 ">Join now!</span>
              </a>
            </div>
          </div>
          <div className="text-xs text-center text-slate-600">
            &#169; 2024 Jay Ganatra. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
