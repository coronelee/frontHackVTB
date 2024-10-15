<template>
    <div class="flex items-center justify-center h-[calc(100vh-80px)] w-screen font-JostMedium">
        <div class="w-4/5 h-3/4 flex relative items-center gap-10 justify-center">
            <div
                class="w-1/6 rounded-xl h-[90%] absolute left-0 bottom-0 flex flex-col items-center [&>*]:text-white [&>*]:font-JostMediun bg-[url(/particles2.jpg)] bg-cover bg-no-repeat">
                id="profileBlock">
                <div
                    class="rounded-full overflow-hidden bg-white w-44 h-44 flex items-center justify-center absolute top-[-80px]">
                    <img src="/profile-none.svg" alt="">
                </div>
                <div id="profileInfo"
                    class="flex backdrop-blur-xl overflow-y-scroll py-4 flex-col w-full [&>div>span]:text-wrap [&>div>span]:w-full [&>div]:w-full gap-2 px-12 [&>div]:flex mt-20 [&>div]:justify-between [&>div]:items-center [&>div]:flex-col">
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
                        <span>Lorem
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
                class="w-4/5 rounded-xl [&>div]:flex [&>div]:shadow-xl [&>div]:flex-col [&>div]:gap-2 h-full [&>div]:rounded-xl  absolute right-0 grid grid-cols-2 grid-rows-2 gap-10  [&>*]:border-gray-200 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:p-2">
                <div>
                    <span>Сертификаты и дипломы</span>
                    <div
                        class="flex justify-center items-center gap-4 flex-wrap [&>div]:w-24 [&>div]:h-24 [&>div]:bg-gray-200 ">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <span>Рекомендации</span>
                    <div
                        class="flex justify-center items-center gap-4 flex-wrap [&>div]:w-24 [&>div]:h-24 [&>div]:bg-gray-200 ">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <span>Достижения</span>
                    <div
                        class="flex justify-center items-center gap-4 flex-wrap [&>div]:w-24 [&>div]:h-24 [&>div]:bg-gray-200 ">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <span>Навыки</span>
                    <div
                        class="flex justify-center items-center gap-4 flex-wrap [&>div]:w-24 [&>div]:h-24 [&>div]:bg-gray-200 ">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
#profileBlock {
    background: rgb(131, 58, 180);
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(145, 54, 223, 1) %, rgba(57, 21, 87, 1) %, rgba(0, 0, 0, 1) 100%);
}

#profileInfo::-webkit-scrollbar {
    width: 5px;
    /* ширина scrollbar */
}

#profileInfo::-webkit-scrollbar-track {
    background: rgb(138, 75, 138);
    /* цвет дорожки */
}

#profileInfo::-webkit-scrollbar-thumb {
    background-color: rgb(158, 158, 255);
    /* цвет плашки */
    border-radius: 1px;
    /* закругления плашки */
    border: 1px solid rgb(85, 35, 85);
    /* padding вокруг плашки */
}
</style>