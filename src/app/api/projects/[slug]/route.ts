import { NextRequest, NextResponse } from "next/server";
import { projectService } from "../../../../backend/services/project.service";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const result = await projectService.getProjectBySlug(slug);

  if (!result.success) {
    return NextResponse.json(result, { status: 404 });
  }

  return NextResponse.json(result, { status: 200 });
}
