<template>
    <div id="chart">
        <div class="weekend_calendar">
            <button type="button" class="prev" aria-label="이번 주" @click="prevWeeks"></button>
            <p>{{setCurrentWeek}}</p>
            <button type="button" class="next" aria-label="다음 주" @click="nextWeeks"></button>
        </div>
        <ul>
            <li v-for="(item, index) in currentWeek" :key="index" :class="{'today' : item.today === true, 'correct' : item.studyStatus === true, 'error' : item.studyStatus === false}">
                <span clss="date">{{item.date}}</span>
                <span class="month">{{item.weekName}}</span>
                <span class="desc" v-if="item.studyStatus">PASS</span>
                <span class="desc" v-else>FAIL</span>
            </li>
        </ul>
    </div>
</template>

<script>
import dayjs from 'dayjs';
const weekOfYear = require('dayjs/plugin/weekOfYear');
const locale = require('dayjs/locale/ko');
console.log(locale);

dayjs.extend(weekOfYear);
dayjs.locale('ko');
dayjs().locale('ko').format();

export default {
    name : 'Chart',
    data () {
        return {
            weekNumber : dayjs().week(),
            today : dayjs().format('YYYY-MM-DD'),
            currentWeek : [
                {
                    weekName : '월',
                    date : '',
                    studyStatus : false,
                    today : false
                },
                {
                    weekName : '화',
                    date : '',
                    studyStatus : false,
                    today : false
                },
                {
                    weekName : '수',
                    date : '',
                    studyStatus : false,
                    today : false
                },
                {
                    weekName : '목',
                    date : '',
                    studyStatus : false,
                    today : false
                },
                {
                    weekName : '금',
                    date : '',
                    studyStatus : false,
                    today : false
                }
            ],
        }
    },
    created () {
        this.getCurrentWeek();
    },
    computed : {
        setCurrentWeek() {
            let lastIndex = this.currentWeek.length - 1;
            return `${this.currentWeek[0].date} ~ ${this.currentWeek[lastIndex].date}`
        },
    },
    methods : {
        getCurrentWeek : function() {
            for ( let i = 0; i < 5; i++) {
                this.currentWeek[i].date = '';
                // day는 일요일부터 시작함에 따라 i + 1
                this.currentWeek[i].date = dayjs().week(this.weekNumber).day(i + 1).format('YYYY-MM-DD');
                this.currentWeek[i].date === this.today ? this.currentWeek[i].today = true : this.currentWeek[i].today = false; 
            }
        },
        prevWeeks() {
            this.weekNumber--;
            this.getCurrentWeek();
        },
        nextWeeks() {
            this.weekNumber++;
            this.getCurrentWeek();
        }
    }
}
</script>

<style>

</style>