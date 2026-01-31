'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback, useRef } from 'react';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';

export const useCompanionFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // 🔒 Prevent duplicate pushes
  const lastUrlRef = useRef('');

  const pushIfChanged = useCallback(
    (newUrl: string) => {
      if (newUrl !== lastUrlRef.current) {
        lastUrlRef.current = newUrl;
        router.push(newUrl, { scroll: false });
      }
    },
    [router],
  );

  const setTopic = useCallback(
    (topic: string) => {
      const current = searchParams.get('topic') || '';

      if (topic === current) return;

      const newUrl = topic
        ? formUrlQuery({
            params: searchParams.toString(),
            key: 'topic',
            value: topic,
          })
        : removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ['topic'],
          });

      pushIfChanged(newUrl);
    },
    [searchParams, pushIfChanged],
  );

  const setSubject = useCallback(
    (subject: string) => {
      const current = searchParams.get('subject') || '';

      if (subject === current) return;

      const newUrl =
        !subject || subject === 'all'
          ? removeKeysFromUrlQuery({
              params: searchParams.toString(),
              keysToRemove: ['subject'],
            })
          : formUrlQuery({
              params: searchParams.toString(),
              key: 'subject',
              value: subject,
            });

      pushIfChanged(newUrl);
    },
    [searchParams, pushIfChanged],
  );

  return {
    topic: searchParams.get('topic') || '',
    subject: searchParams.get('subject') || 'all',
    setTopic,
    setSubject,
  };
};
