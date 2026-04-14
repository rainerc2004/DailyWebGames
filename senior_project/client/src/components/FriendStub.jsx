export default function FriendStub({ user_name }) {
    const remove = () => {
        //Accept friend request here.
    };

    return (
        <div class="flex w-full gap-2 px-2 py-2 bg-gray-500 text-white font-semibold rounded-lg">
            @{user_name}
            <button class="rounded-lg bg-zinc-700 px-2" onClick={remove}>
                Remove
            </button>
        </div>
    );
}