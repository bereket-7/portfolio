export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy explains how we collect, use, and protect your
        information when you use our website.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        and any other information you provide via contact forms or account
        registration.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your information to provide and improve our services, communicate
        with you, and comply with legal obligations.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">
        We take appropriate measures to protect your data against unauthorized
        access, alteration, or destruction.
      </p>
      <p className="mt-8 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
