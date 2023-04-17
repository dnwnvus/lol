export const data = Object
  .values(require('championFull.json').data)
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
  spells: {
    p: string[]
    q: string[]
    w: string[]
    e: string[]
    r: string[]
    cc: string[]
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
    },
    spells: {
      p: ['물리 피해', '체력 회복', '재사용 대기시간 감소'],
      q: ['물리 피해', '이동 속도 상승', '공격력 증가', '유체화 상태'],
      w: ['스킬 방어', '공격 속도 상승'],
      e: ['마법 피해', '이동 속도 상승', '공포'],
      r: ['물리 피해', '저지 불가', '시야 공유 차단', '돌진'],
      cc: ['공포', '시야공유 차단']
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
    },
    spells: {
      p: ['이동 속도 상승', '절대 시야'],
      q: ['마법 피해', '거리 비례 피해 증가', '잃은 체력 비례 피해 증가'],
      w: ['마법 피해', '재사용 대기시간 감소', '덫'],
      e: ['체력 회복', '공격 속도 상승', '마법 피해'],
      r: ['재사용 대기시간 초기화', '변신'],
      cc: ['절대 시야']
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
    },
    spells: {
      p: ['이동 속도 상승', '공격력 증가'],
      q: ['물리 피해', '공격 속도 상승', '치명타'],
      w: ['마법 피해', '체력 회복', '군중 제어 해제'],
      e: ['물리 피해', '둔화', '속박'],
      r: ['물리 피해', '이동 속도 상승', '절대 시야', '방어력 감소'],
      cc: ['군중 제어 해제', '둔화', '속박', '절대 시야']
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
    },
    spells: {
      p: ['마법 피해', ],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
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
    },
    spells: {
      p: [''],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
      cc: ['']
    }
  },
]