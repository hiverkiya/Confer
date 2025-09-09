"use client";
import { Button } from "@workspace/ui/components/button";
import { add } from "@workspace/math/add";
import { api } from "@workspace/backend/_generated/api";
import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Hello World/web</h1>
          <UserButton />
          <OrganizationSwitcher hidePersonal={true} />
          <Button size="sm">Button</Button>
          <p>{add(2, 4)}</p>

          <Button onClick={() => addUser()}>Add</Button>
        </div>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p className="max-w-sm w-full mx-auto">
            Users are {JSON.stringify(users)}
          </p>
        </div>
      </div>
      <p> Must be signed in</p>
      <SignInButton>Sign in!</SignInButton>
    </>
  );
}
