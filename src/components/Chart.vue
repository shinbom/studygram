<template>
    <div id="chart">
        <div class="weekend_calendar">
            <button type="button" class="prev" aria-label="이번 주" ></button>
            <p>2022-03-04 ~ 2022-03-11</p>
            <button type="button" class="next" aria-label="다음 주"></button>
        </div>
        <ul>
            <li v-for="(item, index) in weekends" :key="index" :class="{'today' : item.today === true, 'correct' : item.studyStatus === true, 'error' : item.studyStatus === false}">
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
            weekends : [
                {
                    name : '월',
                    studyStatus : true,
                    today : false
                },
                {
                    name : '화',
                    studyStatus : true,
                    today : false
                },
                {
                    name : '수',
                    studyStatus : false,
                    today : false
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
        // 오늘 요일 체크
        let today = new Date().getDay() - 1;
        this.weekends[today].today = true;
    }
}
</script>

<style>

</style>