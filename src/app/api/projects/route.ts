import { NextRequest, NextResponse } from "next/server";
import { projectService } from "../../../backend/services/project.service";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || undefined;
  const search = searchParams.get("search") || undefined;
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? parseInt(limitParam, 10) : undefined;
  const featuredOnly = searchParams.get("featured") === "true";

  const result = await projectService.getProjects({
    category,
    search,
    limit,
    featuredOnly,
  });

  if (!result.success) {
    return NextResponse.json(result, { status: 500 });
  }

  return NextResponse.json(result, { status: 200 });
}
