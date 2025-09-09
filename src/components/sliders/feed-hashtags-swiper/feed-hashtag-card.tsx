import { FeedHashtag } from "@/types/feed.interface";

export default function FeedHashtagCard({
  hashtag,
  isSelected,
  onClick,
}: {
  hashtag: FeedHashtag;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <h3
      className={`text-xl font-semibold cursor-pointer transition-colors ${
        isSelected ? "text-foreground" : "text-muted-foreground"
      }`}
      onClick={onClick}
    >
      {hashtag.name}
    </h3>
  );
}
