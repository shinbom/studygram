<template>
    <div class="comment">
        <ul>
            <li v-for="(item, index) in comment" :key="index">
                <span class="user">{{item.id}}</span>
                <span class="desc">{{item.comment}}</span>
                <span class="date">{{item.uploadDate}}</span>
            </li>
        </ul>
        <button type="button">답글달기</button>
    </div>
</template>

<script>

export default {
    name : 'comment',
    props : {
        comment : Array
    },
    methods : {
        
    }
}
</script>

<style>

</style>