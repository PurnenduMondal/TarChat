import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Logo/Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold shadow-lg">
            💬
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TARS Chat
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time messaging with reactions, typing indicators, and instant sync.
            Built with Next.js, Convex, and Clerk.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {userId ? (
            <Link
              href="/chat"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Open Chat
            </Link>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Real-Time Sync</h3>
            <p className="text-gray-600 text-sm">Messages sync instantly across all devices with Convex</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">😊</div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Message Reactions</h3>
            <p className="text-gray-600 text-sm">React to messages with emojis like WhatsApp & Slack</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Secure Auth</h3>
            <p className="text-gray-600 text-sm">Enterprise-grade authentication powered by Clerk</p>
          </div>
        </div>
      </div>
    </div>
  );
}
