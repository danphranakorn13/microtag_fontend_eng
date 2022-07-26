<template>
    <div class="mt-5 mb-10">

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="flex flex-wrap items-center justify-between mb-5 space-y-2">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">ประวัติการทำงานของฉัน</h1>
            </div>
        </div>
        
        <!-- search form -->
        <div class="flex items-center justify-between">
            <!-- search form -->
             <div class="relative hidden md:flex md:w-1/2">
                <div class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input id="search" type="search" name="search" class="w-full h-10 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-300 rounded-lg sm:text-base focus:outline-none focus:border-indigo-400" placeholder="Search..."/>
            </div>
        </div>

        <!-- tools -->
        <div class="flex flex-wrap items-center mt-2 mb-4 space-x-2 text-sm md:text-md">
            <!-- filter -->
            <div>
                <button class="flex space-x-2 bg-blue-500 text-white border border-gray-300 rounded-lg focus:ring-black focus:border-black p-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                    </svg>
                    <span>Filter (1)</span> 
                </button>
            </div>
            <div>
                <button class="bg-blue-500 border border-gray-300 text-white rounded-lg focus:ring-black focus:border-black p-2.5">
                    <span class="text-sm">ทั้งหมด</span> 
                </button>
            </div>
            <div>
                <button class="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-black focus:border-black p-2.5">
                    <span class="text-sm">วันนี้</span> 
                </button>
            </div>   
        </div>

        <!-- table -->
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr class="font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-blue-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
                                <th class="px-4 py-3">รหัส</th>
                                <th class="px-4 py-3">ต้นทาง</th>
                                <th class="px-4 py-3">ปลายทาง</th>
                                <th class="px-4 py-3">สถานะ</th>
                                <th class="hidden px-4 py-3 md:table-cell">วัน</th>
                                <th class="hidden px-4 py-3 md:table-cell">เวลา</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            <tr v-for="(index) in 5" :key="index" class="text-gray-700 dark:text-gray-400">
                                <td class="px-4 py-3">
                                    <p class="font-semibold text-blue-500 ">JBI-0001</p>
                                </td>
                                <td class="px-4 py-3">
                                    <p class="">กรุงเทพ</p>
                                </td>
                                <td class="px-4 py-3">
                                    <p class="">เชียงใหม่</p>
                                </td>
                                <td class="px-4 py-3 ">
                                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                                        เสร็จ
                                    </span>
                                </td>
                                <td class="hidden px-4 py-3 md:table-cell">
                                    <p class="text-md">21:26 น.</p>
                                </td>
                                <td class="hidden px-4 py-3 md:table-cell">
                                    <p class="text-md">07/05/2565</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
              </div>
              
              <!-- navigator -->
              <div
                class="grid px-4 py-3 text-sm font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
              >
                <span class="flex items-center col-span-3">
                  Showing 21-30 of 100
                </span>
                <span class="col-span-2"></span>
                <!-- Pagination -->
                <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                  <nav aria-label="Table navigation">
                    <ul class="inline-flex items-center">
                      <li>
                        <button
                          class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Previous"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          2
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 text-white transition-colors duration-150 bg-blue-500 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          3
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          4
                        </button>
                      </li>
                      <li>
                        <span class="px-3 py-1">...</span>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          8
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          9
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Next"
                        >
                          <svg
                            class="w-4 h-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
              </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSendMsgModal: false
        }
    },
    methods: {
        toggleSendMsgModal(){
            this.showSendMsgModal = !this.showSendMsgModal
        }
    },
}
</script>