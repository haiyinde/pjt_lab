import api from "@/http-common";

class CommunityAPI {
  // 게시글 전체 조회
  getPosts(){
    return api.get(`posts`);
  }
}

export default new CommunityAPI();