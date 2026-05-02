"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

const albums = [
  {
    title: "Vegas 2025",
    location: "Las Vegas, Nevada",
    cover: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1200&auto=format&fit=crop",
    photos: [
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-01.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-19.jpg",
    ],
  },

    {
    title: "Bay Area 2025",
    location: "Bay Area, California",
    cover: "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-06.jpg",
    photos: [
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-01.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-02.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-03.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-04.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-05.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-06.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-07.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-08.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-09.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-10.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-11.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-12.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-13.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-14.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-15.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-16.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-17.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-18.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-19.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-20.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-21.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-22.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-23.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-24.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/bay-area-2025/bay-area-2024-25.jpg",
    ],
  },

  {
    title: "Hawaii 2024",
    location: "Hawaii",
    cover: "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-31_fixed.jpg",
    photos: [
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-01.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-02.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-03.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-04.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-05.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-06.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-07.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-08.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-09.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-10.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-12.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-13.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-14.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-15.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-16.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-17.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-18.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-19.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-20.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-21.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-22.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-23.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-24.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-25.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-26.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-27.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-28.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-29.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-30_fixed.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-31_fixed.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-32_fixed.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-33_fixed.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-34_fixed.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-35.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-36.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-37_fixed.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-38.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-39.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-40.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-41.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-42.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-43.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-44.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-45.jpg",
      "https://6vnb8fbok9c2cdw5.public.blob.vercel-storage.com/hawaii-2024/hawaii-2024-46.jpg",
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
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openPhoto = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closePhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const showPreviousPhoto = (event) => {
    event.stopPropagation();

    if (!selectedAlbum || selectedPhotoIndex === null) return;

    setSelectedPhotoIndex((currentIndex) =>
      currentIndex === 0 ? selectedAlbum.photos.length - 1 : currentIndex - 1
    );
  };

  const showNextPhoto = (event) => {
    event.stopPropagation();

    if (!selectedAlbum || selectedPhotoIndex === null) return;

    setSelectedPhotoIndex((currentIndex) =>
      currentIndex === selectedAlbum.photos.length - 1 ? 0 : currentIndex + 1
    );
  };

  const selectedPhoto =
    selectedAlbum && selectedPhotoIndex !== null
      ? selectedAlbum.photos[selectedPhotoIndex]
      : null;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="mx-auto max-w-6xl px-6 py-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
          crsamineni.com
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          My Travel Albums
        </h1>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {!selectedAlbum ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album, index) => (
              <motion.button
                key={album.title}
                onClick={() => {
                  setSelectedAlbum(album);
                  setSelectedPhotoIndex(null);
                }}
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
              onClick={() => {
                setSelectedAlbum(null);
                setSelectedPhotoIndex(null);
              }}
              className="mb-8 rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100"
            >
              ← Back to albums
            </button>

            <h2 className="text-4xl font-semibold tracking-tight">
              {selectedAlbum.title}
            </h2>
            <p className="mt-2 text-neutral-500">{selectedAlbum.location}</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {selectedAlbum.photos.map((photo, index) => (
                <motion.button
                  key={photo}
                  onClick={() => openPhoto(index)}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.06 }}
                  className="overflow-hidden rounded-3xl bg-neutral-100 shadow-sm transition hover:opacity-90"
                >
                  <img
                    src={photo}
                    alt={`${selectedAlbum.title} photo ${index + 1}`}
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </section>
        )}
      </main>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closePhoto}
        >
          <button
            onClick={closePhoto}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/90 p-3 text-black shadow-lg transition hover:bg-white"
            aria-label="Close photo"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={showPreviousPhoto}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black shadow-lg transition hover:bg-white"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <img
            src={selectedPhoto}
            alt={`${selectedAlbum.title} full photo ${selectedPhotoIndex + 1}`}
            className="max-h-[90vh] max-w-[92vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            onClick={showNextPhoto}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black shadow-lg transition hover:bg-white"
            aria-label="Next photo"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-lg">
            {selectedPhotoIndex + 1} / {selectedAlbum.photos.length}
          </div>
        </div>
      )}
    </div>
  );
}
