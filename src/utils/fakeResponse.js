export const fakeErrorResponse = new Error('Ups, something went wrong');

export const fakeAuthUserResponse = {
  id: 'user-1',
  name: 'John Doe',
  avatar: 'https://generated-image-url.jpg',
};

export const fakeOwnerResponse = {
  id: 'user-1',
  name: 'John Doe',
  avatar: 'https://generated-image-url.jpg',
};

export const fakeUserResponse = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

export const fakeCommentResponse = {
  id: 'comment-1',
  content: 'Ini adalah komentar pertama',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: fakeOwnerResponse,
  upVotesBy: [],
  downVotesBy: [],
};

export const fakeAddCommentResponse = {
  id: 'comment-2',
  content: 'Ini adalah komentar kedua',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: fakeOwnerResponse,
  upVotesBy: [],
  downVotesBy: [],
};

export const fakeThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

export const fakeAddThreadResponse = {
  id: 'thread-2',
  title: 'Thread Kedua',
  body: 'Ini adalah thread kedua',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

export const fakeDetailThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: fakeOwnerResponse,
  upVotesBy: [],
  downVotesBy: [],
  comments: [fakeCommentResponse],
};

export const fakeLeaderboardsResponse = {
  user: fakeUserResponse,
  score: 10,
};

export const fakeUpVoteThreadResponse = {
  id: 'vote-1',
  userId: 'users-1',
  threadId: 'thread-1',
  voteType: 1,
};

export const fakeDownVoteThreadResponse = {
  id: 'vote-1',
  userId: 'users-1',
  threadId: 'thread-1',
  voteType: -1,
};

export const fakeNeutralizeVoteThreadResponse = {
  id: 'vote-1',
  userId: 'users-1',
  threadId: 'thread-1',
  voteType: 0,
};

export const fakeUpVoteCommentResponse = {
  id: 'vote-1',
  userId: 'users-1',
  commentId: 'comment-1',
  voteType: 1,
};

export const fakeDownVoteCommentResponse = {
  id: 'vote-1',
  userId: 'users-1',
  commentId: 'comment-1',
  voteType: -1,
};

export const fakeNeutralizeVoteCommentResponse = {
  id: 'vote-1',
  userId: 'users-1',
  commentId: 'comment-1',
  voteType: 0,
};
