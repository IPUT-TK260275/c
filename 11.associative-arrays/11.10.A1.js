"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
    let users = JSON.parse(Lib.input());
    let follower_counts = {};
    let user_ids = [];

    let i = 0;
    while (i < Lib.length(users)) {
        let user_id = String(users[i].user_id);
        if (!Object.hasOwn(follower_counts, user_id)) {
            follower_counts[user_id] = 0;
            Lib.push(user_ids, user_id);
        }
        i = i + 1;
    }

    let j = 0;
    while (j < Lib.length(users)) {
        let following = users[j].following;
        let k = 0;
        while (k < Lib.length(following)) {
            let followed_id = String(following[k]);
            if (!Object.hasOwn(follower_counts, followed_id)) {
                follower_counts[followed_id] = 0;
                Lib.push(user_ids, followed_id);
            }
            follower_counts[followed_id] = follower_counts[followed_id] + 1;
            k = k + 1;
        }
        j = j + 1;
    }

    let max_followers = -1;
    let m = 0;
    while (m < Lib.length(user_ids)) {
        let user_id = user_ids[m];
        if (follower_counts[user_id] > max_followers) {
            max_followers = follower_counts[user_id];
        }
        m = m + 1;
    }

    Lib.print("---\n");
    let n = 0;
    while (n < Lib.length(user_ids)) {
        let user_id = user_ids[n];
        if (follower_counts[user_id] === max_followers) {
            Lib.print(user_id);
            Lib.print("\n");
        }
        n = n + 1;
    }
}
