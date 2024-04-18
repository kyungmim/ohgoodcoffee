import moment from 'moment';

function getTime(day = 0, second = 0) {
  return moment().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ssy = 0');
}

export const initData = async (nextSeq) => {
  return {
    // 회원
    user: [
      // 관리자
      {
        _id: await nextSeq('user'),
        email: 'a1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '관리자1',
        phone: '01011112222',
        address: '서울시 강남구 역삼동 123',
        type: 'admin',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC03',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '서울시 강남구 역삼동 123',
            },
            {
              id: 2,
              name: '회사',
              value: '서울시 강남구 신사동 234',
            },
          ],
        },
      },
      //일반회원
      {
        _id: await nextSeq('user'),
        email: 'u1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '김고양이',
        phone: '01011112222',
        address: '서울시 강남구 역삼동 123',
        type: 'user',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC01',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '서울시 강남구 역삼동 123',
            },
            {
              id: 2,
              name: '회사',
              value: '서울시 강남구 신사동 234',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 'u2@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '최토끼',
        phone: '01011113333',
        address: '서울시 강남구 역삼동 123',
        type: 'user',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC03',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '서울시 강남구 역삼동 123',
            },
            {
              id: 2,
              name: '회사',
              value: '서울시 강남구 신사동 234',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'anthracitecoffee',
        phone: '01012345678',
        address: '경기도 파주시 문발동 594-8',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC01',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '경기도 파주시 문발동 594-8',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's2@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'bonanzacoffee',
        phone: '01011115678',
        address: '서울특별시 중구 을지로1가 87',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC01',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '서울특별시 중구 을지로1가 87',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's3@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'keepthatcoffee',
        phone: '01022225678',
        address: '강원도 속초시 노학동 1073-58',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC01',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '강원도 속초시 노학동 1073-58',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's4@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'milestonecoffee',
        phone: '01044445678',
        address: '인천시 소래포구 123',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC01',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '인천시 소래포구 123',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's5@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'protokoll',
        phone: '01055555678',
        address: '충청남도 천안시 동남구 유량동 323-3',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC01',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '충청남도 천안시 동남구 유량동 323-3',
            },
            {
              id: 2,
              name: '회사',
              value: '서울시 강남구 신사동 234',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's6@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'visionstroll',
        phone: '01066665678',
        address: '인천시 소래포구 123',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC01',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '인천시 소래포구 123',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's7@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'fritzcompany',
        phone: '01077775678',
        address: '인천시 소래포구 123',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC01',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '인천시 소래포구 123',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's8@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'momoscoffee',
        phone: '01088885678',
        address: '인천시 소래포구 123',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          membershipClass: 'MC01',
          image: 'profile.svg',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '인천시 소래포구 123',
            },
          ],
        },
      },
    ],
    // 상품
    product: [
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 12000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[센터커피] 에티오피아 디카페인 콜드브루 300ml',
        quantity: 30,
        buyQuantity: 5,
        mainImages: [
          {
            url: `/files/centercoffee_01.png`,
            fileName: 'centercoffee_01.png',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_01.png`,
            fileName: 'centercoffee_01.png',
          },
          {
            url: `/files/centercoffee_01_detail.png`,
            fileName: 'centercoffee_01_detail.png',
          },
        ],
        content: [
          {
            d1: '액상커피로 어디서든 간편하게 맛있는 커피를 즐겨보세요! ',
          },
          {
            d2: '처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.\n특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. ',
          },
          {
            d3: '물과 만나면서 퍼지는 은은한 자스민 향이 좋은 콜드브루 커피입니다.\n 살구의 플레이버와 함께 청사과의 기분 좋은 산미가 입안 가득 퍼지며 맛을 다채롭게 만들어줍니다.\n 마지막에 느껴지는 밀크초콜릿의 단맛이 입안을 은은하게 정리해주면서 긴 여운을 남겨줍니다.',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '센터커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 12500,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[센터커피] 게이샤 콜드브루 200ml',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/centercoffee_02.png`,
            fileName: 'centercoffee_02.png',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_02.png`,
            fileName: '/files/centercoffee_02.png',
          },
          {
            url: `/files/centercoffee_02_detail.png`,
            fileName: 'centercoffee_02_detail.png',
          },
        ],
        content: [
          {
            d1: '액상커피로 어디서든 간편하게 맛있는 커피를 즐겨보세요! ',
          },
          {
            d2: '처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.\n특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. ',
          },
          {
            d3: '물과 만나면서 퍼지는 은은한 자스민 향이 좋은 콜드브루 커피입니다.\n 살구의 플레이버와 함께 청사과의 기분 좋은 산미가 입안 가득 퍼지며 맛을 다채롭게 만들어줍니다.\n 마지막에 느껴지는 밀크초콜릿의 단맛이 입안을 은은하게 정리해주면서 긴 여운을 남겨줍니다.',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '센터커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 17000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[센터커피] 로고 담요',
        quantity: 100,
        buyQuantity: 50,
        mainImages: [
          {
            url: `/files/centercoffee_03.jpg`,
            fileName: 'centercoffee_03.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_03.jpg`,
            fileName: 'centercoffee_03.jpg',
          },
          {
            url: `/files/centercoffee_03_detail.jpg`,
            fileName: 'centercoffee_03_detail.jpg',
          },
        ],
        content: [
          { d1: '연베이지, 진한샐몬,진청카키, 옐로우 총 4가지의 따듯한 색상으로 제작된 센터커피 블랭킷으로 일상적인 공간에 작은 변화를 느껴보세요.' },
          { d2: '센터커피 블랭킷은 박스에 담아 전달합니다.\n 박스를 뜯고 블랭킷을 펼치는 순간, 일상적인 공간이 다채로운으로 가득하기를 희망합니다.' },
          { d3: 'size: 가로 100 * 세로 75(cm)\n Meterial: 아크릴 100%\n Country of Origin: 대한민국' },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '센터커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 9900,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[센터커피] 에티오피아 디카페인 네스프레소 캡슐',
        quantity: 100,
        buyQuantity: 10,
        mainImages: [
          {
            url: `/files/centercoffee_04.png`,
            fileName: 'centercoffee_04.png',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_04.png`,
            fileName: 'centercoffee_04.png',
          },
          {
            url: `/files/centercoffee_04_detail.png`,
            fileName: 'centercoffee_04_detail.png',
          },
        ],
        content: [
          {
            d1: '처음 한모금에 다크초콜릿과 캐러멜의 단맛이 느껴지고, 이후에 커피가 식을수록 건자두의 플레이버가 입안을 채워줍니다. 마지막으로 세련되고 깔끔한 뒷맛이 전체적인 밸런스를 잡아주는 커피입니다. ',
          },
          {
            d2: '처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.\n특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. ',
          },
          {
            d3: '중남미 커피를 중점으로 부드럽고 짙은 풍미와 아프리카의 섬세한 향미를 느낄 수 있습니다. 고소한 풍미와 단맛이 좋은 브라질을 베이스로 하여, 과테말라와 에티오피아로 커피의 질감과 향미의 밸런스를 맞췄습니다. 보편적 커피가 주는 향미와 의미에 집중하길 원합니다. 가장 기본적인 것을 잡아내기 위해 부드럽고 고소함으로 무게감을 만들었습니다. 우리는 그 속에 어떤 결합된 지점을 넣길 원했고, 이 복합적인 향미를 놓치지 않으며 부드러움과 깊이감을 유지하도록 설계한 커피입니다.',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '센터커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 20000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[센터커피] 프라이데이 블랜드 네스프레소 캡슐',
        quantity: 100,
        buyQuantity: 0,
        mainImages: [
          {
            url: `/files/centercoffee_05.png`,
            fileName: 'centercoffee_05.png',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_05.png`,
            fileName: 'centercoffee_05.png',
          },
          {
            url: `/files/centercoffee_05_detail.png`,
            fileName: 'centercoffee_05_detail.png',
          },
        ],
        content: [
          {
            d1: '처음 한모금에 다크초콜릿과 캐러멜의 단맛이 느껴지고, 이후에 커피가 식을수록 건자두의 플레이버가 입안을 채워줍니다. 마지막으로 세련되고 깔끔한 뒷맛이 전체적인 밸런스를 잡아주는 커피입니다. ',
          },
          {
            d2: '처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.\n특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. ',
          },
          {
            d3: '중남미 커피를 중점으로 부드럽고 짙은 풍미와 아프리카의 섬세한 향미를 느낄 수 있습니다. 고소한 풍미와 단맛이 좋은 브라질을 베이스로 하여, 과테말라와 에티오피아로 커피의 질감과 향미의 밸런스를 맞췄습니다. 보편적 커피가 주는 향미와 의미에 집중하길 원합니다. 가장 기본적인 것을 잡아내기 위해 부드럽고 고소함으로 무게감을 만들었습니다. 우리는 그 속에 어떤 결합된 지점을 넣길 원했고, 이 복합적인 향미를 놓치지 않으며 부드러움과 깊이감을 유지하도록 설계한 커피입니다.',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '센터커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 20000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[센터커피] 클레버 커피 드리퍼',
        quantity: 100,
        buyQuantity: 30,
        mainImages: [
          {
            url: `/files/centercoffee_06.png`,
            fileName: 'centercoffee_06.png',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_06.png`,
            fileName: 'centercoffee_06.png',
          },
          {
            url: `/files/centercoffee_06_detail.png`,
            fileName: 'centercoffee_06_detail.png',
          },
        ],
        content: [
          {
            d1: '프렌치 프레스와 핸드드립의 장점을 모아 만든 커피 드리퍼입니다.\n 센터커피 로고가 각인되어 있고,  내리는 방법이 간단하여 누구나 내릴 수 있고, 좋은 원두라면 그 원두의 맛을 고스란히 담을 수 있습니다.',
          },
          {
            d2: '처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.\n특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. ',
          },
          {
            d3: '사이즈: 윗지름 11.5 / 밑지름 10.5 / 높이 12cm\n 색상: White\n 재질: 아크릴로나트릴스티렌, 실리콘수지, 폴리스티렌\n 제조국: 대만\n 품질보증기간: 미사용시 7일이내 환불 가능',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '센터커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 32000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[보난자커피] 보난자 드립백 24개입 [3종]',
        quantity: 310,
        buyQuantity: 290,
        mainImages: [
          {
            url: `/files/bonanzacoffee_products_01.jpg`,
            fileName: 'bonanzacoffee_products_01.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_01_detail_01.jpg`,
            fileName: 'bonanzacoffee_products_01_detail_01.jpg',
          },
          {
            url: `/files/bonanzacoffee_products_01_detail_02.jpg`,
            fileName: 'bonanzacoffee_products_01_detail_02.jpg',
          },
        ],
        content: [
          { d1: '언제든 내려마시기 좋은 보난자커피 드립백 24개입과 드립 어시스트 세트\n 산뜻한맛과 향, 부드러운 질감. \n 원두의 향미를 간직한 드립커피 한 잔을 더욱 편하게 즐기세요. ' },
          { d2: '드립백으로 커피를 내릴 때 아랫부분이 잠겨 불편했다면, 다양한 컵에 거치할 수 있는 드립 어시스트를 이용하세요. ' },
          { d3: '몰입이나 휴식이 필요할 때 언제든 개별포장으로 보관이 편리해 언제 어디서든 꺼내어 마시기 좋습니다. ' },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '보난자커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 18900,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[보난자커피] 보난자 블렌드 콜롬비아 & 브라질 250g',
        quantity: 310,
        buyQuantity: 100,
        mainImages: [
          {
            url: `/files/bonanzacoffee_products_02.png`,
            fileName: 'bonanzacoffee_products_02.png',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_02_detail_01.jpg`,
            fileName: 'bonanzacoffee_products_02_detail_01.jpg',
          },
          {
            url: `/files/bonanzacoffee_products_02_detail_02.jpg`,
            fileName: 'bonanzacoffee_products_02_detail_02.jpg',
          },
        ],
        content: [
          {
            d1: '보난자커피 스테디 셀러. 초콜렛 트러플, 다크 체리\n Origin | Colombia | Brazil\n Region | Pitalito, Huila | Minas Gerais\n Varietal | Caturra, Castillo | Mixed\n Process | Fully Washed | Natural',
          },
          {
            d2: '지속가능한 커피 문화를 위해 보난자커피는 매해 커피 수확 철이면 더욱 투명하고 공정한 방식을 취하는 농장을 찾습니다. 이번 보난자 블렌드는 풍부한 플레이버와 부드러운 바디감이 돋보이는 브라질 Sitio Santa Clara 농장의 커피, 그리고 오랜 시간 거래를 이어왔던 콜롬비아 El Carmen 농장의 커피를 블렌딩하여 더욱 균형감이 좋은 커피를 소개해 드릴 수 있게 되었습니다. 부드러운 질감 아래 초콜렛 트러플의 쌉싸름함, 다크 체리의 농후한 단맛이 느껴지는 블렌드입니다. ',
          },
          {
            d3: '그라인더 사용 시 주의사항\n 보난자커피는 커피 생두 특유의 향미를 담아내기 위해 라이트 로스팅을 지향합니다.\n 라이트 로스팅 특성상, 원두 밀도가 높아 일부 그라인더에서 분쇄가 어려울 수 있으니 구매에 참고해 주세요.',
          },
        ],

        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '보난자커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 45000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[보난자커피]보난자 드립백 5개입 3종 + 드립 어시스트',
        quantity: 100,
        buyQuantity: 70,
        mainImages: [
          {
            url: `/files/bonanzacoffee_products_03.jpg`,
            fileName: 'bonanzacoffee_products_03.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_03_detail_01.jpg`,
            fileName: 'bonanzacoffee_products_03_detail_01.jpg',
          },
          {
            url: `/files/bonanzacoffee_products_03_detail_02.jpg`,
            fileName: 'bonanzacoffee_products_03_detail_02.jpg',
          },
        ],
        content: [
          { d1: 'DRIP BAG SET [3 types] + DRIP ASSIST\n 구성 | 드립백 5개입 3박스 + 드립 어시스트\n 원두 본연의 향미를 간직한 드립 커피 한 잔, 이제 더욱 편하게 즐기세요.' },
          {
            d2: '개별 포장으로 보관 및 휴대가 편리해, \n 언제 어디에서든 가볍게 내려 마시기 좋은 드립백과 드립 어시스트 세트입니다. \n 드립백으로 커피를 내릴 때 아랫부분이 잠겨 불편했던 분들을 위해, \n 다양한 컵에 거치할 수 있는 드립 어시스트를 함께 구성했어요. \n평소 드립백 커피를 즐겨 드시는 분들께 선물용으로 추천드려요. ',
          },
          {
            d3: '*보난자커피의 시그니처 원두 3종 중 원하는 종류를 골라 구성하실 수 있습니다.\n 보난자 블렌드 Bonanza Blend : 초콜렛 트러플, 다크 체리\n 보난자 싱글 오리진 Bonanza Single Origin: 플로럴, 베리, 백설탕\n 보난자 디카페인 Bonanza Decaf : 꿀, 배, 자두\n *교환 및 반품 안내는 [문의] > [자주 묻는 질문] 통해 확인 부탁드립니다.',
          },
        ],

        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '보난자커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 38000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[보난자커피] ACME x BONANZA COFFEE 보난자 머그잔 L [350ml]',
        quantity: 100,
        buyQuantity: 30,
        mainImages: [
          {
            url: `/files/bonanzacoffee_products_04.webp`,
            fileName: 'bonanzacoffee_products_04.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_04_detail_01webp`,
            fileName: 'bonanzacoffee_products_04_detail_01.webp',
          },
          {
            url: `/files/bonanzacoffee_products_04_detail_02.webp`,
            fileName: 'bonanzacoffee_products_04_detail_02.webp',
          },
        ],
        content: [
          { d1: 'ACME x BONANZA COFFEE MUG L [350ml]\n Ø 12cm x H 6cm' },
          {
            d2: 'Unnecessarily Large 라지 사이즈의 머그잔과 소서 세트입니다. 보난자커피의 이상적인 라떼 레시피를 구현할 수 있는 커피잔을 만들기 위해, 클래식한 디자인과 튼튼한 내구성을 갖추어 많은 바리스타들이 사랑하는 브랜드 ACME와 함께 제작했습니다.\n 또한 잔 입구가 넓어 바리스타들이 라떼 아트 실력을 보여주기에 최적화된 디자인으로, 라떼아트 챔피언들이 주로 사용하는 Vertex Bowl 라떼 잔의 특징을 반영했습니다.\n 350ml 용량의 사이즈로, 따뜻한 커피를 기존 커피잔보다 더 오래동안 맛있게 즐길 수 있습니다.',
          },
          {
            d3: '*소서에 새겨진 문구는 모두 수작업으로 이루어져 제품에 따라 위치가 상이할 수 있습니다. 이로 인한 교환, 환불은 어려우니 구매 시 참고해 주세요.\n *별도 박스 구성 없이 종이 완충재로 포장해 보내드립니다.',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['goods'],
          brand: '보난자커피',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 38000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '보난자 팀 티셔츠',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/bonanzacoffee_products_05.png`,
            fileName: 'bonanzacoffee_products_05.png',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_05_detail_01.jpg`,
            fileName: 'bonanzacoffee_products_05_detail_01.jpg',
          },
          {
            url: `/files/bonanzacoffee_products_05_detail_02.jpg`,
            fileName: 'bonanzacoffee_products_05_detail_02.jpg',
          },
        ],
        content: [
          { d1: 'TEAM BONANZA T-SHIRT [WHITE]\n 보난자커피 슬로건과 로고가 앞뒤로 새겨진 보난자 유니폼 반팔 티셔츠입니다.' },
          { d2: 'Who in their right mind would devote their whole life to coffee?' },
          {
            d3: '14수 면 100% 반팔티셔츠입니다.\n 사이즈는 측정 방법과 위치에 따라 1~3cm 오차가 발생할 수 있습니다. \n 기재된 사이즈 차이로 인한 교환 및 환불은 불가합니다.\n 드라이크리닝, 손세탁이 가능하며 세탁기 이용시 찬물로 세탁하시기를 바랍니다.',
          },
        ],

        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['goods'],
          brand: '보난자커피',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 17000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[킵댓커피] 스테킹 머그컵의 원조 브랜드 킵댓',
        quantity: 200,
        buyQuantity: 60,
        mainImages: [
          {
            url: `/files/keepthatcoffee_products_01.jpg`,
            fileName: 'keepthatcoffee_products_01.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_01_detail_01.jpg`,
            fileName: 'keepthatcoffee_products_01_detail_01.jpg',
          },
          {
            url: `/files/keepthatcoffee_products_01_detail_02.jpg`,
            fileName: 'keepthatcoffee_products_01_detail_02.jpg',
          },
        ],
        content: [
          {
            d1: '스테킹 머그컵의 원조 브랜드 킵댓\n 독보적인 컬러감과 전통적인 머그의 디자인으로 어느 공간에나 잘 어울립니다.\n 커피, 차 어떤 음료와도 잘 어울리고 인테리어 소품으로도 좋은 제품 입니다.',
          },
          { d2: '용량: 330ml / 200ml\n 재질: 도자기\n 사이즈: 330ml 지름 8cm 높이 9.7cm' },
          {
            d3: '식기세척 사용이 가능하나 로고 및 제품 스크레치 현상이 발생할 수 있습니다.\n 도자기 제품은 기포, 돌기, 파임, 찍힘 색 번짐은 자연스러운 유약 흐름 등의 특성이 있을수 있으며,\n 이는 불량이 아니므로 이로 인한 사항은 단순 변심으로 교환/환불이 되지 않습니다.',
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['goods'],
          brand: '킵댓커피',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 15000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[킵댓커피] 킵댓 스터코 블렌드(Strong) 200g [원산지:국산(경기도 수원시 팔달구)]',
        quantity: 100,
        buyQuantity: 80,
        mainImages: [
          {
            url: `/files/keepthatcoffee_products_02.jpg`,
            fileName: 'keepthatcoffee_products_02.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_02_detail_01.jpg`,
            fileName: 'keepthatcoffee_products_02_detail_01.jpg',
          },
          {
            url: `/files/keepthatcoffee_products_02_detail_02.jpg`,
            fileName: 'keepthatcoffee_products_02_detail_02.jpg',
          },
        ],
        content: [
          {
            d1: '에스프레소 본질적인 고유의 특성을 잃지 않기 위한 고전적인 에스프레소 블렌드를 재해석 하였습니다.\n 스터코 라이언중 Strong(강하다) 이라는 명칭을 담당하는 원두로써 무게감에 큰 중점을 두었습니다.\n 강배전 원두의 특징인 탄맛 또는 과도한 쓴맛만 강조되는 것을 방지하며, 건식과 수세식 가공방식의 원두를\n 적절히 조합하여 마일드하면서도 강배전 특유의 무게감을 잃지 않는 결과물을 만들어냈습니다. ',
          },
          { d2: '원산지: Brazil 50%, Ethiopia 35%, Colombia 15%\n 가공방식:  Natural 50%, Washed 50%(Mix)' },
          { d3: 'Cup note\n caramel, almond, dark chocolate, good body\n 달콤 쌉싸름함과 묵직한 바디감을 자랑합니다. 남녀노소 연령대를 불문한 대중적인 커피 입니다.' },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: '킵댓커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 55000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '킵댓 스무스 블렌드(Smooth) 1kg [원산지:국산(경기도 수원시 팔달구)]',
        quantity: 310,
        buyQuantity: 300,
        mainImages: [
          {
            url: `/files/keepthatcoffee_products_03.jpg`,
            fileName: 'keepthatcoffee_products_03.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_03_detail_01.jpg`,
            fileName: 'keepthatcoffee_products_03_detail_01.jpg',
          },
          {
            url: `/files/keepthatcoffee_products_03_detail_02.jpg`,
            fileName: 'keepthatcoffee_products_03_detail_02.jpg',
          },
        ],
        content: [
          { d1: '생두도 하나의 농산품이며, 수확시기와 제철이 존재합니다.\n 매 시기 좋은 재료들을 가지고 산뜻한 커피를 만들고 있습니다.' },
          {
            d2: '스터코 라인업 중 Smooth(부드러운) 라는 명칭을 담당하는 원두로써 질감과 향에 큰 중점을 두었습니다.\n 로스팅시 열의 역활을 확실하게 구분하여 무너지거나 특징없는 마일드함만을 추구하는것이 아닌, 1차 크랙 이후\n 2차 크랙 중간지점의 구간을 충분한 시간으로 구성하여 원두의 향미, 산미, 단맛, 밸런스를 살릴 수 있도록 구현하였습니다.',
          },
          { d3: '원산지: Brazil 55%, Kenya 45%\n 가공방식:  Natural 55%, Washed 45%' },
        ],

        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['coffee'],
          brand: '킵댓커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 55000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '킵댓 스무스 블렌드(Smooth) 1kg [원산지:국산(경기도 수원시 팔달구)]',
        quantity: 150,
        buyQuantity: 50,
        mainImages: [
          {
            url: `/files/keepthatcoffee_products_04.jpg`,
            fileName: 'keepthatcoffee_products_04.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_03_detail_01.jpg`,
            fileName: 'keepthatcoffee_products_03_detail_01.jpg',
          },
          {
            url: `/files/keepthatcoffee_products_03_detail_02.jpg`,
            fileName: 'keepthatcoffee_products_03_detail_02.jpg',
          },
        ],
        content: [
          { d1: '생두도 하나의 농산품이며, 수확시기와 제철이 존재합니다.\n 매 시기 좋은 재료들을 가지고 산뜻한 커피를 만들고 있습니다.' },
          {
            d2: '스터코 라인업 중 Smooth(부드러운) 라는 명칭을 담당하는 원두로써 질감과 향에 큰 중점을 두었습니다.\n 로스팅시 열의 역활을 확실하게 구분하여 무너지거나 특징없는 마일드함만을 추구하는것이 아닌, 1차 크랙 이후\n 2차 크랙 중간지점의 구간을 충분한 시간으로 구성하여 원두의 향미, 산미, 단맛, 밸런스를 살릴 수 있도록 구현하였습니다.',
          },
          { d3: '원산지: Brazil 55%, Kenya 45%\n 가공방식:  Natural 55%, Washed 45%' },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['coffee'],
          brand: '킵댓커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 4,
        price: 2000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '마일스톤 커피 드립백 낱개 DRIP BAG 1EA',
        quantity: 310,
        buyQuantity: 190,
        mainImages: [
          {
            url: `/files/milestonecoffee_products_01.jpg`,
            fileName: 'milestonecoffee_products_01.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_01_fullpage.png`,
            fileName: 'milestonecoffee_products_01_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>누구나, 언제 어디서나, 너무나도 쉽게 마일스톤 커피를 경험하실 수 있습니다.고품질의 커피를 즐기실 수 있도록 커피를 가득 담아 맛과 향이 풍부합니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: 'milestonecoffee',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 4,
        price: 14000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '마일스톤 커피 하나비 블랜드 200g',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/milestonecoffee_products_02.jpg`,
            fileName: 'milestonecoffee_products_02.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_02_fullpage.png`,
            fileName: 'milestonecoffee_products_02_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>누구나, 언제 어디서나, 너무나도 쉽게 마일스톤 커피를 경험하실 수 있습니다.고품질의 커피를 즐기실 수 있도록 커피를 가득 담아 맛과 향이 풍부합니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: 'milestonecoffee',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 4,
        price: 43000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '마일스톤 커피 원두 1kg',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/milestonecoffee_products_03.jpg`,
            fileName: 'milestonecoffee_products_03.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_03_fullpage.png`,
            fileName: 'milestonecoffee_products_03_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>누구나, 언제 어디서나, 너무나도 쉽게 마일스톤 커피를 경험하실 수 있습니다.고품질의 커피를 즐기실 수 있도록 커피를 가득 담아 맛과 향이 풍부합니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: 'milestonecoffee',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 4,
        price: 20000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '마일스톤 커피 10주년 블랜드 200g',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/milestonecoffee_products_04.jpeg`,
            fileName: 'milestonecoffee_products_04.jpeg',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_04_fullpage.png`,
            fileName: 'milestonecoffee_products_04_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>누구나, 언제 어디서나, 너무나도 쉽게 마일스톤 커피를 경험하실 수 있습니다.고품질의 커피를 즐기실 수 있도록 커피를 가득 담아 맛과 향이 풍부합니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: 'milestonecoffee',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 4,
        price: 35000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '마일스톤 로고 텀블러 12oz',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/milestonecoffee_products_05.jpg`,
            fileName: 'milestonecoffee_products_05.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_05_fullpage.png`,
            fileName: 'milestonecoffee_products_05_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>누구나, 언제 어디서나, 너무나도 쉽게 마일스톤 커피를 경험하실 수 있습니다.고품질의 커피를 즐기실 수 있도록 커피를 가득 담아 맛과 향이 풍부합니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: 'milestonecoffee',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 5,
        price: 27000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '코스타리카 볼칸 아술 에티오피안 언에어로빅 내추럴 200G',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/protokoll_products_01.jpg`,
            fileName: 'protokoll_products_01.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_01_fullpage.png`,
            fileName: 'protokoll_products_01_fullpage.png',
            orgName: '',
          },
        ],

        content: `
          <div class="product-detail">
            <p>Volcan Azul은 해발 1,500m 이상에 위치한 농장으로, 19세기부터 현재까지 5대째 내려오는 전통을 자랑합니다.비옥한 화산 토양과 따뜻한 날씨가 뛰어난 품질의 커피를 생산하기 적합해 다양한 품종을 심고 있습니다. 또한 이 농장은 체리를 5일 동안 탱크에 넣은 후 12일간 천천히 건조하는 등 특별한 가공 방식을 꾸준히 연구하고 있습니다.그 결과로 2017년 COE 2위, 2018년 COE 34위, 그리고 2020년 COE 4위와 12위를 수상하였습니다.이 커피는 사과, 자두, 라즈베리와 같은 빨간색 계열의 과일들이 잘 연상됩니다.기존 코스타리카 커피에서 연상되는 혹은 프로토콜에서 다양하게 선보인 언에어로빅 커피들에 비해 조금 더 깔끔하고 선명한 뉘앙스의 커피일 것입니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '프로토콜',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 5,
        price: 11000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'BLEND SUPER NORMAL 캡슐커피',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/protokoll_products_02.jpg`,
            fileName: 'protokoll_products_02.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_02_fullpage.png`,
            fileName: 'protokoll_products_02_fullpage.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>프로토콜 캡슐 커피가 출시되었습니다.
            집에서 커피가 마시고 싶을 때
            드립백으로 많은 분들의 커피 내리기 귀찮음을 해결해 드리고 싶었지만
            역시 집에서는 캡슐커피가 최고인듯합니다.
            저도 애정합니다.
            버튼 몇 번으로 쉽고 간편하게 프로토콜 커피를 즐겨보시길요.
            네스프레소 오리지널 머신만 호환 가능합니다. 캡슐 구매 전 캡슐의 타입과 호환 가능 여부를 꼭 확인해 주시기 바랍니다.
            (네스프레소 버츄오, 일리, 돌체구스토 호환 불가)
            6g * 10ea
            </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['coffee'],
          brand: '프로토콜',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 5,
        price: 11000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'BLEND SUPER NORMAL dripbag (6ea)',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/protokoll_products_03.jpg`,
            fileName: 'protokoll_products_03.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_03_fullpage.png`,
            fileName: 'protokoll_products_03_fullpage.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>프로토콜의 블렌드 SUPER NORMAL을 드립백에 담았습니다.
            언제 어디서든 대충 물 넣어도 좀 맛있는 커피.
            그래서 나 커피 좀 하는 사람인 듯 착각하게 만들어 줄 수 있는 커피.
            무엇보다 집에서도 프로토콜 맛 느낌 나는 커피.
            ‘홈 스위트 홈 커피 타임’ 프로토콜 드립백이 해드릴게요
            12g x 6ea</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['coffee'],
          brand: '프로토콜',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 5,
        price: 4000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'PROTOKOLL REUSABLE CUP',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/protokoll_products_04.jpg`,
            fileName: 'protokoll_products_04.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_04_fullpage.png`,
            fileName: 'protokoll_products_04_fullpage.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>프로토콜의 로고가 새겨진 리유저블 컵입니다.
            집, 회사 등 어디서나 사용하기 편한 컵을 만들어 보고 싶은 욕심에 출시했습니다.
            프로토콜 하면 떠올릴 수 있는 블랙과 화이트로 말이지요.
            (저는 블랙이 좋지만 많은 분들은 화이트를 좋아합니다.)
            프로토콜 텀블러와 마찬가지로,
            이 컵을 지니고 프로토콜 매장을 방문하면 프로토콜 멤버들에게 감동을 선사하는 기능도 탑재되어 있습니다. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['coffee'],
          brand: '프로토콜',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 5,
        price: 18000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'PROTOKOLL TUMBLER',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/protokoll_products_05.jpg`,
            fileName: 'protokoll_products_05.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_05_fullpage.png`,
            fileName: 'protokoll_products_05_fullpage.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>프로토콜 로고가 새겨진 스테인리스 텀블러입니다.
            빨대가 내장되어 있고 보온,보냉이 가능합니다.
            또, 이 텀블러를 지니고 프로토콜 매장을 방문하면 프로토콜 멤버들에게 감동을 선사하는 기능까지 갖춘 다재다능한 텀블러입니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['joinus'],
          brand: '프로토콜',
          sort: 4,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 6,
        price: 38000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'VISIONSTROLL HANDCRAFT GLASS CUP 비전스트롤 핸드크래프트 유리컵',
        quantity: 70,
        buyQuantity: 0,
        mainImages: [
          {
            url: `/files/visionstroll_products_01.jpg`,
            fileName: 'visionstroll_products_01.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/visionstroll_products_01_fullpage.png`,
            fileName: 'visionstrolll_products_01_fullpage.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>리사이클유리로 수작업을 통하여 제작되어진 비전스트롤의 메인컵입니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['goods'],
          brand: '비전스트롤',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 6,
        price: 55000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'VISIONSTROLL OLDPEACE BLEND 비전스트롤 올드피스 블렌드 1kg [원산지:에티오피아]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/visionstroll_products_02.jpg`,
            fileName: 'visionstroll_products_02.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/visionstroll_products_02_fullpage.png`,
            fileName: 'visionstrolll_products_02_fullpage.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>올드피스는 화사함과 묵직함 동시에 느끼실 수 있는 커피입니다.건포도와 입안에 카라멜을 머금고 있는 기분좋은 스윗함을 경험하실 수 있고, 은은하게 퍼지는 꽃향기의 긴 여운을 느끼실 수 있습니다.2022 올해의 커피는 OLD PEACE 입니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['goods'],
          brand: '비전스트롤',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 6,
        price: 20000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'DRIP BAG BOX SET 10 비전스트롤 드립백 박스셋 10개 [원산지:에티오피아]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/visionstroll_products_03.jpg`,
            fileName: 'visionstroll_products_03.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/visionstroll_products_03_fullpage.png`,
            fileName: 'visionstrolll_products_03_fullpage.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>드립백 박스를 이용해 선물해보세요.드립백 종류 상관없이 10개 구매시 박스가 제공 되어집니다.원하시는 종류를 선택해서 10개를 선택하셔서 주문해주시면 됩니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['joinus'],
          brand: '비전스트롤',
          sort: 4,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 6,
        price: 43000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'VISIONSTROLL TUMBLER 500ML 비전스트롤 텀블러',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/visionstroll_products_04.jpg`,
            fileName: 'visionstroll_products_04.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/visionstroll_products_04_fullpage.png`,
            fileName: 'visionstrolll_products_04_fullpage.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>첫 출시 텀블러입니다.비전스트롤의 유니크한 디자인 독보이는 텀블러입니다.
            </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['joinus'],
          brand: '비전스트롤',
          sort: 4,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 6,
        price: 38000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'VISIONSTROLL YOUPAY KEYRIG 비전스트롤 유페이 키링',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/visionstroll_products_05.jpg`,
            fileName: 'visionstroll_products_05.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/visionstroll_products_05_fullpage.png`,
            fileName: 'visionstrolll_products_05_fullpage.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>비전스트롤의 굿즈 유페이 키링입니다.두께감이 있어서 가벼워 보이지 않고 다양한 용도로 활용가능합니다.
            </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '비전스트롤',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 8500,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[프릳츠] 샷글라스 120ml',
        quantity: 100,
        buyQuantity: 0,
        mainImages: [
          {
            url: `/files/ac52478dc537888fa75932fd30390a0a.jpg`,
            fileName: 'ac52478dc537888fa75932fd30390a0a.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/EC9E90EC82ACEBAAB0.png`,
            fileName: 'EC9E90EC82ACEBAAB0.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>용량: 120ml (4oz)
            크기: 지름 6cm / 높이 6.4cm
            * 전자레인지에 사용할 수 있습니다.
            * 식기세척기 사용 시 금색의 펄 재질이 벗겨질 수 있습니다.
            </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '프릳츠',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 32000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '[프릳츠] 물빛 잔과 소서',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/15ea96b0060027f0569b3047e80e108a.jpg`,
            fileName: '15ea96b0060027f0569b3047e80e108a.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/EC9E94EAB3BCEC868CEC849C_EBACBCEBB99B_EC8381EC84B828EC9E90EC82ACEBAAB029.png`,
            fileName: 'EC9E94EAB3BCEC868CEC849C_EBACBCEBB99B_EC8381EC84B828EC9E90EC82ACEBAAB029.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>재질: 도자기제
            크기: 잔 - 바깥지름 7.2cm / 안지름 5.7cm / 높이 7.5cm, 소서 - 지름 13.7cm / 높이 2cm
            용량: 160ml</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '프릳츠',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 48000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '[프릳츠] 솟솟리버스X프릳츠 물병가방',
        quantity: 310,
        buyQuantity: 310,
        mainImages: [
          {
            url: `/files/7ca6724ba612ccd1d8c140cdeaec68aa.jpg`,
            fileName: '7ca6724ba612ccd1d8c140cdeaec68aa.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/EC869FEC869F-EBACBCEBB391EAB080EBB0A91-EC9E90EC82ACEBAAB0.png`,
            fileName: 'EC869FEC869F-EBACBCEBB391EAB080EBB0A91-EC9E90EC82ACEBAAB0.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>솟솟리버스X프릳츠 물병가방입니다.
            </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '프릳츠',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 38000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '[프릳츠] 솟솟리버스X프릳츠 볼캡',
        quantity: 310,
        buyQuantity: 310,
        mainImages: [
          {
            url: `/files/a60a5da6831e6b5e0f0ba524433c38df.jpg`,
            fileName: 'a60a5da6831e6b5e0f0ba524433c38df.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/EC9E98EB9098EC96B4EAB080EC8B9CEB8298-EC9E90EC82ACEBAAB0.png`,
            fileName: 'EC9E98EB9098EC96B4EAB080EC8B9CEB8298-EC9E90EC82ACEBAAB0.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>솟솟리버스X프릳츠 볼캡입니다.
            </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '프릳츠',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 16000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[프릳츠] 서울 시네마 200g',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/a60a5da6831e6b5e0f0ba524433c38df.jpg`,
            fileName: 'a60a5da6831e6b5e0f0ba524433c38df.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/EC869FEC869F-EBB3BCECBAA1-EC9E90EC82ACEBAAB0.png`,
            fileName: 'EC869FEC869F-EBB3BCECBAA1-EC9E90EC82ACEBAAB0.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>커피는 과일입니다.
            <서울시네마>에서는 커피가 가진
            고유한 밝은 산미와 깨끗한 단맛을 즐겨주시길.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['coffee'],
          brand: '프릳츠',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 16000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '[프릳츠] 잘 되어가시나 200g',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/d42cd7b0d298579692e80638fa6dd6ed.jpg`,
            fileName: 'd42cd7b0d298579692e80638fa6dd6ed.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/EC9E98EB9098EC96B4EAB080EC8B9CEB8298-EC9E90EC82ACEBAAB0.png`,
            fileName: 'EC9E98EB9098EC96B4EAB080EC8B9CEB8298-EC9E90EC82ACEBAAB0.png',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>단맛을 바탕으로 훌륭한 밸런스를
            <잘 되어가시나 Everything Good >에서 구현합니다.
            길고 달콤한 애프터 테이스트도 더불어.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: '프릳츠',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 8,
        price: 30000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '주연셀렉션 part.5 초코 빌카문도',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/95793b84d779e6456f4eb1829538742d.jpg`,
            fileName: '95793b84d779e6456f4eb1829538742d.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/8632006192a0a3e28657df057c906be7.jpg`,
            fileName: '8632006192a0a3e28657df057c906be7.jpg',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>기본 정보
            배송비	2,500원 (40,000원 이상 구매 시 무료)
            조성	에콰도르 100%
            노트	-노리아 게이샤: 오렌지 블라썸, 아카시아 꿀, 바닐라, 우아함
            -엘리자 시드라: 노란꽃, 황도복숭아, 망고, 애플 사이다</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['goods'],
          brand: '모모스커피',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 8,
        price: 14000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '원두 에스쇼콜라',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/fd073ab0619e246c92a02e5fad0d4fb2.jpg`,
            fileName: 'fd073ab0619e246c92a02e5fad0d4fb2.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/6b09e09ef39522bd9c5d8f901023f637.jpg`,
            fileName: '6b09e09ef39522bd9c5d8f901023f637.jpg',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>기본 정보
            배송비	2,500원 (40,000원 이상 구매 시 무료)
            조성	- 콜롬비아 모모스 셀렉션 라 플라타 블렌드 워시드 50%
            - 과테말라 산 주앙 보스코 카투아이 워시드 35%
            - 코스타리카 엘 벤다발 카투아이 화이트 허니 10%
            - 엘살바도르 돈 헥터 파카스 워시드 5%
            노트	초콜릿, 프랄린피칸, 크리미 </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['coffee'],
          brand: '모모스커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 8,
        price: 14000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '원두 프루티봉봉',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/9a245b17ce5b24d94fe622f6eeec2a45.jpg`,
            fileName: '9a245b17ce5b24d94fe622f6eeec2a45.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/fb88988a5193f8c75a46811d29c456be.jpg`,
            fileName: 'fb88988a5193f8c75a46811d29c456be.jpg',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>기본 정보
            배송비	2,500원 (40,000원 이상 구매 시 무료)
            조성	- 에티오피아 예가체프 반코 타라투 워시드 애너로빅 60%
            - 케냐 티리리카 눈두 AA 풀리 워시드 20%
            - 케냐 이노이 키안데리 풀리 워시드 20%
            노트	살구, 만다린, 블랙티, 카라멜</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '모모스커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 8,
        price: 15000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '원두 므쵸베리',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/498525b4eb33ec6987e81d1702d8f2fd.jpg`,
            fileName: '498525b4eb33ec6987e81d1702d8f2fd.jpg',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/2f816e99dc29f707c24e78f3c04654bc.jpg`,
            fileName: '2f816e99dc29f707c24e78f3c04654bc.jpg',
            orgName: '',
          },
        ],
        content: `
          <div class="product-detail">
            <p>기본 정보
            배송비	2,500원 (40,000원 이상 구매 시 무료)
            조성	- 에티오피아 예가체프 할로 내추럴 G1 30%
            - 에티오피아 예가체프 반코 코티티 내추럴 G1 50%
            - 콜롬비아 모모스 셀렉션 라 플라타 블렌드 워시드 20%
            노트	믹스베리, 체리, 메이플시럽, 쥬시</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '모모스커피',
          sort: 2,
        },
      },
    ],
    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        user_id: 2,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 1,
            state: 'OS020',
            name: '[센터커피] 게이샤 콜드브루 200ml',
            image: 'centercoffee_02.png',
            quantity: 1,
            price: 12500,
            reply_id: 3,
          },
        ],
        cost: {
          products: 13000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 16000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 2,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 1,
            state: 'OS020',
            name: '[센터커피] 에티오피아 디카페인 콜드브루 300ml',
            image: 'centercoffee_01.png',
            quantity: 1,
            price: 12000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 12000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 15000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 2,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 1,
            state: 'OS020',
            name: '[센터커피] 프라이데이 블랜드 네스프레소 캡슐',
            image: 'centercoffee_05.png',
            quantity: 1,
            price: 20000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 20000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 23000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 3,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 2,
            state: 'OS020',
            name: '보난자 드립백 24개입 [3종]',
            image: 'bonanzacoffee_products_01.jpg',
            quantity: 1,
            price: 32000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 32000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 35000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 1,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 2,
            state: 'OS020',
            name: '보난자 블렌드 콜롬비아 & 브라질 250g',
            image: 'bonanzacoffee_products_02.png',
            quantity: 1,
            price: 18900,
            reply_id: 3,
          },
        ],
        cost: {
          products: 18900,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 21900,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 3,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 2,
            state: 'OS020',
            name: '[킵댓커피] 킵댓 스터코 블렌드(Strong) 200g [원산지:국산(경기도 수원시 팔달구)]',
            fileName: 'keepthatcoffee_products_02.jpg',
            quantity: 2,
            price: 20000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 30000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 33000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 2,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 2,
            state: 'OS020',
            name: '보난자 드립백 5개입 3종 + 드립 어시스트',
            image: 'bonanzacoffee_products_03.jpg',
            quantity: 2,
            price: 45000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 45000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 48000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 3,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 2,
            state: 'OS020',
            name: '보난자 드립백 5개입 3종 + 드립 어시스트',
            image: 'bonanzacoffee_products_03.jpg',
            quantity: 2,
            price: 45000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 45000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 48000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 3,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 2,
            state: 'OS020',
            name: '킵댓 스무스 블렌드(Smooth) 1kg [원산지:국산(경기도 수원시 팔달구)]',
            image: 'keepthatcoffee_products_03.jpg',
            quantity: 2,
            price: 55000,
            reply_id: 3,
          },
          {
            _id: 2,
            seller_id: 1,
            state: 'OS020',
            name: 'VISIONSTROLL HANDCRAFT GLASS CUP 비전스트롤 핸드크래프트 유리컵',
            image: 'visionstroll_products_01.jpg',
            quantity: 1,
            price: 38000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 151000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 154000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 3,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 2,
            state: 'OS020',
            name: '[프릳츠] 샷글라스 120ml',
            image: 'ac52478dc537888fa75932fd30390a0a.jpg',
            quantity: 2,
            price: 8500,
            reply_id: 3,
          },
        ],
        cost: {
          products: 20000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 48000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 3,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 2,
            state: 'OS020',
            name: '보난자 드립백 5개입 3종 + 드립 어시스트',
            image: 'bonanzacoffee_products_03.jpg',
            quantity: 2,
            price: 45000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 45000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 48000,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
    ],
    // 후기
    reply: [
      {
        _id: await nextSeq('reply'),
        user_id: 1,
        order_id: 1,
        product_id: 1,
        rating: 5,
        content:
          '하나비보다 산미가 있다고 하는데 개인적으로 산미 있는 커피를 더 선호하지만 하나비가 더 좋아요. 구독서비스처럼 신선한 드립백 매주 구독받아 먹고 싶을정도로 너무 마음에 드는 커피입니다.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 1,
        order_id: 2,
        product_id: 2,
        rating: 4,
        content: '매장에서 맛있게 먹어서 드립백도 시켜보았는데 훌륭합니다.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 2,
        order_id: 3,
        product_id: 3,
        rating: 5,
        content: '맛있어요',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 2,
        order_id: 4,
        product_id: 4,
        rating: 5,
        content: '완전 맛있어요 또 올게요',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        content: '포장도 넘 예쁘게 배송받았어요! 카페에서 마셔보고 맛과향이 좋아서 드립백이랑 원두 함께 구매했어요~ 맛있어서 민족스러워요.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 1,
        order_id: 1,
        product_id: 1,
        rating: 5,
        content: '매장에서 먹고 반해서 인터넷 구매했는데, 커피 메이커 쓰는데도 향이 그대로이고 좋아요 :)',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 1,
        order_id: 2,
        product_id: 2,
        rating: 3,
        content: '배송이 좀 느려요.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 2,
        order_id: 3,
        product_id: 3,
        rating: 5,
        content: '배송빠릅니다 아직 안먹어봤는데 기대됩니다~',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 2,
        order_id: 4,
        product_id: 4,
        rating: 5,
        content: '부드럽고 좋네요~~~',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        content: '그립감 좋아요 색도 이쁘고 질리지 않는 스타일 다른색도 구매할까 고민중요',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 1,
        order_id: 1,
        product_id: 1,
        rating: 4,
        content: '빨대가 있는 줄 알았는데 없네요..! 안에 뭔가 기다란게 들어있어서 이어지는 부붐인가 핬는데 용도는 잘 모르겠어요.. 돌리는것도 조금 뻑뻑하구 그래도 디자인은 예뻐요',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 1,
        order_id: 2,
        product_id: 2,
        rating: 5,
        contents: '가족이 말하길 그 어디서 먹는 커피보다 맛있대요.... 저도 진짜 온갖 원두 먹어봤는데 이건 진짜 맛있어요 비싸도 계속 재규매...',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 2,
        order_id: 3,
        product_id: 3,
        rating: 5,
        contents: '카페가서 라떼먹고 반해서 원두 사서 다먹고 온라인으로 또 구매했다. 흐리게 라떼랑 타 먹어도 맛나네요 패키지 퀄 실화인가요 무지 예뻐요 맛은 두말할필요없습니더',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 2,
        order_id: 4,
        product_id: 4,
        rating: 4,
        contents: '맛있어요~ 카페 에서 너무 맛있게 먹어서 원두 시켜보았네요.... 커피 향이 봉투를 뚫고 나오네요 ~',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '다시 시켜먹을거예요 지금까지 먹은 원두중에 젤맛있어요 물론 가격도 젤 비쌈',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '매장에서 이 잔에 커피 마시고 넘 예뻤던 기억에 오랜기간 고민하다 구매완료! 넘 이뿌네요..♥',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '너무 영롱하고 이뻐요!!',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '매장에서 이 잔에 커피 마시고 넘 예뻤던 기억에 오랜기간 고민하다 구매완료! 넘 이뿌네요..♥',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '올드피스는 원래 먹던거구 허트가디언은 첨 시켜봤어요 향이 무척 진한게 좋네요!',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '좋은 선물했습니다 :)',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '제가 사랑하는 비전스트롤! 지방에 살아서 매장은 한달에 한번 가는데…정말 여기 아메리카노 맛을 잊을 수가 없어서 시켜 먹어요. 비전스트롤! 굿!',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '배리베리베리하네요 맛있어요',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '포장 깔끔하고 빨리 왔어요. 이번도 기대가 됩니다',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '맛있숩니다 ㅎㅎ 맛있어요',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '향이랑 맛이 일품이네용^^ 또 구매하려구요!',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 5,
        product_id: 5,
        rating: 5,
        contents: '맛있네요. 계속 사서 먹고 싶은 원두 찾아서 좋아요.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
    ],
    // 장바구니
    cart: [
      {
        _id: await nextSeq('cart'),
        user_id: 2,
        product_id: 1,
        quantity: 2,
        createdAt: getTime(-7, -60 * 30),
        updatedAt: getTime(-7, -60 * 30),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 2,
        product_id: 2,
        quantity: 1,
        createdAt: getTime(-4, -60 * 30),
        updatedAt: getTime(-3, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 2,
        product_id: 3,
        quantity: 2,
        createdAt: getTime(-3, -60 * 60 * 4),
        updatedAt: getTime(-3, -60 * 60 * 4),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 3,
        product_id: 4,
        quantity: 3,
        createdAt: getTime(-2, -60 * 60 * 12),
        updatedAt: getTime(-1, -60 * 60 * 20),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 3,
        product_id: 5,
        quantity: 3,
        createdAt: getTime(-2, -60 * 60 * 12),
        updatedAt: getTime(-1, -60 * 60 * 20),
      },
    ],
    // 즐겨찾기/북마크
    bookmark: [
      {
        _id: await nextSeq('bookmark'),
        user_id: 2,
        product_id: 2,
        memo: '맛도리 원두',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 2,
        product_id: 5,
        memo: '맛있는 그래놀라',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 2,
        product_id: 3,
        memo: '2순위로 살것',
        createdAt: getTime(-2, -60 * 60 * 20),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 3,
        product_id: 2,
        memo: '맛도리 원두',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 3,
        product_id: 5,
        memo: '맛있는 그래놀라',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 3,
        product_id: 3,
        memo: '2순위로 살것',
        createdAt: getTime(-2, -60 * 60 * 20),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 3,
        product_id: 4,
        memo: '이달 보너스타면 꼭!!!',
        createdAt: getTime(-1, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 3,
        product_id: 4,
        memo: '1순위로 살것!',
        createdAt: getTime(-1, -60 * 60 * 12),
      },
    ],
    // QnA, 공지사항, 게시판
    post: [
      {
        _id: 1,
        title: '연습용 매거진 장소',
        content: '연습용 매거진 장소를 만들었다..!',
        type: 'magazine',
        extra: {
          articleType: 'USEFUL',
          images: ['cafe_coeo.jpeg', 'coffee-1.jpg'],
        },
        views: 2000,
        createdAt: '2024.04.16 17:29:19',
        updatedAt: '2024.04.16 17:29:19',
      },
      {
        _id: 2,
        title: '연습용 매거진 장소2',
        content: '연습용 매거진 장소2를 만들었다..!',
        type: 'magazine',
        extra: {
          articleType: 'FIENDLY',
          images: ['cafe_coeo.jpeg', 'coffee-1.jpg'],
        },
        views: 50,
        createdAt: '2024.04.16 17:29:07',
        updatedAt: '2024.04.16 17:29:07',
      },
    ],
    // 코드
    code: [
      {
        _id: 'productCategory',
        title: '상품 카테고리',
        codes: [
          {
            sort: 1,
            code: 'PC01',
            value: 'brand',
            depth: 1,
          },
          {
            sort: 2,
            code: 'PC02',
            value: 'coffee',
            parent: 'PC02',
            depth: 1,
          },
          {
            sort: 3,
            code: 'PC03',
            value: 'goods',
            parent: 'PC03',
            depth: 1,
          },
          {
            sort: 4,
            code: 'PC04',
            value: 'joinus',
            parent: 'PC04',
            depth: 1,
          },
        ],
      },
    ],
    // 설정
    config: [
      {
        _id: 'shippingFees',
        title: '배송비',
        value: 3000,
      },
      {
        _id: 'freeShippingFees',
        title: '배송비 무료 금액',
        value: 50000,
      },
    ],
  };
};
