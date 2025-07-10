"use server"

import prisma from "@repo/db/db";

interface DataBaseSchema {
  id: number;
  name: string;
  email: string;
  number: string;
}

export default async function Home(): Promise<React.ReactElement> {
  const response: DataBaseSchema[] = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      number: true,
    },
  });

  if (!response || response.length === 0) {
    return <div className="text-red-400 p-4">No users found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen min-w-screen p-4 bg-black text-zinc-50">
      <h1 className="text-xl font-bold p-2 mb-4">User Names:</h1>
      {response.map((x)=>(
        <div key={x.id}>
          <h1>{x.name}</h1>
          <p>{x.email}</p>
          <p>{x.number}</p>
        </div>
      ))}
    </div>
  );
}
