import useCustomAxios from '@hooks/useCustomAxios.mjs';
import UserReviewItem from '@pages/mypage/user/UserReviewItem';
import { useQuery } from '@tanstack/react-query';

function UserReviewList() {
  const axios = useCustomAxios();

  const { data } = useQuery({
    queryKey: ['/replies'],
    queryFn: () => axios.get('/replies'),
    select: (response) => response.data,
  });

  const itemList = data?.item.map((item) => <UserReviewItem key={item._id} item={item} />);

  return <>{itemList}</>;
}

export default UserReviewList;
