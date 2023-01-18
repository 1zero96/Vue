<template>
  <div>
    <h2>* 내용 보기</h2>
    <p>작성자 : {{ sData.writer }}</p>
    <p>제목 : {{ sData.title }}</p>
    <p>내용 : {{ sData.content }}</p>
    <p>
      <button @click="updateData">수정</button>
      <button @click="deleteData">삭제</button>
    </p>
  </div>
</template>
<script>
import sData from "@/data";
export default {
  name: "Detail",
  components: {},
  data() {
    const index = this.$route.params.contentId; // router => 링크기능, route => 주소
    console.log(`${index}`);
    return {
      sampleData: "",
      sData: sData[index],
      index: index,
    };
  },
  methods: {
    updateData() {
      console.log("Update : " + this.index);
      this.$router.push({
        name: "create",
        params: {
          contentId: this.index,
        },
      });
    },
    deleteData() {
      sData.splice(this.index, 1); // 데이터 삭제를 위해 splice(start, deleteCount...) 사용
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
