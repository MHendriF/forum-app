import ThreadList from "../components/ThreadList";
import { useSelector, useDispatch } from "react-redux";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { asyncAddThread, asyncUpVoteThread, asyncDownVoteThread } from "../states/threads/action";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FloatingButton from "../components/FloatingButton";
import Modal from "../components/Modal";
import FormThread from "../components/form/FormThread";

const HomePage = () => {
  const { threads = [], users = [], authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  console.log("🚀 ~ threadList ~ threadList:", threadList);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("category");
  const categories = threads.map((thread) => thread?.category);
  const categoriesList = [...new Set(categories)];

  const onClickCategory = (category) => {
    if (params === category) {
      setSearchParams("");
    } else {
      setSearchParams({ category });
    }
  };

  const filteredThreads = threadList.filter((thread) => thread?.category.includes(params));
  console.log("🚀 ~ HomePage ~ filteredThreads:", filteredThreads);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto pt-10 w-full max-w-3xl bg-white">
      <FloatingButton onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FormThread addThread={onAddThread} />
      </Modal>
      <ThreadList
        authUser={authUser}
        threads={params ? filteredThreads : threadList}
        upVote={onUpVote}
        downVote={onDownVote}
        categories={categoriesList}
        onClickCategory={onClickCategory}
        params={params}
      />
    </div>
  );
};

export default HomePage;
