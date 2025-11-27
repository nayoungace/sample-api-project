export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black items-start">
        <div className="flex flex-col w-full items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Sample-api-project
          </h1>
          <form className="flex flex-col w-full">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
              <label>
                <p className="mb-1.5 block font-medium text-lg text-zinc-600 dark:text-zinc-400">제목</p>
                <input
                  type="text"
                  className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                />
              </label>
              <label>
                <p className="mb-1.5 block font-medium text-lg text-zinc-600 dark:text-zinc-400">내용</p>
                <textarea className="w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"></textarea>
              </label>
              <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] md:ml-auto"
                >
                  저장
                </button>
              </div>
            </div>
          </form>
          <div className="flex flex-col w-full">
            <p className="mb-1.5 block font-medium text-lg text-zinc-600 dark:text-zinc-400">리스트 확인</p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
              <ul>
                <li className="p-5 mb-4 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start w-full gap-4">
                      <p className="-mt-0.5 text-base text-gray-800 dark:text-white/90">제목</p>
                    </div>
                    <div className="flex items-center justify-between w-full gap-5 xl:w-auto xl:justify-normal">
                      <p className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400">
                        내용
                      </p>
                    </div>
                  </div>
                </li>
                <li className="p-5 mb-4 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start w-full gap-4">
                      <p className="-mt-0.5 text-base text-gray-800 dark:text-white/90">제목</p>
                    </div>
                    <div className="flex items-center justify-between w-full gap-5 xl:w-auto xl:justify-normal">
                      <p className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400">
                        내용
                      </p>
                    </div>
                  </div>
                </li>
                <li className="p-5 mb-4 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start w-full gap-4">
                      <p className="-mt-0.5 text-base text-gray-800 dark:text-white/90">제목</p>
                    </div>
                    <div className="flex items-center justify-between w-full gap-5 xl:w-auto xl:justify-normal">
                      <p className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400">
                        내용
                      </p>
                    </div>
                  </div>
                </li>
                <li className="p-5 mb-4 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start w-full gap-4">
                      <p className="-mt-0.5 text-base text-gray-800 dark:text-white/90">제목</p>
                    </div>
                    <div className="flex items-center justify-between w-full gap-5 xl:w-auto xl:justify-normal">
                      <p className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400">
                        내용
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
