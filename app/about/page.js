export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-12 font-sans dark:bg-black">
      <div className="w-full max-w-2xl text-center space-y-6">
        {/* Başlıq */}
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          About This Project
        </h1>
        
        {/* Layihə haqqında məlumat */}
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Minecraft Player Search is a lightweight, clean web application built to help players and 
          developers look up Minecraft profiles effortlessly. By simply entering a valid Java username, 
          you can instantly fetch their unique UUID and download or view their official character skin in real-time.
        </p>

        {/* Ayırıcı xətt */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 my-6"></div>

        {/* API-yə minnətdarlıq (Credit) */}
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200">
          Data & API Credit
        </h2>
        
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          All real-time player statistics, unique identifiers, and avatar textures are dynamically 
          sourced from the wonderful, free public API provided by{" "}
          <a
            href="https://mc-api.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline dark:text-emerald-400 font-medium"
          >
            mc-api.io
          </a>
          . We deeply appreciate their open service to the global Minecraft developer community.
        </p>
      </div>
    </div>
  );
}