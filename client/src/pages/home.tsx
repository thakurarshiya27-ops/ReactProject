export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-foreground mb-4">
          Welcome to React
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Edit <code className="bg-muted px-2 py-1 rounded font-mono text-sm">client/src/pages/home.tsx</code> and save to reload.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover-elevate active-elevate-2"
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-react-docs"
          >
            Learn React
          </a>
        </div>
      </div>
    </div>
  );
}
