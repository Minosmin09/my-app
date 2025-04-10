import MusicItem from '../components/MusicItem';

export default function MusicStorePage() {
return (
    <main className="p-4">
    <h1 className="text-2xl font-bold mb-4">Music Nena Store</h1>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MusicItem
        name="Electric Guitar"
        price={299}
        image_url="/guitar.jpeg"
        like={100}
        is_new={true}
        />
        <MusicItem
        name="Drum Set"
        price={499}
        image_url="/drum.jpeg"
        like={100}
        is_new={false}
        />
        <MusicItem
        name="Keyboard"
        price={399}
        image_url="/keyboard.jpeg"
        like={85}
        is_new={true}
        />
        <MusicItem
        name="Violin"
        price={199}
        image_url="/violin.jpeg"
        like={86}
        is_new={false}
        />
        <MusicItem
        name="Saxophone"
        price={349}
        image_url="/saxophone.jpeg"
        like={30}
        is_new={true}
        />
        <MusicItem
        name="Trumpet"
        price={279}
        image_url="/trumpet.jpeg"
        like={22}
        is_new={false}
        />
        <MusicItem
        name="Bass Guitar"
        price={329}
        image_url="/bass.jpeg"
        like={90}
        is_new={true}
        />
        <MusicItem
        name="Flute"
        price={149}
        image_url="/flute.jpeg"
        like={16}
        is_new={false}
        />
        <MusicItem
        name="DJ Controller"
        price={599}
        image_url="/dj.jpeg"
        like={88}
        is_new={true}
        />
        <MusicItem
        name="Microphone"
        price={89}
        image_url="/microphone.jpeg"
        like={50}
        is_new={false}
        />
    </div>
    </main>
);
}
