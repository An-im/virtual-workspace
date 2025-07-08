export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Virtual Workspace</h1>
        <p className="text-sm text-gray-500">Tu escritorio digital minimalista</p>
      </header>

      <main className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {children}
      </main>
    </div>
  )
}
