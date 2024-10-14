<template>
    <div class="absolute top-1/2 -translate-y-1/2 left-[75%] -rotate-[20deg] h-96 w-96"><img src="/logo.svg" alt="">
    </div>
    <div class="w-screen h-screen flex items-center justify-center bg-white">
        <div
            class="w-1/2 h-4/5 bg-white rounded-3xl overflow-hidden relative shadow-2xl flex items-center justify-center [&>*]:flex [&>*]:flex-col [&>*]:px-10 [&>*]:w-1/2 [&>*]:h-full [&>*]:justify-center [&>*]:items-center ">
            <div class="gap-10 bg-orange-400 text-white absolute top-0 left-0 px-10 transition-all duration-300"
                id="hide">
                <span class="text-3xl font-kanitExtraBold">{{ stateReg == 'reg' ? 'Добро пожаловать назад!' :
                    'Зарегистрироваться'
                    }}</span>
                <span class="font-kanitMedium">
                    {{ stateReg == 'reg' ? 'Войти в свой аккаунт' : 'Создать аккаунт в 1 шаг!' }}</span>
                <button @click="changeReg()"
                    class="border border-white rounded-3xl px-5 py-2 uppercase font-kanitExtraBold">Продолжить</button>
            </div>

            <div class="text-center gap-10 w-1/2">
                <div class="flex flex-col gap-4">
                    <span class="text-3xl font-kanitExtraBold">Войти в аккаунт</span>
                    <span class="text-sm text-gray-500 font-kanitMedium">На введенный номер позвонит номер, необходимо
                        ввести 4 последних
                        цифры номера</span>
                </div>
                <div
                    class="flex flex-col gap-2 w-full  [&>input]:bg-gray-200 [&>input]:px-4  [&>input]:rounded-xl  [&>input]:py-2  [&>input]:h-12 [&>input]:w-full [&>input:focus]:outline-gray-300">
                    <input type="text" placeholder="Логин">
                    <div
                        class="flex gap-2 w-full justify-center items-center [&>input]:bg-gray-200 [&>input]:px-4  [&>input]:rounded-xl  [&>input]:py-2  [&>input]:h-12 [&>input:focus]:outline-gray-300">
                        <input type="text" class="w-14" value="+7" disabled>
                        <input type="text" class="w-full" placeholder="Телефон" inputmode="numeric" ref="phoneInput">
                    </div>
                    <div v-if="calling"
                        class="flex overflow-hidden gap-4 w-full justify-center items-center [&>input]:w-12 [&>input]:h-12 [&>input]:border-b-2 [&>input]:border-gray-200 [&>input]:bg-gray-100/50 [&>input]:outline-none [&>input]:text-center">
                        <input type="text" id="code1">
                        <input type="text" id="code2">
                        <input type="text" id="code3">
                        <input type="text" id="code4">
                    </div>
                    <button @click="call()" class="border border-gray-200 rounded-3xl px-5 py-2">{{ calling ?
                        'Войти'
                        : 'Позвонить' }}</button>
                </div>
            </div>

            <div class="text-center gap-10 w-1/2">
                <div class="flex flex-col gap-4">
                    <span class="text-3xl font-kanitExtraBold">Создать аккаунт</span>
                    <span class="text-sm text-gray-500 font-kanitMedium">На введенный номер позвонит номер, необходимо
                        ввести 4 последних
                        цифры номера</span>
                </div>
                <div
                    class="flex flex-col gap-2 w-full  [&>input]:bg-gray-200 [&>input]:px-4  [&>input]:rounded-xl  [&>input]:py-2  [&>input]:h-12 [&>input]:w-full [&>input:focus]:outline-gray-300">
                    <input type="text" placeholder="Логин">
                    <div
                        class="flex gap-2 w-full justify-center items-center [&>input]:bg-gray-200 [&>input]:px-4  [&>input]:rounded-xl  [&>input]:py-2  [&>input]:h-12 [&>input:focus]:outline-gray-300">
                        <input type="text" class="w-14" value="+7" disabled>
                        <input type="text" class="w-full" placeholder="Телефон" inputmode="numeric" ref="phoneInput">
                    </div>
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
import IMask from 'imask';
const phoneInput = ref(null);

const stateReg = ref('reg');
const calling = ref(false);


onMounted(() => {
    const mask = IMask(phoneInput.value, {
        mask: '(000) 000-00-00'
    });
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