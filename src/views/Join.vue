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
                    <input type="password" id="userPw" v-model="userInfo.userPw">
                    <input type="password" id="userPw" v-model="userInfo.repeatPw">
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
                nickName : '',
                option : '',
                category : ['디자인', '개발']
            }
        }
    },
    components : {
        CustomSelect
    },
    methods : {
        getSelectOption(item) {
            this.userInfo.option = item;
        }
    }
})
</script>
