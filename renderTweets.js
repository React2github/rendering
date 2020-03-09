
function renderTweets(tweetsAbstraction) {
    // Empty variables for storage 
    var firstTweet = '';  

        for (var i = 0; i < tweetsAbstraction.length;i++) {
         firstTweet = tweetsAbstraction.map(e => {
          verified = `${e.user.isVerified}`
                if (verified === "true") {
                    var verified = "Verified";
                }
                else {
                    var verified = "Not Verified";
                    }
          
         return  `

            <div>${e.user.username}</div>
            <div>${e.user.handle}</div>
            <div>${verified}</div>
            <img src="${e.user.profilePic}" width="100" />
            <div>${e.text}</div>
            <button>Likes ${e.likes}</button>
            <button>Retweets ${e.retweets}</button>
            <button>Replies ${e.replies}</button>

        `
    
         })
         
        }  

        return firstTweet.join(""); 
        
    }

 

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
                },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}