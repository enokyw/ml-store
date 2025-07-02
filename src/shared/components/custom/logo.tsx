'use client';

import { useTheme } from "@/shared/providers/theme.provider";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
    const { currentTheme } = useTheme();
    return (
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={`/${currentTheme}-logo.png`}
            alt="StartX369"
            width={130}
            height={40}
            className="object-cover h-auto w-24 lg:w-32"
            priority
          />
          <span className="sr-only">StartX369</span>
        </Link>
    )
}