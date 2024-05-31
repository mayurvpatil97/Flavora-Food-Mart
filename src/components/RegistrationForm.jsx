import React from "react";

function RegistrationForm() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Billey.</div>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">
              Intro
            </a>
            <a href="#" className="hover:underline">
              Demos
            </a>
            <a href="#" className="hover:underline">
              Portfolio
            </a>
            <a href="#" className="hover:underline">
              Shop
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Documentation
            </a>
          </nav>
          <button className="bg-pink-500 text-white px-4 py-2 rounded">
            PURCHASE
          </button>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-700">
            Create Your Amazing <span className="text-pink-500">Shop</span>
          </h1>
          <p className="text-zinc-700 mt-4">
            With Billey, The ultimate multipurpose creative wordpress theme
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded">
              GET BILLEY NOW
            </button>
            <button className="bg-pink-500 text-white px-6 py-3 rounded">
              BROWSE DEMOS
            </button>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src="https://placehold.co/600x400"
            alt="Main Design"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}

export default RegistrationForm;
