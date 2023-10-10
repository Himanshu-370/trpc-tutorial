import { adminProcedure, t } from "../trpc"
import { userRouter } from "./users"

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
    }),
    secretData: adminProcedure.query(({ ctx }) => {
        console.log(ctx.user)
        return "Secret Data"
    }),
    users: userRouter,
})

// export const mergedRouter = t.mergeRouters(appRouter, userRouter)