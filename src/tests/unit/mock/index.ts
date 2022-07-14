// ----- mock data -----

export const forms = {
  code: 10011,
  message: '取得成功',
  result: {
    area: [
      {
        value: '1',
        text: '本社',
      },
    ],
    name: [
      {
        value: '1',
        text: 'ア',
      },
    ],
    race: [
      {
        value: '1',
        text: '人類',
      },
    ],
    job: [
      {
        value: '1',
        text: 'リーダー',
      },
    ],
  },
}

export const users = {
  code: 10011,
  message: 'data取得成功',
  result: {
    count: [
      {
        count: 7,
        area: '全員',
        value: 0,
      },
      {
        count: 1,
        area: '本社',
        value: 1,
      },
      {
        count: 1,
        area: '支社',
        value: 2,
      },
      {
        count: 0,
        area: '食堂',
        value: 3,
      },
      {
        count: 2,
        area: '外勤',
        value: 4,
      },
      {
        count: 3,
        area: '未知',
        value: 5,
      },
    ],
    user: [
      {
        id: '00005',
        name: 'Tom',
        nameSpell: 'Tom',
        nameCode: '11',
        job: 'BE開発',
        jobCode: '4',
        race: 'オーク',
        raceCode: '4',
        skill: 'Node.js',
        photo: '-',
        area: '本社',
        areaCode: '1',
        YYYYMMDD: '2022-07-13',
        HHMMss: '19:07:06',
      },
    ],
  },
}
