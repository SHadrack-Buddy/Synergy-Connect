import { Heart, MessageSquare, Share, MoreHorizontal, Plus, Send, Image as ImageIcon, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  tags: string[];
  liked: boolean;
  image?: string;
}

// TODO: Replace with real data from API
const mockComments: Comment[] = [
  {
    id: "c1",
    author: "Emily Davis",
    content: "This looks amazing! Can't wait to try it out.",
    timestamp: "1 hour ago",
  },
  {
    id: "c2",
    author: "Alex Johnson",
    content: "Great work on the documentation!",
    timestamp: "30 min ago",
  },
];

const mockPosts: Post[] = [
  {
    id: "1",
    author: "Sarah Wilson",
    content: "Just shipped our new design system! It includes 50+ components, comprehensive documentation, and full dark mode support. Really excited to see how this improves our development workflow.",
    timestamp: "2 hours ago",
    likes: 12,
    comments: mockComments,
    tags: ["design", "frontend"],
    liked: false,
  },
  {
    id: "2",
    author: "Mike Chen",
    content: "Great team meeting today! We discussed the Q4 roadmap and I'm thrilled about the upcoming features. The user feedback has been overwhelmingly positive.",
    timestamp: "4 hours ago", 
    likes: 8,
    comments: [],
    tags: ["team", "roadmap"],
    liked: true,
  },
  {
    id: "3",
    author: "John Doe",
    content: "Quick reminder: We have the monthly all-hands meeting tomorrow at 2 PM. I'll be presenting the latest performance metrics and discussing our growth strategy.",
    timestamp: "1 day ago",
    likes: 15,
    comments: [],
    tags: ["meeting", "announcement"],
    liked: false,
  },
];

export function PostFeed() {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState("");
  const [newPostTags, setNewPostTags] = useState("");
  const [commentTexts, setCommentTexts] = useState<Record<string, string>>({});
  const [showComments, setShowComments] = useState<Record<string, boolean>>({});

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
    const post = posts.find(p => p.id === postId);
    console.log(`Post ${postId} ${post?.liked ? 'unliked' : 'liked'}`);
  };

  const handleToggleComments = (postId: string) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    console.log(`Comments for post ${postId} ${showComments[postId] ? 'hidden' : 'shown'}`);
  };

  const handleAddComment = (postId: string) => {
    const commentText = commentTexts[postId];
    if (commentText?.trim()) {
      const newComment: Comment = {
        id: `c${Date.now()}`,
        author: "You",
        content: commentText,
        timestamp: "just now"
      };
      
      setPosts(posts.map(post => 
        post.id === postId 
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      ));
      
      setCommentTexts(prev => ({ ...prev, [postId]: "" }));
      console.log(`Comment added to post ${postId}`);
    }
  };

  const handleCommentChange = (postId: string, text: string) => {
    setCommentTexts(prev => ({ ...prev, [postId]: text }));
  };

  const handleShare = (postId: string) => {
    console.log(`Share post ${postId}`);
  };

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const tags = newPostTags.split(',').map(tag => tag.trim()).filter(tag => tag);
      const post: Post = {
        id: Date.now().toString(),
        author: "You",
        content: newPost,
        timestamp: "just now",
        likes: 0,
        comments: [],
        tags: tags,
        liked: false,
      };
      setPosts([post, ...posts]);
      setNewPost("");
      setNewPostTags("");
      console.log("New post created");
    }
  };

  const handleAddMedia = () => {
    console.log("Add media clicked");
  };

  const handleAddImage = () => {
    console.log("Add image clicked");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Enhanced Create Post */}
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
        <CardContent className="pt-0 space-y-3">
          <div>
            <Input
              placeholder="Add tags (separated by commas)"
              value={newPostTags}
              onChange={(e) => setNewPostTags(e.target.value)}
              data-testid="input-post-tags"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleAddImage}
                data-testid="button-add-image"
              >
                <ImageIcon className="h-4 w-4 mr-1" />
                Image
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleAddMedia}
                data-testid="button-add-media"
              >
                <Paperclip className="h-4 w-4 mr-1" />
                Attach
              </Button>
            </div>
            <Button 
              onClick={handleCreatePost}
              disabled={!newPost.trim()}
              data-testid="button-create-post"
            >
              <Send className="h-4 w-4 mr-1" />
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
                  onClick={() => handleToggleComments(post.id)}
                  data-testid={`button-comment-${post.id}`}
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {post.comments.length}
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

            {/* Comments Section */}
            <Collapsible open={showComments[post.id]}>
              <CollapsibleContent className="mt-4">
                <Separator className="mb-4" />
                
                {/* Existing Comments */}
                {post.comments.length > 0 && (
                  <div className="space-y-3 mb-4">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex gap-2">
                        <Avatar className="h-6 w-6 mt-1">
                          <AvatarFallback className="text-xs">
                            {comment.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 bg-muted/50 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium">{comment.author}</span>
                            <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                          </div>
                          <p className="text-sm">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Comment */}
                <div className="flex gap-2">
                  <Avatar className="h-6 w-6 mt-1">
                    <AvatarFallback className="text-xs">YU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 flex gap-2">
                    <Input
                      placeholder="Write a comment..."
                      value={commentTexts[post.id] || ""}
                      onChange={(e) => handleCommentChange(post.id, e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddComment(post.id);
                        }
                      }}
                      data-testid={`input-comment-${post.id}`}
                    />
                    <Button 
                      size="sm"
                      onClick={() => handleAddComment(post.id)}
                      disabled={!commentTexts[post.id]?.trim()}
                      data-testid={`button-add-comment-${post.id}`}
                    >
                      <Send className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}