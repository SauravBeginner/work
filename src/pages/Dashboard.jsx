import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className=" bg-white">
        <div className="flex gap-8">
          <Sidebar />
          <main className="flex-1 p-8">
            <section className="mb-8 ">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
                data-v0-t="card"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">
                    Wanna Host website?
                  </h2>
                  <p className="text-sm mb-4">
                    Looking for reliable website hosting that won't break the
                    bank? Look no further than our hosting service! With our
                    state-of-the-art servers, your website will be
                    lightning-fast and always up and running.
                  </p>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    See More
                  </button>
                </div>
              </div>
            </section>
            <section className="mb-8">
              <h3 className="text-lg font-bold mb-4">Folders</h3>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
                  data-v0-t="card"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                      </svg>
                      <span className="text-sm">1,754,430 Files</span>
                    </div>
                    <h4 className="text-sm font-bold mb-2">Images</h4>
                    <p className="text-xs mb-4">Shared With: </p>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      +9
                    </div>
                    <p />
                    <p className="text-xs mb-4">Last Edit: May 3rd 2021</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      Open
                    </button>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
                  data-v0-t="card"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <path d="m22 8-6 4 6 4V8Z" />
                        <rect
                          width={14}
                          height={12}
                          x={2}
                          y={6}
                          rx={2}
                          ry={2}
                        />
                      </svg>
                      <span className="text-sm">34,430 Files</span>
                    </div>
                    <h4 className="text-sm font-bold mb-2">Videos</h4>
                    <p className="text-xs mb-4">Shared With: </p>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      +1
                    </div>
                    <p />
                    <p className="text-xs mb-4">Last Edit: May 25th 2023</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      Open
                    </button>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
                  data-v0-t="card"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z" />
                        <path d="M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z" />
                        <path d="M2 19v-3a6 6 0 0 1 12 0v3" />
                      </svg>
                      <span className="text-sm">34,430 Files</span>
                    </div>
                    <h4 className="text-sm font-bold mb-2">Audio</h4>
                    <p className="text-xs mb-4">Shared With: </p>
                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      +2
                    </div>
                    <p />
                    <p className="text-xs mb-4">Last Edit: Jun 30th 2020</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      Open
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-bold mb-4">Latest</h3>
              <div className="grid grid-cols-4 gap-4">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
                  data-v0-t="card"
                >
                  <div className="p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500 mb-4"
                    >
                      <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z" />
                      <path d="M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z" />
                      <path d="M2 19v-3a6 6 0 0 1 12 0v3" />
                    </svg>
                    <h4 className="text-sm font-bold mb-2">Aya_Alkurdi.mp3</h4>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      Play
                    </button>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
                  data-v0-t="card"
                >
                  <div className="p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-500 mb-4"
                    >
                      <path d="M2 3h20" />
                      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                      <path d="m7 21 5-5 5 5" />
                    </svg>
                    <h4 className="text-sm font-bold mb-2">
                      Friday's Presentation
                    </h4>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      Open
                    </button>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
                  data-v0-t="card"
                >
                  <div className="p-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAXVBMVEX///9NTU09PT1JSUnn5+daWlqgoKBBQUE1NTXOzs46Ojr8/PxWVlbg4OBzc3NoaGjY2Nirq6vx8fHFxcWHh4eysrJubm5iYmK8vLyYmJiPj48uLi55eXkfHx8oKCgPnmXLAAADn0lEQVR4nO2c25KiMBCGgw0GAiigCB523/8xN4mKqLMlSTplV03/NzNTNaQ+mtCHkI4QLBaLlLoUWV0wUn0ZMmQN+yaM6agAEmSBzNsygKldYRNdtWr9mWppRpDIMqaH1BtqrQ0F2RpXx0xTyd4b6qAvH/zv6T/qtP3lyfvyLSSwCZmTP6vSw+69h40HJU8EoYChlogf31JZKO+rn6HKEcl9Vtolb/XPdvRJGOZQZZtLQAszyXUon8j8gCrFSUWJzO6PcWapPo/BlCR5LxyN9YDq9K8J5MgyYw6u8+oB1ZjrLx3um9hdzKiFN1ShI7tyvfyjGj1P5c4fSmdWKjC1flfNUAxFG6oMFTZUKdLjsAqSPNTYlhorGVo2y6zGhWpWCJU8JDUmVGmqwaCyGe5UeFCNzhcAjv45XjvcqfCgelPLu470pL28PcFeYkGZlZiqRoBK7CoTJahqeg/pQMFmVEAO6lAWCZCD6sTO+jvnlaq4UOJqK+VoqshQYmf8KMCIDFUW/VzLSt4JSjTWVmcnqs9Q67OaR/98s4TqASWKq69yofoIlWYvcXa1ZII8oEpRX23lMNs/QnXDS8KwWlKGXV3C7Y+mcnwHPz++onqGWi8Z1kANRXPTaO/rvHi5/yOUTkLruZYtb5swAzDPY1xsFTkgP+v8XajTj1Bq4UpHJKi6ytWz5PehRFq86ATfh3pTKxmKoRiKoRiKoRiKoRiKDhTSB0BUKF3h7gI0VWS4lmr/qABNKxuoUG9lu5vgUtKDkpsYUGLMgz493JdDkF1C2gRowvgFfoqhFkJh7ejAnuivaxUuijTR+78hG3CmTyCUnOev8uj6P/xVRfLodchEj5S6IImhGOoB1RCc6KMM2BukkiguocvCnOchikenCKU9esjeLvbozmIohqI90ceAFC9WkkcyHSYJJfqwHgefEmszNR3adoIIE93DUq26t2fugYxLSG3P6X1HChEo0c5beKhAiTU8dnmTgRLNKTMb3CQpqFvnwO5/b9+XoKwIBWSGYqjfBkXRJTQmCG7tVs61pAJlszlIsqqyW2BpQInxqbuWCJTYK6AHJcbKRmbbmEAGSnRFa2T6dOlA3dSTcQnzARhq6QAMtXSAGFCr0LfPnOYQ1HT4LlPr5iEfpBt7xERAe+a77BEFSchd2fMcUM9/skFC+Z+zZFTgH95lVoUCjzobpcTlAlDOp168qBTpaYt79Np2xNh2URI7pI7FYqHrH8FQn6b7Bzg0AAAAAElFTkSuQmCC"
                      alt="Dome of the Rock"
                      className="mb-4"
                      width={100}
                      height={100}
                      style={{ aspectRatio: "100 / 100", objectFit: "cover" }}
                    />
                    <h4 className="text-sm font-bold mb-2">Dome of the Rock</h4>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      View
                    </button>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
                  data-v0-t="card"
                >
                  <div className="p-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAXVBMVEX///9NTU09PT1JSUnn5+daWlqgoKBBQUE1NTXOzs46Ojr8/PxWVlbg4OBzc3NoaGjY2Nirq6vx8fHFxcWHh4eysrJubm5iYmK8vLyYmJiPj48uLi55eXkfHx8oKCgPnmXLAAADn0lEQVR4nO2c25KiMBCGgw0GAiigCB523/8xN4mKqLMlSTplV03/NzNTNaQ+mtCHkI4QLBaLlLoUWV0wUn0ZMmQN+yaM6agAEmSBzNsygKldYRNdtWr9mWppRpDIMqaH1BtqrQ0F2RpXx0xTyd4b6qAvH/zv6T/qtP3lyfvyLSSwCZmTP6vSw+69h40HJU8EoYChlogf31JZKO+rn6HKEcl9Vtolb/XPdvRJGOZQZZtLQAszyXUon8j8gCrFSUWJzO6PcWapPo/BlCR5LxyN9YDq9K8J5MgyYw6u8+oB1ZjrLx3um9hdzKiFN1ShI7tyvfyjGj1P5c4fSmdWKjC1flfNUAxFG6oMFTZUKdLjsAqSPNTYlhorGVo2y6zGhWpWCJU8JDUmVGmqwaCyGe5UeFCNzhcAjv45XjvcqfCgelPLu470pL28PcFeYkGZlZiqRoBK7CoTJahqeg/pQMFmVEAO6lAWCZCD6sTO+jvnlaq4UOJqK+VoqshQYmf8KMCIDFUW/VzLSt4JSjTWVmcnqs9Q67OaR/98s4TqASWKq69yofoIlWYvcXa1ZII8oEpRX23lMNs/QnXDS8KwWlKGXV3C7Y+mcnwHPz++onqGWi8Z1kANRXPTaO/rvHi5/yOUTkLruZYtb5swAzDPY1xsFTkgP+v8XajTj1Bq4UpHJKi6ytWz5PehRFq86ATfh3pTKxmKoRiKoRiKoRiKoRiKDhTSB0BUKF3h7gI0VWS4lmr/qABNKxuoUG9lu5vgUtKDkpsYUGLMgz493JdDkF1C2gRowvgFfoqhFkJh7ejAnuivaxUuijTR+78hG3CmTyCUnOev8uj6P/xVRfLodchEj5S6IImhGOoB1RCc6KMM2BukkiguocvCnOchikenCKU9esjeLvbozmIohqI90ceAFC9WkkcyHSYJJfqwHgefEmszNR3adoIIE93DUq26t2fugYxLSG3P6X1HChEo0c5beKhAiTU8dnmTgRLNKTMb3CQpqFvnwO5/b9+XoKwIBWSGYqjfBkXRJTQmCG7tVs61pAJlszlIsqqyW2BpQInxqbuWCJTYK6AHJcbKRmbbmEAGSnRFa2T6dOlA3dSTcQnzARhq6QAMtXSAGFCr0LfPnOYQ1HT4LlPr5iEfpBt7xERAe+a77BEFSchd2fMcUM9/skFC+Z+zZFTgH95lVoUCjzobpcTlAlDOp168qBTpaYt79Np2xNh2URI7pI7FYqHrH8FQn6b7Bzg0AAAAAElFTkSuQmCC"
                      alt="Cityscape"
                      className="mb-4"
                      width={100}
                      height={100}
                      style={{ aspectRatio: "100 / 100", objectFit: "cover" }}
                    />
                    <h4 className="text-sm font-bold mb-2">Cityscape</h4>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
