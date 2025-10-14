export interface Label {
  id: string;
  content: string;
  color: string;
  status: "choose" | "unchoose"
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
  due_date: string;
  create_at: string;
  tags: Label[];

}

export interface ListOfBoard {
  id: string;
  title: string;
  create_at: string;
  tasks: Task[];
}

export interface Board {
  backdrop: { id: string; type: string; bgImage: string };
  id: string;
  title: string;
  description: string;
  is_create: string;
  is_starred: boolean;
  is_closed: boolean;
  lists: ListOfBoard[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  create_at: string;
  boards: Board[];
}

export const templatesBackdrop = [
  {
    id: "1",
    type: "image",
    bgImage: "/images/mockImg1.jpg",
  },
  {
    id: "2",
    type: "image",
    bgImage: "/images/mockImage2.jpg",
  },
  {
    id: "3",
    type: "image",
    bgImage: "/images/mockImage3.jpg",
  },
  {
    id: "4",
    type: "image",
    bgImage: "/images/mockImg4.jpg",
  },
  {
    id: "5",
    type: "gradient",
    bgImage: "linear-gradient(to right bottom, #FFB100, #FA0C00)",
  },
  {
    id: "6",
    type: "gradient",
    bgImage: "linear-gradient(to right bottom, #2609FF, #D20CFF)",
  },
  {
    id: "7",
    type: "gradient",
    bgImage: "linear-gradient(to right bottom, #00FF2F, #00FFC8)",
  },
  {
    id: "8",
    type: "gradient",
    bgImage: "linear-gradient(to right bottom, #00FFE5, #004BFA)",
  },
  {
    id: "9",
    type: "gradient",
    bgImage: "linear-gradient(to right bottom, #FFA200, #EDFA00)",
  },
  {
    id: "10",
    type: "gradient",
    bgImage: "linear-gradient(to right bottom, #FF00EA, #FA0C00)",
  },
];


export const templateLabelTask = [
  {
    id: "theme1",
    color: "#BAF3DB"
  },
  {
    id: "theme2",
    color: "#F8E6A0"
  },
  {
    id: "theme3",
    color: "#FEDEC8"
  },
  {
    id: "theme4",
    color: "#FFD5D2"
  },
  {
    id: "theme5",
    color: "#DFD8FD"
  },
  {
    id: "theme6",
    color: "#4BCE97"
  },
  {
    id: "theme7",
    color: "#F5CD47"
  },
  {
    id: "theme8",
    color: "#FEA362"
  },
  {
    id: "theme9",
    color: "#F87168"
  },
  {
    id: "theme10",
    color: "#9F8FEF"
  },
]