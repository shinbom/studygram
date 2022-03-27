<template>
    <div class="viewport_wrap">
        <div class="slide_viewport">
            <div class="slides_wrap">
                <ul class="slides" :style="{
                    left : -slideIndex * 100 + '%'
                    }">
                    <li 
                    v-for="(item, index) in slideList" 
                    :key="index" 
                    :style="{
                    left : index * 100 + '%'
                    }">
                        <img :src="item" alt="">
                    </li>
                </ul>
            </div>
            <div class="slide_number">
                <span class="current_slide">{{slideIndex + 1}}</span> / 
                <span class="slide_length">{{slideLength}}</span>
            </div>
            <ul class="slide_btns">
                <li>
                    <button type="button" @click="slidePrev" class="prev" v-show="slideIndex !== 0">이전</button>
                </li>
                <li>
                    <button type="button" @click="slideNext" class="next" v-show="slideIndex !== (slideLength - 1)">다음</button>
                </li>
            </ul>
        </div>
        <button type="button" class="zoomBtn" @click="zoomImg">확대하기</button>
        <transition name="fade">
            <div class="zoomImgBox" v-show="zoomStatus">
                <div>
                    <img :src="slideList[slideIndex]" alt="">
                    <button type="button" class="zoomClose" @click="zoomClose">닫기</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name : 'Slide',
    data () {
        return {
            slideIndex : 0,
            slideLength : this.slideList.length,
            zoomStatus : false
        }
    },
    props : {
        slideList : Array,
    },
    methods : {
        slidePrev() {
            if(this.slideIndex > 0) {
                return this.slideIndex--;                
            } 
        },
        slideNext() {
            if(this.slideLength - 1 > this.slideIndex) {
                return this.slideIndex++;
            }
        },
        zoomImg() {
            this.zoomStatus = true;
        },
        zoomClose() {
            this.zoomStatus = false;
        }
    }
}
</script>

<style>

</style>