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
          limit: 3,
          sort: JSON.stringify({ createdAt: 1 }),
        },
      }),
    select: (response) => {
      response.items = response.pages.map((page) => page.data.item);
      response.totalPages = response.pages.at(-1).data.pagination.totalPages;
      response.page = response.pages.at(-1).data.pagination.page;
      return response;
    },
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
