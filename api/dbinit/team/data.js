import moment from 'moment';

function getDay(day = 0) {
  return moment().add(day, 'days').format('YYYY.MM.DD');
}
function getTime(day = 0, second = 0) {
  return moment().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (nextSeq) => {
  return {
    // 회원
    // 일반회원 5, 판매회원 8, 관리자 2
    user: [
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
      //판매회원
      {
        _id: await nextSeq('user'),
        email: 's1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '카페157',
        phone: '01011115555',
        address: '경기도 파주시 문발동 594-8',
        type: 'seller',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          birthday: '03-23',
          membershipClass: 'MC01',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '경기도 파주시 문발동 594-8',
            },
          ],
        },
      },
    ],
    // 상품
    product: [
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
          brand: '오에프알',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 26000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '리얼 청크 그래놀라 4종',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p>익숙한 그래놀라에만 머무는 삶은 여행 없는 삶과 비슷합니다. 그래놀라의 세계도 인간의 세계만큼이나 무궁무진하니까요. 그렇다고 색다른 맛을 한 박스 가득한 양으로 시도하는 건 꽤나 부담스러운 일이지요.
            조니스그로서리의 리얼 청크 그래놀라 4종 세트는 그런 부담을 현명하게 덜어 줍니다. 단호박현미부터 말차크랜베리까지 네 가지 조합의 그래놀라를 적정량으로 한꺼번에 경험하게 하거든요. 동시에 그래놀라 본연의 역할에 충실한 것은 물론이고요. 게다가 바삭한 식감 덕에 씹히는 소리 따라 별명도 '콰삭놀라'입니다. “콰삭!” 경쾌한 소리가 견고했던 취향의 세계에 균열을 알립니다. 여행을 떠날 시간입니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['goods'],
          brand: '조니스그로서리',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 17900,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '귤메달X아침 스탠다드 세트',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p>옹기종기 모여 앉아 이야기 나누며 까먹다 보면 어느새 잔뜩 쌓여있는 귤껍질, 귤 껍질을 까다 까다 노랗게 물든 손끝, 테이블 위 광주리에 담긴 귤을 보면 왠지 든든한 마음, 코 끝 시린 계절마다 찾아오는 시원하고 달콤한 귤은 그야말로 우리 생활에 꼭 붙은 일상 과일입니다.호불호 없이 모두에게 사랑받는 과일이지만 시트러스류를 재배하는 50년차 제주 농부에게는 고민이 있다고 해요. 그건 바로… 10가지 품종이 넘도록 수 많은 시트러스 중에서 대부분의 고객이 찾는 건 고작 2~3개 품종이라는 거예요. 저에게 좋아하는 품종이 뭐냐고 묻는다면.. 저 부터도 어떤 것을 말해야 할지 잘 떠오르지 않아요. 귤나무 하나하나를 자식처럼 기르는 농부 입장에서 모두가 계속해 먹어본, 알법한 시트러스만 찾는다면, 정말 속상할 거예요. 레몬 스프레드는  제주산 친환경 레몬 한 알, 향긋한 허브 ‘딜’, 부드러운 코코넛 밀크, 유기농 설탕과 소금, 그리고 발효 버터를 주재료로 썼어요. 아삭아삭 씹히는 레몬 제스트가 특히 매력적이죠. 갓 데운 빵 위에 얇게 바르거나, 바게트 위에 얹은 뒤 구워내보내세요. 감귤주스는 물 한 방울 없이 감귤만으로 만들어 진하고 달콤해요. 감귤이 약간의 새콤함을 지니고 있다면, 황금향은 감귤에 비해 산미가 적죠. 두 가지 주스 모두 설탕, 첨가물, 색소, 향료도 쓰지 않아 안심하고 드실 수 있어요. 껍질째 착즙해 영양까지 가득하고요. 냉장고에서 갓 꺼낸 만감류를 한 입 깨물었을 때 입속을 시원하게 적시는 과즙, 그 맛 그대로!</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '귤메달',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 13000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '레몬딜버터 스프레드',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p>맛이며, 단단함이며 외국산 레몬과 견주어도 결코 뒤지지 않는 제주산 레몬.레몬을 더 다채롭게 즐길 수 있는 방법은 없을까? 고민 끝에 탄생한 레몬딜버터 스프레드입니다. 제주산 친환경 레몬 한 알, 향긋한 허브 ‘딜’, 부드러운 코코넛 밀크, 유기농 설탕과 소금, 그리고 발효 버터를 주재료로 썼어요. 아삭아삭 씹히는 레몬 제스트가 특히 매력적입니다. 부드러운 스프레드에 가까운 제형이라 활용도가 좋아요. 빵에 발라먹는 건 물론, 요거트나 샐러드에 곁들여도 맛있습니다.</p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '귤메달',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 15000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '레몬 주스 500ml',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p>레몬주스를 한입 머금고 맛을 느끼기도 전에, 제 머릿속을 두들긴 느낌표들! 레모네이드 정도의 새콤함을 생각했기에 깜짝 놀랐습니다. 이렇게 레몬 원물에 가까운 음료를 먹어본 것이 처음이라서요. 100% 제주 레몬으로 만들었다는 성분함량표를 보고 곧장 고개를 끄덕였습니다. 제 입맛에 그냥 주스로 즐기기에는 어려울지도 모르겠습니다. 물이나 탄산수에 희석하니 새콤함 끝에 미묘한 단맛이 느껴져 더 편안하게 즐길 수 있었어요. 즙을 내지 않고도 레몬수를 만들 수 있어 편리하고 요리에도 쓸 수 있을 정도로 정말 진해요. 감기 기운이 가시질 않을 때, 피로회복이나 면역력 증진이 필요할 때에도 특효약일 듯합니다. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '귤메달',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 15000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '레몬 주스 500ml',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p>레몬주스를 한입 머금고 맛을 느끼기도 전에, 제 머릿속을 두들긴 느낌표들! 레모네이드 정도의 새콤함을 생각했기에 깜짝 놀랐습니다. 이렇게 레몬 원물에 가까운 음료를 먹어본 것이 처음이라서요. 100% 제주 레몬으로 만들었다는 성분함량표를 보고 곧장 고개를 끄덕였습니다. 제 입맛에 그냥 주스로 즐기기에는 어려울지도 모르겠습니다. 물이나 탄산수에 희석하니 새콤함 끝에 미묘한 단맛이 느껴져 더 편안하게 즐길 수 있었어요. 즙을 내지 않고도 레몬수를 만들 수 있어 편리하고 요리에도 쓸 수 있을 정도로 정말 진해요. 감기 기운이 가시질 않을 때, 피로회복이나 면역력 증진이 필요할 때에도 특효약일 듯합니다. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '귤메달',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 11000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '황금향 주스 500ml',
        quantity: 310,
        buyQuantity: 310,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p>감귤에 비해 산미가 적은 황금향. 물 한 방울 없이 황금향만으로 만들어 진하고 달콤해요. 물 뿐만이 아니에요. 설탕, 첨가물, 색소, 향료도 쓰지 않아 누구든 안심하고 드실 수 있어요. 황금향은 제주도에서도 특품으로 인정받아 선물로도 사랑받곤 해요. 귤메달에서 ‘바디감’이라고 일컫는 특유의 끝맛이 매력적인 주스랍니다. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '귤메달',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        price: 8000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '유기농 감귤주스 500ml',
        quantity: 310,
        buyQuantity: 310,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p> 귤메달이 소개하는 주스 중 우리에게 가장 익숙한 맛이에요. 물 한 방울 없이 감귤만으로 만들어 진하고 달콤해요. 물 뿐만이 아니에요. 설탕, 첨가물, 색소, 향료도 쓰지 않아 누구든 안심하고 드실 수 있어요. 껍질째 착즙해 영양까지 가득하고요. 냉장고에서 갓 꺼낸 감귤을 한 입 깨물었을 때 입속을 시원하게 적시는 귤 과즙, 그 맛 그대로였어요. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '귤메달',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 4,
        price: 8000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '그래놀라 7종 멀티팩',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p> 시그니처, 건무화과&호두, 크런치 코코넛, 오렌지 크랜베리, 솔티드 캬라멜, 마롱, 초콜릿 (총 7종) 크놀라의 인기 그래놀라 8종을 맛보기 사이즈로 만들고 세트로 구성했어요. 일주일이 넘는 기간 동안 매일 다른 그래놀라로 아침을 깨울 수 있다는 게 장점이죠. 먹고 난 뒤 맘에 들었던 순서대로 줄 세워보는 것도 좋아요. 여행지에서 호텔 조식을 신청할지 말지 고민이 되는 순간 좋은 해결책이 되어줄 수도 있답니다. 한 끼 즐길 정도 양의 미니미한 팩 상품이지만 맛 만큼은 풍부하게 경험할 수 있도록 원재료들을 넉넉하게 담았어요.  </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['goods'],
          brand: '크놀라',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 4,
        price: 11000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '시그니처 그래놀라',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p> 말 그대로 시그니처! 그러니까 호불호 없이 누구나 좋아할 맛이에요. 피칸으로 짭짤함을, 해바라기 씨, 호박씨로 고소함을, 거기에 메이플 시럽으로 달큰함을 더했어요. 시리얼 먹듯 우유에 말아먹기 좋은 그래놀라입니다. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['goods'],
          brand: '크놀라',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 4,
        price: 11000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '건무화과 호두 그래놀라',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p> 크놀라 상품 또 하나의 장점은 식재료를 가공 없이, 최대한 있는 그대로 쓴다는 것입니다. 잘게 부수거나 설탕에 절이는 등의 과정을 거치지 않아요. 그래서 재료 본연의 맛과 식감을 즐길 수 있어요. 지금 소개하는 이 상품의 주인공, 건무화과와 호두도 마찬가지입니다. 그래서일까요? 더욱 건강하게 느껴져요. 오독오독 고소한 호두와 달달 쫄깃한 건무화과의 조합이 좋습니다. 부드러운 요거트와의 궁합을 추천해요. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['goods'],
          brand: '크놀라',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 4,
        price: 11000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '솔티드 카라멜 그래놀라',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p> 코코넛칩과 슬라이스 아몬드, 카라멜 시럽, 그리고! 천일염이 들어간 그래놀라입니다. 카라멜의 달큰함과 천일염의 짭짤함이 조화로워요. 이색적인 그래놀라를 찾고 계신 분들께 추천해요. 아침식사로 솔티카라멜? 단짠이라, 조금 과하지 않을까? 라는 우려와 달리 단맛, 짠맛이 은은해 아침 식사를 만족스럽게 마쳤습니다. 다음에 먹을 땐 간식삼아 아이스크림에 올려 먹어 보겠다고 다짐했어요.  </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['goods'],
          brand: '크놀라',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 5,
        price: 12000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '시나몬 앤 레이즌 피넛버터',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p> 탄탄한 마니아층을 자랑하는 시나몬 앤 레이즌, 시나몬과 건포도의 만남, 거기에 견과류인 땅콩까지 합세했으니 무엇이 부족할까요? 흔한 조합이 아닌만큼 소장가치가 있는 땅콩잼이랍니다. 냉장고에서 바로 꺼내 즐기면 카라멜처럼 꾸덕하고, 실온에 잠시 꺼내두면 스프레드처럼 연하고 부드러워지니 취향에 맞게 즐겨주세요. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '넛셰드',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 5,
        price: 12000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '초콜릿 피넛버터',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p> 초콜릿 가나슈에서 영감을 받아 개발한 초콜릿 땅콩잼이에요. 카카오와 고소한 땅콩 풍미를 동시에 즐길 수 있어요. 바싹 구운 빵에 발라 먹는 것이 맛있어요. 냉장고에서 바로 꺼내 즐기면 카라멜처럼 꾸덕하고, 실온에 잠시 꺼내두면 스프레드처럼 연하고 부드러워지니 취향에 맞게 즐겨주세요. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '넛셰드',
          sort: 3,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 5,
        price: 12000,
        shippingFees: 3000,
        show: false,
        active: true,
        name: '오리지널 스무스 피넛버터',
        quantity: 310,
        buyQuantity: 200,
        mainImages: [
          {
            url: `/files/sample-dog.jpg`,
            fileName: 'sample-dog.jpg',
            orgName: '스턴트 독.jpg',
          },
        ],
        content: `
          <div class="product-detail">
            <p> 땅콩, 소금으로만 만든 잼. 단맛은 거의 없고 땅콩 특유의 고소한 맛이 진해요. 추천 레시피는 오트밀과의 조합! 냉장고에서 바로 꺼내 즐기면 카라멜처럼 꾸덕하고, 실온에 잠시 꺼내두면 스프레드처럼 연하고 부드러워지니 취향에 맞게 즐겨주세요. </p>
          </div>`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: true,
          category: ['goods'],
          brand: '넛셰드',
          sort: 3,
        },
      },
    ],
    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        user_id: 1,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 1,
            state: 'OS020',
            name: '오리지널 스무스 피넛버터',
            image: `/files/sample-diver.jpg`,
            quantity: 2,
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
        user_id: 1,
        state: 'OS020',
        products: [
          {
            _id: 1,
            seller_id: 1,
            state: 'OS020',
            name: '오리지널 스무스 피넛버터',
            image: `/files/sample-diver.jpg`,
            quantity: 2,
            price: 24000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 24000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 27000,
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
            name: '솔티드 카라멜 그래놀라',
            image: `/files/sample-diver.jpg`,
            quantity: 1,
            price: 11000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 11000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 14000,
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
            _id: 3,
            seller_id: 2,
            state: 'OS020',
            name: '솔티드 카라멜 그래놀라',
            image: `/files/sample-diver.jpg`,
            quantity: 1,
            price: 11000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 11000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 14000,
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
        user_id: 4,
        state: 'OS020',
        products: [
          {
            _id: 4,
            seller_id: 4,
            state: 'OS020',
            name: '유기농 감귤주스 500ml',
            image: `/files/sample-diver.jpg`,
            quantity: 1,
            price: 8000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 11000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 11000,
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
        user_id: 5,
        state: 'OS020',
        products: [
          {
            _id: 5,
            seller_id: 5,
            state: 'OS020',
            name: '황금향 주스 500ml',
            image: `/files/sample-diver.jpg`,
            quantity: 1,
            price: 8000,
            reply_id: 3,
          },
        ],
        cost: {
          products: 11000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 11000,
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
        content: '아이가 좋아해요.',
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
        content: '굿굿',
        createdAt: getTime(-4, -60 * 60 * 12),
      },

    ],
    // 장바구니
    cart: [
      {
        _id: await nextSeq('cart'),
        user_id: 4,
        product_id: 1,
        quantity: 2,
        createdAt: getTime(-7, -60 * 30),
        updatedAt: getTime(-7, -60 * 30),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 4,
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
        user_id: 4,
        product_id: 2,
        memo: '맛도리 원두',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 4,
        product_id: 5,
        memo: '맛있는 그래놀라',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 5,
        product_id: 3,
        memo: '2순위로 살것',
        createdAt: getTime(-2, -60 * 60 * 20),
      },
      {
        _id: await nextSeq('bookmark'),
        user_id: 5,
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
    // QnA, 공지사항, 게시판 > 구현 X 
    post: [],
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
      }
    ]
    }
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
