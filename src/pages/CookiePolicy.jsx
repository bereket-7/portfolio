export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">
        This Cookie Policy explains how we use cookies and similar technologies
        on our website.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device that help us improve
        your browsing experience.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Cookies</h2>
      <p className="mb-4">
        We use cookies to remember your preferences, analyze site usage, and
        personalize content.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Managing Cookies</h2>
      <p className="mb-4">
        You can disable cookies in your browser settings, but this may affect
        your ability to use certain features of the site.
      </p>
      <p className="mt-8 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
