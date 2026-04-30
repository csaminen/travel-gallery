"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";

const albums = [
  {
    title: "Vegas 2025",
    location: "Las Vegas, Nevada",
    cover: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1200&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    title: "Hawaii 2024",
    location: "Hawaii",
    cover: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=1200&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    title: "Florida 2023",
    location: "Florida",
    cover: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

export default function TravelAlbums() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="mx-auto max-w-6xl px-6 py-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
          crsamineni.com
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          My Travel Albums
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-500">
          A clean personal gallery to revisit favorite trips, memories, and photos anytime.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {!selectedAlbum ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album, index) => (
              <motion.button
                key={album.title}
                onClick={() => setSelectedAlbum(album)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold">{album.title}</h2>
                  <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
                    <MapPin className="h-4 w-4" />
                    {album.location}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
                    <Camera className="h-4 w-4" />
                    {album.photos.length} photos
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          <section>
            <button
              onClick={() => setSelectedAlbum(null)}
              className="mb-8 rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100"
            >
              ← Back to albums
            </button>

            <h2 className="text-4xl font-semibold tracking-tight">{selectedAlbum.title}</h2>
            <p className="mt-2 text-neutral-500">{selectedAlbum.location}</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {selectedAlbum.photos.map((photo, index) => (
                <motion.div
                  key={photo}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.06 }}
                  className="overflow-hidden rounded-3xl bg-neutral-100 shadow-sm"
                >
                  <img
                    src={photo}
                    alt={`${selectedAlbum.title} photo ${index + 1}`}
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
