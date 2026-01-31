'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCompanionFilters } from '@/hooks/useCampanionFilters';

const SearchInput = () => {
  const { topic, setTopic } = useCompanionFilters();
  const [value, setValue] = useState(topic);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTopic(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value, setTopic]);

  return (
    <div className="relative border border-black rounded-lg flex gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />
      <input
        placeholder="Search companions..."
        className="outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
