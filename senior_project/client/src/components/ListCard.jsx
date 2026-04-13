export default function ListCard({title}) {
    var link = "/list/?list = ".concat(title);

    return (
        <div class="grow px-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl py-3 gap-6 flex items-center justify-between">
                <a href={link}>{title}</a>
                <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg">
                Set as default
                </button>
            </div>
        </div>
    );
}