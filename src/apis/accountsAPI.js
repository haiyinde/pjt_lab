import api from "@/http-common";

class AccountsAPI {
  // 회원가입
  signUp(account) {
    return api.post(`/member/signup`, JSON.stringify(account));
  }

  // 로그인: Access-token과 로그인 결과 메시지 반환
  login(account) {
    return api.post(`/member/login`, JSON.stringify(account));
  }

  // 회원 정보 조회: 회원 정보(이메일, 닉네임, 소개)를 담은 Token 반환
  getAccount(email) {
    return api.get(`/member/me?email=` + email);
  }

  // 회원 프로필 정보 리턴하기
  getProfileInfo(loginId, profileMemberId) {
    return api.get(
      `/member/profile?loginId=${loginId}&profileMemberId=${profileMemberId}`
    );
  }
}

export default new AccountsAPI();
