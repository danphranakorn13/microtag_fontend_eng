<template>
    <div v-if="show" class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full">
        <div @click.self="close_modal()" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

        <div class="z-30 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg lg:w-6/12 h-5/6 md:h-auto lg:h-5/6">
            <div class="px-6 py-4 text-left modal-content">
                <!-- header -->
                <div class="flex items-center justify-center mb-5">
                    <p class="text-2xl font-bold text-center">Add driver</p>
                </div>
                
                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <!-- profile picture -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">Profile*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
                            </div>
                        </div>
                        <!-- driver license -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">Driving license*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
                            </div>
                        </div>
                        <!-- first and lastname -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">Fullname*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="สมชาย เมืองสิง">
                            </div>
                        </div>
                        <!-- driver license number -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 whitespace-nowrap form-label">Cr registration number*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="0000000000">
                            </div>
                        </div>
                        <!-- birthday -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">birthday*</label>
                                <date-picker
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="MM/dd/yyyy"
                                    format="MM/dd/yyyy" 
                                />
                            </div>
                        </div>
                        <!-- phone number -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">Tel*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="091239xxxx">
                            </div>
                        </div>
                        <!-- email -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">Email*</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="email" placeholder="example@gmail.com">
                            </div>
                        </div>
                        <!-- description -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">Description</label>
                                <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="4"></textarea>
                            </div>
                        </div>

                        <!-- ที่อยู่ -->
                        <div class="flex justify-center md:col-span-2">
                            <div class="w-full mb-3">
                               <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">Address</label>
                               <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="150/xxx หมู่บ้านนิรันดร์วิลล์ 6 ถนนสุขุมไทย">
                            </div>
                        </div>
                        <!-- จังหวัด -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">province</label>
                                <select v-model="truck" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option disabled value="">choose</option>
                                    <option>province 1</option>
                                    <option>province 2</option>
                                    <option>province 3</option>
                                </select>
                            </div>
                        </div>
                        <!-- อำเภอ -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">district</label>
                                <select v-model="truck" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option disabled value="">choose</option>
                                    <option>district 1</option>
                                    <option>district 2</option>
                                    <option>district 3</option>
                                </select>
                            </div>
                        </div>
                        <!-- ตำบล -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">subdistrict</label>
                                <select v-model="truck" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option disabled value="">choose</option>
                                    <option>subdistrict 1</option>
                                    <option>subdistrict 2</option>
                                    <option>subdistrict 3</option>
                                </select>
                            </div>
                        </div>
                        <!-- รหัสไปรษณีย์ -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-700 form-label">zip code</label>
                                <input disabled class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text">
                            </div>
                        </div>
                    </div>


                    <!-- submit button -->
                    <div class="mt-6">
                        <button type="submit" class="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                            <span class="m-2 text-white">Add</span>
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