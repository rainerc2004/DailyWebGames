export default function ProfileCard() {
    return (
        <div class="grow px-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl py-3 gap-6 flex items-center justify-between">
                <a href="https://www.nytimes.com/games/wordle/index.html"> Wordle </a>
                <select class="excluded" className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg">
                    Add to list
                </select>
            </div>
        </div>
    );
}