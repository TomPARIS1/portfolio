"use client";
import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export function ContactForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const honeypot = formData.get("website");
        if (honeypot) {
            setFormSubmitted(true);
            return;
        }

        formData.delete("website");

        formData.append("access_key", "923fb011-75e1-4e4d-9deb-efd84dd11f23");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await response.json();

            if (result.success) {
                setFormSubmitted(true);
            } else {
                setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
            }
        } catch (error: any) {
            setErrorMessage("Une erreur est survenue lors de l'envoi du formulaire : " + error);
        }
    }

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-neutral-900">
            {formSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <span className="block sm:inline">Le formulaire a été envoyé avec succès.</span>
                </div>
            )}

            {errorMessage && (
                <div className="bg-red-500 border border-red-400 text-white text-center p-2 mb-4 rounded">
                    {errorMessage}
                </div>
            )}

            <form className="my-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">Prénom</Label>
                        <Input id="firstname" placeholder="Tyler" type="text" name="first_name" required />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Nom</Label>
                        <Input id="lastname" placeholder="Durden" type="text" name="last_name" required />
                    </LabelInputContainer>
                </div>
                
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" placeholder="firstrule@gmail.com" type="email" name="email" required />
                </LabelInputContainer>
                
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Sujet..." type="text" name="subject" required />
                </LabelInputContainer>
                
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                        id="message" 
                        placeholder="Message..." 
                        name="message" 
                        className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400 min-h-[80px]" 
                        required
                    />
                </LabelInputContainer>

                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{
                        position: 'absolute',
                        left: '-9999px',
                        width: '1px',
                        height: '1px',
                        opacity: 0,
                        pointerEvents: 'none'
                    }}
                    aria-hidden="true"
                />

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mb-8"
                    type="submit"
                >
                    Envoyer &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-white to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-white to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};