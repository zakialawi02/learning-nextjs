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
import { useActionState } from "react";
import Link from "next/link";

const initialState = {
  message: "",
};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
          <p aria-live="polite">{state?.message}</p>
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
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" required />
              </div>
            </div>
            <Button type="submit" className="w-full mt-4">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
            <Link href="/register" className="text-blue-600 hover:underline" disabled={pending}>
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
