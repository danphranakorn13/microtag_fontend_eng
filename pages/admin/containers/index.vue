<template>
    <div class="mt-5 mb-10">
        <!-- new task modal -->
        <NewContainerModal :show="showAddContainerkModal"  @close="showAddContainerkModal=false"></NewContainerModal>

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="flex flex-wrap items-center justify-between mb-5 space-y-2">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">ตู้คอนเทนเนอร์</h1>
            </div>
            <!-- Add driver button -->
            <div class="w-full md:block md:w-1/2">
                <button @click="toggleAddContainerModal()" class="float-right w-full px-2 py-1 text-white bg-blue-500 border-2 border-blue-400 shadow-md md:w-auto rounded-3xl text-md">+ตู้คอนเทนเนอร์</button>
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
                    <span class="text-sm">รายการโปรด</span> 
                </button>
            </div>   
        </div>

        <!-- table -->
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                    <tr
                      class="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-blue-50 dark:border-gray-700 dark:bg-gray-800"
                    >
                      <th class="px-4 py-3">โปรไฟล์</th>
                      <th class="px-4 py-3">สถานะ</th>
                      <th class="hidden px-4 py-3 lg:table-cell">ชื่นชอบ</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    <tr v-for="n in 5" :key="n" class="text-gray-700 ">
                      <td class="px-4 py-3">
                        <div class="flex items-center">
                          <!-- Avatar with inset shadow -->
                          <div class="relative hidden object-contain h-12 mr-5 md:block">
                            <img
                              class="object-contain h-full"
                              src="https://packer.searates.com/images/main-container.png"
                              alt=""
                              loading="lazy"
                            />
                            <div class="absolute inset-0 shadow-inner" aria-hidden="true" ></div>
                          </div>
                          <NuxtLink to="/admin/containers/info">
                            <p class="font-semibold">CTN-0001</p>
                            <p class="text-sm text-gray-600 ">20 ฟุต</p>
                          </NuxtLink>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          ว่าง
                        </span>
                      </td>
                      <td class="hidden px-4 py-3 lg:table-cell">1</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div
                class="grid px-4 py-3 text-sm font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:bg-gray-800"
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
            showAddContainerkModal: false
        }
    },
    methods: {
        toggleAddContainerModal(){
            this.showAddContainerkModal = !this.showAddContainerkModal
        }
    },
}
</script>