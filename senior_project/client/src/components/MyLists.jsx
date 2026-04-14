import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MyListsListCard from "./MyListsListCard";
import { NavLink } from "react-router-dom";

/*
const Record = (props) => (
    <div className="flex flex-col gap-6">
        <GameCard game_name={props.record.game_name} game_link={props.record.game_link} />
        <br></br>
    </div>
);
*/

const MyLists = () => {
    // I adapted this from List.jsx, replacing Games with Lists.
    /*
    const urlParams = new URLSearchParams(window.location.search);
    const list_name = urlParams.get('list');
    //const list_name = "name of list";
    const [records, setRecords] = useState(list_name);

    // This method fetches the list of games in the provided list
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5050/playlist/elements/${list_name}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const records = await response.json();
            setRecords(records);
        }
        getRecords();
        return;
    }, [records.length]);

    // This method will map out the records on the table
    function recordList() {
        try {
            return records.map((record) => {
                return (
                    <Record
                        record={record}
                        key={record._id}
                    />
                );
            });
        } catch (error) {
            return (
                <div>
                    Loading Lists...
                </div>
            );
        }
    }
    */

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="grid flex flex-1 overflow-hidden grid-cols-5 px-3">
                <div className="flex col-span-1 gap-3 px-6 pb-6">
                    <div class="grow flex flex-col justify-between px-6 py-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
                        <div>
                            View the lists you've created here.
                        </div>

                        <NavLink to="/mylists/create"
                         className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                         >
                         Create a new list!
                    </NavLink>
                    </div>
                </div>
                <div className="flex flex-col overflow-y-scroll col-span-3 px-6 pb-6 ">
                    <div className="flex flex-col gap-6">
                        <MyListsListCard />
                        <MyListsListCard />
                        <MyListsListCard />
                        <MyListsListCard />
                        <MyListsListCard />
                        <MyListsListCard />
                        <MyListsListCard />
                        <MyListsListCard />
                        <MyListsListCard />
                    </div>
                </div>
                    </div>
                </div>
    );
};
export default MyLists