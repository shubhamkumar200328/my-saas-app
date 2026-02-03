'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { addBookmark, removeBookmark } from '@/lib/actions/companion.actions';
import { Button } from '@/components/ui/button';

interface Props {
  companionId: string;
  isBookmarked: boolean;
}

const BookmarkButton = ({ companionId, isBookmarked }: Props) => {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleBookmark = () => {
    startTransition(() => {
      if (isBookmarked) {
        removeBookmark(companionId, pathname);
      } else {
        addBookmark(companionId, pathname);
      }
    });
  };

  return (
    <Button
      size="icon"
      variant={isBookmarked ? 'secondary' : 'ghost'}
      onClick={toggleBookmark}
      disabled={isPending}
    >
      <Image
        key={isBookmarked ? 'filled' : 'empty'}
        src={
          isBookmarked ? '/icons/bookmark-filled.svg' : '/icons/bookmark.svg'
        }
        alt="bookmark"
        width={14}
        height={16}
      />
    </Button>
  );
};

export default BookmarkButton;
