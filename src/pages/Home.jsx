/** @format */
import userAvater from "../assets/User-Avatar.png";
import React from "react";
import Logout from "../components/Logout/Logout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
          <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
            <div className="flex items-center justify-start  pt-6">
              <img alt="profil" src={userAvater} className="ml-3 object-cover rounded-full h-10 w-10 " />
              <h3 className="ml-3">Ananda Saha</h3>
            </div>
            <nav className="mt-6">
              <div>
                <Link
                  className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800"
                  to="/dashbord"
                >
                  <span className="text-left">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                    </svg>
                  </span>
                  <span className="mx-4 text-sm font-normal">Dashboard</span>
                </Link>

                <div className="w-full flex justify-center">
                  <Logout />
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
              <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                <div className="container relative left-0 z-50 flex w-1/4 h-auto h-full">
                  <div className="relative flex items-center w-full h-full lg:w-64 group">
                    <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                      <svg
                        fill="none"
                        className="relative w-5 h-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <svg
                      className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                    <input
                      type="text"
                      className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                      placeholder="Search"
                    />
                    <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                      +
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-end w-2/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                  <h1 className="w-full ">Expense Tracker App</h1>
                </div>
                <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                  <a href="#" className="relative block">
                    <img alt="profil" src={userAvater} className="mx-auto object-cover rounded-full h-10 w-10 " />
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row ">
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <div className="mb-4">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <h2 className="text-3xl">Welcome User</h2>
                    <p>Take a look at your expense summary</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <div className="flex justify-between ">
                      <p className=" font-bold text-black text-md dark:text-white">Total Cash</p>
                      <span className="ml-2 text-sm text-right inline-block text-gray-500 dark:text-gray-300 ">(50000)</span>
                    </div>
                    <div className="flex justify-between ">
                      <p className=" font-bold text-black text-md dark:text-white">Total Expense</p>
                      <span className="ml-2 text-sm text-right inline-block text-gray-500 dark:text-gray-300 ">(50000)</span>
                    </div>
                    <div className="flex justify-between ">
                      <p className=" font-bold text-black text-md dark:text-white">Current Balance</p>
                      <span className="ml-2 text-sm text-right inline-block text-gray-500 dark:text-gray-300">(50000)</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-blue-100 rounded-xl">
                          <svg width="25" height="25" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <path
                              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                              fill="#4285F4"
                            ></path>
                            <path
                              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                              fill="#34A853"
                            ></path>
                            <path
                              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                              fill="#FBBC05"
                            ></path>
                            <path
                              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                              fill="#EB4335"
                            ></path>
                          </svg>
                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md dark:text-white">Google</span>
                          <span className="ml-2 text-sm text-gray-500 dark:text-white">Google Inc.</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button className="p-1 border border-gray-200 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            className="w-4 h-4 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                          >
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                          </svg>
                        </button>
                        <button className="text-gray-200">
                          <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4 space-x-12">
                      <span className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">PROGRESS</span>
                      <span className="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                        HIGH PRIORITY
                      </span>
                    </div>
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                          Task done :<span className="font-bold text-gray-700 dark:text-white">25</span>
                          /50
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start my-4 space-x-4">
                      <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">IOS APP</span>
                      <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">UI/UX</span>
                    </div>
                    <div className="flex -space-x-2">
                      <a href="#" className="">
                        <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="" alt="Guy" />
                      </a>
                    </div>
                    <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                      DUE DATE : 18 JUN
                    </span>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="w-full sm:w-1/2 xl:w-2/3">
                <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
                  <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <p className="p-4 font-bold text-black text-md dark:text-white">
                      My Transaction
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 ">(##05)</span>
                    </p>

                    <ul>
                      <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-start text-sm">
                          <span className="mx-4">01</span>
                          <span>Create wireframe</span>
                        </div>
                        <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                    </ul>
                    <ul>
                      <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-start text-sm">
                          <span className="mx-4">
                            <h3>Add new Transaction</h3>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-4 sm:ml-4 xl:mr-4">
                  <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4">
                      <p className="font-bold text-black text-md dark:text-white">Google</p>
                      <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                          <g fill="none">
                            <path
                              d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 text-gray-600 bg-blue-100 border-l-4 border-blue-500 dark:bg-gray-800">
                      <p className="flex items-center text-xs dark:text-white">
                        <svg width="20" height="20" fill="currentColor" className="mr-2 text-blue-500" viewBox="0 0 24 24">
                          <g fill="none">
                            <path
                              d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        Create wireframe
                      </p>
                      <div className="flex items-center">
                        <span className="ml-2 mr-2 text-xs font-bold dark:text-gray-200 md:ml-4">25 min 20s</span>
                        <button className="p-1 mr-4 text-sm text-gray-400 bg-blue-500 border rounded">
                          <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                            <g fill="none">
                              <path
                                d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b-2 border-gray-100">
                      <p className="font-bold text-black text-md dark:text-white">Slack</p>
                      <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                          <g fill="none">
                            <path
                              d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                      <p className="flex items-center text-xs dark:text-white">
                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                          <g fill="none">
                            <path
                              d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        International
                      </p>
                      <div className="flex items-center">
                        <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">30 min</span>
                        <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                          <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                            <g fill="none">
                              <path
                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                      <p className="flex items-center text-xs dark:text-white">
                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                          <g fill="none">
                            <path
                              d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        Slack logo design
                      </p>
                      <div className="flex items-center">
                        <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">30 min</span>
                        <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                          <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                            <g fill="none">
                              <path
                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 text-gray-600">
                      <p className="flex items-center text-xs dark:text-white">
                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                          <g fill="none">
                            <path
                              d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        Dahboard template
                      </p>
                      <div className="flex items-center">
                        <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">30 min</span>
                        <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                          <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                            <g fill="none">
                              <path
                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
