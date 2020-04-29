export interface i_responce {
  home: {
    list: {
      id: string;
      name: string;
      genreId: string;
      updatedAt: string;
      count: number;
    }[];
    count: number;
  };
  talks: {
    list: {
      talkId: string;
      roomId: string;
      name: string;
      message: string;
      createdAt: string;
      updatedAt: string;
    }[];
    count: number;
  };
  rooms: {
    id: string;
  };
}
