export default function ProfileCard({user_name, display_name, image_name}) {
    return (
        <a class="grow px-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl py-6 gap-6 flex items-center justify-left">
                
                <img src={'/profile_pictures/'.concat(image_name)} className="rounded-lg object-scale-down w-24" />

                <a href={"/profile/"}> 
                    <div>
                        <font size="5" >
                            {display_name}
                        </font>
                    </div>

                    <font size="3">
                        @{user_name}
                    </font>
                </a>
            </div>
        </a>
    );
}