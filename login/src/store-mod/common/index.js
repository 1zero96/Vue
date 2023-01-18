export default {
  /** state : 값을 저장 */
  state: {
    blsLoading: false, // 처리 중 시간이 걸림을 나타냄
    sErrorMessage: "", // 처리 중 오류 메시지 내용
  },
  /** mutations : 함수 실행하기전 값을 세팅 */
  mutations: {
    // 처리 중 시간이 걸리는지 여부 설정
    fnSetLoading(state, payload) {
      state.blsLoading = payload;
    },
    // 처리 중 오류 메시지 저장
    fnSetErrorMessage(state, payload) {
      state.sErrorMessage = payload;
    },
  },
  /** getter : 값을 가져와서 컴포넌트로 보냄 */
  getters: {
    // 처리 중 시간이 걸리는지 여부 반환
    fnGetLoading(state) {
      return state.blsLoading;
    },
    // 처리 중 에러 메시지 내용 반환
    fnGetErrorMessage(state) {
      return state.sErrorMessage;
    },
  },
  /** actions : 함수 실행 */
  actions: {},
};
