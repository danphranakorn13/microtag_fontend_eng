<template>
    <div v-if="show" class="z-20 fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="bg-white w-11/12 lg:w-6/12 mx-auto rounded shadow-lg z-30 overflow-y-auto h-5/6 md:h-auto">
            <div class="py-4 text-left px-6">
                <!-- header -->
                <div class="flex justify-center items-center mb-5">
                    <p class="text-2xl font-bold text-center">เพิ่มเส้นทาง</p>
                </div>
                
                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- route name -->
                        <div class="flex md:col-span-2 justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ชื่อเส้นทาง*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="ระยะทางใกล้ที่สุด">
                            </div>
                        </div>
                        <!-- origin name -->
                        <div class="flex justify-center">
                            <div class="mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ต้นทาง*</label>
                                <input disabled class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="กรุงเทพ">
                            </div>
                        </div>
                        <!-- desination name -->
                        <div class="flex justify-center">
                            <div class="-mt-4 md:mt-0 mb-3 w-full">
                                <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ปลายทาง*</label>
                                <input disabled class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="เชียงใหม่">
                            </div>
                        </div>
                        <!-- longdo map route -->
                        <div class="flex md:col-span-2 justify-center">
                            <div class="-mt-4 mb-3 h-72 w-full">
                                <longdo-map/>
                            </div>
                        </div>
                    </div>

                    <!-- submit button -->
                    <div class="mt-6">
                        <button type="submit" class="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                            <span class="m-2 text-white">เพิ่ม</span>
                        </button>
                    </div>
                </form>
            
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "NewDriverModal",

        props: {
            show: Boolean
        },
        data() {
            return{
                 selectRoute: false,
                 driver: "",
                 truck: "",
                 gender: "",
                 container: "",
                 origin: "",
                 desination: ""
            }
        },

        methods:{
            close_modal() {
                this.$emit("close")
            },
            onSubmit(){
                this.close_modal()
            }
        }
    }
</script>

<style>
    #map {
        height: 100%;
    }
</style>