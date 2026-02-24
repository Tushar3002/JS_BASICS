
let brac=[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
let emp=[]

for(let i=0;i<brac.length;i+=3){
    emp.push(brac.slice(i,i+3))
}

console.log(emp);





let obj=[
    {
        "commentId": "3fe8bdf0-8a7a-4846-a699-9dbca5a40653",
        "comment": "i m bond 007 pew pew",
        "userId": "9c6c903a-86f7-4fea-94ad-cec98c9dd371",
        "createdOn": "2026-02-19T10:34:40.287",
        "parentCommentId": null,
        "totalLike": 0,
        "replyToUserFullName": null,
        "fullName": "Devang Prajapati",
        "userName": "Bond007",
        "profileImage": "639021714399100650.jpg",
        "profileImagePath": "https://639021714399100650.jpg",
        "isLike": false,
        "replyToUserId": null,
        "replyToUserName": null,
        "replyToFullName": null,
        "replies": [],
        "isVerify": true
    },
    {
        "commentId": "5e9dee69-e92c-4e4b-b700-cbcaa556236b",
        "comment": "time validate",
        "userId": "387cbf20-d34c-40f1-8a7a-adb8966f93d7",
        "createdOn": "2026-02-19T09:03:51.56",
        "parentCommentId": null,
        "totalLike": 0,
        "replyToUserFullName": null,
        "fullName": "nibedita kar",
        "userName": "nibedita123",
        "profileImage": "639027562857873590.jpg",
        "profileImagePath": "https://639027562857873590.jpg",
        "isLike": false,
        "replyToUserId": null,
        "replyToUserName": null,
        "replyToFullName": null,
        "replies": [],
        "isVerify": false
    },
    {
        "commentId": "07c8faa4-bf26-4711-a85d-37cdbbf29277",
        "comment": "remove @",
        "userId": "387cbf20-d34c-40f1-8a7a-adb8966f93d7",
        "createdOn": "2026-02-19T08:29:06.71",
        "parentCommentId": null,
        "totalLike": 0,
        "replyToUserFullName": null,
        "fullName": "nibedita kar",
        "userName": "nibedita123",
        "profileImage": "639027562857873590.jpg",
        "profileImagePath": "https://639027562857873590.jpg",
        "isLike": false,
        "replyToUserId": null,
        "replyToUserName": null,
        "replyToFullName": null,
        "replies": [],
        "isVerify": false
    },
    {
        "commentId": "794237a2-ebec-444c-b09c-469c45ebc993",
        "comment": "hi -yop mail",
        "userId": "387cbf20-d34c-40f1-8a7a-adb8966f93d7",
        "createdOn": "2026-02-19T08:28:53.397",
        "parentCommentId": null,
        "totalLike": 0,
        "replyToUserFullName": null,
        "fullName": "nibedita kar",
        "userName": "nibedita123",
        "profileImage": "639027562857873590.jpg",
        "profileImagePath": "https://639027562857873590.jpg",
        "isLike": false,
        "replyToUserId": null,
        "replyToUserName": null,
        "replyToFullName": null,
        "replies": [],
        "isVerify": false
    },
    {
        "commentId": "f657c3b3-a8d1-42e3-9647-26617126184e",
        "comment": "parent thread",
        "userId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
        "createdOn": "2026-02-19T08:26:29.947",
        "parentCommentId": null,
        "totalLike": 0,
        "replyToUserFullName": null,
        "fullName": "Nibedita Kar",
        "userName": "littlekar",
        "profileImage": null,
        "profileImagePath": null,
        "isLike": false,
        "replyToUserId": null,
        "replyToUserName": null,
        "replyToFullName": null,
        "replies": [
            {
                "commentId": "e0b664c0-c390-4ebb-ac33-58c9bdc18f3a",
                "comment": "reply to parent",
                "userId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
                "createdOn": "2026-02-19T08:27:00.56",
                "parentCommentId": "f657c3b3-a8d1-42e3-9647-26617126184e",
                "totalLike": 1,
                "replyToUserFullName": "Nibedita Kar",
                "fullName": "Nibedita Kar",
                "userName": "littlekar",
                "profileImage": null,
                "profileImagePath": null,
                "isLike": false,
                "replyToUserId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
                "replyToUserName": "littlekar",
                "replyToFullName": null,
                "replies": [],
                "isVerify": true
            },
            {
                "commentId": "aab5935f-04a0-4079-ad48-2505cb47ed36",
                "comment": "hi",
                "userId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
                "createdOn": "2026-02-19T08:26:51.37",
                "parentCommentId": "f657c3b3-a8d1-42e3-9647-26617126184e",
                "totalLike": 0,
                "replyToUserFullName": "Nibedita Kar",
                "fullName": "Nibedita Kar",
                "userName": "littlekar",
                "profileImage": null,
                "profileImagePath": null,
                "isLike": false,
                "replyToUserId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
                "replyToUserName": "littlekar",
                "replyToFullName": null,
                "replies": [
                    {
                        "commentId": "d2aed7ab-4016-44be-993d-e067347afe3c",
                        "comment": "reply to hi",
                        "userId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
                        "createdOn": "2026-02-19T08:27:07.01",
                        "parentCommentId": "aab5935f-04a0-4079-ad48-2505cb47ed36",
                        "totalLike": 0,
                        "replyToUserFullName": "Nibedita Kar",
                        "fullName": "Nibedita Kar",
                        "userName": "littlekar",
                        "profileImage": null,
                        "profileImagePath": null,
                        "isLike": false,
                        "replyToUserId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
                        "replyToUserName": "littlekar",
                        "replyToFullName": null,
                        "replies": [
                            {
                                "commentId": "6a61d3bc-1f01-4ace-9668-2fbf03e38dec",
                                "comment": "reply from yop mail",
                                "userId": "387cbf20-d34c-40f1-8a7a-adb8966f93d7",
                                "createdOn": "2026-02-19T08:28:42.273",
                                "parentCommentId": "d2aed7ab-4016-44be-993d-e067347afe3c",
                                "totalLike": 0,
                                "replyToUserFullName": "Nibedita Kar",
                                "fullName": "nibedita kar",
                                "userName": "nibedita123",
                                "profileImage": "639027562857873590.jpg",
                                "profileImagePath": "https://639027562857873590.jpg",
                                "isLike": false,
                                "replyToUserId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
                                "replyToUserName": "littlekar",
                                "replyToFullName": null,
                                "replies": [],
                                "isVerify": false
                            }
                        ],
                        "isVerify": true
                    }
                ],
                "isVerify": true
            }
        ],
        "isVerify": true
    },
    {
        "commentId": "63e91e03-f184-49a1-8d18-23c770765f5b",
        "comment": "hi",
        "userId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
        "createdOn": "2026-02-19T08:26:23.49",
        "parentCommentId": null,
        "totalLike": 0,
        "replyToUserFullName": null,
        "fullName": "Nibedita Kar",
        "userName": "littlekar",
        "profileImage": null,
        "profileImagePath": null,
        "isLike": false,
        "replyToUserId": null,
        "replyToUserName": null,
        "replyToFullName": null,
        "replies": [],
        "isVerify": true
    },
    {
        "commentId": "665f4cb6-11e7-4662-adc7-7aaed61ef54c",
        "comment": "no thread",
        "userId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
        "createdOn": "2026-02-19T08:26:17.483",
        "parentCommentId": null,
        "totalLike": 0,
        "replyToUserFullName": null,
        "fullName": "Nibedita Kar",
        "userName": "littlekar",
        "profileImage": null,
        "profileImagePath": null,
        "isLike": false,
        "replyToUserId": null,
        "replyToUserName": null,
        "replyToFullName": null,
        "replies": [
            {
                "commentId": "eb6e11af-1f88-43ad-8495-b0a21677d575",
                "comment": "again reply",
                "userId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
                "createdOn": "2026-02-19T08:26:38.953",
                "parentCommentId": "665f4cb6-11e7-4662-adc7-7aaed61ef54c",
                "totalLike": 0,
                "replyToUserFullName": "Nibedita Kar",
                "fullName": "Nibedita Kar",
                "userName": "littlekar",
                "profileImage": null,
                "profileImagePath": null,
                "isLike": false,
                "replyToUserId": "e1c634f4-94e7-42b0-98b4-9ef7daa4fc6d",
                "replyToUserName": "littlekar",
                "replyToFullName": null,
                "replies": [],
                "isVerify": true
            }
        ],
        "isVerify": true
    }
]

function practice(obj){
    function nestedReplies(reply,arr){
        for(let i of reply){
            arr.push(i)
            if(i.replies && i.replies.length>0){
                nestedReplies(i.replies,arr)
            }
        }
    }
    return obj.map(comments=>{
        let arr=[]
        if(comments.replies && comments.replies.length>0){
            nestedReplies(comments.replies,arr)
        }
        return{
            ...comments,    
            replies:arr
        }
    })
}
console.log(practice(obj));


// let ans=obj.map(x=>{
//     return {
//         ...x,
//         replies:x.replies.flat(Infinity)
//     }
// })
// // console.log(ans);


function p1(obj){
    function nestedReplies(arr,nested){
        for(let i of nested){
            arr.push(i)
            if(i.replies && i.replies.length>0){
                nestedReplies(arr,i.replies)
            }
        }
    }
    return obj.map(comment=>{
        let arr=[]
        if(comment.replies && comment.replies.length>0){
            nestedReplies(arr,comment.replies)
        }
        return{
            ...comment,
            replies:arr
        }
    })
}
console.log(p1(obj));

// getNestedReplies(obj)

// function getAllReplies(comments) {
//     let result = [];

//         for (let comment of comments) {
//         result.push(comment)
//         if (comment.replies && comment.replies.length > 0) {
            
//             extractReplies(comment.replies);
//         }
//     }

//     function extractReplies(replyArray) {
//         for (let reply of replyArray) {
//             result.push(reply);

//             if (reply.replies && reply.replies.length > 0) {
//                 extractReplies(reply.replies);
//             }
//         }
//     }
//     return result;
// }

// let allReplies = getAllReplies(obj);

// console.log(allReplies);
// function flattenRepliesInside(comments) {

//     function collectReplies(replyArray, result) {
//         for (let reply of replyArray) {
//             result.push(reply);

//             if (reply.replies && reply.replies.length > 0) {
//                 collectReplies(reply.replies, result);
//             }
//         }
//     }

//     return comments.map(comment => {

//         let allReplies = [];

//         if (comment.replies && comment.replies.length > 0) {
//             collectReplies(comment.replies, allReplies);
//         }

//         return {
//             ...comment,
//             replies: {
                
//                 allReplies: allReplies  
//             }
//         };
//     });
// }

// console.log(flattenRepliesInside(obj));


// function practice(obj){
//     function nestedReplies(arr,nested){
//             for(let i of nested){
//                 arr.push(i)

//                 if(i.replies && i.replies.length>0){
//                     nestedReplies(arr,i.replies)
//                 }
//             }
//         }
//     return obj.map(comment=>{
        
//         let arr=[]
//         if(comment.replies && comment.replies.length>0){
//             nestedReplies(arr,comment.replies)
//         }
//         return{
//             ...comment,
//             replies:arr
//         }
//     })
// }
// console.log(practice(obj));


function practice3(obj){
    function nestedReplies(arr,nested){
        for(let i of nested){
            arr.push(i)
            if(i.replies && i.replies.length>0){
                nestedReplies(arr,i.replies)
        }
        }
    }
    return obj.map(x=>{
        let arr=[]
        if(x.replies && x.replies.length>0){
            nestedReplies(arr,x.replies)
        }
        return{
            ...x,
            replies:arr
        }
    })
}
console.log("Hello");

console.log(practice3(obj));
