<template>
    <div id="login_wrap">
        <div id="join">
            <h2>가입하기</h2>
            <ul>
                <li>
                    <label for="userId">아이디</label>
                    <input type="text" id="userId" ref="userId" v-model="userInfo.userId">
                </li>
                <li>
                    <label for="userPw">암호</label>
                    <div class="password_wrap">
                        <input type="password" id="userPw" ref="userPw" v-model="userInfo.userPw" @keyup="checkPw" @focus="tooltipOn" @blur="tooltipOff">
                        <div class="tooltip" :class="{active : tooltipStatus}">
                            <ul class="pwCondition">
                                <li :class="{'active' : pwCondition.special}">특수기호</li>
                                <li :class="{'active' : pwCondition.length}">글자수(8자 이상)</li>
                                <li :class="{'active' : pwCondition.upperCase}">대문자</li>
                            </ul>
                        </div>
                        <input type="password" id="repeatPw" ref="repeatPw" v-model="userInfo.repeatPw" @change="repeatPwCheck" :class="{error : userInfo.repeatPw.length > 0 && repeatPwStatus == false}">
                    </div>
                </li>
                <li>
                    <label for="nickName">닉네임</label>
                    <input type="text" id="nickName" ref="nickName" v-model="userInfo.nickName">
                </li>
                <li>
                    <label>카테고리</label>
                    <custom-select @setSelected="getSelectOption" :optionList="category" ref="category"></custom-select>
                </li>
            </ul>
            <button type="button" class="btn" @click="memberJoin">가입하기</button>
        </div>
    </div>
</template>
<script>
import CustomSelect from '../components/CustomSelect.vue';

export default ({
    name : '',
    data () {
        return {
            userInfo : {
                userId : '',
                userPw : '',
                repeatPw : '',
                nickName : '',
                categorySelection : '',
            },
            category : ['디자인', '개발'],
            pwCondition : {
                special : false,
                length : false,
                upperCase : false
            },
            tooltipStatus : false,
            repeatPwStatus : false,
            joinUserArr : []
        }
    },
    components : {
        CustomSelect
    },
    created () {
        const joinUsers = localStorage.getItem('joinUser');
        this.joinUserArr = JSON.parse(joinUsers); 
    },
    methods : {
        getSelectOption(item) {
            this.userInfo.categorySelection = item;
        },
        tooltipOff() {
            this.tooltipStatus = false;
        },
        tooltipOn() {
            this.tooltipStatus = true;
        },
        checkPw() {
            let userPw = this.userInfo.userPw;
            if (userPw.length > 8) {
                this.pwCondition.length = true;
            } else {
                this.pwCondition.length = false;
            }

            //eslint-disable-next-line
            if (userPw.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g) !== null ) {
                this.pwCondition.special = true;
            } else {
                this.pwCondition.special = false;
            }

            if(userPw.match(/[A-Z]/g) !== null){
                this.pwCondition.upperCase = true;
            } else {
                this.pwCondition.upperCase = false;
            }
        },
        repeatPwCheck() {
            if(this.userInfo.userPw == this.userInfo.repeatPw){
                this.repeatPwStatus = true;
            } else {
                this.repeatPwStatus = false;
            }
        },
        memberJoin() {
            if(this.userInfo.userId === '' || this.userInfo.userPw === '' || this.userInfo.nickName === '') {
                if(this.userInfo.userId === ''){
                    alert('아이디를 입력해 주세요.');
                    this.$refs.userId.focus();
                } else if(this.userInfo.userPw === '' || this.userInfo.repeatPw === ''){
                    if(this.userInfo.userPw === '') {
                        this.$refs.userPw.focus();
                    } else {
                        this.$refs.repeatPw.focus();
                    }
                    alert('암호를 입력해 주세요.');
                }else if(this.userInfo.nickName === ''){
                    alert('닉네임을 입력해 주세요.');
                    this.$refs.nickName.focus();
                } else if(this.userInfo.categorySelection === '') {
                    alert('카테고리를 선택해 주세요');
                }
            } else {
                let joinUserInfo = {
                    userId : this.userInfo.userId,
                    userPw : this.userInfo.userPw,
                    nickName : this.userInfo.nickName,
                    category : this.userInfo.categorySelection
                };
                this.joinUserArr.push(joinUserInfo);
                localStorage.setItem('joinUser', JSON.stringify(this.joinUserArr));
            }
        }
    }
})
</script>
