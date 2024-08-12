import { getDb } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const db = getDb()
  const users = db.prepare('SELECT * FROM users').all()
  return NextResponse.json(users)
}

export async function POST(request) {
  const { name, email } = await request.json()
  const db = getDb()
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
  const result = stmt.run(name, email)
  return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 })
}