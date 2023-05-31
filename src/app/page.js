import Image from 'next/image'
import Products from './products/page'
import Categories from './category/page'
import Users from './users/page'

export default function Home() {
  return (
   <section>  

<div class="bg-white dark:bg-gray-900">
    <div class="relative w-full">
       
        <div class="min-h-screen flex">
            <div class="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
                <div class="flex items-center flex-wrap gap-12 lg:gap-0">
                    <div class="lg:w-5/12 space-y-8">
                        <span class="flex space-x-2">
                            <span class="block w-14 mb-2 border-b-2 border-gray-600"></span>
                            <span class="font-medium text-gray-600 dark:text-gray-400">New this summer</span>
                        </span>
                        <h1 class="text-4xl font-bold md:text-6xl dark:text-white">The New <br/> Way To Discover</h1>
                        <p class="text-xl text-gray-700 dark:text-gray-300">Booking Company-Wide Savings, Invoicing and reporting docs.</p>
                        
                        <div class="flex space-x-4">
                            <button type="button" title="Start buying" class="w-full py-3 px-6 text-center transition bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max">
                                <span class="block text-white font-semibold">
                                    Shop now
                                </span>
                            </button>
                            <button type="button" title="Start buying" class="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                <span class="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                                    Our showreel
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="hidden relative md:block lg:w-7/12">
                        <div aria-hidden="true" class="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full ">

                        </div>
                        <img className='rounded-full' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80" class="relative ml-auto" alt=""/>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
  </div>
                                    


    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className="text-center font-bold text-5xl p-10 ">Products</h1>
     <Products/>
     <h1 className="text-center font-bold text-5xl p-10 ">Categories</h1>
     <Categories/>
     <h1 className="text-center font-bold text-5xl p-10 ">Users</h1>
     <Users/>
    </main>
    </section> 
  ) 
}
