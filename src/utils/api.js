const api = (() => {
  const BASE_URL = "https://forum-api.dicoding.dev/v1";

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log("🚀 ~ login ~ response:", response);
    const responseJson = await response.json();
    console.log("🚀 ~ login ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { token },
    } = responseJson;

    return token;
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);

    const responseJson = await response.json();
    console.log("🚀 ~ getAllUsers ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { users },
    } = responseJson;

    return users;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

    const responseJson = await response.json();
    console.log("🚀 ~ getOwnProfile ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  }

  async function createThread({ title, body, category }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });

    const responseJson = await response.json();
    console.log("🚀 ~ createThread ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { thread },
    } = responseJson;

    return thread;
  }

  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);

    const responseJson = await response.json();
    console.log("🚀 ~ getAllThreads ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { threads },
    } = responseJson;

    return threads;
  }

  async function getDetailThread(threadId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}`);

    const responseJson = await response.json();
    console.log("🚀 ~ getDetailThread ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { detailThread },
    } = responseJson;

    return detailThread;
  }

  async function createComment({ threadId, content }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
      }),
    });

    const responseJson = await response.json();
    console.log("🚀 ~ createComment ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { comment },
    } = responseJson;

    return comment;
  }

  async function upVoteThread(threadId) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/up-vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        threadId,
      }),
    });

    const responseJson = await response.json();
    console.log("🚀 ~ upVoteThread ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
  }

  async function downVoteThread(threadId) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/down-vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        threadId,
      }),
    });

    const responseJson = await response.json();
    console.log("🚀 ~ downVoteThread ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
  }

  async function neutralVoteThread(threadId) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        threadId,
      }),
    });

    const responseJson = await response.json();
    console.log("🚀 ~ neutralVoteThread ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
  }

  async function upVoteComment({ threadId, commentId }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        threadId,
        commentId,
      }),
    });

    const responseJson = await response.json();
    console.log("🚀 ~ upVoteComment ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
  }

  async function downVoteComment({ threadId, commentId }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        threadId,
        commentId,
      }),
    });

    const responseJson = await response.json();
    console.log("🚀 ~ downVoteComment ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
  }

  async function neutralVoteComment({ threadId, commentId }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        threadId,
        commentId,
      }),
    });

    const responseJson = await response.json();
    console.log("🚀 ~ neutralVoteComment ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
  }

  async function getLeaderboards() {
    const response = await fetch(`${BASE_URL}/leaderboards`);

    const responseJson = await response.json();
    console.log("🚀 ~ getLeaderboards ~ responseJson:", responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { leaderboards },
    } = responseJson;

    return leaderboards;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getAllUsers,
    getOwnProfile,
    createThread,
    getAllThreads,
    getDetailThread,
    createComment,
    upVoteThread,
    downVoteThread,
    neutralVoteThread,
    upVoteComment,
    downVoteComment,
    neutralVoteComment,
    getLeaderboards,
  };
})();

export default api;
