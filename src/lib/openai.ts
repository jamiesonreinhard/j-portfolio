// src/lib/openai.ts
import OpenAI from "openai";
import fs from "fs";
const secretKey = process.env.OPENAI_API_KEY;
const assistantId = process.env.OPENAI_ASSISTANT_ID;

export const openai = new OpenAI({
    apiKey: secretKey,
});

// Database for storing assistant ID.
const assistantIdFilePath = "assistantId.txt";

export const createAssistant = async () => {
    // Use the assistant ID from the environment variables
    if (assistantId) {
        return { id: assistantId };
    }

    // If the assistant ID is not found in the environment variables, create a new assistant as before
    const assistantInstance = await openai.beta.assistants.create({
        instructions:
            "You are an expert on Jamieson Reinhard. You use all kinds of documents about Jamieson as well as any information from the web to answer peoples' questions about him.",
        name: "Jamieson Reinhard Expert",
        tools: [{ type: "retrieval" }],
        model: "gpt-3.5-turbo-1106",
    });

    // Save the assistant ID to the .env file
    fs.writeFileSync(assistantIdFilePath, assistantInstance.id);

    return assistantInstance;
};

export const createThread = async (threadId: string | undefined) => {
    try {
        if (threadId) {
            return await openai.beta.threads.retrieve(threadId);
        }
        return await openai.beta.threads.create();
    } catch (error: any) {
        throw error;
    }
};

export const getMessagesForThread = async (threadId: string) => {
    const messages = await openai.beta.threads.messages.list(threadId);
    console.log(messages);
    
    return messages;
};

export const addMessageToThread = async (
    threadId: string,
    question: string
) => {
    await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: question,
    });
};

export const createRun = async (assistantId: string, threadId: string) => {
    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
    });
    return run;
};

export const statusOfRun = async (threadId: string, runId: string) => {
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    console.log(runStatus);
    
    return runStatus.status;
};

export const createThreadAndRun = async (
    threadId: string | undefined,
    question: string
) => {
    const myAssistant = await createAssistant();
    const thread = await createThread(threadId);
    await addMessageToThread(thread.id, question);
    const run = await createRun(myAssistant.id, thread.id);
    return { run, thread };
};