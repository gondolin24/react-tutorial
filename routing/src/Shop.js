import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function Shop() {

    const [items, setItem] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const items = apiCall;
        console.log(items.items);
        setItem(items.items)
    };



    return (
        <div >
            {items.map(item => (
                <h1 key={item.itemid}>
                    <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
                </h1>
                ))
            }
        </div>
    );
}


const apiCall = {
    "lastUpdate": 1570233661,
    "lanuage": "en",
    "vbucks": "https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png",
    "rows": 55,
    "items": [{
        "itemid": "0d86e4c-fc99ce3-eb459f6-0f61622",
        "name": "Slingshot",
        "description": "Race to win. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/66000430b19b66b4721c4b091c02e6d8.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/66000430b19b66b4721c4b091c02e6d8.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/0d86e4c-fc99ce3-eb459f6-0f61622.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/0d86e4c-fc99ce3-eb459f6-0f61622/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/0d86e4c-fc99ce3-eb459f6-0f61622.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "6c074e5-e01b307-d3b9c25-6f74567",
        "name": "Manic",
        "description": "Show 'em your game face. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/27064674b71992ee91deaabd7abe6694.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/27064674b71992ee91deaabd7abe6694.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/6c074e5-e01b307-d3b9c25-6f74567.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/6c074e5-e01b307-d3b9c25-6f74567/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/6c074e5-e01b307-d3b9c25-6f74567.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "9614e95-6d27565-b685f78-aeaa9c4",
        "name": "Snakepit",
        "description": "Fearless.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/47afe930d4077d2ec7df0a951b3fd3fd.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/47afe930d4077d2ec7df0a951b3fd3fd.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/9614e95-6d27565-b685f78-aeaa9c4.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/9614e95-6d27565-b685f78-aeaa9c4/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/9614e95-6d27565-b685f78-aeaa9c4.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "3630599-e7838b6-d84fc60-4565768",
        "name": "Plague",
        "description": "The doctor is in...",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/507083f6eaa734d805ceb925e3dea1dc.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/507083f6eaa734d805ceb925e3dea1dc.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/3630599-e7838b6-d84fc60-4565768.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/3630599-e7838b6-d84fc60-4565768/item.png",
                "featured": {"transparent": null}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "daae2a3-3376277-36d8569-16550ef",
        "name": "Helium",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/glider/a03167bff87cf797e53bb916829c1cdc.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/glider/a03167bff87cf797e53bb916829c1cdc.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/daae2a3-3376277-36d8569-16550ef.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/daae2a3-3376277-36d8569-16550ef/item.png",
                "featured": {"transparent": null}
            },
            "captial": "glider",
            "type": "glider",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.51, "totalPoints": 593, "numberVotes": 169}
    }, {
        "itemid": "89575fb-56a3f7b-918c352-44f512e",
        "name": "Deadfall",
        "description": "Relentless.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/dcade3f38ad4c1b8ce7fb5a6246bd941.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/dcade3f38ad4c1b8ce7fb5a6246bd941.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/89575fb-56a3f7b-918c352-44f512e.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/89575fb-56a3f7b-918c352-44f512e/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/89575fb-56a3f7b-918c352-44f512e.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "48aee57-fec191d-dc5288a-63d5417",
        "name": "Vice",
        "description": "Wild.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/c32534e1386149f3056e92d71071263b.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/c32534e1386149f3056e92d71071263b.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/48aee57-fec191d-dc5288a-63d5417.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/48aee57-fec191d-dc5288a-63d5417/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/48aee57-fec191d-dc5288a-63d5417.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "edc8bc6-0f84118-789615c-da6522d",
        "name": "Corrupted",
        "description": "Show your style.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/wrap/b5d1e545481723ebccd0d69b6ca45e1d.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/wrap/b5d1e545481723ebccd0d69b6ca45e1d.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/edc8bc6-0f84118-789615c-da6522d.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/edc8bc6-0f84118-789615c-da6522d/item.png",
                "featured": {"transparent": null}
            },
            "captial": "wrap",
            "type": "wrap",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.07, "totalPoints": 118, "numberVotes": 29}
    }, {
        "itemid": "c5fa928-17fe800-2d39948-85f0766",
        "name": "Square Stream",
        "description": "Show your style.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/wrap/25b5e1d73fa6d460237ee0138891e64c.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/wrap/25b5e1d73fa6d460237ee0138891e64c.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/c5fa928-17fe800-2d39948-85f0766.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/c5fa928-17fe800-2d39948-85f0766/item.png",
                "featured": {"transparent": null}
            },
            "captial": "wrap",
            "type": "wrap",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.13, "totalPoints": 72, "numberVotes": 23}
    }, {
        "itemid": "970a48f-c2f26cb-23d7287-efb1679",
        "name": "Utility Pack",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/backpack/d9501d29f6a0da6f4dc982f6e0e2a1a6.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/backpack/d9501d29f6a0da6f4dc982f6e0e2a1a6.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/970a48f-c2f26cb-23d7287-efb1679.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/970a48f-c2f26cb-23d7287-efb1679/item.png",
                "featured": {"transparent": null}
            },
            "captial": "backpack",
            "type": "backpack",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.5, "totalPoints": 189, "numberVotes": 54}
    }, {
        "itemid": "7f9a397-fce026c-07dd615-67bfb90",
        "name": "Fingerprint",
        "description": "Show your style.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/wrap/00e4e4f8c7832df9fee4f3db03e3a1c6.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/wrap/00e4e4f8c7832df9fee4f3db03e3a1c6.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/7f9a397-fce026c-07dd615-67bfb90.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/7f9a397-fce026c-07dd615-67bfb90/item.png",
                "featured": {"transparent": null}
            },
            "captial": "wrap",
            "type": "wrap",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.29, "totalPoints": 120, "numberVotes": 28}
    }, {
        "itemid": "93b5972-8c88bb9-642613f-264af73",
        "name": "Knockout",
        "description": "Precise. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/f87c4662f32caa0792f432345fcbdfde.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/f87c4662f32caa0792f432345fcbdfde.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/93b5972-8c88bb9-642613f-264af73.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/93b5972-8c88bb9-642613f-264af73/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/93b5972-8c88bb9-642613f-264af73.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "81b3f1b-858ac88-c4d5777-be90861",
        "name": "Corrupted Voyager",
        "description": "Spread the corruption. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/8735f76059595de3be04c74827b636a4.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/8735f76059595de3be04c74827b636a4.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/81b3f1b-858ac88-c4d5777-be90861.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/81b3f1b-858ac88-c4d5777-be90861/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/81b3f1b-858ac88-c4d5777-be90861.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.38, "totalPoints": 530, "numberVotes": 121}
    }, {
        "itemid": "9af08d1-3dca3e9-408df25-d9405b2",
        "name": "Pterodactyl",
        "description": "Saur into battle.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/glider/d948a0267ea0fb5832af1dffa16b08ac.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/glider/d948a0267ea0fb5832af1dffa16b08ac.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/9af08d1-3dca3e9-408df25-d9405b2.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/9af08d1-3dca3e9-408df25-d9405b2/item.png",
                "featured": {"transparent": null}
            },
            "captial": "glider",
            "type": "glider",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "df49a3f-2dafa44-ecf789b-455f729",
        "name": "Foxpack",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/backpack/4c2a7f02bd601914358a4e677ba6e90f.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/backpack/4c2a7f02bd601914358a4e677ba6e90f.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/df49a3f-2dafa44-ecf789b-455f729.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/df49a3f-2dafa44-ecf789b-455f729/item.png",
                "featured": {"transparent": null}
            },
            "captial": "backpack",
            "type": "backpack",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.3, "totalPoints": 189, "numberVotes": 44}
    }, {
        "itemid": "cce18bd-2d5ba41-c0a6dae-629f3af",
        "name": "Herald's Wand",
        "description": "It's vital.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/2445aca9cfd1d4a4906c866dc79befb1.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/2445aca9cfd1d4a4906c866dc79befb1.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/cce18bd-2d5ba41-c0a6dae-629f3af.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/cce18bd-2d5ba41-c0a6dae-629f3af/item.png",
                "featured": {"transparent": null}
            },
            "captial": "pickaxe",
            "type": "pickaxe",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "e43d845-8a87507-f05e0ea-dcd6e67",
        "name": "Hotwire",
        "description": "Get amped. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/0acca4477d498cdb035099e9835d4bfb.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/0acca4477d498cdb035099e9835d4bfb.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/e43d845-8a87507-f05e0ea-dcd6e67.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/e43d845-8a87507-f05e0ea-dcd6e67/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/e43d845-8a87507-f05e0ea-dcd6e67.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "7db4a07-557b2db-5056594-2c5797b",
        "name": "Hang on",
        "description": "Let's just talk this out...",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/emote/db6a5d0a673fcb3462002aad1cafa7ac.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/emote/db6a5d0a673fcb3462002aad1cafa7ac.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/7db4a07-557b2db-5056594-2c5797b.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/7db4a07-557b2db-5056594-2c5797b/item.png",
                "featured": {"transparent": null}
            },
            "captial": "emote",
            "type": "emote",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.78, "totalPoints": 102, "numberVotes": 27}
    }, {
        "itemid": "8646ab8-849d36c-e98a9fc-ea53e9c",
        "name": "Tsssss",
        "description": "Your time here is done. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/emote/843f64bfc3f6811d70de18c8031b8a8b.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/emote/843f64bfc3f6811d70de18c8031b8a8b.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/8646ab8-849d36c-e98a9fc-ea53e9c.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/8646ab8-849d36c-e98a9fc-ea53e9c/item.png",
                "featured": {"transparent": null}
            },
            "captial": "emote",
            "type": "emote",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.06, "totalPoints": 219, "numberVotes": 54}
    }, {
        "itemid": "01b3ca3-873737f-f364abe-d427472",
        "name": "Kunai Shield",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/backpack/0a58792a9f37d918115608ae0b308007.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/backpack/0a58792a9f37d918115608ae0b308007.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/01b3ca3-873737f-f364abe-d427472.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/01b3ca3-873737f-f364abe-d427472/item.png",
                "featured": {"transparent": null}
            },
            "captial": "backpack",
            "type": "backpack",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.75, "totalPoints": 150, "numberVotes": 40}
    }, {
        "itemid": "0b03617-15f78a7-5b80db5-546a814",
        "name": "Plunja",
        "description": "The competition is circling the drain.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/7911b2a846a81d158406013902c6288c.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/7911b2a846a81d158406013902c6288c.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/0b03617-15f78a7-5b80db5-546a814.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/0b03617-15f78a7-5b80db5-546a814/item.png",
                "featured": {"transparent": null}
            },
            "captial": "pickaxe",
            "type": "pickaxe",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "8e31c03-b9981d8-fa9a0a6-0fc3a91",
        "name": "Megavolt",
        "description": "Overcharged with electric might.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/286695d5be433054d106043079f853c3.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/286695d5be433054d106043079f853c3.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/8e31c03-b9981d8-fa9a0a6-0fc3a91.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/8e31c03-b9981d8-fa9a0a6-0fc3a91/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/8e31c03-b9981d8-fa9a0a6-0fc3a91.png"}
            },
            "captial": "pickaxe",
            "type": "pickaxe",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "e808c45-070a6ed-773d441-078d9e1",
        "name": "Sizzle Sgt. ",
        "description": "She's cookin' up a win. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/efc7b80e22fa5c06a4fdd9d75a884a1d.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/efc7b80e22fa5c06a4fdd9d75a884a1d.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/e808c45-070a6ed-773d441-078d9e1.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/e808c45-070a6ed-773d441-078d9e1/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/e808c45-070a6ed-773d441-078d9e1.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.31, "totalPoints": 181, "numberVotes": 42}
    }, {
        "itemid": "21d4072-ecdca82-1c60277-dc36cbb",
        "name": "Backbeat",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/backpack/93f22749545717b667b6b01baaaed164.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/backpack/93f22749545717b667b6b01baaaed164.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/21d4072-ecdca82-1c60277-dc36cbb.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/21d4072-ecdca82-1c60277-dc36cbb/item.png",
                "featured": {"transparent": null}
            },
            "captial": "backpack",
            "type": "backpack",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.32, "totalPoints": 497, "numberVotes": 115}
    }, {
        "itemid": "bd57706-5d141d3-e42d4cf-f366ca0",
        "name": "Prismatic Edge",
        "description": "Show your style.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/wrap/5d62a7e60851d03a22e7c8e8e86c660e.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/wrap/5d62a7e60851d03a22e7c8e8e86c660e.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/bd57706-5d141d3-e42d4cf-f366ca0.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/bd57706-5d141d3-e42d4cf-f366ca0/item.png",
                "featured": {"transparent": null}
            },
            "captial": "wrap",
            "type": "wrap",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "7607d5a-67b3fae-ee9202c-eef5fb4",
        "name": "Souped Up",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/85ef8084b95e16acdb754b1226fb17bb.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/85ef8084b95e16acdb754b1226fb17bb.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/7607d5a-67b3fae-ee9202c-eef5fb4.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/7607d5a-67b3fae-ee9202c-eef5fb4/item.png",
                "featured": {"transparent": null}
            },
            "captial": "pickaxe",
            "type": "pickaxe",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.67, "totalPoints": 253, "numberVotes": 69}
    }, {
        "itemid": "fed58f9-2186201-516d586-a1b7b55",
        "name": "Tricera Ops",
        "description": "Sink your teeth into victory.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/7144ece62208f4312607996f69dc687a.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/7144ece62208f4312607996f69dc687a.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/fed58f9-2186201-516d586-a1b7b55.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/fed58f9-2186201-516d586-a1b7b55/item.png",
                "featured": {"transparent": null}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "legendary",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "dc34af5-dec44ad-420d602-3e52ba9",
        "name": "Llama Conga",
        "description": "Trot on. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/emote/1cd5034c1a47851250b5817cc24a16a4.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/emote/1cd5034c1a47851250b5817cc24a16a4.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/dc34af5-dec44ad-420d602-3e52ba9.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/dc34af5-dec44ad-420d602-3e52ba9/item.png",
                "featured": {"transparent": null}
            },
            "captial": "emote",
            "type": "emote",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.07, "totalPoints": 403, "numberVotes": 99}
    }, {
        "itemid": "6c235b2-45e4cf7-6a738dc-61ccf79",
        "name": "Whipcrack",
        "description": "Whip up some action.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/emote/021c6d59dd27be31ac9384adb42e4999.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/emote/021c6d59dd27be31ac9384adb42e4999.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/6c235b2-45e4cf7-6a738dc-61ccf79.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/6c235b2-45e4cf7-6a738dc-61ccf79/item.png",
                "featured": {"transparent": null}
            },
            "captial": "emote",
            "type": "emote",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "b281139-3b50cae-708a19e-c89b700",
        "name": "Motocase",
        "description": "Built for speed. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/backpack/f857da8edff47d624f0c2f7c2df7c109.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/backpack/f857da8edff47d624f0c2f7c2df7c109.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/b281139-3b50cae-708a19e-c89b700.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/b281139-3b50cae-708a19e-c89b700/item.png",
                "featured": {"transparent": null}
            },
            "captial": "backpack",
            "type": "backpack",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.59, "totalPoints": 78, "numberVotes": 17}
    }, {
        "itemid": "184facc-6ca3f00-5b9366a-313ae62",
        "name": "Red Streak",
        "description": "Find your hot streak.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/e4eba552bf0403c898c66a6cf6c38791.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/e4eba552bf0403c898c66a6cf6c38791.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/184facc-6ca3f00-5b9366a-313ae62.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/184facc-6ca3f00-5b9366a-313ae62/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/184facc-6ca3f00-5b9366a-313ae62.png"}
            },
            "captial": "pickaxe",
            "type": "pickaxe",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.91, "totalPoints": 262, "numberVotes": 67}
    }, {
        "itemid": "8107130-7b1a38a-5c30d0b-45251d8",
        "name": "Airhead",
        "description": "Pop into action.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/45ea465cff8f8cdd921e482bc6393e81.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/45ea465cff8f8cdd921e482bc6393e81.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/8107130-7b1a38a-5c30d0b-45251d8.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/8107130-7b1a38a-5c30d0b-45251d8/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/8107130-7b1a38a-5c30d0b-45251d8.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.27, "totalPoints": 3042, "numberVotes": 713}
    }, {
        "itemid": "7aaaecb-972a006-cb85d5a-f2abd8d",
        "name": "Modern Hex",
        "description": "Show your style.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/wrap/b6043b18960c502bcefccbff0bdbbf30.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/wrap/b6043b18960c502bcefccbff0bdbbf30.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/7aaaecb-972a006-cb85d5a-f2abd8d.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/7aaaecb-972a006-cb85d5a-f2abd8d/item.png",
                "featured": {"transparent": null}
            },
            "captial": "wrap",
            "type": "wrap",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "057f022-cf1713c-c0090ff-1b9b623",
        "name": "Bitemark",
        "description": "Take a bite out of the competition.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/836b0cf0fe6c8dd6dee4ec148d5b38e4.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/836b0cf0fe6c8dd6dee4ec148d5b38e4.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/057f022-cf1713c-c0090ff-1b9b623.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/057f022-cf1713c-c0090ff-1b9b623/item.png",
                "featured": {"transparent": null}
            },
            "captial": "pickaxe",
            "type": "pickaxe",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "9bd29d8-c40f629-c4ccb6e-af56282",
        "name": "Team Space",
        "description": "Humanity had its chance.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/emote/817260309f0e0d750e037c921e1dac68.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/emote/817260309f0e0d750e037c921e1dac68.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/9bd29d8-c40f629-c4ccb6e-af56282.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/9bd29d8-c40f629-c4ccb6e-af56282/item.png",
                "featured": {"transparent": null}
            },
            "captial": "emote",
            "type": "emote",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "50b7e38-570b820-c9800a3-3a6f080",
        "name": "Hard Charger ",
        "description": "Gassed up and ready to ride. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/94fa097c186ce83d9f7d8451e1324958.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/94fa097c186ce83d9f7d8451e1324958.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/50b7e38-570b820-c9800a3-3a6f080.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/50b7e38-570b820-c9800a3-3a6f080/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/50b7e38-570b820-c9800a3-3a6f080.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.19, "totalPoints": 226, "numberVotes": 54}
    }, {
        "itemid": "6165baa-034918f-2b16d02-cce60d1",
        "name": "Stunt Cycle",
        "description": "Hang on tight.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/glider/0cdea48e7eb35993ba825875f9fff1bc.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/glider/0cdea48e7eb35993ba825875f9fff1bc.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/6165baa-034918f-2b16d02-cce60d1.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/6165baa-034918f-2b16d02-cce60d1/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/6165baa-034918f-2b16d02-cce60d1.png"}
            },
            "captial": "glider",
            "type": "glider",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.24, "totalPoints": 89, "numberVotes": 21}
    }, {
        "itemid": "d748741-a62b070-1e783c7-4337a86",
        "name": "Exo-Spine",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/backpack/3e84fb38dea139a3df4f30fed4d2c846.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/backpack/3e84fb38dea139a3df4f30fed4d2c846.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/d748741-a62b070-1e783c7-4337a86.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/d748741-a62b070-1e783c7-4337a86/item.png",
                "featured": {"transparent": null}
            },
            "captial": "backpack",
            "type": "backpack",
            "rarity": "legendary",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.41, "totalPoints": 868, "numberVotes": 197}
    }, {
        "itemid": "8292ad0-c488ba4-6e34a12-6d845bc",
        "name": "Aeronaut",
        "description": "Journey beyond the edge of the sky.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/c5fd95e91086b71a296423efba1575b8.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/c5fd95e91086b71a296423efba1575b8.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/8292ad0-c488ba4-6e34a12-6d845bc.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/8292ad0-c488ba4-6e34a12-6d845bc/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/8292ad0-c488ba4-6e34a12-6d845bc.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.59, "totalPoints": 147, "numberVotes": 41}
    }, {
        "itemid": "fd34f87-14e919e-069df61-1264b95",
        "name": "Poof",
        "description": "Beguile your enemies in a cloud smoke. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/emote/7cf6af8968833552b29168b5e26e1a19.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/emote/7cf6af8968833552b29168b5e26e1a19.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/fd34f87-14e919e-069df61-1264b95.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/fd34f87-14e919e-069df61-1264b95/item.png",
                "featured": {"transparent": null}
            },
            "captial": "emote",
            "type": "emote",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "c6475a2-795e977-0710446-5983c90",
        "name": "Infectious",
        "description": "Let it take over.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/emote/ad01e1562c34c20517e5504e2c3f8f2e.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/emote/ad01e1562c34c20517e5504e2c3f8f2e.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/c6475a2-795e977-0710446-5983c90.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/c6475a2-795e977-0710446-5983c90/item.png",
                "featured": {"transparent": null}
            },
            "captial": "emote",
            "type": "emote",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "40ef4a8-501ba5f-183f677-abd81b8",
        "name": "Angular Flow",
        "description": "Show your style.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/wrap/8ded7cbf42c79e94b34da00aa95afca1.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/wrap/8ded7cbf42c79e94b34da00aa95afca1.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/40ef4a8-501ba5f-183f677-abd81b8.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/40ef4a8-501ba5f-183f677-abd81b8/item.png",
                "featured": {"transparent": null}
            },
            "captial": "wrap",
            "type": "wrap",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.38, "totalPoints": 70, "numberVotes": 16}
    }, {
        "itemid": "a802780-d91e612-d49c525-4dd6381",
        "name": "Aero Axe",
        "description": "Show your stripes.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/b0ec07c639ebd5f4a91531b97220ff59.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/b0ec07c639ebd5f4a91531b97220ff59.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/a802780-d91e612-d49c525-4dd6381.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/a802780-d91e612-d49c525-4dd6381/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/a802780-d91e612-d49c525-4dd6381.png"}
            },
            "captial": "pickaxe",
            "type": "pickaxe",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.06, "totalPoints": 69, "numberVotes": 17}
    }, {
        "itemid": "eebd1b5-75148df-e350153-7df9d2e",
        "name": "Full tilt",
        "description": "Lean into it.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/emote/f82a7f49c2cdcd69888aaad6c8e1200a.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/emote/f82a7f49c2cdcd69888aaad6c8e1200a.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/eebd1b5-75148df-e350153-7df9d2e.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/eebd1b5-75148df-e350153-7df9d2e/item.png",
                "featured": {"transparent": null}
            },
            "captial": "emote",
            "type": "emote",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "6cf9afe-3163edc-ce7232b-2cb2313",
        "name": "Red Jade",
        "description": "Summon your fighting spirit. ",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/40c926596165d1466d2de95ad9d162f0.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/40c926596165d1466d2de95ad9d162f0.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/6cf9afe-3163edc-ce7232b-2cb2313.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/6cf9afe-3163edc-ce7232b-2cb2313/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/6cf9afe-3163edc-ce7232b-2cb2313.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "8d8af82-385ccd5-dda7b64-a44d311",
        "name": "Bao Bros",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/5b0a79359f5aea11b7eb81e5ce995a10.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/5b0a79359f5aea11b7eb81e5ce995a10.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/8d8af82-385ccd5-dda7b64-a44d311.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/8d8af82-385ccd5-dda7b64-a44d311/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/8d8af82-385ccd5-dda7b64-a44d311.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.21, "totalPoints": 3365, "numberVotes": 800}
    }, {
        "itemid": "012e8c8-4768fb9-f673a27-a6ae3d4",
        "name": "Rex",
        "description": "Hunting the competition to extinction.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/b948157ce9be9dd430d793375e7821bd.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/b948157ce9be9dd430d793375e7821bd.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/012e8c8-4768fb9-f673a27-a6ae3d4.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/012e8c8-4768fb9-f673a27-a6ae3d4/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/012e8c8-4768fb9-f673a27-a6ae3d4.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "legendary",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "599343e-4839a51-29cecd0-33decae",
        "name": "Rush",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/glider/31ad98184e96214e085bccc4d0d5684a.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/glider/31ad98184e96214e085bccc4d0d5684a.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/599343e-4839a51-29cecd0-33decae.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/599343e-4839a51-29cecd0-33decae/item.png",
                "featured": {"transparent": null}
            },
            "captial": "glider",
            "type": "glider",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.83, "totalPoints": 1027, "numberVotes": 268}
    }, {
        "itemid": "9af04bf-58dbcc4-ed34086-af6a539",
        "name": "Lamplight",
        "description": "A light in the darkness.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/glider/a136b6bc15d40088f3e2053f1ac08a28.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/glider/a136b6bc15d40088f3e2053f1ac08a28.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/9af04bf-58dbcc4-ed34086-af6a539.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/9af04bf-58dbcc4-ed34086-af6a539/item.png",
                "featured": {"transparent": null}
            },
            "captial": "glider",
            "type": "glider",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "60a71c3-0f5a088-c796b96-8fad579",
        "name": "Zorgoton",
        "description": "Freed from the lab, and out for justice.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/47c02f5674a75e6eb8246c0fa0025074.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/47c02f5674a75e6eb8246c0fa0025074.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/60a71c3-0f5a088-c796b96-8fad579.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/60a71c3-0f5a088-c796b96-8fad579/item.png",
                "featured": {"transparent": null}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "e3776c2-477a458-229b6b0-f781be6",
        "name": "Plasmatic Edge",
        "description": "Calibrated for absolute domination.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/d0b09738ab3692db02be1a6ab81df0ed.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/d0b09738ab3692db02be1a6ab81df0ed.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/e3776c2-477a458-229b6b0-f781be6.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/e3776c2-477a458-229b6b0-f781be6/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/e3776c2-477a458-229b6b0-f781be6.png"}
            },
            "captial": "pickaxe",
            "type": "pickaxe",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 4.25, "totalPoints": 34, "numberVotes": 8}
    }, {
        "itemid": "f581343-3fd5ec6-3965e71-ef594f2",
        "name": "Snack Attackers",
        "description": "When the craving strikes...",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/pickaxe/dbb7c3966eb223649a6f1567036f3b88.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/pickaxe/dbb7c3966eb223649a6f1567036f3b88.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/f581343-3fd5ec6-3965e71-ef594f2.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/f581343-3fd5ec6-3965e71-ef594f2/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/f581343-3fd5ec6-3965e71-ef594f2.png"}
            },
            "captial": "pickaxe",
            "type": "pickaxe",
            "rarity": "rare",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }, {
        "itemid": "ab0a9ff-bf7d557-ab8ebde-f4f2e1a",
        "name": "Bao Basket",
        "description": "",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/backpack/7895864f054008c85a11392469e48500.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/backpack/7895864f054008c85a11392469e48500.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/ab0a9ff-bf7d557-ab8ebde-f4f2e1a.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/ab0a9ff-bf7d557-ab8ebde-f4f2e1a/item.png",
                "featured": {"transparent": null}
            },
            "captial": "backpack",
            "type": "backpack",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.56, "totalPoints": 370, "numberVotes": 104}
    }, {
        "itemid": "ff133ed-8705ce1-bacc68f-0e7586a",
        "name": "Red Camo",
        "description": "Show your style.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/wrap/120f2b0fccc6d5e25199070d63a4b0fd.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/wrap/120f2b0fccc6d5e25199070d63a4b0fd.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/ff133ed-8705ce1-bacc68f-0e7586a.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/ff133ed-8705ce1-bacc68f-0e7586a/item.png",
                "featured": {"transparent": null}
            },
            "captial": "wrap",
            "type": "wrap",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 3.7, "totalPoints": 148, "numberVotes": 40}
    }, {
        "itemid": "97e2c32-e766b81-574fe1f-0d6ab41",
        "name": "Scourge",
        "description": "Seeking the cure.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/55685bc09c0d2605fc03227738f0bca2.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/55685bc09c0d2605fc03227738f0bca2.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/97e2c32-e766b81-574fe1f-0d6ab41.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/97e2c32-e766b81-574fe1f-0d6ab41/item.png",
                "featured": {"transparent": null}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "epic",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }]
};

export default Shop;
