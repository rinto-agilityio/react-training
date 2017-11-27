export const users = [
  {
    biography:
      "Discovering — and telling — stories from around the world. Curated by Instagram's community team.",
    full_name: "Instagram",
    id: 2250323280,
    profile_pic_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-19/s150x150/14719833_310540259320655_1605122788543168512_a.jpg",
    username: "instagram"
  },
  {
    biography: "Travel blog",
    full_name: "Phorgasm",
    id: 1782230061,
    profile_pic_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-19/s150x150/19764837_461147117574705_5216900266812506112_a.jpg",
    username: "phorgasm"
  },
  {
    biography:
      "Nestled in a lush hillside overlooking a private bay in central Vietnam. Absolute tranquility and seclusion await you at #InterContinentalDanang",
    full_name: "InterContinental Danang Resort",
    id: 313234246,
    profile_pic_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-19/s150x150/22430071_182024072367522_8088673099232313344_n.jpg",
    username: "intercontinentaldanang"
  }
];

export const photos = [
  {
    id: 1,
    display_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-15/e35/23734057_146614452628759_6006637352594702336_n.jpg",
    comments: [],
    likes: [],
    owner: users[0]
  },
  {
    id: 2,
    display_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-15/e35/23498828_2151213871773296_819155850823204864_n.jpg",
    comments: [],
    likes: [users[1].id, users[2].id],
    owner: users[1]
  },
  {
    id: 3,
    display_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-15/e35/24175192_386600438440197_6609205033542090752_n.jpg",
    comments: [],
    likes: [],
    owner: users[2]
  },
  {
    id: 4,
    display_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-15/e35/23735089_2118780284814297_6360608194691072000_n.jpg",
    comments: [],
    likes: [],
    owner: users[1]
  },
  {
    id: 5,
    display_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-15/e35/23507198_134966203890957_7855155284967161856_n.jpg",
    comments: [],
    likes: [],
    owner: users[2]
  },
  {
    id: 6,
    display_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-15/e35/23348305_134350023994689_4311291654943277056_n.jpg",
    comments: [],
    likes: [],
    owner: users[0]
  },
  {
    id: 7,
    display_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-15/e35/23279445_286159121904522_7941518646268919808_n.jpg",
    comments: [],
    likes: [],
    owner: users[2]
  },
  {
    id: 8,
    display_url:
      "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-15/e35/22857717_938768352928552_2694353407073845248_n.jpg",
    comments: [],
    likes: [],
    owner: users[1]
  }
];

export const comments = [
  {
    id: 1,
    text: "Awesome photo",
    owner: users[0]
  },
  {
    id: 2,
    text: "Woow beautiful color.",
    owner: users[1]
  },
  {
    id: 3,
    text: "This is art",
    owner: users[0]
  },
  {
    id: 4,
    text: "Wow this is a fresh concept",
    owner: users[2]
  }
];
