'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { subjects } from '@/constants';
import { useCompanionFilters } from '@/hooks/useCampanionFilters';

const SubjectFilter = () => {
  const { subject, setSubject } = useCompanionFilters();

  return (
    <Select value={subject} onValueChange={setSubject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {subjects.map((s) => (
          <SelectItem key={s} value={s} className="capitalize">
            {s}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
