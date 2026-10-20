/*
 * 안전장구 관리 — 설정 파일 (이 파일만 수정하면 됩니다)
 *
 * ▼ 아래 「const firebaseConfig = null;」 한 줄을 지우고,
 *   Firebase 콘솔에서 복사한 「const firebaseConfig = { ... };」 블록을 그대로 붙여 넣으세요.
 *   (import 줄이나 initializeApp 줄은 붙여 넣지 마세요)
 *   그대로 두면 '체험 모드'로 실행됩니다. 체험 모드에서는 데이터가 이 기기에만 저장됩니다.
 */
const firebaseConfig = {
  apiKey: "AIzaSyC6JfF1WB-FgcPsGNkZR_pb2P_ovNxzgg0",
  authDomain: "safety-gear-daf77.firebaseapp.com",
  projectId: "safety-gear-daf77",
  storageBucket: "safety-gear-daf77.firebasestorage.app",
  messagingSenderId: "564760827367",
  appId: "1:564760827367:web:a407dda180e60ee6a41942"
};/* ▲ 여기까지 */

window.APP_CONFIG = {
  firebase: firebaseConfig,
  superAdminEmail: "hoya4309@gmail.com"   // 최종 관리자 (firestore.rules 와 동일)
};
