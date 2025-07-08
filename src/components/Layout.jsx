export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Virtual Workspace</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </main>
    </div>
  )
}
