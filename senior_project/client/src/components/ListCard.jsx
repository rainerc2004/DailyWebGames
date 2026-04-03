export default function ProfileCard() {
    return (
        <a class="grow px-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl py-3 gap-6 flex items-center justify-between">
                Cathy's List
                <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg">
                Set as default
                </button>
            </div>
        </a>
    );
}