import React from 'react';
import { Input } from './input';
import { Button } from './button';
import Image from 'next/image';
import { ArrowDownAZ } from 'lucide-react';

interface CommentsProps {
  comments: {
    id?: number;
    name: string;
    comment: string;
    date?: string;
    userProfile: string;
  }[];
}
export default function Comments({ comments }: CommentsProps) {
  return (
    <div>
      <div className="flex gap-2 items-center mt-4">
        <Input
          type=""
          className="w-full h-16"
          onChange={(e) => console.log(e.target.value)}
          placeholder="Type a message"
        />
        <Button className=" bg-teal-600 "> Send</Button>
      </div>
      <div>
        <div className="flex gap-4 items-center mt-4">
          Sort
          <span className="bg-[#1F2024] flex">
            Lates <ArrowDownAZ />
          </span>
        </div>
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            name={comment.name}
            userProfile={comment.userProfile}
            comment={comment.comment}
          />
        ))}
      </div>
    </div>
  );
}

interface CommentCardProps {
  name: string;
  comment: string;
  date?: string;
  userProfile: string;
}
export function CommentCard({ name, comment, userProfile }: CommentCardProps) {
  return (
    <div className="border border-transparent border-b-gray-800 p-4 ">
      <div className="flex gap-2 items-center">
        <div className="w-[45px] h-[45px]  flex justify-center items-center rounded-xl p-2">
          <Image src={userProfile} alt="holder" width={100} height={100} />
        </div>

        <h2>{name}</h2>
      </div>
      <div className="px-2 ">
        <p>{comment}</p>
      </div>
    </div>
  );
}
