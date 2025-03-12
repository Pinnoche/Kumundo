import React from 'react';

function Section3() {
  const steps = [
    {
      title: "Create Solana Wallet",
      description:
        "To purchase a token using Phantom, Solflare, or BonkBot, download and install a wallet extension or app. Create a new wallet, set a password, and secure your backup seed phrase. Fund it by transferring Solana ($SOL) from an exchange or another wallet to your Solana address.",
    },
    {
      title: "Buy Solana ($SOL)",
      description:
        "Purchase Solana ($SOL) from a trusted exchange like Binance, Coinbase, or Kraken. Transfer the purchased SOL to your wallet address. Ensure you have enough to cover transaction fees and token purchases.",
    },
    {
      title: "Connect Your Wallet",
      description:
        "Go to the official Kumundo platform and click 'Connect Wallet.' Select your preferred Solana wallet (Phantom, Solflare, or BonkBot) and approve the connection to interact with the platform.",
    },
    {
      title: "Purchase Your Token",
      description:
        "Once your wallet is connected, navigate to the token sale section. Enter the desired amount and approve the transaction. Your purchased tokens will be transferred to your Solana wallet instantly.",
    },
  ];

  return (
    <section id="how-to-buy" className="w-full px-6 md:px-12 lg:px-20 mt-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">How to Buy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold text-center text-gray-900 border-b border-gray-300 pb-3">
              {step.title}
            </h3>
            <p className="text-lg text-gray-700 text-justify leading-relaxed mt-4">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;
