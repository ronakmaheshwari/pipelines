import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
console.log("Connected to DB!")

export default async function main() {
    console.log("Sending Test data");
    const alice = await prisma.user.create({
        data:{
            name:"alice",
            email:"alice@gmail.com",
            number:"1111111111",
            password:"Pass@123"
        }
    })

    const bob = await prisma.user.upsert({
        where:{email:"bob@gmail.com"},
        update:{},
        create:{
            name:"bob",
            email:"bob@gmail.com",
            number:"2222222222",
            password:"Pass@123"
        }
    })
    console.log(alice,bob);
}

main().then(async()=>{
    await prisma.$disconnect()
    console.log(`Closed Seeding DB TEST`)
}).catch(async(e)=>{
     console.error("❌ Error while seeding DB", e);
    await prisma.$disconnect();
})