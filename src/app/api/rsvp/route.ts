import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, attendance, message } = body;

    // TODO: STEP 1: Create a Google Form with 3 text fields (Short answer or Paragraph)
    // Field 1: Name
    // Field 2: Attendance (Attending / Blessings)
    // Field 3: Message

    // TODO: STEP 2: Get your Google Form Action URL
    // Open your Google Form, click "Send", click the Link icon, and open that link.
    // Inspect the page or view source to find the <form action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse">
    // Paste that URL below:
    // Replace with the user's form URL
    const GOOGLE_FORM_URL = process.env.GOOGLE_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLScUBMq-kcR0nHef_331gKrIClxh1ywPSm2rrxRKfUeW1Anl4w/formResponse";

    // Entry IDs mapped from the form
    const ENTRY_ID_NAME = process.env.GOOGLE_FORM_ENTRY_NAME || "entry.2033180059";
    const ENTRY_ID_ATTENDANCE = process.env.GOOGLE_FORM_ENTRY_ATTENDANCE || "entry.780414416";
    const ENTRY_ID_MESSAGE = process.env.GOOGLE_FORM_ENTRY_MESSAGE || "entry.50298111";

    if (!GOOGLE_FORM_URL) {
      console.log("No GOOGLE_FORM_URL found. Simulating successful submission.", { name, attendance, message });
      // Remove this artificial delay if you want it instant when testing
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, warning: "Google Form not configured yet." });
    }

    const formData = new URLSearchParams();
    formData.append(ENTRY_ID_NAME, name || "No Name Provided");
    formData.append(ENTRY_ID_ATTENDANCE, attendance === "attending" ? "Attending" : "Not Attending (Blessings)");
    formData.append(ENTRY_ID_MESSAGE, message || "");

    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors", // Google Forms requires no-cors for direct submission
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    return NextResponse.json(
      { error: "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}
