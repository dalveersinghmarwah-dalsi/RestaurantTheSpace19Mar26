import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-cool">
      <div className="container text-center animate-fadeInUp">
        <h1 className="text-7xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Oops! It looks like the page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
