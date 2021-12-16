<template>
   <div>
       <br>
        <div>This is the trial div</div>
        <h1>{{message}}</h1> <br>
     <button @click="changnum()">change message</button> <br> <br>
    <input v-model="message"> <br> <br>
    <h2>Following is the about component in the trial component</h2>
    <about-comp/>
    <br>
    <div v-for="(post, index) in posts" :key="index">
        <div v-if="post.id <= 30">
            <h3>{{post.id}}, {{post.title}}</h3>
        </div>
    </div>
   </div>
</template>

<script> 
import {Trial} from './trial'
export default Trial
    </script>
