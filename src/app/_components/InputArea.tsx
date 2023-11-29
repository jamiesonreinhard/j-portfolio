// src/app/_components/InputArea.tsx
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ThreadMessagesPage } from "openai/resources/beta/threads/messages/messages.mjs";
import { mutate } from "swr";
import { useChatbotContext } from "../_contexts/ChatbotProvider";
import axios from 'axios';

interface FormFields {
    question: string;
}

function InputArea() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormFields>();
    const { threadId, setThreadId, setRunId } = useChatbotContext();

    const onSubmit = async (data: FormFields) => {

        mutate(
            `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/messages?threadId=${threadId}`,
            async (currentData: any) => {
                // This is part of an optimistic loading that shows user question immediately.
                const newMessage = {
                    id: "temp-id",
                    thread_id: threadId,
                    content: [{ text: { value: data.question } }],
                    role: "user",
                };
                return {
                    ...currentData,
                    data: [...(currentData?.data ?? []), newMessage],
                };
            },
            false
        )
        reset();

        const config = {
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/messages`,
            data: { ...data, threadId },
        };

        // Make the API request to create a run
        axios
            .post<{ runId: string; threadId: string }>(config.url, config.data)
            .then((response) => {
                setThreadId(response.data.threadId);
                setRunId(response.data.runId);
            })
            .catch((error) => {
                // Handle errors here
                console.error("Error creating a run:", error);
            });
    };

    return (
        <div className="sticky bottom-0 bg-white p-2">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center border rounded-[8px]"
            >
                <input
                    className="flex-grow p-2 border-0 text-dark rounded-[8px] focus:outline-0"
                    {...register("question", { required: true })}
                    placeholder="Type your message"
                />
                {errors.question && (
                    <span className="text-red-500">This field is required</span>
                )}
                <button
                    // disabled={isLoading ? true : false}
                    type="submit"
                    className="p-2 mr-2 text-white bg-primary rounded disabled:bg-gray-200"
                >
                    <svg
                        width="16"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.394 14.7L13.75 9.3c1-.577 1-2.02 0-2.598L4.394 1.299a1.5 1.5 0 00-2.25 1.3v3.438l4.059 1.088c.494.132.494.833 0 .966l-4.06 1.087v4.224a1.5 1.5 0 002.25 1.299z"
                            fill="#fff"
                        ></path>
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default InputArea;