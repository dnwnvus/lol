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
      p: [''],
      q: [''],
      w: [''],
      e: ['공포'],
      r: ['저지 불가', '시야 공유 차단'],
      cc: ['공포', '저지 불가', '시야 공유 차단']
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
      p: ['절대 시야'],
      q: [''],
      w: [''],
      e: [''],
      r: [''],
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
      p: [''],
      q: [''],
      w: ['군중 제어 해제'],
      e: ['둔화', '속박'],
      r: ['절대 시야'],
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
      p: ['투명'],
      q: [''],
      w: [''],
      e: ['절대 시야', '속박'],
      r: ['절대 시야', '속박'],
      cc: ['투명', '절대 시야', '속박']
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
      q: ['대상 지정 불가'],
      w: [''],
      e: [''],
      r: ['둔화 효과 면역'],
      cc: ['대상 지정 불가', '둔화 효과 면역']
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
      p: ['대상 지정 불가', '지배'],
      q: [''],
      w: ['기절'],
      e: ['위장'],
      r: ['둔화', '넉백'],
      cc: ['대상 지정 불가', '지배', '기절', '위장', '둔화', '넉백']
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
      q: ['투명'],
      w: ['공포'],
      e: ['둔화'],
      r: ['대상 지정 불가', '공포'],
      cc: ['투명', '공포', '대상 지정 불가', '둔화']
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
      q: ['둔화'],
      w: ['투명'],
      e: [''],
      r: [''],
      cc: ['둔화', '투명']
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
      q: ['둔화'],
      w: ['둔화', '기절'],
      e: [''],
      r: ['경직'],
      cc: ['둔화', '기절', '경직']
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
      q: ['에어본'],
      w: [''],
      e: ['저지 불가'],
      r: ['그랩'],
      cc: ['에어본', '저지 불가', '그랩']
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
      p: ['위장'],
      q: [''],
      w: ['둔화', '매혹'],
      e: [''],
      r: ['대상 지정 불가'],
      cc: ['위장', '둔화', '매혹', '대상 지정 불가']
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
      e: ['둔화'],
      r: ['대상 지정 불가'],
      cc: ['둔화', '대상 지정 불가']
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
      q: ['침묵(정신 집중 해제)'],
      w: [''],
      e: ['둔화'],
      r: [''],
      cc: ['침묵(정신 집중 해제)', '둔화']
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
      p: ['둔화'],
      q: [''],
      w: ['둔화'],
      e: [''],
      r: ['투명'],
      cc: ['둔화', '투명']
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
    name: '키아나',
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
      q: ['속박', '둔화', '투명'],
      w: [''],
      e: [''],
      r: ['넉백', '기절'],
      cc: ['속박', '둔화', '투명', '넉백', '기절']
    }
  },
  {
    name: '탈론',
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
      w: ['둔화'],
      e: [''],
      r: ['투명'],
      cc: ['둔화', '투명']
    }
  },
  {
    name: '피즈',
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
      e: ['대상 지정 불가', '둔화'],
      r: ['절대 시야', '둔화', '에어본', '넉백'],
      cc: ['대상 지정 불가', '둔화', '절대 시야', '에어본', '넉백']
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
      q: ['둔화 효과 해제', '침묵'],
      w: ['강인함'],
      e: [''],
      r: [''],
      cc: ['둔화 효과 해제', '침묵', '강인함']
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
      w: ['방해 효과 해제'],
      e: ['둔화'],
      r: ['둔화'],
      cc: ['방해 효과 해제', '둔화']
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
      q: ['둔화'],
      w: [''],
      e: ['넉백', '기절'],
      r: ['넉백'],
      cc: ['둔화', '넉백', '기절']
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
      w: ['대상 지정 불가'],
      e: [''],
      r: ['둔화'],
      cc: ['대상 지정 불가', '둔화']
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
      q: ['둔화'],
      w: ['기절'],
      e: ['둔화'],
      r: ['넉백', '둔화', '기절'],
      cc: ['둔화', '기절', '넉백']
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
      w: ['둔화', '공격 속도 감소'],
      e: [''],
      r: [''],
      cc: ['둔화']
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
      r: ['그랩'],
      cc: ['그랩']
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
      w: ['둔화'],
      e: ['그랩', '에어본', '둔화'],
      r: [''],
      cc: ['둔화', '그랩', '에어본']
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
      r: ['그랩', '둔화'],
      cc: ['그랩', '둔화']
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
      e: ['둔화'],
      r: ['둔화'],
      cc: ['둔화']
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
      w: ['기절'],
      e: [''],
      r: [''],
      cc: ['기절']
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
      w: ['에어본'],
      e: [''],
      r: ['대상 지정 불가', '저지 불가'],
      cc: ['에어본', '대상 지정 불가', '저지 불가']
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
      q: ['절대 시야'],
      w: [''],
      e: ['둔화'],
      r: ['넉백', '에어본', '속박'],
      cc: ['절대 시야', '둔화', '넉백', '에어본', '속박']
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
      q: ['넉백'],
      w: ['기절'],
      e: [''],
      r: [''],
      cc: ['넉백', '기절']
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
      e: ['둔화'],
      r: ['수면'],
      cc: ['둔화', '수면']
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
      e: ['그랩'],
      r: ['둔화', '추방'],
      cc: ['그랩', '둔화', '추방']
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
      p: ['저지 불가'],
      q: ['둔화'],
      w: [''],
      e: [''],
      r: [''],
      cc: ['저지 불가', '둔화']
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
      q: ['넉백'],
      w: [''],
      e: [''],
      r: ['저지 불가', '에어본', '기절'],
      cc: ['넉백', '저지 불가', '에어본', '기절']
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
      w: ['에어본', '둔화'],
      e: [''],
      r: [''],
      cc: ['에어본', '둔화']
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
      q: ['기절'],
      w: [''],
      e: ['둔화'],
      r: ['저지 불가', '둔화'],
      cc: ['기절', '둔화', '저지 불가']
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
      e: ['그랩', '둔화', '기절'],
      r: ['제압', '저지 불가', '둔화'],
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
      r: ['저지 불가', '그랩'],
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
      e: ['둔화', '기절'],
      r: ['제압'],
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
      q: ['에어본'],
      w: ['둔화'],
      e: ['둔화'],
      r: ['넉백', '피해 면역'],
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
      q: ['에어본'],
      w: ['둔화', '그랩'],
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
      q: ['에어본'],
      w: [''],
      e: [''],
      r: ['에어본'],
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
      w: ['투명'],
      e: [''],
      r: ['에어본'],
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
      q: ['둔화'],
      w: [''],
      e: [''],
      r: ['방해 효과 해제', '저지 불가'],
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
      w: ['넉백'],
      e: ['둔화'],
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
      e: ['기절', '방해 효과 면역'],
      r: ['둔화'],
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
      q: ['둔화'],
      w: [''],
      e: ['기절', '넉백'],
      r: ['둔화', '제압', '공포', '처형'],
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
      q: ['저지 불가'],
      w: [''],
      e: ['공포'],
      r: ['저지 불가', '제압'],
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
      e: ['기절'],
      r: ['둔화'],
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
      e: ['둔화'],
      r: ['저지 불가'],
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
      e: ['기절', '기본 공격 면역'],
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
      q: ['둔화'],
      w: [''],
      e: ['넉백'],
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
      w: ['둔화'],
      e: ['기절', '넉백'],
      r: ['대상 지정 불가', '저지 불가', '침묵(정신 집중 해제)', '넉백'],
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
      w: ['둔화', '에어본'],
      e: ['둔화 효과 면역'],
      r: ['대상 지정 불가'],
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
      q: ['둔화'],
      w: [''],
      e: [''],
      r: ['모든 피해 면역'],
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
      p: ['대상 지정 불가'],
      q: ['그랩', '둔화', '절대 시야'],
      w: [''],
      e: ['절대 시야'],
      r: ['저지 불가', '넉백'],
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
      q: ['둔화'],
      w: [''],
      e: ['넉백', '둔화'],
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
      w: ['둔화'],
      e: [''],
      r: ['불사'],
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
      w: ['기절'],
      e: ['피해 면역'],
      r: ['대상 지정 불가', '둔화'],
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
      w: ['방해 효과 면역', '피해 면역', '둔화', '공격 속도 감소', '기절'],
      e: ['둔화'],
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
      e: ['넉백'],
      r: ['저지 불가', '공포'],
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
      w: ['둔화', '시야 차단'],
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
      e: ['넉백', '둔화'],
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
      e: ['둔화'],
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
      e: ['둔화'],
      r: ['속박'],
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
      e: ['넉백', '기절'],
      r: ['투명'],
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
      p: ['에어본'],
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
      w: ['속박'],
      e: ['위장', '대상 지정 불가'],
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
      w: ['위장'],
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
      p: ['둔화'],
      q: ['속박'],
      w: [''],
      e: [''],
      r: ['둔화'],
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
      p: ['둔화'],
      q: ['둔화'],
      w: ['둔화'],
      e: [''],
      r: ['기절', '둔화'],
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
      e: ['속박'],
      r: ['대상 지정 불가'],
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
      w: ['둔화'],
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
      w: ['속박'],
      e: ['둔화'],
      r: ['둔화'],
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
      w: ['둔화'],
      e: ['속박'],
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
      w: ['절대 시야'],
      e: ['투명'],
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
      e: ['둔화'],
      r: ['경직', '대상 지정 불가', '저지 불가', '넉백'],
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
      w: ['속박, 절대 시야'],
      e: ['둔화'],
      r: ['절대 시야'],
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
      e: ['둔화'],
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
      w: ['저지 불가', '넉백', '둔화'],
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
      q: ['시야 차단'],
      w: [''],
      e: ['넉백', '둔화'],
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
      e: ['둔화'],
      r: ['불사'],
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
      w: ['둔화'],
      e: [''],
      r: ['넉백'],
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
      q: ['위장'],
      w: ['둔화'],
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
      p: ['투명'],
      q: ['실명'],
      w: [''],
      e: [''],
      r: ['둔화'],
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
      w: ['투명'],
      e: ['속박'],
      r: ['기절'],
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
      w: ['둔화', '속박'],
      e: [''],
      r: ['대상 지정 불가', '경직'],
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
      q: ['속박'],
      w: [''],
      e: ['둔화'],
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
      p: ['둔화'],
      q: ['둔화'],
      w: ['속박'],
      e: [''],
      r: ['기절', '경직', '둔화'],
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
      p: ['방해 효과 면역'],
      q: ['침묵'],
      w: [''],
      e: [''],
      r: ['제압'],
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
      q: ['속박'],
      w: [''],
      e: ['방해 효과 면역'],
      r: ['둔화', '기절', '절대 시야'],
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
      e: ['기절'],
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
      p: ['공포', '이동기 방해'],
      q: [''],
      w: [''],
      e: ['둔화'],
      r: ['저지 불가'],
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
      q: ['둔화'],
      w: [''],
      e: ['에어본', '넉백'],
      r: ['둔화'],
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
      q: ['기절'],
      w: [''],
      e: [''],
      r: ['둔화'],
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
      w: ['대상 지정 불가', '둔화'],
      e: ['둔화'],
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
      w: ['둔화', '기절'],
      e: [''],
      r: ['정신 집중 방해'],
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
      q: ['둔화'],
      w: [''],
      e: ['기절', '에어본'],
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
      e: ['둔화', '속박', '기절'],
      r: ['매혹'],
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
      w: ['둔화'],
      e: ['속박', '그랩'],
      r: ['둔화'],
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
      w: ['둔화'],
      e: ['넉백', '기절', '둔화'],
      r: ['처형'],
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
      e: ['매혹'],
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
      e: ['끌어당김', '처형'],
      r: ['기절', '에어본', '둔화'],
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
      q: ['둔화'],
      w: [''],
      e: [''],
      r: ['넉백'],
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
      p: ['기절'],
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
      q: ['둔화', '기절'],
      w: ['넉백'],
      e: [''],
      r: ['둔화'],
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
      e: ['기절', '대상 지정 불가'],
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
      w: ['둔화'],
      e: [''],
      r: ['그랩'],
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
      w: ['절대 시야'],
      e: ['속박', '둔화'],
      r: ['에어본'],
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
      w: ['둔화'],
      e: ['기절'],
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
      e: ['수면'],
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
      w: ['넉백'],
      e: ['둔화'],
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
      q: ['둔화'],
      w: ['속박'],
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
      w: ['둔화'],
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
      w: ['고정', '둔화'],
      e: [''],
      r: ['기절', '둔화'],
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
      p: ['기절'],
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
      q: ['둔화'],
      w: ['넉백'],
      e: ['둔화', '넉백', '기절'],
      r: ['넉백'],
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
      w: ['기절', '둔화'],
      e: [''],
      r: ['절대 시야'],
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
      q: ['공포'],
      w: [''],
      e: ['둔화', '침묵'],
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
      q: ['둔화'],
      w: [''],
      e: ['둔화', '기절'],
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
      w: ['도발'],
      e: ['넉백'],
      r: ['대상 지정 불가', '넉백'],
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
      p: ['속박'],
      q: ['그랩', '기절'],
      w: [''],
      e: ['둔화'],
      r: ['에어본', '기절'],
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
      w: ['에어본'],
      e: ['둔화', '속박'],
      r: ['둔화'],
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
      q: ['넉백'],
      w: [''],
      e: ['도발'],
      r: ['저지 불가', '둔화', '에어본'],
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
      q: ['기절'],
      w: [''],
      e: ['속박'],
      r: ['둔화', '기절'],
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
      w: ['에어본', '넉백'],
      e: ['기절'],
      r: ['그랩', '끌어당김'],
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
      q: ['둔화', '넉백'],
      w: ['대상 지정 불가', '속박'],
      e: ['둔화'],
      r: ['속박'],
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
      q: ['둔화'],
      w: [''],
      e: ['공격 속도 감소'],
      r: ['저지 불가', '에어본'],
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
      q: ['그랩', '기절'],
      w: [''],
      e: ['에어본'],
      r: ['침묵'],
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
      q: ['둔화'],
      w: ['에어본', '고정', '둔화'],
      e: ['넉백', '기절'],
      r: ['넉백', '에어본'],
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
      q: ['둔화', '에어본', '기절'],
      w: [''],
      e: ['둔화'],
      r: ['저지 불가', '기절', '둔화'],
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
      p: ['둔화 면역'],
      q: ['넉백'],
      w: ['둔화'],
      e: ['기절'],
      r: ['기절', '둔화'],
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
      q: ['둔화'],
      w: ['기본 공격 차단'],
      e: ['도발'],
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
      w: ['둔화', '고정'],
      e: ['넉백', '속박'],
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
      q: ['기절'],
      w: [''],
      e: [''],
      r: ['기절'],
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
      q: ['에어본'],
      w: ['넉백'],
      e: ['기절'],
      r: ['방해 효과 해제'],
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
      q: ['둔화'],
      w: ['저지 불가', '넉백'],
      e: ['에어본'],
      r: ['둔화', '에어본'],
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
      q: ['에어본'],
      w: ['둔화'],
      e: [''],
      r: ['저지 불가'],
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
      q: ['둔화', '그랩'],
      w: [''],
      e: ['넉백'],
      r: ['넉백', '둔화'],
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
      q: ['에어본', '둔화'],
      w: ['침묵'],
      e: ['둔화'],
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
      q: ['둔화', '기절', '그랩'],
      w: ['저지 불가', '넉백', '기절'],
      e: [''],
      r: ['넉백', '기절', '저지 불가'],
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
      q: ['기절', '에어본'],
      w: [''],
      e: ['둔화'],
      r: ['넉백', '둔화'],
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
      w: ['에어본'],
      e: [''],
      r: ['매혹'],
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
      q: ['속박', '넉백', '기절'],
      w: [''],
      e: ['둔화'],
      r: ['광란'],
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
      q: ['둔화'],
      w: ['변이'],
      e: ['절대 시야'],
      r: ['넉백', '둔화'],
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
      p: ['둔화'],
      q: ['둔화', '기절'],
      w: [''],
      e: [''],
      r: ['경직'],
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
      p: ['기절'],
      q: ['둔화'],
      w: [''],
      e: [''],
      r: ['에어본', '둔화'],
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
      p: ['둔화'],
      q: [''],
      w: [''],
      e: [''],
      r: ['기절'],
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
      q: ['둔화'],
      w: [''],
      e: ['침묵', '속박'],
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
      q: ['기절', '그랩', '절대 시야'],
      w: [''],
      e: ['넉백', '둔화'],
      r: ['둔화'],
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
      q: ['속박'],
      w: [''],
      e: ['둔화'],
      r: ['에어본'],
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
      q: ['둔화'],
      w: ['대상 지정 불가'],
      e: [''],
      r: ['둔화'],
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
      q: ['에어본'],
      w: ['둔화'],
      e: [''],
      r: ['넉백'],
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
      q: ['기절'],
      w: [''],
      e: ['둔화'],
      r: ['경직'],
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
      e: ['기절'],
      r: ['모든 피해 면역'],
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
      q: ['둔화', '기절'],
      w: ['에어본'],
      e: [''],
      r: ['대상 지정 불가', '제압'],
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
      q: ['그랩', '둔화'],
      w: ['위장'],
      e: ['기절'],
      r: ['처형'],
      cc: ['']
    }
  },
]