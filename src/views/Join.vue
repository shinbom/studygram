<template>
    <div id="join">
        <h2>가입하기</h2>
        <ul>
            <li>
                <label for="userId">아이디</label>
                <input type="text" id="userId" v-model="userInfo.userId">
            </li>
            <li>
                <label for="userPw">암호</label>
                <div class="password_wrap">
                    <input type="password" id="userPw" v-model="userInfo.userPw" @keyup="checkPw">
                    <div class="tooltip">
                        <ul class="pwCondition">
                            <li :class="{'active' : userInfo.pwCondition.special}">특수기호</li>
                            <li :class="{'active' : userInfo.pwCondition.length}">글자수(8자 이상)</li>
                            <li :class="{'active' : userInfo.pwCondition.upperCase}">대문자</li>
                        </ul>
                    </div>
                    <input type="password" id="repeatPw" v-model="userInfo.repeatPw" @change="repeatPwCheck">
                </div>
            </li>
            <li>
                <label for="nickName">닉네임</label>
                <input type="text" id="nickName" v-model="userInfo.nickName">
            </li>
            <li>
                <label>카테고리</label>
                <custom-select @setSelected="getSelectOption" :optionList="userInfo.category"></custom-select>
            </li>
        </ul>
        <button type="button" class="btn">가입하기</button>
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
                pwCondition : {
                    special : false,
                    length : false,
                    upperCase : false
                },
                nickName : '',
                option : '',
                category : ['디자인', '개발'],
            }
        }
    },
    components : {
        CustomSelect
    },
    methods : {
        getSelectOption(item) {
            this.userInfo.option = item;
        },
        checkPw() {
            let userPw = this.userInfo.userPw;
            if (userPw.length > 8) {
                this.userInfo.pwCondition.length = true;
            } else {
                this.userInfo.pwCondition.length = false;
            }

            //eslint-disable-next-line
            if (userPw.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g) !== null ) {
                this.userInfo.pwCondition.special = true;
            } else {
                this.userInfo.pwCondition.special = false;
            }

            if(userPw.match(/[A-Z]/g !== null)){
                this.userInfo.pwCondition.upperCase = true;
            } else {
                this.userInfo.pwCondition.upperCase = false;
            }
        },
        repeatPwCheck() {
            if(this.userInfo.userPw == this.userInfo.repeatPw){
                console.log('맞아용!');  
            } else {
                console.log('안 맞는뒤');
            }
        }
    }
})
</script>
