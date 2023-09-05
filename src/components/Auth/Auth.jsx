const Auth = () => {
    return (
        <section className="text-white">
            <div className="pt-40 pb-20 px-4 flex flex-col gap-8">
                <section className="flex flex-col gap-8">
                    <header>
                        <h1 className="font-bold text-2xl pb-1">Log in</h1>
                        <p className="text-sm">
                            Enter your credentials to access your account
                        </p>
                    </header>

                    <button className="flex gap-4 items-center justify-center text-sm bg-transparent focus:outline-none border-[rgba(130,143,163,.25)] border 1 py-4 px-3 rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            preserveAspectRatio="xMidYMid"
                            viewBox="0 0 256 262"
                            id="google"
                        >
                            <path
                                fill="#4285F4"
                                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                            ></path>
                            <path
                                fill="#34A853"
                                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                            ></path>
                            <path
                                fill="#FBBC05"
                                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                            ></path>
                            <path
                                fill="#EB4335"
                                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                            ></path>
                        </svg>
                        Log in with Google
                    </button>
                    <span className="text-center text-[#828fa380] "> or </span>
                </section>

                <form action="" className="flex flex-col gap-8">
                    <label htmlFor="" className="flex flex-col">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm mb-2">
                            Email Address
                        </span>
                        <input
                            className="bg-transparent focus:outline-none border-[rgba(130,143,163,.25)] border 1 py-3 px-3 rounded-md text-sm"
                            type="email"
                            placeholder="name@company.com"
                        />
                    </label>

                    <label htmlFor="" className="flex flex-col">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                Password
                            </span>
                            <span className="text-[#a8a4ff]">
                                Forgot password?
                            </span>
                        </div>
                        <input
                            className="bg-transparent focus:outline-none border-[rgba(130,143,163,.25)] border 1 py-3 px-3 rounded-md text-sm"
                            type="password"
                            placeholder="name12345"
                        />
                    </label>

                    <p className="text-sm">
                        <span></span>
                        Remember information
                    </p>
                    <button className="bg-[#635fc7] py-4 rounded-md opacity-50">
                        Log in
                    </button>

                    <p className="text-sm">
                        Not a member?{" "}
                        <span className="text-sm text-[#a8a4ff]">Sign up</span>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Auth;
