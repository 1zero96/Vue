<template>
  <div>
    <table border="1">
      <tr>
        <th>idx</th>
        <th>글쓴이</th>
        <th>제목</th>
        <th>내용</th>
      </tr>
      <tr v-for="(item, index) in sData" :key="index" @click="go_detail(index)">
        <td>{{ index }}</td>
        <td>{{ item.writer }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
      </tr>
    </table>
    <br />
    <button @click="go_write">글쓰기</button>
  </div>
</template>
<script>
import sData from "@/data";

export default {
  name: "Read",
  components: {},
  data() {
    return {
      sData,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    go_write() {
      // key 값을 전달하기 위해 push 방식을 사용
      this.$router.push({ path: "/create" });
    },
    go_detail(index) {
      this.$router.push({
        // path: "/detail"
        name: "detail",
        params: {
          contentId: index,
        },
      });
    },
  },
};
</script>
