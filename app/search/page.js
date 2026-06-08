"use client";

import { useState } from "react";

export default function SearchPage() {
  const [username, setUsername] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setPlayerData(null);

    try {
      // mc-api.io API-sinə sorğu göndəririk (Java edition standart olaraq)
      const res = await fetch(`https://mc-api.io/profile/${username.trim()}/java`);
      
      if (!res.ok) {
        // Əgər oyunçu tapılmasa API non-200 xətası qaytarır, bunu burada tuturuq
        throw new Error("Player not found. Check the spelling and try again!");
      }

      const data = await res.json();
      setPlayerData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center p-6 bg-zinc-50 dark:bg-black min-h-screen">
      <div className="w-full max-w-md mt-12">
        <h1 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-6">
          Find Minecraft Player
        </h1>

        {/* Axtarış Formu */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <input
            type="text"
            placeholder="Enter username (e.g., Notch, jeb_)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {/* Yüklənir Vəziyyəti */}
        {loading && (
          <p className="text-center text-zinc-500 dark:text-zinc-400">Gleaning skin data from the pixel mines...</p>
        )}

        {/* Xəta / Tapılmadı Vəziyyəti (Graceful Error Handling) */}
        {error && (
          <div className="p-4 bg-red-100 dark:bg-red-950/30 border border-red-400 dark:border-red-900 text-red-700 dark:text-red-400 rounded-lg text-center font-medium">
            😞 {error}
          </div>
        )}

        {/* Nəticə Kartı */}
        {playerData && (
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-md flex flex-col items-center gap-4 text-center">
            {/* Skin Şəkli */}
            {playerData.decodedTexture?.textures?.SKIN?.url ? (
              <div className="relative group bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                <img
                  src={playerData.decodedTexture.textures.SKIN.url}
                  alt={`${playerData.name}'s skin`}
                  className="w-32 h-32 object-contain pixelated"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            ) : (
              <div className="w-32 h-32 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center rounded-lg text-zinc-400">
                No Skin
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {playerData.name}
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1 break-all select-all">
                UUID: {playerData.uuid}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}