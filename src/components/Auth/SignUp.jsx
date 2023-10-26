import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { supabase } from "../../superbaseClient";
import demoDark from "../../assets/demo-dark.png";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function onSubmit(formData) {
        try {
            const { error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });
            if (error) throw error;
            console.log("check your email for verification link");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="text-white lg:grid lg:grid-cols-[40%_60%] h-full">
            <div className="px-4 pt-32 pb-20 md:px-20 md:pt-28 lg:pt-10">
                <section className="flex flex-col gap-8">
                    <header>
                        <h1 className="pb-1 text-2xl font-bold">Sign up</h1>
                        <p className="text-sm">
                            Enter your credentials to access your account
                        </p>
                    </header>

                    <button
                        className="flex gap-4 items-center justify-center text-sm bg-transparent focus:outline-none
                     border-[rgba(130,143,163,.25)] border 1 py-4 px-3 rounded-md"
                    >
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
                                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69
                                 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                            ></path>
                            <path
                                fill="#34A853"
                                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257
                                 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                            ></path>
                            <path
                                fill="#FBBC05"
                                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697
                                 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925
                                  58.602l42.356-32.782"
                            ></path>
                            <path
                                fill="#EB4335"
                                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798
                                 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                            ></path>
                        </svg>
                        Sign up with Google
                    </button>
                    <span className="text-center text-[#828fa380] "> or </span>
                </section>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm mb-2">
                            Email Address
                        </span>
                        <input
                            className="bg-transparent focus:outline-none border-[rgba(130,143,163,.25)]
                             border 1 py-3 px-3 rounded-md text-sm"
                            type="email"
                            {...register("email", {
                                required: "Email Address is required",
                            })}
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder="mail@company.com"
                        />
                        {errors.email && (
                            <p className="text-xs pt-1 text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </label>

                    <label className="flex flex-col">
                        <div className="mb-2 text-sm">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                Password
                            </span>
                        </div>
                        <input
                            className="bg-transparent focus:outline-none border-[rgba(130,143,163,.25)]
                             border 1 py-3 px-3 rounded-md text-sm"
                            type="password"
                            {...register("password", {
                                required: "password can't be empty",
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
                            placeholder="lex043"
                        />
                        {errors.password && (
                            <p className="text-xs pt-1 text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </label>

                    <button className="bg-[#635fc7] py-4 rounded-md">
                        Sign up
                    </button>

                    <p className="text-sm">
                        Already a member?{" "}
                        <Link
                            to="/"
                            className="text-sm text-[#a8a4ff] cursor-pointer"
                        >
                            Log in
                        </Link>
                    </p>
                </form>
            </div>

            <section className="hidden lg:flex flex-col bg-[#20212c] h-full min-h-screen pt-10 overflow-hidden">
                <div className="pl-20">
                    <h1 className="text-2xl">
                        &quot;If at first, you don&apos;t succeed, skydiving is
                        not for you.&quot;
                    </h1>
                    <p className="py-2">-Unknown</p>
                </div>
                <figure className="relative top-20 left-20">
                    <img
                        src={demoDark}
                        alt="demo dark"
                        className="rounded-lg"
                    />
                </figure>
            </section>
        </section>
    );
};

export default SignUp;
