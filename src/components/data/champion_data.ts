export const data = Object
  .values(require('champion.json').data)
  .sort((a:any, b:any) => a.name > b.name ? 1 : -1)

export interface championInfoType {
  name: string;
  damage_category: string;
  difficulty: number;
  status: {
    attack: number;
    defense: number;
    crowd_control: number;
    movement: number;
    assistant: number;
  }
}

// damage_category * status.attack (물리, 마법, 혼합) 
// status.defense + n 
// status.crowd_control + n
// status.movement + n
// status.assistant + (2 > n, assistant += 1)

export const championInfo: championInfoType[] = [
  {
    name: '녹턴',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '니달리',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 2
    }
  },
  {
    name: '렝가',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '르블랑',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '마스터 이',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '비에고',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '샤코',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '아칼리',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '에코',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '요네',
    damage_category: '혼합',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '이블린',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 1,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '제드',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '카사딘',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '카직스',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '카타리나',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '가렌',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 1,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '갱플랭크',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '그라가스',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 3,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '그웬',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 1,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '나르',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '나서스',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '닐라',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 2
    }
  },
  {
    name: '다리우스',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '다이애나',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '럼블',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '레넥톤',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '렉사이',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '리 신',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '리븐',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '릴리아',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '모데카이저',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 1,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '문도 박사',
    damage_category: '혼합',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 1,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '바이',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 3,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '벨베스',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '볼리베어',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '세트',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '쉬바나',
    damage_category: '혼합',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 1,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '스카너',
    damage_category: '혼합',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '신 짜오',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '아트록스',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 3,
      crowd_control: 2,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '야스오',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 2
    }
  },
  {
    name: '오공',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '올라프',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '요릭',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '우디르',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '우르곳',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '워윅',
    damage_category: '혼합',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '이렐리아',
    damage_category: '혼합',
    difficulty:3,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 3,
      assistant: 2
    }
  },
  {
    name: '일라오이',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 1,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '잭스',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '제이스',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '카밀',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '케인',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '케일',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 1,
      assistant: 3
    }
  },
  {
    name: '클레드',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '트런들',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 1,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '트린다미어',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 1,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '판테온',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '피오라',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '헤카림',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '그레이브즈',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 1,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '드레이븐',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '루시안',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '미스 포츈',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '바루스',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '베인',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '사미라',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '세나',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 3
    }
  },
  {
    name: '시비르',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '아크샨',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 2
    }
  },
  {
    name: '아펠리오스',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '애쉬',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '이즈리얼',
    damage_category: '혼합',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '자야',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '제리',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 0
    }
  },
  {
    name: '진',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '징크스',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '카이사',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '칼리스타',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 2
    }
  },
  {
    name: '케이틀린',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '코그모',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '코르키',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '퀸',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '킨드레드',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 2
    }
  },
  {
    name: '트리스타나',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '트위치',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '티모',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '니코',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '라이즈',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '럭스',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '리산드라',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '말자하',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '모르가나',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '베이가',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '벡스',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '벨코즈',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '브랜드',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '블라디미르',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 2,
      crowd_control: 1,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '빅토르',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '사일러스',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '세라핀',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '스웨인',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '신드라',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '아리',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
  {
    name: '아우렐리온 솔',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '아지르',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '애니',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '애니비아',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '엘리스',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '오리아나',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '자이라',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '제라스',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '조이',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '직스',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '카르마',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '카서스',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 1,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '카시오페아',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '케넨',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '탈리야',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 3
    }
  },
  {
    name: '트위스티드 페이트',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '피들스틱',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '하이머딩거',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 3,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '갈리오',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 3,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '노틸러스',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 1,
      defense: 3,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '누누와 윌럼프',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 1,
      defense: 3,
      crowd_control: 2,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '람머스',
    damage_category: '혼합',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 3,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '레오나',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 1,
      defense: 3,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '렐',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 1,
      defense: 3,
      crowd_control: 3,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '마오카이',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 1,
      defense: 3,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '말파이트',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 1,
      defense: 3,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },

  {
    name: '블리츠크랭크',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 1,
      defense: 2,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '뽀삐',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 3,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '사이온',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '세주아니',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 3,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '쉔',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 2,
      movement: 2,
      assistant: 3
    }
  },
  {
    name: '신지드',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 2,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '아무무',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 3,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '알리스타',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 1,
      defense: 3,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '오른',
    damage_category: '혼합',
    difficulty: 2,
    status: {
      attack: 1,
      defense: 3,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '자르반 4세',
    damage_category: '물리',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 2,
      crowd_control: 2,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '자크',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 3,
      movement: 2,
      assistant: 1
    }
  },
  {
    name: '초가스',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 2,
      movement: 1,
      assistant: 1
    }
  },
  {
    name: '크산테',
    damage_category: '물리',
    difficulty: 3,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 3,
      movement: 2,
      assistant: 2
    }
  },
  {
    name: '나미',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 1,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '라칸',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 1,
      defense: 2,
      crowd_control: 3,
      movement: 3,
      assistant: 3
    }
  },
  {
    name: '레나타 글라스크',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '룰루',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 3
    }
  },
  {
    name: '바드',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 1,
      defense: 1,
      crowd_control: 3,
      movement: 2,
      assistant: 3
    }
  },
  {
    name: '브라움',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 1,
      defense: 2,
      crowd_control: 3,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '소나',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 2
    }
  },
  {
    name: '소라카',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 1,
      defense: 1,
      crowd_control: 2,
      movement: 1,
      assistant: 3
    }
  },
  {
    name: '쓰레쉬',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 1,
      defense: 2,
      crowd_control: 3,
      movement: 1,
      assistant: 3
    }
  },
  {
    name: '아이번',
    damage_category: '마법',
    difficulty: 3,
    status: {
      attack: 1,
      defense: 1,
      crowd_control: 3,
      movement: 2,
      assistant: 3
    }
  },
  {
    name: '유미',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 1,
      defense: 1,
      crowd_control: 1,
      movement: 3,
      assistant: 3
    }
  },
  {
    name: '잔나',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 1,
      defense: 1,
      crowd_control: 3,
      movement: 1,
      assistant: 3
    }
  },
  {
    name: '질리언',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 2,
      movement: 2,
      assistant: 3
    }
  },
  {
    name: '타릭',
    damage_category: '마법',
    difficulty: 2,
    status: {
      attack: 1,
      defense: 2,
      crowd_control: 2,
      movement: 1,
      assistant: 3
    }
  },
  {
    name: '탐 켄치',
    damage_category: '마법',
    difficulty: 1,
    status: {
      attack: 2,
      defense: 3,
      crowd_control: 2,
      movement: 1,
      assistant: 3
    }
  },
  {
    name: '파이크',
    damage_category: '물리',
    difficulty: 2,
    status: {
      attack: 2,
      defense: 1,
      crowd_control: 2,
      movement: 3,
      assistant: 1
    }
  },
]