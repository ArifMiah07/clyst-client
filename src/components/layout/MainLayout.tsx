'use client'

export default function MainLayout({ children }: { children: React.ReactNode }){
return(
    <main className="w-full h-full">
        {/* <h1>This is main Layout</h1> */}
        {children}
    </main>
)
}