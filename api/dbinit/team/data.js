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
        name: '센터커피',
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
            url: `/files/centercoffee_01.webp`,
            name: 'centercoffee_01.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_01.webp`,
            name: 'centercoffee_01.webp',
          },
          {
            url: `/files/centercoffee_01_detail.webp`,
            name: 'centercoffee_01_detail.webp',
          },
        ],
        content: [
          '액상커피로 어디서든 간편하게 맛있는 커피를 즐겨보세요! ',
          `처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.
            특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. `,
          `물과 만나면서 퍼지는 은은한 자스민 향이 좋은 콜드브루 커피입니다.
            살구의 플레이버와 함께 청사과의 기분 좋은 산미가 입안 가득 퍼지며 맛을 다채롭게 만들어줍니다.
            마지막에 느껴지는 밀크초콜릿의 단맛이 입안을 은은하게 정리해주면서 긴 여운을 남겨줍니다.`,
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
            url: `/files/centercoffee_02.webp`,
            name: 'centercoffee_02.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_02.webp`,
            name: '/files/centercoffee_02.webp',
          },
          {
            url: `/files/centercoffee_02_detail.webp`,
            name: 'centercoffee_02_detail.webp',
          },
        ],
        content: [
          '액상커피로 어디서든 간편하게 맛있는 커피를 즐겨보세요! ',
          `처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.
            특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. `,
          `물과 만나면서 퍼지는 은은한 자스민 향이 좋은 콜드브루 커피입니다.
              살구의 플레이버와 함께 청사과의 기분 좋은 산미가 입안 가득 퍼지며 맛을 다채롭게 만들어줍니다.
              마지막에 느껴지는 밀크초콜릿의 단맛이 입안을 은은하게 정리해주면서 긴 여운을 남겨줍니다.`,
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
            url: `/files/centercoffee_03.webp`,
            name: 'centercoffee_03.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_03.webp`,
            name: 'centercoffee_03.webp',
          },
          {
            url: `/files/centercoffee_03_detail.webp`,
            name: 'centercoffee_03_detail.webp',
          },
        ],
        content: [
          '연베이지, 진한샐몬,진청카키, 옐로우 총 4가지의 따듯한 색상으로 제작된 센터커피 블랭킷으로 일상적인 공간에 작은 변화를 느껴보세요.',
          `센터커피 블랭킷은 박스에 담아 전달합니다.
                박스를 뜯고 블랭킷을 펼치는 순간, 일상적인 공간이 다채로운으로 가득하기를 희망합니다.`,
          `size: 가로 100 * 세로 75(cm)
            Meterial: 아크릴 100%
            Country of Origin: 대한민국`,
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
            url: `/files/centercoffee_04.webp`,
            name: 'centercoffee_04.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_04.webp`,
            name: 'centercoffee_04.webp',
          },
          {
            url: `/files/centercoffee_04_detail.webp`,
            name: 'centercoffee_04_detail.webp',
          },
        ],
        content: [
          '처음 한모금에 다크초콜릿과 캐러멜의 단맛이 느껴지고, 이후에 커피가 식을수록 건자두의 플레이버가 입안을 채워줍니다. 마지막으로 세련되고 깔끔한 뒷맛이 전체적인 밸런스를 잡아주는 커피입니다. ',
          `처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.
            특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. `,
          '중남미 커피를 중점으로 부드럽고 짙은 풍미와 아프리카의 섬세한 향미를 느낄 수 있습니다. 고소한 풍미와 단맛이 좋은 브라질을 베이스로 하여, 과테말라와 에티오피아로 커피의 질감과 향미의 밸런스를 맞췄습니다. 보편적 커피가 주는 향미와 의미에 집중하길 원합니다. 가장 기본적인 것을 잡아내기 위해 부드럽고 고소함으로 무게감을 만들었습니다. 우리는 그 속에 어떤 결합된 지점을 넣길 원했고, 이 복합적인 향미를 놓치지 않으며 부드러움과 깊이감을 유지하도록 설계한 커피입니다.',
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
            url: `/files/centercoffee_05.webp`,
            name: 'centercoffee_05.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_05.webp`,
            name: 'centercoffee_05.webp',
          },
          {
            url: `/files/centercoffee_05_detail.webp`,
            name: 'centercoffee_05_detail.webp',
          },
        ],
        content: [
          '처음 한모금에 다크초콜릿과 캐러멜의 단맛이 느껴지고, 이후에 커피가 식을수록 건자두의 플레이버가 입안을 채워줍니다. 마지막으로 세련되고 깔끔한 뒷맛이 전체적인 밸런스를 잡아주는 커피입니다. ',
          `처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.
            특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. `,
          '중남미 커피를 중점으로 부드럽고 짙은 풍미와 아프리카의 섬세한 향미를 느낄 수 있습니다. 고소한 풍미와 단맛이 좋은 브라질을 베이스로 하여, 과테말라와 에티오피아로 커피의 질감과 향미의 밸런스를 맞췄습니다. 보편적 커피가 주는 향미와 의미에 집중하길 원합니다. 가장 기본적인 것을 잡아내기 위해 부드럽고 고소함으로 무게감을 만들었습니다. 우리는 그 속에 어떤 결합된 지점을 넣길 원했고, 이 복합적인 향미를 놓치지 않으며 부드러움과 깊이감을 유지하도록 설계한 커피입니다.',
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
            url: `/files/centercoffee_06.webp`,
            name: 'centercoffee_06.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/centercoffee_06.webp`,
            name: 'centercoffee_06.webp',
          },
          {
            url: `/files/centercoffee_06_detail.webp`,
            name: 'centercoffee_06_detail.webp',
          },
        ],
        content: [
          `프렌치 프레스와 핸드드립의 장점을 모아 만든 커피 드리퍼입니다.
               센터커피 로고가 각인되어 있고,  내리는 방법이 간단하여 누구나 내릴 수 있고, 좋은 원두라면 그 원두의 맛을 고스란히 담을 수 있습니다.`,
          `처음부터 게이샤와 같은 품종의 커피에 집중하여 고품질의 커피를 생산하고 있는 농장입니다.
            특히 이 농장은 건조과정과 보관까지 품질 관리를 심혈을 기울여 좋은결과물을 만들어 내기 위해 노력하고 있습니다. `,
          `사이즈: 윗지름 11.5 / 밑지름 10.5 / 높이 12cm
             색상: White
              재질: 아크릴로나트릴스티렌, 실리콘수지, 폴리스티렌
               제조국: 대만
                품질보증기간: 미사용시 7일이내 환불 가능`,
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
            url: `/files/bonanzacoffee_products_01.webp`,
            name: 'bonanzacoffee_products_01.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_01_detail_01.webp`,
            name: 'bonanzacoffee_products_01_detail_01.webp',
          },
          {
            url: `/files/bonanzacoffee_products_01_detail_02.webp`,
            name: 'bonanzacoffee_products_01_detail_02.webp',
          },
        ],
        content: [
          `언제든 내려마시기 좋은 보난자커피 드립백 24개입과 드립 어시스트 세트
             산뜻한맛과 향, 부드러운 질감.
              원두의 향미를 간직한 드립커피 한 잔을 더욱 편하게 즐기세요. `,
          '드립백으로 커피를 내릴 때 아랫부분이 잠겨 불편했다면, 다양한 컵에 거치할 수 있는 드립 어시스트를 이용하세요. ',
          '몰입이나 휴식이 필요할 때 언제든 개별포장으로 보관이 편리해 언제 어디서든 꺼내어 마시기 좋습니다. ',
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
            url: `/files/bonanzacoffee_products_02.webp`,
            name: 'bonanzacoffee_products_02.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_02_detail_01.webp`,
            name: 'bonanzacoffee_products_02_detail_01.webp',
          },
          {
            url: `/files/bonanzacoffee_products_02_detail_02.webp`,
            name: 'bonanzacoffee_products_02_detail_02.webp',
          },
        ],
        content: [
          `보난자커피 스테디 셀러. 초콜렛 트러플, 다크 체리
            Origin | Colombia | Brazil
            Region | Pitalito, Huila | Minas Gerais
            Varietal | Caturra, Castillo | Mixed
            Process | Fully Washed | Natural`,
          '지속가능한 커피 문화를 위해 보난자커피는 매해 커피 수확 철이면 더욱 투명하고 공정한 방식을 취하는 농장을 찾습니다. 이번 보난자 블렌드는 풍부한 플레이버와 부드러운 바디감이 돋보이는 브라질 Sitio Santa Clara 농장의 커피, 그리고 오랜 시간 거래를 이어왔던 콜롬비아 El Carmen 농장의 커피를 블렌딩하여 더욱 균형감이 좋은 커피를 소개해 드릴 수 있게 되었습니다. 부드러운 질감 아래 초콜렛 트러플의 쌉싸름함, 다크 체리의 농후한 단맛이 느껴지는 블렌드입니다. ',
          `그라인더 사용 시 주의사항
            보난자커피는 커피 생두 특유의 향미를 담아내기 위해 라이트 로스팅을 지향합니다.
            라이트 로스팅 특성상, 원두 밀도가 높아 일부 그라인더에서 분쇄가 어려울 수 있으니 구매에 참고해 주세요.`,
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
            url: `/files/bonanzacoffee_products_03.webp`,
            name: 'bonanzacoffee_products_03.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_03_detail_01.webp`,
            name: 'bonanzacoffee_products_03_detail_01.webp',
          },
          {
            url: `/files/bonanzacoffee_products_03_detail_02.webp`,
            name: 'bonanzacoffee_products_03_detail_02.webp',
          },
        ],
        content: [
          `DRIP BAG SET [3 types] + DRIP ASSIST
            구성 | 드립백 5개입 3박스 + 드립 어시스트
            원두 본연의 향미를 간직한 드립 커피 한 잔, 이제 더욱 편하게 즐기세요.`,
          `개별 포장으로 보관 및 휴대가 편리해,
            언제 어디에서든 가볍게 내려 마시기 좋은 드립백과 드립 어시스트 세트입니다.
            드립백으로 커피를 내릴 때 아랫부분이 잠겨 불편했던 분들을 위해,
            다양한 컵에 거치할 수 있는 드립 어시스트를 함께 구성했어요.
            평소 드립백 커피를 즐겨 드시는 분들께 선물용으로 추천드려요. `,
          `*보난자커피의 시그니처 원두 3종 중 원하는 종류를 골라 구성하실 수 있습니다.
            보난자 블렌드 Bonanza Blend : 초콜렛 트러플, 다크 체리
            보난자 싱글 오리진 Bonanza Single Origin: 플로럴, 베리, 백설탕
            보난자 디카페인 Bonanza Decaf : 꿀, 배, 자두
            *교환 및 반품 안내는 [문의] > [자주 묻는 질문] 통해 확인 부탁드립니다.`,
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
            name: 'bonanzacoffee_products_04.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_04_detail_01webp`,
            name: 'bonanzacoffee_products_04_detail_01.webp',
          },
          {
            url: `/files/bonanzacoffee_products_04_detail_02.webp`,
            name: 'bonanzacoffee_products_04_detail_02.webp',
          },
        ],
        content: [
          `ACME x BONANZA COFFEE MUG L [350ml]
            Ø 12cm x H 6cm`,
          `Unnecessarily Large 라지 사이즈의 머그잔과 소서 세트입니다. 보난자커피의 이상적인 라떼 레시피를 구현할 수 있는 커피잔을 만들기 위해, 클래식한 디자인과 튼튼한 내구성을 갖추어 많은 바리스타들이 사랑하는 브랜드 ACME와 함께 제작했습니다.
            또한 잔 입구가 넓어 바리스타들이 라떼 아트 실력을 보여주기에 최적화된 디자인으로, 라떼아트 챔피언들이 주로 사용하는 Vertex Bowl 라떼 잔의 특징을 반영했습니다.
            350ml 용량의 사이즈로, 따뜻한 커피를 기존 커피잔보다 더 오래동안 맛있게 즐길 수 있습니다.`,
          `*소서에 새겨진 문구는 모두 수작업으로 이루어져 제품에 따라 위치가 상이할 수 있습니다. 이로 인한 교환, 환불은 어려우니 구매 시 참고해 주세요.
            *별도 박스 구성 없이 종이 완충재로 포장해 보내드립니다.`,
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
            url: `/files/bonanzacoffee_products_05.webp`,
            name: 'bonanzacoffee_products_05.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_05_detail_01.webp`,
            name: 'bonanzacoffee_products_05_detail_01.webp',
          },
          {
            url: `/files/bonanzacoffee_products_05_detail_02.webp`,
            name: 'bonanzacoffee_products_05_detail_02.webp',
          },
        ],
        content: [
          `TEAM BONANZA T-SHIRT [WHITE]
            보난자커피 슬로건과 로고가 앞뒤로 새겨진 보난자 유니폼 반팔 티셔츠입니다.`,
          'Who in their right mind would devote their whole life to coffee?',
          `14수 면 100% 반팔티셔츠입니다.
            사이즈는 측정 방법과 위치에 따라 1~3cm 오차가 발생할 수 있습니다.
            기재된 사이즈 차이로 인한 교환 및 환불은 불가합니다.
            드라이크리닝, 손세탁이 가능하며 세탁기 이용시 찬물로 세탁하시기를 바랍니다.`,
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
            url: `/files/keepthatcoffee_products_01.webp`,
            name: 'keepthatcoffee_products_01.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_01_detail_01.webp`,
            name: 'keepthatcoffee_products_01_detail_01.webp',
          },
          {
            url: `/files/keepthatcoffee_products_01_detail_02.webp`,
            name: 'keepthatcoffee_products_01_detail_02.webp',
          },
        ],
        content: [
          `스테킹 머그컵의 원조 브랜드 킵댓
            독보적인 컬러감과 전통적인 머그의 디자인으로 어느 공간에나 잘 어울립니다.
            커피, 차 어떤 음료와도 잘 어울리고 인테리어 소품으로도 좋은 제품 입니다.`,
          `용량: 330ml / 200ml
            재질: 도자기
            사이즈: 330ml 지름 8cm 높이 9.7cm`,
          `식기세척 사용이 가능하나 로고 및 제품 스크레치 현상이 발생할 수 있습니다.
            도자기 제품은 기포, 돌기, 파임, 찍힘 색 번짐은 자연스러운 유약 흐름 등의 특성이 있을수 있으며,
            이는 불량이 아니므로 이로 인한 사항은 단순 변심으로 교환/환불이 되지 않습니다.`,
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
            url: `/files/keepthatcoffee_products_02.webp`,
            name: 'keepthatcoffee_products_02.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_02_detail_01.webp`,
            name: 'keepthatcoffee_products_02_detail_01.webp',
          },
          {
            url: `/files/keepthatcoffee_products_02_detail_02.webp`,
            name: 'keepthatcoffee_products_02_detail_02.webp',
          },
        ],
        content: [
          `에스프레소 본질적인 고유의 특성을 잃지 않기 위한 고전적인 에스프레소 블렌드를 재해석 하였습니다.
            스터코 라이언중 Strong(강하다) 이라는 명칭을 담당하는 원두로써 무게감에 큰 중점을 두었습니다.
            강배전 원두의 특징인 탄맛 또는 과도한 쓴맛만 강조되는 것을 방지하며, 건식과 수세식 가공방식의 원두를
            적절히 조합하여 마일드하면서도 강배전 특유의 무게감을 잃지 않는 결과물을 만들어냈습니다. `,
          `원산지: Brazil 50%, Ethiopia 35%, Colombia 15%
            가공방식:  Natural 50%, Washed 50%(Mix)`,
          `Cup note
            caramel, almond, dark chocolate, good body
            달콤 쌉싸름함과 묵직한 바디감을 자랑합니다. 남녀노소 연령대를 불문한 대중적인 커피 입니다.`,
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
            url: `/files/keepthatcoffee_products_03.webp`,
            name: 'keepthatcoffee_products_03.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_03_detail_01.webp`,
            name: 'keepthatcoffee_products_03_detail_01.webp',
          },
          {
            url: `/files/keepthatcoffee_products_03_detail_02.webp`,
            name: 'keepthatcoffee_products_03_detail_02.webp',
          },
        ],
        content: [
          `생두도 하나의 농산품이며, 수확시기와 제철이 존재합니다.
            매 시기 좋은 재료들을 가지고 산뜻한 커피를 만들고 있습니다.`,
          `스터코 라인업 중 Smooth(부드러운) 라는 명칭을 담당하는 원두로써 질감과 향에 큰 중점을 두었습니다.
            로스팅시 열의 역활을 확실하게 구분하여 무너지거나 특징없는 마일드함만을 추구하는것이 아닌, 1차 크랙 이후
            2차 크랙 중간지점의 구간을 충분한 시간으로 구성하여 원두의 향미, 산미, 단맛, 밸런스를 살릴 수 있도록 구현하였습니다.`,
          `원산지: Brazil 55%, Kenya 45%
            가공방식:  Natural 55%, Washed 45%`,
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
            url: `/files/keepthatcoffee_products_04.webp`,
            name: 'keepthatcoffee_products_04.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_03_detail_01.webp`,
            name: 'keepthatcoffee_products_03_detail_01.webp',
          },
          {
            url: `/files/keepthatcoffee_products_03_detail_02.webp`,
            name: 'keepthatcoffee_products_03_detail_02.webp',
          },
        ],
        content: [
          `생두도 하나의 농산품이며, 수확시기와 제철이 존재합니다.
            매 시기 좋은 재료들을 가지고 산뜻한 커피를 만들고 있습니다.`,
          `스터코 라인업 중 Smooth(부드러운) 라는 명칭을 담당하는 원두로써 질감과 향에 큰 중점을 두었습니다.
            로스팅시 열의 역활을 확실하게 구분하여 무너지거나 특징없는 마일드함만을 추구하는것이 아닌, 1차 크랙 이후
            2차 크랙 중간지점의 구간을 충분한 시간으로 구성하여 원두의 향미, 산미, 단맛, 밸런스를 살릴 수 있도록 구현하였습니다.`,
          `원산지: Brazil 55%, Kenya 45%
            가공방식:  Natural 55%, Washed 45%`,
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
            url: `/files/milestonecoffee_products_01.webp`,
            name: 'milestonecoffee_products_01.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_01-1.webp`,
            name: 'milestonecoffee_products_01-1.webp',
          },
          {
            url: `/files/milestonecoffee_products_01-2.webp`,
            name: 'milestonecoffee_products_01-2.webp',
          },
        ],
        content: [
          `THE SIMPLEST WAY TO MAKE QUALITY FILTER COFFEE.
            마일스톤 커피 드립백
            This Dripbag is super simple and delicious, just need hot water.
            Perfect for home, the campsite, the office, everywhere!
            "쉽고 맛있게!
            마일스톤 커피 드립백 하나면 어디서든 쉽고 맛있게, 스페셜티 드립커피를 즐길 수 있어요."`,
          `박스가 아닌 낱개로 구입하실 수 있는 제품입니다.
            싱글오리진의 경우 이번 달 라인업으로 준비됩니다.`,
          `드립백 뒷면에는 드시는 방법이 그려져 있어 쉽게 따라하실 수 있습니다.`,
        ],
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
            url: `/files/milestonecoffee_products_02.webp`,
            name: 'milestonecoffee_products_02.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_02-1.webp`,
            name: 'milestonecoffee_products_02-1.webp',
          },
          {
            url: `/files/milestonecoffee_products_02-2.webp`,
            name: 'milestonecoffee_products_02-2.webp',
          },
        ],
        content: [
          `마일스톤의 시그니처 블랜드인 하나비블랜드는
            마일스톤에서 기본 블랙커피로 제공되는 원두입니다.
            고소함과 향긋함을 가지고 있고 전체적인 밸런스가 좋습니다.
            첫맛의 고소함이 낮은톤의 산미를 묵직하게 눌러주면서 깔끔하게 남아있는 후미가 인상적입니다.`,
          `초콜릿과 견과류를 넘나드는 고소함에 낮은 톤의 산미를 담아 맛의 균형감이 좋습니다.
            불꽃놀이 라는 이름을 가진 만큼 다채로운 맛이 조화롭게 나타납니다.
            무엇보다도 좋은 밸런스와 바디감이 일관되게 유지되어,
            누구나 편하게 마실 수 있습니다.`,
          `*생두 가격 대폭 인상으로 인해 소비자가가 다소 변동되었습니다.`,
        ],
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
        name: '마일스톤 커피 원두 - 아키 블렌드 1kg',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/milestonecoffee_products_03.webp`,
            name: 'milestonecoffee_products_03.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_03-1.webp`,
            name: 'milestonecoffee_products_03-1.webp',
          },
          {
            url: `/files/milestonecoffee_products_03-2.webp`,
            name: 'milestonecoffee_products_03-2.webp',
          },
        ],
        content: [
          `매장에서 기본 라떼 베이스로 제공되는 원두입니다.
            잘익은 오렌지와 바닐라시럽과 같은 단맛이 느껴지는 커피입니다.
            특히 우유나 오트밀크와 만났을 때 한층 더 나타나는 고소한 풍미가 인상적입니다.
            핸드드립이나 아메리카노로 드실 때에는 향긋하게 드실 수 있습니다.`,
          `지친 일상 속에서 작은 선물같은 기분 좋은 단맛과 향긋함
             그리고 깔끔함에 초점을 맞췄습니다.`,
          `*생두 가격 대폭 인상으로 인해 소비자가가 다소 변동되었습니다.`,
        ],
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
            url: `/files/milestonecoffee_products_04.webp`,
            name: 'milestonecoffee_products_04.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_04-1.webp`,
            name: 'milestonecoffee_products_04-1.webp',
          },
          {
            url: `/files/milestonecoffee_products_04-2.webp`,
            name: 'milestonecoffee_products_04-2.webp',
          },
        ],
        content: [
          `올해로 10주년을 맞이하는 마일스톤의 2024년을 기념하는 의미로 만들어진 '10주년 블렌드'입니다.
            10년동안 우리의 고민은 어떻게 하면 즐겁게 일할지, 어떤 마음가짐으로 임할지,
            어떠한 환대로 대할지, 더 맛있는 커피를 위해 무엇을 해야할지였습니다.
            그 고민을 알아봐주시기라도 하듯 많은 사랑을 받았고, 그 사랑에 보답하고자 우리의 10주년 스페셜 블렌드로 만들었습니다.`,
          `'마일스톤스러움'을 커피로 녹여내면 어떤 맛일까 고민하다 우리 팀의 이야기를 담았습니다.
            팀 마일스톤은 활기찬 에너지로 가득차 있습니다.
            커피라는 것은 결국 사람을 위한 것이고, 사람이 가장 중요하기에
            우리의 팀은 늘 친절하고 열심히 일하면서도 프로페셔널함을 잃지 않습니다.
            각양각색의 매력과 능력을 가진 사람들이 커피라는 공통점으로 모여
            '마일스톤' 이라는 원 팀으로 움직이는 우리처럼,
            이 커피는 다채로운 맛이 모여 조화롭고 완성도 높은 풍미를 가지고 있습니다.`,
          `복합적인 과일주스같은 이 커피는 청사과와 키위의 싱그러움, 그리고 잘 익은 베리류의 향미가 좋습니다.
            흑설탕같은 묵직한 단맛과 고소함, 편안함을 갖고 있기도 합니다.
            특히, 한 모금 머금었을 때 느껴지는 실키한 질감과 바디감이 인상적입니다.
            지나온 10년을 축하하며, 다가올 10년을 기대하는 마음으로 만들었습니다.
            우리의 커피를 사랑해주시는 모든 분들께 항상 감사드리며,
            우리의 10주년 블렌드가 오늘의 여러분께 소박하지만 확실한 행복이 되었으면 합니다.
            
            [Tasting Notes]
            청사과, 흑설탕, 키위, 과일주스, 라운드바디
            
            [Roasting Point]
            약배전(light-roasted)
            
            [Espresso Guide]
            바스켓 사이즈: 18g(IMS기준)
            추출온도:92~93도
            도정량: 20g
            추출시간: 17~20초 내외
            추출량:26~30g
            
            [Brewing Guide]
            기준: 하리오 V60(푸어오버)
            추출온도:92~93도
            도정량: HOT 16g/ICED 20g
            물 양: HOT 240g/ICED 180g`,
        ],
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
            url: `/files/milestonecoffee_products_05.webp`,
            name: 'milestonecoffee_products_05.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/milestonecoffee_products_05-1.webp`,
            name: 'milestonecoffee_products_05-1.webp',
          },
          {
            url: `/files/milestonecoffee_products_05-2.webp`,
            name: 'milestonecoffee_products_05-2.webp',
          },
        ],
        content: [
          `마일스톤 로고 텀블러 12oz (Black / White)
            마일스톤 커피 로스터스의 로고가 새겨진 첫번째 텀블러입니다.
            글로벌 브랜드 ‘ MIIR ‘ 사의 베큠 인슐레이티드와 함께하였습니다.
            
            "Timeless , Function, Beautiful Simple, Sustainable."
            
            THERMO 3D 이중벽 진공 단열재 기술로 제작된 베큠 인슐레이터 스테인레스 텀블러는 뚜껑을 닫아 음료를 더 시원하고 따뜻하게 즐기 실 수 있으며, 일상생활이나 여행하실 때 편리하게 사용하실 수 있습니다.
            
            (※tip! 마일스톤 커피 텀블러를 가지고 매장에 방문하시면 전체금액의 -1000원 DC 해드려요!)`,
          `보온 보냉에 탁월한 이중벽 진공 단열재 기술로 깨지지 않고 위생적인
            스테인레스 소재를 사용하여 마일스톤 커피를 더욱 맛있게 오래 즐기실 수 있습니다.
            
            차가운 음료나 뜨거운 음료를 넣었을 경우 겉면이 쉽게 뜨거워지거나 습기가 차지 않습니다.
            입구가 넓어 손 쉽게 청소하실 수 있고 뚜껑은 여닫기 쉬운 슬라이드로 되어 있습니다.`,
          `사이즈 : 직경 70 * 높이 147mm
            용량 : 12oz(355ml)
            재질 : 뚜껑- 폴리시클로헥산-1, 4-디메틸렌테레프탈레이트, 실리콘
            본체 - 18-8 스테인레스
            원산지 : 중국
            
            취급 시 주의사항
            
            - 식기세척기 사용이 불가합니다.
            - 본 제품은 완전 밀폐용기가 아닙니다.
            강한 흔들림 발생시에 음료가 새어나올 수 있습니다.
            제품 목적 이외의 용도로 사용할 경우 사고 발생에 주의해주십시오.
            - 스텐레스 가열의 경우 화상 및 변색이 있을 수 있습니다.
            - 유리, 도자기의 경우 무리한 가열 및 냉동하여 사용시 파열 및 변색이 있을 수 있습니다.
            - 강한 충격시 파손될 수 있습니다.`,
        ],
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
            url: `/files/protokoll_products_01.webp`,
            name: 'protokoll_products_01.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_01-1.webp`,
            name: 'protokoll_products_01-1.webp',
          },
          {
            url: `/files/protokoll_products_01-2.webp`,
            name: 'protokoll_products_01-2.webp',
          },
        ],
        content: [
          `Volcan Azul은 해발 1,500m 이상에 위치한 농장으로, 19세기부터 현재까지 5대째 내려오는 전통을 자랑합니다.
            비옥한 화산 토양과 따뜻한 날씨가 뛰어난 품질의 커피를 생산하기 적합해 다양한 품종을 심고 있습니다.
            또한 이 농장은 체리를 5일 동안 탱크에 넣은 후 12일간 천천히 건조하는 등 특별한 가공 방식을 꾸준히 연구하고 있습니다.
            그 결과로 2017년 COE 2위, 2018년 COE 34위, 그리고 2020년 COE 4위와 12위를 수상하였습니다.
            
            이 커피는 사과, 자두, 라즈베리와 같은 빨간색 계열의 과일들이 잘 연상됩니다.
            기존 코스타리카 커피에서 연상되는 혹은 프로토콜에서 다양하게 선보인 언에어로빅 커피들에 비해 조금 더 깔끔하고 선명한 뉘앙스의 커피일 것입니다.`,
          `원산지 Costa Rica
            
            원종 Ethiopian
            
            지역 Volcan Azul
            
            고도 1,500m
            
            가공 Anaerobic Natural
            
            
            
            커핑노트 Cupping Note
            
            사과 ・ 자두 ・ 라즈베리 ・ 와인
            
            pple ・ Plum ・ Raspberry ・ Wine`,
          `배송 Delivery
            
            프로토콜의 모든 원두는 로스팅 후 7일 이내의 것만 판매합니다.
            
            오후 2시 이전 결제완료건에 한해 익일 출고됩니다.
            
            배송 완료까지 1-2 영업일 소요됩니다.`,
        ],
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
            url: `/files/protokoll_products_02.webp`,
            name: 'protokoll_products_02.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_02-1.webp`,
            name: 'protokoll_products_02-1.webp',
          },
          {
            url: `/files/protokoll_products_02-2.webp`,
            name: 'protokoll_products_02-2.webp',
          },
        ],
        content: [
          `프로토콜 캡슐 커피가 출시되었습니다.
            집에서 커피가 마시고 싶을 때
            드립백으로 많은 분들의 커피 내리기 귀찮음을 해결해 드리고 싶었지만
            역시 집에서는 캡슐커피가 최고인듯합니다.
            버튼 몇 번으로 쉽고 간편하게 프로토콜 커피를 즐겨보시길요.
            네스프레소 오리지널 머신만 호환 가능합니다. 캡슐 구매 전 캡슐의 타입과 호환 가능 여부를 꼭 확인해 주시기 바랍니다.
            (네스프레소 버츄오, 일리, 돌체구스토 호환 불가)
            
            6g * 10ea`,
          `매일 한 잔의 커피만 마셔야 한다면
            어떤 커피여야 하는가에 관한 고민에서 탄생한
            프로토콜의 첫 번째 블렌드
            ‘SUPER NORMAL’ 입니다.
            
            묵직하되 그 묵직함이 과하지 않고 선명한 단맛을 지녔다는 것이
            이 블렌드의 특징입니다.
            
            원두에서 느껴지는 다크한 초콜릿 맛과
            미미한 산미가 좋은 밸런스를 느끼게 합니다.
            데일리 커피로서 역할을 잘 해내리라 자부합니다.
            
            소비기한 : 상품후면 별도표시
            
            
            
            커핑노트 Cupping Note
            
            다크 초콜릿 ・ 구운 아몬드 ・ 흑설탕 ・ 묵직함
            
            Dark Chocolate ・ Roasted Almond ・ Brown Sugar ・ Good Body
            
            
            
            블렌딩 Blending
            Brazil 40%, Colombia 40%, Indonesia 20%`,
          `배송 Delivery
            
            프로토콜의 모든 원두는 로스팅 후 7일 이내의 것만 판매합니다.
            
            오후 2시 이전 결제완료건에 한해 익일 출고됩니다.
            
            배송 완료까지 1-2 영업일 소요됩니다.`,
        ],
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
            url: `/files/protokoll_products_03.webp`,
            name: 'protokoll_products_03.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_03-1.webp`,
            name: 'protokoll_products_03-1.webp',
          },
          {
            url: `/files/protokoll_products_03-2.webp`,
            name: 'protokoll_products_03-2.webp',
          },
        ],
        content: [
          `프로토콜의 블렌드 SUPER NORMAL을 드립백에 담았습니다.
            언제 어디서든 대충 물 넣어도 좀 맛있는 커피.
            그래서 나 커피 좀 하는 사람인 듯 착각하게 만들어 줄 수 있는 커피.
            무엇보다 집에서도 프로토콜 맛 느낌 나는 커피.
            홈 스위트 홈 커피 타임’ 프로토콜 드립백이 해드릴게요.
            12g x 6ea`,
          `매일 한 잔의 커피만 마셔야 한다면
            어떤 커피여야 하는가에 관한 고민에서 탄생한
            프로토콜의 첫 번째 블렌드
            ‘SUPER NORMAL’ 입니다.
            
            묵직하되 그 묵직함이 과하지 않고 선명한 단맛을 지녔다는 것이
            이 블렌드의 특징입니다.
            
            원두에서 느껴지는 다크한 초콜릿 맛과
            미미한 산미가 좋은 밸런스를 느끼게 합니다.
            데일리 커피로서 역할을 잘 해내리라 자부합니다.
            
            소비기한 : 상품후면 별도표시
            
            
            
            커핑노트 Cupping Note
            
            다크 초콜릿 ・ 구운 아몬드 ・ 흑설탕 ・ 묵직함
            
            Dark Chocolate ・ Roasted Almond ・ Brown Sugar ・ Good Body
            
            
            
            블렌딩 Blending
            Brazil 40%, Colombia 40%, Indonesia 20%`,
          `배송 Delivery
            
            프로토콜의 모든 원두는 로스팅 후 7일 이내의 것만 판매합니다.
            
            오후 2시 이전 결제완료건에 한해 익일 출고됩니다.
            
            배송 완료까지 1-2 영업일 소요됩니다.`,
        ],
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
            url: `/files/protokoll_products_04.webp`,
            name: 'protokoll_products_04.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_04-1.webp`,
            name: 'protokoll_products_04-1.webp',
          },
          {
            url: `/files/protokoll_products_04-2.webp`,
            name: 'protokoll_products_04-2.webp',
          },
        ],
        content: [
          `프로토콜의 로고가 새겨진 리유저블 컵입니다.
            집, 회사 등 어디서나 사용하기 편한 컵을 만들어 보고 싶은 욕심에 출시했습니다.
            프로토콜 하면 떠올릴 수 있는 블랙과 화이트로 말이지요.
            
            (저는 블랙이 좋지만 많은 분들은 화이트를 좋아합니다.)`,
          `프로토콜 텀블러와 마찬가지로,
            이 컵을 지니고 프로토콜 매장을 방문하면 프로토콜 멤버들에게 감동을 선사하는 기능도 탑재되어 있습니다.
            
            용량: 473ml
            온도: -20도(내냉) ~ 120도(내열)
            재질: 무독성PP `,
          `배송 Delivery
            
            프로토콜의 모든 원두는 로스팅 후 7일 이내의 것만 판매합니다.
            
            오후 2시 이전 결제완료건에 한해 익일 출고됩니다.
            
            배송 완료까지 1-2 영업일 소요됩니다.`,
        ],
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
            url: `/files/protokoll_products_05.webp`,
            name: 'protokoll_products_05.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/protokoll_products_05-1.webp`,
            name: 'protokoll_products_05-1.webp',
          },
          {
            url: `/files/protokoll_products_05-2.webp`,
            name: 'protokoll_products_05-2.webp',
          },
        ],
        content: [
          `프로토콜 로고가 새겨진 스테인리스 텀블러입니다.
            집, 회사 등 어디서나 사용하기 편한 컵을 만들어 보고 싶은 욕심에 출시했습니다.
            빨대가 내장되어 있고 보온,보냉이 가능합니다.`,
          `프로토콜 리유저블 컵과 마찬가지로,
            이 텀블러를 지니고 프로토콜 매장을 방문하면 프로토콜 멤버들에게 감동을 선사하는 기능도 탑재되어 있습니다.
            
            용량: 500ml
            사이즈: 7 X 19cm
            재질: 스테인리스 `,
          `배송 Delivery
            
            프로토콜의 모든 원두는 로스팅 후 7일 이내의 것만 판매합니다.
            
            오후 2시 이전 결제완료건에 한해 익일 출고됩니다.
            
            배송 완료까지 1-2 영업일 소요됩니다.`,
        ],
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
        price: 11000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'NEST hoji 네스트 호지차 [원산지:국산(경상남도 하동군)]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/nest_products_01.webp`,
            name: 'nest_products_01.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/nest_products_01-1.webp`,
            name: 'nest_products_01-1.webp',
            orgName: '',
          },
          {
            url: `/files/nest_products_01-2.webp`,
            name: 'nest_products_01-2.webp',
            orgName: '',
          },
        ],
        content: [
          `호지차는 일반적으로 일본에서 주로 마시는 차입니다.
            녹차를 볶아서 만들기 때문에 찻잎의 색이 진한 갈색이며 고소한 향이 특징입니다.
            
            네스트의 호지차는 한국의 차 시배지인 하동에서 만들어졌습니다.
            찻잎이 아니라 어린 차 나무의 줄기로 만들어져서
            찻잎의 형태가 길쭉한 바늘모양입니다.
            찻잎과는 또 다른 풍미를 가득 느끼실 수 있습니다.`,
          `네스트는 차 tea를 본질로 시작한 공간입니다.
            
            다양한 기호 식품들 사이에서
            우리의 차가 바로 설자리를 고민하고
            여러분에게 더 좋은 차를 소개하겠습니다.
            
            지속 가능한 라이프 스타일의 둥지,
            be rest, in our nest
            
            
            
            떫은맛이 거의 없으며 로스팅 된 차의 고소한 맛과 풍미가 특징입니다.
            
            진하게 우려내어도 떫은맛이 연하기 때문에
            여름에 진하게 우려 얼음과 같이 희석해서 드시는 것도 추천드립니다.
            
            서촌 네스트 카페테리아 매장에서는 호지 밀크티로도 즐기실 수 있습니다.`,
          `틴 타입 24g
            (약 8회 분량)
            
            
            
            
            유리병/틴/파우치 3가지 타입에서
            틴 타입 단독으로 리뉴얼 되었습니다.
            구매에 참고 부탁드립니다.`,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['goods'],
          brand: '네스트',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 6,
        price: 11000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'NEST ssug 네스트 쑥차 [원산지:국산(경상남도 하동군)]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/nest_products_02.webp`,
            name: 'nest_products_02.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/nest_products_02-1.webp`,
            name: 'nest_products_02-1.webp',
            orgName: '',
          },
          {
            url: `/files/nest_products_02-2.webp`,
            name: 'nest_products_02-2.webp',
            orgName: '',
          },
        ],
        content: [
          `하루를 마무리하는 시간에 잘 어울리는 네스트 쑥차입니다.
            매년 3월 초 손으로 직접 채취한 어린쑥잎으로 만들어낸 차입니다.
            
            여리고 고운 쑥잎에 녹차의 제다 방식을 접목해 만들어
            부드럽고 구수한 맛이 특징입니다.
            
            
            여린쑥이 가지고 있는 땅의 올곧고 당찬 기운을
            따뜻한 차 한 잔으로 느껴보시길 추천드립니다. 
            하루를 마무리하는 나를 위한 휴식에 네스트 쑥차와 함께하세요.`,
          `네스트는 차 tea를 본질로 시작한 공간입니다.
            
            다양한 기호 식품들 사이에서
            우리의 차가 바로 설자리를 고민하고
            여러분에게 더 좋은 차를 소개하겠습니다.
            
            지속 가능한 라이프 스타일의 둥지,
            be rest, in our nest
            
            
            
            네스트 쑥차 원물은 어린 쑥을 그대로 말려낸 모습입니다.
            어린 쑥이 가지고 있는 향긋함과 부드러운 털이 그대로 있습니다.
            
            수색은 투명하고 강한 갈색입니다.
            사용한 거름망에 따라서 어린 쑥이 가지고 있는 호(잎 표면의 털)가
            찻물 표면에 떠 있을 수 있습니다. 어린잎일수록 호가 많으며
            섭취에는 문제가 없습니다.
            (우리는 조건과 시간에 따라서 수색은 다양하게 나타날 수 있습니다.)`,
          `틴 타입 16g
            (약 8회 분량)
            
            
            
            
            유리병/틴/파우치 3가지 타입에서
            틴 타입 단독으로 리뉴얼 되었습니다.
            구매에 참고 부탁드립니다.`,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['goods'],
          brand: '네스트',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 6,
        price: 14000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'bird 티 인퓨저',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/nest_products_03.webp`,
            name: 'nest_products_03.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/nest_products_03-1.webp`,
            name: 'nest_products_03-1.webp',
            orgName: '',
          },
          {
            url: `/files/nest_products_03-2.webp`,
            name: 'nest_products_03-2.webp',
            orgName: '',
          },
        ],
        content: [
          `티백 제품 외의 잎차를 우려 마실 때
            사용하기 좋은 스테인리스 인퓨저 입니다.
            차를 우리지 않아도 가만히 곁에 두면
            눈길이 스칠 때마다 귀여운 모습에 흐뭇하기도 합니다-!`,
          `네스트는 차 tea를 본질로 시작한 공간입니다.
            
            다양한 기호 식품들 사이에서
            우리의 차가 바로 설자리를 고민하고
            여러분에게 더 좋은 차를 소개하겠습니다.
            
            지속 가능한 라이프 스타일의 둥지,
            be rest, in our nest
            
            
            
            1인 분량의 차를 우릴 수 있는
            아주 작은 사이즈입니다.
            
            구매 전 꼭 상세 사이즈를 확인해 주세요.`,
          `소형 인퓨저 특성상
            잎이 많이 부풀어나는 차(철관음 등) 또는
            아주 잘게 분쇄된 아쌈, 루이보스 등의 차는 추천하지 않습니다.
            
            중간 정도로 분쇄된 블렌딩 티에 가장 적합합니다.`,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['joinus'],
          brand: '네스트',
          sort: 4,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 6,
        price: 30000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '오리지널 리프티 샘플러 [원산지:국산(경상남도 하동군)]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/nest_products_04.webp`,
            name: 'nest_products_04.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/nest_products_04-1.webp`,
            name: 'nest_products_04-1.webp',
            orgName: '',
          },
          {
            url: `/files/nest_products_04-2.webp`,
            name: 'nest_products_04-2.webp',
            orgName: '',
          },
        ],
        content: [
          `네스트 오리지널 리프티 대표 상품 중
            8종의 티백으로 구성된 샘플러입니다.
            
            티백 구성은 계절에 따라 변경됩니다.
            
            
            네스트는 다른 곳에서 만나기 어려운
            한국의 좋은 차를 쉬운 방법으로 소개합니다.
            
            좋은 재료와 바른 방법이라는 본질에 집중하면
            방법과 형태는 얼마든지 쉬워도 된다고 생각합니다.
            
            
            어려운 것은 저희가 고민할 테니
            편안히 좋은 차를 즐겨주세요.`,
          `네스트는 차 tea를 본질로 시작한 공간입니다.
            
            다양한 기호 식품들 사이에서
            우리의 차가 바로 설자리를 고민하고
            여러분에게 더 좋은 차를 소개하겠습니다.
            
            지속 가능한 라이프 스타일의 둥지,
            be rest, in our nest
            
            
            
            
            본품 내부에는 네스트 오리지널 리프티
            티백 8종이 담겨있습니다.
            
            단정한 패키지로 어디에나 어울리고
            다 드실 때까지 본품 그대로 보관하시기에도 좋습니다.
            
            다 드신 본품 패키지는 중간 지지대를 제거하시고
            오래 보관하고 싶은 편지나 소품을 담아두시기에도 좋습니다.`,
          `선물용으로 많이 찾아주시길 바라는 마음을 담아
            구성했습니다.
            
            디카페인 차 4개와
            카페인이 포함된 네스트 블렌딩 티 4개로 구성되어 있습니다.`,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['joinus'],
          brand: '네스트',
          sort: 4,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 6,
        price: 10000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'NEST homemade granola 홈메이드 그래놀라 [원산지:상세설명에 표시]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/nest_products_05.webp`,
            name: 'nest_products_05.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/nest_products_05-1.webp`,
            name: 'nest_products_05-1.webp',
            orgName: '',
          },
          {
            url: `/files/nest_products_05-2.webp`,
            name: 'nest_products_05-2.webp',
            orgName: '',
          },
        ],
        content: [
          `네스트 홈메이드 그래놀라는
            티카페 네스트의 브런치 메뉴중
            요거트 플레이트의 메인 재료입니다.
            
            네스트 키친에서 매일 처음부터 직접 구워내는
            그래놀라로 본연의 재료를 그대로 느끼실 수 있습니다.
            
            가장 큰 특징으로
            압착하지 않은 귀리를 사용합니다.
            
            시중의 대부분 그래놀라는 압착 귀리를 메인 재료로
            다양한 재료가 혼합됩니다.
            압착 귀리 특유의 단단함과 맛은 덜어내고
            
            가볍고
            바삭하고
            고소하게 드실 수 있는점이 매력입니다.`,
          `카페 네스트를 찾아주시는
            손님분들의 관심과 요청으로
            드 디 어
            그래놀라가 온라인 스토어에 찾아왔습니다.
            
            
            
            
            ingredients
            재료
            
            
            귀리, 아몬드, 호두, 호박씨, 해바라기씨
            메이플시럽, 비정제설탕`,
          `보관 방법
            
            밀폐 후 서늘한 곳에 보관해주세요
            개봉 후에는 최대한 빨리 섭취해주시고
            습기가 걱정되신다면 냉동 보관을 추천드립니다.
            
            
            
            권장 섭취기한
            3개월 `,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '네스트',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 40000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[매뉴팩트커피] Oreum / 오름',
        quantity: 100,
        buyQuantity: 0,
        mainImages: [
          {
            url: `/files/manufactcoffee_products_01.webp`,
            name: 'manufactcoffee_products_01.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/manufactcoffee_products_01-1.webp`,
            name: 'manufactcoffee_products_01-1.webp',
            orgName: '',
          },
          {
            url: `/files/manufactcoffee_products_01-2.webp`,
            name: 'manufactcoffee_products_01-2.webp',
            orgName: '',
          },
        ],
        content: [
          `# 원산지와 블랜딩 비율 : 브라질 60%, 에티오피아20%, 탄자니아20%
            # 컵 노트 : 다크초콜릿, 카라멜, 메이플 시럽, 당밀, 맥아, 너트, 민트 등
            # 구분 : 아라비카
            
            # 품종 : Red Catuai, Heirloom, Bourbon Kent
            # 애그트론 값 : 분쇄전 42 / 분쇄후 45`,
          `한라산과 더불어 산봉우리라고 불리우는 작은 산, 오름은 산의 정상까지 오르기가 쉽고 수고에 비해 산이 주는 만족감이 매우 큰 장소입니다. 300개가 넘는 제주의 오름은 어느 정상에 올라가더라도 한라산을 비롯한 사방의 풍경과 끝없이 펼쳐진 바다의 풍광을 허락합니다. 매뉴팩트의 네 번째 블랜딩 커피인 '오름'은 그 작은 산이 주는 의미를 바탕으로 사용자에게 쉽고 만족감이 높은 커피를 제공하기 위해 만들어졌습니다.
            
            좋은 맛을 기본으로 합리적 가격과 품질을 더하고 더불어 운용의 안정성 등의 사용자가 필요하고 요구하는 부분들을 채움으로 기업의 성장을 도모케 하는 마음을 커피에 담고자 하였습니다.
            
            '오름'은
            첫째, 제주의 오름이 가지는 의미를 뜻하며
            둘째, '오르다'의 어원을 통해 커피의 품질 향상과 사용자의 매출 및 브랜드의 가치가 상승하길 기대하는 마음을 담고
            셋째, '옳음'이라는 동일한 발음의 뜻을 따라 우리의 커피를 선택한 것이 최종적으로 사업자에게 좋은 선택이었길 바라는 의미를
            가지고 있습니다.`,
          `블랜딩 오름은 커피하면 떠오르는 브라질과 에티오피아를 베이스로 하여 초콜릿과 고소하고 풍부한 단맛을 표현 했으며, 탄자니아 커피를 더하여 커피의 좋은 쓴맛과 풍부한 향을 만들었습니다. 따라서 오름 블렌딩은 기본기가 탄탄한 커피를 통해 기업의 성장과 안정성을 영위 하고자 하는 사업자분들과 매일 같이 맛있는 커피를 즐기고자 하는 소비자에게 적합한 커피입니다.`,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '매뉴팩트커피',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 18000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '[매뉴팩트커피] ColdBrew Once / 콜드브루 온세 _11주년 기념 시즌 블랜딩 콜드브루 커피',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/manufactcoffee_products_02.webp`,
            name: 'manufactcoffee_products_02.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/manufactcoffee_products_02.webp`,
            name: 'manufactcoffee_products_02.webp',
            orgName: '',
          },
          {
            url: `/files/manufactcoffee_products_02-1.webp`,
            name: 'manufactcoffee_products_02-1.webp',
            orgName: '',
          },
        ],
        content: [
          `# Origin : Colombia, Honduras | 콜롬비아, 온두라스
            # Cup note : Apple, Cinnamon, Mango, Grape, Spice, Chocolate, Chai | 사과, 시나몬, 망고, 포도, 향신료, 초콜릿, 차이
            # Information : Agtron 56/60 | 애그트론 56/60
            Colombia Las Flores 40% : Pink Bourbon, Anaerobic Washed | 콜롬비아 라스 플로레스 40%, 핑크 버번, 무산소 워시드 가공
            # Honduras El Monarca 60% : IH90, Washed | 온두라스 엘 모나르카 60%,IH90, 워시드 가공
            # 저온 자외선 살균`,
          `매뉴팩트의 콜드브루는 가열하지 않은 정수물을 정해진 시간 동안 분쇄된 원두에 얹어 대기압상에서 커피가 가지고 있는 원래의 성분을 추출해낸 액상커피 입니다. 매뉴팩트 콜드브루 시스템은 독자적 개발에 의한 양조 기술로 다양한 산지 커피의 적절한 로스팅 정도를 파악하여 일관성 있는 최적의 커피를 만들어내고 있습니다.`,
          `온수로 추출하는 커피와는 다르게 차가운 물로 추출하는 콜드브루는 카페인 용해가 비교적 적어 몸에 부담이 덜하며 성분과 향의 파괴가 최소화 되므로 향미의 깊이가 있고 떫은 맛을 내는 탄닌산이 적어 부드럽고 뒷맛이 깨끗합니다.  콜드브루는 특성상 장기간 보관(냉장 보관시 3개월)이 가능 하므로 오랫동안 음료를 즐기실 수 있습니다. `,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '매뉴팩트커피',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 18000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '[매뉴팩트커피] ColdBrew Guatemala Decaf / 콜드브루 과테말라 디카페인',
        quantity: 310,
        buyQuantity: 310,
        mainImages: [
          {
            url: `/files/manufactcoffee_products_03.webp`,
            name: 'manufactcoffee_products_03.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/manufactcoffee_products_03-1.webp`,
            name: 'manufactcoffee_products_03-1.webp',
            orgName: '',
          },
          {
            url: `/files/manufactcoffee_products_03-2.webp`,
            name: 'manufactcoffee_products_03-2.webp',
            orgName: '',
          },
        ],
        content: [
          `# Origin : Guatemala
            # Cup note : Toast, Walnut, Brown Sugar, Dark Chocolate, Smoky
            # Information : Antigua | Arabica | Caturra, Bourbon | Natural CO2
            # Processing | 저온 자외선 살균`,
          `매뉴팩트의 콜드브루는 가열하지 않은 정수물을 정해진 시간 동안 분쇄된 원두에 얹어 대기압상에서 커피가 가지고 있는 원래의 성분을 추출해낸 액상커피 입니다. 매뉴팩트 콜드브루 시스템은 독자적 개발에 의한 양조 기술로 다양한 산지 커피의 적절한 로스팅 정도를 파악하여 일관성 있는 최적의 커피를 만들어내고 있습니다. `,
          `온수로 추출하는 커피와는 다르게 차가운 물로 추출하는 콜드브루는 카페인 용해가 비교적 적어 몸에 부담이 덜하며 성분과 향의 파괴가 최소화 되므로 향미의 깊이가 있고 떫은 맛을 내는 탄닌산이 적어 부드럽고 뒷맛이 깨끗합니다.  콜드브루는 특성상 장기간 보관(냉장 보관시 3개월)이 가능 하므로 오랫동안 음료를 즐기실 수 있습니다. `,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: '매뉴팩트커피',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 15000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '[매뉴팩트커피] Flat White Glass / 플랫화이트 컵',
        quantity: 310,
        buyQuantity: 310,
        mainImages: [
          {
            url: `/files/manufactcoffee_products_04.webp`,
            name: 'manufactcoffee_products_04.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/manufactcoffee_products_04-1.webp`,
            name: 'manufactcoffee_products_04-1.webp',
            orgName: '',
          },
          {
            url: `/files/manufactcoffee_products_04-2.webp`,
            name: 'manufactcoffee_products_04-2.webp',
            orgName: '',
          },
        ],
        content: [
          `다양한 용도로 사용 가능한 유리컵 입니다.
            내열 소재로 뜨거운 음료와 전자레인지에 사용 가능 합니다.
            
            용량 : 160ml
            사이즈 : 지름 71mm / 높이 76mm
            원산지 : 프랑스`,
          `* 구매시 주의 사항
            
            수작업 제품 특성상
            _ 표면 또는 바닥면이 고르지 못하거나 기포가 있을 수 있습니다.
            _ 로고의 인쇄 위치가 상이 할 수 있습니다.
            _ 모니터에 따라 컵의 색상이 다를 수 있습니다.
            
            상기 사항으로 반품 및 교환을 원하실 경우 택배 비용이 발생 할 수 있으니 구매 시 참고하여 주시기 바랍니다.`,
          `* 로고는 일반적 사용에 반영구적으로 사용할 수 있게 인쇄 제작되어 있으나 식기세척기를 비롯한 연마력이 큰 소재로 반복적으로 세척했을시 훼손될 수 있으니 사용시 주의하시기 바랍니다.
            `,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '매뉴팩트커피',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 25000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[매뉴팩트커피] Mug White / 머그 화이트',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/manufactcoffee_products_05.webp`,
            name: 'manufactcoffee_products_05.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/manufactcoffee_products_05-1.webp`,
            name: 'manufactcoffee_products_05-1.webp',
            orgName: '',
          },
          {
            url: `/files/manufactcoffee_products_05-2.webp`,
            name: 'manufactcoffee_products_05-2.webp',
            orgName: '',
          },
        ],
        content: [
          `다양한 용도로 사용 가능한 머그 입니다.
            내열 소재로 뜨거운 음료와 전자레인지에 사용 가능 합니다.
            
            용량 : 250ml
            사이즈 : 85mm(지름) * 93mm(높이)
            색상 : 화이트`,
          `* 구매시 주의 사항
            
            수작업 제품 특성상
            _ 표면에 유약의 흐름이 나타날 수 있습니다.
            _ 표면이 고르지 못할 수 있습니다.
            _ 로고의 인쇄 위치가 상이 할 수 있습니다.
            _ 모니터에 따라 컵의 색상이 다를 수 있습니다.
            
            상기 사항으로 반품 및 교환을 원하실 경우 택배 비용이 발생 할 수 있으니 구매 시 참고하여 주시기 바랍니다.`,
          `* 로고는 일반적 사용에 반영구적으로 사용할 수 있게 인쇄 제작되어 있으나 식기세척기를 비롯한 연마력이 큰 소재로 반복적으로 세척했을시 훼손될 수 있으니 사용시 주의하시기 바랍니다.`,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['goods'],
          brand: '매뉴팩트커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 7,
        price: 12000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '[매뉴팩트커피] Kinto Wood Saucer / 킨토 우드 논슬립 소서',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/manufactcoffee_products_06.webp`,
            name: 'manufactcoffee_products_06.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/manufactcoffee_products_06-1.webp`,
            name: 'manufactcoffee_products_06-1.webp',
            orgName: '',
          },
          {
            url: `/files/manufactcoffee_products_06-2.webp`,
            name: 'manufactcoffee_products_06-2.webp',
            orgName: '',
          },
        ],
        content: [
          `다양한 컵과 어울리는 잔받침입니다.
            티크 원목으로 제작되어 열 전도율이 비교적 낮으며 사용할 수록 깊이감이 더해지는 잔 받침입니다.`,
          `소재 : 합성칠기 / 천연나무(티크 적층재), 우레탄 코팅
            사이즈 : 지름 130mm / 높이 17mm
            원산지 : 중국`,
          `* 사용 및 구매시 주의 사항
            _ 식기 세척기를 사용 하실 수 없습니다.
            _ 물이나 온수에 오래 담그지 마십시오.
            _ 불 옆에 두지 마십시오.
            _ 사용 후 행주로 청소 하십시오.
            _ 직사광선을 피하고 건조한 상태로 보관 하십시오.
            _ 핸드메이드 제품은 크기와 모양이 각각 다를 수 있습니다.
            _ 천연나무 소재는 색상과 나무결에 약간 차이가 있을 수 있습니다. `,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['goods'],
          brand: '매뉴팩트커피',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 8,
        price: 18000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[롱플레이] 커피파우더 질베르토 20g [원산지:국산(경기도 화성시)]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/longplay_products_01.webp`,
            name: 'longplay_products_01.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/longplay_products_common.webp`,
            name: 'longplay_products_common.webp',
            orgName: '',
          },
          {
            url: `/files/longplay_products_01-2.webp`,
            name: 'longplay_products_01-2.webp',
            orgName: '',
          },
        ],
        content: [
          `롱플레이의 질베르토를 간편하게 즐기실 수 있도록
            파우더 형태의 커피로 제작했습니다.
            
            묵직하고 초콜릿 단맛이 좋은 타입의 질베르토 블랜드 파우더 커피입니다.`,
          `롱플레이 커피 파우더
            [질베르토]`,
          `파우더 커피는 따듯한 물이나 우유에 타서 간편하게 즐기실 수 있습니다.
            * 차가운 물과 우유도 가능합니다. `,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: '롱플레이',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 8,
        price: 52000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '[롱플레이] 롱플레이 X TRVR 티셔츠 LP ver. - navy',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/longplay_products_02.webp`,
            name: 'longplay_products_02.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/longplay_products_common.webp`,
            name: 'longplay_products_common.webp',
            orgName: '',
          },
          {
            url: `/files/longplay_products_02-1.webp`,
            name: 'longplay_products_02-1.webp',
            orgName: '',
          },
        ],
        content: [
          `롱플레이 X TRVR T-Shirt (ver.1)
            Longplay X TRVR T-Shirt (ver.1)`,
          `'시간'과 밀접한 관계를 맺고 있는 롱플레이와 TRVR의 콜라보레이션 소식을 전합니다.`,
          `숏슬리브 라벨의 QR코드로 접속하면 TRVR과 LONGPLAY에서 만든 플레이리스트를 스포티파이와 애플뮤직에서 감상할 수 있도록 재미있는 요소를 더했습니다. `,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['goods'],
          brand: '롱플레이',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 8,
        price: 29000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[롱플레이] 롱플레이 LP 슬립매트',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/longplay_products_03.webp`,
            name: 'longplay_products_03.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/longplay_products_common.webp`,
            name: 'longplay_products_common.webp',
            orgName: '',
          },
          {
            url: `/files/longplay_products_03-1.webp`,
            name: 'longplay_products_03-1.webp',
            orgName: '',
          },
        ],
        content: [
          `롱플레이의 로고가 담긴 LP 슬립매트 입니다.`,
          `롱플레이 슬립매트
            Longplay Slipmats`,
          `LP 재생 음질 개선에 가장 좋은 2mm 두께로 제작되었습니다.`,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '롱플레이',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 8,
        price: 46000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '[롱플레이]롱플레이 X 마더그라운드 티셔츠 굿무드 - lemon',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/longplay_products_04.webp`,
            name: 'longplay_products_04.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/longplay_products_04-1.webp`,
            name: 'longplay_products_04-1.webp',
            orgName: '',
          },
          {
            url: `/files/longplay_products_04-2.webp`,
            name: 'longplay_products_04-2.webp',
            orgName: '',
          },
        ],
        content: [
          `맛있는 커피와 좋은 음악이 만들어내는 롱플레이의 분위기를 생각하며
            마더그라운드와 함께 만든 GOOD SOUND, GOOD MOOD 티셔츠입니다.`,
          `100% 코튼(30수) 원단에 면의 보풀을 없애는 실켓가공 처리를 하여 원단이 가볍고 시원하며 톡톡한 질감을 줍니다.
            넉넉한 핏으로 성별 관계없이 편하게 입을 수 있습니다.`,
          `프린트가 된 부분도 통기성이 좋고 시원합니다.`,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '롱플레이',
          sort: 2,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 8,
        price: 35000,
        shippingFees: 0,
        show: true,
        active: true,
        name: 'Post-Visionㅣ월요일 저녁 단어와 요가 with 근영',
        quantity: 60,
        buyQuantity: 16,
        mainImages: [
          {
            url: `/files/joinus_products_01.webp`,
            name: 'joinus_products_01.webp',
            orgName: '',
          },
        ],
        detailImages: [
          {
            url: `/files/joinus_products_01-1.webp`,
            name: 'joinus_products_01-1.webp',
            orgName: '',
          },
          {
            url: `/files/joinus_products_01-2.webp`,
            name: 'joinus_products_01-2.webp',
            orgName: '',
          },
        ],
        content: [
          `단어 하나와 함께 매트 위에 서서 눈에 보이지 않는 감각을 살펴보고자 합니다.
            맨몸으로 나를 마주하는 시간인 요가는 자신을 더 깊이 이해할 수 있게 해줘요.
            경쟁과 미움 없이 포용과 사랑만으로,
            요가를 하며, 요가처럼 사는 연습을 해봐요.`,
          `1What is Post-vision?
            고소한 커피와 맛 좋은 제철 아침 식사를 제공하는 프로비전의 분주한 영업이 끝나면 공간은 새로운 일들과 사람들로 채워집니다.
            우리의 삶에 건강한 활기를 더해줄 프로그램에 참여해보세요!`,

          `●근영 님, 안녕하세요! 자기 소개 부탁드립니다.
            안녕하세요. 프리랜서 에디터이자 하타요가를 하는 박근영입니다.
            요가를 하면서 내 몸과 마음의 형태를 더 잘 알게 되었고, 점점 더 튼튼해지는 뿌리로 삶의 흔들림을 즐기며 살아가고 있습니다.
            
            
            
            ● 단어와 요가는 어떤 수업인가요?
            ‘요가를 하는 동안 스치는 몸의 느낌과 감정의 변화를 조금 더 잘 새겨보고자 단어 하나를 세워두고 움직여보려 합니다.
            예를 들면, 가득 / 새김 / 틈 / 넌지시 / 속엣것 …  이런 단어들이요. 
            요가하는 동안 단어가 지닌 뉘앙스를 곱씹어보거나, 또 다른 단어가 떠오르면 그 뒤에 붙여봐도 좋습니다. 
            아마 아무 생각 없이 움직임에만 집중하는 날도 많을 텐데, 괜찮습니다. 
            나도 모르는 새에 단어가 몸과 마음의 흐름을 살펴보는 데 도움을 주어, 그 미묘한 차이를 새롭게 읽어내게 될 거예요. 언어에는 그런 힘이 있다고 생각합니다.
            
            
            
            ● 모닝 오너분들이 이 수업을 통해 무엇을 얻었으면 하나요?
            월요일 저녁마다 요가를 통해 한 주를 잘 보내는 데 필요한 에너지와 마음가짐을 충전할 수 있으면 좋겠습니다. 
            그렇게 시간이 쌓이다 보면 움직이며 사는 즐거움을 알게 되고, 내 몸이 가진 가능성과 내면의 힘을 키워갈 수 있을 거예요.
            
            
            
            ● 요가를 처음 하는 사람들도 참여할 수 있나요? 
            몸의 흐름을 자연스럽게 따라갈 거라 초심자도 무리 없이 함께 할 수 있습니다. 
            어떨 때는 숨은 힘을 끌어내어 내 한계를 넘어보기도 하겠지만, 그날의 컨디션에 따라서 자기만의 ‘stop’ 버튼을 눌러도 좋습니다. 
            요가에는 포기가 없어요. 매 순간 나에게 맞는 선택을 내리면 되고, 어떤 선택이든 매트 위에 쌓여 정직한 변화를 가져다줄 거예요.`,
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['joinus'],
          brand: '롱플레이',
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
            image: 'centercoffee_02.webp',
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
            image: 'centercoffee_01.webp',
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
            image: 'centercoffee_05.webp',
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
            image: 'bonanzacoffee_products_01.webp',
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
            image: 'bonanzacoffee_products_02.webp',
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
            image: 'keepthatcoffee_products_02.webp',
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
            image: 'bonanzacoffee_products_03.webp',
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
            image: 'bonanzacoffee_products_03.webp',
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
            image: 'keepthatcoffee_products_03.webp',
            quantity: 2,
            price: 55000,
            reply_id: 3,
          },
          {
            _id: 2,
            seller_id: 4,
            state: 'OS020',
            name: '마일스톤 커피 하나비 블랜드 200g',
            image: 'milestonecoffee_products_02.webp',
            quantity: 1,
            price: 14000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 124000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 127000,
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
            seller_id: 5,
            state: 'OS020',
            name: '코스타리카 볼칸 아술 에티오피안 언에어로빅 내추럴 200G',
            image: 'protokoll_products_01.webp',
            quantity: 2,
            price: 27000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 54000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 57000,
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
            image: 'bonanzacoffee_products_03.webp',
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
        user_id: 2,
        order_id: 5,
        product_id: 5,
        rating: 5,
        content:
          '하나비보다 산미가 있다고 하는데 개인적으로 산미 있는 커피를 더 선호하지만 하나비가 더 좋아요. 구독서비스처럼 신선한 드립백 매주 구독받아 먹고 싶을정도로 너무 마음에 드는 커피입니다.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 2,
        order_id: 10,
        product_id: 10,
        rating: 4,
        content: '매장에서 맛있게 먹어서 드립백도 시켜보았는데 훌륭합니다.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 2,
        order_id: 20,
        product_id: 20,
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
        user_id: 2,
        order_id: 15,
        product_id: 15,
        rating: 5,
        content: '포장도 넘 예쁘게 배송받았어요! 카페에서 마셔보고 맛과향이 좋아서 드립백이랑 원두 함께 구매했어요~ 맛있어서 민족스러워요.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 2,
        product_id: 2,
        rating: 5,
        content: '매장에서 먹고 반해서 인터넷 구매했는데, 커피 메이커 쓰는데도 향이 그대로이고 좋아요 :)',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 4,
        product_id: 4,
        rating: 3,
        content: '배송이 좀 느려요.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 6,
        product_id: 6,
        rating: 5,
        content: '배송빠릅니다 아직 안먹어봤는데 기대됩니다~',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 3,
        order_id: 18,
        product_id: 18,
        rating: 5,
        contents: '카페가서 라떼먹고 반해서 원두 사서 다먹고 온라인으로 또 구매했다. 흐리게 라떼랑 타 먹어도 맛나네요 패키지 퀄 실화인가요 무지 예뻐요 맛은 두말할필요없습니더',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 4,
        order_id: 8,
        product_id: 8,
        rating: 5,
        content: '부드럽고 좋네요~~~',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 4,
        order_id: 12,
        product_id: 12,
        rating: 5,
        content: '그립감 좋아요 색도 이쁘고 질리지 않는 스타일 다른색도 구매할까 고민중요',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 4,
        order_id: 14,
        product_id: 14,
        rating: 4,
        content: '빨대가 있는 줄 알았는데 없네요..! 안에 뭔가 기다란게 들어있어서 이어지는 부붐인가 핬는데 용도는 잘 모르겠어요.. 돌리는것도 조금 뻑뻑하구 그래도 디자인은 예뻐요',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('reply'),
        user_id: 4,
        order_id: 16,
        product_id: 16,
        rating: 5,
        contents: '가족이 말하길 그 어디서 먹는 커피보다 맛있대요.... 저도 진짜 온갖 원두 먹어봤는데 이건 진짜 맛있어요 비싸도 계속 재규매...',
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
        _id: await nextSeq('posts'),
        title: '편안함 속에서 공유하는 즐거움, COEO(코에오)',
        content: [
          {
            d1: `
              COFFEE.HUMAN.LOVE LIFE 
              편안함 속에서 공유하는 즐거움, COEO(코에오) 

              에디터/포토 지우탁

              골목과 코너의 묘미는 장면의 전환에 있다. 각각의 거리로 들어설 때마다 새로운 풍경과 발견에 대한 기대감을 가질 수 있고, 같은 거리라도 보는 방향이나 지나가는 속도에 따라서도 크고 작은
              변화를 찾을 수 있다. 화려할 때도, 소소할 때도 있지만 영화가 여러 장면의 연결로 완성되는 것처럼 우리가 마주하게 되는 거리들 또한 하루를 구성하는 장면들인 셈이다. 

              성수동에서도 조금 한적한 거리에는 그런 장면들 중에서도 눈에 띌 COEO(코에오)가 자리하고 있다. 얼핏 보면 공방 같기도 한 외관에 비해 따뜻한 톤의 내부의 반전을 발견할 수 있고, 밖에 세워둔
              다양한 '탈것'들에서 공간에 대해 다양한 상상을 하게 만드는 곳이다. 또 코에오를 찾은 날은 겨울과 봄의 경계였던 탓에 아직 쌀쌀했으나 유난히도 볕이 잘 들었다. 하루의, 누군가의 기승전결
              중에서 하나의 장면으로 넣기에 이보다 적절할 수 있을까라는 생각이 절로 들었다.
              `,
          },
          {
            d2: `
              함께 만들고, 목소리가 모이는 공간 
              코에오(COEO)는 라틴어로 '함께 가다', '모이다'라는 뜻이다. 이중적인 의미로 일본어인 声を（こえを）'목소리를'이라는 뜻도 담고 있다. 

              "카페는 많은 분들이 와서 조용히 즐기기도 하지만 많은 분들이 모이고, 만나고, 대화하는 장소입니다. 손님과 저희가 함께 만들어가는 공간이자, 사람들이 모여서 목소리를 낼 수 있는 공간이라는
              의미를 담아 이름을 정했습니다." 

              코에오의 슬로건은 'COFFEE.HUMAN.LOVE LIFE'다. 커피라는 매개체로 많은 사람들의 삶에 녹아들어 그들과 공유하고, 서로의 안부를 묻는, 소소한 LOVE LIFE를 지향하고 있다. 코에오의 이름을 걸기
              위한 공간을 찾을 때, '함께' 혹은 각자가 어우러져 코에오라는 공간에서 이곳을 찾은 사람들이 각자의 방식으로 편안하게 시간을 보내다 갈 수 있기를 바랐다. 그래서일까, 첫 매장이었던 이태원에서
              성수동으로 매장을 이전할 때 북적대는 메인거리가 아닌, 조금은 떨어진 곳에 한적하고 아늑한 공간이 자연스럽게 눈에 들어왔다.
              `,
          },
          {
            d3: `
              오롯이 즐길 수 있는 편안함 
              코에오를 방문하는 고객들은 주로 필터커피를 찾아오는, 커피 자체에 깊게 매료되어 있는 이들이 대부분이다. 여기에는 쟁쟁한 커피 브랜드들 사이에서도 특유의 감성과 퀄리티를 통해 신뢰받는
              브랜드로 자리 잡은 것 또한 한몫을 했다고 할 수 있다. 이밖에도 시그니처 커피로 통하는 'YUKI'(유키)는 콜드브루 커피 위에 하얀 크림과 가니쉬가 올라가는 메뉴로, 이름처럼 겨울에 내린 눈을
              닮은 음료가 있다. 

              "필터커피로는 5-8 종류의 라인업을 주기적으로 변경하여 서브하고 있습니다. 에스프레소 머신으로 서브하는 커피로는 2종류의 블렌드와 디카페인이 있고요. 매장에는 커피 외에도 논커피 음료를
              즐기시는 분들도 많으시기 때문에 6가지 정도의 논커피 종류를 준비해서 제공하고 있습니다. 눈을 닮은 커피 'YUKI'는 시그니쳐 메뉴입니다. 차처럼 가벼우면서 산뜻하고 향긋합니다. 처음 매장에
              방문하신다면 무조건 YUKI를 드셔보시는 것을 추천합니다."
              `,
          },
          {
            d4: `
              공간의 한계에서 나아간 '코에오' 
              "코에오를 단순히 커피와 디저트를 즐기는 공간으로만 운영하고 싶진 않았어요. 코에오는 한 마디로 정의할 수 없는 '코에오' 자체이고 싶었습니다. 문화를 공유하고 다양한 사람들이 모여 문화를
              공유하고 각자의 취향대로 즐기는 공간이길 바랐습니다. 코에오와 함께 의미가 담긴 일이면 무엇이든 다양하게 도전하고, 기획하려고 합니다. '함께' 한다는 사실만으로도 행사의 주체가 되는 분,
              찾아오시는 분들 모두가 행복해지더라고요."
              `,
          },
          {
            d5: `
              이들의 생각처럼 코에오는 지난 시간 동안 소소하지만 누구나 '함께' 즐길 수 있는 것들을 진행해 왔다. ▲성소수자들의 인권을 위해 활동하는 단골손님이자 변호사 Eric의 게스트 바리스타
              행사-성소수자단체 기부행사 ▲분재를 하시는 단골손님과 진행한 식목일 팝업행사 ▲산 하나를 통으로 빌린 캠핑장에서 브루잉 행사(단골손님의 강력추천으로 참여) ▲몽골여행을 다녀온 단골손님의
              1주년 기념 여행 사진전 - 판매금 몽골어린이단체 기부 ▲생산자와 소비자를 연결하는 가치에 집중하는 마르셰시장- 커피장 참여 ▲단골손님들이 셀러로 참여해 모두 모여 즐기는 '이웃마켓'(매년 봄,
              가을 진행) ▲후쿠오카에서 워킹홀리데이를 온 단골손님의 후쿠오카 로컬 로스터리들을 소개하는 브루잉 행사 등등이 있었다. 크게 화려하거나 모든 이들의 눈을 사로잡을 만큼 큰 스케일의 행사들이
              아닌 소소한 이벤트들이었으나 모두 코에오의 단골손님들이 없었다면, 함께 할 사람들이 존재하지 않았다면 시작도 할 수 없던 일들인 셈이다. 오히려 다른 브랜드에서는 경험하기 힘든 유니크한
              콘텐츠인 것이다.
              `,
          },
          {
            d6: `
              문화를 공유하고 즐길 수 있는 공간 
              코에오의 소식을 접하다 보면 유독 로컬 상권을 중심으로 다양한 인연을 맺고 있다는 것을 볼 수 있다. 이웃 매장끼리 서로 돕거나 협업을 하는 등 함께 하는 경우가 없는 것은 아니지만, 코에오가
              보여주는 '함께'는 조금 더 친밀하고 각별하게 보인다. 

              "매장을 운영하면서 너무 많은 지역 주민분들과 감사한 인연을 만들고 있습니다. 그중 핸드메이드 실버 주얼리 브랜드인 '하이데저트' 친구들을 소개하고 싶어요. 하이데저트 친구들은 이웃마켓에서
              본인들이 만든 실버 주얼리를 판매하는 개인 셀러로 참여했는데, 사람들의 반응이 폭발적이었어요. 본인들이 만들어낸 제품이 사랑을 받는 모습에 용기를 얻어 하던 일을 정리하고 주얼리 브랜드를
              시작하기로 마음을 먹었고, 현재는 온/오프라인에서 활발하게 활동하고 있는 친구들입니다. 코에오 매장과 아주 가까운 곳에 쇼룸 겸 작업실을 오픈했습니다." 

              앞으로의 방향성을 묻는 질문에 이들은 "코에오를 단순히 커피와 디저트를 즐기는 공간으로만 운영하고 싶지는 않다."라고 답했다. 다양한 사람들이 모여 문화를 공유하고 각자의 취향대로 즐기는
              공간이길 바란다는 것. 그리고 이를 위해 앞으로도 지금까지처럼 코에오와 함께 의미가 담긴 일이면 무엇이든 다양하게 도전하고, 기획할 것임을 밝혔다.
              `,
          },
          {
            d7: `
              무엇보다 '함께'라는 부사가 잘 어울리는 공간이라는 생각이 들었다. 사소한 인연이라도 소중하게 여길 줄 알고, 이를 이어나가는 것 또한 자연스럽게 찾게 만드는 공간의 조건이라고 할 수 있지
              않을까. 소소하지만 단단한 유대감으로 엮인 인연은 그 자체로 일종의 안정감을 준다. 그리고 그러한 안정감과 편안함 속에서 소통과 공유를 할 수 있는 시간이자 공간은 지금 시대를 살아가는
              우리들에게 있어 꽤나 소중하다. 

              COEO(코에오) 
              서울특별시 성동구 성수이로16길 45, 1층 
              @coeo_kr 
              `,
          },
        ],
        type: 'magazine',
        extra: {
          articleType: 'FRIENDLY',
          mainImages: [
            {
              url: `/files/coeo-01.webp`,
              name: 'coeo-01.webp',
            },
          ],
          detailImages: [
            {
              url: `/files/coeo-01.webp`,
              name: 'coeo-01.webp',
            },
            {
              url: `/files/coeo-02.webp`,
              name: 'coeo-02.webp',
            },
            {
              url: `/files/coeo-03.webp`,
              name: 'coeo-03.webp',
            },
            {
              url: `/files/coeo-04.webp`,
              name: 'coeo-04.webp',
            },
            {
              url: `/files/coeo-05.webp`,
              name: 'coeo-05.webp',
            },
            {
              url: `/files/coeo-06.webp`,
              name: 'coeo-06.webp',
            },
            {
              url: `/files/coeo-07.webp`,
              name: 'coeo-07.webp',
            },
          ],
        },
        views: 2000,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
      },
      {
        _id: await nextSeq('posts'),
        title: '함께 채워가는 공간, 연필(緣苾)',
        content: [
          {
            d1: `
              입체적인 콘텐츠 공간에서 쌓아가는 인연 
			  
              함께 채워가는 공간, 연필(緣苾) 
			  
              에디터/포토 지우탁 
			  
              군자역 인근의 번화가를 지나 점차 주변의 풍경이 차분한 동네가 펼쳐지기 시작한 곳에 어색하지는 않지만 눈에 띄는 세련된 공간이 있다. 지난 2022년 8월에 이곳에 자리를 잡은 연필(緣苾). 밖에서
              어렴풋이 보이는 매력적인 공간은 문을 열고 들어서면 마치 고급스러운 바에 들어선 것 같은 느낌을 받을 수 있는 풍경으로 변한다. 오픈 이전부터 눈을 사로잡는 외관과 분위기로 기대를 모았고,
              오픈 후에는 기대보다도 더 깊이 있고 다채로운 콘텐츠들로 관심을 받고 있는 곳이다. 방문하여 기록을 남길 수 있는 메모부터 고심한 듯한 선곡을 들으며 커피와 디저트의 페어링을 즐길 수도 있다.
              필터 커피를 주문하면 직접 선택한 빈티지 잔에 제공해 주고, 바 너머의 창 밖에는 고양이 손님이 기웃거리는 모습이 보이기도 한다. 어쩌면 복잡하고 어지러워 보일 수 있는 것들이 하나의 브랜드로
              묶여서 자연스럽게 표현될 수 있었던 배경은 무엇일까? 겨울과 봄의 경계인 2월의 어 하루 연필을 직접 다녀왔다.
			
			        성수동에서도 조금 한적한 거리에는 그런 장면들 중에서도 눈에 띌 COEO(코에오)가 자리하고 있다. 얼핏 보면 공방 같기도 한 외관에 비해 따뜻한 톤의 내부의 반전을 발견할 수 있고, 밖에 세워둔
              다양한 '탈것'들에서 공간에 대해 다양한 상상을 하게 만드는 곳이다. 또 코에오를 찾은 날은 겨울과 봄의 경계였던 탓에 아직 쌀쌀했으나 유난히도 볕이 잘 들었다. 하루의, 누군가의 기승전결
              중에서 하나의 장면으로 넣기에 이보다 적절할 수 있을까라는 생각이 절로 들었다.
              `,
          },
          {
            d2: `
              인연이 피어 향기로운 공간
			  
              "우선순위로 쉽게 기억에 남을 수 있는 네이밍을 하려고 했습니다. 다양한 카페 이름을 보면서 '기억에 남아있는 이름이 무엇이었을까?', '왜 이렇게 지으셨을까?', '왜 기억에 남았을까?'라는
              생각을 하면서 시간을 보내는 날이 많았어요. 종종 시간이 빌 때마다 국어사전, 영어사전, 프랑스어, 독일어 등을 찾아 후보군을 추려 놓기도 했고요. 그러다 '우리가 일상에서 많이 사용했던 물건,
              사물 등을 이중적인 의미로 지어보는 것도 좋겠다.'라는 생각이 번쩍 들었습니다. 또 때마침 '연필'이란 단어가 떠올랐죠." 
			  
              누구나 사용해 봤고 친근감이 있으며, 옛 생각도 들어 기억에도 잘 남을 듯했다. 매장을 바 형식으로 구성하고자 했던 의도와도 어울리고 스토리텔링도 잘 이어질 것 같았다.
              `,
          },
          {
            d3: `
			        "인연 연, 향기로울 필 자를 쓰는데, 이중적인 의미로 '필' 한자 위에는 초두머리로 풀 초를 사용합니다. 풀 초는 자라나다는 의미도 담겨 있어 인연이 피어(자라나서) 향기로운 공간이라는 의미를
              넣게 되었어요. 커피를 매개체로 다양한 사람들과 가깝게 연을 이어갈 수 있는 공간이 되기를 바라는 마음입니다. 그러기 위해서 다양한 로스터리 원두를 셀렉해 좋은 컨디션의 맛을 유지하여,
              누구나 부담 없이 커피를 즐길 수 있도록 하고 싶어요. 다양한 로스터리 카페를 손님들에게 알릴 수 있는 좋은 계기가 되기도 하는 것 같고, 커피를 통해 대화를 이어가게 되면서 서로의 일상적인
              대화도 자연스럽게 나누어 손님과의 대화 단절의 벽을 쉽게 허물 수 있었습니다."
			
              `,
          },
          {
            d4: `
              방문하는 이들이 남기는 기록 
              연필의 매장 한편에는 지금까지 공간을 찾은 이들이 남긴 메모들이 기록되어 있다. 소개팅으로 연필을 찾았던 이들이 남긴 이야기, 지방 혹은 제주도에서 이곳을 찾은 손님의 인사, 주변에서 소개를
              받고 찾은 외국인 손님 등 다양한 시선으로 내용이 담긴 메모장을 볼 수 있다. 
			  
			        "대부분 커피와 공간에 대한 내용들이 많이 적혀 있는데, 그 메모를 볼 때마다 내심 열심히 일을 한 것 같아 마음이 따뜻해지고 더 분발해야겠다는 느낌을 강하게 받습니다. 또 그림도 많이 그려
              주시는데, 특히 연필의 창밖으로 자주 출몰하는 길 고양이를 그려주시는 분들이 정말 많아요. 고양이의 생김새는 한결같지만 손님들이 그리는 고양이들은 다양한 특징들을 갖고 있어 볼 때마다
              사람들마다 다양한 관점을 가지고 있고 관찰력이 다르다는 것을 느끼게 되는 것 같아 재미있고 신기한 것 같아요."
              `,
          },
          {
            d5: `
			        탄탄하면서도 독특한 매력 
			  
              "대부분 커피와 공간에 대한 내용들이 많이 적혀 있는데, 그 메모를 볼 때마다 내심 열심히 일을 한 것 같아 마음이 따뜻해지고 더 분발해야겠다는 느낌을 강하게 받습니다. 또 그림도 많이 그려
              주시는데, 특히 연필의 창밖으로 자주 출몰하는 길 고양이를 그려주시는 분들이 정말 많아요. 고양이의 생김새는 한결같지만 손님들이 그리는 고양이들은 다양한 특징들을 갖고 있어 볼 때마다
              사람들마다 다양한 관점을 가지고 있고 관찰력이 다르다는 것을 느끼게 되는 것 같아 재미있고 신기한 것 같아요." 
			
			        논커피 라인업 또한 부족함이 없도록 준비했다. 심플하지만 시선을 사로잡는 로즈힙베리 아이스티부터 밀크티, 에이드 등과 더불어 티 메뉴 또한 취향에 맞춰 선택할 수 있도록 3가지를 구비해두고
              있다. 디저트의 경우는 제철 과일에 따라 자주 바뀌는 편인데, 푸딩과 티라미수 등 다양한 변화를 주고 있다고. 그는 "디저트에 대해서는 항상 고민이 많은 편"이라고 덧붙이기도 했다.
              `,
          },
          {
            d6: `
              입체적인 콘텐츠가 있는 공간 

              연필을 직접 방문하거나 SNS를 살펴보면 눈에 띄는 것이 청각적인 요소의 비중. 매장을 찾는 이들로부터 받은 신청곡을 틀거나 음악에 집중할 수 있는 환경을 만들기 위해 구조에 신경을 쏟은 흔적을 발견할 수 있다. 

              "어떠한 공간을 즐길 땐 우리의 감각 중 시각과 청각에 의존하여 사용빈도가 높아집니다. 때문에 공간을 메우는 음향에도 큰 관심을 갖고 있었습니다. 공간을 보시면 스피커가 손님들이 앉았을 시
              양쪽 정면에 위치하게 있습니다. 그리하여 사운드에 더 쉽게 노출이 되어 음악에 집중할 수 있도록 배치해 두었는데 음료를 마시며 공간이 주는 분위기와 음향에 심취할 수 있도록 힘썼습니다.
              하지만 저에겐 연필의 우드톤 인테리어에 잘 어울리는 음악을 찾기 정말 어려웠던 거 같습니다. 너무 밝은 음악도 그렇다 해서 무거운 음악도 잘 맞지가 않아 퇴근길에 항상 음악을 찾아 고민 끝에
              추가하고 있는데, 쉽지 않아 여전히 큰 고민 중 하나입니다."
              `,
          },
          {
            d7: `
              가끔 매장을 찾은 손님분들이 메모지에 공간과 어울리는 음악을 적어주고 가는 경우가 있어 쉽게 선택을 할 때도 있었다. 한 번은 짧게나마 손님들과의 음악 공유를 통해 공간에 서로의 취향을
              담아보고 싶어 신청곡을 받기도 했는데, 다들 자유롭게 좋아하는 플레이 리스트를 담아주면서 모두가 공간을 더 즐길 수 있었던 것이 좋은 기억이 남았다고. 

              연필 
              서울 광진구 면목로 12, 1층 
              @yeonpil_official 
              `,
          },
        ],
        type: 'magazine',
        extra: {
          articleType: 'JOYFUL',
          mainImages: [
            {
              url: `/files/yeonpil-01.webp`,
              name: 'yeonpil-01.webp',
            },
          ],
          detailImages: [
            {
              url: `/files/yeonpil-01.webp`,
              name: 'yeonpil-01.webp',
            },
            {
              url: `/files/yeonpil-02.webp`,
              name: 'yeonpil-02.webp',
            },
            {
              url: `/files/yeonpil-03.webp`,
              name: 'yeonpil-03.webp',
            },
            {
              url: `/files/yeonpil-04.webp`,
              name: 'yeonpil-04.webp',
            },
            {
              url: `/files/yeonpil-05.webp`,
              name: 'yeonpil-05.webp',
            },
            {
              url: `/files/yeonpil-06.webp`,
              name: 'yeonpil-06.webp',
            },
            {
              url: `/files/yeonpil-07.webp`,
              name: 'yeonpil-07.webp',
            },
          ],
        },
        views: 1818,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
      },
      {
        _id: await nextSeq('posts'),
        title: 'You made my day, 도미닉커피랩',
        content: [
          {
            d1: `
              광교카페거리의 스페셜티커피 간판 브랜드 
              You made my day, 도미닉커피랩 
			  
              에디터/포토 지우탁 
			  
			        2018년 4월 1일 오픈한 이후 이제 6년 차인 브랜드다. 매장이 위치한 광교카페거리를 비롯해 인근에서는 이미 커피에 진심인 곳으로 알려진 곳. 후기만 봐도 맛이나 향은 물론, 메뉴의 온도나
              디저트와의 조합, 바리스타들의 친절함 등 카페를 구성하는 다양한 요소들에 대한 만족도가 높다. 여기에 카페 컨설팅, 원두 납품도 꾸준히 진행하면서 점차 인지도와 영향력을 확장해 나가고 있는
              브랜드이기도 하다. 모두가 어려웠던 시기도 굳건하게 버티며 이어져 올 수 있었다는 것은 분명한 이유가 있다는 의미. 겉으로 봐도 탄탄하다는 느낌을 받을 수 있는 도미닉커피랩의 대표인 강정호
              바리스타를 만났다. 
              `,
          },
          {
            d2: `
              친숙함에서 비롯한 시작 
              자신의 이름을 건 도미닉 커피랩을 오픈하면서 수원에 스페셜티커피를 소개하고자 했으나 쉽지 않았다. 공을 들여 스페셜티커피를 준비해도 대부분의 소비자들은 낯설게 받아들였다. 
			  
              "당시에는 스페셜티커피에 대한 수요가 지금보다도 없었어요. 8~10만 원짜리 게이샤를 구해서 준비를 해도 같은 바리스타 고객분들이나 주변 지인들 또는 직원들만 즐기는 형태가 되다 보니 의미가
              없다는 생각이 들었어요."
              `,
          },
          {
            d3: `
			        이에 그는 우선 호불호가 적은 맛과 향의 커피를 소개함으로써 커피에 대한 소비자들의 인식을 전환함과 동시에 도미니 커피랩을 신뢰할 수 있는 브랜드로 만들고자 했다. 직접 로스팅을 하는 만큼,
              고소하면서도 쓴 맛 대신 단 맛이 두드러지는 커피를 블렌딩해 제공했다. 또 싱글 오리진 또한 화려한 개성을 있는 그대로 표현하는 것보다는 적은 산미를 바탕으로 커피 본연의 개성이 살아나도록
              의도했다. 
			  
			        "그렇게 한동안은 최대한 호불호가 적고 많은 분들이 편안하면서도 다양하게 즐길 수 있는 커피를 만들고 소개해 왔어요. 그러다 보니 수원 광교 지역에서는 그래도 어느 정도 이름이 알려지고
              찾아와 주시는 분들도 생겼죠. 처음과 비교했을 때 달라진 상황을 보면서 이제는 좀 더 다양한 커피를 소개할 수 있지 않을까라는 생각이 들었고요."
			
              `,
          },
          {
            d4: `
              더 깊고 다양한 커피를 위해 
              마침 그가 만드는 커피에 대한 수요량이 늘어나면서 기존 매장에 마련한 로스팅실을 확장할 필요성도 느끼고 있던 만큼 멀지 않은 곳에 두 번째 공간을 오픈했다. 매장을 방문한 고객분들이 편하게
              커피를 즐길 수 있는 홀과 바, 그리고 확장된 로스팅실을 만들었다. 
			  
			        "첫 공간인 커피랩이 에스프레소 위주로 메뉴를 풀어나간다면 로스터즈 공간에서는 모든 블랙커피를 드립으로만 추출해서 제공해요. 커피에 어느 정도 익숙해지고 더 깊은 관심이 생긴 분들에게 더
              다양하고 넓은, 입체적인 커피 경험을 제공해 드리기 위한 공간인 셈이죠." 
			  
			        커피랩을 소비자들이 익숙하게 여기면서도 커피에 대한 긍정적인 인상을 느낄 수 있는 공간으로 의도했다면, 두 번째 매장인 로스터즈는 더 디테일하면서도 다채로운 커피 경험을 위한 공간이라고 할
              수 있다. 실제로 공간을 찾는 고객들도 기존 메뉴들에 비해 저렴한 가격이 아님에도 스페셜티커피를 주문하기 시작했고, 대화를 통해 추천받은 커피를 경험한 이들은 점차 더 다양한 커피들에도
              관심을 가지거나 원두를 구매하기도 했다
              `,
          },
          {
            d5: `
			        개성을 공유하는 공간들
              각각 에스프레소 베이스의 커피와 필터 커피를 전문적으로 다루는 두 곳의 매장 외에도 디저트를 전문적으로 하는 와이엠엠디(YMMD; You made my day) 또한 광교카페거리에서 디저트 맛집으로 이름을
              알리고 있다. 디저트에 강점을 두고 있는 카페인만큼 다양한 디저트들과 함께 즐길 수 있는 시즌별 시그니처 메뉴를 만나볼 수 있다는 것이 포인트다.
			        "시장의 흐름이나 트렌드의 변화도 그렇고 현실적인 부분에서도 디저트의 유무가 중요하겠다는 생각이 들었어요. 그래서 커피와 함께 즐길 수 있는 디저트를 고민하다가 바스크 치즈 케이크를
              판매하기 시작했어요. 당시 수원 지역에서는 거의 취급하는 곳이 없었기 때문에 많은 분들이 찾아주셨죠."
              `,
          },
          {
            d6: `
              더 많은 이들을 위한 도미닉 
              이미 인근에서는 유명한 메뉴인 코코넛 라떼는 남녀노소 누구나 편안하게 즐길 수 있는 시그니처 메뉴다. 여기에 디카페인으로 주문을 해도 달콤 쌉싸름한 커피의 맛을 느낄 수 있고, 플랫화이트를
              비롯해 직원들 모두의 수준 높은 라떼아트를 즐길 수 있는 라떼 메뉴들은 긍정적인 후기로 가득하다.
			  
              "디저트 공간의 이름인 YMMD는 You made my day의 앞글자를 따서 만든 이름인데, 의미 그대로 '덕분에 좋은 하루를 보냈어요'라는 뜻으로 고객분들이 저희가 제공하는 커피 한잔으로 행복한 하루를
              보내실 수 있으면 좋겠다는 마음으로 커피를 하고 있어요. 행복하고 즐거운 커피를 더 많이 알리기 위해 노력을 하고 있다고 볼 수 있을 것 같아요."
              `,
          },
          {
            d7: `
              아무리 비싸고 좋은 커피, 스스로는 엄청난 정성을 들여 준비하더라도 정작 이를 접하게 될 이들을 고려하지 않았다면 그 결과는 장담할 수 없다. 예상했던 것과는 정반대의 반응을 보일 수도, 어쩌면
              부정적인 평가가 이어질 수도 있다. 결국 중요한 것은 마주하고 있는 상대방을 파악하고 배려하는 것이 아닐까. 그런 의미에서 도미닉 커피가 거쳐 온 과정은 신뢰가 가는 브랜드가 만들어지는 순서를
              잘 담고 있다는 생각이 들었다. 하고 싶은 것과 할 수 있는 것 그리고 해야 하는 것을 분명히 하고 차근차근 밟아 온 흔적과 지금 브랜드를 향한 지역 소비자들의 애정이 이를 증명하고 있었다. 

              도미닉커피랩 
              경기 수원시 영통구 센트럴파크로 127번 길 46 
              @dominiccoffee_official_ 
              `,
          },
        ],
        type: 'magazine',
        extra: {
          articleType: 'KIND',
          mainImages: [
            {
              url: `/files/dominic-01.webp`,
              name: 'dominic-01.webp',
            },
          ],
          detailImages: [
            {
              url: `/files/dominic-01.webp`,
              name: 'dominic-01.webp',
            },
            {
              url: `/files/dominic-02.webp`,
              name: 'dominic-02.webp',
            },
            {
              url: `/files/dominic-03.webp`,
              name: 'dominic-03.webp',
            },
            {
              url: `/files/dominic-04.webp`,
              name: 'dominic-04.webp',
            },
            {
              url: `/files/dominic-05.webp`,
              name: 'dominic-05.webp',
            },
            {
              url: `/files/dominic-06.webp`,
              name: 'dominic-06.webp',
            },
            {
              url: `/files/dominic-07.webp`,
              name: 'dominic-07.webp',
            },
          ],
        },
        views: 1800,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
      },
      {
        _id: await nextSeq('posts'),
        title: `스페셜티커피문화의 본질을 전하는 '전달자' - 아이덴티티커피랩`,
        content: [
          {
            d1: `
              분명한 목적과 의도 스페셜티커피문화의 본질을 전하는 '전달자' 
              Clean, Clear, Essence. 아이덴티티커피랩 
			  
              에디터/포토 지우탁 
			  
			        국내에서 스페셜티커피라고 하면 빠지지 않고 등장 브랜드들이 있는데, 최근 그 이름이 자주 들리는 곳이 바로 아이덴티티커피랩이다. 2018년 첫 오픈 이후, 스페셜티커피를 즐기는 이들 사이에서
              빠르게 입소문을 타며 말 그대로 ‘찾아가야 하는 곳'으로 자리를 잡은 지 오래다. 특히 아이덴티티커피랩의 대표인 윤원균 로스터의 실력은 이미 모르는 사람이 더 적을 정도. 그런
              아이덴티티커피랩이 이번에 새롭게 이전을 하며 이번에는 '찾아가야 하는 곳'이 아닌, '먼저 다가오는 곳'으로 우리를 찾아왔다. 새로운 아이덴티티커피랩 간판이 걸린 곳은 서교동. 이전과는 또 다른
              인테리어와 분위기의 공간으로 등장했지만 이름처럼 그들만의 '아이덴티티'는 여전하다는, 오히려 더 선명해졌다는 후기가 벌써부터 속속 들려오고 있다. 새롭게 탄생한 아이덴티티커피랩에서 염선영
              바리스타를 만나 그간의 이야기와 새로운 소식들을 전해 들어봤다. 
			
			        2018년에 처음으로 오픈한 아이덴티티커피랩은 올해로 5년 차 브랜드다. 첫 매장은 카페의 역할만 하는 공간으로 시작했지만 3년 전부터는 납품도 본격적으로 시작했다. 
			
			        “처음에는 가정용에 가까운 작은 로스터기로만 시작했어요. 1년 정도 운영을 하다가 망원동으로 옮겼는데, 그때 로스터리 카페 브랜드로 더 방향성을 확실하게 잡았죠. 그 이후로 거래처가 많이
              유입이 됐고, 그에 따라 운영도 점차 본격적으로 하면서 제조에 더 집중을 하게 됐어요.” 
			  
			        아이덴티티커피랩은 현재 서교동에 위치한 카페 공간과 일산에 자리를 잡은 로스팅 공장으로 구성되어 있다. 팀원도 매장을 전담하는 팀과 공장에서 생산에 주력하는 팀이 따로 있어 각자의 위치에서
              맡은 역할을 수행하고 있다고.
              
              `,
          },
          {
            d2: `
              나를 표현하기 위한 수단, 아이덴티티 
              이들이 본래 직장 동료로 서로를 처음 만났다. 근무를 하던 도중 각자의 사유로 퇴사를 하게 됐는데, 당시 생두사업팀에서 근무를 했던 윤원균 로스터의 권유로 함께 커피를 하게 됐다. 
			  
              “둘 다 자신을 표현할 수 있는 수단이 필요했던 것 같아요. 그 선택이 바로 카페였던 거죠. 윤원균 대표는 자신의 커피를 표현할 공간이 필요했고 저 또한 제가 당시 생각하던 것들을 보여줄 공간이
              필요했는데 거기에 가장 적합한 것이 카페였어요.” 
			  
			        브랜드의 이름인 아이덴티티 또한 '우리의 아이덴티티를 만들어 나가 보자'라는 생각이 모든 것의 시작이었기 때문에 그대로 사용했다. 어떤 조직 안에서가 아니라 우리만의 공간과 브랜드에서 각자의
              아이덴티티를 찾고 표현해 보자라는 생각이었다. 그리고 이런 생각은 점차 커피에도 스며들었다.
              `,
          },
          {
            d3: `
			        lean, Clear, Essence 
			        "다양한 매장에서 동일한 종류의 커피를 취급하고 있더라도, 그 커피를 아이덴티티커피랩에서 마셨을 때는 누가 마시더라도 ‘이건 아이덴티티 커피네’라는 생각이 들 정도로 확고한 스타일이 완성될
              수 있는 커피를 만들려고 했어요. 커피와 함께 저희가 표현하고자 하는 바를 분명하게 전달하고자 한 거죠. 커피 자체에 대해서도 커피를 마시면서 커피에 대한 설명을 읽었을 때, 그 아이덴티티가
              공감이 될 수 있는 방향을 추구하고 있어요." 
			  
			        제조업을 본격적으로 시작하면서 슬로건으로 Clean, Clear, Essence라는 세 가지 목표를 정하고 브랜드의 방향성을 잡았다. 단순히 브랜드뿐만 아니라 커피 또한 이러한 방향에 맞춰 선보이고 있다.
              Clean은 맛적인 부분에서는 물론, 맛에 민감하지 않은 이들이라도 깨끗하다는 인상을 받을 수 있을 정도의 커피를 추구함을 의미한다. 여기에 커피를 사람들에게 전달하는 과정에 있어서도 투명함을
              잃지 않겠다는 의지도 담고 있다.
			
              `,
          },
          {
            d4: `
			        명확함을 의미하는 Clear는 직관적인 뉘앙스의 명확함 보다는 목적과 의도를 분명히 한다는 뜻에 가깝다. 생두를 선택할 때나, 로스팅 프로파일을 설계할 때, 혹은 추출에 임할 때 등 어떤 경우에서도
              목적과 의도를 분명히 함으로써 소비자들이 이에 충분히 공감할 수 있는 것을 지향한다. 마지막 Essence는 의미부터가 본질을 가리키는 단어이면서 브랜드의 이름인 아이덴티티와 일맥상통한다. 이
              모든 것을 종합해 보면, 자신들의 정체성이 고스란히 표현되도록 분명한 의도와 목적으로 만든 커피를 경험할 수 있는 곳이 아이덴티티커피랩이다. 
			        "또 아이덴티티커피랩의 모든 구성원들이 스페셜티커피를 무척 좋아해요. 그런 스페셜티커피의 가치가 온전하게 전달이 될 수 있도록, 또 계속 즐겁게 스페셜티커피를 전하고 이어가기 위해서는
              지속가능한 것도 중요하다고 생각하고요."
              `,
          },
          {
            d5: `
              이를 실천할 수 있도록 지금의 위치에서 할 수 있는 역할에 충실해야 한다고 생각했다. 단순하게 맛있는 커피를 소개하고 전달하는 것에서 나아가 매해 옥션에도 참가하고 랏을 구매하기도 한다. 이는
              희소하고 특별한 맛의 커피를 구매하기 위해서라기보다는 이러한 옥션도 스페셜티커피 문화 중 하나라고 생각하기 때문에 이를 애정하는 입장에서 다양한 스페셜티커피 문화의 가치를 소비하는
              것이다. 그리고 이를 통해 스페셜티커피 문화를 지속하는데 도움이 되는 방향을 추구한다. 
			
			        인터뷰를 하면서 마신 커피는 '코스타리카 하시엔다 코페이 이타다키 게이샤 블랙 허니'였다. 아이덴티티커피랩의 하이엔드 커피 라인업이라고 할 수 있는 브릴리언트(Brilliant) 라인 커피였다. 
			  
			        "하이엔드 커피라고 하면 보통 뭔가 고가의 커피라고 생각하곤 하는데, 그런 요소들만으로 하이엔드라는 타이틀을 붙인 것은 아니에요. 앞서 언급했던 것처럼 저희가 추구하는 커피는 아이덴티티가
              분명한 커피였기 때문에 커피를 선택할 때도 농장의 스토리가 분명한, 자신들만의 신념이나 가치가 분명해서 소개하고 싶어질 정도인 농장들의 커피를 하이엔드 타이틀로 소개하고 있어요."
              `,
          },
          {
            d6: `
              최선의 선택과 투자의 결과 
              첫 시작을 포함해 아이덴티티커피랩은 이번에 새롭게 이전을 함으로써 다섯 번째 오픈을 하게 됐다. 이들이 처음부터 카페 브랜드를 만들어야겠다는 구체적인 계획을 가지고 움직인 것은 아니었다.
              카페를 오픈한 이유가 앞서 언급했던 자신을 표현할 수단을 마련하기 위함도 있었지만, 일종의 돌파구 역할이 필요했었다고. 당시의 상황과 조건에 맞춰 그때 그때 할 수 있는 최선의 선택과 투자를
              거듭해 온 것이다. 다양한 조건을 고려하여 최적의 환경으로 이전을 하면, 점차 브랜드가 성장하면서 더 넓은 공간 혹은 한적한 위치 등이 필요해졌고, 그러면 다시 조건에 맞는 공간을 찾아 이전을
              반복한 것이다. 
			  
              "거래처는 점점 늘어나는데 로스터기가 그 주문량을 감당하기에는 무리가 있다던가 하는 식으로 좋게 보면 감사한 일들로 인해서 어쩔 수 없이 이전을 결정한 것도 있어요. 그 외에 외부적인
              요인들에 영향을 받기도 했죠."
			  
              `,
          },
          {
            d7: `
              어떻게 보면 아이덴티티커피랩이 빠른 시간 안에 착실한 성장을 거듭했기에 비교적 잦은 이전이 필요했던 것은 아닐까라는 생각이 들었다. 여건에 따라 빠르게 판단을 내리고 이를 실천에 옮기는 것은
              의사결정의 주체가 현실적이면서도 추진력이 있다는 의미로 풀이할 수 있지 않을까. 5년이라는 기간 동안 브랜드를 지속해 오고, 많은 이들로부터 신뢰받는 브랜드로 성장한 것은 그 판단과 추진력이
              결코 틀린 방향을 향한 것이 아니었음을 증명한다. 

              아이덴티티커피랩 
              서울 마포구 동교로 139 1층 
              @identity_coffeelab 
              `,
          },
        ],
        type: 'magazine',
        extra: {
          articleType: 'FIENDLY',
          mainImages: [
            {
              url: `/files/identity-01.webp`,
              name: 'identity-01.webp',
            },
          ],
          detailImages: [
            {
              url: `/files/identity-01.webp`,
              name: 'identity-01.webp',
            },
            {
              url: `/files/identity-02.webp`,
              name: 'identity-02.webp',
            },
            {
              url: `/files/identity-03.webp`,
              name: 'identity-03.webp',
            },
            {
              url: `/files/identity-04.webp`,
              name: 'identity-04.webp',
            },
            {
              url: `/files/identity-05.webp`,
              name: 'identity-05.webp',
            },
            {
              url: `/files/identity-06.webp`,
              name: 'identity-06.webp',
            },
            {
              url: `/files/identity-07webp`,
              name: 'identity-01.webp',
            },
          ],
        },
        views: 100,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
      },
      {
        _id: await nextSeq('posts'),
        title: `하와이 해변에서 즐기는 커피 한 잔? '키헤이커피'`,
        content: [
          {
            d1: `
              이국적인 공간에서 마주하는 이국의 커피 
              좋은 기억을 위한 공간, 키헤이커피 
			  
              에디터/포토 지우탁 
			  
			        키헤이는 하와이 마우이 남서부에 위치한 지역명이다. 하와이의 찬란한 날씨 아래 약 10km에 달하는 해변이 펼쳐진 지역은 아름다운 자연부터 백사장, 파란 바다에 붉게 물드는 석양까지 그 특유의
              매력으로 하와이를 방문한 이들이라면 꼭 한번 방문해야 하는 곳으로 꼽히는 여행지다.그런 지역의 이름을 고스란히 사용한 키헤이커피 또한 커피인들 사이에서는 꼭 한 번은 가볼 만한 카페로
              언급되곤 하는 곳이다. 외관에서부터 느낄 수 있는 해변과 석양, 온화한 기후의 이미지는 내부로 들어서면 더욱 선명하게 경험할 수 있다. 여기에 은은하게 퍼지는 커피향이 더해지면서 이국적인
              개성이 완성된다. 
              `,
          },
          {
            d2: `
              키헤이커피는 2020년 12월에 오픈한 3년 차 카페로, 이곳을 만든 김범준 대표는 과거 이월로스터스에서 근무를 했었다. 4년 반 정도의 근무기간 동안 회사의 전반적인 운영관리 등을 맡아서 했는데,
              그중 3년은 로스팅을 맡았다. 커피를 하는 많은 이들이 자신만의 카페 창업을 꿈꾸는 것처럼, 김대표 또한 카페 창업에 대한 꿈을 꾸고 있었다. 
			  
              “회사를 다니면서 일과 공부를 병행하고, 쉬는 날에도 다양한 카페를 찾아다녔어요. 그런 과정을 인스타그램이나 블로그에 꾸준히 기록해 왔고요. 사진 같은 것도 최대한 예쁘게 찍으려고 노력했죠.
              주로 커피를 좀 진정성 있게 하는 카페를 찾으려고 노력했었는데, 이런 경험이나 기록들이 실제로 키헤이커피를 준비하고 오픈할 때도 정말 많은 도움이 많이 됐어요.” 
              `,
          },
          {
            d3: `
			        하와이에서의 추억을 담은 공간 
			        이곳의 이름인 키헤이는 하와이 마우이에 있는 작은 마을의 이름이다. 김대표는 와이프랑 결혼하기 전 키헤이로 여행을 갔었는데, 이곳에서의 경험이 무척 좋은 추억들로 남았다. 그 기억은 기반으로
              이후 카페 오픈을 준비하면서 키헤이라는 이름을 그대로 브랜드 명으로 사용했다. 
			  
			        “단순히 저희가 그곳에서 좋은 기억과 경험들을 할 수 있었던 것처럼, 우리 카페를 찾아주시는 분들도 좋은 기억, 작은 행복이라도 소중하게 남길 수 있기를 바라는 마음이었어요.” 
			  
			        키헤이커피 김범준 대표의 말처럼 외부에서부터 어딘가 백사장을 연상할 수 있는 콘셉트는 문 손잡이부터 내부 조명, 사소한 소품들에까지도 녹아 있는 듯했다. 조명부터가 키헤이의 다채로운 햇살을
              연상할 수 있도록 그라데이션 톤을 활용했고, 곳곳에 해변의 느낌을 주기 위한 장치도 마련했다. 실제로 키헤이커피에서 제공되는 종이컵에는 햇살, 석양을 연상할 수 있는 그라데이션이 들어가 있다.
              여기에는 색다른 재미를 주기도 했는데, 스탠다드로 사용하는 주황색 외에 봄에는 핑크색, 여름에는 하늘색 그라데이션 컵을 시즌 이벤트로 제공하기도 하면서 리프레쉬된 느낌을 주고 있다.
              `,
          },
          {
            d4: `
			        특히 공간을 관통하는 바의 한 부분에 꾸며진 백사장 연출은 레고를 비롯한 아기자기한 소품들과 어우러져 방문하는 이들에게 사소한 즐거움을 주고 있기도 했다. 계절이나 크리스마스 같은 시즌에
              따라 조금씩 다른 콘셉트로 연출하고 있는데 생각보다 많은 고객들이 이 변화를 지켜보면서 즐거움을 느끼고 있다고. 
			        “손님들이 보시고 재미있다고 느껴주시길 바란 것도 있는데, 저희 개인적으로도 조금 정체된다는 느낌을 받을 때 나름대로의 재미도 찾고 새로움을 추구하기 위한 것도 있어요. 여러모로 긍정적인
              역할을 해주고 있는 셈이죠.”
              `,
          },
          {
            d5: `
              이전체적인 콘셉트의 틀은 유지하되 소소하지만 확실한 변화를 줌으로써 주기적으로 공간을 찾는 이들에게 브랜드를 다채롭게 전달하고 있었다. 단순히 디자인이 다른 종이컵, 예쁜 조명, 소품 등이라고
              생각할 수 있지만 전체적인 결 안에서 변화를 주는 것은 명확한 브랜딩이 선행되지 않으면 결코 쉬운 일이 아니다. 그리고 이는 많은 이들이 키헤이커피를 찾고, 이국적인 분위기 속에서 즐긴 커피 한
              잔에 긍정적인 후기를 남기는 이유이기도 하다.
              `,
          },
          {
            d6: `
              탄탄한 기본기, 커피와 쿠키의 조합
              키헤이커피에서 제공되는 전체 메뉴는 약 20개 정도다. 이 중에서 브루잉 커피의 라인업은 변동이 있을 수 있지만 보통 3종류 정도를 선택할 수 있다. 여기에 오늘의 커피가 메뉴판에 있는데, 이는
              매장이 바쁜 점심시간에 브루잉 커피를 마시기 위해 찾은 손님들이 기다릴 필요 없이 간단하게 브루잉 커피를 즐길 수 있도록 배치 브루(Batch Brew)로 추출한 커피다. 쉽게 스타벅스 오늘의 커피와
              같은 개념으로, 한 번에 15잔 정도 분량을 내려서 제공하고 있는데, 많은 고객들이 믿고 선택하는 메뉴라고. 
			  
              “논커피나 티 종류는 많지 않아요. 커피에 집중한 브랜드라고 생각해 주시면 될 것 같아요. 커피와 함께 즐길 수 있는 디저트로는 쿠키를 제공하고 있어요. 와이프가 매일 아침마다 직접 새로
              구워서 제공하는데, 총 8종류의 쿠키를 준비하고 있어요. 라인업은 분기별로 변화를 주어서 새로운 쿠키를 제공하고요. 8가지 쿠키를 분기마다 새로운 구성으로 만나볼 수 있는 셈이죠. 시즌이나
              날씨에 따라 그에 맞는 쿠키를 커피와 함께 즐길 수 있어요.”
              `,
          },
          {
            d7: ``,
          },
        ],
        type: 'magazine',
        extra: {
          articleType: 'FIENDLY',
          mainImages: [
            {
              url: `/files/kihei-01.webp`,
              name: 'kihei-01.webp',
            },
          ],
          detailImages: [
            {
              url: `/files/kihei-01.webp`,
              name: 'kihei-01.webp',
            },
            {
              url: `/files/kihei-02.webp`,
              name: 'kihei-02.webp',
            },
            {
              url: `/files/kihei-03.webp`,
              name: 'kihei-03.webp',
            },
            {
              url: `/files/kihei-04.webp`,
              name: 'kihei-04.webp',
            },
            {
              url: `/files/kihei-05.webp`,
              name: 'kihei-05.webp',
            },
            {
              url: `/files/kihei-06.webp`,
              name: 'kihei-06.webp',
            },
            {
              url: `/files/kihei-07.webp`,
              name: 'kihei-07.webp',
            },
          ],
        },
        views: 1,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
      },
      {
        _id: await nextSeq('posts'),
        title: '커피와 나를 이어주기 위해 탄생한 공간, 폰트(PONT)',
        content: [
          {
            d1: `
              커피와 나를 이어주기 위해 탄생한 공간
              사람과 커피, 산업과 소비자를 잇는 중개자, 폰트(PONT) 
			  
              에디터/포토 지우탁 
			  
			        인터뷰에 앞서 폰트에 대해 알아보면서 가장 먼저 그리고 많이 받은 인상은 마치 활발하게 활동을 이어가고 있는 신생 기업, 브랜드를 보는 것 같다는 것이었다. 
			        커피에 대한 전문성은 물론, 독특하지만 친숙하고 포근한 컨셉의 매장에서는 커피를 좀 더 많은 이들에게 친숙하게 소개하기 위한 다양한 이벤트들이 진행되기도 했다. 
			        처음부터 로스팅 오피스를 마련할 정도로 다양한 라인업에 커피들이 폰트의 이름으로 소개 및 판매되고 있었고, 직접 방문한 산지를 비롯한 커피 업계 자체에 대한 정보들도 꾸준히 전해오고 있었다. 

			        대개 이런 인상을 받게 되는 브랜드, 기업들은 분명한 목표와 방향성을 설정하고 움직이기 마련이고, 세심하게 준비한 브랜딩은 다른 누구도 아닌 소비자들의 반응을 가장 먼저 이끌어낸다. 
			        실제로 폰트를 방문한 이들은 커피를 비롯한 메뉴들의 퀄리티와 구성은 물론, 공간에 대한 이야기와 구성원들의 친절한 서비스에 대해서도 호평만 가득했다. 
			        탄탄한 기본기에 세세한 부분들까지 깔끔하게 잘 다듬어진 브랜드는 어떤 손길을 거쳐 탄생하게 됐을까?
              `,
          },
          {
            d2: `
              폰트(PONT)의 강호영 대표는 유명 커피 브랜드인 테라로사 커피에서 서울과 경기권 바리스들의 교육을 담당했었다. 이후 프릳츠 커피 컴퍼니 로스팅 공장에서 경험을 쌓고 
			        이 모든 것들을 바탕으로 현재의 폰트 만들고 운영하고 있다.  
			  
              "폰트는 저와 함께 오랜 시간 커피업계에 종사하고 있는 서기문 대표님과 공동창업으로 탄생한 브랜드예요. 운영도 물론 함께 하고 있고요. 
			        사실 폰트는 카페로만 운영되고 있는 건 아니에요. 어떤 커피를 소비자들에게 판매할 것인가를 자체적으로 결정하고 싶었어요. 
			        그러기 위해서는 좋은 품질의 커피를 직접 고르고 또 볶아야 했죠." 
              `,
          },
          {
            d3: `
			        '생존'을 목표로 선택한 방향 
			        시작부터 브랜드의 방향성을 뚜렷하게 정했던 그들은 자연스럽게 로스팅과 원두 납품까지 함께 할 수 있는 공간을 찾았다. 그렇게 2020년 6월 25일에 로스팅 오피스를 오픈한 이후, 
			        같은 해 8월 11일에는 용산점을, 그리고 작년 2월 1일에 2호점인 문래점까지 오픈하는 등 차근차근 영향력을 확장해나가고 있다. 얼핏 들으면 평탄해 보이는 브랜드 스토리지만, 
			        이들이 공간을 오픈하고 인지도를 쌓아온 시기는 코로나로 인해 소비 심리가 얼어붙고 사회적 거리 두기가 시행되는 등 여러 악재들이 겹쳐서 일어나던 때다. 
			        이를 감안하면 지금의 폰트가 만들어지기까지 치밀한 준비와 노력이 있었음을, 그리고 오랜 기간 커피업계에서 종사하며 축적한 두 대표의 노련한 운영이 있었음을 짐작해 볼 수 있다. 
			  
			        "처음부터 개인 카페보다는 작더라도 회사로 만들어 나가겠다는 생각으로 창업을 했어요. 어째서 ‘회사’가 되어야 했을까요? 저희는 ‘생존’을 최우선 목표로 하고 있습니다. 
			        커피라는 상품은 다른 산업과 비교했을 때 상대적으로 부가가치가 낮은 상품인 데다 노동집약적인 상품이에요. 쉽게 말해 많은 노동력이 필요하지만, 팔아서 벌 수 있는 돈은 적죠. 
			        앞으로 10년, 20년 정도 커피 산업 안에서 이 일을 건강하게 지속하려면 회사가 되어야만 했던 거죠. 
			        이건 회사를 운영하는 대표를 포함해 그 회사를 이루는 구성원들과 회사와 연결된 많은 업체들, 공동체들의 삶을 풍요롭게 하고, 
			        동시에 좋은 품질의 커피를 구매할 수 있는 능력을 지속적으로 키우고, 상품을 매력적으로 보이게 만드는 등 우리의 공간을 다시 찾을 수 있게 해야만 가능해요. 
			        그래야만 우리가 사랑하는 이 일을 지속 가능하게 만들 수 있다고 생각합니다. 그렇게 하려면 카페를 벗어나 ‘커피를 다루는 회사’로 방향을 잡아야 한다고 생각했어요."
			
              `,
          },
          {
            d4: `
			        최근에는 다소 주춤하는 듯 보이지만 좁은 골목길에도 하루가 멀다 하고 생기고 없어지길 반복하는 개인카페들과 비교했을 때, 그들의 출발점과 폰트의 출발점은 확연한 차이가 있었던 셈이다. 
			        물론 대표들의 경험이나 역량, 목적에 차이가 있을 수 있을 수도 있지만 창업에 앞서 현실적이면서도 명확한 목표와 방향성을 설정하는 것은 어떻게 보면 분야에 상관없이 당연한 것이라고 할 수 있다. 
			        똑같이 작은 공간에서 시작하더라도 이를 바라보는 마음가짐이나 브랜딩을 통해 그 결과는 현저하게 차이가 날 수 있는 것이다. 어떻게 보면 폰트의 스토리에 지금 시기에 창업을 준비하고 있는 이들이라면 반드시 생각해봐야 할 것들이 담겨 있다는 생각이 들었다.
              `,
          },
          {
            d5: `
			        커피와 사람을 잇는 역할 'PONT' 
			        'PONT'는 불어로 다리나 교량을 뜻하는데, 비유적인 표현으로 중개 역할이나 매개자의 의미로 사용되기도 한다고. 
			  
              이"커피는 각성제의 역할을 하던 이전과는 달리, 이제 현대인의 삶에서 빠질 수 없는 음료가 되었습니다. 소비자들은 더 빠르게 마실 수 있는 것보다 더 맛있게 마실 수 있는 것을 찾죠. 
			        당연히 커피를 맛있게 만들 수 있는 전문가들을 필요로 하고, 이들은 커피와 사람을 잇는 다리의 역할을 하게 됩니다." 
			  
			        그는 이어서 "또한 산업과 소비자와의 거리를 좁힐 수 있는 중간자 역할을 할 수 있는 전문가 집단이 지속적으로 필요하다."라며, 
			        "폰트는 이러한 산업의 요구에 맞춰 만들어진 로스터리"라고 덧붙였다. 카페를 둘러싼 소비 트렌드를 파악하고 그 안에서 브랜드의 역할로 일종의 중개인, 다리의 역할을 선택했다는 의미였다. 
			        스페셜티커피의 대중화는 꽤 이전부터 꾸준히 화두가 되어 오고 있는, 커피 업계에서는 누구나 한 번쯤 떠올렸을 미션이라고도 할 수 있다. 폰트는 브랜드의 이름에서부터 그러한 미션, 자신들이 지향하는 바를 충실하게 담은 셈이다.
              `,
          },
          {
            d6: `
              "커피를 찾는 이들에게 좋은 품질의 커피를 널리 알리고, 그 수익이 선순환으로 이어지면서 폰트와 연결되어 있는 모든 사람들의 삶의 질을 높일 수 있도록 하는 가치 있는 소비를 만들고 있어요. 
			        타 산업과 다르게 부가가치가 낮은 산업이 가지는 약점 중 하나가 그 사슬에 엮여 있는 사람들의 삶의 질을 높이기 어렵다는 것입니다. 
			        부가가치가 높은 산업으로 발전하게 만드는 열쇠는 좋은 품질의 커피에 대한 소비자들의 인식을 개선하고 양질의 서비스를 제공하는 방법밖에 없어요. 
			        더 높은 가격을 지불하는 것이 더욱 가치 있는 소비를 했다는 자부심이나 만족감을 줄 수 있어야 한다고 생각합니다." 
			  
              부가가치를 높이기 위해서는 소비자들의 인식을 바꿀 필요가 있고, 그러기 위해서는 보다 양질의 커피를 발굴하고 이를 더 원활하게 전달하기 위한 서비스 또한 선행되어야 한다는 뜻으로 해석할 수 있다. 
			        단순히 브랜드의 인지도를 올리기 위한, 매출을 올리기 위한 방향보다는 커피 산업 전체의 파이를 키우는, 고부가가치 산업으로 끌어올리기 위한 고민의 결가가 폰트라는 브랜드를 통해 표현되고 있다는 느낌을 받았다. 
			        그런 생각으로 시선을 달리하니 원두의 납품부터 산지 출장, 메뉴의 라인업 등 폰트의 운영방식에서 그들이 나아가고자 하는 방향이 보이는 듯한 느낌이 들기도 했다.
              `,
          },
          {
            d7: `
			        폰트를 한 줄로 표현해 달라는 요청에 강대표는 "언제든 편하게 커피 한 잔 마시고 싶다면"이라고 답했다. 인터뷰 초반, 폰트의 의미와 창업의 배경으로부터 이어진 방향성과 체계적인 운영 
			        그리고 목표가 분명했기에 가능한 답변이 아니었을까? 또한 강대표는 폰트가 나아가고자 하는 방향에 대한 질문에 ‘잘 먹고 잘 사는 것’이라고 답했는데, 이를 좀 더 풀어보면 
			        폰트에서 가장 중요한 가치 중 하나가 지속가능성이라는 의미다. 
			  
			        '생존'이라는 목표를 가지고 '잘 먹고 잘 사는' 방향으로 나아가고 있는 그들이 찾은 해답은 결국 그들의 커피를 마시는 소비자들에게 있었던 것이 아니었을까? 
			        다른 화려한 목표에 여러 수식어로 자신들의 비전을 표현하는 브랜드들에 비하면 단순하고 현실적이라고 보일 수 있겠지만 그래서 오히려 사람들이 폰트에 보내는 애정은 더욱 선명하고 진하다.
			  
			        "단순히 돈을 많이 벌어서 큰 성장을 이루는 것이 목표는 아닙니다. 돈은 손님들에게 폰트가 지속적으로 선택받을 수 있게 하는 힘을 만들고, 구성원들의 삶을 영위할 수 있도록 하는 수단으로 사용될 거예요. 
			        많은 분들께서 사랑해 주신 덕에 잘 살아남았습니다. 앞으로도 최선을 다해 살아남겠습니다. 감사합니다."			  
			        폰트(PONT) 
			        로스팅 오피스 | 서울 영등포구 도림로139길 21 
			        용산점 | 서울 용산구 한강대로15길 19-16 1층 
			        문래점 | 서울 영등포구 경인로77가길 6 1층 
              `,
          },
        ],
        type: 'magazine',
        extra: {
          articleType: 'FIENDLY',
          mainImages: [
            {
              url: `/files/pont-01.webp`,
              name: 'pont-01.webp',
            },
          ],
          detailImages: [
            {
              url: `/files/pont-01.webp`,
              name: 'pont-01.webp',
            },
            {
              url: `/files/pont-02.webp`,
              name: 'pont-02.webp',
            },
            {
              url: `/files/pont-03.webp`,
              name: 'pont-03.webp',
            },
            {
              url: `/files/pont-04.webp`,
              name: 'pont-04.webp',
            },
            {
              url: `/files/pont-05.webp`,
              name: 'pont-05.webp',
            },
            {
              url: `/files/pont-06.webp`,
              name: 'pont-06.webp',
            },
            {
              url: `/files/pont-07.webp`,
              name: 'pont-07.webp',
            },
          ],
        },
        views: 111,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
      },
      {
        _id: await nextSeq('posts'),
        title: 'Higher Standard Solid System, 스탠다드시스템',
        content: [
          {
            d1: `
              품질에 대한 고집 
			        이를 실현하는 치밀함으로 완성한 순환 
              Higher Standard Solid System, 스탠다드시스템 
			  
              에디터/포토 지우탁 
			  
			        스탠다드시스템은 2021년 오픈 이후 특유의 분위기와 더불어 다양하면서도 높은 퀄리티의 커피들을 꾸준히 선보이면서 커피 마니아층은 물론, 일반 고객층에게도 큰 호응을 얻고 있는 브랜드다. 
			        특히 여러 해외 매체를 통해 알려지면서 해외에서도 찾아오는 손님들이 차지하는 비중이 절반에 가까운 곳이기도 하다. 공간 자체는 큰 규모라고 할 수 없지만 그만큼 압축된 개성으로 더욱 
			        선명하게 사람들에게 이름을 알리고 있는 곳인 셈이다. 청담동 골목 작은 공간에 자리하면서도 이처럼 확고하게 입지를 다져나갈 수 있었던 까닭은 무엇일까? 2023년을 마무리하는 12월, 
			        스탠다드시스템 이지혜 디렉터를 만나 이야기를 들어봤다.
              `,
          },
          {
            d2: `
              스탠다드시스템은 온오프라인 모두에서 일종의 확고한 틀을 느낄 수 있다. 이름에서부터 느껴지는 철저함은 인테리어, 커피의 구성, 각종 패키지들과 바의 동선 등 디테일한 부분에서도 
			        발견할 수 있다. 사전에 철저한 브랜딩과 기획이 있었음을 짐작할 수 있는 부분으로 브랜드의 완성도를 높이는 조건이라고 할 수 있다.  
			  
			        변화의 흐름에 올라타다 
			        "스탠다드시스템은 일산커피공장에서 운영하는 브랜드예요. 일산커피공장이 원두를 제공하는 제조업의 형태라면 스탠다드시스템은 고객과 직접 현장에서 마주하는 역할을 하는 서브 브랜드의 개념이라고
			        할 수 있어요." 
			  
              일산커피공장은 2007년 설립 이후 '완벽한 한 모금을 만든다'라는 신념으로 커피를 선보이고 있는 원두커피 전문 브랜드다. 일산커피공장 정강진 대표는 23년 경력의 커피인이기도 하다.
              `,
          },
          {
            d3: `
			        "국내에 본격적으로 커피가 보급되기 시작한 이후 한국의 커피 문화와 스타일은 변화와 다각화를 거듭했어요. 최근에는 스페셜티커피가 가장 대중적인 키워드로 자리 잡으면서 다양하게 파생되고 있는 모습이고요. 
			        이러한 변화를 고려했을 때 우리도 기존의 브랜드와 다른 분위기와 모습으로 고객분들과 만날 수 있다면 좋겠다는 생각이 들었죠." 
			  
			        전 세계 커피 시장 중에서도 전례 없이 빠른 속도로 변화해 온 한국의 커피 시장은 해외에서도 주목할 정도로 다양한 트렌드가 생기고 사라지기를 반복하고 있다. 특히 소비자들의 커피 수준이 
			        지속적으로 향상되면서 그들이 소비를 하는 기준 또한 더 다양해지고 있는 것이 최근의 흐름 중 하나. 이 시점에서 새롭게 유입되는 고객층이라고 할 수 있는 젊은 세대의 취향에 맞춰 마련한 
			        공간이 바로 스탠다드시스템인 것이다.
			
              `,
          },
          {
            d4: `
			        소통의 창구
			        이미 오랜 기간 누적해 온 노하우와 기술력을 보유한 만큼 제조와 관련된 모든 것들은 일산커피공장에서 맡는다. 반면 스탠다드시스템에서는 로스팅을 따로 진행하지 않는 대신 추출에 더 중점을 두고 있는 형태다. 
			  
			        "최고의 한잔을 내려서 고객분들에게 더 특별한 커피 경험을 제공하는 것에 집중하고 있어요. 이를 위해서 새로운 메뉴를 개발하기도 하고 서비스를 기획하고 있고요. 카페이면서도 쇼룸의 성격도 있다고 할 수 있죠. 
			        기존의 공장이라는 형태에서는 할 수 없었던 것들도 다양하게 시도해 볼 수 있고, 직접적으로 저희의 커피에 대한 반응을 현장에서 생생하게 들을 수 있다는 부분도 무척 매력적이고요."
			  `,
          },
          {
            d5: `
			        Higher Standard Solid System 

			        스탠다드시스템의 슬로건은 Higher Standard Solid System. 브랜드의 이름은 다르지만 그 시작점이 일산커피공장인 만큼 본질이나 방향성을 공유한다. 일산커피공장의 슬로건은 
			        ‘완벽한 한잔을 위하여’인데, 원두 하나하나의 품질까지 체크를 할 정도로 체계적인 관리가 이루어지고 있다고. 실제로 일산커피공장에서 생산되는 원두 중 로스팅 포인트에서 조금이라도 
			        벗어나는 결과물들은 폐기한다. 그만큼 품질 관리에 무척 까다롭다. 
			  
              “또 몇 년 전에 생두 가격이 폭등했을 때를 포함해서 회사를 창립한 이후로 가격을 인상한 적이 한 번도 없어요. 그럼에도 제공하는 원두에 관해서는 품질을 포기하지 않았고요. 대표님의 커피 경력이 23년 정도 되셨는데, 
			        처음 시작했을 때부터 지금까지 변함없는 자세로 커피를 하고 계세요. 그리고 이 장인정신을 고스란히 보여주는 브랜드가 일산커피공장이라면, 스탠다드시스템은 보다 현대적으로 풀어서 표현한 브랜드라고
			        할 수 있죠."
			  `,
          },
          {
            d6: `
              높은 기준을 통해 본질에 집중한 커피를 품질의 저하 없이 꾸준하게 제공하기 위해서는 이를 지속할 수 있는 시스템이 필요했고, 이것이 슬로건에 등장하는 솔리드 시스템이다. 
			  
              “보통 아침에 오픈하고 1시간 정도 커피 퀄리티를 체크하면서 조정해요. 에스프레소, 아메리카노, 라떼 등 메뉴를 각각 따로 체크를 하고, 따뜻한 음료와 시원한 음료로 제공되는 메뉴들의 경우에는 온도별 퀄리티도 모두 테스트를 진행해요. 제공되는 모든 잔에 대해 최고의 한 잔을 내리기 위해서 자체적으로 정한 기준에 적합한 지 확인하는 거죠. 
			        하루 동안만 해도 오픈 전을 비롯해서 중간에도 수시로 QC(Quality Check)를 할 정도로 커피 품질의 유지를 무척 중요하게 생각하고 실제로도 까다롭게 하고 있어요."
			  
              `,
          },
          {
            d7: `
			        직관적인 전달을 위해 
			        “사실 커피라는 게 좀 추상적이라고 할 수 있잖아요. 같은 커피를 마시고 나서도 느끼는 점들이 모두 제각각이 될 수 있는 것처럼요. 
			        그래서 어떤 분들이 드시더라도 저희가 보여드리고자 하는 맛을 공통적으로 전달할 수 있으면 좋겠다는 생각을 했어요.” 
			  
              스탠다드시스템에는 이러한 생각을 실현하기 위한 여러 장치들을 마련했는데, 그중 가장 눈에 띄며 직관적이라고 할 수 있는 것이 바로 원두의 정보가 담긴 인포메이션 카드다. 과거에 비하면 최근에는 브랜드마다의 개성을 
              필터 삼아 커피를 설명한 원두 카드를 커피와 함께 제공하는 모습을 어렵지 않게 마주할 수 있다. 그리고 스탠다드시스템의 카드는 주관적이기보다는 직관적이고 명확하다. 서로 다른 입맛, 취향을 지닌 이들이더라도 커피와 함께 
              접했을 때 그들이 전달하고자 하는 커피의 맛을 명료하게 이해할 수 있기를 바랐기 때문인데, 내부적으로 커피를 평가할 때 기준으로 하는 6가지 항목의 그래프를 삽입한 의도 또한 커피의 맛에 대해 보다 구체적으로 전하고 소통하기 위함이다. 
			  
              스탠다드시스템 
              서울 강남구 선릉로148길 48-5 
              @standardsystem.coffee 
              `,
          },
        ],
        type: 'magazine',
        extra: {
          articleType: 'FRIENDLY',
          mainImages: [
            {
              url: `/files/standard-01.webp`,
              name: 'standard-01.webp',
            },
          ],
          detailImages: [
            {
              url: `/files/standard-01.webp`,
              name: 'standard-01.webp',
            },
            {
              url: `/files/standard-02.webp`,
              name: 'standard-02.webp',
            },
            {
              url: `/files/standard-03.webp`,
              name: 'standard-03.webp',
            },
            {
              url: `/files/standard-04.webp`,
              name: 'standard-04.webp',
            },
            {
              url: `/files/standard-05.webp`,
              name: 'standard-05.webp',
            },
            {
              url: `/files/standard-06.webp`,
              name: 'standard-06.webp',
            },
            {
              url: `/files/standard-07.webp`,
              name: 'standard-07.webp',
            },
          ],
        },
        views: 112,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
      },
      {
        _id: await nextSeq('posts'),
        title: '영도의 새로운 랜드마크, P.ARK(피아크)',
        content: [
          {
            d1: `
              바다와 도시를 품은 공간 
			        로컬을 넘어 한국의 문화를 담다 
              영도의 새로운 랜드마크, P.ARK(피아크) 
			  
              에디터/포토 지우탁 
			  
			        부산에서도 현재 커피로 가장 뜨거운 주목을 받고 있는 지역이 바로 영도다. 다른 지역에 비해 비교적 사람들의 관심도, 유동인구도 적던 지역이었지만 
              최근 빠르게 활기를 띄고 있는 것. 커피 축제가 열리는 등 다양한 요소들로 인해 사람들의 이목이 쏠리고 있는데 그중 가장 많은 관심과 시선을 받고 있는 곳이 바로 P.ARK(피아크)다. 
              
              영도에 마치 하나의 거대한 배가 연상되는 형태로 자리잡고 있는 피아크. 이 거대한 공간은 어떤 의도에서, 사유를 통해 탄생하게 됐을까? 매일 셀 수 없이 많은 자리가 꽉 들어찰 정도로 인기를 끌고 있는 이유는 무엇일까?
              `,
          },
          {
            d2: `
			        거대한 방주이자 열린 공원 
              피아크(P.ARK)는 지난 21년 5월 오픈한 복합문화공간이다. F&B를 비롯해 문화와 예술, 전시, 액티비티 등 지금 시대가 주목하는 라이프 스타일을 기반으로 로컬 크리에이터와 브랜드 콘텐츠를 경험할 수 있다. 
              최근에는 ‘2023 코리아 유니크 베뉴(KUV)’에 선정되며 대한민국 대표 관광지로 입지를 다지고 있다. 
              피아크는 플랫폼의 ‘P’와 방주를 뜻하는 단어 ‘아크(Ark)’를 합쳐 창작자들을 위한 방주(Platform of Ark for Creator)이자 모두에게 열린 공원(Park)을 지향한다. 그런 만큼 공용 공간을 넓게 짓고 다양한 F&B, 라이프스타일, 아트, 컬처 등의 문화 예술 콘텐츠를 계절별로 담아내고 있다.  
              `,
          },
          {
            d3: `
              총 3,000평 규모의 피아크는 △다채로운 문화 콘텐츠와 잔디 테라스로 구성된 800평 규모의 ‘오션 가든’ △파노라마 오션뷰와 갓 구운 빵, 커피를 함께 맛보는 ‘피아크 카페&베이커리’, △트렌디한 식문화가 펼쳐지는 ‘어반 테이스티’, △독립된 공간에서 만들어내는 프라이빗한 경험 ‘루프탑 라운지’ 등으로 구성돼 있다. 특히 4층에 위치한 피아크 카페&베이커리는 건물 내 가장 큰 규모로 자리하고 있으며, 전면 유리 통창으로 펼쳐지는 가장 부산스러운 뷰를 만나볼 수 있는 매력적인 스팟. 파티셰와 바리스타 등 수십 명의 분야별 전문가들이 매일 아침 갓 구운 100여 종의 베이커리와 디저트, 30종이 넘는 커피와 음료를 제공하고 있다. 
              카페 내에서 판매되는 빵과 커피는 베이커리 팩토리와 로스팅 팩토리 등을 통해 모두 직접 제조, 생산하며 제품의 퀄리티 유지 및 향상에 힘쓰고 있는 점에서 신뢰가 간다.
              `,
          },
          {
            d4: `
              영도를 다시 뛰게 만든 랜드마크 
              피아크를 오픈하기에 앞서 여러 시설들을 방문한 결과, 이들은 공공에서 운영하는 공간은 편의시설이 부족하고 민간에서 운영하는 대형 카페는 문화 공간이 부족하다는 점을 발견했다.
              이러한 여러 가지 단점을 보완하는 최고의 편의시설을 갖춘 복합문화공간을 영도에 만들고 싶다는 생각으로 이어졌다. 그렇게 피아크는 생명력이 짧은 단순한 빌딩보다 지역의 랜드마크를 짓자는 것에서 시작했다. 
              궁극적으로는 부산 사람이나 관광객 모두 찾을 수 있는 문화 공간이 있다면 영도는 물론이고 부산을 대표하는 랜드마크가 될 수 있다고 본 것이다. 
              
              "부산 영도는 섬 전체가 하나의 행정구로, 조선업 쇠퇴와 함께 인구 소멸로 활기를 잃어 가던 지역입니다. 인적이 드물던 거리가 여행자들로 북적이며 동네 풍경이 바뀌기 시작한 것은 지역 특성을 매개로 
              새로운 가치를 창출하려는 청년 창업자나 지역 기업이 버려진 폐공장 등을 활용해 카페 등 개성 있는 문화 공간을 만들며 영도에 젊은 기운을 불어넣으면서부터로, 그 변화의 중심에 초대형 복합문화공간 
              피아크(P.ARK)가 있습니다. 옛 조선 수리 공장 일대에 자리한 피아크는 부산을 기반으로 성장한 선박 수리 회사 제일에스알(SR) 그룹이 조선업 침체로 공터가 된 부지를 사서 지역 발전의 바람을 담아 
              만든 공간입니다."
			  `,
          },
          {
            d5: `
              피아크 외부 건축물은 모기업인 제일그룹의 선박 아이덴티티를 반영하고자 거대한 크루즈선의 모습을 형상화했다. 일반적으로 배의 선실에 해당하는 곳은 카페와 복합문화공간, 
              갑판 부분은 아이들이 뛰어놀 수 있는 가든으로 구성했고, 화물을 싣는 아래 공간은 넓은 주차장을 만들어 방문객의 편의성을 높였다.  

              "피아크의 실내 인테리어 컨셉은 조화로움입니다. 영도의 자연적 특성을 보여주는 구름, 돌, 물방울 등의 형태와 재료를 사용하여 주변의 전망과 어우러지도록 했습니다. 
              구름의 형상을 닮은 조명, 물방울 같은 모양의 계단 스툴 가구, 영도 태종대의 암석을 상징하는 돌의 재질, 색을 닮은 가구와 오브제들을 구역별로 다르게 사용했습니다."
			  `,
          },
          {
            d6: `
              공간을 보다 온전히 경험할 수 있도록 
              앞서 언급한 것처럼 피아크에 방문한 손님들은 베이커리와 디저트는 100여 종, 커피와 음료는 30여 종에 달하는 메뉴를 선택할 수 있다. 
              각 파트별 전문가들이 매일 세심하게 준비하기 때문에 피아크를 더 특별하게 경험할 수 있는 베이스가 된다. 
              
              고훈민 로스터는 추천 메뉴로 피아크 대표 메뉴인 하버블렌드 아메리카노를 추천했다. 고소하면서도 묵직하고 단맛이 좋은 커피로 호불호 없이 누구나 편안하게 마실 수 있으며, 
              피아크의 다양한 베이커리와 최고의 밸런스를 이루기 때문. 
			  
              "또 다른 추천 메뉴는 갤리블렌드 아메리카노입니다. 하버가 고소함과 초콜릿 한 커피라면 갤리블렌드는 다양한 향을 가진 커피로, 때로는 꽃향기가 나고 베리와 같은 과일향이 
			        나면서 과일의 단맛을 느낄 수 있는 커피입니다. 서로 다른 두 가지 블렌드 커피를 즐겨 보는 것도 커피를 경험하는 재미가 될 것 같습니다."			  
              `,
          },
          {
            d7: `
              이세환 바리스타는 시그니처 커피인 마일드 블루 돌체라떼를 추천했는데, 피아크의 오션뷰와 부산항의 전경을 음료로 표현한 메뉴로, 
              푸른 색감의 돌체 베이스 위에 하버블렌드 에스프레소가 플로팅 되어 마치 손 안에서 피아크를 통째로 즐기는 듯한 경험을 느낄 수 있다. 
              
              "커피를 드시지 못하는 분들께는 히비스커스 패션후르츠 아이스티를 추천합니다. 패션후르츠청의 새콤달콤함에 은은하게 퍼지는 히비스커스 향이 조화를 이루어 남녀노소 부담 없이 즐길 수 있습니다. 
              또 베이커리는 피아크 고구만주를 추천합니다. 부드러운 만주피와 달콤한 고구마 앙금이 피아크의 어떤 음료와도 잘 어울리는 만능 제품이라고 생각합니다. 특히 조선시대, 고구마의 최초 시배지가 영도였다는
              스토리를 생각하며 고구만주를 즐겨보는 것도 뜻깊을 것 같습니다." 
              `,
          },
        ],
        type: 'magazine',
        extra: {
          articleType: 'JOYFUL',
          mainImages: [
            {
              url: `/files/p_ark-01.webp`,
              name: 'p_ark-01.webp',
            },
          ],
          detailImages: [
            {
              url: `/files/p_ark-01.webp`,
              name: 'p_ark-01.webp',
            },
            {
              url: `/files/p_ark-02.webp`,
              name: 'p_ark-02.webp',
            },
            {
              url: `/files/p_ark-03.webp`,
              name: 'p_ark-03.webp',
            },
            {
              url: `/files/p_ark-04.webp`,
              name: 'p_ark-04.webp',
            },
            {
              url: `/files/p_ark-05.webp`,
              name: 'p_ark-05.webp',
            },
            {
              url: `/files/p_ark-06.webp`,
              name: 'p_ark-06.webp',
            },
            {
              url: `/files/p_ark-07.webp`,
              name: 'p_ark-07.webp',
            },
          ],
        },
        views: 119,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
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
