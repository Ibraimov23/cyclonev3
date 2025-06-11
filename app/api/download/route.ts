import { NextResponse } from "next/server"

export async function GET() {
  const fileUrl = "https://github.com/Ibraimov23/cyclone.io/raw/master/public/downloads/cyclone.apk"

  const res = await fetch(fileUrl)

  if (!res.ok) {
    return new NextResponse("Failed to fetch file", { status: 500 })
  }

  const blob = await res.blob()

  return new NextResponse(blob.stream(), {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="cyclone.apk"',
    },
  })
}
