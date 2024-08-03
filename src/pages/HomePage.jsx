import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
} from '../states/threads/action';
import ThreadList from '../components/ThreadList';
import FloatingButton from '../components/FloatingButton';
import Modal from '../components/Modal';
import ThreadForm from '../components/forms/ThreadForm';
import CategoryCard from '../components/CategoryCard';

export default function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    closeModal();
  };

  const onUpVote = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread?.ownerId),
    authUser: authUser.id,
  }));

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('category');
  const categories = [...new Set(threads.map((thread) => thread?.category))];

  const onClickCategory = (category) => {
    if (params === category) {
      setSearchParams('');
    } else {
      setSearchParams({ category });
    }
  };

  const filteredThreads = threadList.filter((thread) =>
    thread?.category.includes(params),
  );

  return (
    <div className="container mx-auto pt-10 w-full max-w-5xl bg-white">
      <FloatingButton onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ThreadForm addThread={onAddThread} />
      </Modal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-4">
        <div className="md:col-span-1">
          <h1 className="text-lg font-semibold mb-4">Categories</h1>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                category={category}
                onClickCategory={onClickCategory}
                isActive={category === params}
              />
            ))}
          </div>
        </div>
        <div className="md:col-span-3">
          <h1 className="text-lg font-semibold mb-4">Threads</h1>
          <ThreadList
            authUser={authUser}
            threads={params ? filteredThreads : threadList}
            upVote={onUpVote}
            downVote={onDownVote}
          />
        </div>
      </div>
    </div>
  );
}
