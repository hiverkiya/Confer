"use client"
import { Button } from "@workspace/ui/components/button"
import {add} from "@workspace/math/add"
import {useQuery} from "convex/react"
import {api} from "@workspace/backend/_generated/api";

export default function Page() {
    const users=useQuery(api.users.getMany);
    return (
        <div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Hello World/widget</h1>
                <Button size="sm">Button</Button>
                <p>{add(2,4)}</p>
                <p>Users are {JSON.stringify(users)}</p>
            </div>
        </div>
    )
}
