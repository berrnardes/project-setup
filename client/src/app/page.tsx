"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function Home() {
	const [received, setReceived] = useState<string>("");
	const [text, setText] = useState<string>("");

	const { mutate: sendRequest } = useMutation({
		mutationFn: async (values: string) => {
			return await axios.post(
				"/test",
				{ values },
				{
					method: "POST",
					withCredentials: true,
					baseURL: "http://localhost:5000/",
				}
			);
		},
		onSuccess: (data) => {
			setReceived(data.data.response);
		},
	});

	return (
		<div className="h-full w-full flex items-center flex-col gap-4 justify-around">
			<h1 className="text-2xl">Project Setup</h1>

			<input
				onChange={(e) => setText(e.target.value)}
				value={text}
				type="text"
				placeholder="text"
			/>
			<Button onClick={() => sendRequest(text)}>Send to server</Button>

			<div>
				<h2>Received from server:</h2>
				<p>{received}</p>
			</div>
		</div>
	);
}
