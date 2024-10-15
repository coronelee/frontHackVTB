<template>
    <div class="flex items-center justify-center h-[calc(100vh-80px)] w-screen font-JostMedium">
        <div class="w-4/5 h-3/4 flex relative items-center gap-10 justify-center">
            <div
                class="w-1/6 rounded-xl h-[90%] absolute left-0 bottom-0 flex flex-col items-center [&>*]:text-white [&>*]:font-JostMediun bg-[url(/particles2.jpg)] bg-cover bg-no-repeat">
                <div
                    class="rounded-full z-10 overflow-hidden bg-white w-44 h-44 flex items-center justify-center absolute top-[-80px]">
                    <img src="/profile-none.svg" alt="">
                </div>
                <div id="profileInfo"
                    class="flex  overflow-y-scroll py-4 flex-col w-full [&>div>span]:text-wrap [&>div>span]:w-full [&>div]:w-full gap-2 px-12 [&>div]:flex mt-32 [&>div]:justify-between [&>div]:items-center [&>div]:flex-col">
                    <div>
                        <span>ФИО</span>
                        <span>zaglushka</span>
                    </div>
                    <div>
                        <span>Должность</span>
                        <span>zaglushka</span>
                    </div>
                    <div>
                        <span>Номер телефона</span>
                        <span>zaglushka</span>
                    </div>
                    <div>
                        <span>Почта</span>
                        <span>zaglushka</span>
                    </div>
                    <div>
                        <span>Биография</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cupiditate iure fugit
                            amet, explicabo perferendis aliquam voluptate delectus quia officia, maxime assumenda quae
                            nulla rem deserunt, debitis consequatur architecto deleniti?
                        </span>
                    </div>
                    <button class="hover:bg-white hover:text-black px-2 py-1 transition-all duration-300 rounded-lg">
                        <span>Настройки</span>
                    </button>
                    <button class="hover:bg-white hover:text-black px-2 py-1 transition-all duration-300 rounded-lg">
                        <span>Редактировать профиль</span>
                    </button>
                </div>
            </div>
            <div
                class="w-4/5 rounded-xl  h-full absolute right-0 grid grid-cols-2 grid-rows-2 gap-10 
                [&>div]:flex [&>div]:shadow-xl [&>div]:h-auto [&>div]:flex-col [&>div]:gap-2 [&>div]:rounded-xl  [&>*]:border-gray-200 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:p-2
                [&>div>div]:flex [&>div]:overflow-y-scroll [&>div>div]:justify-center [&>div>div]:items-center [&>div>div]:gap-4 [&>div>div]:flex-wrap [&>div>div>div]:w-24 [&>div>div>div]:h-24">
                <div>
                    <span>Сертификаты и дипломы</span>
                    <div>
                        <div v-if="sertificates.length > 0" v-for="(item, index) in sertificates" :key="index"><img
                                :src="item" alt=""></div>
                        <div v-else>
                            <span>У вас еще нет cертификатов или дипломов :(</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Рекомендации</span>
                    <div>
                        <div v-if="recomendations.length > 0" v-for="(item, index) in recomendations" :key="index"><img
                                :src="item" alt=""></div>
                        <div v-else>
                            <span>У вас еще нет рекомендаций :(</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Достижения</span>
                    <div>
                        <div v-if="achievements.length > 0" v-for="(item, index) in achievements" :key="index"><img
                                :src="item" alt=""></div>
                        <div v-else>
                            <span>У вас еще нет достижений :(</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Навыки</span>
                    <div>
                        <div v-if="skills.length > 0" v-for="(item, index) in skills" :key="index"><img :src="item"
                                alt=""></div>
                        <div v-else>
                            <span>У вас еще нет навыков :(</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>


import { onMounted, ref } from 'vue';
const sertificates = ref([
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
    '/svgnft/sertificate.svg',
])
const recomendations = ref([
    '/svgnft/recomendation.svg',
    '/svgnft/recomendation.svg',
    '/svgnft/recomendation.svg',
    '/svgnft/recomendation.svg',
    '/svgnft/recomendation.svg',
])
const skills = ref([
    '/svgnft/skill.svg',
    '/svgnft/skill.svg',
    '/svgnft/skill.svg',
    '/svgnft/skill.svg',
    '/svgnft/skill.svg',
])
const achievements = ref([
    '/svgnft/achivement.svg',
    '/svgnft/achivement.svg',
    '/svgnft/achivement.svg',
    '/svgnft/achivement.svg',
    '/svgnft/achivement.svg',
    '/svgnft/achivement.svg',
    '/svgnft/achivement.svg',
    '/svgnft/achivement.svg',
])
onMounted(() => {



})

</script>


<style scoped>
#profileBlock {
    background: rgb(131, 58, 180);
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(145, 54, 223, 1) %, rgba(57, 21, 87, 1) %, rgba(0, 0, 0, 1) 100%);
}

*::-webkit-scrollbar {
    width: 5px;
}

*::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
}

#profileInfo::-webkit-scrollbar-track {
    background: rgb(75, 38, 73);
}

*::-webkit-scrollbar-thumb {
    background-color: rgb(79, 79, 233);
    border-radius: 1px;
    border: 1px solid rgb(41, 22, 41);
}
</style>