import { useFormContext, Controller } from "react-hook-form";

export default function TextField({
    name,
    className,
    placeholder,
    errors,
    type,
    ...other
}) {
    const { control } = useFormContext();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        id={name}
                        name={name}
                        type={type}
                        autoComplete={name}
                        placeholder={placeholder}
                        className={className}
                    />
                )}
            />
            <label className="block text-xs font-normal leading-6 text-red-600">
                {errors ? errors[name]?.message : ""}
            </label>
        </>
    );
}
