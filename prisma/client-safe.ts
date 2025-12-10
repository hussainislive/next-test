// prisma/client-safe.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const getPrisma = () => {
    if (typeof window !== "undefined") {
        throw new Error("PrismaClient cannot be used in the browser");
    }

    if (!globalForPrisma.prisma) {
        globalForPrisma.prisma = new PrismaClient({
            log: ["query"],
        });
    }

    return globalForPrisma.prisma;
};