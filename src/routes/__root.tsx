import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "#FFFFFF" }}>
      <div className="max-w-md text-center">
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 72, fontWeight: 300, color: "#1A1410" }}>404</h1>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, color: "#1A1410", marginTop: 16 }}>
          Page not found
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#7A7060", marginTop: 8 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "0.06em",
              background: "#1A1410",
              color: "#FFFFFF",
              padding: "10px 22px",
              textDecoration: "none",
            }}
          >
            GO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aditi Soni | AI Product Manager" },
      { name: "description", content: "Portfolio of Aditi Soni, a clinician-turned-AI Product Manager building healthcare AI products at the intersection of clinical expertise and technology." },
      { name: "author", content: "Aditi Soni" },
      { property: "og:title", content: "Aditi Soni | AI Product Manager" },
      { property: "og:description", content: "Portfolio of Aditi Soni, a clinician-turned-AI Product Manager building healthcare AI products at the intersection of clinical expertise and technology." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Aditi Soni | AI Product Manager" },
      { name: "twitter:description", content: "Portfolio of Aditi Soni, a clinician-turned-AI Product Manager building healthcare AI products at the intersection of clinical expertise and technology." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f7889eb4-47f7-49f9-81a0-1a9a696947f4" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f7889eb4-47f7-49f9-81a0-1a9a696947f4" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
