export default function ProfileCard({title, game_link}) {
    return (
        <div class="grow px-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl py-3 gap-6 flex items-center justify-between">
                <a href={game_link}> {title} </a>
                <select class="excluded" className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg">
                    <option value="none">Add to a list</option>
                </select>
            </div>
        </div>
    );
}