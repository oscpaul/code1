import db from '#/lib/db';
import { Boundary } from '#/ui/boundary';
import { LinkStatus } from '#/ui/link-status';
import Link from 'next/link';

export default async function Page() {
  const res = await fetch('https://api.vercel.app/blog', {
    next: { revalidate: 10 }, // Seconds
  });
 
  const data = await res.json();
 
  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}