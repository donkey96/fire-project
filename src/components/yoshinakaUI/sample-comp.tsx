import { TransferList, TransferListData, Box, Timeline, Text, CloseButton } from '@mantine/core';
import { useState } from 'react';
import { ThemeIcon } from '@mantine/core';

const initialValues: TransferListData = [
  [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
    { value: 'gatsby', label: 'Gatsby.js' },
    { value: 'vue', label: 'Vue' },
    { value: 'jq', label: 'jQuery' },
  ],
  [
    { value: 'sv', label: 'Svelte' },
    { value: 'rw', label: 'Redwood' },
    { value: 'np', label: 'NumPy' },
    { value: 'dj', label: 'Django' },
    { value: 'fl', label: 'Flask' },
  ],
];

export const SampleComp = () => {
  const [data, setData] = useState<TransferListData>(initialValues);
  return (
    <>
      <TransferList
        value={data}
        onChange={setData}
        searchPlaceholder="Search..."
        nothingFound="Nothing here"
        titles={['Frameworks', 'Libraries']}
        breakpoint="sm"
      />
    </>
  )
}