<template>
    
    <div class="comment">
       
        <div>
            <img v-if="user.avatar" class="avatar" :src="user.avatar" alt="">
            <div v-if="!user.avatar" class="avatar avatarName">{{ user.name.split(' ')[0] !=0  ? user.name.split(' ')[0][0] + user.name.split(' ')[1][0] : user.name.split(' ')[0][0] }}</div>
            <div v-if="replies!= undefined && replies?.length > 0" class="line"></div>
        </div>
        

        <div class="comentContents">
            <p class="userName">{{ user.name }}  <span class="time">{{ timeSince(date) }}</span></p>
            <p class="commentText">
                {{ text }}
            </p>

            <div class="actions">
              
                <button @click="likeComment(id, iLikedIt)" class="likeButton" :class="iLikedIt && ' liked '">
                <i class="fa fa-thumbs-up"></i>
                <span class="icon">{{ likes }}</span>
                </button>

                <button v-if="replies" class="replyButton">Reply</button>
            </div>

            <div class="replies" v-if="replies != undefined && replies?.length != 0">
           
                <comment v-for="(replay , index) in replies" :key="index" 
                    :id="replay.id"
                    :user="replay.user"
                    :date="replay.date"
                    :likes="replay.likes"
                    :iLikedIt="replay.iLikedIt"
                    :text="replay.text"
                    />

                    <div>
                        <div class="addComment addReplay">
                            <img class="avatar" src="profile.jpeg"/>
                            <input v-model="addReplayText" type="text" placeholder="Replay"/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import comment from "./comment.vue"
import timeSince from "../date/date"
import {likeComment} from "../discussions/discussions"
import {ref} from 'vue'
const addReplayText = ref('')
const props = defineProps({
    id: {type: Number, default:0},
    user : {type: Object , default:{}},
    date : {type: Number, default:0},
    likes : {type: Number, default:0},
    iLikedIt : {type: Boolean, default: false},
    replies : {type: Object},
    text : {type: String, default:''}
})




</script>