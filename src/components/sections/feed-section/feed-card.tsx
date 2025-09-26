"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart } from "lucide-react";
import Image from "next/image";
import { FeedArticle } from "@/types/feed.interface";
import { Teacher } from "@/types/teacher.interface";
import { useState, useEffect } from "react";
import Link from "next/link";

interface FeedCardProps {
  post: FeedArticle;
}

export default function FeedCard({ post }: FeedCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes_count);
  const [isLiked, setIsLiked] = useState(false);
  const [teacher, setTeacher] = useState<Teacher | null>(post.teacher || null);
  const [isLoadingTeacher, setIsLoadingTeacher] = useState(!post.teacher);

  useEffect(() => {
    const fetchTeacher = async () => {
      if (post.teacher || !post.teacher_id) return;

      try {
        setIsLoadingTeacher(true);
        const response = await fetch(`/api/teachers/${post.teacher_id}`);

        if (response.ok) {
          const teacherData = await response.json();
          setTeacher(teacherData);
        } else {
          console.error("Failed to fetch teacher data");
        }
      } catch (error) {
        console.error("Error fetching teacher:", error);
      } finally {
        setIsLoadingTeacher(false);
      }
    };

    fetchTeacher();
  }, [post.teacher_id, post.teacher]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 60) {
      return `${diffInMinutes} хв тому`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} год тому`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} дн тому`;
    }
  };

  const handleLike = async () => {
    const previousLikesCount = likesCount;
    const previousIsLiked = isLiked;

    setLikesCount((prev) => prev + 1);
    setIsLiked(true);

    try {
      const response = await fetch("/api/feed/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId: post.id }),
      });

      if (response.ok) {
        const data = await response.json();
        setLikesCount(data.likes_count);
      } else {
        console.error("Failed to like post");
        setLikesCount(previousLikesCount);
        setIsLiked(previousIsLiked);
      }
    } catch (error) {
      console.error("Error liking post:", error);
      setLikesCount(previousLikesCount);
      setIsLiked(previousIsLiked);
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-card p-4 rounded-2xl shadow-md">
      <div className="flex items-center gap-4">
        {isLoadingTeacher ? (
          <Skeleton className="size-10 rounded-full" />
        ) : (
          <Link href={`/teacher/${teacher?.id}`}>
            <Avatar className="size-10">
              <AvatarImage
                src={
                  teacher?.profile_image_url || "https://github.com/shadcn.png"
                }
                alt={teacher?.full_name || "Teacher"}
              />
              <AvatarFallback>
                {teacher?.full_name
                  ? teacher.full_name.charAt(0).toUpperCase() +
                    teacher.full_name.charAt(1).toUpperCase()
                  : "T"}
              </AvatarFallback>
            </Avatar>
          </Link>
        )}
        <div>
          {isLoadingTeacher ? (
            <Skeleton className="h-5 w-32 mb-1" />
          ) : (
            <Link href={`/teacher/${teacher?.id}`}>
              <h3 className="text-base font-semibold">
                {teacher?.full_name || `Teacher ${post.teacher_id}`}
              </h3>
            </Link>
          )}
          <p className="text-sm text-muted-foreground">
            {formatDate(post.created_at)}
          </p>
        </div>
      </div>

      {post.post_image_url && (
        <Image
          src={post.post_image_url}
          alt={post.title}
          width={500}
          height={300}
          className="w-full h-auto rounded-lg object-cover"
        />
      )}

      <div>
        <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
        <p className="text-foreground whitespace-pre-line">
          {post.content.length > 150 && !isExpanded
            ? `${post.content.substring(0, 150)}...`
            : post.content}
          {post.content.length > 150 && (
            <span
              className="text-primary font-semibold cursor-pointer hover:underline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {" "}
              {isExpanded ? "Менше" : "Ще"}
            </span>
          )}
        </p>
      </div>

      <Separator />

      <div className="flex items-center gap-2">
        <Heart
          size={20}
          className={`cursor-pointer transition-colors ${
            isLiked ? "text-red-500 fill-red-500" : "hover:text-red-500"
          }`}
          onClick={handleLike}
        />
        <span className="text-sm text-muted-foreground">{likesCount}</span>
      </div>
    </div>
  );
}
