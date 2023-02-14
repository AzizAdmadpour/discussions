<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {discussions, addComment} from './discussions/discussions';
import comment from "./components/comment.vue"
const addCommentText = ref('')
const sendComment = () =>{
  if(addCommentText.value != ''){
        addComment(addCommentText.value)
        addCommentText.value='';
        }
}

onMounted(() => {
    const commentTextBox = document.getElementById('commentTextBox')
    commentTextBox?.addEventListener('keyup', (k)=>{
      if(k.key == 'Enter')
      {
        sendComment();
    }
    })
})

</script>

<template>
<!-- {{discussions}} -->

<section class="continer">
    <div class="addComment">
        <img class="avatar" src="profile.jpeg"/>
        <div class="text">
        <input id="commentTextBox" v-model="addCommentText" type="text" placeholder="start discussion"/>
      </div>
      <button @click="sendComment" class="sendComment">
      <svg  width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="send" class="icon glyph"><path d="M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z" style=""></path></svg>
      </button>
    </div>

    <div class="comments">
      <comment v-for="(comment, index) in discussions" :key="index" 
      :id="comment.id"
      :user="comment.user"
      :date="comment.date"
      :replies="comment.replies"
      :likes="comment.likes"
      :iLikedIt="comment.iLikedIt"
      :text="comment.text"
      />
    </div>
</section>


</template>

<style scoped>


</style>
