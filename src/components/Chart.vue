<template>
    <div id="chart">
        <div>
            <button type="button">이번 주</button>
            <p>2022-03-04 ~ 2022-03-11</p>
            <button type="button">다음 주</button>
        </div>
        <ul>
            <li v-for="(item, index) in weekend" :key="index" :class="{'today' : item.today === true, 'correct' : item.studyStatus === true, 'error' : item.studyStatus === false}">
                <span class="month">{{item.name}}</span>
                <span class="desc" v-if="item.studyStatus">PASS</span>
                <span class="desc" v-else>FAIL</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'Chart',
    data () {
        return {
            weekend : [
                {
                    name : '월',
                    studyStatus : false,
                    today : false
                },
                {
                    name : '화',
                    studyStatus : false,
                    today : false
                },
                {
                    name : '수',
                    studyStatus : true,
                    today : true
                },
                {
                    name : '목',
                    data : '',
                    studyStatus : false,
                    today : false
                },
                {
                    name : '금',
                    data : '',
                    studyStatus : false,
                    today : false
                },
            ]
        }
    },
    created () {
    }
}
</script>

<style>

</style>