export type SocialNetworkNames = keyof typeof socialNetworks;

export const socialNetworks = {
  Facebook: {
    name: "Facebook",
    value: "facebook",
    address: "facebook.com",
    metrics: {
      main: "followers",
      other: ["page views", "likes"],
    },
  },
  Instagram: {
    name: "Instagram",
    value: "instagram",
    address: "instagram.com",
    metrics: {
      main: "followers",
      other: ["likes", "profile views"],
    },
  },
  YouTube: {
    name: "YouTube",
    value: "youtube",
    address: "youtube.com",
    metrics: {
      main: "subscribers",
      other: ["likes", "total views"],
    },
  },
  Twitter: {
    name: "Twitter",
    value: "twitter",
    address: "twitter.com",
    metrics: {
      main: "followers",
      other: ["retweets", "likes"],
    },
  },
};
