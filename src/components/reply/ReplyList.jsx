import { useInfiniteQuery } from '@tanstack/react-query';
import ReplyItem from './ReplyItem';
import ReplyNew from './ReplyNew';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import InfiniteScroll from 'react-infinite-scroller';
import _ from 'lodash';
import Loading from '@components/Loading';
import useUserStore from '@zustand/store';

function ReplyList() {
  const axios = useCustomAxios();
  const { itemId, user } = useUserStore();

  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['posts', itemId, 'replies'],
    queryFn: ({ pageParam = 1 }) =>
      axios.get(`/posts/${itemId}/replies`, {
        params: {
          page: pageParam,
          limit: 1, //5
          sort: JSON.stringify({ createdAt: 1 }),
          //작성 순서대로 정렬
        },
      }),
    select: (response) => {
      response.items = response.pages.map((page) => page.data.item);
      response.totalPages = response.pages.at(-1).data.pagination.totalPages;
      response.page = response.pages.at(-1).data.pagination.page;
      return response;
    },
    // refetchInterval: 1000
    // 마지막 페이지와 함께 전체 페이지 목록을 받아서 queryFn에 전달할 pageParam 값을 리턴하도록 구현한다.
    // false를 리턴하면 더이상 queryFn이 호출되지 않고 무한 스크롤 종료
    // lastPage: 마지막으로 응답 받은 axios.get() 리턴값(response 객체)
    // allPage: 모든 페이지 배열
    getNextPageParam: (lastPage) => {
      const pagination = lastPage.data.pagination;
      let nextPage = pagination.page < pagination.totalPages ? pagination.page + 1 : false; // 새로 요청해야할 페이지
      return nextPage;
    },
  });

  let list = [];
  let hasNext = false;
  if (data) {
    list = _.flatten(data.items).map((item) => {
      //다차원배열 혹은 중첩객체를  평탄화시켜줌.
      return <ReplyItem key={item._id} postUserId={user._id} item={item} />;
    });
    hasNext = data.page < data.totalPages;
  }

  return (
    <>
      <div className="comment">
        <InfiniteScroll pageStart={1} loadMore={fetchNextPage} hasMore={!isFetching && hasNext} loader={<Loading key="0" />}>
          {list}
        </InfiniteScroll>
      </div>
      <ReplyNew />
    </>
  );
}

export default ReplyList;
