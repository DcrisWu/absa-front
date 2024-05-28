<template>
    <div class="loginPage">
        <div class="center">
            <div class="title">Aspect Based Sentition Analysis</div>
            <el-form class="form">
                <el-form-item class="formItem" label="Account：" prop="Account">
                    <el-input class="loginInput" v-model="loginForm.account" placeholder="Please input account" />
                </el-form-item>
                <el-form-item class="formItem" label="Password：" prop="Password">
                    <el-input class="loginInput" v-model="loginForm.password" placeholder="Please input password" />
                </el-form-item>
            </el-form>
            <div class="buttons">
                <el-button type="success" round>Register</el-button>
                <el-button type="primary" round >Login</el-button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
const loginForm = ref({
    account: "",
    password: "",
})
</script>

<style lang="less" scoped>
.loginPage {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(@/assets/background.png);
    padding: 0 250px 0 250px;

    .center {
        background: url(@/assets/computer_empty.png) no-repeat;
        width: calc(100vw - 10px);
        height: 100vh;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 5%;
    }

    .title {
        font-size: 4rem;
    }

    .form{
        margin-top: 8%;
    }
    .formItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25rem;
    }

    :deep(.el-form-item__label) {
        width: 6rem;
        font-family: Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
}
</style>