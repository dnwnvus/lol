export interface positionDataType {
  name: string;
  src: string;
  id: number;
  active: boolean;
}

export const positionData: positionDataType[] = [
  {
    name: 'Top',
    src: 'line_top.svg',
    id: 1,
    active: false,
  },
  {
    name: 'Jungle',
    src: 'line_jungle.svg',
    id: 2,
    active: false
  },
  {
    name: 'Mid',
    src: 'line_mid.svg',
    id: 3,
    active: false
  },
  {
    name: 'AD Carry',
    src: 'line_adcarry.svg',
    id: 4,
    active: false
  },
  {
    name: 'Support',
    src: 'line_support.svg',
    id: 5,
    active: false
  },
]
