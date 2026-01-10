const videoDB = [
    // --- TECH & CODING ---
    {
        thumbnail: "https://i.ytimg.com/vi/M7lc1UVf-VE/hq720.jpg",
        time: "11:32",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Build a Website in 10 Minutes",
        author: "Web Dev Simplified",
        stats: "1.2M views • 1 year ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/ccYiE6H6hM4/hq720.jpg",
        time: "8:22",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Why You Should Learn Python in 2024",
        author: "Tech With Tim",
        stats: "1.1M views • 3 months ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/kjBvQWHk_jI/hq720.jpg",
        time: "4:05:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Full Stack Web Development Course",
        author: "FreeCodeCamp",
        stats: "5.2M views • 2 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/U9mJuUkhUzk/hq720.jpg",
        time: "15:45",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "iPhone 15 Pro Review: The Truth",
        author: "MKBHD",
        stats: "9M views • 6 months ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg",
        time: "10:12",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "React vs Angular vs Vue - Which one?",
        author: "Fireship",
        stats: "890K views • 1 month ago"
    },

    // --- MUSIC ---
    {
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg",
        time: "3:32",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Never Gonna Give You Up",
        author: "Rick Astley",
        stats: "1.4B views • 14 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg",
        time: "3:45",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Despacito - Luis Fonsi ft. Daddy Yankee",
        author: "Luis Fonsi",
        stats: "8.1B views • 6 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg",
        time: "4:15",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        author: "officialpsy",
        stats: "5.3B views • 12 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/jfKfPfyJRdk/hq720.jpg",
        time: "LIVE",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "lofi hip hop radio - beats to relax/study to",
        author: "Lofi Girl",
        stats: "66k watching"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/kffacxfA7G4/hq720.jpg",
        time: "3:39",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Justin Bieber - Baby ft. Ludacris",
        author: "Justin Bieber",
        stats: "3B views • 13 years ago"
    },

    // --- NATURE & TRAVEL ---
    {
        thumbnail: "https://i.ytimg.com/vi/LXb3EKWsInQ/hq720.jpg",
        time: "4:05",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "COSTA RICA IN 4K 60fps HDR (ULTRA HD)",
        author: "Jacob & Katie Schwarz",
        stats: "85M views • 4 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/F5mRWCjhIDY/hq720.jpg",
        time: "12:45",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Top 10 Places to Visit in Nepal",
        author: "Travel Nepal",
        stats: "890K views • 1 year ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hq720.jpg",
        time: "25:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Deep Focus Music - Ambient Study Music",
        author: "Greenred Productions",
        stats: "20M views • 5 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hq720.jpg",
        time: "2:55",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "The Muppets: Bohemian Rhapsody",
        author: "The Muppets",
        stats: "99M views • 10 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/K1QICrgxTjA/hq720.jpg",
        time: "10:15",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Japan in 8K 60fps",
        author: "Armadas",
        stats: "15M views • 3 years ago"
    },

    // --- GAMING ---
    {
        thumbnail: "https://i.ytimg.com/vi/CEvfJb23sQM/hq720.jpg",
        time: "10:01",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Minecraft Speedrun World Record",
        author: "Dream",
        stats: "30M views • 2 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/QdBZY2fkU-0/hq720.jpg",
        time: "1:30",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Grand Theft Auto VI Trailer 1",
        author: "Rockstar Games",
        stats: "150M views • 2 months ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/V1B9sHBbyhs/hq720.jpg",
        time: "25:30",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Elden Ring - Full Gameplay Walkthrough",
        author: "RadBrad",
        stats: "4M views • 1 year ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/2g811Eo7K8U/hq720.jpg",
        time: "14:20",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Fortnite World Cup Finals Highlights",
        author: "Fortnite",
        stats: "10M views • 3 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/jj6M_zY_t8E/hq720.jpg",
        time: "8:45",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Super Mario Bros Speedrun in 4:55",
        author: "Niftski",
        stats: "5M views • 1 year ago"
    },

    // --- COOKING & FOOD ---
    {
        thumbnail: "https://i.ytimg.com/vi/DyTCOjW0Zkc/hq720.jpg",
        time: "15:30",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Gordon Ramsay Cooks the Perfect Steak",
        author: "Gordon Ramsay",
        stats: "50M views • 3 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/2N7T-iW1D_0/hq720.jpg",
        time: "12:10",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "How to Make the Best Burger",
        author: "Binging with Babish",
        stats: "12M views • 4 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/5DxM8k-g7-0/hq720.jpg",
        time: "10:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Reviewing Uncle Roger's Fried Rice",
        author: "mrnigelng",
        stats: "20M views • 2 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/mdJ8G500jV4/hq720.jpg",
        time: "8:05",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Street Food in Japan - SEAFOOD MARKET",
        author: "Strictly Dumpling",
        stats: "18M views • 5 years ago"
    },

    // --- SCIENCE & EDUCATION ---
    {
        thumbnail: "https://i.ytimg.com/vi/7ghhRHRP6t4/hq720.jpg",
        time: "18:40",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "The Man Who Accidentally Killed The Most People",
        author: "Veritasium",
        stats: "25M views • 1 year ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/JtPdnc08dTs/hq720.jpg",
        time: "10:50",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "What If The Earth Stopped Spinning?",
        author: "Vsauce",
        stats: "30M views • 7 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/hYdYL258Z1A/hq720.jpg",
        time: "12:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "The Egg - A Short Story",
        author: "Kurzgesagt",
        stats: "28M views • 3 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/0e3GPea1Tyg/hq720.jpg",
        time: "15:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "$456,000 Squid Game In Real Life!",
        author: "MrBeast",
        stats: "500M views • 2 years ago"
    },

    // --- SPORTS ---
    {
        thumbnail: "https://i.ytimg.com/vi/3B29u72eFkQ/hq720.jpg",
        time: "10:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Top 10 Goals of the Year",
        author: "FIFA",
        stats: "5M views • 1 month ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/lXgkuM2NhYI/hq720.jpg",
        time: "4:30",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "NBA Dunk Contest Highlights",
        author: "NBA",
        stats: "15M views • 1 year ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/5g3_1fX5j2s/hq720.jpg",
        time: "8:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "F1 2023 Season Recap",
        author: "FORMULA 1",
        stats: "3M views • 2 months ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/1_1_1_1_1_1/hq720.jpg",
        time: "12:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "UFC 300 - Full Fight Card Preview",
        author: "UFC",
        stats: "1M views • 1 day ago"
    },

    // --- COMEDY ---
    {
        thumbnail: "https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg",
        time: "10:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "lofi hip hop radio - beats to relax/study to",
        author: "ChilledCow",
        stats: "100M views • 4 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/9v_1_1_1_1_1/hq720.jpg",
        time: "5:30",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Key & Peele - Substitute Teacher",
        author: "Comedy Central",
        stats: "200M views • 8 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/_1_1_1_1_1_1/hq720.jpg",
        time: "6:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Carpool Karaoke w/ Adele",
        author: "The Late Late Show",
        stats: "250M views • 7 years ago"
    },

    // --- MISC & VIRAL ---
    {
        thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/hq720.jpg",
        time: "0:19",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Me at the zoo",
        author: "jawed",
        stats: "280M views • 18 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg",
        time: "3:10",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Charlie Bit My Finger",
        author: "HDCYT",
        stats: "900M views • 15 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/gQlMMD8auMs/hq720.jpg",
        time: "2:16",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Baby Shark Dance",
        author: "Pinkfong",
        stats: "13B views • 7 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/WWR265XJ0aA/hq720.jpg",
        time: "5:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Planet Earth II - Official Trailer",
        author: "BBC Earth",
        stats: "40M views • 7 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/ScMzIvxBSi4/hq720.jpg",
        time: "3:55",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Star Wars: The Force Awakens Trailer",
        author: "Star Wars",
        stats: "100M views • 8 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/YQHsXMglC9A/hq720.jpg",
        time: "4:55",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Hello - Adele",
        author: "Adele",
        stats: "3B views • 8 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/OPf0YbXqDm0/hq720.jpg",
        time: "4:30",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Mark Ronson - Uptown Funk ft. Bruno Mars",
        author: "Mark Ronson",
        stats: "4.8B views • 9 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/09R8_2nJtjg/hq720.jpg",
        time: "3:40",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Maroon 5 - Sugar",
        author: "Maroon 5",
        stats: "3.8B views • 9 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hq720.jpg",
        time: "4:23",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Ed Sheeran - Shape of You",
        author: "Ed Sheeran",
        stats: "6B views • 7 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/fRh_vgS2dFE/hq720.jpg",
        time: "3:20",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Justin Bieber - Sorry",
        author: "Justin Bieber",
        stats: "3.6B views • 8 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/LPD03554uT4/hq720.jpg",
        time: "3:10",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Katy Perry - Roar",
        author: "Katy Perry",
        stats: "3.7B views • 10 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/p7T4h7gP5_o/hq720.jpg",
        time: "4:00",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "OneRepublic - Counting Stars",
        author: "OneRepublic",
        stats: "3.7B views • 10 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/RgKAFK5djSk/hq720.jpg",
        time: "3:52",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Wiz Khalifa - See You Again ft. Charlie Puth",
        author: "Wiz Khalifa",
        stats: "5.8B views • 8 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/CevxZvSJLk8/hq720.jpg",
        time: "3:10",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Katy Perry - Dark Horse",
        author: "Katy Perry",
        stats: "3.4B views • 9 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/papuvlVeZg8/hq720.jpg",
        time: "3:15",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Clean Bandit - Rockabye",
        author: "Clean Bandit",
        stats: "2.7B views • 7 years ago"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/2vjPBrBU-TM/hq720.jpg",
        time: "3:40",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        title: "Sia - Chandelier",
        author: "Sia",
        stats: "2.5B views • 9 years ago"
    }
];