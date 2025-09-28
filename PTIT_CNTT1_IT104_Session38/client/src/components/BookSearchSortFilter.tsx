import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import React from 'react';

interface Props {
  search: string;
  categoryFilter: string;
  sortBy: 'title' | 'year';
  sortOpt: 'up' | 'down';
  categoryFilters: string[];
  onSearchChange: (s: string) => void;
  onCategoryFilterChange: (c: string) => void;
  onSortChange: (by: 'title' | 'year', dir: 'up' | 'down') => void;
  onClear: () => void;
}

const BookSearchSortFilter: React.FC<Props> = ({
  search,
  categoryFilter,
  sortBy,
  sortOpt,
  categoryFilters,
  onSearchChange,
  onCategoryFilterChange,
  onSortChange,
  onClear,
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
      <TextField
        label="Search by title or author"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
        size="small"
      />

      <FormControl size="small" className="w-40">
        <InputLabel>Category</InputLabel>
        <Select
          value={categoryFilter}
          label="Category"
          onChange={(e) => onCategoryFilterChange(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          {categoryFilters.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" className="w-40">
        <InputLabel>Sort</InputLabel>
        <Select
          value={`${sortBy}_${sortOpt}`}
          label="Sort"
          onChange={(e) => {
            const [by, dir] = (e.target.value as string).split('_');
            onSortChange(by as 'title' | 'year', dir as 'up' | 'down');
          }}
        >
          <MenuItem value="title_up">Title A → Z</MenuItem>
          <MenuItem value="title_down">Title Z → A</MenuItem>
          <MenuItem value="year_up">Year ↑</MenuItem>
          <MenuItem value="year_down">Year ↓</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={onClear} variant="outlined" className="ml-auto">
        Clear
      </Button>
    </div>
  );
};

export default BookSearchSortFilter;