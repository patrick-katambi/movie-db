const genres: {
  label: string;
  backgroundImage: string;
}[] = [
  { label: "Animation", backgroundImage: "" },
  { label: "Action", backgroundImage: "" },
  { label: "Sci-fi", backgroundImage: "" },
  { label: "Comedy", backgroundImage: "" },
  { label: "Drama", backgroundImage: "" },
  { label: "Family", backgroundImage: "" },
  { label: "Kids", backgroundImage: "" },
  { label: "Fantasy", backgroundImage: "" },
  { label: "Horror", backgroundImage: "" },
  { label: "Mystery", backgroundImage: "" },
  { label: "Romance", backgroundImage: "" },
  { label: "Thriller", backgroundImage: "" },
  { label: "Western", backgroundImage: "" },
  { label: "War", backgroundImage: "" },
  { label: "Documentary", backgroundImage: "" },
  { label: "Martial arts", backgroundImage: "" },
].sort((a, b) => (a.label > b.label ? 1 : -1));

export default genres;
