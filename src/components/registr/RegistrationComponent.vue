<template>
    <div class="w-screen h-screen flex items-center justify-center bg-white">
        <div
            class="w-1/2 h-4/5 bg-white rounded-3xl overflow-hidden relative shadow-2xl flex items-center justify-center [&>*]:flex [&>*]:flex-col [&>*]:px-10 [&>*]:w-1/2 [&>*]:h-full [&>*]:justify-center [&>*]:items-center ">
            <div class="gap-10 bg-orange-400 text-white absolute top-0 left-0 px-10 transition-all duration-300"
                id="hide">
                <span class="text-3xl font-bold">{{ stateReg == 'reg' ? 'Добро пожаловать назад!' : 'Зарегистрироваться'
                    }}</span>
                <span>{{ stateReg == 'reg' ? 'Войти в свой аккаунт' : 'Создать аккаунт в 1 шаг!'
                    }}</span>
                <button @click="changeReg()"
                    class="border border-white rounded-3xl px-5 py-2 uppercase font-bold">Продолжить</button>
            </div>

            <div class="text-center gap-10 w-1/2">
                <div class="flex flex-col gap-4">
                    <span class="text-3xl font-bold">Войти в аккаунт</span>
                    <span class="text-sm text-gray-500">На введенный номер позвонит номер, необходимо ввести 4 последних
                        цифры номера</span>
                </div>
                <div
                    class="[&>input]:bg-gray-200 [&>input]:px-4  [&>input]:rounded-3xl  [&>input]:py-2 flex flex-col gap-4 [&>input]:w-full w-full [&>input:focus]:outline-gray-300">
                    <input type="text" placeholder="Логин">
                    <input type="text" placeholder="Телефон">
                    <button class="border border-gray-200 rounded-3xl px-5 py-2">Позвонить</button>
                </div>
            </div>

            <div class="text-center gap-10 w-1/2">
                <div class="flex flex-col gap-4">
                    <span class="text-3xl font-bold">Создать аккаунт</span>
                    <span class="text-sm text-gray-500">На введенный номер позвонит номер, необходимо ввести 4 последних
                        цифры номера</span>
                </div>
                <div
                    class="[&>input]:bg-gray-200 [&>input]:px-4  [&>input]:rounded-3xl  [&>input]:py-2 flex flex-col gap-4 [&>input]:w-full w-full [&>input:focus]:outline-gray-300">
                    <input type="text" placeholder="Логин">
                    <input type="text" placeholder="Телефон">
                    <div v-if="calling"
                        class="flex gap-4 w-full justify-center items-center [&>input]:w-12 [&>input]:h-12 [&>input]:border-b-2 [&>input]:border-gray-200 [&>input]:bg-gray-100/50 [&>input]:outline-none [&>input]:text-center">
                        <input type="text" id="code1">
                        <input type="text" id="code2">
                        <input type="text" id="code3">
                        <input type="text" id="code4">
                    </div>
                    <button @click="call()" class="border border-gray-200 rounded-3xl px-5 py-2">{{ calling ?
                        'Зарегистрироваться'
                        : 'Позвонить' }}</button>
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from "vue";

const stateReg = ref('reg');
const calling = ref(false);


onMounted(() => {
})

const changeReg = () => {
    const hide = document.getElementById('hide')
    stateReg.value == 'log' ? [stateReg.value = 'reg', hide.style.left = '0'] : [stateReg.value = 'log', hide.style.left = '50%']
}

const call = () => {
    calling.value = true
}
</script>


<style scoped>
#hide {
    background: rgb(251, 94, 63);
    background: radial-gradient(circle, rgba(251, 94, 63, 1) 0%, rgba(252, 70, 107, 1) 100%);
}
</style>