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

export default {
    name : 'Chart',
    data () {
        return {
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
    props : {
        studyLists : Array,
        weekInfo : Object        
    },
    mounted () {
        this.getCurrentWeek();
        this.checkStudyStatus();            
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
                this.currentWeek[i].date = dayjs().week(this.weekInfo.currentWeek).day(i + 1).format('YYYY-MM-DD');
                this.currentWeek[i].date === this.today ? this.currentWeek[i].today = true : this.currentWeek[i].today = false;
            }
        },
        checkStudyStatus () {
            setTimeout(() => {
                for ( let i = 0; i < 5; i++) {
                    if(this.studyLists.length == 0) {
                        this.currentWeek[i].studyStatus = false;
                    } else {
                        if(this.studyLists[i].uploadDate === this.currentWeek[i].date) {
                            this.currentWeek[i].studyStatus = true;
                        } else {
                            this.currentWeek[i].studyStatus = false;
                        }
                    }
                }
            }, 200);
        },
        prevWeeks() {
            this.weekInfo.currentWeek--;
            this.getCurrentWeek();
            this.checkStudyStatus();
            this.$emit('refreshList');
        },
        nextWeeks() {
            this.weekInfo.currentWeek++;
            this.getCurrentWeek();
            this.checkStudyStatus();
            this.$emit('refreshList');
        }
    }
}
</script>

<style>

</style>