import ImageComponent from "./ImageComponent";
export default function ProfileCard() {
    return (
        <a class="grow px-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl py-6 gap-6 flex items-center justify-left">
                
                <ImageComponent folder='../assets/profile_pictures/' imageName='jon.jpg' className="rounded-lg object-scale-down w-24"/>

                <a href="/profile/"> @user </a>
            </div>
        </a>
    );
}