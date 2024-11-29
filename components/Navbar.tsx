"use client";

import * as React from 'react'
import { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { useDispatch, useSelector } from "react-redux";
import { getAuthToken, removeAuthToken } from "@/app/redux/entities/user/userSlice";
import { RootState } from "@/app/redux/store";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "ACM",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "PROCOM",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Developers Day",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "FDSS",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "MLSA",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "GDSC",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "MLSA",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "GDSC",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {

  const status = useSelector((state: RootState) => state.user.authToken);
  const [authStatus, setAuthStatus] = useState(status); 

  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    
    dispatch(removeAuthToken());
    setAuthStatus("")
    router.push('/');
  }
  
  return (
    <div className="flex justify-between px-5 py-2 shadow-md">
      <div className="py-1 text-xl font-bold">Campus Connect</div>
      <div className="flex gap-4">
        <NavigationMenu className="">
          <NavigationMenuList className="flex justify-center">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()}`}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/societies" passHref>
                <NavigationMenuTrigger className="">
                  Societies
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {/* {component.description} */}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <Link href="/events" legacyBehavior passHref className="">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/competitions" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}font-normal`}
                >
                  Competititons
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        { !authStatus ? (
          <div className="flex gap-2">
            <Button variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
            <Button>
              <Link href="/profile">My Profile</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
