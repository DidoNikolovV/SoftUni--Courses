function solve(input){
    let facebookData = {
    };

    while(input[0] != "Log out"){
        let tokens = input.shift().split(": ");
        let command = tokens[0];
        let username = tokens[1];

        if(command === "New follower") {
            if(facebookData[username] === undefined) {
                facebookData[username] = {
                    likes: 0,
                    comments: 0
                }
            }
        } else if(command === "Like") {
            let count = Number(tokens[2]);

            if(facebookData[username] != undefined) {
                let user = facebookData[username];
                user.likes += count;
            } else {
                facebookData[username] = {
                    likes: count,
                    comments: 0
                }
            }
        } else if(command === "Comment") {
            if(facebookData[username] != undefined) {
                let user = facebookData[username];
                user.comments += 1;
            } else {
                facebookData[username] = {
                    likes: 0,
                    comments: 1
                }
            }
        } else if(command === "Blocked") {
            if(facebookData[username] != undefined) {
                delete facebookData[username];
            } else  {
                console.log(`${username} doesn't exist.`)
            }
        }
    }

    let sorted = Object.entries(facebookData).sort((a, b) => {
        let sumA = a[1].likes + a[1].comments;
        let sumB = b[1].likes + b[1].comments;

        let nameA = a[0];
        let nameB = b[0];

        return (sumB - sumA) || (nameA.localeCompare(nameB));
    })

    console.log(`${sorted.length} followers`);
    for(let [user, key] of sorted){
        let likesComments = key.likes + key.comments;
        console.log(`${user}: ${likesComments}`);
    }
}


/*solve((["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])
)

/*solve((["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])
)*/

solve((["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])
)