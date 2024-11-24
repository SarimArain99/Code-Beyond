import React, { useState, ChangeEvent, FormEvent } from "react";

interface Comment {
  id: number;
  text: string;
  timestamp: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentComment, setCurrentComment] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentComment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          text: currentComment,
          timestamp: new Date().toLocaleString(),
        },
      ]);
      setCurrentComment("");
    }
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentComment(e.target.value);
  };

  return (
    <div className=" rounded-xl p-6 mt-10 bg-gradient-to-r from-gray-900/45 to-gray-800/10 shadow-lg shadow-gray-950 transition-all">
      <h1 className="text-white text-2xl font-bold mb-6">Comments</h1>
      <div className="my-6 space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-300 italic text-center cursor-default">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start gap-4 bg-gray-800/60 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-transform transform"
            >
              <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                {comment.text.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-white text-base">{comment.text}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {comment.timestamp}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-x-4">
        <textarea
          name="comment"
          placeholder="Write your comment..."
          className="flex-grow p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
          value={currentComment}
          onChange={handleCommentChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (currentComment.trim()) {
                handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
              }
            }
          }}
          rows={2}
        />
        <button
          type="submit"
          className="relative bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!currentComment.trim()}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition">
            Add Comment
          </span>
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
