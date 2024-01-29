import { RightArrow } from "../../components/page-icons/page-icons";

import * as Yup from "yup";
// form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";

import emailjs from "emailjs-com";
import TextField from "../../components/hook-form/TextField";
import TextArea from "../../components/hook-form/TextArea";
import { useSnackbar } from "../../components/snackbar";

export default function ContactMe({ state }) {
    const { enqueueSnackbar } = useSnackbar();

    const EmailSchema = Yup.object().shape({
        from_name: Yup.string().required("Name is required"),
        from_email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        message: Yup.string().required("Message is required"),
    });

    const defaultValues = {
        from_name: "",
        from_email: "",
        message: "",
    };

    const methods = useForm({
        resolver: yupResolver(EmailSchema),
        defaultValues,
    });

    const {
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = methods;

    const onSubmit = async (data) => {
        try {
            emailjs.send(
                "service_hppjwqo",
                "template_nrwm1po",
                data,
                "L0Khrhztnanju-wWI"
            );
            enqueueSnackbar("Sent!", { variant: "success" });
            reset();
        } catch (error) {}
    };

    return (
        <div
            className="contact"
            ref={(ref) => {
                state[2] = ref;
            }}
        >
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="m-auto w-8/12 sm:w-full space-y-6 text-justify font-body py-60">
                    <p className="text-white font-medium text-2xl text-center p-6">
                        Say Hi!
                    </p>
                    <div className="m-auto w-full lg:w-2/4 space-y-4">
                        <div>
                            <TextField
                                name="from_name"
                                placeholder="Name"
                                errors={errors}
                                className={`block 
                        w-full 
                        rounded-lg 
                        border-0 p-3 
                        text-gray-900 
                        shadow-sm
                        ${errors?.from_name?.message ? "ring-2" : "ring-1"} 
                        ring-inset 
                        ${
                            errors?.from_name?.message
                                ? "ring-red-600"
                                : "ring-gray-300"
                        }
                        placeholder:text-gray-400 
                        focus:ring-2 
                        focus:ring-inset 
                        ${
                            errors?.from_name?.message
                                ? "focus:ring-red-600"
                                : "focus:ring-[#5C8374]"
                        }
                        
                        outline-none
                        sm:text-sm 
                        sm:leading-6`}
                            />
                        </div>
                        <div>
                            <TextField
                                name="from_email"
                                placeholder="Email"
                                errors={errors}
                                className={`block 
                        w-full 
                        rounded-lg 
                        border-0 p-3 
                        text-gray-900 
                        shadow-sm
                        ring-1
                        ring-inset 
                        ring-gray-300
                        placeholder:text-gray-400 
                        focus:ring-2 
                        focus:ring-inset 
                        focus:ring-[#5C8374]
                        outline-none
                        sm:text-sm 
                        sm:leading-6`}
                            />
                        </div>
                        <div>
                            <TextArea
                                name="message"
                                cols="40"
                                rows="5"
                                placeholder="Message"
                                errors={errors}
                                className={`block 
                        w-full 
                        rounded-lg 
                        border-0 p-3 
                        text-gray-900 
                        shadow-sm
                        ring-1
                        ring-inset 
                        ring-gray-300
                        placeholder:text-gray-400 
                        focus:ring-2 
                        focus:ring-inset 
                        focus:ring-[#5C8374]
                        outline-none
                        sm:text-sm 
                        sm:leading-6`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="m-auto space-x-2 flex justify-center items-center text-[#183D3D] text-lg font-medium  border-4 border-[#183D3D] py-2 px-4 hover:text-[#93B1A6] hover:border-[#93B1A6]"
                        >
                            <SVG Icon={RightArrow} />
                            <p>Let's collaborate</p>
                        </button>
                    </div>
                </div>
            </FormProvider>
        </div>
    );
}

function SVG({ Icon }) {
    return <Icon />;
}
