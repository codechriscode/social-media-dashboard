export type StatusType = {
  value: number;
  unit: string;
};

export type MainStatusType = StatusType & { change: number };
export type OtherStatusType = StatusType & { change_pc: number }

export type MediumInfoType = {
  name: string;
  username: string;
};

export type MockType = {
  period: number;
  total_followers: number;
  media: {
    [key: string]: MediumInfoType & {
      status: MainStatusType;
      other_status: OtherStatusType[];
    };
  };
};

const mock: MockType = {
  period: 0,
  total_followers: 23004,
  media: {
    facebook: {
      name: "Facebook",
      username: "@nathanf",
      status: {
        value: 1987,
        unit: "followers",
        change: 12,
      },
      other_status: [
        {
          unit: "page views",
          value: 87,
          change_pc: 3,
        },
        {
          unit: "likes",
          value: 52,
          change_pc: -2,
        },
      ],
    },
    twitter: {
      name: "Twitter",
      username: "@nathanf",
      status: {
        value: 1044,
        unit: "followers",
        change: 99,
      },
      other_status: [
        {
          unit: "retweets",
          value: 117,
          change_pc: 303,
        },
        {
          unit: "likes",
          value: 507,
          change_pc: 553,
        },
      ],
    },
    instagram: {
      name: "Instagram",
      username: "@realnathanf",
      status: {
        value: 11734,
        unit: "followers",
        change: 1099,
      },
      other_status: [
        {
          unit: "likes",
          value: 5462,
          change_pc: 2257,
        },
        {
          unit: "profile views",
          value: 52312,
          change_pc: 1375,
        },
      ],
    },
    youtube: {
      name: "YouTube",
      username: "Nathan F.",
      status: {
        value: 8239,
        unit: "subscribers",
        change: 144,
      },
      other_status: [
        {
          unit: "likes",
          value: 107,
          change_pc: -19,
        },
        {
          unit: "total views",
          value: 1407,
          change_pc: -12,
        },
      ],
    },
  },
};

export default mock;
