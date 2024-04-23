export const generateOrderNumber = (data) => {
  // 날짜에서 'YYYYMMDD' 형식 추출
  const datePart = data.createdAt.split(' ')[0].replace(/\./g, '');
  // ID 추출 및 포맷팅: _id가 100 이상일 때와 그렇지 않을 때를 구분
  let idPart = data._id.toString();
  if (data._id < 100) {
    idPart = '00' + idPart; // _id가 100 미만인 경우 앞에 '00'을 붙임
  } else if (data._id < 1000) {
    idPart = '0' + idPart; // _id가 100 이상 1000 미만인 경우 앞에 '0'을 붙임
  }
  // 1000 이상인 경우는 추가 문자 없이 _id만 사용 (이미 네 자리 이상일 가능성)

  // 최종 주문번호 조합
  const orderNumber = datePart + idPart;

  return orderNumber;
};

export const formatPhoneNumber = (phoneNumber) => {
  const areaCode = phoneNumber.slice(0, 3);
  const middlePart = phoneNumber.slice(3, 7);
  const lastPart = phoneNumber.slice(7, 11);
  return `${areaCode}-${middlePart}-${lastPart}`;
};
