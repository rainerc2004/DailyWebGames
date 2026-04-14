export default function MyListsListCard({list_name, owner_user_name}) {
    var link = "/list/?list=".concat(list_name);

    async function setList(username, listname) {
        const response = await fetch(`http://localhost:5050/user/setlist/${listname}/${username}`, {
            method: 'PATCH'
        });
    }

    async function deleteList(listname) {
        //delete list
    }

    return (
        <div class="grow px-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl py-3 gap-6 flex items-center justify-between">
                <a href={link}> {list_name}</a>
                <div class="flex gap-6">
                <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                    onClick={() => setList("user", list_name)} >
                Set as default
                </button>
                <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                    onClick={() => deleteList(list_name)} >
                    Delete list
                    </button>
                </div>
            </div>
        </div>
    );
}