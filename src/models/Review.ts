type Review = {
  book_id: number;
  author_id: number;
  author: string;
  title: string | null;
  date: string;
  review: string;
  rating: number;
  isNew: boolean;
  profilePicture: string | null;
};

export default Review;
