<template>
  <v-app>
    <v-system-bar color="deep-purple darken-3"></v-system-bar>
    <!-- 앱바 테마를 primary(파란색)로 설정 -->
    <v-app-bar app color="primary" dark>
      <!-- 좌측에 메뉴 아이콘 생성 -->
      <v-app-bar-nav-icon @click.stop="bDrawer = !bDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>멀티 페이지</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer absolute temporary v-model="bDrawer">
      <!-- 안쪽 툴바에 플랫 스타일로 메뉴 제목 작성 -->
      <v-toolbar flat height="70px">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://media.istockphoto.com/id/1128410927/ko/%EC%82%AC%EC%A7%84/%ED%91%B8%EB%A5%B8-%ED%95%98%EB%8A%98-%EB%B0%B0%EA%B2%BD%EA%B3%BC-%ED%9D%B0-%EA%B5%AC%EB%A6%84-%EC%86%8C%ED%94%84%ED%8A%B8-%ED%8F%AC%EC%BB%A4%EC%8A%A4-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EA%B3%B5%EA%B0%84-%EB%B3%B5%EC%82%AC.jpg?s=612x612&w=0&k=20&c=KNBs53N1Lv1tJlPGm4ZNo7JtGo5DaTsZk_MJUQ83l-c="
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">홍길동</v-list-item-title>
              <v-list-item-subtitle>로그인</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <!-- 제목 밑에 메뉴명을 목록으로 작성. 안쪽 여백은 pt-3으로 설정 -->
      <v-list class="pt-3">
        <!-- 배열에 있는 데이터를 반복문으로 가져와 링크, 제목, 아이콘 렌더링 -->
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/main">
          <v-list-item-action>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>MAIN</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/sub">
          <v-list-item-action>
            <v-icon>mdi-folder-check-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>SUB</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 내용영역에 라우터 페이지 렌더링 -->
    <v-main>
      <v-container class="display-1">
        <router-link to="/" class="mr-5">HOME</router-link>
        <router-link to="/main" class="mr-5">MAIN</router-link>
        <router-link to="/sub">SUB</router-link>
      </v-container>
      <!-- 페이지 장면전환 효과 -->
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-main>
    <!-- Footer 영역 테마를 secondary로 설정 -->
    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">Create By VueJS</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    bDrawer: false,
  }),
};
</script>
