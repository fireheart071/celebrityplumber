import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    const apiKey = process.env.ARKESEL_API_KEY;
    const senderId = process.env.ARKESEL_SENDER_ID || "CelebrityPl";
    const recipient = process.env.RECEIVER_PHONE_NUMBER;

    // If env keys are missing, we log a warning and return mock success to prevent UI crashing
    if (!apiKey || !recipient) {
      console.warn("Arkesel credentials not configured. SMS notification skipped.");
      return NextResponse.json({ success: true, mock: true });
    }

    const smsText = `New Job! Name: ${name}. Phone: ${phone}. Msg: ${message}`;

    const response = await fetch("https://sms.arkesel.com/api/v2/sms/send", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: senderId.substring(0, 11),
        message: smsText,
        recipients: [recipient],
      }),
    });

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("SMS Sending Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
