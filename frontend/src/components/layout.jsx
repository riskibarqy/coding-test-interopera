export default function Layout({ children }) {
    return (
      <div className="min-h-screen bg-background p-4 ">
        <main className="max-w-5xl mx-auto">{children}</main>
      </div>
    );
  }
  