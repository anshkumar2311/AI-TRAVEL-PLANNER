import { ThemeProvider } from "@/components/Toogle Mode/theme-provider"
import { ModeToggle } from '../Toogle Mode/mode-toggle'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";


function Header() {
    return (
        <div className='p-3 shadow-sm flex justify-between items-center px-5'>
            <img src="/logo.svg" alt="This is a logo" />
            <div className="flex gap-2 items-center">
                {/* User Button for Signed-In Users */}
                <SignedIn>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                userButtonAvatarBox: "h-8 w-8",
                                userButton: "p-2 border border-neutral-200 dark:border-white/[0.2] rounded-full",
                            },
                        }}
                    />
                </SignedIn>

                {/* Sign-in Button for Unauthenticated Users */}
                <SignedOut>
                    <SignInButton>
                        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                            <span>Login</span>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px" />
                        </button>
                    </SignInButton>
                </SignedOut>

                {/* Theme Toggle */}
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <ModeToggle />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
