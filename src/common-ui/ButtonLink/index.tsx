import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function ButtonLink({
  children,
  href,
  ...ButtonProps
}: { children: ReactNode; href: string } & ButtonProps) {
  return (
    <Button {...ButtonProps} href={href} LinkComponent={Link}>
      {children}
    </Button>
  );
}
