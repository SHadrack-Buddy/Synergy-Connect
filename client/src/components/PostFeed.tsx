import { Heart, MessageSquare, Share, MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
  liked: boolean;
}

// TODO: Replace with real data from API
const mockPosts: Post[] = [
  {
    id: "1",
    author: "Sarah Wilson",
    content: "Just shipped our new design system! It includes 50+ components, comprehensive documentation, and full dark mode support. Really excited to see how this improves our development workflow.",
    timestamp: "2 hours ago",
    likes: 12,
    comments: 5,
    tags: ["design", "frontend"],
    liked: false,
  },
  {
    id: "2",
    author: "Mike Chen",
    content: "Great team meeting today! We discussed the Q4 roadmap and I'm thrilled about the upcoming features. The user feedback has been overwhelmingly positive.",
    timestamp: "4 hours ago", 
    likes: 8,
    comments: 3,
    tags: ["team", "roadmap"],
    liked: true,
  },
  {
    id: "3",
    author: "John Doe",
    content: "Quick reminder: We have the monthly all-hands meeting tomorrow at 2 PM. I'll be presenting the latest performance metrics and discussing our growth strategy.",
    timestamp: "1 day ago",
    likes: 15,
    comments: 7,
    tags: ["meeting", "announcement"],
    liked: false,
  },
];

export function PostFeed() {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState("");

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
    console.log(`Post ${postId} ${posts.find(p => p.id === postId)?.liked ? 'unliked' : 'liked'}`);
  };

  const handleComment = (postId: string) => {
    console.log(`Comment on post ${postId}`);
  };

  const handleShare = (postId: string) => {
    console.log(`Share post ${postId}`);
  };

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Date.now().toString(),
        author: "You",
        content: newPost,
        timestamp: "just now",
        likes: 0,
        comments: 0,
        tags: [],
        liked: false,
      };
      setPosts([post, ...posts]);
      setNewPost("");
      console.log("New post created");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Create Post */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>YU</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="resize-none border-0 text-base focus-visible:ring-0"
                rows={3}
                data-testid="textarea-new-post"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => console.log("Add media clicked")}
                data-testid="button-add-media"
              >
                <Plus className="h-4 w-4 mr-1" />
                Media
              </Button>
            </div>
            <Button 
              onClick={handleCreatePost}
              disabled={!newPost.trim()}
              data-testid="button-create-post"
            >
              Post
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      {posts.map((post) => (
        <Card key={post.id} className="hover-elevate">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-sm">{post.author}</h3>
                  <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => console.log(`Post options for ${post.id}`)}
                data-testid={`button-post-options-${post.id}`}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground mb-4 leading-relaxed">{post.content}</p>
            
            {post.tags.length > 0 && (
              <div className="flex gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className={post.liked ? "text-destructive" : ""}
                  data-testid={`button-like-${post.id}`}
                >
                  <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} />
                  {post.likes}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleComment(post.id)}
                  data-testid={`button-comment-${post.id}`}
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {post.comments}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare(post.id)}
                  data-testid={`button-share-${post.id}`}
                >
                  <Share className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}