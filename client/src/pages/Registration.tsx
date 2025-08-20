import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
    receiptNumber: string;
    terms: boolean;
    privacy: boolean;
};

function Registration() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormValues>({
        mode: "onChange"
    });

    const [file, setFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string | null>(null);

    const onSubmit = (data: FormValues) => {
        if (!file) {
            setFileError("Please upload your receipt");
            return;
        }

        console.log("Form data:", data);
        console.log("Uploaded file:", file);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (uploadedFile) {
            if (
                uploadedFile.size > 5 * 1024 * 1024 ||
                !["image/jpeg", "image/png", "application/pdf"].includes(uploadedFile.type)
            ) {
                setFileError("Invalid format. Only JPG, PNG, or PDF up to 5MB.");
                setFile(null);
            } else {
                setFileError(null);
                setFile(uploadedFile);
            }
        }
    };

    return (
        <div className="center">
            <h1 style={{ marginBottom: "15px" }}>Upload your receipt</h1>
            <h3>Upload a photo of your receipt showing the Ferrero Rocher product and the receipt number </h3>

            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: "0 auto" }}>
                {/* File upload */}
                <div style={{ marginBottom: 20 }}>
                    <label>Receipt picture*</label>
                    <input type="file" accept="image/*,.pdf" onChange={handleFileChange} />
                    {file && <p>✅ {file.name}</p>}
                    {fileError && <p style={{ color: "red" }}>{fileError}</p>}
                </div>

                {/* Receipt number */}
                <div style={{ marginBottom: 20 }}>
                    <label htmlFor="receiptNumber">Receipt number*</label>
                    <input
                        id="receiptNumber"
                        {...register("receiptNumber", { required: "Receipt number is required" })}
                        placeholder="Insert receipt number"
                    />
                    {errors.receiptNumber && (
                        <p style={{ color: "red" }}>{errors.receiptNumber.message}</p>
                    )}
                </div>

                {/* Checkboxes */}
                <div style={{ marginBottom: 10 }}>
                    <input type="checkbox" id="terms" {...register("terms", { required: true })} />
                    <label htmlFor="terms"> I have read the terms & conditions</label>
                    {errors.terms && <p style={{ color: "red" }}>You must accept terms</p>}
                </div>

                <div style={{ marginBottom: 20 }}>
                    <input type="checkbox" id="privacy" {...register("privacy", { required: true })} />
                    <label htmlFor="privacy"> I have read the privacy policy</label>
                    {errors.privacy && <p style={{ color: "red" }}>You must accept privacy policy</p>}
                </div>

                {/* Submit */}
                <button type="submit" disabled={!isValid || !file}>
                    Continue
                </button>
            </form>
        </div>
    )
}

export default Registration
