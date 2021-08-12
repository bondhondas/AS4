  let names = ['max', 'wax', 'akash', 'rasel', 'jibon'];
   var friend;

    function  prefectFriend(friends) {    
        if (friends.length === 0) {
            throw 'Erro'
        }
        for  (let  friend  of  friends) {    
            if (friend.length > 4) {
                return friend;
            }
        }
    }
    console.log(prefectFriend(names));