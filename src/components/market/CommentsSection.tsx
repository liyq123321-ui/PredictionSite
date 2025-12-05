// src/components/market/CommentsSection.tsx
import React, { useState } from 'react';

interface Comment {
  id: string;
  user: {
    id: string;
    username: string;
    avatar?: string;
  };
  content: string;
  timestamp: Date;
  likes: number;
  isLiked: boolean;
  marketPrediction?: {
    outcome: string;
    confidence: number; // 1-100
    amount: number;
  };
}

interface CommentsSectionProps {
  marketId: string;
}

// eslint-disable-next-line no-empty-pattern
export const CommentsSection: React.FC<CommentsSectionProps> = ({ }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 模拟当前用户
  const currentUser = {
    id: 'user_current',
    username: '当前用户',
    avatar: 'https://images.manifold.markets/avatars/user1.png'
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    
    // 模拟API延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const comment: Comment = {
      id: `comment_${Date.now()}`,
      user: currentUser,
      content: newComment,
      timestamp: new Date(),
      likes: 0,
      isLiked: false
    };
    
    setComments(prev => [comment, ...prev]);
    setNewComment('');
    setIsSubmitting(false);
  };

  const handleLikeComment = (commentId: string) => {
    setComments(prev => prev.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked
          }
        : comment
    ));
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - time.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return '刚刚';
    if (diffInMinutes < 60) return `${diffInMinutes}分钟前`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}小时前`;
    return time.toLocaleDateString('zh-CN');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">市场讨论</h3>
      
      {/* 评论输入框 */}
      <form onSubmit={handleSubmitComment} className="mb-6">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.username}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="分享您的分析和预测..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">
                {comments.length} 条评论
              </span>
              <button
                type="submit"
                disabled={!newComment.trim() || isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:cursor-not-allowed"
              >
                {isSubmitting ? '发布中...' : '发布评论'}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* 评论列表 */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">💬</div>
            <p>暂无评论，成为第一个讨论者</p>
          </div>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="flex gap-3 pb-4 border-b border-gray-100 last:border-b-0">
              <img 
                src={comment.user.avatar} 
                alt={comment.user.username}
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">{comment.user.username}</span>
                  <span className="text-xs text-gray-500">{formatTime(comment.timestamp)}</span>
                </div>
                <p className="text-gray-700 mb-2 whitespace-pre-wrap">{comment.content}</p>
                
                {/* 评论操作 */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className={`flex items-center gap-1 text-sm transition-colors ${
                      comment.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    }`}
                  >
                    ❤️ {comment.likes > 0 && comment.likes}
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    回复
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentsSection;