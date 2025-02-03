"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginAction } from "../action";
import { useActionState, useEffect } from "react";
import Link from "next/link";
import { toast } from "sonner";

const initialState = {
  data: {
    id_user: "",
    password: "",
  },
  message: "",
  success: null,
};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state?.success === false) {
      toast.error(`${state?.message}`);
    }
    if (state?.success === true) {
      toast.success(`${state?.message}`);
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
          {state?.success === false && !pending && <p className="text-red-600">{state?.message}</p>}
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="id_user">Email/Username</Label>
                <Input
                  id="id_user"
                  type="text"
                  name="id_user"
                  defaultValue={state?.data?.id_user}
                  placeholder="you@example.com"
                  disabled={pending}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" disabled={pending} required />
              </div>
            </div>
            <Button type="submit" className="w-full mt-4" disabled={pending}>
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <Link href="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
