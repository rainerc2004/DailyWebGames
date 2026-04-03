import pfp from "../assets/sumrall.jpg";
export default function ProfileCard() {
    return (
        <a class="grow px-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl py-6 gap-6 flex items-center justify-left">
                <img
                    src={pfp}
                    className="rounded-lg object-scale-down w-24"
                />
                <a href="/profile/"> @sumrall_gaming </a>
            </div>
        </a>
    );
}