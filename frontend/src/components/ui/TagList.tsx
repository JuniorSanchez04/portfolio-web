interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs text-indigo-300 bg-indigo-600/10 border border-indigo-500/20 px-2 py-0.5 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
