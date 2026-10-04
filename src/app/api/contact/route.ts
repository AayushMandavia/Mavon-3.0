import { NextRequest, NextResponse } from "next/server";
import { contactService } from "../../../backend/services/contact.service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await contactService.handleContact(body);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 },
    );
  }
}
