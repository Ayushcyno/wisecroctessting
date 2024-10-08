import React, { useState } from "react";
import { MantineProvider, Avatar, Button, TextInput } from "@mantine/core";

export default function NoticeBarChat() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Olivia",
      content: "Should students carry Drawing Paper or Canvas also",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      author: "Sam (Class Teacher)",
      content: "@Olivia School will provide Drawing Paper or Canvas",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: "You",
          content: newComment,
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="w-[1131px] h-[670px] mx-auto p-4 bg-white rounded-lg ">
      <div className="w-[1091px] h-[65px] bg-[#fafafb] rounded-xl border border-[#ebecee] ">
        <h2 className="text-xl font-bold mb-2">Class Painting Competition</h2>
        <p className="text-gray-600 text-sm mb-2">21 Sep, 9:00 AM - 12:00 PM</p>
      </div>
      <h2 className="text-[#303030] text-base font-semibold font-Switzer">
        Description
      </h2>
      <p className="mb-4">
        I am writing to inform you about an exciting opportunity for our
        students.
      </p>
      <p className="mb-4">
        Our school is organizing a Class Painting Competition on the given date.
        This event is a wonderful chance for the children to express their
        creativity and showcase their artistic talents.
      </p>
      <p className="mb-4">
        We encourage all students to participate, as it not only helps them
        explore their artistic abilities but also boosts their confidence. This
        event is free competition is for Beginners, and all students are
        encouraged to participate.
      </p>
      <p className="mb-4">
        Please ensure that your child comes prepared with their painting
        materials, including Paint brushes, Pencils, Eraser, Palette, Water
        Container. We believe that this competition will be a fun and enriching
        experience for them.
      </p>
      <div className="flex items-center text-gray-600">
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        Like
      </div>

      <div className="bg-white p-4 rounded-lg shadow w-[1071px] h-[305px] ">
        <h3 className="font-bold mb-4">Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="flex mb-4">
            <Avatar
              src={comment.avatar}
              alt={comment.author}
              className="mr-3"
            />
            <div>
              <p className="font-semibold">{comment.author}</p>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="mt-4">
          <TextInput
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-2"
          />
          <Button type="submit" color="blue">
            Post Comment
          </Button>
        </form>
      </div>
    </div>
  );
}
