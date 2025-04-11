"use client";

import { useState } from "react";
import MusicItem from "../components/MusicItem";

export default function MusicStorePage() {
    const [musicList, setMusicList] = useState([
        {
            name: "Electric Guitar",
            price: 299,
            image_url: "/guitar.jpeg",
            like: 100,
            is_new: true,
        },
        {
            name: "Drum Set",
            price: 499,
            image_url: "/drum.jpeg",
            like: 100,
            is_new: false,
        },
        {
            name: "Keyboard",
            price: 399,
            image_url: "/keyboard.jpeg",
            like: 85,
            is_new: true,
        },
        {
            name: "Violin",
            price: 199,
            image_url: "/violin.jpeg",
            like: 86,
            is_new: false,
        },
        {
            name: "Saxophone",
            price: 349,
            image_url: "/saxophone.jpeg",
            like: 30,
            is_new: true,
        },
        {
            name: "Trumpet",
            price: 279,
            image_url: "/trumpet.jpeg",
            like: 22,
            is_new: false,
        },
        {
            name: "Bass Guitar",
            price: 329,
            image_url: "/bass.jpeg",
            like: 90,
            is_new: true,
        },
        {
            name: "Flute",
            price: 149,
            image_url: "/flute.jpeg",
            like: 16,
            is_new: false,
        },
        {
            name: "DJ Controller",
            price: 599,
            image_url: "/dj.jpeg",
            like: 88,
            is_new: true,
        },
        {
            name: "Microphone",
            price: 89,
            image_url: "/microphone.jpeg",
            like: 50,
            is_new: false,
        },
    ]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [like, setLike] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isNew, setIsNew] = useState(false);

    const handleAdd = () => {
        if (!name || !price || !like) return;
        const newItem = {
            name,
            price: parseFloat(price),
            image_url: imageUrl || "/default.jpeg",
            like: parseInt(like),
            is_new: isNew,
        };
        setMusicList([...musicList, newItem]);
        setName("");
        setPrice("");
        setLike("");
        setImageUrl("");
        setIsNew(false);
    };

    const handleDelete = (index: number) => {
        const updated = [...musicList];
        updated.splice(index, 1);
        setMusicList(updated);
    };

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Music Nena Store</h1>

            <p className="mb-2 text-gray-600">Total Items: {musicList.length}</p>

            <div className="mb-4 flex flex-col gap-2 max-w-md">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border px-2 py-1 rounded"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border px-2 py-1 rounded"
                />
                <input
                    type="number"
                    placeholder="Like"
                    value={like}
                    onChange={(e) => setLike(e.target.value)}
                    className="border px-2 py-1 rounded"
                />
                <input
                    type="text"
                    placeholder="Image URL (optional)"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="border px-2 py-1 rounded"
                />
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isNew}
                        onChange={(e) => setIsNew(e.target.checked)}
                    />
                    New?
                </label>
                <button
                    onClick={handleAdd}
                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                >
                    Add Music
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {musicList.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="absolute top-1 left-1 text-xs bg-gray-800 text-white px-2 py-0.5 rounded-full">
                            #{index + 1}
                        </div>
                        <MusicItem {...item} />
                        <button
                            onClick={() => handleDelete(index)}
                            className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded px-2 hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
