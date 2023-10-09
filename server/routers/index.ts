import { t } from "../trpc"

export const appRouter = t.router({
    sayHi: t.procedure.query(() => {
        return "Hello World"
    }),
    logToServer: t.procedure.input(v => {
        if (typeof v === "string") {
            return v
        }

        throw new Error("Invalid input")
    }).mutation(req => {
        console.log(`Client says: ${req.input}`)
        return true
    })
})