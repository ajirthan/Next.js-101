"use client";
import { useEffect, useState } from "react";

function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums",
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {albums.map((album: { id: number; title: string }) => (
        <div
          key={album.id}
          className="bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105 hover:shadow-lg"
        >
          <h3 className="text-lg font-bold mb-2">{album.title}</h3>
          <p className="text-gray-600">Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
