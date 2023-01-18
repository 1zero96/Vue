<template>
  <div>
    <h2>{{ index !== undefined ? "글수정" : "글쓰기" }}</h2>
    <p>작성자 : <input type="text" v-model="writer" /></p>
    <p>제목 : <input type="text" v-model="title" /></p>
    <p>내용 : <textarea v-model="content"></textarea></p>
    <p>
      <button @click="index !== undefined ? update() : write()">{{ index !== undefined ? "수정" : "작성" }}</button>
    </p>
  </div>
</template>
<script>
import sData from "@/data";

export default {
  name: "Create",
  components: {},
  data() {
    const index = this.$route.params.contentId;
    console.log("Create : " + index);
    return {
      sampleData: "",
      data: sData,
      // writer: "",
      // title: "",
      // content: "",
      index: index,
      writer: index !== undefined ? sData[index].writer : "",
      title: index !== undefined ? sData[index].title : "",
      content: index !== undefined ? sData[index].content : "",
    };
  },
  methods: {
    write() {
      this.data.push({
        writer: this.writer,
        title: this.title,
        content: this.content,
      });
      this.$router.push({
        path: "/",
      });
    },
    update() {
      (sData[this.index].writer = this.writer),
        (sData[this.index].title = this.title),
        (sData[this.index].content = this.content),
        this.$router.push({
          path: "/",
        });
    },
  },
};
</script>
