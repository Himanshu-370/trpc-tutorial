import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client'
import { AppRouter } from "../../server/api"

const client = createTRPCProxyClient<AppRouter>({
    links: [loggerLink(),
    httpBatchLink({
        url: "http://localhost:3000/trpc",
        // headers: { Authorization: "TOKEN" }
    })]
})


async function main() {
    // const result = await client.sayHi.query()
    // console.log(result)

    // const result = client.logToServer.mutate("Hi from client")
    // console.log(result)

    //Merged Router
    // const result = await client.getUser.query()
    // console.log(result)

    // const result = await client.users.get.query({ userId: "2314" })
    // const result = await client.users.update.mutate({ userId: "1234", name: "Himanshu" })
    // console.log(result)

    const result = await client.secretData.query()
    console.log(result)
}

main()