"use strict";
const Lib = require(require("os").homedir() + "/c/lib.js");

{
  let users = JSON.parse(Lib.input());

  let follower_counts = {};
  let user_ids = [];

  let users_len = Lib.length(users);
  let i = 0;

  let user_id = "";
  let followed_id = "";
  let following = [];

  let max_followers = -1;

  // users にいる user_id を登録
  i = users_len;
  while (i--) {
    user_id = String(users[i].user_id);

    if (!Object.hasOwn(follower_counts, user_id)) {
      follower_counts[user_id] = 0;
      Lib.push(user_ids, user_id);
    }
  }

  // following を見てフォロワー数を数える
  i = users_len;
  while (i--) {
    following = users[i].following;

    let j = Lib.length(following);
    while (j--) {
      followed_id = String(following[j]);

      if (!Object.hasOwn(follower_counts, followed_id)) {
        follower_counts[followed_id] = 0;
        Lib.push(user_ids, followed_id);
      }

      follower_counts[followed_id] = follower_counts[followed_id] + 1;
    }
  }

  // 最大フォロワー数を探す
  i = Lib.length(user_ids);
  while (i--) {
    user_id = user_ids[i];

    if (follower_counts[user_id] > max_followers) {
      max_followers = follower_counts[user_id];
    }
  }

  Lib.print("---\n");

  // 最大フォロワー数の user_id を出す
  i = Lib.length(user_ids);
  while (i--) {
    user_id = user_ids[i];

    if (follower_counts[user_id] === max_followers) {
      Lib.print(user_id);
      Lib.print("\n");
    }
  }
}
