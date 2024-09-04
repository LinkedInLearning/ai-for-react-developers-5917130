/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/xi9LV3mNvDf
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function ParisPage() {
  return (
    (<section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container grid gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Discover Paris</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed">
            Explore the most popular tourist destinations in the city of lights.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Eiffel Tower</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Eiffel Tower"
              width={600}
              height={400}
              className="object-cover w-full h-64" />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Eiffel Tower</h3>
              <p className="text-sm text-muted-foreground">
                The iconic landmark of Paris, offering breathtaking views.
              </p>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Louvre Museum</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Louvre Museum"
              width={600}
              height={400}
              className="object-cover w-full h-64" />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Louvre Museum</h3>
              <p className="text-sm text-muted-foreground">The world's largest art museum, home to the Mona Lisa.</p>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Notre-Dame Cathedral</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Notre-Dame Cathedral"
              width={600}
              height={400}
              className="object-cover w-full h-64" />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Notre-Dame Cathedral</h3>
              <p className="text-sm text-muted-foreground">
                A medieval Gothic Catholic cathedral, a masterpiece of architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}
