import { prisma } from "./prisma.js";
import bcrypt from "bcrypt";

async function main() {
  const passwordHash = await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      firstName: "Admin",
      lastName: "User",
      email: "admin@test.com",
      passwordHash,
      role: "ADMIN"
    },
  });

  console.log("Admin user created");
}

main()
  .catch(console.error)
  .finally(() => process.exit());
