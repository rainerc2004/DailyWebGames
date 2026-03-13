import pfp from "../assets/sumrall.jpg";

export default function ProfilePanel() {
    return (
        <div class="grow px-6 py-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl">
                @sumrall_gaming
            </div>
            <div className="py-6">
            <img
                src={pfp}
                className="rounded-lg" 
                />
            </div>
            <div>
                <p>
                    Hey there! This is my DailyWebGames account. I mostly like playing word games, but I enjoy logic games too on occasion. Feel free to add me!
                </p>
            </div>
        </div>
    );
}