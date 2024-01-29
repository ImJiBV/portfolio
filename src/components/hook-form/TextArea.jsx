import { useFormContext, Controller } from "react-hook-form";

export default function TextArea({
    name,
    className,
    placeholder,
    errors,
    cols,
    rows,
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
                    <textarea
                        {...field}
                        id={name}
                        name={name}
                        type={type}
                        autoComplete={name}
                        placeholder={placeholder}
                        className={className}
                        cols={cols}
                        rows={rows}
                    />
                )}
            />
            <label className="block text-xs font-normal leading-6 text-red-600">
                {errors ? errors[name]?.message : ""}
            </label>
        </>
    );
}
