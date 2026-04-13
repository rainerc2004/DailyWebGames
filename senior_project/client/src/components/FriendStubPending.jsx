export default function FriendStubPending({ user_name }) {
    const accept = () => {
        //Accept friend request here.
    };

    const deny = () => {
        //Deny friend request here.
    };

    return (
        <div class="flex w-full px-2 py-2 gap-2 bg-gray-500 text-white font-semibold rounded-lg">
            @{user_name}
            <button class="rounded-lg bg-slate-700 px-2" onClick={accept}>
                 Yes!
            </button>
            <button class="rounded-lg bg-slate-700 px-2" onClick={deny}>
                 No!
            </button>
            
        </div>
    );
}