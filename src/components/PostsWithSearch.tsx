"use client";

import { PostMetadata } from "@/lib/posts";
import { useMemo, useState } from "react";
import Posts from "./Posts";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

interface Props {
  posts: PostMetadata[];
}

export default function PostsWithSearch({ posts }: Props) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    return posts.filter((post) =>
      post.title?.toLowerCase().includes(query.toLowerCase()),
    );
  }, [posts, query]);

  const resetFilter = () => setQuery("");

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-3">
        <Input
          type="text"
          placeholder="Search something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          size="sm"
          variant="secondary"
          onClick={resetFilter}
          disabled={query.length === 0}
        >
          Clear
        </Button>
      </div>

      <Posts posts={filtered} />
    </div>
  );
}
