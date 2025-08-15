export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        By using our website, you agree to the following terms and conditions.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Website</h2>
      <p className="mb-4">
        You agree to use this website for lawful purposes only and not engage in
        any activity that could harm the site or other users.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4">
        All content on this website, including text, images, and code, is owned
        by us or our licensors and may not be used without permission.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h2>
      <p className="mb-4">
        We make no guarantees about the accuracy or reliability of information
        provided on this site.
      </p>
      <p className="mt-8 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
