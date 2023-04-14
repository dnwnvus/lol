import { atom } from "recoil";
import { data } from "@/components/data/champion_data";

export type selectedType = {
  spells: any;
  passive: any;
  title: string;
  tags: string[];
  name: string;
  id: string;
  image: any;
  key: string;
}

export const selectedChampion = atom<selectedType | null>({
  key: 'selected',
  default: null
})

export const search = atom({
  key: 'search',
  default: ''
})

export const championDatas = atom({
  key: 'data',
  default: data
})

export const championStatus = atom({
  key: 'status',
  default: [
    ['attack', '피해'],
    ['defense', '방어'],
    ['crowd_control', '제어'],
    ['movement', '이동'],
    ['assistant', '보조']
  ],
})

export const championTags = atom({
  key: 'tags',
  default: [
    ['Assassin', '암살자'],
    ['Fighter', '전사'],
    ['Marksman', '원거리'],
    ['Mage', '마법사'],
    ['Tank', '탱커'],
    ['Support', '서포터']
  ]
})