<template>
    <div v-if="show" class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full">
        <div @click.self="close_modal()" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

        <div class="z-30 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg lg:w-6/12 h-5/6 md:h-auto">
            <div class="px-6 py-4 text-left">
                <!-- header -->
                <div class="flex items-center justify-center mb-5">
                    <p class="text-2xl font-bold text-center">Add job</p>
                </div>
                
                <!-- main -->
                <form @submit.prevent="onSubmit">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <!-- driver id -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">Drivers*</label>
                                <div class="flex items-center space-x-1">
                                    <select v-model="driver" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">Choose</option>
                                        <option>driver-0001</option>
                                        <option>driver-0002</option>
                                        <option>driver-0003</option>
                                    </select>
                                    <button class="block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700">   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </button>
                                </div>  
                            </div>
                        </div>
                        <!-- truck id -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">trucks*</label>
                                <div class="flex items-center space-x-1">
                                    <select v-model="truck" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">choose</option>
                                        <option>truck-0001</option>
                                        <option>truck-0002</option>
                                        <option>truck-0003</option>
                                    </select>
                                    <button class="block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700">   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </button>
                                </div>  
                            </div>
                        </div>
                        <!-- container id -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">Containers*</label>
                                <div class="flex items-center space-x-1">
                                    <select v-model="container" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">choose</option>
                                        <option>container-0001</option>
                                        <option>container-0002</option>
                                        <option>container-0003</option>
                                    </select>
                                    <button class="block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700">   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </button>
                                </div>  
                            </div>
                        </div>
                        <!-- route id -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <div class="flex justify-between">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500">Routes*</label>
                                    <div>
                                        <input type="checkbox" id="checkbox" v-model="selectRoute">
                                        <label for="checkbox">{{ selectRoute }}</label>
                                    </div>
                                </div>
                                <div v-if="selectRoute" class="flex items-center space-x-1">
                                    <select v-model="route" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option disabled value="">choose</option>
                                        <option>route-0001</option>
                                        <option>route-0002</option>
                                        <option>route-0003</option>
                                    </select>
                                    <button class="block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700">   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </button>
                                </div>  
                            </div>
                        </div>

                        <!-- origin name -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">origin*</label>
                                <input disabled class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="กรุงเทพ">
                            </div>
                        </div>
                        <!-- desination name -->
                        <div class="flex justify-center">
                            <div class="w-full mb-3 -mt-4 md:mt-0">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">desination*</label>
                                <input disabled class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="เชียงใหม่">
                            </div>
                        </div>
                        <!-- longdo map route -->
                        <div class="flex justify-center md:col-span-2">
                            <div class="w-full mb-3 -mt-4 h-72">
                                <longdo-map/>
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
                 route: "",
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