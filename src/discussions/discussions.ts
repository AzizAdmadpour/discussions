import { reactive } from "vue";

interface IUser {
    name: string;
    avatar?: string;
}
interface IComment {
    id: number;
    date: number; // unix timestamp in milliseconds.
    user: IUser;
    text: string;
    likes: number;
    iLikedIt: boolean;
   
}
interface IDiscussion extends IComment {
    replies: IComment[];
}
interface IProps {
    comments: IComment[];
}

 export const discussions: IDiscussion[] = reactive([
    {
        id: 3,
        date: 1672576574000,
        user: {
            name: "Bessie Cooper",
            avatar: "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg"
        },
        text: "I think for our second compaign we can try to target a different audience. How does it sound for you?",
        likes: 2,
        iLikedIt: false,
        replies: [
            {
                id: 5,
                date: 1672581014000,
                user: {
                    name: "Marvin McKinney",
                    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                },
                text: "Yes, that sounds good! I can think about this tomorrow. Then do we plan to start that compaign?",
                likes: 3,
                iLikedIt: true,
            },
            {
                id: 6,
                date: 1672581614000,
                user: {
                    name: "Bessie Cooper",
                    avatar: "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg",
                },
                text: "We plan to run the compaign on Friday - as far as I know. Do you think you will get this done by Thursday @Marvin?",
                likes: 0,
                iLikedIt: false,
            },
            
        ]
    },
    {
        id: 2,
        date: 1672232414000,
        user: {
            name: "Marvin McKinney",
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        },
        text: "The first compaign went smoothly. Please make sure to see all attachments with the results to understand the flow.",
        likes: 2,
        iLikedIt: false,
        replies: []
    },
    {
        id: 1,
        date: 1671886814000,
        user: {
            name: "Savannah Nguyen"
        },
        text: "We have just published the first campaign. Let's see the results in the 5 days and we will iterate on this.",
        likes: 50,
        iLikedIt: true,
        replies: []
    }
]);
export function addComment(text: string){
  const newComment : IDiscussion = {
    id :Math.round(Math.random() * 100000),
    text: text,
    user:{
      name:'Aziz Ahmadpour',
      avatar: 'profile.jpeg'
    },
    likes:0,
    iLikedIt:false,
    replies: [],
    date: Date.now(),
   
  }
  discussions.unshift(newComment)
}

export function deleteComment(id : number){
   
    
}
export function likeComment(id:number, iLikeIt: boolean){

    discussions.filter(comment =>{
        comment.replies.filter(replay =>{
            if(id== replay.id){
                if(!iLikeIt){
                replay.likes +=1;
                replay.iLikedIt = true;
                }else{
                    replay.likes -=1;
                    replay.iLikedIt = false;
                }
            }    
        })
        if(id== comment.id){
            if(!iLikeIt){
            comment.likes+=1;
            comment.iLikedIt = true;
            }else{
                comment.likes -=1;
                comment.iLikedIt = false;
            }
        }
    })

}