<template>
  <!-- 로그인 후 메인화면을 표시 -->
  <v-container>
    <v-row>
      <v-col xs="12" class="mt-5 text-center">
        <h1 class="display-1 my-1">로그인 후 화면 페이지</h1>
        <p class="body-1">로그인을 통해 인증된 사용자가 방문한 페이지입니다.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col dark offset="1" cols="10" class="mt-5" text-center>
        <!-- 구글 로그인인 경우 사진 이미지 정보 표시 -->
        <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" class="avatar_style" alt="" />
        <!-- 계정 이름 표시 -->
        <h3 class="pt-2 mt-4 grey lighten-2">{{ fnGetUser.name }}</h3>
        <!-- 계정 이메일 표시 -->
        <p class="pb-2 grey lighten-2">{{ fnGetUser.email }}</p>
      </v-col>
      <v-col offset="3" cols="6" class="text-center mt-1">
        <!-- 이메일 계정 로그인 버튼 표시 및 처리 -->
        <v-btn @click="fnSendPasswordReset" block color="orange" large dark
          >t
          <v-icon left>mdi-email</v-icon>
          비밀번호 재설정
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// 파이어베이스에서 oFirebaseAuth 객체 변수 가져옴
import { oFirebaseAuth } from "@/datasources/firebase";
export default {
  computed: {
    // 스토어에서 로그인된 계정 정보 반환
    fnGetUser() {
      let oUserInfo = this.$store.getters.fnGetUser;
      return oUserInfo;
    },
  },
  methods: {
    fnSendPasswordReset() {
      // 비밀번호 재설정 메일 발송하기
      oFirebaseAuth
        .sendPasswordResetEmail(this.fnGetUser.email)
        .then(function () {
          console.log("🔥 비밀번호 재설정 메일을 발송했습니다! 🔥");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* 사진 이미지 표시할 때 원 모양으로 스타일 표시 */
.avatar_style {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
