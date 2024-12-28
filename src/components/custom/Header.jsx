import { ThemeProvider } from "@/components/Toogle Mode/theme-provider"
import { ModeToggle } from '../Toogle Mode/mode-toggle'
import { Button } from '../ui/button'

function Header() {
    return (
        <div className='p-3 shadow-sm flex justify-between items-center px-5'>
            <img src="/logo.svg" alt="This is a logo" />
            <div className=" flex gap-2">
                <Button >Login</Button>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <ModeToggle />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
