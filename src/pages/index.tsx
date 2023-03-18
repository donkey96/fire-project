import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/src/styles/Home.module.css'
import { useCallback, useRef } from 'react'
import { Text, Box, Button, useMantineColorScheme, ColorInput, ColorPicker, MultiSelect, SelectItem, Select } from '@mantine/core'
import { SampleComp } from '../components/yoshinakaUI/sample-comp'

const inter = Inter({ subsets: ['latin'] })

const selectOptions: SelectItem[] = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
]

export default function Home() {
  // const { toggleColorScheme } = useMantineColorScheme();
  return (
    <Box p="2rem">
      <h1 className="font-extrabold text-gray-600">Welcome to Mantine & Tailwind CSS!</h1>
      <Button className="bg-gray-900 text-red-600">
        テーマ変更
        {/* <Text color="red">テーマ変更</Text> */}
      </Button>
      <Box>
        <ColorInput label="test" withAsterisk w="10rem" />
        <Select placeholder="Pick one" data={selectOptions} searchable />
        {/* <MultiSelect data={selectOptions} label="asdf" searchable /> */}
        <SampleComp />
      </Box>
    </Box>
  )
}
