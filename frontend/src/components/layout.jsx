import { ThemeProvider } from "@/src/components/theme-provider"

export default function Layout({ children }) {
    return (
      <div className="min-h-screen bg-background p-4 max-w-5xl mx-auto ">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </div>
    );
  }
  