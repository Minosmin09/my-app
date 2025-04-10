import Image from "next/image";

type MusicItemProps = {
name: string;
price: number;
image_url: string;
like: number;
is_new: boolean;
};

export default function MusicItem({
name,
price,
image_url,
like,
is_new,
}: MusicItemProps) {
const maxStars = 5;
  const rating = Math.round((like / 100) * maxStars); // ไลก์เยอะ = ดาวเยอะ
const fullStars = "⭐".repeat(rating);
const emptyStars = "☆".repeat(maxStars - rating);

return (
    <div className="border p-4 rounded-lg shadow-md bg-white hover:scale-105 transition transform duration-300 ease-in-out">
        {is_new && <span className="text-green-600 font-semibold">New!</span>}
    <Image
        src={image_url}
        width={0}
        height={0}
        sizes="100vw"
        alt={name}
        className="w-auto h-48 object-contain mx-auto rounded"
    />
    
    <h3 className="text-xl font-bold mt-2">{name}</h3>
    <p>Price: ${price}</p>

    <p className="text-red-500">❤️ {like}</p>

    <p className="text-yellow-500 text-lg">
        {fullStars}
        <span className="text-gray-300">{emptyStars}</span>
    </p>
    
    
    <button className="mt-4 bg-purple-500 text-white text-sm px-3 py-1 rounded-md hover:bg-purple-600 transition">
    Buy Now
</button>
    
    </div>
);
}
