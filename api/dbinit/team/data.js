import moment from 'moment';

// function getDay(day = 0) {
//   return moment().add(day, 'days').format('YYYY.MM.DD');
// }

function getTime(day = 0, second = 0) {
  return moment().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ss');
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
          birthday: '03-23',
          membershipClass: 'MC03',
          image: '',
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
          birthday: '04-23',
          membershipClass: 'MC01',
          image: '',
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
          birthday: '03-23',
          membershipClass: 'MC03',
          image: '',
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
          birthday: '03-23',
          membershipClass: 'MC01',
          images: [],
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
          birthday: '03-23',
          membershipClass: 'MC01',
          image: '',
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
          birthday: '03-28',
          membershipClass: 'MC01',
          image: '',
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
          birthday: '03-23',
          membershipClass: 'MC01',
          image: '',
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
          birthday: '03-23',
          membershipClass: 'MC01',
          image: '',
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
          birthday: '03-23',
          membershipClass: 'MC01',
          image: '',
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
          birthday: '03-23',
          membershipClass: 'MC01',
          image: '',
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
          birthday: '03-23',
          membershipClass: 'MC01',
          image: '',
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
        price: 13000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '버터 팻 트리오 Butter Fat Trio',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/anthracitecoffee_product_01.jpg`,
            fileName: 'anthracitecoffee_product_01.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/anthracitecoffee_product_01_fullpage.png`,
            fileName: 'anthracitecoffee_product_01_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>“안 돼요, 슈피넬씨. 쓸데 없어요. 
            내가 훌륭한 것을 연주하기를 기대하고 계실는지 누가 알겠어요! 
            그런데 나는 배운 것을 모두 잊어버렸는걸요. 정말입니다. 
            악보를 보지 않고는 거의 아무것도 칠 수 없어요.” 
            “그러시면, 그 ‘거의 아무 것도 없는’ 바로 그것을 쳐 주십시오!” 
            – 토마스 만, 『트리스탄』 중에서 </p>
            
            <p> 음표는 악보에 표시되어 그 탄생을 알리고 움직이는 아름다움을 갖게 됩니다. 모든 악기에서 파생된 소리는 곧 하나의 연주를 위해 존재하게 됩니다. 토마스 만의 작품에 등장하는 곡들은 작품의 전체적 흐름을 이끌어가는 역할을 합니다. 그의 문장들은 마치 하나의 곡의 형태를 만들며 작곡을 하듯 묘사하고 있습니다. 존재의 이유를 아는 소리는 자유롭고 악보 안에서 자신의 위치를 정확히 잡아냅니다. 이 다양한 소리의 연주처럼 각기 다른 대륙이 조화를 갖도록 만들었습니다. 중남미의 균형감, 아시아의 묵직한 풍미, 아프리카의 다채로운 향미를 담아낸 버터 팻 트리오입니다. 
            버터 팻 트리오는 커피가 가진 묵직한 질감과 진한 풍미를 만들기 위해, 중남미의 커피를 베이스로 사용하여 모든 산지의 커피를 최대한 활용했습니다. 견과류의 노트와 단맛이 지배적인 브라질 커피를 베이스로 하며, 콜롬비아와 과테말라를 추가하여 복합성과 질감을 더했습니다. 에티오피아는 다크로스팅 단계에서도 그 본연의 과일 풍미를 놓치지 않도록 잡아주고, 인도네시아의 이국적 향신료와 같이 그 쌉싸름한 풍미로 마무리합니다. 버터 팻 트리오는 균형감이 좋은 진한 커피를 지향합니다. 단단하면서도 힘 있는 풍미로 스파이시한 다크 초콜릿의 여운으로 완성됩니다. </p>
            
            <p>구성 : 브라질 Brazil / 에티오피아 Ethiopia / 콜롬비아 Colombia / 과테말라 Guatemala / 인도네시아 Indonesia
            로스팅 레벨 : 미디움 다크 Medium Dark
            플레이버 : 볶은 견과, 스파이시, 다크 초콜렛
            노트 : 버터 팻 트리오는 균형잡힌 진한 커피를 지향합니다. 단단하면서도 묵직한 풍미는 스파이시한 다크 초콜렛의 여운으로 완성됩니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: 'anthracitecoffee',
          sort: 2,
          weight: ['200g', '500g'],
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 12000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '히스토리 미스터리 History Mystery',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/anthracitecoffee_product_02.jpg`,
            fileName: 'anthracitecoffee_product_02.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/anthracitecoffee_product_02_fullpage.png`,
            fileName: 'anthracitecoffee_product_02_fullpage.png',
          },
        ],
        content: `
            <div class="product-detail">
              <p>밤, 덤불과 나무 사이,
              집 한 채 한 창가에 희미하게 빛이 비쳤다.
              보이지 않는 그 방에서
              누군가 서서 플루트를 불었다.
              오래전부터 널리 알려진 선율이었다.
              그 노래는 밤 속으로 무척이나 온화하게 흘러들었다.
              마치 모든 지역이 고향인 것처럼.
              마치 모든 길이 완성된 것처럼.
              – 헤르만 헤세의 『플루트 연주』 중에서</p>
              <p>커피는 단조로울 수 없습니다. 우리의 매일이 다르듯 강렬하거나 혹은 가볍게, 여러 가지의 느낌으로 다가옵니다. 지금의 시간과 장소, 이 순간의 음악과 소리 모두가 현재와 과거를 만들고 있습니다. 함께 있는 사람과 주변의 사물들에 따라 한 잔의 커피에는 또 다른 역사가 생겨납니다. 온화한 플루트의 음율로 표현되는 헤세의 문장은 오랜 시간이 만들어낸 긴 파동을 연상하게 합니다. 그 이야기가 더해진 과거와 역사, 이 자체가 오늘의 커피를 만들 수 있습니다. 가장 보편적이며 기본을 유지해내는 클래식한 완성도의 히스토리 미스터리입니다.
              히스토리 미스터리는 중남미 커피를 중점으로 부드럽고 짙은 풍미와 아프리카의 섬세한 향미를 느낄 수 있습니다. 고소한 풍미와 단맛이 좋은 브라질을 베이스로 하여, 과테말라와 에티오피아로 커피의 질감과 향미의 밸런스를 맞췄습니다. 보편적 커피가 주는 향미와 의미에 집중하길 원합니다. 가장 기본적인 것을 잡아내기 위해 부드럽고 고소함으로 무게감을 만들었습니다. 우리는 그 속에 어떤 결합된 지점을 넣길 원했고, 이 복합적인 향미를 놓치지 않으며 부드러움과 깊이감을 유지하도록 설계한 커피입니다.</p>
              <p>구성 : 브라질 Brazil / 콜롬비아 Colombia / 과테말라 Guatemala <hr />
              로스팅 레벨 : 다크 Dark <hr />
              플레이버 : 견과류, 브라운 슈가, 카카오 <hr />
              노트 : 히스토리 미스터리는 부드러운 질감의 커피 입니다. 볶은 견과류, 갈색설탕
              의 단맛과 카카오의 깊은 향이 있습니다.</p>
            </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: 'anthracitecoffee',
          sort: 2,
          weight: ['200g', '500g'],
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 17000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '케냐 AA Top 키리아이니 Kenya AA Top Kiriaini',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/anthracitecoffee_product_04.jpg`,
            fileName: 'anthracitecoffee_product_04.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/anthracitecoffee_product_03_fullpage.png`,
            fileName: 'anthracitecoffee_product_03_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>지역 : Kikuyu <hr />
            품종 : SL34, SL28 <hr />
            고도 : 1,700m - 1,800m <hr />
            등급 : AA Top <hr />
            로스팅레벨 : Light Medium <hr />
            가공방식 : Washed <hr />
            노트 :  Grapefruit, Pecan, Maplesyrup, Creamy <hr />
            중량 : 200g</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: 'anthracitecoffee',
          sort: 2,
          weight: ['200g'],
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 12000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'Blend Drip Bag Set',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/anthracitecoffee_product_04.jpg`,
            fileName: 'anthracitecoffee_product_04.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/anthracitecoffee_product_04_fullpage.png`,
            fileName: 'anthracitecoffee_product_04_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>지역 : Kikuyu <hr />
            품종 : SL34, SL28 <hr />
            고도 : 1,700m - 1,800m <hr />
            등급 : AA Top <hr />
            로스팅레벨 : Light Medium <hr />
            가공방식 : Washed <hr />
            노트 :  Grapefruit, Pecan, Maplesyrup, Creamy <hr />
            중량 : 200g</p> 
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: 'anthracitecoffee',
          sort: 2,
          weight: ['200g'],
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 15000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'COLD BREW 윌리엄 블레이크',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/anthracitecoffee_product_05.jpg`,
            fileName: 'anthracitecoffee_product_05.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/anthracitecoffee_product_05_fullpage.png`,
            fileName: 'anthracitecoffee_product_05_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>윌리엄 블레이크의 시 정신은 이미 우리가 알고 있는 인간의 내면입니다.
            모든 대상을 자각할 때, 떠오르는 이미지와 상상을 넘어 
            우리에게 존재하는 내면의 거주자와 다시 만납니다. 
            다크로스팅의 다양한 향미와 묵직한 단맛을 갖고 있으며
            절인 대추야자, 블랜커런트, 카카오닙의 여운으로 
            깊고 깨끗한 질감을 가진 완성도 있는 블랜드, 윌리엄 블레이크 입니다.</p>
            <p>구성 : 케냐 Kenya / 과테말라 Guatemala / 에티오피아 Ethiopia <hr />
            로스팅 레벨 : 다크 Dark <hr />
            노트 : cacao, melt, roasted almond, roasted peanut, chocolate, smooth-body</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: 'anthracitecoffee',
          sort: 2,
          weight: ['300ml'],
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 1,
        price: 45000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: 'Anthracite x S well 오닉스 텀블러 (470ml)',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/anthracitecoffee_product_06.jpg`,
            fileName: 'anthracitecoffee_product_06.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/anthracitecoffee_product_06_fullpage.png`,
            fileName: 'anthracitecoffee_product_06_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>무엇이든 더 오래도록 따듯하고, 시원하게 유지할 수 있는 S’WELL 텀블러
            물 튀김 방지 슬라이드 오픈 뚜껑과 손잡이로 쉽게 휴대하고 마실 수 있습니다 .
            오닉스는 고급 18-8 스테인리스 스틸 사용으로 그 어떤 제품보다 음료를 더 차갑게 또는 뜨겁게 유지합니다. 
            뛰어난 성능, 세련된 실루엣, 다양한 디자인을 보유하고 있습니다.</p>
            <p>[ 상세 사이즈 ] <hr />
            사이즈(cm) 너비 9.5 높이 13.5 <hr />
            용량 약 470ml <hr />
            무게 312g <hr />
            보온 3시간 / 보냉 10시간 가능</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: 'anthracitecoffee',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 32000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '보난자 드립백 24개입 [3종]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/bonanzacoffee_products_01.jpg`,
            fileName: 'bonanzacoffee_products_01.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_01_fuillpage.png`,
            fileName: 'bonanzacoffee_products_01_fuillpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>DRIP BAG 24ea [3 types]
            원두의 향미는 간직하면서도, 간편히 내려 마시기 좋은 보난자 드립백. 넉넉한 용량과 합리적인 가격으로 구성된 24개입은 오피스에서 나누어 마시거나, 스페셜티 커피를 즐기는 분께 집들이 선물로 추천드려요. 개별 포장으로 보관 및 휴대가 편리해 집에 두고 마시기에도 좋습니다. <hr />
            보난자 블렌드 Bonanza Blend : 초콜렛 트러플, 다크 체리 <hr />
            보난자 싱글 오리진 Bonanza Single Origin: 플로럴, 베리, 백설탕 <hr />
            보난자 디카페인 Bonanza Decaf : 꿀, 배, 자두</p>
            
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: 'bonanzacoffee',
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
        name: '보난자 블렌드 콜롬비아 & 브라질 250g',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/bonanzacoffee_products_02.png`,
            fileName: 'bonanzacoffee_products_02.png',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_02_fuillpage.png`,
            fileName: 'bonanzacoffee_products_02_fuillpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>BONANZA BLEND COLOMBIA & BRAZIL 250g <hr />
            보난자커피 스테디 셀러. 초콜렛 트러플, 다크 체리  <hr />
            보난자 블렌드 원두 1개 구매 시 10% 할인  <hr />
            보난자 블렌드 원두 2개 이상 구매 시 10% 할인 + 원두 리필 보틀 증정 *한정 수량  <hr />
            Origin | Colombia | Brazil  <hr />
            Region | Pitalito, Huila | Minas Gerais  <hr />
            Varietal | Caturra, Castillo | Mixed  <hr />
            Process | Fully Washed | Natural  <hr />
            지속가능한 커피 문화를 위해 보난자커피는 매해 커피 수확 철이면 더욱 투명하고 공정한 방식을 취하는 농장을 찾습니다. 이번 보난자 블렌드는 풍부한 플레이버와 부드러운 바디감이 돋보이는 브라질 Sitio Santa Clara 농장의 커피, 그리고 오랜 시간 거래를 이어왔던 콜롬비아 El Carmen 농장의 커피를 블렌딩하여 더욱 균형감이 좋은 커피를 소개해 드릴 수 있게 되었습니다. 부드러운 질감 아래 초콜렛 트러플의 쌉싸름함, 다크 체리의 농후한 단맛이 느껴지는 블렌드입니다. </p>
            
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: 'bonanzacoffee',
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
        name: '보난자 드립백 5개입 3종 + 드립 어시스트',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/bonanzacoffee_products_03.jpg`,
            fileName: 'bonanzacoffee_products_03.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_03_fuillpage.png`,
            fileName: 'bonanzacoffee_products_03_fuillpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>DRIP BAG SET [3 types] + DRIP ASSIST
            구성 | 드립백 5개입 3박스 + 드립 어시스트
            원두 본연의 향미를 간직한 드립 커피 한 잔, 이제 더욱 편하게 즐기세요. 
            개별 포장으로 보관 및 휴대가 편리해, 
            언제 어디에서든 가볍게 내려 마시기 좋은 드립백과 드립 어시스트 세트입니다. 
            드립백으로 커피를 내릴 때 아랫부분이 잠겨 불편했던 분들을 위해, 
            다양한 컵에 거치할 수 있는 드립 어시스트를 함께 구성했어요. 
            평소 드립백 커피를 즐겨 드시는 분들께 선물용으로 추천드려요. 
            *보난자커피의 시그니처 원두 3종 중 원하는 종류를 골라 구성하실 수 있습니다. <hr />
            보난자 블렌드 Bonanza Blend : 초콜렛 트러플, 다크 체리 <hr />
            보난자 싱글 오리진 Bonanza Single Origin: 플로럴, 베리, 백설탕 <hr />
            보난자 디카페인 Bonanza Decaf : 꿀, 배, 자두 </p>
            
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['coffee'],
          brand: 'bonanzacoffee',
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
        name: '[ ACME x BONANZA COFFEE ] 보난자 머그잔 L [350ml]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/bonanzacoffee_products_04.webp`,
            fileName: 'bonanzacoffee_products_04.webp',
          },
        ],
        detailImages: [
          {
            url: `/files/bonanzacoffee_products_04_fuillpage.png`,
            fileName: 'bonanzacoffee_products_04_fuillpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>ACME x BONANZA COFFEE MUG L [350ml] <hr />
            Ø 12cm x H 6cm <hr />
            ‘Unnecessarily Large’ 라지 사이즈의 머그잔과 소서 세트입니다. 보난자커피의 이상적인 라떼 레시피를 구현할 수 있는 커피잔을 만들기 위해, 클래식한 디자인과 튼튼한 내구성을 갖추어 많은 바리스타들이 사랑하는 브랜드 ACME와 함께 제작했습니다.
            또한 잔 입구가 넓어 바리스타들이 라떼 아트 실력을 보여주기에 최적화된 디자인으로, 라떼아트 챔피언들이 주로 사용하는 Vertex Bowl 라떼 잔의 특징을 반영했습니다.
            350ml 용량의 사이즈로, 따뜻한 커피를 기존 커피잔보다 더 오래동안 맛있게 즐길 수 있습니다. <hr />
            *소서에 새겨진 문구는 모두 수작업으로 이루어져 제품에 따라 위치가 상이할 수 있습니다. 이로 인한 교환, 환불은 어려우니 구매 시 참고해 주세요.
            *별도 박스 구성 없이 종이 완충재로 포장해 보내드립니다. </p>
            
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['goods'],
          brand: 'bonanzacoffee',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 45000,
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
            url: `/files/bonanzacoffee_products_04_fuillpage.png`,
            fileName: 'bonanzacoffee_products_04_fuillpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>TEAM BONANZA T-SHIRT [WHITE] 
            보난자커피 슬로건과 로고가 앞뒤로 새겨진 보난자 유니폼 긴팔 티셔츠입니다. </p>
            
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['goods'],
          brand: 'bonanzacoffee',
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
        name: '스테킹 머그컵의 원조 브랜드 킵댓',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/keepthatcoffee_products_01.jpg`,
            fileName: 'keepthatcoffee_products_01.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_01_fullpage.png`,
            fileName: 'keepthatcoffee_products_01_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>스테킹 머그컵의 원조 브랜드 킵댓
            독보적인 컬러감과 전통적인 머그의 디자인으로 어느 공간에나 잘 어울립니다.
            커피, 차 어떤 음료와도 잘 어울리고 인테리어 소품으로도 좋은 제품 입니다. </p>
            
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['goods'],
          brand: 'keepthatcoffee',
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
        name: '킵댓 스터코 블렌드(Strong) 200g [원산지:국산(경기도 수원시 팔달구)]',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/keepthatcoffee_products_02.jpg`,
            fileName: 'keepthatcoffee_products_02.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_02_fullpage.png`,
            fileName: 'keepthatcoffee_products_02_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>에스프레소 본질적인 고유의 특성을 잃지 않기 위한 고전적인 에스프레소 블렌드를 재해석 하였습니다.스터코 라이언중 Strong(강하다) 이라는 명칭을 담당하는 원두로써 무게감에 큰 중점을 두었습니다.강배전 원두의 특징인 탄맛 또는 과도한 쓴맛만 강조되는 것을 방지하며, 건식과 수세식 가공방식의 원두를 적절히 조합하여 마일드하면서도 강배전 특유의 무게감을 잃지 않는 결과물을 만들어냈습니다.</p>
            
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: 'keepthatcoffee',
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
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/keepthatcoffee_products_03.jpg`,
            fileName: 'keepthatcoffee_products_03.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_03_fullpage.png`,
            fileName: 'keepthatcoffee_products_03_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>생두도 하나의 농산품이며, 수확시기와 제철이 존재합니다.매 시기 좋은 재료들을 가지고 산뜻한 커피를 만들고 있습니다.스터코 라인업 중 Smooth(부드러운) 라는 명칭을 담당하는 원두로써 질감과 향에 큰 중점을 두었습니다.로스팅시 열의 역활을 확실하게 구분하여 무너지거나 특징없는 마일드함만을 추구하는것이 아닌, 1차 크랙 이후 2차 크랙 중간지점의 구간을 충분한 시간으로 구성하여 원두의 향미, 산미, 단맛, 밸런스를 살릴 수 있도록 구현하였습니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: 'keepthatcoffee',
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
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/keepthatcoffee_products_04.jpg`,
            fileName: 'keepthatcoffee_products_04.jpg',
          },
        ],
        detailImages: [
          {
            url: `/files/keepthatcoffee_products_04_fullpage.png`,
            fileName: 'keepthatcoffee_products_04_fullpage.png',
          },
        ],
        content: `
          <div class="product-detail">
            <p>생두도 하나의 농산품이며, 수확시기와 제철이 존재합니다.매 시기 좋은 재료들을 가지고 산뜻한 커피를 만들고 있습니다.스터코 라인업 중 Smooth(부드러운) 라는 명칭을 담당하는 원두로써 질감과 향에 큰 중점을 두었습니다.로스팅시 열의 역활을 확실하게 구분하여 무너지거나 특징없는 마일드함만을 추구하는것이 아닌, 1차 크랙 이후 2차 크랙 중간지점의 구간을 충분한 시간으로 구성하여 원두의 향미, 산미, 단맛, 밸런스를 살릴 수 있도록 구현하였습니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['coffee'],
          brand: 'keepthatcoffee',
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
        buyQuantity: 200,
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
        quantity: 310,
        buyQuantity: 200,
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
        quantity: 310,
        buyQuantity: 200,
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
            name: '버터 팻 트리오 Butter Fat Trio',
            image: 'anthracitecoffee_product_01.jpg',
            quantity: 1,
            price: 13000,
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
            name: '히스토리 미스터리 History Mystery',
            image: 'anthracitecoffee_product_02.jpg',
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
            name: '케냐 AA Top 키리아이니 Kenya AA Top Kiriaini',
            image: 'anthracitecoffee_product_04.jpg',
            quantity: 1,
            price: 17000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 17000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 20000,
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
            name: '보난자 드립백 5개입 3종 + 드립 어시스트',
            fileName: 'bonanzacoffee_products_03.jpg',
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
            name: '보난자 드립백 5개입 3종 + 드립 어시스트',
            image: 'bonanzacoffee_products_03.jpg',
            quantity: 2,
            price: 45000,
            reply_id: 3,
          },
          {
            _id: 2,
            seller_id: 1,
            state: 'OS020',
            name: '버터 팻 트리오 Butter Fat Trio',
            image: 'anthracitecoffee_product_01.jpg',
            quantity: 1,
            price: 13000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 90000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 103000,
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
        user_id: 1,
        product_id: 1,
        quantity: 2,
        createdAt: getTime(-7, -60 * 30),
        updatedAt: getTime(-7, -60 * 30),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 1,
        product_id: 2,
        quantity: 1,
        createdAt: getTime(-4, -60 * 30),
        updatedAt: getTime(-3, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 1,
        product_id: 3,
        quantity: 2,
        createdAt: getTime(-3, -60 * 60 * 4),
        updatedAt: getTime(-3, -60 * 60 * 4),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 2,
        product_id: 4,
        quantity: 3,
        createdAt: getTime(-2, -60 * 60 * 12),
        updatedAt: getTime(-1, -60 * 60 * 20),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 2,
        product_id: 4,
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
      [
        {
          _id: 1,
          title: '편안함 속에서 공유하는 즐거움, COEO(코에오)',
          content: `<div className="magazine-desc-contents">
          <img className="magazine-desc-img" src={cafeCoeo} />
          <h3 className="magazine-desc-subheading">COFFEE.HUMAN.LOVE LIFEe</h3>
          <h4 className="magazine-desc-subheading">편안함 속에서 공유하는 즐거움, COEO(코에오)</h4>
          <p className="magazine-desc-paragraph">
            에디터/포토 지우탁
            <br />
            <br />
            골목과 코너의 묘미는 장면의 전환에 있다. 각각의 거리로 들어설 때마다 새로운 풍경과 발견에 대한 기대감을 가질 수 있고, 같은 거리라도 보는 방향이나 지나가는 속도에 따라서도 크고 작은
            변화를 찾을 수 있다. 화려할 때도, 소소할 때도 있지만 영화가 여러 장면의 연결로 완성되는 것처럼 우리가 마주하게 되는 거리들 또한 하루를 구성하는 장면들인 셈이다.
            <br />
            <br />
            성수동에서도 조금 한적한 거리에는 그런 장면들 중에서도 눈에 띌 COEO(코에오)가 자리하고 있다. 얼핏 보면 공방 같기도 한 외관에 비해 따뜻한 톤의 내부의 반전을 발견할 수 있고, 밖에 세워둔
            다양한 '탈것'들에서 공간에 대해 다양한 상상을 하게 만드는 곳이다. 또 코에오를 찾은 날은 겨울과 봄의 경계였던 탓에 아직 쌀쌀했으나 유난히도 볕이 잘 들었다. 하루의, 누군가의 기승전결
            중에서 하나의 장면으로 넣기에 이보다 적절할 수 있을까라는 생각이 절로 들었다.
          </p>
          <img className="magazine-desc-img" src={cafeCoeo} />
          <h4 className="magazine-desc-subheading">함께 만들고, 목소리가 모이는 공간</h4>
          <p className="magazine-desc-paragraph">
            코에오(COEO)는 라틴어로 '함께 가다', '모이다'라는 뜻이다. 이중적인 의미로 일본어인 声を（こえを）'목소리를'이라는 뜻도 담고 있다.
            <br />
            <br />
            <strong>
              "카페는 많은 분들이 와서 조용히 즐기기도 하지만 많은 분들이 모이고, 만나고, 대화하는 장소입니다. 손님과 저희가 함께 만들어가는 공간이자, 사람들이 모여서 목소리를 낼 수 있는 공간이라는
              의미를 담아 이름을 정했습니다."
            </strong>
            <br />
            <br />
            코에오의 슬로건은 'COFFEE.HUMAN.LOVE LIFE'다. 커피라는 매개체로 많은 사람들의 삶에 녹아들어 그들과 공유하고, 서로의 안부를 묻는, 소소한 LOVE LIFE를 지향하고 있다. 코에오의 이름을 걸기
            위한 공간을 찾을 때, '함께' 혹은 각자가 어우러져 코에오라는 공간에서 이곳을 찾은 사람들이 각자의 방식으로 편안하게 시간을 보내다 갈 수 있기를 바랐다. 그래서일까, 첫 매장이었던 이태원에서
            성수동으로 매장을 이전할 때 북적대는 메인거리가 아닌, 조금은 떨어진 곳에 한적하고 아늑한 공간이 자연스럽게 눈에 들어왔다.
          </p>
          <img className="magazine-desc-img" src={cafeCoeo} />
          <h4 className="magazine-desc-subheading">오롯이 즐길 수 있는 편안함</h4>
          <p className="magazine-desc-paragraph">
            코에오를 방문하는 고객들은 주로 필터커피를 찾아오는, 커피 자체에 깊게 매료되어 있는 이들이 대부분이다. 여기에는 쟁쟁한 커피 브랜드들 사이에서도 특유의 감성과 퀄리티를 통해 신뢰받는
            브랜드로 자리 잡은 것 또한 한몫을 했다고 할 수 있다. 이밖에도 시그니처 커피로 통하는 'YUKI'(유키)는 콜드브루 커피 위에 하얀 크림과 가니쉬가 올라가는 메뉴로, 이름처럼 겨울에 내린 눈을
            닮은 음료가 있다.
            <br />
            <br />
            <strong>
              "필터커피로는 5-8 종류의 라인업을 주기적으로 변경하여 서브하고 있습니다. 에스프레소 머신으로 서브하는 커피로는 2종류의 블렌드와 디카페인이 있고요. 매장에는 커피 외에도 논커피 음료를
              즐기시는 분들도 많으시기 때문에 6가지 정도의 논커피 종류를 준비해서 제공하고 있습니다. 눈을 닮은 커피 'YUKI'는 시그니쳐 메뉴입니다. 차처럼 가벼우면서 산뜻하고 향긋합니다. 처음 매장에
              방문하신다면 무조건 YUKI를 드셔보시는 것을 추천합니다."
            </strong>
          </p>
          <img className="magazine-desc-img" src={cafeCoeo} />
          <h4 className="magazine-desc-subheading">공간의 한계에서 나아간 '코에오'</h4>
          <p className="magazine-desc-paragraph">
            <strong>
              "코에오를 단순히 커피와 디저트를 즐기는 공간으로만 운영하고 싶진 않았어요. 코에오는 한 마디로 정의할 수 없는 '코에오' 자체이고 싶었습니다. 문화를 공유하고 다양한 사람들이 모여 문화를
              공유하고 각자의 취향대로 즐기는 공간이길 바랐습니다. 코에오와 함께 의미가 담긴 일이면 무엇이든 다양하게 도전하고, 기획하려고 합니다. '함께' 한다는 사실만으로도 행사의 주체가 되는 분,
              찾아오시는 분들 모두가 행복해지더라고요."
            </strong>
          </p>
          <img className="magazine-desc-img" src={cafeCoeo} />
          <p className="magazine-desc-paragraph">
            이들의 생각처럼 코에오는 지난 시간 동안 소소하지만 누구나 '함께' 즐길 수 있는 것들을 진행해 왔다. ▲성소수자들의 인권을 위해 활동하는 단골손님이자 변호사 Eric의 게스트 바리스타
            행사-성소수자단체 기부행사 ▲분재를 하시는 단골손님과 진행한 식목일 팝업행사 ▲산 하나를 통으로 빌린 캠핑장에서 브루잉 행사(단골손님의 강력추천으로 참여) ▲몽골여행을 다녀온 단골손님의
            1주년 기념 여행 사진전 - 판매금 몽골어린이단체 기부 ▲생산자와 소비자를 연결하는 가치에 집중하는 마르셰시장- 커피장 참여 ▲단골손님들이 셀러로 참여해 모두 모여 즐기는 '이웃마켓'(매년 봄,
            가을 진행) ▲후쿠오카에서 워킹홀리데이를 온 단골손님의 후쿠오카 로컬 로스터리들을 소개하는 브루잉 행사 등등이 있었다. 크게 화려하거나 모든 이들의 눈을 사로잡을 만큼 큰 스케일의 행사들이
            아닌 소소한 이벤트들이었으나 모두 코에오의 단골손님들이 없었다면, 함께 할 사람들이 존재하지 않았다면 시작도 할 수 없던 일들인 셈이다. 오히려 다른 브랜드에서는 경험하기 힘든 유니크한
            콘텐츠인 것이다.
          </p>
          <img className="magazine-desc-img" src={cafeCoeo} />
          <h4 className="magazine-desc-subheading">문화를 공유하고 즐길 수 있는 공간</h4>
          <p className="magazine-desc-paragraph">
            코에오의 소식을 접하다 보면 유독 로컬 상권을 중심으로 다양한 인연을 맺고 있다는 것을 볼 수 있다. 이웃 매장끼리 서로 돕거나 협업을 하는 등 함께 하는 경우가 없는 것은 아니지만, 코에오가
            보여주는 '함께'는 조금 더 친밀하고 각별하게 보인다.
            <br />
            <br />
            <strong>
              "매장을 운영하면서 너무 많은 지역 주민분들과 감사한 인연을 만들고 있습니다. 그중 핸드메이드 실버 주얼리 브랜드인 '하이데저트' 친구들을 소개하고 싶어요. 하이데저트 친구들은 이웃마켓에서
              본인들이 만든 실버 주얼리를 판매하는 개인 셀러로 참여했는데, 사람들의 반응이 폭발적이었어요. 본인들이 만들어낸 제품이 사랑을 받는 모습에 용기를 얻어 하던 일을 정리하고 주얼리 브랜드를
              시작하기로 마음을 먹었고, 현재는 온/오프라인에서 활발하게 활동하고 있는 친구들입니다. 코에오 매장과 아주 가까운 곳에 쇼룸 겸 작업실을 오픈했습니다."
            </strong>
            <br />
            <br />
            앞으로의 방향성을 묻는 질문에 이들은 "코에오를 단순히 커피와 디저트를 즐기는 공간으로만 운영하고 싶지는 않다."라고 답했다. 다양한 사람들이 모여 문화를 공유하고 각자의 취향대로 즐기는
            공간이길 바란다는 것. 그리고 이를 위해 앞으로도 지금까지처럼 코에오와 함께 의미가 담긴 일이면 무엇이든 다양하게 도전하고, 기획할 것임을 밝혔다.
          </p>
          <img className="magazine-desc-img" src={cafeCoeo} />
          <p className="magazine-desc-paragraph">
            무엇보다 '함께'라는 부사가 잘 어울리는 공간이라는 생각이 들었다. 사소한 인연이라도 소중하게 여길 줄 알고, 이를 이어나가는 것 또한 자연스럽게 찾게 만드는 공간의 조건이라고 할 수 있지
            않을까. 소소하지만 단단한 유대감으로 엮인 인연은 그 자체로 일종의 안정감을 준다. 그리고 그러한 안정감과 편안함 속에서 소통과 공유를 할 수 있는 시간이자 공간은 지금 시대를 살아가는
            우리들에게 있어 꽤나 소중하다.
            <br />
            <br />
            COEO(코에오)
            <br />
            서울특별시 성동구 성수이로16길 45, 1층
            <br />
            @coeo_kr
          </p>
        </div>`,
          type: 'magazine',
          extra: {
            articleType: 'USEFUL',
            images: ['coeo-01.jpg', 'coeo-02.jpg', 'coeo-03.jpg', 'coeo-04.jpg', 'coeo-05.jpg', 'coeo-06.jpg', 'coeo-07.jpg'],
          },
          views: 2000,
          createdAt: '2024.04.16 17:29:19',
          updatedAt: '2024.04.16 17:29:19',
        },
        {
          _id: 2,
          title: '함께 채워가는 공간, 연필(緣苾)',
          content: '입체적인 콘텐츠',
          type: 'magazine',
          extra: {
            articleType: 'FIENDLY',
            images: ['yeonpil-01.jpg', 'yeonpil-02.jpg', 'yeonpil-03.jpg', 'yeonpil-04.jpg', 'yeonpil-05.jpg', 'yeonpil-06.jpg', 'yeonpil-07.jpg'],
          },
          views: 50,
          createdAt: '2024.04.16 17:29:07',
          updatedAt: '2024.04.16 17:29:07',
        },
        {
          _id: 3,
          title: 'You made my day, 도미닉커피랩',
          content: '광교카페거리의',
          type: 'magazine',
          extra: {
            articleType: 'USEFUL',
            images: ['dominic-01.jpg', 'dominic-02.jpg', 'dominic-03.jpg', 'dominic-04.jpg', 'dominic-05.jpg', 'dominic-07.jpg'],
          },
          views: 2000,
          createdAt: '2024.04.16 17:29:19',
          updatedAt: '2024.04.16 17:29:19',
        },
        {
          _id: 4,
          title: `스페셜티커피문화의 본질을 전하는 '전달자' - 아이덴티티커피랩`,
          content: '분명한 목적과 의도',
          type: 'magazine',
          extra: {
            articleType: 'FIENDLY',
            images: ['identity-01.jpg', 'identity-02.jpg', 'identity-03.jpg', 'identity-05.jpg', 'identity-06.jpg', 'identity-07.jpg'],
          },
          views: 50,
          createdAt: '2024.04.16 17:29:07',
          updatedAt: '2024.04.16 17:29:07',
        },
        {
          _id: 5,
          title: `하와이 해변에서 즐기는 커피 한 잔? '키헤이커피'`,
          content: '이국적인 공간에서 마주하는 이국의 커피',
          type: 'magazine',
          extra: {
            articleType: 'USEFUL',
            images: ['kihei-01.jpg', 'kihei-02.jpg', 'kihei-03.jpg', 'kihei-04.jpg', 'kihei-05.jpg', 'kihei-07.jpg'],
          },
          views: 2000,
          createdAt: '2024.04.16 17:29:19',
          updatedAt: '2024.04.16 17:29:19',
        },
        {
          _id: 6,
          title: '커피와 나를 이어주기 위해 탄생한 공간, 폰트(PONT)',
          content: '커피와 나를 이어주기 위해 탄생한 공간',
          type: 'magazine',
          extra: {
            articleType: 'FIENDLY',
            images: ['pont-01.jpg', 'pont-02.jpg', 'pont-03.jpg', 'pont-04.jpg', 'pont-05.jpg', 'pont-06.jpg', 'pont-07.jpg'],
          },
          views: 50,
          createdAt: '2024.04.16 17:29:07',
          updatedAt: '2024.04.16 17:29:07',
        },
        {
          _id: 7,
          title: 'Higher Standard Solid System, 스탠다드시스템',
          content: '품질에 대한 고집',
          type: 'magazine',
          extra: {
            articleType: 'USEFUL',
            images: ['standard-01.jpg', 'standard-02.jpg', 'standard-03.jpg', 'standard-04.jpg', 'standard-05.jpg', 'standard-06.jpg', 'standard-07.jpg'],
          },
          views: 2000,
          createdAt: '2024.04.16 17:29:19',
          updatedAt: '2024.04.16 17:29:19',
        },
        {
          _id: 8,
          title: '영도의 새로운 랜드마크, P.ARK(피아크)',
          content: '바다와 도시를 품은 공간',
          type: 'magazine',
          extra: {
            articleType: 'FIENDLY',
            images: ['p_ark-01.jpg', 'p_ark-02.jpg', 'p_ark-03.jpg', 'p_ark-04.jpg', 'p_ark-05.jpg', 'p_ark-06.jpg', 'p_ark-0.jpg'],
          },
          views: 50,
          createdAt: '2024.04.16 17:29:07',
          updatedAt: '2024.04.16 17:29:07',
        },
      ],
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
