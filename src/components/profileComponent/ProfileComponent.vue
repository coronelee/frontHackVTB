<template>
    <div class="flex items-center justify-center h-[calc(100vh-80px)] w-screen font-kanitMedium">
        <div class="w-3/5 h-3/4 bg-white flex relative items-center gap-10 justify-center">
            <div
                class="w-3/5 rounded-xl h-full [&>div]:rounded-xl  absolute left-0 grid grid-cols-2 grid-rows-2 gap-10  [&>*]:border [&>*]:border-gray-200 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:p-12">
                <div>
                    <span>Сертификаты и дипломы</span>
                </div>
                <div>
                    <span>Рекомендации</span>
                </div>
                <div>
                    <span>Достижения</span>
                </div>
                <div>
                    <span>Навыки</span>
                </div>
            </div>
            <div class="w-1/3 rounded-xl h-[90%] absolute right-0 bottom-0 flex flex-col items-center [&>*]:text-white [&>*]:font-kanitMediun"
                id="profileBlock">
                <div
                    class="rounded-full  overflow-hidden bg-white w-44 h-44 flex items-center justify-center mt-[-80px]">
                    <img src="/profile-none.svg" alt="">
                </div>
                <div
                    class="flex flex-col w-full px-12 [&>div]:flex  [&>div]:justify-between [&>div]:items-center [&>div]:flex-col">
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
                        <span>zaglushka</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
#profileBlock {
    background: rgb(251, 94, 63);
    background: radial-gradient(circle, rgba(251, 94, 63, 1) 0%, rgba(252, 70, 107, 1) 100%);
}
</style>